import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css";
import clsx from "clsx";

const Navigation = () => {
  return (
    <header>
      <nav className={s.navMenu}>
        <NavLink
          className={({ isActive }) =>
            clsx(s.navLink, isActive && s.navLinkActive)
          }
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            clsx(s.navLink, isActive && s.navLinkActive)
          }
          to="/movies"
        >
          Movies
        </NavLink>
      </nav>
    </header>
  );
};

export default Navigation;
