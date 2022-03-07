import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <div className="Header">
      <div className="row">
        <div className="col-6 position-relative">
          <img
            src="https://openweathermap.org/img/wn/03d@2x.png"
            alt=""
            className="image position-absolute top-50 start-50 translate-middle"
          />
        </div>
        <div className="col-6">
          <h1 className="city-name">Viseu</h1>
          <div className="temp-now">
            <strong id="temperature">16</strong>
            <span className="units"> °C </span>
          </div>
          <ul>
            <li>
              <span className="date">Tuesday 11:45</span> ,
              <span className="description"> Scattered Clouds</span>
            </li>
            <li>
              Humidity: <span className="humidity">27%</span> , Wind:
              <span className="wind">3 km/h</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
