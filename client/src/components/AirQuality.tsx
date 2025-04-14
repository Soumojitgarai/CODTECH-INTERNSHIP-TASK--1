import { Card, CardContent } from "@/components/ui/card";
import { AirQualityData } from "@/lib/types";

interface AirQualityProps {
  airQualityData: AirQualityData;
}

// Function to determine AQI level and color
const getAqiInfo = (aqi: number) => {
  if (aqi <= 50) return { level: "Good", color: "bg-green-100 text-green-700" };
  if (aqi <= 100) return { level: "Moderate", color: "bg-yellow-100 text-yellow-700" };
  if (aqi <= 150) return { level: "Unhealthy for Sensitive Groups", color: "bg-orange-100 text-orange-700" };
  if (aqi <= 200) return { level: "Unhealthy", color: "bg-red-100 text-red-700" };
  if (aqi <= 300) return { level: "Very Unhealthy", color: "bg-purple-100 text-purple-700" };
  return { level: "Hazardous", color: "bg-red-200 text-red-900" };
};

export default function AirQuality({ airQualityData }: AirQualityProps) {
  const aqiInfo = getAqiInfo(airQualityData.aqi);

  return (
    <Card>
      <CardContent className="pt-6">
        <h3 className="text-lg font-medium mb-4">Air Quality</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="border border-border rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-muted-foreground text-sm">Air Quality Index</span>
              <span className={`px-2 py-1 ${aqiInfo.color} rounded-full text-xs font-medium`}>
                {aqiInfo.level}
              </span>
            </div>
            <div className="flex items-center">
              <span className="text-2xl font-bold mr-2">{airQualityData.aqi}</span>
              <span className="text-muted-foreground text-sm">AQI</span>
            </div>
          </div>
          
          <div className="border border-border rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-muted-foreground text-sm">CO₂</span>
            </div>
            <div className="flex items-center">
              <span className="text-2xl font-bold mr-2">{airQualityData.co2}</span>
              <span className="text-muted-foreground text-sm">ppm</span>
            </div>
          </div>
          
          <div className="border border-border rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-muted-foreground text-sm">PM2.5</span>
            </div>
            <div className="flex items-center">
              <span className="text-2xl font-bold mr-2">{airQualityData.pm25}</span>
              <span className="text-muted-foreground text-sm">μg/m³</span>
            </div>
          </div>
          
          <div className="border border-border rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-muted-foreground text-sm">PM10</span>
            </div>
            <div className="flex items-center">
              <span className="text-2xl font-bold mr-2">{airQualityData.pm10}</span>
              <span className="text-muted-foreground text-sm">μg/m³</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
