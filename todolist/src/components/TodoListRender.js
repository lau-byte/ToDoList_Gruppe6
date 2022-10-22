import React, { useState } from "react";
function TodoListRender({addTodo}){
    const [todo, setTodo] = useState({
        id: "",
        inhalt:"",
        erledigt: false
    });

    function aendereInhalt(e){
        setTodo({ ...todo, task:e.target.value});
    }

    function AufgabeEingeben(e){
        e.preventDefault();
        if (todo.task.trim()){
            addTodo({ ...todo, id:  Math.random() * (10000 - 1) + 1});
            setTodo({...todo, task: ""});
        }
    }

    return (

    
    <form onSubmit={AufgabeEingeben}>
    <div class="p-3 mb-2 bg-light d-flex justify-content-between">
        <input  class="form-control" 
         name="task"
         type="text"
         Value={todo.task}
         onChange={aendereInhalt}
        
        />
        <button type="submit" class="btn btn-light">ok</button>
        </div>
    </form>
  
    );
}

export default TodoListRender;
