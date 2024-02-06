import './App.css';
import './typography.css';

function App() {
  return (
    <div className="App">
      <div className="App-content">
        <h1>Raubas AB</h1>
        <p>All things digital.</p>
        <a
            className="App-link"
            href="https://se.linkedin.com/in/rubensvartholm"
            target="_blank"
            rel="noopener noreferrer"
          >Contact on Linkedin</a>
        <div className='App-footer'>
          <p className="small">Copyright 2024 Raubas AB</p>
        </div>
      </div>
    </div>
  );
}

export default App;
