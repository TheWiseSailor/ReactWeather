import React from "react";

const WeatherForecast = ({ forecastData }) => {
  return (
    <div className="bg-blue-100 p-4 rounded shadow-md">
      <h4 className="text-xl font-semibold">5-Day Forecast</h4>
      {forecastData.map((forecast, index) => (
        <div key={index} className="mt-4">
          <p className="text-lg">Date: {forecast.date}</p>
          <img src={forecast.icon} alt="Weather Icon" className="w-10" />
          <p className="text-lg">Temperature: {forecast.temperature}°F</p>
          <p className="text-lg">Humidity: {forecast.humidity}%</p>
        </div>
      ))}
    </div>
  );
};

export default WeatherForecast;
