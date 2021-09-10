import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App(props) {
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setLatitude(position.coords.latitude)
      setLongitude(position.coords.longitude)
    });
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <text>{`Latitude: ${latitude}`}</text>
        <text>{`Longitude: ${longitude}`}</text>
      </header>
    </div>
  );
}

export default App;
