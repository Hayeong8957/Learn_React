// 오늘의 날짜, 요일, 남은 할 일 개수
import React from "react";
import styled from "styled-components";
import { useTodoState } from "../TodoContext";

const TodoHeadBlock = styled.div`
  padding-top: 48px;
  padding-left: 32px;
  padding-right: 32px;
  padding-bottom: 24px;
  border-bottom: 1px solid #e9ecef;
  h1 {
    // 날짜
    margin: 0;
    font-size: 36px;
    color: #343a40;
  }
  .day {
    // 요일
    margin-top: 4px;
    color: #868e96;
    font-size: 21px;
  }
  .tasks-left {
    // 남은 할 일 개수
    color: #20c997;
    font-size: 18px;
    margin-top: 40px;
    font-weight: bold;
  }
`;

function TodoHead() {
  const todos = useTodoState();
  console.log(todos);
  return (
    <TodoHeadBlock>
      <h1>2022년 01월 11일</h1>
      <div className="day">화요일</div>
      <div className="tasks-left">할 일 3개 남음</div>
    </TodoHeadBlock>
  );
}

export default TodoHead;
