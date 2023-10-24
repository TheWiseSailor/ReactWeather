import React from "react";

const SearchedCities = ({ cities, onCityClick, isDarkMode }) => {
  return (
    <aside>
      <div>
        {
          /* Display the "Searched Cities" heading with optional white text in dark mode */
          <h2
            className={`pt-7 text-xl font-semibold ${
              isDarkMode ? "text-white" : ""
            }`}
          >
            Searched Cities
          </h2>
        }
        <ul>
          {/*  Map through the list of cities and create a list item for each  */}
          {cities.map((city, index) => (
            <li key={index}>
              <button
                // When a city button is clicked, call the onCityClick function with the city
                onClick={() => onCityClick(city)}
                // Style the city button with optional white text in dark mode
                className={`font-bold hover:underline cursor-pointer rounded-xl pl-2 pr-2 mt-4 ${
                  isDarkMode ? "text-white" : ""
                }`}
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
