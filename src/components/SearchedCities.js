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
                className="text-blue-500 hover:underline cursor-pointer"
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