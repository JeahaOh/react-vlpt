import React from 'react'

function User ({user}) {
  return (
    <div>
      <b>{user.username}</b>
      <span>({user.email})</span>
    </div>
  );
}

function UserList () {
  const users = [
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
  ]


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