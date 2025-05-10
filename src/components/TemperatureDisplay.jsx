export default function TemperatureDisplay({ temperature }) {
  let message = ""
  let color = ""

  if (temperature < 15) {
    message = "¡Hace frío!"
    color = "blue"
  } else if (temperature > 25) {
    message = "¡Hace calor!"
    color = "red"
  } else {
    message = "Temperatura agradable"
    color = "orange"
  }

  return (
    <div className="display" style={{ color }}>
      <h2>{temperature} °C</h2>
      <p>{message}</p>
    </div>
  )
}
