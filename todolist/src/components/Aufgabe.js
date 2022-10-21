import React from 'react'
import { useState } from 'react';
import TodoListe from './TodoListe';
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous"></link>

const Aufgabe = ({inhalt,erledigt, aendereAufgabe}) => {
    
    const [istErledigt, setzeErledigt] = useState(erledigt) //UseState Hook um die Farbe unsere Todos zu updaten, da sonst React die Änderung nicht erkennt
    const AufgabeErledigt = () => {
        if(istErledigt)
        {
            setzeErledigt(false);
        } else {
            setzeErledigt(true);
        }
    };
    const AufgabeGeloescht = (index) => {
           todos.splice(index,1)
        
    };
  return (
    <div class={ 

        istErledigt
        ? "p-3 mb-2 bg-success text-white d-flex justify-content-between"
        : "p-3 mb-2 bg-danger text-white d-flex justify-content-between"

    } >
        <h1 onClick={AufgabeErledigt} >{inhalt}</h1>
        <button type="button" class="btn btn-light" onClick={AufgabeGeloescht}>Löschen</button>     
    </div>
  )
}

export default Aufgabe