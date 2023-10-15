import React, { useState } from "react";

const WeatherSearch = ({ onSearch }) => {
  const [city, setCity] = useState("");

  const handleSearch = () => {
    onSearch(city);
    setCity("");
  };

  return (
    <div className="flex flex-col items-center h-screen justify-center">
      <div className="mb-4 text-xl font-bold">Welcome to Weather DashBoard</div>
      <div className="flex justify-center items-center">
        <input
          type="text"
          placeholder="Search for a city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="w-60 p-2 border rounded mr-4"
        />
        <button
          onClick={handleSearch}
          className="bg-blue-500 hover-bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default WeatherSearch;
