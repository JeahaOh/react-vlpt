# React-Router

## SPA (Single Page Router)

클라이언트 단에서 페이지를 렌더링 함.
서버측의 리소스를 아낄 수 있음.  
앱의 규모가 커지면 JS파일이 커짐.(이미 클대로 크게 사용하고 있지 않은가?)  
js가 구동되지 않으면 UI를 볼 수 없음.(컴색엔진 크롤링 불가. but, 이 부분은 해결 가능.)

```
  npx create-react-app router-tutorial
  cd router-tutorial
  yarn add react-router-dom
```

## 프로젝트에 라우터 적용

index.js에 BrowserRouter를 사용.  
JSX 컴포넌트 생성, Route, Link 를 이용해서 라우터 적용.

## 파라미터와 쿼리

주소를 통해 동적인 값을 가져올 때 사용함.

- URL Parameter
  - `/profiles/jeaha`
- Query
  - `filter?type=asdf&sort_by=date`

## 서브 라우터

라우트 내부의 라우트를 만드는것.  
컴포넌트를 만들어서 그 안에 또 Route 컴포넌트를 렌더링 하면 됨.  
특정 라우트 내에 탭을 만들게 된다면 state로 관리하는 것 보다 편함.  
링크를 통해 다른것에 쉽게 진입시킬 수도 있음.  
검색엔진을 고려하게 될 경우 검색이 용이해짐.

## React-Router의 부가기능

### History 객체

match, location과 함께 전달되는 props중에 하나임.  
뒤로가기, 특정 경로 이동, 이탈 방지 등으로 컴포넌트에 직접 접근할 수 있음.

### Block

### withRouter

Route가 사용되지 않은 컴포넌트에서 조건부로 이동을 해야할 때 사용함.(로그인등 기능으로 route 해야 할 경우.)  
match, location, history 사용.  
사용된 경로에 따라 match가 보여지는것이 다름.

## react-router 부가기능

### Switch

Switch 컴포넌트를 사용하면 router에서 가장 먼저 매칭되는 컴포넌트를 보여줌.  
Not Found Page를 렌더할때 사용함.

### NavLink

현재 주소와 일치한다면, 스타일이나 클래스 네임을 바꿔줄 수 있음.

## useReactRouter Hook

withRouter의 대체제로 withRouter가 불편하다 싶을 때만 사용을 권장함.
