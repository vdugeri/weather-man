import React from "react";

import Widget from "../../components/weather-widget/weather-widget.component";

import "./homepage.styles.scss";

class Homepage extends React.Component {
  constructor() {
    super();
    this.state = {
      stats: []
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    const res = await fetch(
      "https://api.openweathermap.org/data/2.5/forecast?q=ABUJA,NG&APPID=cf52e18ef222883e3fa2496bec5c9b99"
    );

    const data = await res.json();
    const days = data.list.reduce((groups, weather) => {
      const date = weather.dt_txt.split(" ")[0];
      if (!groups[date]) {
        groups[date] = [];
      }
      groups[date].push(weather);
      return groups;
    }, {});

    const dayArrays = Object.keys(days).map(date => {
      return {
        date,
        weather: days[date]
      };
    });

    this.setState({ stats: dayArrays });
  };

  render() {
    const { stats } = this.state;
    return (
      <div className="homepage">
        {stats.map((stat, index) => (
          <Widget key={index} stat={stat} />
        ))}
      </div>
    );
  }
}

export default Homepage;
