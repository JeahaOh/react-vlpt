import React, { useReducer, useMemo, createContext } from 'react';
import Hello from './Hello';
import Wrapper from './Wrapper';
import Counter from './Counter';
import InputSample2 from './InputSample2';
import UserList from './UserList';
import CreateUser from './CreateUser';
import ContextSample from './ContextSample.jsx';
import produce from 'immer';

//window.produce = produce;

const countActiveUsers = function (users) {
  console.log('counting activated users...');
  return users.filter(user => user.active).length;
}

const appReducer = (state, action) => {
  console.log('appReducer : ', state, action);
  switch (action.type) {
    case 'CREATE_USER':
      // return {
      //   inputs: initialState.inputs,
      //   users: state.users.concat(action.user)
      // };
      return produce(state, draft => {
        draft.users.push(action.user);
      });
    case 'TOGGLE_USER':
      // return {
      //   ...state,
      //   users: state.users.map(user =>
      //     user.id === action.id
      //       ? { ...user, active: !user.active }
      //       : user
      //   )
      // };
      return produce(state, draft => {
        const user = draft.users.find(user => user.id === action.id);
        user.active = !user.active;
      });
    case 'REMOVE_USER':
      // return {
      //   ...state,
      //   users: state.users.filter(user =>
      //     user.id !== action.id
      //   )
      // }
      return produce(state, draft => {
        const idx = draft.users.findIndex(user => user.id === action.id);
        draft.users.splice(idx, 1);
      });
    default:
      throw new Error('Unhandled Action');
  }
}

const initialState = {
  users: [
    {
      id: 1,
      name: 'AAA',
      email: 'a@test.com',
      active: true,
    }, {
      id: 2,
      name: 'BBB',
      email: 'b@test.com',
      active: false,
    }, {
      id: 3,
      name: 'CCC',
      email: 'c@test.com',
      active: true,
    }
  ]
}

export const UserDispatch = createContext(null);

function App() {

  const [state, dispatch] = useReducer(appReducer, initialState);
  const { users } = state;
  const count = useMemo(() => countActiveUsers(users), [users]);

  return (
    <>
      <Wrapper>
        <Hello
          name={"asdf"}
          color="red"
        />
        <Hello
          color="#4400FF"
          isSpecial={true}
        />
        <Hello
          name="ASDF1020"
          color="grey"
          isSpecial
        />
      </Wrapper>
      <Wrapper>
        <Counter />
      </Wrapper>
      <Wrapper>
        <InputSample2 />
      </Wrapper>
      <Wrapper>
        <ContextSample />
      </Wrapper>
      <Wrapper>
        <UserDispatch.Provider value={{ dispatch, lastId: users.length }}>
          <CreateUser />
          <UserList users={users} />
          <div>Activated Users : {count}</div>
        </UserDispatch.Provider>
      </Wrapper>
    </>
  );
}

export default App;
