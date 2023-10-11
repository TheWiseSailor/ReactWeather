import React from "react";

const WeatherForecast = ({ forecastData }) => {
  return (
    <div className="weather-forecast">
      <h4>5-Day Forecast</h4>
      {forecastData.map((forecast, index) => (
        <div key={index} className="forecast-item">
          <p>Date: {forecast.date}</p>
          <img src={forecast.icon} alt="Weather Icon" />
          <p>Temperature: {forecast.temperature}°F</p>
          <p>Humidity: {forecast.humidity}%</p>
        </div>
      ))}
    </div>
  );
};

export default WeatherForecast;
