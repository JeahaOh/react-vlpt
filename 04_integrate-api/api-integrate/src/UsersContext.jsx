import React, { createContext, useReducer, useContext } from 'react';
import {
  createAsyncDispatcher,
  createAsyncHandler,
  initialAsyncState,
} from './asyncActionUtils';
import * as api from './api';

const initialState = {
  users: initialAsyncState,
  user: initialAsyncState,
};

const usersHandler = createAsyncHandler('GET_USERS', 'users');
const userHandler = createAsyncHandler('GET_USER', 'user');

/**
 * 위에서 만든 객체 / 유틱 함수들을 사용하여 리듀스 작성.
 * GET_USERS
 * GET_USERS_SUCCESS
 * GET_USERS_ERROR
 * GET_USER
 * GET_USER_SUCCESS
 * GET_USER_ERROR
 * @param {*} state
 * @param {*} action
 */
const usersReducer = function (state, action) {
  switch (action.type) {
    case 'GET_USERS':
    case 'GET_USERS_SUCCESS':
    case 'GET_USERS_ERROR':
      return usersHandler(state, action);

    case 'GET_USER':
    case 'GET_USER_SUCCESS':
    case 'GET_USER_ERROR':
      return userHandler(state, action);
    default:
      throw new Error(`Unhandled action type : ${action.type}`);
  }
};

//  State 용 Context와 Dispatch용 Context 따로 만들어 주기
//  최적화 할 때 편함.
const UsersStateContext = createContext(null);
const UsersDispatchContext = createContext(null);

//  위에 선언한 두가지 Context 들의 Provider로 감싸주는 컴포넌트
export function UsersProvider({ children }) {
  const [state, dispatch] = useReducer(usersReducer, initialState);
  return (
    <UsersStateContext.Provider value={state}>
      <UsersDispatchContext.Provider value={dispatch}>
        {children}
      </UsersDispatchContext.Provider>
    </UsersStateContext.Provider>
  );
}

//  State를 쉽게 조회할 수 있게 해주는 커스텀 Hook
export function useUsersState() {
  const state = useContext(UsersStateContext);
  if (!state) {
    throw new Error('Cannot find UsersProvider');
  }
  return state;
}

//  Dispatch 를 쉽게 사용 할 수 있게 해주는 커스텀 Hook
export function useUsersDispatch() {
  const dispatch = useContext(UsersDispatchContext);
  if (!dispatch) {
    throw new Error('Cannot find Users Provider');
  }
  return dispatch;
}

export const getUsers = createAsyncDispatcher('GET_USERS', api.getUsers);
export const getUser = createAsyncDispatcher('GET_USER', api.getUser);
