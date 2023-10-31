import React, { useState } from "react";
import "../components/styles/App.css";

// Create and append a link element for AOS CSS
const link = document.createElement("link");
link.rel = "stylesheet";
link.href = "https://cdn.rawgit.com/michalsnik/aos/2.1.1/dist/aos.css";
document.head.appendChild(link);

// Create and append a script element for AOS JavaScript
const script = document.createElement("script");
script.src = "https://cdn.rawgit.com/michalsnik/aos/2.1.1/dist/aos.js";
document.body.appendChild(script);

// Initialize AOS after the script has loaded
script.onload = () => {
  window.AOS.init();
};

const WeatherSearch = ({
  onSearch,
  isSearching,
  isDarkMode,
  setIsDarkMode,
}) => {
  // State management using React hooks
  const [city, setCity] = useState("");
  const [searchButtonClicked, setSearchButtonClicked] = useState(false);

  // Function to handle the search for weather data
  const handleSearch = () => {
    if (!searchButtonClicked) {
      setSearchButtonClicked(true);
    }
    onSearch(city);
    setCity("");
  };

  // Function to determine the CSS class based on searchButtonClicked state
  const getClassName = () => {
    if (searchButtonClicked) {
      return "App flex flex-col items-center justify-center";
    } else {
      return "App flex flex-col items-center justify-center pt-96 pb-80 mb-5 ";
    }
  };

  return (
    <div className={getClassName()}>
      <div className="mb-4 text-xl font-bold pt-4 " data-aos="fade-right">
        Welcome to Weather DashBoard
      </div>
      <div
        className="flex justify-center items-center pb-32"
        data-aos="fade-left"
      >
        {/* Input field for city search */}
        <input
          type="text"
          placeholder="Search for a city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="w-60 p-2 border rounded mr-4 text-black"
        />

        {/* Button for initiating the search */}
        <button
          onClick={handleSearch}
          className="bg-blue-500  hover:bg-blue-700 transform transition-transform hover:translate-x-1 hover:bg-green-500 text-white font-bold py-2 px-4 rounded"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default WeatherSearch;
