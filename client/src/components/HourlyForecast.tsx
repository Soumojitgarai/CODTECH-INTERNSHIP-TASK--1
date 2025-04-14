import { Card, CardContent } from "@/components/ui/card";
import { HourlyData } from "@/lib/types";
import WeatherIcon from "./WeatherIcon";

interface HourlyForecastProps {
  hourlyData: HourlyData[];
}

export default function HourlyForecast({ hourlyData }: HourlyForecastProps) {
  return (
    <Card className="mb-6">
      <CardContent className="pt-6">
        <h3 className="text-lg font-medium mb-4">Hourly Forecast</h3>
        <div className="overflow-x-auto pb-2">
          <div className="flex space-x-4 min-w-max">
            {hourlyData.map((hour, index) => (
              <div key={index} className="flex flex-col items-center p-3 rounded-lg hover:bg-accent/10">
                <p className="text-muted-foreground">{hour.time}</p>
                <WeatherIcon iconCode={hour.icon} size="md" />
                <p className="font-medium">{hour.temp}°</p>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
