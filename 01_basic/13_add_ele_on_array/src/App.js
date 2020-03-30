import React, { useRef, useState } from 'react';
import UserList from './UserList';
import CreateUser from './CreateUser';

function App() {
  const [inputs, setInputs ] = useState({
    username : '',
    email : '',
  });

  const { username, email } = inputs;
  const onChange = e => {
    const {name, value } = e.target;
    setInputs({
      ...inputs,
      [name] : value
    });
  }

  const [users, setUsers] = useState([
    {
      id: 1,
      username: 'jeje',
      email: 'jeje@example.com'
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@example.com'
    },
    {
      id: 3,
      username: 'raster',
      email: 'rater@example.com'
    }
  ]);

  const nextId = useRef(4);

  const onCreate = () => {
    console.log( nextId.current );
    
    const user = {
      id : nextId.current,
      username,
      email,
    };

    //  push는 사용하면 안됨.
    // setUsers([...users, user]);
    setUsers( users.concat(user) );

    nextId.current += 1;

    setInputs({
      username : '',
      email : ''
    })
  }

  return (
    <>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}onCreate={onCreate}
      />
      <UserList users={users}/>
    </>
  );
}

export default App;
