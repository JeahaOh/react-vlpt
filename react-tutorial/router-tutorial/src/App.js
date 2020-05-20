import React from 'react';
import Home from './Home';
import About from './About';
import { Route, Link, Switch } from 'react-router-dom';
import Profiles from './Profiles';
import HistorySample from './HistorySample';
import Blocking from './Blocking';
import AuthExample from './AuthExample';

function App() {
  return (
    <div className="App" style={{ marginLeft: '10em' }}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
          <ul>

            <li>
              <Link to="/about?detail=true">queryString</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link to="/profiles">profiles</Link>
        </li>
        <li>
          <Link to="/history">history</Link>
        </li>
        <li>
          <Link to="/blocking">blocking</Link>
        </li>
        <li>
          <Link to="/authex">authex</Link>
        </li>
      </ul>
      <hr />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/profiles" component={Profiles} />
        <Route path="/history" component={HistorySample} />
        <Route path="/blocking" component={Blocking} />
        <Route path="/authex" component={AuthExample} />
        <Route
          // path가 없다면
          render={({ location }) => (
            <div style={{ fontSize: '2em' }}>
              <p>pathname <b>{location.pathname}</b> is not exist.</p>
            </div>
          )}
        />
      </Switch>
    </div>
  );
}

export default App;
