import React from "react";
import { Mutation } from "react-apollo";
import { TODO_LIKE, GET_TODOS } from "./query";

const TodoLike = ({ id, likes }) => {
  return (
    <Mutation
      mutation={TODO_LIKE}
    >
      {likeTodo => {
        return (
          <i
            className="fas fa-heart has-text-danger"
            onClick={() => {
              likeTodo({
                variables: { id },
                optimisticResponse: {
                  __typename: "mutation",
                  likeTodo: {
                    id,
                    __typename: "Todo",
                    likes: likes + 1
                  }
                }
              });
            }}
          > click</i>
        );
      }}
    </Mutation>
  );
};

export default TodoLike;
