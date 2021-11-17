import logo from "./logo.svg";
import "./App.css";
import Nav from "./views/Nav";
import { useState, useEffect } from "react";
import Todo from "./views/Todo";
import Covid from "./views/covid";
import { Countdown, NewCountDown } from "./views/Countdown";
import {
  BrowserRouter as Router,
  Switch,
  Routes,
  Link,
} from "react-router-dom";

// template + logic
// JSX
// babel
function App() {
  // state
  // let name = "Hoang";
  // useState (hook)
  let [name, setName] = useState("hoang");
  const [address, setAddress] = useState("");
  const [todos, setTodos] = useState([
    { id: "todo1", title: "My school EPU", type: "hoang" },
    { id: "todo2", title: "Doing homework", type: "huy" },
  ]);

  // didmount
  useEffect(() => {
    console.log("run use effect");
  }, [address]);

  useEffect(() => {
    console.log("run use effect todo");
  }, [todos]);

  const handleEventClick = (event) => {
    // setName(address); // setName re render
    // console.log("click me", name);
    // hook not merge state
    if (!address) {
      alert("empty input");
      return;
    }
    let newTodo = {
      id: Math.floor(Math.random() * 1000),
      title: address,
      type: "hoang",
    };
    setTodos([...todos, newTodo]); // spread
    setAddress("");
  };
  const handleOnchangeInput = (event) => {
    setAddress(event.target.value);
    // console.log(event.target.value);
  };
  const deleteDataTodo = (id) => {
    let currentTodos = todos;
    currentTodos = currentTodos.filter((item) => item.id !== id);
    setTodos(currentTodos);
  };

  const onTimesup = () => {
    alert("times up");
  };
  return (
    <div>
      <Router>
        <div className="App">
          <header className="App-header">
            <Nav />
            <img src={logo} className="App-logo" alt="logo" />
            {/* <Countdown onTimesup={onTimesup} />
          <span>===============</span>
          <NewCountDown onTimesup={onTimesup} />
          <h1>Hello word with React and {name}</h1>
          <Covid /> */}
            {/* <Todo
          todos={todos}
          title={"All todos"}
          deleteDataTodo={deleteDataTodo}
        />
        <Todo
          todos={todos.filter((item) => item.type === "hoang")}
          title={"Hoang's todo"}
          deleteDataTodo={deleteDataTodo}
        />
        <input
          type="text"
          value={address}
          onChange={(event) => handleOnchangeInput(event)}
        />
        <button type="button" onClick={(event) => handleEventClick(event)}>
          Click me
        </button> */}
          </header>
          <Routes>
            <Router path="/">
              <Covid />
            </Router>
            <Router path="/topics">{/* <Topics /> */}</Router>
            <Router path="/">{/* <Home /> */}</Router>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
