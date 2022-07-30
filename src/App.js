import './App.css';
import React, { useState, useEffect} from 'react';
import Icon from './components/Icon.js';

function App() {
const [lat, setLat]=useState('');
const [lon, setLon]=useState('');
const [temp, setTemp]=useState('_');
const [location, setLocation]=useState('_');
const [weather, setWeather]=useState('_');
const [wind, setWind]=useState('');
const [humidity, setHumidity]=useState('')


//Navigates the current location of the device 
navigator.geolocation.getCurrentPosition((position)=>{
  setLat(position.coords.latitude);
  setLon(position.coords.longitude);
 });


  //Api key and the link of the openweather api service
  const key='2beed9751f4037c27f5eac99456c9f93';
  let url=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`

  //Fetches the api and then changes the state
  useEffect(()=>{
    fetch(url)
    .then(res=>res.json())
    .then((data)=>{
      setTemp(Math.floor(32+((data.main.temp-273)*(9/5))));
      setLocation(data.name + ', ' + data.sys.country);
      setWeather(data.weather[0].description);
      setWind(Math.floor(2.23*(data.wind.speed)));
      setHumidity(data.main.humidity)
    })
  })
  console.log(lon+ ' ' +lat)
  console.log(url)

  return (
    <div className="animated fadeInDown infinite
    weatherApp position-absolute top-50 start-50 translate-middle d-flex justify-content-center flex-nowrap">
      <div className="tempContainer shadow-lg">
          <div className='location'>{location}</div>
          <div className="temp">{temp}°F</div>
            <div className="smallContainer">
              <p>Wind Speed: {wind} mph</p>
              <p>Humidity: {humidity}%</p>
            </div> 
           <Icon weather={weather} />
           <div className="weather">{weather}</div>    
      </div>
    </div>
  );
}

export default App;
