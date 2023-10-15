import React from "react";

const SearchedCities = ({ cities, onCityClick, isDarkMode }) => {
  return (
    <aside>
      <div>
        <h2 className={` pt-7 text-xl font-semibold ${isDarkMode ? "text-white" : ""}`}>Searched Cities</h2>
        <ul>
          {cities.map((city, index) => (
            <li key={index}>
              <button
                onClick={() => onCityClick(city)}
                className={`font-bold hover:underline cursor-pointer rounded-xl pl-2 pr-2 mt-4 ${isDarkMode ? "text-white" : ""}`}
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