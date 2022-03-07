import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";

export default function Weather(props) {
  let [temperature, setTemperature] = useState("");
  let [wind, setWind] = useState("");
  let [humidity, setHumidity] = useState("");
  let [description, setDescription] = useState("");
  let [icon, setIcon] = useState("");
  let [cityname, setCityname] = useState("");
  let apiKey="577ba2499c8332640e4a2e175db77b37"
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&units=metric&appid=${apiKey}`;
  axios.get(url).then(showTemperature);

  function showTemperature(response) {
    setTemperature(response.data.main.temp);
    setDescription(response.data.weather[0].description);
    setWind(response.data.wind.speed);
    setHumidity(response.data.main.humidity);
    setIcon(response.data.weather[0].icon);
    setCityname(response.data.name)
  }
  let urlImage = `http://openweathermap.org/img/wn/${icon}@2x.png`;

  return (
    <div className="Weather">
      <div className="row">
        <div className="col-6 position-relative">
          <img
            src={urlImage}
            alt="icon"
            className="image position-absolute top-50 start-50 translate-middle"
          />
        </div>
        <div className="col-6">
          <h1 className="city-name">{cityname}</h1>
          <div className="temp-now">
            <strong id="temperature">{Math.round(temperature)}</strong>
            <span className="units"> °C </span>
          </div>
          <ul>
            <li>
              <span className="date">Tuesday 11:45</span> ,
              <span className="description"> {description}</span>
            </li>
            <li>
              Humidity: <span className="humidity">{humidity}%</span> , Wind:
              <span className="wind">{Math.round(wind)} km/h</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
