import React, { useEffect, useState } from 'react';
import './App.css';

function App(props) {
  const [isSupport, setIsSupport] = useState(false);
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setLatitude(position.coords.latitude)
      setLongitude(position.coords.longitude)
      setIsSupport(true)
    });
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <text>{`Is Support Location: ${isSupport}`}</text>
        <text>{`Latitude: ${latitude}`}</text>
        <text>{`Longitude: ${longitude}`}</text>
      </header>
    </div>
  );
}

export default App;