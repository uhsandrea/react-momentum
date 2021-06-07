import React, { useState, useEffect } from 'react';
import './Weather.css';

const Weather = () => {
  const [current, setCurrent] = useState({});
  const [forecast, setForecast] = useState([]);

  const getCurrentWeather = (lat, lon) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=imperial`;
    fetch(url)
    .then(response => response.json())
    .then(data => {
      setCurrent({ 
        location: data.name,
        temp: Math.round(data.main.temp),
        description: data.weather[0].main,
        icon: `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
      });
    });
  }

  const getForecastWeather = (lat, lon) => {
    const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,hourly,alerts&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=imperial`;
    fetch(url)
    .then(response => response.json())
    .then(data => data.daily.map(
      item => {
        return {
          id: item.dt,
          day: new Date(item.dt * 1000).toLocaleString("en-us", { weekday: "short" }),
          icon: `http://openweathermap.org/img/wn/${item.weather[0].icon}.png`,
          minTemp: Math.round(item.temp.min),
          maxTemp: Math.round(item.temp.max),
        }
      }
    ))
    .then(weather => {
      weather[0].day = "Today";
      setForecast(weather);
    });
  }

  const saveCoords = coordObj => {
    localStorage.setItem("coords", JSON.stringify(coordObj));
  }

  const handleGeoSuccess = position => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordObj = {
      latitude,
      longitude
    };
    saveCoords(coordObj);
    getCurrentWeather(latitude, longitude);
    getForecastWeather(latitude, longitude);
  }

  const handleGeoError = () => {
    console.log("Cant access geo location");
  }

  const askForCoords = () => {
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError)
  }

  const loadCoords = () => {
    const loadedCoords = localStorage.getItem("coords");
    if (loadedCoords === null) {
      askForCoords();
    } else {
      const parsedCoords = JSON.parse(loadedCoords);
      getCurrentWeather(parsedCoords.latitude, parsedCoords.longitude);
      getForecastWeather(parsedCoords.latitude, parsedCoords.longitude);
    }
  }
  useEffect(() => {
    loadCoords();
  }, []);

  return (
    <div className="weather">
      <div className="weather-location">
        {current.location}
      </div>
      <div className="weather-content">
        <div className="current-weather">
          <img className="current-icon" src={current.icon} alt=""/>
          <div className="current-text">
            <div className="current-temp">{current.temp}&#176;</div>
            <div className="current-description">{current.description}</div>
          </div>
        </div>
        <ul className="forecast-weather">
          {!forecast[0] ? [] : forecast.map(item => {
            return <li key={item.id}>
              <div className="forecast-day">{item.day}</div>
              <img className="forecast-icon" src={item.icon} alt=""/>
              <div className="forecast-maxtemp">{item.maxTemp}&#176;</div>
              <div className="forecast-mintemp">{item.minTemp}&#176;</div>
            </li>
          })}
        </ul>
      </div>
    </div>
  );
};

export default Weather;