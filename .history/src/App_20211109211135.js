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
    setName("Huy Hoang"); // setName re render
    console.log("click me", name);
  };
  return (
    <div className="App">
      <Nav />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello word with React and {name}</h1>
        <input type="text" value={address} />
        <button type="button" onClick={(event) => handleEventClick(event)}>
          Click me
        </button>
      </header>
    </div>
  );
}

export default App;
