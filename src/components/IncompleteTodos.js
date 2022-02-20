import React from "react";

const IncompleteTodos = (props) => {
  const { todos, onClickComplete, onClickDelete } = props;
  return (
    <div className="imcompleteArea">
      <p className="title">未完了のtodo</p>
      <ul>
        {todos.map((todo, index) => {
          return (
            <li key={todo} className="todoList">
              <p>{todo}</p>
              <button
                onClick={() => {
                  onClickComplete(index);
                }}
              >
                完了
              </button>
              <button
                onClick={() => {
                  onClickDelete(index);
                }}
              >
                削除
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default IncompleteTodos;
