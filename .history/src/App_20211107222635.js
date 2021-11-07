import logo from "./logo.svg";
import "./App.css";

// template + logic
// JSX
// babel
function App() {
  let name = "Hoang";
  let obj = {
    name: "Huy",
    school: "EPU",
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          Hello word with React and {name} in {obj.school}
        </h1>
      </header>
    </div>
  );
}

export default App;
