# react-vlpt
REACT, VLPT'S LECTURE.
  
  ---
## 01 BASIC
### 01 리엑트의 탄생 배경
  
### 02 작업 환경
- Node.js
- Yarn
- VSCode
  
새 리엑트 프로젝트 만들기
```
  npx create-react-app begin-react
  yarn start
```
  
### 03 First React Component
첫번째 리엑트 컴포넌트 만들기.  
리엑트 컴포넌트는 함수, 클래스 형태로 만들 수 있음.  
지금 단계에서는 함수로 작성해 보도록 함.  
리엑트 컴포넌트는 xml 형식의 값을 리턴할 수 있는데, 이를 JSX라고 함.  
컴포넌트를 다른 컴포넌트에서 사용할 수 있도록 export 해줘야 함.  
컴포넌트를 사용하기 위해서는 import 해주면 됨.  
컴포넌트는 일종의 UI 조각임.  
따라서 쉽게 재사용 가능함.  
  
index.js를 보면,  
ReactDOM.render의 역할은 브라우져에 있는 실제 DOM 내부에 리엑트 컴포넌트를 렌더링 하겠다는 것을 의미함.  
`id`가 `root`인 DOM을 선택하고 있는데 이는 `public/index.html`의 `#root`를 의미함.  
결국, 리엑트 컴포넌트가 렌더링 될 때는, 렌더링 된 결과물 위 `#root`인 div 내부에 렌더링 되는 것임.  
  
