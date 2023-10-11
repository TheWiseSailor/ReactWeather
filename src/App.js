import React from "react";

import WeatherSearch from "./components/WeatherSearch";
import WeatherCurrent from "./components/WeatherCurrent";
import WeatherForecast from "./components/WeatherForecast";

function App() {
  return (
    <div className="App">
      <h1>Weather Dashboard</h1>
      <WeatherSearch />
      <WeatherCurrent />
      <WeatherForecast />
    </div>
  );
}

export default App;
