import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [ seconds, setSeconds ] = useState(0)
  const [ minutes, setMinutes ] = useState(0)
  const [ hours, setHours ] = useState(0)
  const [ isRunning, setIsRunning ] = useState(false)

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setSeconds(seconds + 1)
        if (seconds === 60) {
          setSeconds(0)
          setMinutes(minutes + 1)
        }
        if (minutes === 60) {
          setMinutes(0)
          setHours(hours + 1)
        }
      }, 1000)
    }
    return () => clearInterval(interval)
  }, [isRunning])

  const start = () => setIsRunning(true)
  const pause = () => setIsRunning(false)
  const stop = () => {
    setIsRunning(false)
    setSeconds(0)
    setMinutes(0)
    setHours(0)
  }

  const twoDigits = (num) => (num < 10 ? `0${num}` : num);

  return (
    <div className="App">
      <div className="card">
        <h1>{`${twoDigits(hours)}:${twoDigits(minutes)}:${twoDigits(seconds)}`}</h1>
        <div className="options">
          <button onClick={start}>start</button>
          <button onClick={stop}>stop</button>
          <button onClick={pause}>pause</button>
        </div>
      </div>
    </div>
  );
}

export default App;
