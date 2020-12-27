import React, { useState, useEffect } from "react";
import "./App.css";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";

function App() {
  //State
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]); //array
  const [status, setStatus] = useState("All");
  const [filteredTodos, setFilteredTodos] = useState([]); //This will hold the filtered todos

  //Functions
  const filterHandler = () => {
    switch (status) {
      case "Completed":
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case "Uncompleted":
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        console.log("Coming in uncompleted");
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };

  //Save to localstore
  const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };
  //Get from to localstore
  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      setTodos(
        JSON.parse(localStorage.getItem("todos", JSON.stringify(todos)))
      );
    }
  };

  //useEffect only once
  useEffect(() => {
    getLocalTodos(); //To get the todo items from the localstorage
  }, []);
  //useEffect
  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, status]);

  return (
    <div className="App">
      <header className="App-header">Todo List</header>
      <AddTodo
        todos={todos}
        setTodos={setTodos}
        inputText={inputText}
        setInputText={setInputText}
        setStatus={setStatus}
      />
      <TodoList
        filteredTodos={filteredTodos}
        todos={todos}
        setTodos={setTodos}
      />
    </div>
  );
}

export default App;
