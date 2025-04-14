interface WeatherIconProps {
  iconCode: string;
  size?: "sm" | "md" | "lg";
}

export default function WeatherIcon({ iconCode, size = "md" }: WeatherIconProps) {
  const sizes = {
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-16 h-16"
  };
  
  const iconUrl = `https://openweathermap.org/img/wn/${iconCode}${size === "lg" ? "@2x" : ""}.png`;
  
  return (
    <img 
      src={iconUrl} 
      alt="Weather icon" 
      className={sizes[size]} 
    />
  );
}
