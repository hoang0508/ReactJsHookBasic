import logo from "./logo.svg";
import "./App.css";
import Nav from "./views/Nav";

// template + logic
// JSX
// babel
function App() {
  let name = "Hoang";
  const handleEventClick = (event) => {
    console.log("click me");
  };
  return (
    <div className="App">
      <Nav />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello word with React and {name}</h1>
        <button type="button" onClick={(event) => handleEventClick(event)}>
          Click me
        </button>
      </header>
    </div>
  );
}

export default App;
