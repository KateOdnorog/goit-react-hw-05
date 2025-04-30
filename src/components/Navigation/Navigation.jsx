import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <header>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/movies">Movies</NavLink>
      </header>
    </nav>
  );
};

export default Navigation;
