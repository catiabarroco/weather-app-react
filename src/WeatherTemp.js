import React, { useState } from "react";

export default function WeatherTemp(props) {
  let [temperature, setTemperature] = useState("celsius");
  let fahrenheit = (props.temperature * 9) / 5 + 32; 

  function showFahrenheit(event) {
    event.preventDefault();
    setTemperature("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setTemperature("celsius");
  }

  if (temperature === "celsius") {
    return (
      <div className="temp-now">
        <strong id="temperature">{Math.round(props.temperature)}</strong>
        <span className="units">
          {" "}
          °C |{" "}
          <a href="/" onClick={showFahrenheit}>
            °F
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div className="temp-now">
        <strong id="temperature">{Math.round(fahrenheit)}</strong>
        <span className="units">
          {" "}
          <a href="/" onClick={showCelsius}>
            {" "}
            °C{" "}
          </a>{" "}
          | °F
        </span>
      </div>
    );
  }
}
