import React from "react";

const TodoList = ({ todo, setTodo, setEditTodo }) => {
    // Deleting a Todo
    const handleDelete = ({id}) => {
        setTodo(todo.filter((todo)=> todo.id !== id ));
    }

    // Marking a Todo Completed
    const markCompletedTodo = ( {id} ) => {
        setTodo(todo.map( (todo) => {
            if(todo.id === id) {
                return {...todo, completed: !todo.completed}
            }
            return todo;
        }))

    }
    // Editing a Todo
    const editTodo = ( {id} ) => {
        const findTodo = todo.find( (todo) => todo.id === id)
        setEditTodo(findTodo);
    }
  return (
    <div>
      {todo.map((todo) => {
        return <li className="todo-list" key={todo.id}>
          <input
            type="text"
            value={todo.title}
            className="list"
            onChange={(event) => {event.preventDefault()}}
          />
          <div>
            <button className="edittodo" onClick={ () => editTodo(todo)}>Edit</button>
            <button className="markcomplete" onClick={ () => {markCompletedTodo(todo)}}>Done</button>
            <button className="removetodo" onClick={ () => {handleDelete(todo)}}>Remove</button>
          </div>
          
        </li>
      })}
    </div>
  );
};

export default TodoList;
