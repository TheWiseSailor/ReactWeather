import React, { useState } from "react";

const WeatherSearch = () => {
  const [city, setCity] = useState("");

  const handleSearch = () => {
    // Implement your search logic here
    console.log(`Searching for city: ${city}`);
  };

  return (
    <div className="weather-search">
      <input
        type="text"
        placeholder="Search for a city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default WeatherSearch;
