import React from "react";
import style from "./ToDoList.module.css"
import ToDoComponent from "./ToDoComponent";

function ToDoList({todos, ...props}) {

  return(
    <div className={style.list}>
      <div id="todolist">
        {todos.map(todo => <ToDoComponent key={todo.id} todo={todo} {...props} />)}
      </div>
    </div>
  )
}

export default ToDoList;
