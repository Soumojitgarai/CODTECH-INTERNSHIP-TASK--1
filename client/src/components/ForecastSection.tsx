import { ForecastDay, Units } from "@/lib/types";
import WeatherIcon from "./WeatherIcon";

interface ForecastSectionProps {
  forecast: ForecastDay[];
  units: Units;
}

export default function ForecastSection({ forecast, units }: ForecastSectionProps) {
  return (
    <div className="bg-gradient-to-br from-secondary to-primary text-white md:w-1/3 p-6 flex flex-col justify-between">
      <div>
        <h3 className="font-medium mb-2">5-Day Forecast</h3>
        <p className="text-sm text-white/70 mb-4">Check the weather for the upcoming days</p>
      </div>

      {forecast.map((day, index) => (
        <div 
          key={day.date}
          className={`py-2 flex justify-between items-center ${
            index < forecast.length - 1 ? "border-b border-white/20" : ""
          }`}
        >
          <span>{day.name}</span>
          <div className="flex items-center">
            <span className="mr-2">{day.temp}°{units.temp}</span>
            <WeatherIcon iconCode={day.icon} size="sm" />
          </div>
        </div>
      ))}
    </div>
  );
}
