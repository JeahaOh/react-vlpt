import React from "react";
import { NavLink, Route } from "react-router-dom";
import Profile from "./Profile";
import WithRouterSample from "./WithRouterSample";
import RouterHookSample from "./RouterHookSample";

const Profiles = () => {
  return (
    <>
      <hr />
      <div>
        <h3>User List (SubRoute Ex) </h3>
        <ul>
          <li>
            <NavLink
              to="/profiles/jeaha"
              activeStyle={{ background: "dimgrey", color: "white" }}
            >
              Jeaha
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/profiles/asdf"
              activeStyle={{ background: "dimgrey", color: "white" }}
            >
              asdf
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/profiles/none"
              activeStyle={{ background: "dimgrey", color: "white" }}
            >
              none
            </NavLink>
          </li>
        </ul>

        <Route path="/profiles" exact render={() => <div>Select User</div>} />
        <Route path="/profiles/:username" component={Profile} />

        <WithRouterSample />
        <RouterHookSample />
      </div>
    </>
  );
};

export default Profiles;
