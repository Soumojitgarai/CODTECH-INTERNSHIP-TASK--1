import { Card } from "@/components/ui/card";
import { WeatherData } from "@/lib/types";
import WeatherIcon from "./WeatherIcon";
import ForecastSection from "./ForecastSection";
import { Droplet, Wind, Eye, Compass, Sunrise, Sunset } from "lucide-react";

interface CurrentWeatherProps {
  data: WeatherData;
}

export default function CurrentWeather({ data }: CurrentWeatherProps) {
  const { current, forecast, location } = data;

  return (
    <Card className="mb-6 overflow-hidden">
      <div className="flex flex-col md:flex-row">
        <div className="p-6 md:w-2/3">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h2 className="text-xl font-semibold mb-1">{location.name}, {location.country}</h2>
              <p className="text-muted-foreground">{current.date}</p>
            </div>
            <div className="text-right">
              <span className="text-4xl font-bold">{current.temp}°{data.units.temp}</span>
              <p className="text-muted-foreground">Feels like: {current.feelsLike}°{data.units.temp}</p>
            </div>
          </div>
          
          <div className="flex items-center mb-6">
            <div className="mr-4">
              <WeatherIcon iconCode={current.weather.icon} size="lg" />
            </div>
            <div>
              <h3 className="text-lg font-medium">{current.weather.main}</h3>
              <p className="text-muted-foreground text-sm">{current.weather.description}</p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            <div className="flex items-center">
              <Droplet className="text-primary text-lg mr-2 h-5 w-5" />
              <div>
                <p className="text-muted-foreground text-sm">Humidity</p>
                <p className="font-medium">{current.humidity}%</p>
              </div>
            </div>
            <div className="flex items-center">
              <Wind className="text-primary text-lg mr-2 h-5 w-5" />
              <div>
                <p className="text-muted-foreground text-sm">Wind</p>
                <p className="font-medium">{current.windSpeed} {data.units.speed}</p>
              </div>
            </div>
            <div className="flex items-center">
              <Eye className="text-primary text-lg mr-2 h-5 w-5" />
              <div>
                <p className="text-muted-foreground text-sm">Visibility</p>
                <p className="font-medium">{current.visibility} km</p>
              </div>
            </div>
            <div className="flex items-center">
              <Compass className="text-primary text-lg mr-2 h-5 w-5" />
              <div>
                <p className="text-muted-foreground text-sm">Pressure</p>
                <p className="font-medium">{current.pressure} hPa</p>
              </div>
            </div>
            <div className="flex items-center">
              <Sunrise className="text-primary text-lg mr-2 h-5 w-5" />
              <div>
                <p className="text-muted-foreground text-sm">Sunrise</p>
                <p className="font-medium">{current.sunrise}</p>
              </div>
            </div>
            <div className="flex items-center">
              <Sunset className="text-primary text-lg mr-2 h-5 w-5" />
              <div>
                <p className="text-muted-foreground text-sm">Sunset</p>
                <p className="font-medium">{current.sunset}</p>
              </div>
            </div>
          </div>
        </div>
        
        <ForecastSection forecast={forecast} units={data.units} />
      </div>
    </Card>
  );
}
