import React from "react";

import { kelvinToCelius } from "../../utils/temp-conversions";

import "./weather-widget.styles.scss";

const WeatherWidget = ({ stat }) => {
  const { weather, main } = stat.weather[0];
  return (
    <div className="weather-widget">
      <div className="weather-widget__day">
        {new Date(stat.date).toUTCString().split(",")[0]}
      </div>
      <div className="weather-widget__image">
        <img
          src={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
          alt="weather"
        />
      </div>
      <div className="weather-widget__temp">
        <span>{kelvinToCelius(main.temp_max)}&#176;</span>
        <span>{kelvinToCelius(main.temp_min)}&#176;</span>
      </div>
    </div>
  );
};

export default WeatherWidget;
