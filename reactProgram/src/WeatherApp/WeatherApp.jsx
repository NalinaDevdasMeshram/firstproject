import { useState } from "react";
import axios from "axios";
const WeatherApp = () => {
  const [city, setCity] = useState();
  const [weather, setWeather] = useState();
  const handleChange = (e) => {
    setCity(e.target.value);
  };
  const fetchWeatherApi = async () => {
    if (!city) {
      alert("something went wtong");
    }
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${`95b72c01e13322c1b7db1c78ec7254f0`}`
      );
      setWeather(response);
      console.log(response);
    } catch (errror) {
      console.log("something went wronge please the valid input");
    }
  };
  const handlebtn = () => {
    fetchWeatherApi();
  };
  return (
    <div>
      <h1>Weather</h1>
      <div>
        <input
          type="text"
          placeholder="Enter the City"
          value={city}
          onChange={handleChange}
        />
      </div>
      <button onClick={handlebtn}>Start</button>
      {weather && (
        <div>
          <h4>{weather.data.name}</h4>
          <p>tempature:{weather.data.main.temp}%</p>
          <p>Humidity:{weather.data.main.humidity}</p>
        </div>
      )}
    </div>
  );
};

export default WeatherApp;
