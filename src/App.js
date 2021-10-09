import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Development in Progress. We will be Live soon !
        </p>
        <a
          className="App-link"
          href="https://dev-app-api.herokuapp.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Go To API
        </a>
      </header>
    </div>
  );
}

export default App;
