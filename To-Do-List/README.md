# To-do-List

https://react.vlpt.us/mashup-todolist/01-create-components.html

<br />

## 1. 컴포넌트 만들기: 만들어야 할 컴포넌트

### TodoTemplate

- 투두리스트 레이아웃 설정
- 페이지 중앙에 그림자가 적용된 흰색 박스

### TodoHead

- 오늘의 날짜와 요일을 보여줌
- 앞으로 해야 할 일이 몇개 남았는지 보여줌

### TodoList

- 할 일에 대한 정보가 들어있는 `todos` 배열
  -> 내장함수 `map`을 사용하여 여러개의 `TodoItem`컴포넌트를 렌더링

### TodoItem

- 각 할 일에 대한 정보 렌더링하는 컴포넌트
- 좌측에 있는 원을 누르면 할 일의 완료 여부를 `toggle`
- 할 일 완료시, 좌측 체크, 텍스트 색상 연해짐
- `TodoItemBlock`마우스 `hover`시 휴지통 아이콘(`Remove`컴포넌트), 항목 삭제 위한 `Component Selector`
- 가변 스타일링 -> React컴포넌트에 넘어온 props에 따라 다른 스타일 적용

### TodoCreate

- 새로운 할 일을 등록할 수 있는 컴포넌트
- `TodoTemplate`의 하단부에 초록색 원 버튼을 렌더링하고
  이를 클릭하면 할 일을 입력할 수 있는 폼이 나타남.
  버튼을 다시 누르면 폼이 사라짐
- `useState`사용 -> 토글할 수 있는 `open`값 관리
  -> 이 값이 true일 때는 아이콘을 45도 돌려서 X모양이 보여지게 함
  -> 버튼 색상을 빨간색으로 바꿔줌
  -> 할 일을 입력 할 수 있는 폼도 보여줌.
  
<br/>

## 2. Context API를 활용한 상태 관리

<p align="center">
  <img width="40%" height="40%" src="https://user-images.githubusercontent.com/70371342/148914901-2d69bca1-4647-4356-81b7-4a9df633fc3b.png" />
</p>

### 1) 리듀서 만들기

- `TodoContext.js`파일 안에 `useReducer`를 사용하여 상태를 관리하는 `TodoProvider`컴포넌트 생성

### 2) Context만들기

- `state`와 `dispatch`를 `Context`통하여 다른 컴포넌트에서 바로 사용할 수 있게 함
- 두개의 `Context`를 만들어서 `state`와 `dispatch`를 따로 넣어줄 것
  -> `dispatch`만 필요한 컴포넌트에서 불필요한 렌더링을 방지할 수 있다.
- `Context`에서 사용할 값을 지정할 때는 `Provider`컴포넌트를 렌더링하고 `value`를 설정하고 `props`로 받아온 `children`값을 내부에 렌더링

### 3) 커스텀 Hook 만들기 & Hook에서 에러 처리

- 컴포넌트에서 `useContext`를 직접 사용하는 대신, `useContext`를 사용하는 커스텀 Hook을 만들어서 내보내줄 것
- `Hook` 사용하려면, 해당 컴포넌트가 `TodoProvider`컴포넌트 내부에 렌더링되어 있어야 한다.
- `App`컴포넌트에서 모든 내용을 `TodoProvider`로 감싸야하는데, `TodoProvider`로 감싸져있지 않다면 에러 처리 -> 문제점 빠르게 인지 가능

### 4) nextId값 관리하기

- `nextId`가 의미하는 값은 새로운 항목을 추가할 때 사용할 고유 ID임 (`useRef`를 사용하여 관리)
  
<br/>

## 3. 기능 구현하기

- `Context`와 연동하여 기능 구현
- `Context`에 있는 `state`를 받아와서 렌더링을 하고, 필요한 상황에는 특정 액션을 `dispatch`하면 됨

### TodoHead 완성하기

- `TodoHead`에서는 `done`값이 `false`인 항목들의 개수를 화면에 보여준다.
- `Date`의 `toLocaleString`이라는 함수를 사용하여 날짜가 보여지는 부분 작업

### TodoList 완성하기

- `state`를 조회하고 이를 렌더링해주어야 한다.
- `onToggle`, `onRemove`와 같이 항목에 변화를 주는 작업은 `TodoItem`에서 해줌.

### TodoItem 완성하기

- `dispatch`를 사용해서 토글 기능과 삭제 기능을 구현
- `React.memo`사용하여 내보내기 -> 다른 항목이 업데이트 될 때, 불필요한 리렌더링 방지 -> 성능 최적화

### TodoCreate 완성하기

- `onSubmit`에서는 새로운 항목을 추가하는 액션을 `dispatch`한 후,
  `value`초기화 및 `open`값을 `false`로 전환
- `React.memo`사용하여 내보내기 -> `TodoContext`에서 관리하고 있는
  `state`가 바뀔 때 `TodoCreate`의 불필요한 리렌더링 방지
  => `Context`를 여러개 만들었던 이유
