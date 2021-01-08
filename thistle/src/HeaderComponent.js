import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello World -- Header</h1>
        <div className="HeaderLinks">
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >Home</a><a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >About Us</a>
            <a
            className="App-link"
                      href="https://reactjs.org"
                      target="_blank"
                      rel="noopener noreferrer"
            >Products</a>
            <a
            className="App-link"
                      href="https://reactjs.org"
                      target="_blank"
                      rel="noopener noreferrer"
            >Tips</a>
            <a
            className="App-link"
                      href="https://reactjs.org"
                      target="_blank"
                      rel="noopener noreferrer"
            >Contact Us</a>
        </div>
      </header>
    </div>
  );
}

export default App;
