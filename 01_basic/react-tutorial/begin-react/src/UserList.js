import React, { useEffect, useContext } from 'react';
import { UserDispatch } from './App';

const User = React.memo(({ user }) => {
  const { id, name, email, active } = user;
  const { dispatch } = useContext(UserDispatch);

  useEffect(() => {
    console.log('User Component On Effect : ', user);
    return () => {
      console.log('User Component On Side Effect : ', user);
    }
  }, [user]);

  return (
    <>
      <div style={{
        color: active ? 'red' : 'dimgrey',
        cursor: 'pointer'
      }}
        onClick={() => dispatch({
          type: 'TOGGLE_USER',
          id
        })}
      >
        <span>
          No.{id}</span>&ensp;
        <b>
          {name}</b>&ensp;
        <span>{email}</span>&ensp;
        <button onClick={() => dispatch({
            type: 'REMOVE_USER',
            id
          })}>삭제</button>
      </div>
    </>
  );
}, (prevProps, nextProps) => nextProps.user === prevProps.user);

export default React.memo(function UserList({ users }) {
  useEffect(() => {
    console.log('UserList Component On Effect');
    return () => {
      console.log('UserList Component On Side Effect');
    };
  });
  return (
    <>
      <div>
        {users.map(
          user => <User user={user} key={user.id} />
        )}
      </div>
    </>
  );
});