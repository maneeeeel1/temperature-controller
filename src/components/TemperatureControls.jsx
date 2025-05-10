export default function TemperatureControls({
  onIncrease,
  onDecrease,
  onReset,
}) {
  return (
    <div className="controls">
      <button onClick={onDecrease}>➖</button>
      <button onClick={onIncrease}>➕</button>
      <button onClick={onReset}>🔄 Reset</button>
    </div>
  )
}
