import React, { useState, useRef, useCallback } from 'react';

export default React.memo(function InputSample2() {
  const [inputs, setInputs] = useState({
    name: '',
    email: '',
  });
  const nameInput = useRef()
  const { name, email } = inputs;

  const onChange = useCallback((e) => {
    const { name, value } = e.target;
    console.log(`name : ${name} \nvalue : ${value}`);
    setInputs(inputs => ({
      ...inputs,
      [name]: value,
    }));
  }, []);

  const onReset = useCallback(() => {
    setInputs(inputs => ({
      name: '',
      email: '',
    }), []);
    nameInput.current.focus();
  }, []);

  return (
    <>
      <div>
        <input
          name="name"
          value={name}
          placeholder="name"
          onChange={onChange}
          ref={nameInput}
        />
        <input
          name="email"
          value={email}
          placeholder="email"
          onChange={onChange}
        />
        <button onClick={onReset}>Reset</button>
        <div>
          <b>{name} {email}</b>
        </div>
      </div>
    </>
  );
});