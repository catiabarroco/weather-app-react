import React from "react";
import "./Search.css";

export default function Search() {
  return (
    <div className="Search">
      <form id="weather-form">
        <div className="row">
          <div className="col">
            <input
              type="search"
              id="search-city"
              className="form-control"
              placeholder="Type a City"
              autocomplete="off"
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
    </div>
  );
}
