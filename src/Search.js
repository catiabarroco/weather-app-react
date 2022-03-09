import React, { useState } from "react";
import Weather from "./Weather";
import "./Search.css";
import Forecast from "./Forecast";
import axios from "axios";

export default function Search(props) {
  let [city, setCity] = useState(props.cityDefault);
  let [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      cityname: response.data.name,
      date: new Date(response.data.dt * 1000),
    });
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  function search() {
    let apiKey = `8c4070f08d562986da25915538f23e1a`;
    let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  if (weatherData.ready) {
    return (
      <div className="Search">
        <form id="weather-form" onSubmit={handleSubmit}>
          <div className="row">
            <div className="col">
              <input
                type="search"
                id="search-city"
                className="form-control"
                placeholder="Type a City"
                autoComplete="off"
                onChange={updateCity}
              />
            </div>
            <div className="col">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
                id="search-new-city"
              />
            </div>
            <div className="col">
              <button
                className="btn btn-sucess btn-primary w-100"
                id="current-location-button"
              >
                Location
              </button>
            </div>
          </div>
        </form>
        <div>
          <Weather data={weatherData} />{" "}
        </div>
        <div>
          <Forecast />
        </div>
      </div>
    );
  } else {
    search();
    return "Loading..";
  }
}
