import logo from "./logo.svg";
import "./App.css";
import "./views/Nav";

// template + logic
// JSX
// babel
function App() {
  let name = "Hoang";
  let obj = {
    name: "Huy",
    school: "EPU",
  };
  let link = "https://github.com/hoang0508/ReactJsHookBasic";
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          Hello word with React and {name} in {obj.school}
        </h1>
        <a href={link} target="_blank">
          My github
        </a>
      </header>
    </div>
  );
}

export default App;
