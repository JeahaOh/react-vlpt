import React, { useReducer, useCallback, useEffect } from 'react';

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const counterReducer = function (state, action) {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      throw new Error('Unhandled action');
  }
}

export default React.memo(function Counter() {

  useEffect(() => {
    console.log('Counter Render : ');
    return () => {
      console.log('Counter On UNMOUNT : ');
    }
  }, []);

  const [number, dispatch] = useReducer(counterReducer, 0);

  const onIncrease = useCallback(() => {
    console.group('increase');
    dispatch({
      type: INCREMENT
    });
    console.groupEnd();
  }, []);

  const onDecrease = useCallback(() => {
    console.group('decrease');
    dispatch({
      type: DECREMENT
    });
    console.groupEnd();
  }, []);

  return (
    <>
      <div>
        <h1>{number}</h1>
        <button onClick={onIncrease}>+1</button>
        <button onClick={onDecrease}>-1</button>
      </div>
    </>
  );
});