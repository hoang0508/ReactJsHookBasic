import logo from "./logo.svg";
import "./App.css";
import Nav from "./views/Nav";
import { useState } from "react";
// template + logic
// JSX
// babel
function App() {
  // state
  // let name = "Hoang";
  let [name, setName] = useState("hoang");
  const [address, setAddress] = useState("");
  const handleEventClick = (event) => {
    setName(address); // setName re render
    console.log("click me", name);
  };
  const handleOnchangeInput = (event) => {
    setAddress(event.target.value);
    console.log(event.target.value);
  };
  return (
    <div className="App">
      <Nav />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello word with React and {name}</h1>
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
