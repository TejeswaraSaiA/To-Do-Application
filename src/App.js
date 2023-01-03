import React, { useState } from "react";
import Header from "./components/Header";
import "./App.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  const [input, setInput] = useState("");
  const [todo, setTodo] = useState([]);
  const [editTodo, setEditTodo] = useState(null);

  return (
    <div className="container">
      <div className="app-wrapper">
        <div>
          <Header />
        </div>
        <div>
          <Form
            input={input}
            setInput={setInput}
            todo={todo}
            setTodo={setTodo}
            editTodo={editTodo}
            setEditTodo={setEditTodo}
          />
        </div>
        <div>
          <TodoList todo={todo} setTodo={setTodo} setEditTodo={setEditTodo}/>
        </div>
      </div>
    </div>
  );
}

export default App;
