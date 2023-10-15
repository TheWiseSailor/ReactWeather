// src\components\SearchedCities.js
import React from "react";
import WeatherSearch from "./WeatherSearch";

const SearchedCities = ({ cities, onCityClick }) => {
  return (
    <aside>
      <div>
        <h2 className="text-xl font-semibold pt-8">Searched Cities</h2>
        <ul>
          {cities.map((city, index) => (
            <li key={index}>
              <button
                onClick={() => onCityClick(city)}
                className=" text-black font-bold hover:underline cursor-pointer rounded-xl pl-2 pr-2 mt-4"
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