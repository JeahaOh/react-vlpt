import React, { useEffect } from 'react';

const HistorySample = ({ history }) => {
  const goBack = () => {
    //  뒤로 이동.
    history.goBack();
  };

  const goHome = () => {
    //  특정 경로로 이동.
    history.push('/');
  };

  const replaceToHome = () => {
    history.replace('/');
  };

  useEffect(() => {
    console.log('history : ', history);
    /**
     * history : {
     *   action   : "POP",
     *    //  -> Router에서 가장 마지막에 발생한 액션을 의미
     *   block     : function,
     *    //  -> 페이지 이탈방지를 위해사용
     *   createHref : function,
     *    // -> location을 가지고 주소를 만들어 줌.
     *   go : function,
     *    // ->  페이지 이동
     *   goBack : function,
     *    // -> 페이지 뒤로가기
     *   goForward : function,
     *    // -> 페이지 앞으로 가기
     *   length   : 30,
     *    // -> 방문 기록의 길이
     *   listen : function,
     *    // -> 경로에 변동이 생겼을 때 특정 함수를 호출하기 위해 사용.
     *   push : function,
     *    // -> 페이지 이동할 때 사용
     *   replace : function,
     *    //  -> 방문 기록을 남기지 않고 이동할 때 사용.
     *   location : {
     *      pathname : "/history",
     *      search   : "",
     *      hash     :"",
     *      key      :"loab1z"
     *    }
     * }
     */
    const unblock = history.block('Are You Leaving?');
    return () => {
      //  글 작성 등 페이지 이탈을 방지 해야 할 때 사용.
      unblock();
    };
  }, [history]);

  return (
    <>
      <div>
        <button onClick={goBack}>GO BACK</button>
        <button onClick={goHome}>GO HOME</button>
        <button onClick={replaceToHome}>GO HOME (replace)</button>
      </div>
    </>
  );
};

export default HistorySample;
