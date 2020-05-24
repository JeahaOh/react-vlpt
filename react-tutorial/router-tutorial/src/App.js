import React from 'react';
import { Route, Link } from 'react-router-dom';
import { About, Home } from './component';
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
            <Link to="about">About</Link>
          </li>
        </ul>
      </header>
      <div>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
      </div>
    </>
  );
}

export default App;
