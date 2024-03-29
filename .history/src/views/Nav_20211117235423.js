import "./Nav.scss";
import { Link, NavLink } from "react-router-dom";
const Nav = () => {
  return (
    <div className="topnav">
      <NavLink activeClassName="active" to="/home">
        Home
      </NavLink>
      <NavLink to="/timer">Timer Apps</NavLink>
      <NavLink to="/todo">Todo Apps</NavLink>
      <NavLink to="/secret">Secret</NavLink>
    </div>
  );
};

export default Nav;
