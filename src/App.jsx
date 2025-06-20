import React from "react";
import "./App.css"
import {useState} from "react";
import TemperatureDisplay from "./components/TemperatureDisplay";
import TemperatureControls from "./components/TemperatureControls";
import HistoryList from "./components/HistoryList";

function App() {
  const [temperature, setTemperature] = useState(20);
  const [history, setHistory]= useState([]);

  const updateTemperature =(newTemp)=>{
    if (newTemp < 0) newTemp=0;
    if (newTemp > 40) newTemp=40;
    setTemperature(newTemp);
    const now= new Date().toLocaleTimeString();
    setHistory((prev) =>[...prev, {time: now, temp: newTemp}]);
  };

  const handleIncrease =()=>updateTemperature(temperature +1);
  const handleDecrease =()=>updateTemperature(temperature -1);
  const handleReset = () =>{
    setTemperature(20);
    setHistory([])
  };
  
  return (
    <div style={{textAlign: "center"}}>
      <TemperatureDisplay temperature={temperature} />
      <TemperatureControls onDecrease={handleDecrease} onIncrease={handleIncrease} onReset={handleReset}/>
      <HistoryList history={history} />
    
    </div>
  );
}

export default App;
