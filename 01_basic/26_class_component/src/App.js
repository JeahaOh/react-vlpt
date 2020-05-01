import React, { useReducer, useMemo, createContext } from 'react';
import UserList from './UserList';
import CreateUser from './CreateUser';
import produce from 'immer';

function countActiveUsers( users ) {
  console.log( 'count active users..' );
  return  users.filter( user => user.active ).length;
}

const initialState = {

  users : [
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
  ]
}

function reducer( state, action ) {
  switch ( action.type ) {
    case 'CREATE_USER' :
      // return {
      //   inputs : initialState.inputs,
      //   users: state.users.concat(action.user)
      // };
      return produce( state, draft => {
        draft.users.push( action.user );
      });
    case 'TOGGLE_USER' :
      // return {
      //   ...state,
      //   users : state.users.map( user => 
      //     user.id === action.id
      //       ? { ...user, active : !user.active }
      //       : user
      //   )
      // };
      return produce( state, draft => {
        const user = draft.users.find( user => user.id === action.id );
        user.active = ! user.active;
      });
    case 'REMOVE_USER' : 
      // return {
      //   ...state,
      //   users : state.users.filter( user => user.id !== action.id )
      // };
      return produce( state, draft => {
        const index = draft.users.findIndex(user => user.id === action.id);
        draft.users.splice( index, 1 );
      });
    default : 
      throw new Error( 'REDUCER UNHANDELD ACTION' );
  }
}

export const UserDispatch = createContext( null );

function App() {
  const [state, dispatch] = useReducer( reducer, initialState );
  const { users } = state;
  const count = useMemo( () => countActiveUsers(users), [users]);

  return (
    <UserDispatch.Provider value={dispatch}>
      <CreateUser />
      <UserList users={users} />
      <div> active users : {count}</div>
    </UserDispatch.Provider>
  );
}

export default App;
