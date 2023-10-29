import { Route, Routes } from "react-router-dom";
import MyNavbar from "./components/Navbar";
import Home from "./components/Home";
import Todolist from "./components/Todolist";
import About from "./components/About";
import Developer from "./components/Developer";
import { useState, useEffect } from "react";
import { v4 as uuid } from 'uuid';

function App() {
  const [todobox, setTodobox] = useState(() => {
    const storedTodobox = JSON.parse(localStorage.getItem("todobox"));
    return storedTodobox || [];
  });

  function AddTodo(item) {
    let id = uuid();
    let updatedTodox = [...todobox, { ...item, id }];
    setTodobox(updatedTodox);
    localStorage.setItem("todobox", JSON.stringify(updatedTodox));
  }

  function deleteTodo(id) {
    const updatedTodox = todobox.filter((item) => item.id !== id);
    setTodobox(updatedTodox);
    localStorage.setItem("todobox", JSON.stringify(updatedTodox));
  }

  function editTodo(updatedItem) {
    const updatedTodox = todobox.map((item) => {
      if (item.id === updatedItem.id) {
        return updatedItem;
      }
      return item;
    });
    setTodobox(updatedTodox);
    localStorage.setItem("todobox", JSON.stringify(updatedTodox));
  }

  useEffect(() => {
    const storedTodobox = JSON.parse(localStorage.getItem("todobox"));
    if (storedTodobox) {
      setTodobox(storedTodobox);
    }
  }, []);

  return (
    <div className="App">
      <MyNavbar />
      <Routes>
        <Route path="/" element={<Home AddTodo={AddTodo} todobox={todobox} />} />
        <Route path="/todolist" element={<Todolist todobox={todobox} onDelete={deleteTodo} onEdit={editTodo} />} />
        <Route path="/about" element={<About />} />
        <Route path="/developer" element={<Developer />} />
      </Routes>
    </div>
  );
}

export default App;



