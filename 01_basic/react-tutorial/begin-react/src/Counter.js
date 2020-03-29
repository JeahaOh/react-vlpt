import React, {useState} from 'react';

function Counter() {
  const [ number, setNumber ] = useState(0);
  const onIncrease = () => {
    console.log( '+1' );
    setNumber( number + 1 );
  }

  const onDecrease = () => {
    console.log( '-1' );
    //  리엑트 성능 최적화를 위해서 함수형 업데이터을 사용하기도 하는데,
    //  상태를 업데이트 하는것과, 다른 값을 넣어주는 차이임.
    //  일단 당장은 이런게 있다는것만 알아두자.
    setNumber( prevNumber => prevNumber - 1 );
  }

  return (
    <div>
      <h1>{number}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
    </div>
  );
}
export default Counter;