## 01 BASIC

### 01 리엑트의 탄생 배경

### 02 작업 환경

- Node.js
- Yarn
- VSCode

새 리엑트 프로젝트 만들기

```zsh
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

### 04 JSX의 기본 규칙

- HTML
  - 태그는 꼭 닫혀야 한다.
  - 두 개 이상의 태그는 하나의 태그에 감싸져있어야 한다.
    - Fragment(빈 태그 <></>)로 닫아도 된다.
    - 가독성을 위해 ()를 사용하면 편하다.
  - class는 className을 사용한다
- JS
  - jsx 내에서 js를 사용한다면 {}를 사용한다.
- CSS
  - jsx 내에서 css를 사용한다면 객체로 만들어준다.
- Comment
  - 주석은 {/\* \*/}

### 05 Props를 통해 컴포넌트에 값 전달하기

- 컴포넌트를 사용할 때 값을 전달할 때 props(properties)사용함.
- 내용과 내용 사이에 넣어주는 컴포넌트가 props.children임.

### 06 조건부 렌더링

- 특정 조건에 따라 다른 결과를 화면에 보여줌.
- 3항 연산자와 && 연산자를 이용한 조건부 출력.
  - 3항 : 값이 아예 다를 경우.
  - && : 값을 보여줄지 말지 다를 경우.
  - props의 이름만 넣어줘도 true로 인식한다.
- JSX에서 falsy한 값은 렌더링 하지 않지만, 0은 출력한다.

### 07 useState를 통한 동적 상태 관리

- 컴포넌트에서 보여줄 내용을 사용자 인터렉션에 따라 변해야 할때 구현하는 방법
- 16.8 이전 버전에서는 함수형 컴포넌트에서 상태 관리를 할 수 없었음.
- 16.8에서 HOOKS가 도입 되면서 함수형 컴포넌트에서도 상태 관리를 할 수 있게됨.

### 08 리엑트에서 **input** 상태 관리하기

### 09 여러개의 input 상태 관리하기

객체 상태를 업데이트 할 때,  
기존의 상태를 복사한 뒤,  
새로운 상태로 덮어 씌우는 것을 불변성을 지킨다고 표현함.  
불변성을 지켜 주어야 리엑트 컴포넌트에서 상태가 업데이트 되었음을 감지하고,  
이에 따른 렌더링을 하게 됨.

객체의 상태를 업데이트 할 땐,  
객체의 상태를 꼭 복사 한 뒤, 특정 값을 덮어 씌워서 업데이트 해주자.

- -> 컴포넌트의 업데이트 성능에 영향을 미침.
- 성능 뿐 아니라 데이터 관리에도 필수인거 같은데?

### 10 useRef로 특정 DOM 선택하기

react에서 DOM을 직접 선택해야 할 상황이 생기면,  
ref를 사용함.  
함수형 컴포넌드에서는 useRef라는 Hook 함수를 사용,  
클래스형 컴포넌트에서는 React.createRef()또는 콜백함수를 사용함.  
당장은 함수형 컴포넌트를 다뤄보자.

### 11 배열 렌더링

Arrays.map()을 이용한다.  
key는 있어야 하고, index보단 고유값이 있는게 좋다.

### 12 useRef로 컴포넌트 안의 변수 만들기

컴포넌트 내부에서 유지하고싶은 값이 있을 경우, useRef를 이용해서 변수를 만든다.  
컴포넌트 안에서 변수를 선언할 경우, 리렌더링 시 변수의 값이 초기화 됨.  
그 변수의 값을 계속 유지하고 싶을 경우, useState를 사용할 수 있음,  
BUT useState를 이용할 경우, 컴포넌트는 리렌더링이 됨.  
값을 바꿨을때, 굳이 리랜더링을 할 필요가 없다면, useRef를 사용할 수 있음.  
useRef는, 컴포넌트가 리렌더링 될 때마다, 유지해야하는 값을 관리할 때도 사용할 수 있음.  
주로 setTimeout, setInterval의 id, 외부 라이브러리로 생성된 인스턴스, 스크롤 위치 기억할때 등 사용할 수 있음.  
**useRef로 관리하는 값은 바뀌어도 컴포넌트가 리렌더링 되지 않는다는 것.**

### 13 배열에서 항목 추가하기

spread 연산자나, concat을 사용한다.

### 14 배열에서 항목 제거하기

filter를 사용해서 제거한다.

### 15 배열에서 항목 수정하기

map을 사용해서 수정해 준다.

### 16 useEffect를 사용해서 마운트 언마운트 업데이트시 할 작업

useEffect라는 Hook 함수를 사용해 볼거임.  
userEffect를 사용하면, 우리가 만든 컴포넌트가 화면에 나타낼 때, 화면에서 사라질 때 특정 작업을 할 수 있음.  
컴포넌트가 update되거나 rerendering 될 때 할 작업을 설정해 줄 수 있음.  
첫번째 인자로 함수를 넣어주고, 두번째 인자로는 depth라는 배열을 넣어준다.  
특정 함수를 반환하면 업데이트 직전에 호출한다.  
useEffect에서 사용하는 값이나 상태 props가 있다면 depth에 넣어줘야 함.

### 17 useMemo Hook

useMemo Hook은 성능을 최적화 할 때 사용함.  
useMemo는 특정 값이 바뀌었을 때만 특정 함수를 호출해서 연산하게 하는 함수임.
이전에 연산된 값을 재사용하는 방법.  
성능을 최적화 할때 사용함.

### 18 useCallback Hook

이전에 만든 함수를 새로 만들지 않고 재사용하도록 도와주는 Hook.  
App.js에서 사용하는 onCreate, onToggle, onRemove등의  
기존에 만든 함수들은 컴포넌트가 리렌더링 될 때마다 함수를 새로 만들고 있었음.  
당연히, 재 사용하는 것이 좋음.  
React.memo를 사용하기 전에 useMemo와 useCallback으로 최적화 준비 작업을 하는 거라고 생각하면 됨.

### 19 React.memo

컴포넌트에서 리렌더링이 불 필요할때 이전에 렌더링 했던 결과를 재사용하는 방법.  
함수형 업데이트를 사용한다.  
BUT, onRemove나 onToggle에서 최신상태의 users를 바라보지 않기 때문에  
복잡한 로직에서는 문제가 생길 수도 있음.

연산된 값을 재사용할땐 useMemo,  
특정 함수를 재사용할 땐 useCallback,  
렌더린된 컴포넌트를 재사용할 땐 React.memo를 사용.  
무조건 useCallback, useMemo을 사용한다고 성능 최적화가 되진 않음.  
경우에 따라서 사용해야함.

### 20 useReducer Hook

useState가 아닌 useReducer로 컴포넌트의 상태를 관리해 보자.  
기존에는 useState로 상태를 설정해 주었는데, useReducer를 이용해서도 상태를 업데이트 할 수 있음.  
useState는 다음 상태를 직접 지정해주는 방법으로 상태를 관리하는 반면,  
useReducer는 action이라는 객체를 기반으로 상태를 업데이트함.  
action 객체는 update할 때 참조하는 객체인데,

```js
dispatch({
  type: 'INCREMENT',
  diff: 4,
});
```

type이라는 값을 참조해서 어떤 action을 할지 명시할 수 있고,  
업데이트를 할때 참조할 값도 같이 넣어줄 수 있음.  
그리고, 컴포넌트의 상태 업데이트 로직을 컴포넌트 밖으로 분리 가능. -> 다른 파일에서 불러와 사용도 가능.  
reducer : 상태를 업데이트 하는 함수.

```js
//  현재 상태와 액션은 받아와서,
function thisIsReducer(state, action) {
  //  액션 타입에 따라 상태를 업데이트 해주는 reducer의 로직.
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}
//  useReducer를 사용할 땐, 이런식으로 선언 하는데,
//  첫번째 파라미터로 만들어준 reducer를 넣어주고,
//  두번째 파라미터로 그 기본값(문자열, 숫자, 객체, 배열 등)을 넣어줌.
const [state, dispatch] = useReducer(thisIsReducer, 0);
//  첫번째는 reducer에서 가져오는 변수는 관리 할 상태,
//  두번째는 dispatch로 액션을 발생시키는 함수 객체임.
```

### 21 useReducer - App 에서 useReducer 사용하기.

관리하는 값이 단순하다면 useState가 낫다.(간단하면 useState)  
관리하는 값이 많고 상태의 구조가 복잡하다면 useReducer가 낫다.  
(setter를 한 함수에서 여러번 사용한다면 useReduce를 사용하는게 낫다.)

### 22 커스텀 Hook 만들어 사용하기

컴포넌트를 만들다 반복되는 로직들이 생길 수 있음.  
이런 경우 useEffect, useState, useReducer를 이용해서 컴포넌트에서 사용하고 싶은 값을 반환하는 custom Hook을 만들면 됨.

### 23 Context API를 사용한 전역 값 관리

특정 함수를 여러 컴포넌트에 거쳐서 전달해야 한다면,  
dispatch를 관리하는 Context를 만들어서 필요한 곳에서 바로 dispatch를 불러  
사용하면 깔금하게 사용 가능.  
useState가 아닌 useReducer를 사용했기 때문에, dispatch를 context에 담을 수 있었음.  
context에 상태도 넣어서 관리 가능함.

- -> CreateUser Component도 Context API를 사용하도록 해보자.

#### 24 useDispatch Context

특정 함수를 여러 컴포넌트에 거쳐서 전달해야 한다면,  
dispatch를 관리하는 Context를 만들어서 필요한 곳에서 바로 dispatch를 불러  
사용하면 깔금하게 사용 가능.  
context에 상태도 넣어서 관리 가능함.

#### 25 immer를 사용한 더 쉬운 불변성 지키기

immer를 사용하면 불변성을 해치는 코드를 작성해도,  
immer가 대신 불변성을 유지해준다.

#### 26 reducer Immer로 구현하기.

immer를 사용한다고 무조건 코드가 깔끔해지는건 아니므로, 적재적소에 사용해주는게 좋다.

### 27 Class 형 Component

class 형 컴포넌트의 사용은 지양하는 추세이지만 일단 알아는 보자.  
그 이유는 useEffect나 Hooks를 사용할 수 있게 되면서 함수형 컴포넌트가 트렌드가 됨.

### 28 Class Component의 state와 setState

class형 component의 state는 무조건 객체여야 한다.  
setState는 비동기로 상태 변경을 요청하는 함수로 이해 해야함.  
한 메소드에서 여러번 setState를 사용할 일이 있다면 함수형 update를 해줘야 함.

### 29 LifeCycle Method

class형 component를 사용할 경우 컴포넌트 생명주기 메소드를 사용 가능함.  
function형 component에서는 useEffect가 이와 비슷하고,  
작동 방식은 다르고 서로 커버하는 함수가 약간씩 다르긴 함.  
사용빈도가 높진 않지만 일단 알아 두도록 하자.  
https://bit.ly/fcreact-lifecycle

### 30 componentDidCatch()

class형 component를 사용하는 리엑트 어플리케이션에서의 에러 처리.

### 31 componentDidCatch()와 Sentry 연동

sentry 서비스를 이용해서 slack으로 에러 메세지를 받는 방법.  
실습은 ㄴㄴ.

### 32 Prettier

Prettier는 자동으로 코드의 스타일을 지정해주는 툴임.  
커스터마이징 가능.  
.prettierrc에서 포메팅 설정 가능.  
vscode 설정에서 `format on save` on으로 하면 저장할 때마다 prettier가 적용됨.  
저장할 때 포메팅하면 굉장히 편하다고 함.

### 33 ESLint

ESLint는 JS문법을 검사해주며, code format을 관리해 줌.  
나는 이거 별로던데...

### 34 ESLint 설정 커스터마이징

설정 하는 방법이 따로 있음.

### 35 Snippet(코드조각)

자주 사용하는 코드에 대하여 단축어를 만들어 사용하는 것.  
Snippet을 직접 만든다는데... 당장 나한테 필요하진 않을거 같은데?  
졸라 편해 보이긴 함.

### 36 리엑트 끝.
