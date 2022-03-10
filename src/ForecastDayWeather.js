import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function ForecastDayWeather(props) {
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let date = new Date(props.data.dt * 1000);
  let day = date.getDay();

  return (
    <div className="ForecastDayWeather card">
      <div className="forecastDay">{days[day]}</div>
      <div className="icon">
        <WeatherIcon codeIcon={props.data.weather[0].icon} size={40} />
      </div>
      <div>
        <span className="maxim">{Math.round(props.data.temp.max)}°</span>{" "}
        <span className="minim">{Math.round(props.data.temp.min)}°</span>
      </div>
    </div>
  );
}
