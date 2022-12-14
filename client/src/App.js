import React from "react";
import { useState, useEffect } from "react"; // useState
import axios from "axios";

import Item from "./components/Item";
import "./App.css";

const PORT = process.env.PORT | 3000;

function App() {
  // ************* Exercise of MERN Stack To Do App
  const [text, setText] = useState("");
  const [todo, setTodo] = useState([]);
  const [isUpdating, setUpdating] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:${PORT}/get-todo`)
      // .then((res) => console.log(res.data))
      .then((res) => setTodo(res.data))
      // .catch((err) => console.log(err))
      .catch((err) => console.log("This is a error from App.js useEffect"));
  });

  const addUpdate = () => {
    if (isUpdating === "") {
      axios
        .post(`http://localhost:${PORT}/save-todo`, { text })
        .then((res) => {
          console.log(res.data);
          setText("");
        })
        .catch((err) => console.log(err));
    } else {
      axios
        .post(`http://localhost:${PORT}/update-todo`, { _id: isUpdating, text })
        .then((res) => {
          console.log(res.data);
          setText("");
          setUpdating("");
        })
        .catch((err) => console.log(err));
    }
  };

  const deleteToDo = (_id) => {
    axios
      .post(`http://localhost:${PORT}/delete-todo`, { _id })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };

  const updateToDo = (_id, text) => {
    setUpdating(_id);
    setText(text);
  };

  return (
    <div className="App">
      <div className="container">
        <h1>To Do App</h1>
        <div className="top">
          <input
            type="text"
            placeholder="Write Something..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <div className="add" onClick={addUpdate}>
            Add
          </div>
        </div>
        <div className="list">
          {todo.map((item) => (
            <Item
              key={item._id}
              text={item.text}
              remove={() => deleteToDo(item._id)}
              update={() => updateToDo(item._id, item.text)}
            />
          ))}
          <Item />
        </div>
      </div>
    </div>
  );
}
export default App;
