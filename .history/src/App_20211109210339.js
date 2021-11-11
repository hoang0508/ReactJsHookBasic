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

  const handleEventClick = (event) => {
    name = "Huy Hoang";
    console.log("click me", name);
  };
  return (
    <div className="App">
      <Nav />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello word with React and {name}</h1>
        {/* <input
          type="text"
          value="hoang"
          onClick={(event) => handleEventClick(event)}
        />*/}
        <button type="button" onClick={(event) => handleEventClick(event)}>
          Click me
        </button>
      </header>
    </div>
  );
}

export default App;
