import React from 'react'

function Todo({text, todo, todos, setTodos}) {
    const deleteHandler = () => {
        setTodos(todos.filter(el => el.id !== todo.id));
    };
    const completeHandler = () => {
        setTodos(todos.map((item) => {
            if(item.id === todo.id){
                return {
                    ...item, completed: !item.completed
                };
            }
                return item;
        }))
    }
    return (
        <div>
            <li className={`todo-item${todo.completed? "-completed" : ''}`}>{text}</li>
            <button onClick={completeHandler}>Complete</button>
            <button onClick={deleteHandler}>Delete</button>
        </div>
    )
}

export default Todo
