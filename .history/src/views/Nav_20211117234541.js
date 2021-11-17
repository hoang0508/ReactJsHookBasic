import "./Nav.scss";
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <div className="topnav">
      <Link className="active" href="/home">
        Home
      </Link>
      <Link href="/timer">Timer Apps</Link>
      <Link href="/todo">Todo Apps</Link>
      <Link href="/secret">Secret</Link>
    </div>
  );
};

export default Nav;
