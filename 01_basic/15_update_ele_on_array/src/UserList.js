import React from 'react'

function User ({user, onRemove, onToggle}) {
  const {username, email, id, active} = user;
  return (
    <div>
      <b
        style={{
        color: active  ? 'green' : 'black',
        cursor: 'pointer'
      }}
        onClick={( () => onToggle(id))}
      >
        {username}
      </b>
      &ensp;
      <span>({email})</span>
      <button onClick={ () => onRemove(id) }>삭제</button>
    </div>
  );
}

function UserList ({ users, onRemove, onToggle }) {

  return (
    // 뭐가 이렇게 어렵냐
    <div>
      {
        users.map(
          user => (
            <User 
              user={user}
              key={user.id}
              onRemove={onRemove}
              onToggle={onToggle}
            />
          )
        )
      }
    </div>
  );
}

export default UserList;