import { useEffect, useReducer } from 'react';

//  loading, success, error
const userReducer = (state, action) => {
  switch (action.type) {
    case 'LOADING':
      return {
        loading: true,
        data: null,
        error: null,
      };
    case 'SUCCESS':
      return {
        loading: false,
        data: action.data,
        error: null,
      };
    case 'ERROR':
      return {
        loading: false,
        data: null,
        error: action.error,
      };
    default:
      throw new Error(`Unhandled User Action Error type: ${action.type}`);
  }
};

export default function useAsync(callback, deps = [], skip = false) {
  const [state, dispatch] = useReducer(userReducer, {
    loading: false,
    data: null,
    error: null,
  });
  const fetchData = async () => {
    dispatch({ type: 'LOADING' });
    try {
      const data = await callback();
      dispatch({ type: 'SUCCESS', data });
    } catch (e) {
      dispatch({ type: 'ERROR', error: e });
      console.log(e.status);
    }
  };

  useEffect(() => {
    if (skip) return;
    fetchData();
    //  eslint-disable-next-line
  }, deps);
  return [state, fetchData];
}
