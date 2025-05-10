export default function HistoryList({ history }) {
  if (history.length === 0) {
    return <p>Sin cambios aún</p>
  }

  return (
    <ul className="history">
      {history.map((entry, index) => (
        <li key={index}>
          [{entry.time.toLocaleTimeString()}] → {entry.value} °C
        </li>
      ))}
    </ul>
  )
}
