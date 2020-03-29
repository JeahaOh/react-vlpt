import React, { useState } from 'react';

function InputSample( ) {
  const [ text, setText ] = useState('bla bla bla');
  
  const onChange = ( e => {
    console.log( e.target.value );
    setText( e.target.value );
  });

  const onReset = () => {
    setText('');
  }

  return (
    <div>
      {/* input의 value를 넣어주고 안 넣어주는 것에 차이가 있음. */}
      <input onChange={onChange} value={text}/>
      <button onClick={onReset}>init</button>
      <div>
        <b>VALUE : </b>
        {text}
      </div>
    </div>
  );
}

export default InputSample;