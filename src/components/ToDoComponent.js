import React from "react";
import style from "./ToDoComponent.module.css"


function ToDoComponent({todo, onEdit}) {

  return(
    <div key={todo.id} className={`${style.todocomp} ${todo.type}`}>
      <div>Title: {todo.title}</div>
      <div>{todo.description ? `Description: ${todo.description}` : null} </div>
      <button onClick={() => onEdit(todo)}>Edit</button>
    </div>
  )
}

export default ToDoComponent;
