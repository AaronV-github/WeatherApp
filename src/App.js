import './App.css';
import React, { useState, useEffect} from 'react';

function App() {
const [lat, setLat]=useState('');
const [lon, setLon]=useState('');
const [temp, setTemp]=useState('_');
const [location, setLocation]=useState('_');
const [weather, setWeather]=useState('_');


navigator.geolocation.getCurrentPosition((position)=>{
  setLat(position.coords.latitude);
  setLon(position.coords.longitude);
 });


  const key='2beed9751f4037c27f5eac99456c9f93';
  let url=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`

  useEffect(()=>{
    fetch(url)
    .then(res=>res.json())
    .then((data)=>{
      setTemp(data.main.temp-273);
      setLocation(data.name, + ' ' + data.sys.country);
      setWeather(data.weather[0].description);
    })
  })
  console.log(lon+ ' ' +lat)

  return (
    <div className="weatherApp position-absolute top-50 start-50 translate-middle d-flex justify-content-center flex-nowrap">
      <div className="tempContainer shadow-lg">
          <div className='location'>{location}</div>
          <div className="temp">{Math.floor(32+(temp*(9/5)))}°F</div>
          <div className="weather">{weather}</div>    
          <div className="icon"></div>
      </div>
    </div>
  );
}

export default App;