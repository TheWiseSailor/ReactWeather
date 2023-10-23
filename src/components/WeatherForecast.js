import React from "react";
import "../components/styles/App.css";

const WeatherForecast = ({ forecastData }) => {
  return (
    <div className=" p-4 rounded  text-center m-2">
      <h4 className="text-xl font-semibold ">5-Day Forecast</h4>

      <div className="flex flex-wrap justify-center items-center p-4">
        {forecastData.map((forecast, index) => (
          <div
            key={index}
            className="bg-blue-100 text-black p-4 rounded-xl  text-center m-2 mb-12"
          >
            <p className="text-lg">Date: {forecast.date}</p>
            <img src={forecast.icon} alt="Weather Icon" className="w-10" />
            <p className="text-lg">Temperature: {forecast.temperature}°F</p>
            <p className="text-lg">Humidity: {forecast.humidity}%</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeatherForecast;
