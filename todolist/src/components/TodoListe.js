import React from 'react'
import Aufgabe from './Aufgabe'

var alletodos = [ {inhalt: "einkaufen", erledigt: true},
                  {inhalt: "einkaufen", erledigt: true} ];
const TodoListe = () => {
    const [todos, setTodos] =useState(alletodos); //hier wird ein anfangs state gesetzt und die funktion (setTodos) defineirt mit der später das State des <todos geändert werden kann
 const AufgabeAendern = (index) => {
    const neueAufgabe = [...todos]; 
    if (neueAufgabe[index].erledigt){
        neueAufgabe[index].erledigt =false;
    }else {
        neueAufgabe[index].erledigt =true;

  }
  setTodos(neueAufgabe);};
  
    return (
    <div class="container-fluid bg-light m-2 ">
     <div class="row justify-content-start">
    <div class="col-xl-3">
      
    </div>
  
    <div class="col-xl-6">
    <h1 class="p-3 mb-2 bg-dark text-white fw-bold text-center shadow-sm"> Aufgaben </h1>
    
    {todos.map((item,index) => {

        return(
            <Aufgabe
                inhalt={item.inhalt}
                erledigt={item.erledigt}
                key={index}
                index={index}
                aendereAufgabe ={AufgabeAendern}
            >
            </Aufgabe>
        );
       })
    };
    </div>
    <div class="col-xl-3">
     
    </div>
   </div>   
    </div>
  );
}

export default TodoListe