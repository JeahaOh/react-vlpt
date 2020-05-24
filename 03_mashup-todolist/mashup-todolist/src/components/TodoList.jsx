import React from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";
import { useTodoState } from "../TodoContext";

const TodoListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
  /* 사이즈 조정이 잘 되고 있는지 확인하기 위한 임시 스타일 */
  // background: grey;
`;

const TodoList = () => {
  const todos = useTodoState();
  console.log("TodoList State : ", todos);
  return (
    <div>
      <TodoListBlock>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            id={todo.id}
            text={todo.text}
            done={todo.done}
          />
        ))}
      </TodoListBlock>
    </div>
  );
};

export default React.memo(TodoList);
