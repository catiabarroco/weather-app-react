import React, { useState } from "react";
import Weather from "./Weather";
import "./Search.css";

export default function Search() {
  let [city, setCity] = useState("");
  let [weather, setWeather] = useState("");

  function updateCity(event) {
    setCity(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setWeather(<Weather city={city} />);
  }
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
              autocomplete="off"
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
              onclick="window.location.reload();"
            >
              Location
            </button>
          </div>
        </div>
      </form>
      <div>{weather}</div>
    </div>
  );
}
