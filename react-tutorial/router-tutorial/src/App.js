import React from 'react';
import { Route, Link } from 'react-router-dom';
import { About, Home, Profiles, HistorySample } from './component';
import './App.css';

function App() {
  return (
    <>
      <header>
        <ul>
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/profiles">Profiles</Link>
          </li>
          <li>
            <Link to="/history">History</Link>
          </li>
        </ul>
        <hr />
      </header>
      <div>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/profiles" component={Profiles} />
        <Route path="/history" component={HistorySample} />
      </div>
    </>
  );
}

export default App;
