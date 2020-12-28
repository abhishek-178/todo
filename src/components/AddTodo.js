import React from "react";

function AddTodo({ inputText, setInputText, todos, setTodos }) {
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

  return (
    <div>
      <form>
        <input value={inputText} onChange={inputTextHandler} type="text" />
        <button onClick={submitTodoHandler} type="submit">
          Add List
        </button>
        <br></br>
      </form>
    </div>
  );
}

export default AddTodo;
