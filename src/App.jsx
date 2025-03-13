import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [ time, setTime ] = useState(0)
  const [ isRunning, setIsRunning ] = useState(false)

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setTime(prevTime => prevTime + 1)
      }, 1000)
    } else {
      clearInterval(interval)
    }
    return () => clearInterval(interval)
  }, [isRunning])

  const start = () => setIsRunning(true)
  const pause = () => setIsRunning(false)
  const stop = () => {
    setIsRunning(false)
    setTime(0)
  }

  const formatTime = passedTime => {
    const hours = Math.floor(passedTime / 3600);
    const minutes = Math.floor((passedTime % 3600) / 60);
    const seconds = passedTime % 60;

    return [hours, minutes, seconds]
      .map(num => num.toString().padStart(2, '0'))
      .join(':');
  }

  return (
    <div className="App">
      <div className="card">
        <h1>{formatTime(time)}</h1>
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
