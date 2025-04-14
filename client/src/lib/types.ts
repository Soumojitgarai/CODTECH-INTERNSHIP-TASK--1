export interface WeatherData {
  location: {
    name: string;
    country: string;
    lat: number;
    lon: number;
  };
  current: {
    date: string;
    temp: number;
    feelsLike: number;
    humidity: number;
    pressure: number;
    windSpeed: number;
    visibility: number;
    sunrise: string;
    sunset: string;
    weather: {
      id: number;
      main: string;
      description: string;
      icon: string;
    };
  };
  forecast: ForecastDay[];
  hourly: HourlyData[];
  airQuality: AirQualityData;
  units: Units;
}

export interface ForecastDay {
  date: string;
  name: string;
  temp: number;
  icon: string;
  description: string;
}

export interface HourlyData {
  time: string;
  temp: number;
  icon: string;
}

export interface AirQualityData {
  aqi: number;
  co2: number;
  pm25: number;
  pm10: number;
}

export interface Units {
  temp: string;
  speed: string;
}
