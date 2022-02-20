import React from "react";

const InputTodo = (props) => {
  const { todoText, onChange, onClick } = props;
  return (
    <div className="inputArea">
      <input
        placeholder="todoを入力"
        value={todoText}
        onChange={onChange}
      />
      <button onClick={onClick}>追加</button>
    </div>
  );
};

export default InputTodo;
