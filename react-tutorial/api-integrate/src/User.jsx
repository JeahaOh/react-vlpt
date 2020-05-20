import React, { useEffect } from 'react';
import { useUsersState, useUsersDispatch, getUser } from './UsersContext';

const User = ({ id }) => {
  const state = useUsersState();
  const dispatch = useUsersDispatch();
  console.log(`User -> ${id}, state : `, state);

  useEffect(() => {
    getUser(dispatch, id);
  }, [dispatch, id]);

  const { loading, data: user, error } = state.user;

  if (loading) return <div>ON LOADING...</div>;
  if (error) return <div>ON ERROR</div>;
  if (!user) return null;

  return (
    <>
      <div>
        <h2>{user.username}</h2>
        <p>
          <b>Email : </b> {user.email}
        </p>
      </div>
    </>
  );
};

export default React.memo(User);
