import React, { useState } from 'react';
import User from './User';
import { useUsersState, useUsersDispatch, getUsers } from './UsersContext';

const Users = React.memo(() => {
  console.log('Users');
  const [userId, setUserId] = useState(null);
  const state = useUsersState();
  const dispatch = useUsersDispatch();

  const { loading, data: users, error } = state.users;

  const fetchData = () => {
    getUsers(dispatch);
  };

  if (loading) return <div>ON LOADING...</div>;
  if (error) return <div>ERROR HAS OCCURED!</div>;
  if (!users) return <button onClick={fetchData}>LOAD</button>;

  console.group(' Users Componet has : ' + users.length);
  // users.map((user) => {
  //   console.log(
  //     `id : ${user.id}, username: ${user.username}, name: ${user.name}`,
  //   );
  // });
  console.groupEnd();

  return (
    <>
      <ul>
        {users.map((user) => (
          <li
            key={user.id}
            onClick={() => setUserId(user.id)}
            style={{ cursor: 'pointer' }}
          >
            {user.username} ({user.name})
          </li>
        ))}
      </ul>
      <button onClick={fetchData}>RELOAD</button>
      {userId && <User id={userId} />}
    </>
  );
});

export default Users;
