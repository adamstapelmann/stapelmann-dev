import React from 'react';
import './styles/App.css';
import {useEffect} from 'react';
import Main from './Main';
import NavPane from './components/NavPane';

function App() {
  useEffect(() => {
      /* Set window/tab text */
    document.title = "Adam Stapelmann"
  });
  return (
    <div className="App">
      <div className="NameText">
        Adam Stapelmann
      </div>
      <div className="AppBody">
        <NavPane/>
        <Main />
      </div>
    </div>
  );
}

export default App;
