//  action type과 Promise를 만들어주는 함수를 받아옴.
export function createAsyncDispatcher(type, promiseFn) {
  // 성공, 실패에 대한 액선 타입 문자열 준비.
  const SUCCESS = `${type}_SUCCESS`;
  const ERROR = `${type}_ERROR`;

  //  ...rest 를 사용해서 나머지 파라미터를 rest 배열에 담아줌.
  async function actionHandler(dispatch, ...rest) {
    console.log('createAsyncDispatcher.actionHandler get rest : ', rest);
    //  요청 시작
    dispatch({ type });
    try {
      //  rest 배열을 spread로 넣어줌.
      const data = await promiseFn(...rest);
      //  성공
      dispatch({
        type: SUCCESS,
        data,
      });
    } catch (e) {
      //  실패
      dispatch({
        type: ERROR,
        error: e
      });
    }
  }
  return actionHandler;
}


//  UserContext 에서 사용 할 기본 상태
export const initialAsyncState = {
  loading: false,
  data: null,
  error: null,
};

//  로딩중일 때 바뀔 상태 객체.
const loadingState = {
  laoding: true,
  data: null,
  error: null,
};

// 성공했을 때의 상태를 만들어 주는 함수
const success = (data) => ({
  loading: false,
  data,
  error: null,
});

//  실패했을 때의 상태 만들어주는 함수
const error = (error) => ({
  loading: false,
  data: null,
  error: error,
});

//  세가지 액션을 처리하는 리듀서
//  type은 액션 타입, key는 리듀서에서 사용할 필드 이름(user, users)
export function createAsyncHandler(type, key) {
  // 성공, 실패에 대한 액선 타입 문자열 준비.
  const SUCCESS = `${type}_SUCCESS`;
  const ERROR = `${type}_ERROR`;

  function handler(state, action) {
    switch (action.type) {
      case type:
        return {
          ...state,
          [key]: loadingState
        };
      case SUCCESS:
        return {
          ...state,
          [key]: success(action.data)
        }
      case ERROR:
        return {
          ...state,
          [key]: error(action.error)
        }
      default:
        throw new Error("Unhandled Action Type Error");
    }
  }
  return handler;
}