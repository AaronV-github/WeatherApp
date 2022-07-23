import './App.css';
import React, { useState, useEffect } from 'react';

let lon;
let lat;



function App() {

const [temp, setTemp]=useState('_');
const [location, setLocation]=useState('_');
const [weather, setWeather]=useState('_');
const [icon, setIcon]=useState('')


  useEffect(()=>{
    navigator.geolocation.getCurrentPosition((position)=>{
      lon=position.coords.longitude;
      lat=position.coords.latitude;

   

      const key="2beed9751f4037c27f5eac99456c9f93";
      const base= `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`
    
      console.log(base)
      async function weatherData(){
        const res = await fetch(base);
        res 
          .json()
          .then(res=>{
            setTemp(Math.floor(32+(res.main.temp - 273)*1.8));
            setLocation(res.name+ ", " +res.sys.country);
            setWeather(res.weather[0].description);
            setIcon(res.weather[0].icon)
          })

          
      }

      weatherData();
      
    })
  })

 

  return (
    <div className="weatherApp position-absolute top-50 start-50 translate-middle d-flex justify-content-center flex-nowrap">
      <div className="tempContainer shadow-lg">
          <div className="icon"> <img src={`http://openweathermap.org/img/wn/${icon}.png`} /></div>
          <div className="temp">{temp}°F</div>
          <div className="weather">{weather}</div>  
          <div className='location'>{location}</div>  
      </div>
    </div>
  );
}

export default App;
