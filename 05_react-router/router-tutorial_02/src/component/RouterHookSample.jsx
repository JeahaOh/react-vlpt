import React from 'react';
import useReactRouter from 'use-react-router';

const RouterHookSample = () => {
  const { history, location, match } = useReactRouter();
  console.log(
    'history : ',
    history,
    'location : ',
    location,
    'match : ',
    match,
  );
  return (
    <>
      <div></div>
    </>
  );
};

export default RouterHookSample;
