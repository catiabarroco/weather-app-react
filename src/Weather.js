import React, { useState } from "react";
import WeatherIcon from "./WeatherIcon"
import "./Weather.css";


export default function Weather(props) {
  return (
    <div className="Weather">
      <div className="row">
        <div className="col-6 icon-image">
          <WeatherIcon codeIcon={props.data.icon}/>
         
        </div>
        <div className="col-6">
          <h1 className="city-name">{props.data.cityname}</h1>
          <div className="temp-now">
            <strong id="temperature">{Math.round(props.data.temperature)}</strong>
            <span className="units"> °C </span>
          </div>
          <ul>
            <li>
              <span className="date">Tuesday 11:45</span> ,
              <span className="description"> {props.data.description}</span>
            </li>
            <li>
              Humidity: <span className="humidity">{props.data.humidity}%</span> , Wind:
              <span className="wind">{Math.round(props.data.wind)} km/h</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
