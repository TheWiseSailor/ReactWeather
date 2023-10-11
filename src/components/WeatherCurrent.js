import React from "react";

const WeatherCurrent = () => {
  // You can use state or props to display the current weather information
  const city = "New York"; // Example city
  const temperature = 72.5; // Example temperature

  return (
    <div className="weather-current">
      <h2>
        {city} (<span>Today's Date</span>)
      </h2>
      <p>Temperature: {temperature}°F</p>
      {/* Display other weather information here */}
    </div>
  );
};

export default WeatherCurrent;
