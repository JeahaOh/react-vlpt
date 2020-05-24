import React from "react";
import { withRouter } from "react-router-dom";

const WithRouterSample = ({ location, match, history }) => {
  return (
    <>
      <div style={{ width: "fit-content", height: "fit-content" }}>
        <h4>location</h4>
        <p>{JSON.stringify(location, null, 2)}</p>
        <h4>match</h4>
        <p>{JSON.stringify(match, null, 2)}</p>
        <button onClick={() => history.push("/")}>GO HOME</button>
      </div>
    </>
  );
};

export default withRouter(WithRouterSample);
