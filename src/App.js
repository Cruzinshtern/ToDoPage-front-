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

  const handleSubmit = async (todo) => {
    let response;
    if(!!editableItem) {
      response = await Todos.editTodo(todo);
      setEditableItem(null);
    } else {
      response = await Todos.addTodo(todo)
    }
    setTodos(response.data);
  };

   /**
   * TODO:make it function the right way
   * */
  const clearList = async () => {
    const data = await Todos.deleteAllTodos();
    setTodos(data.data)
  };

  const deleteTodo = async (id) => {
    const data = await Todos.deleteTodo(id);
    setTodos(data.data);
  };

  return (
    <>
      <ToDoList todos={todos} onEdit={setEditableItem} onDelete={deleteTodo}/>
      <div>
        <Form onSubmit={handleSubmit} item={editableItem} />
        <ClearList onReset={clearList}/>
      </div>
    </>
  );
}

export default App;
