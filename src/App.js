import './App.css';
import React, { useState } from 'react';


function App() {

let lon;
let lat;
const [temp, setTemp]=useState('_');
const [location, setLocation]=useState('_');
const [weather, setWeather]=useState('_');

  return (
    <div className="weatherApp position-absolute top-50 start-50 translate-middle d-flex justify-content-center flex-nowrap">
      <div className="tempContainer shadow-lg">
          <div className='location'>{location}</div>
          <div className="icon"></div>
          <div className="temp">{temp}°F</div>
          <div className="weather">{weather}</div>    
      </div>
    </div>
  );
}

export default App;
