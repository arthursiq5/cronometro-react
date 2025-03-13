import './App.css';

function App() {
  return (
    <div className="App">
      <div className="card">
        <input type="text" id="timeField" className="time" />
        <div className="options">
          <button>start</button>
          <button>stop</button>
          <button>pause</button>
        </div>
      </div>
    </div>
  );
}

export default App;
