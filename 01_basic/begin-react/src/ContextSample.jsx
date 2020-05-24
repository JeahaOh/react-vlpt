import React, { createContext, useContext, useState } from 'react';

const TestContext = createContext('defaultValue');

function Child() {
  const { text, idntt, act, isHit } = useContext(TestContext);
  return (
    <>
      <div style={isHit
        ? { color: 'red' }
        : { color: 'dimgrey' }
      }>
        context : {text}
      </div>
      <div> idntt : {idntt} </div>
      <button onClick={act}>act</button>
    </>
  );
}

function Parent() {
  return <Child />;
}

function GrandParent() {
  return <Parent />
}

export default React.memo(function ContextSample() {
  const [val, setVal] = useState(true);
  const test = {
    text: 'Far From Root',
    idntt: 'ASDF',
    act: function () {
      console.log('context object act : ', test.idntt, Date.now());
    },
    isHit: val
  };
  return (
    <TestContext.Provider value={test}>
      <GrandParent />
      <button onClick={() => {
        setVal(!val)
      }}>
        Hit Me!
      </button>
    </TestContext.Provider>
  )
});