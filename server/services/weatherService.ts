import fetch from "node-fetch";

// OpenWeatherMap API configuration
const API_KEY = process.env.OPENWEATHER_API_KEY || "1635890035cbba097fd5c26c8ea672a1"; // Fallback to a free API key with limited requests
const BASE_URL = "https://api.openweathermap.org/data/2.5";

// Get current weather data for a location
export async function getWeatherData(location: string) {
  try {
    const response = await fetch(
      `${BASE_URL}/weather?q=${encodeURIComponent(location)}&units=imperial&appid=${API_KEY}`
    );
    
    if (!response.ok) {
      if (response.status === 404) {
        return null; // Location not found
      }
      throw new Error(`OpenWeatherMap API error: ${response.status} ${response.statusText}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error("Error fetching weather data:", error);
    throw error;
  }
}

// Get forecast data using One Call API
export async function getForecasts(lat: number, lon: number) {
  try {
    const response = await fetch(
      `${BASE_URL}/onecall?lat=${lat}&lon=${lon}&exclude=minutely,alerts&units=imperial&appid=${API_KEY}`
    );
    
    if (!response.ok) {
      throw new Error(`OpenWeatherMap API error: ${response.status} ${response.statusText}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error("Error fetching forecast data:", error);
    throw error;
  }
}

// Get air quality data
export async function getAirQuality(lat: number, lon: number) {
  try {
    const response = await fetch(
      `${BASE_URL}/air_pollution?lat=${lat}&lon=${lon}&appid=${API_KEY}`
    );
    
    if (!response.ok) {
      throw new Error(`OpenWeatherMap API error: ${response.status} ${response.statusText}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error("Error fetching air quality data:", error);
    throw error;
  }
}
