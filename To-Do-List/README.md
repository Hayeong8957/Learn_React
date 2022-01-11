# To-do-List

https://react.vlpt.us/mashup-todolist/01-create-components.html

## 1. 컴포넌트 만들기: 만들어야 할 컴포넌트

### TodoTemplate

- 투두리스트 레이아웃 설정
- 페이지 중앙에 그림자가 적용된 흰색 박스

### TodoHead

- 오늘의 날짜와 요일을 보여줌
- 앞으로 해야 할 일이 몇개 남았는지 보여줌

### TodoList

- 할 일에 대한 정보가 들어있는 todos 배열
  -> 내장함수 `map`을 사용하여 여러개의 TodoItem컴포넌트를 렌더링

### TodoItem

- 각 할 일에 대한 정보 렌더링하는 컴포넌트
- 좌측에 있는 원을 누르면 할 일의 완료 여부를 toggle
- 할 일 완료시, 좌측 체크, 텍스트 색상 연해짐
- 마우스 hover시 휴지통 아이콘, 항목 삭제

### TodoCreate

- 새로운 할 일을 등록할 수 있는 컴포넌트
- TodoTemplate의 하단부에 초록색 원 버튼을 렌더링하고
  이를 클릭하면 할 일을 입력할 수 있는 폼이 나타남.
  버튼을 다시 누르면 폼이 사라짐

## 2. Context API를 활용한 상태 관리
<p align="center"><img width="50%" height="50%" src="https://user-images.githubusercontent.com/70371342/148914134-d56a7bb8-ced0-4d6a-9bd7-e21af67603e9.png" /></p>

