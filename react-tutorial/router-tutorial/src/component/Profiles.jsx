import React from 'react';
import Profile from './Profile';
import WithRouterSample from './WithRouterSample';
import { Link, Route } from 'react-router-dom';

const Profiles = () => {
  return (
    <>
      <div>
        <h3>User Profiles</h3>
        <ul>
          <li>
            <Link to="/profiles/asdf">asdf</Link>
          </li>
          <li>
            <Link to="/profiles/anon">anon</Link>
          </li>
        </ul>
        {/* 선택된 사용자가 없을 경우. */}
        <Route
          path="/profiles"
          exact
          render={() => <div> Plz Select a User.</div>}
        />
        <Route path="/profiles/:username" component={Profile} />
        <WithRouterSample />
      </div>
    </>
  );
};

export default Profiles;
