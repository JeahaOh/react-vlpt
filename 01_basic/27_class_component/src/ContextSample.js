import React, { createContext, useContext, useState } from 'react';

const MyContext = createContext( 'default value' );

function Child() {
  const text = useContext( MyContext );
  return <div>HI HI {text}</div>;
}

function Parent({ text }) {
  return <Child text={text} />
}

function GrandParent({ text }) {
  return <Parent text={text} />
}

function ContextSample() {
  const [ value, setValue ] = useState( true );
  return (
    <MyContext.Provider value={ value ? 'G00D' : 'BAD' }>
      <GrandParent/>
      <button onClick={() => setValue(!value)}>CLICK</button>
    </MyContext.Provider>
  );
}

export default ContextSample;