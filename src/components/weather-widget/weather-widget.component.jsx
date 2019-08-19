import React from "react";

import { kelvinToCelius } from "../../utils/temp-conversions";

import "./weather-widget.styles.scss";

const WeatherWidget = ({ stat }) => (
  <div className="weather-widget">
    <div className="weather-widget__day">
      {new Date(stat.date).toUTCString().split(",")[0]}
    </div>
    <div className="weather-widget__image">
      <img
        src={`http://openweathermap.org/img/wn/${
          stat.weather[0].weather[0].icon
        }@2x.png`}
        alt="weather"
      />
    </div>
    <div className="weather-widget__temp">
      <span>{kelvinToCelius(stat.weather[0].main.temp_max)}&#8451;</span>
      <span>{kelvinToCelius(stat.weather[0].main.temp_min)}&#8451;</span>
    </div>
  </div>
);

export default WeatherWidget;
