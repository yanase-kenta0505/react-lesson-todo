import React from "react";

const CompleteTodos = (props) => {
  const { todos, onClickBack } = props;
  return (
    <div className="completeArea">
      <p className="title2">完了のtodo</p>
      <ul>
        {todos.map((todo, index) => {
          return (
            <li key={todo} className="todoList">
              <p>{todo}</p>
              <button
                onClick={() => {
                  onClickBack(index);
                }}
              >
                戻す
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CompleteTodos;
