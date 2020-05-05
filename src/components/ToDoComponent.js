import React from "react";
import style from "./ToDoComponent.module.css"


function ToDoComponent({todo, onEdit, onDelete}) {

  return(
    <div key={todo.id} className={`${style.todocomp} ${todo.type}`}>
      <div>
        <div>Title: {todo.title}</div>
        <div>{todo.description ? `Description: ${todo.description}` : null} </div>
      </div>
      <div>
        <button onClick={() => onDelete(todo.id)}>X</button>
        <button onClick={() => onEdit(todo)}>Edit</button>
      </div>
    </div>
  )
}

export default ToDoComponent;
