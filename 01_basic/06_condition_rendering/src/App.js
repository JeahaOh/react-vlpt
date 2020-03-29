import React from 'react';
import Hello from './Hello';
import Wrapper from './Wrapper';

function App() {
  return (
    <Wrapper>
      <Hello name="REACT" color="red" isSpecial={true}/>
      <Hello  color="pink" isSpecial/>
      <Hello  color="dimgrey"/>
    </Wrapper>
  );
}

export default App;
