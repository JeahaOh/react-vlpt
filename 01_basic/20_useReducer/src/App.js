import React, { useRef, useState, useMemo, useCallback } from 'react';
import UserList from './UserList';
import CreateUser from './CreateUser';

function countActiveUsers( users ) {
  console.log( 'count active users..' );
  return  users.filter( user => user.active ).length;
}

function App() {
  const [inputs, setInputs ] = useState({
    username : '',
    email : '',
  });

  const { username, email } = inputs;

  const [users, setUsers] = useState([
    {
      id: 1,
      username: 'jeje',
      email: 'jeje@example.com',
      active: true,
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@example.com',
      active: false,
    },
    {
      id: 3,
      username: 'raster',
      email: 'rater@example.com',
      active: false,
    }
  ]);

  const nextId = useRef(4);

  const onCreate = useCallback( () => {
    console.log( nextId.current );
    
    const user = {
      id : nextId.current,
      username,
      email,
    };

    //  push는 사용하면 안됨.
    // setUsers([...users, user]);
    setUsers( users => users.concat(user) );

    nextId.current += 1;

    setInputs({
      username : '',
      email : ''
    })
  }, [username, email]);

  const onChange = useCallback(e => {
    const {name, value } = e.target;

    setInputs({
      ...inputs,
      [name] : value
    });
  }, [inputs]);

  const onRemove = useCallback( id => {
    setUsers( users => users.filter( user => user.id !== id ) );
    
  }, []);

  const onToggle = useCallback( id => {
    setUsers( users =>
      users.map(
        user => user.id === id
          ? { ...user, active: !user.active }
          : user
    ));
  }, []);

  //  이곳의 depth는 useMemo가 작동 트리거가 되는 변수를 넣어준다.
  const count = useMemo( () => countActiveUsers( users ), [users] );

  return (
    <>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} onRemove={onRemove} onToggle={onToggle}/>
      <div> active users : {count}</div>
    </>
  );
}

export default App;
