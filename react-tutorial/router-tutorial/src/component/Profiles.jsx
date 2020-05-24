import React from 'react';
import Profile from './Profile';
import WithRouterSample from './WithRouterSample';
import { NavLink, Route, withRouter } from 'react-router-dom';

const Profiles = () => {
  return (
    <>
      <div>
        <h3>User Profiles</h3>
        <ul>
          <li>
            <NavLink
              to="/profiles/asdf"
              activeStyle={{ background: 'dimgrey', color: 'white' }}
              activeClassName="active"
            >
              asdf
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/profiles/anon"
              activeStyle={{ background: 'dimgrey', color: 'white' }}
              activeClassName="active"
            >
              anon
            </NavLink>
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
