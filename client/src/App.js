import React from 'react';
import MapIt from './components/MapIt'
import './App.css';
import MapContainer from './components/TheMap';

const App = ()=>{
  return(
    <div className = "App">
      <MapIt />
      {/* <MapContainer /> */}
    </div>
  );
}

export default App;
