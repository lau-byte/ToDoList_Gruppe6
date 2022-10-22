

import TodoListe from "./components/TodoListe";
import React, { useEffect, useState } from "react";
import TodoListRender from "./components/TodoListRender";
import Aufgabe from "./components/Aufgabe";


const LOCAL_STORAGE_KEY ="react-todo-list-todos";
function App() {
  const [todos, setTodos] = useState([]);
  const [edit, setEdit] = useState(false)
  

  
  function addTodo(todo){
    setTodos ([todo, ...todos]);
  }

  function toggleComplete(id){
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            erledigt: !todo.erledigt
          };
        }
        return todo;
      })
    );
  }

  function removeTodo(id){
    setTodos(todos.filter(todo => todo.id !== id))

  }

  function editTodo(id, {AufgabeEingeben}){
    if(edit && todo.id === id){ 
      return (
        <form onSubmit={AufgabeEingeben}>
            <input
    
              
                name="task"
                type="text"
                Value={todo.task}
                onChange={aendereInhalt}
                placeholder="Edit your list"
             />
        </form>
     )
    }
    
  }
  return (
    <div class="container-fluid bg-light m-2 ">
      <div class="row justify-content-start">
      <div class="col-xl-3"></div>
        <div class="col-xl-6">
          <TodoListRender addTodo={addTodo} />
          <TodoListe 
            todos={todos} 
            toggleComplete={toggleComplete} 
            removeTodo={removeTodo}
            editTodo={editTodo}
          
          /> 
          
        </div>
      <div class="col-xl-3">
    
      </div>
       </div>   
     </div>
  );
}

export default App;
