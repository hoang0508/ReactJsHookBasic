import "./Nav.scss";
const Nav = () => {
  return (
    <div className="topnav">
      <a className="active" href="#home">
        Home
      </a>
      <a href="#news">Timer Apps</a>
      <a href="#contact">Todo Apps</a>
      <a href="#about">Secret</a>
    </div>
  );
};

export default Nav;
