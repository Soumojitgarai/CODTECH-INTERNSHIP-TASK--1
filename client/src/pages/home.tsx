import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";
import SearchBar from "@/components/SearchBar";
import CurrentWeather from "@/components/CurrentWeather";
import HourlyForecast from "@/components/HourlyForecast";
import AirQuality from "@/components/AirQuality";
import LoadingState from "@/components/LoadingState";
import ErrorState from "@/components/ErrorState";
import { WeatherData } from "@/lib/types";
import { RefreshCw, Cloud } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  const [location, setLocation] = useState<string>("New York");
  const { toast } = useToast();

  const {
    data: weatherData,
    isLoading,
    error,
    refetch,
    isError,
  } = useQuery<WeatherData>({
    queryKey: [`/api/weather?location=${encodeURIComponent(location)}`],
    enabled: !!location,
  });

  const handleSearch = (newLocation: string) => {
    if (!newLocation.trim()) {
      toast({
        title: "Location required",
        description: "Please enter a valid location",
        variant: "destructive",
      });
      return;
    }
    setLocation(newLocation);
  };

  const handleRefresh = () => {
    refetch();
    toast({
      title: "Refreshing data",
      description: "Weather data is being updated",
    });
  };

  return (
    <div className="bg-background font-sans text-foreground min-h-screen">
      <div className="max-w-5xl mx-auto p-4 sm:p-6">
        {/* Header */}
        <header className="mb-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h1 className="text-2xl font-bold flex items-center">
                <Cloud className="mr-2 text-primary" />
                Weather Dashboard
              </h1>
              <p className="text-muted-foreground mt-1">
                Get real-time weather updates for any location
              </p>
            </div>
            <Button 
              variant="default" 
              onClick={handleRefresh} 
              disabled={isLoading}
              className="flex items-center gap-2"
            >
              <RefreshCw className="h-4 w-4" />
              Refresh
            </Button>
          </div>
        </header>

        {/* Search Bar */}
        <SearchBar 
          defaultLocation={location} 
          onSearch={handleSearch} 
          disabled={isLoading} 
        />

        {/* Weather Content */}
        {isLoading && <LoadingState />}
        
        {isError && (
          <ErrorState 
            message={(error as Error)?.message || "Failed to fetch weather data"} 
            onRetry={() => refetch()} 
          />
        )}

        {!isLoading && !isError && weatherData && (
          <>
            <CurrentWeather data={weatherData} />
            <HourlyForecast hourlyData={weatherData.hourly} />
            <AirQuality airQualityData={weatherData.airQuality} />
          </>
        )}

        {/* Footer */}
        <footer className="mt-8 text-center text-muted-foreground text-sm py-4 border-t border-border">
          <p>
            Weather data provided by{" "}
            <a
              href="https://openweathermap.org/"
              className="text-primary hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              OpenWeather API
            </a>
          </p>
          <p className="mt-1">© {new Date().getFullYear()} Weather Dashboard</p>
        </footer>
      </div>
    </div>
  );
}
