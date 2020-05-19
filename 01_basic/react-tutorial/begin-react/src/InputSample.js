import React, { useState } from 'react';

export default function InputSample() {
  const [text, setText] = useState('');
  const onChange = (e) => {
    const value = e.target.value;
    console.log(value);
    setText(prev => value);
  }

  const onReset = () => {
    setText('');
  }
  return (
    <>
      <div>
        <input onChange={onChange} value={text} />
        <button onClick={onReset}>Reset</button>
        <div>
          <b>value : </b>
          {text}
        </div>
      </div>
    </>
  );
};