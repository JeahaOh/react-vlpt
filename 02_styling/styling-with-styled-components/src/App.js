import React from 'react';
import styled, { css } from 'styled-components';
import Button from './components/Button';

const Circle = styled.div`
  width: 5rem;
  height: 5rem;
  background: black;
  border-radius: 50%;
`;

const Circle2 = styled.div`
  width: 5rem;
  height: 5rem;
  background: ${props => props.color || 'black'};
  border-radius: 50%;
`;
//  여러 줄의 CSS 코드를 조건부로 보여주고 싶다면 css 를 불러와서 사용해야 함.
const Circle3 = styled.div`
  width: 5rem;
  height: 5rem;
  background: ${props => props.color || 'black'};
  border-radius: 50%;
  ${props =>
    props.huge &&
    css`
      width: 10rem;
      height: 10rem;
    `}
`;

const AppBlock = styled.div`
  width: 512px;
  margin: 0 auto;
  margin-top: 4rem;
  border: 1px solid black;
  padding: 1rem;
`;

function App() {
  return (
    <>
      <Circle />
      <Circle2 color="blue" />
      <Circle3 color="red" huge />
      <AppBlock>
        <Button>BUTTON</Button>
      </AppBlock>
    </>
  );
}

export default App;