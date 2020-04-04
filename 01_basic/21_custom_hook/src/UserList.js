import React, { useEffect } from 'react'

const User = React.memo( function User({user, onRemove, onToggle}) {
  const {username, email, id, active} = user;
  
  /*
  useEffect( () => {
    console.log( 'component appear on window' );
    // mount 될때 할 수 있는 일.
    // props -> state
    // REST API
    // D3 ETC LIB...
    // setInterval, setTimeout

    return () => {
      
      //  return은 화면에서 사라질 때, unmount 할 때 뒷처리 하듯 호출됨.
      //  clearInterval, clearTimeout
      //  LIB 인스턴스 제거.
      console.log( 'component disappear from window' );
    }
  }, []);
  */

  //  특정 값이 update 난 직후에 호출됨.
  useEffect( () => {
    console.log( 'user 값이 설정 됨.' );
    console.log( user );

    return () => {
      console.log( 'user 값이 변경 전.' );
      console.log( user );
    }
  }, [user]);

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
});

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

export default React.memo(
  UserList,
  (prevProps, nextProps) => nextProps.users === prevProps.users
);