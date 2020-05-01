import React, { useState } from 'react';
import LifeCycleSample from './LifeCycleSample';

//  랜덤 색상을 생성.
function getRandomColor() {
  return '#' + Math.floor( Math.random() * 16777215).toString(16);
}

function App() {
  const [color, setColor] = useState( '#000000' );
  const [visible, setVisible] = useState( true );

  const onClick = () => {
    console.clear();
    console.group( 'GET RANDOM COLOR!' );
    const color = getRandomColor();
    setColor( color );
    console.groupEnd();
  };

  const onToggle = () => {
    console.clear();
    console.group( 'onToggle' );
    setVisible( !visible );
    console.groupEnd();
  };

  return (
    <>
      <button onClick={onClick}>Get Random Color</button>
      <button onClick={onToggle}>Toggle</button>
      {visible && <LifeCycleSample color={color}/>}
    </>
  );
}

export default App;
