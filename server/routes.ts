import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { getWeatherData, getForecasts, getAirQuality } from "./services/weatherService";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Weather API route
  app.get("/api/weather", async (req, res) => {
    try {
      const locationSchema = z.object({
        location: z.string().min(1).max(100),
      });

      const query = locationSchema.safeParse({ location: req.query.location });
      
      if (!query.success) {
        return res.status(400).json({ message: "Invalid location parameter" });
      }

      const { location } = query.data;
      
      // Get current weather data
      const weatherData = await getWeatherData(location);
      
      if (!weatherData) {
        return res.status(404).json({ message: `Weather data not found for ${location}` });
      }
      
      // Get forecast data
      const forecastData = await getForecasts(weatherData.coord.lat, weatherData.coord.lon);
      
      // Get air quality data
      const airQualityData = await getAirQuality(weatherData.coord.lat, weatherData.coord.lon);
      
      const formattedDate = new Date().toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
      
      const formatTime = (timestamp: number) => {
        return new Date(timestamp * 1000).toLocaleTimeString('en-US', {
          hour: 'numeric',
          minute: '2-digit',
          hour12: true
        });
      };
      
      // Format response
      const formattedResponse = {
        location: {
          name: weatherData.name,
          country: weatherData.sys.country,
          lat: weatherData.coord.lat,
          lon: weatherData.coord.lon
        },
        current: {
          date: formattedDate,
          temp: Math.round(weatherData.main.temp),
          feelsLike: Math.round(weatherData.main.feels_like),
          humidity: weatherData.main.humidity,
          pressure: weatherData.main.pressure,
          windSpeed: Math.round(weatherData.wind.speed * 10) / 10,
          visibility: weatherData.visibility / 1000, // Convert to km
          sunrise: formatTime(weatherData.sys.sunrise),
          sunset: formatTime(weatherData.sys.sunset),
          weather: {
            id: weatherData.weather[0].id,
            main: weatherData.weather[0].main,
            description: weatherData.weather[0].description,
            icon: weatherData.weather[0].icon
          }
        },
        forecast: forecastData.daily.slice(0, 5).map((day, index) => {
          const date = new Date();
          date.setDate(date.getDate() + index + 1);
          return {
            date: date.toISOString().split('T')[0],
            name: date.toLocaleDateString('en-US', { weekday: 'long' }),
            temp: Math.round(day.temp.day),
            icon: day.weather[0].icon,
            description: day.weather[0].description
          };
        }),
        hourly: forecastData.hourly.slice(0, 8).map((hour, index) => {
          const time = index === 0 ? 'Now' : new Date(hour.dt * 1000).toLocaleTimeString('en-US', {
            hour: 'numeric',
            hour12: true
          });
          return {
            time,
            temp: Math.round(hour.temp),
            icon: hour.weather[0].icon
          };
        }),
        airQuality: {
          aqi: airQualityData.list[0].main.aqi * 20, // Convert 1-5 scale to AQI (approximate)
          co2: Math.round(airQualityData.list[0].components.co),
          pm25: Math.round(airQualityData.list[0].components.pm2_5),
          pm10: Math.round(airQualityData.list[0].components.pm10)
        },
        units: {
          temp: 'F',  // Using imperial units by default
          speed: 'mph'
        }
      };
      
      res.json(formattedResponse);
    } catch (error) {
      console.error('Weather API error:', error);
      res.status(500).json({ 
        message: "Failed to fetch weather data", 
        details: error instanceof Error ? error.message : "Unknown error" 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
