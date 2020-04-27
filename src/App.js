import React, {useEffect, useState} from 'react';
import './App.css';
import Form from "./components/Form";
import ToDoList from "./components/ToDoList";
import ClearList from "./components/ClearList";
import {Todos} from "./services/todos";

function App() {
  const [todos, setTodos] = useState([]);

  const [editableItem, setEditableItem] = useState(null);


  useEffect(
    () => {
      Todos.getTodos().then((data) => {
        setTodos(data);
      })
    }, []
  );

  const addNewTodo = async (todo) => {
    const data = await Todos.addTodo(todo);
    console.log(data);
    setTodos(data.data);
  };
  const clearList = () => {
    setTodos([])
  };

  return (
    <div className="wrapper">
      <ToDoList todos={todos} onEdit={setEditableItem} />
      <Form onSubmit={addNewTodo} item={editableItem} />
      <ClearList onReset={clearList}/>
    </div>
  );
}

export default App;
