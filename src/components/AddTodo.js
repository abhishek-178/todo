import React from "react";

function AddTodo({ inputText, setInputText, todos, setTodos, setStatus }) {
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };
  const submitTodoHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      { text: inputText, completed: false, id: Math.random() * 1000 },
    ]);
    setInputText("");
  };
  const statusHandler = (e) => {
    setStatus(e.target.innerHTML);
  };
  return (
    <div>
      <form>
        <input value={inputText} onChange={inputTextHandler} type="text" />
        <button onClick={submitTodoHandler} type="submit">
          Add List
        </button>
        <br></br>
        <span key="All" onClick={statusHandler} value="All">
          All
        </span>{" "}
        ||
        <span key="Completed" value="Completed" onClick={statusHandler}>
          Completed
        </span>{" "}
        ||
        <span key="Uncompleted" value="Uncompleted" onClick={statusHandler}>
          Uncompleted
        </span>
      </form>
    </div>
  );
}

export default AddTodo;
