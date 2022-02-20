import React, { useState } from "react";
import "./App.css";
import InputTodo from "./components/InputTodo";
import IncompleteTodos from "./components/IncompleteTodos";
import CompleteTodos from "./components/CompleteTodos";

const App = () => {
  const [incompleteTodos, setincompleteTodos] = useState(["宿題", "選択"]);
  const [completeTodos, setCompleteTodos] = useState(["掃除"]);
  const [todoText, setTodoText] = useState("");

  const onChangeTodoText = (event) => {
    setTodoText(event.target.value);
  };
  const onClickAdd = () => {
    if (todoText === "") {
      return;
    } else {
      const newTodos = [...incompleteTodos, todoText];
      setincompleteTodos(newTodos);
      setTodoText("");
    }
  };
  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    setincompleteTodos(newTodos);
  };
  const onClickComplete = (index) => {
    const newIncompleteTodos = [...incompleteTodos];
    newIncompleteTodos.splice(index, 1);

    const newcompleteTodos = [...completeTodos, incompleteTodos[index]];

    setincompleteTodos(newIncompleteTodos);
    setCompleteTodos(newcompleteTodos);
  };
  const onClickBack = (index) => {
    const newcompleteTodos = [...completeTodos];
    newcompleteTodos.splice(index, 1);

    const newIncompleteTodos = [...incompleteTodos, completeTodos[index]];
    setCompleteTodos(newcompleteTodos);
    setincompleteTodos(newIncompleteTodos);
  };

  return (
    <div className="outline">
      <InputTodo
        todoText={todoText}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
      />

      <IncompleteTodos
        todos={incompleteTodos}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
      />

      <CompleteTodos 
        todos = {completeTodos}
        onClickBack={onClickBack}
      />
    </div>
  );
};

export default App;
