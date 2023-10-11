import React from "react";

const CurrentWeather = ({ weather }) => {
  return (
    <div className="Weather-Current">
      <h2>
        {weather.city} (<span>{weather.date}</span>)
      </h2>
      <p>Temperature: {weather.temperature}°F</p>
      <p>Humidity: {weather.humidity}%</p>
      <p>Wind Speed: {weather.windSpeed} MPH</p>
      <p>
        UV Index:{" "}
        <span
          className={`${
            weather.uvIndex < 3
              ? "bg-green-500"
              : weather.uvIndex < 6
              ? "bg-yellow-500"
              : "bg-red-500"
          } py-1 px-2 rounded`}
        >
          {weather.uvIndex}
        </span>
      </p>
    </div>
  );
};

export default CurrentWeather;
