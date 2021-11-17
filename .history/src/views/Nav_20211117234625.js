import "./Nav.scss";
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <div className="topnav">
      <Link className="active" to="/home">
        Home
      </Link>
      <Link to="/timer">Timer Apps</Link>
      <Link to="/todo">Todo Apps</Link>
      <Link to="/secret">Secret</Link>
    </div>
  );
};

export default Nav;
