import React, { useState } from "react";
import "../components/styles/App.css";
const link = document.createElement("link");
link.rel = "stylesheet";
link.href = "https://cdn.rawgit.com/michalsnik/aos/2.1.1/dist/aos.css";
document.head.appendChild(link);

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
  const [city, setCity] = useState("");
  const [searchButtonClicked, setSearchButtonClicked] = useState(false);

  const handleSearch = () => {
    if (!searchButtonClicked) {
      setSearchButtonClicked(true);
    }
    onSearch(city);
    setCity("");
  };

  const getClassName = () => {
    if (searchButtonClicked) {
      return "App flex flex-col items-center justify-center";
    } else {
      return "App flex flex-col items-center justify-center pt-96 pb-80 ";
    }
  };

  return (
    <div className={getClassName()}>
      <div className="mb-4 text-xl font-bold pt-4 " data-aos="fade-right">
        Welcome to Weather DashBoard
      </div>
      <div className="flex justify-center items-center " data-aos="fade-left">
        <input
          type="text"
          placeholder="Search for a city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="w-60 p-2 border rounded mr-4 text-black"
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
