import React, { useState } from 'react';

function InputSample( ) {

  const [ inputs, setInputs ] = useState({
    name : '',
    nickname : '',
  })

  const {name, nickname } = inputs;
  
  const onChange = ( e ) => {
    const { name, value } = e.target;
    console.log( `${name} : ${value}` );

    /*
    //  와 미쳤네...
    const nextInputs = {
      ...inputs,
      [name] : value,
    };
    setInputs( nextInputs );
    */

    setInputs({
      ...inputs,
      [name] : value,
    })
  };

  const onReset = () => {
    setInputs({
      name: '',
      nickname : '',
    });
  }

  return (
    <div>
      <input
        name="name"
        placeholder="name"
        onChange={onChange}
        value={name}
      />
      <input
        name="nickname"
        placeholder="nickname"
        onChange={onChange}
        value={nickname}
      />

      <button onClick={onReset}>init</button>
      <div>
        <b>VALUE : </b>
        {name} ({nickname})
      </div>
    </div>
  );
}

export default InputSample;