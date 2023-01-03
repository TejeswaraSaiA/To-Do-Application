import React, { useEffect } from "react";
import { v4 as uuid } from 'uuid';

function Form({ input, setInput, todo, setTodo, editTodo, setEditTodo}) {

    const updateTodo = (title, id, completed) => {
        const newTodo = todo.map((todo) => 
            todo.id === id ? {title, id , completed} : todo
        );
        setTodo(newTodo);
        setEditTodo("");
    }

    useEffect( () => {
        if(editTodo) {
            setInput(editTodo.title);
        }
        else {
            setInput("");
        }
    }, [setInput, editTodo]);


    const id = uuid();
    const onInputChange = (event) => {
        setInput(event.target.value);
    };

    const onFormSubmit = (event) => {
        event.preventDefault();
        if(!editTodo) {
            setTodo([...todo, {id:id, title: input, completed:false}]);
            setInput("");
        } else {
            updateTodo(input, editTodo.id, editTodo.completed)
        }

        
    }
  return (
    <form onSubmit={onFormSubmit}>
      <input
        type="text"
        placeholder="Enter To Do.."
        className="todo-input"
        value={input}
        required
        onChange={onInputChange}
      />
      <button className="add-button" type="submit">
        { editTodo? "OK" : "Add" }
      </button>
    </form>
  );
}

export default Form;
