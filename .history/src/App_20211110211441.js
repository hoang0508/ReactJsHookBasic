import logo from "./logo.svg";
import "./App.css";
import Nav from "./views/Nav";
import { useState } from "react";
import Todo from "./views/Todo";
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
  const handleEventClick = (event) => {
    // setName(address); // setName re render
    // console.log("click me", name);
    // hook not merge state
    if (!address) {
      alert("empty input");
      return;
    }
    let newTodo = { id: "abc", title: address, type: "hoang" };
    setTodos([...todos, newTodo]); // spread
    setAddress("");
  };
  const handleOnchangeInput = (event) => {
    setAddress(event.target.value);
    // console.log(event.target.value);
  };
  return (
    <div className="App">
      <Nav />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello word with React and {name}</h1>
        <Todo todos={todos} title={"All todos"} />
        <Todo
          todos={todos.filter((item) => item.type === "hoang")}
          title={"Hoang's todo"}
        />
        <input
          type="text"
          value={address}
          onChange={(event) => handleOnchangeInput(event)}
        />
        <button type="button" onClick={(event) => handleEventClick(event)}>
          Click me
        </button>
      </header>
    </div>
  );
}

export default App;
