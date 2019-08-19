import React from "react";
import { Container } from "./style";
import TodoLike from "./likes";

const TodoItem = ({ id, likes, content }) => (
  <Container>
    <header>
      <p>Todo</p>
    </header>
    <div>
      <div>{content}</div>
    </div>
    <div>
      <span> likes {likes}</span>
      <TodoLike {...{ id, likes }} />
    </div>
  </Container>
);

export default TodoItem;
