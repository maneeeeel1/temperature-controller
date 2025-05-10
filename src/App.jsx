import { useState } from "react"
import TemperatureDisplay from "./components/TemperatureDisplay"
import TemperatureControls from "./components/TemperatureControls"
import HistoryList from "./components/HistoryList"

export default function App() {
  const [temperature, setTemperature] = useState(20)
  const [history, setHistory] = useState([])

  const recordHistory = (newTemperature) => {
    setHistory((prevHistory) => [
      ...prevHistory,
      { time: new Date(), value: newTemperature },
    ])
  }

  const handleIncrease = () => {
    const newTemperature = temperature + 1
    setTemperature(newTemperature)
    recordHistory(newTemperature)
  }

  const handleDecrease = () => {
    const newTemperature = temperature - 1
    setTemperature(newTemperature)
    recordHistory(newTemperature)
  }

  const handleReset = () => {
    setTemperature(20)
    setHistory([])
  }

  return (
    <div className="app">
      <h1>Controlador de temperatura</h1>
      <TemperatureDisplay temperature={temperature} />
      <TemperatureControls
        onIncrease={handleIncrease}
        onDecrease={handleDecrease}
        onReset={handleReset}
      />
      <HistoryList history={history} />
    </div>
  )
}
