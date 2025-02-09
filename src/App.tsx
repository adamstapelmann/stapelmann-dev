import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './styles/App.css';
import Main from './Main';
import NavPane from './components/NavPane';

function App() {
  useEffect(() => {
    document.title = "Adam Stapelmann";
  }, []);

  return (
    <div className="App">
      <header className="Header">
        <div className="HeaderContent">
          <Link to="/" className="HeaderTitle">Adam Stapelmann</Link>
          <nav className="HeaderNav">
            <NavPane />
          </nav>
        </div>
      </header>
      <div className="AppBody">
        <Main />
      </div>
    </div>
  );
}

export default App;
