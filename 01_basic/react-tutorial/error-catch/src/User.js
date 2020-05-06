import React from 'react';

export default function User({ user }) {
  // if( !user ) return null;
  return (
    <div>
      <div>
        <b>ID</b> : {user.id}
      </div>
      <div>
        <b>Username</b> : {user.username}
      </div>
    </div>
  );
};