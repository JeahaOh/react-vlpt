import React from "react";
import qs from "qs";

const About = ({ location }) => {
  console.log("location : ", location);
  const query = qs.parse(location.search, {
    // ?를 제거 하는 설정.
    ignoreQueryPrefix: true,
  });
  console.log("query : ", query);
  //  queryString의 값은 모두 문자열이다.
  const detail = query.detail === "true";
  return (
    <>
      <div>
        <h1>About</h1>
        <p>Examples of React Router.</p>
        {detail && <p>detail is true La La vLa</p>}
      </div>
    </>
  );
};

export default About;
