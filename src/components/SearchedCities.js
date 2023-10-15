// src\components\SearchedCities.js
import React from "react";
import WeatherSearch from "./WeatherSearch";

const SearchedCities = ({ cities, onCityClick }) => {
  return (
    <aside>
      <div>
        <h2 className="text-xl font-semibold">Searched Cities</h2>
        <ul>
          {cities.map((city, index) => (
            <li key={index}>
              <button
                onClick={() => onCityClick(city)}
                className="bg-gray-600 text-white hover:underline cursor-pointer rounded-xl pl-2 pr-2"
              >
                {city}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default SearchedCities;