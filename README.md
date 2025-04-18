# ☁️ Weather Dashboard

A beautiful, responsive weather dashboard application that provides real-time weather information for any location around the world.


## ✨ Features

- **Location Search**: Easily search for weather in any city worldwide
- **Current Weather**: View current temperature, feels-like temperature, and weather conditions
- **Detailed Metrics**: Check humidity, wind speed, visibility, pressure, sunrise, and sunset times
- **5-Day Forecast**: Plan ahead with a 5-day weather forecast
- **Hourly Forecast**: Hour-by-hour weather predictions for the next 8 hours
- **Air Quality Index**: Monitor air quality with detailed pollution metrics
- **Responsive Design**: Beautiful interface that works on mobile, tablet, and desktop
- **Error Handling**: Graceful error states when location isn't found or API issues occur
- **Loading States**: Smooth loading indicators during data fetching

## 🚀 Tech Stack

### Frontend
- **React**: UI component library
- **TypeScript**: Type-safe JavaScript
- **TanStack Query (React Query)**: Data fetching and state management
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Beautiful, consistent icon set
- **shadcn/ui**: High-quality UI components built with Radix UI and Tailwind
- **React Hook Form**: Form validation and handling

### Backend
- **Node.js**: JavaScript runtime
- **Express**: Web server framework
- **Zod**: Schema validation
- **node-fetch**: HTTP requests to external APIs

### API Integration
- **OpenWeatherMap API**: Source for weather and air quality data
  - Current Weather
  - One Call API (forecast)
  - Air Pollution API

### Development Tools
- **Vite**: Fast, modern build tool
- **ESBuild**: JavaScript bundler
- **TSX**: TypeScript executor

## 📋 Getting Started

### Prerequisites
- Node.js (v18+)
- OpenWeatherMap API key (get one for free at [openweathermap.org](https://openweathermap.org/api))

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/weather-dashboard.git
   cd weather-dashboard
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory with your API key:
   ```
   OPENWEATHER_API_KEY=your_api_key_here
   ```

4. Start the development server
   ```bash
   npm run dev
   ```

5. Open your browser and navigate to `http://localhost:5000`




## 🔜 Future Enhancements

- **Unit Toggle**: Switch between metric and imperial units
- **Dark Mode**: Toggle between light and dark themes
- **Weather Maps**: Interactive weather maps showing precipitation, temperature, and wind
- **User Accounts**: Save favorite locations and preferences
- **Weather Alerts**: Notifications for severe weather conditions
- **Historical Data**: View past weather data for comparison

## 🙏 Acknowledgements

- [OpenWeatherMap](https://openweathermap.org/) for providing the weather data API
- [shadcn/ui](https://ui.shadcn.com/) for the beautiful component library
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Lucide](https://lucide.dev/) for the icon set
