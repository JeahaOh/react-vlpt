import React, { useEffect, useRef, useContext } from 'react';
import useInputs from './useInputs';
import { UserDispatch } from './App';

const CreateUser = () => {


  const [{ name, email }, onChange, reset] = useInputs({
    name: '',
    email: ''
  });

  const { dispatch, lastId } = useContext(UserDispatch);
  const nextId = useRef(lastId + 1);

  const onCreate = () => {
    dispatch({
      type: 'CREATE_USER',
      user: {
        id: nextId.current,
        name, email
      }
    });
    reset();
    nextId.current += 1;
  };

  useEffect(() => {
    console.log('CreateUser Component Render : ', name, email);
    // console.log('dispatch : ', UserDispatch);
    return () => {
      console.log('CreateUser Component On UNMOUNT : ', name, email);
    }
  }, [name, email]);

  return (
    <>
      <input
        name="name"
        placeholder="name"
        onChange={onChange}
        value={name}
      />
      <input
        name="email"
        placeholder="email"
        onChange={onChange}
        value={email}
      />
      <button onClick={onCreate}>Regist</button>
    </>
  );
};

export default React.memo(CreateUser);