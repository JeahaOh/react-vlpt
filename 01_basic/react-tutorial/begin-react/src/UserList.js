import React from 'react'

function User ({user}) {
  return (
    <div>
      <b>{user.username}</b>
      <span>({user.email})</span>
    </div>
  );
}

function UserList ({ users }) {

  return (
    // 뭐가 이렇게 어렵냐
    <div>
      {
        users.map(
          user => (<User user={user} key={user.id}/>)
        )
      }
    </div>
  );
}

export default UserList;