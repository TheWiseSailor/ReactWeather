// Import WeatherSearch at the top of the file
import React, { useState, useEffect } from "react";
import WeatherSearch from "./WeatherSearch";
import SearchedCities from "./SearchedCities";
import CurrentWeather from "./CurrentWeather";
import WeatherForecast from "./WeatherForecast";

const WeatherDashboard = () => {
  const [searchedCities, setSearchedCities] = useState([]);
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecastData, setForecastData] = useState([]);
  const apiKey = process.env.REACT_APP_API_KEY; // Define the apiKey

  useEffect(() => {
    const storedCities =
      JSON.parse(localStorage.getItem("searchedCities")) || [];
    setSearchedCities(storedCities);
  }, []);

  const handleSearch = (city) => {
    getWeather(city);
    addCityToSearchedCities(city);
  };

  const addCityToSearchedCities = (city) => {
    setSearchedCities((prevCities) => [city, ...prevCities.slice(0, 7)]);
    localStorage.setItem("searchedCities", JSON.stringify(searchedCities));
  };

  const getWeather = (city) => {
    const apiKey = process.env.REACT_APP_API_KEY; // Access the API key from .env
    const currentWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
    const forecastURL = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=imperial`;

    fetch(currentWeatherURL)
      .then((response) => response.json())
      .then((data) => {
        // Display current weather
        displayCurrentWeather(data);

        fetch(forecastURL)
          .then((response) => response.json())
          .then((data) => {
            // Display forecast
            displayForecast(data);
          })
          .catch((error) => console.log("Error fetching forecast:", error));
      })
      .catch((error) => console.log("Error fetching current weather:", error));
  };

  const displayCurrentWeather = (data) => {
    const cityName = data.name;
    const date = new Date().toLocaleDateString("en-US");
    const iconCode = data.weather[0].icon;
    const temperature = data.main.temp;
    const humidity = data.main.humidity;
    const windSpeed = data.wind.speed;

    setCurrentWeather({
      city: cityName,
      date: date,
      icon: `http://openweathermap.org/img/w/${iconCode}.png`,
      temperature: temperature.toFixed(1),
      humidity: humidity,
      windSpeed: windSpeed.toFixed(1),
    });

    const uvIndexURL = `https://api.openweathermap.org/data/2.5/uvi?lat=${data.coord.lat}&lon=${data.coord.lon}&appid=${apiKey}`;
    fetch(uvIndexURL)
      .then((response) => response.json())
      .then((data) => {
        const uvIndex = data.value;
        setCurrentWeather((prevWeather) => ({
          ...prevWeather,
          uvIndex: uvIndex,
        }));
      })
      .catch((error) => console.log("Error fetching UV index:", error));
  };

  const displayForecast = (data) => {
    const forecastList = data.list;
    const forecastData = [];

    for (let i = 0; i < forecastList.length; i++) {
      const forecastTime = forecastList[i].dt_txt.split(" ")[1];
      if (forecastTime === "12:00:00") {
        forecastData.push(forecastList[i]);
      }
    }

    const forecastValues = forecastData.map((forecast) => {
      const date = new Date(forecast.dt_txt).toLocaleDateString("en-US");
      const iconCode = forecast.weather[0].icon;
      const temperature = forecast.main.temp;
      const humidity = forecast.main.humidity;

      return {
        date,
        icon: `http://openweathermap.org/img/w/${iconCode}.png`,
        temperature: temperature.toFixed(1),
        humidity: humidity,
      };
    });

    setForecastData(forecastValues);
  };

  return (
    <div className="App">
      <h1 className="text-3xl font-bold my-4">Weather Dashboard</h1>
      <WeatherSearch onSearch={handleSearch} />
      <SearchedCities cities={searchedCities} onCityClick={handleSearch} />
      {currentWeather && <CurrentWeather weather={currentWeather} />}
      {forecastData.length > 0 && (
        <WeatherForecast forecastData={forecastData} />
      )}
    </div>
  );
};

export default WeatherDashboard;