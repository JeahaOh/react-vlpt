import React from "react";
import qs from "qs";

const About = ({ location }) => {
  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  });
  console.log(query);
  //  쿼리의 파싱 결과값은 문자열임.
  const detail = query.detail === "true";
  return (
    <>
      <div>
        <h1>About</h1>
        <p>Example of react router</p>
        {detail && <p>추가적인 정보가 있다?</p>}
      </div>
    </>
  );
};

export default About;
