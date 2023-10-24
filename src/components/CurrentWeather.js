import React from "react";
import "../components/styles/App.css";

const CurrentWeather = ({ weather }) => {
  return (
    <div className="flex justify-center items-center">
      <div className="bg-blue-100 text-black p-4 rounded-xl shadow-md text-center">
        {/* Display the "Today's Weather" heading */}
        <div className="text-center text-2xl font-semibold">Todays Weather</div>

        {/* Display the city name and date */}
        <h2 className="text-2xl font-semibold mt-8">
          {weather.city} (<span className="text-gray-600">{weather.date}</span>)
        </h2>

        {/* Display temperature */}
        <p className="text-lg">Temperature: {weather.temperature}°F</p>

        {/* Display humidity */}
        <p className="text-lg">Humidity: {weather.humidity}%</p>

        {/* Display wind speed */}
        <p className="text-lg mb-2">Wind Speed: {weather.windSpeed} MPH</p>

        {/* Display UV Index with dynamic styling based on its value */}
        <p className="text-lg">
          UV Index:{" "}
          <span
            className={`${
              weather.uvIndex < 3
                ? "bg-green-500"
                : weather.uvIndex < 6
                ? "bg-yellow-500"
                : "bg-red-500"
            } py-1 px-2 rounded-xl text-white  `}
          >
            {weather.uvIndex}
          </span>
        </p>
      </div>
    </div>
  );
};

export default CurrentWeather;
