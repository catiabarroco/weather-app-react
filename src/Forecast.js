import React, { useState, useEffect } from "react";
import "./Forecast.css";
import axios from "axios";
import ForecastDayWeather from "./ForecastDayWeather";

export default function Forecast(props) {
  let [forecast, setForecast] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }
  useEffect(() => {
    setLoaded(false);
  }, [props.data]);

  if (loaded) {
    return (
      <div className="Forecast">
        <div className="future-weather row">
          {forecast.map(function (value, index) {
            if (index < 5) {
              return (
                <div className="col" key={index}>
                  <ForecastDayWeather data={value} />
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  } else {
    let latitude = props.data.lat;
    let longitude = props.data.lon;
    let apiKey = `ba00217b7fe0bd4291cf582c185f4f48`;
    let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`;
    axios.get(url).then(handleResponse);

    return null;
  }
}
