import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function WeatherIcon(props) {
  const codeMapping = {
    "01d": "CLEAR_DAY",
    "01n": "CLEAR_NIGHT",
    "02d": "PARTLY_CLOUDY_DAY",
    "02n": "PARTLY_CLOUDY_NIGHT",
    "03d": "PARTLY_CLOUDY_DAY",
    "03n": "PARTLY_CLOUDY_NIGHT",
    "04d": "CLOUDY",
    "04n": "CLOUDY",
    "09d": "RAIN",
    "09n": "RAIN",
    "10d": "RAIN",
    "10n": "RAIN",
    "11d": "RAIN",
    "11n": "RAIN",
    "13d": "SNOW",
    "13n": "SNOW",
    "50d": "FOG",
    "50n": "FOG",
  };

  let color = "";
  if (
    codeMapping[props.codeIcon] === "CLEAR_DAY" ||
    codeMapping[props.codeIcon] === "CLEAR_NIGHT"
  ) {
    color = "#F8B121";
  }
  if (
    codeMapping[props.codeIcon] === "PARTLY_CLOUDY_DAY" ||
    codeMapping[props.codeIcon] === "PARTLY_CLOUDY_NIGHT" ||
    codeMapping[props.codeIcon] === "SNOW"
  ) {
    color = "#bac6ce";
  }
  if (
    codeMapping[props.codeIcon] === "CLOUDY" ||
    codeMapping[props.codeIcon] === "FOG"
  ) {
    color = "#5b6063";
  }
  if (codeMapping[props.codeIcon] === "RAIN") {
    color = "#0d6efd";
  }

  return (
    <ReactAnimatedWeather
      icon={codeMapping[props.codeIcon]}
      color={color}
      size={props.size}
      animate={true}
    />
  );
}
