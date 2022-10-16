import { NavLink } from "react-router-dom";

export default function Menu() {
  return (
    <div className="menu">
      <ul>
        <li>
          <NavLink
            to="/home"
            className={({ isActive }) => (isActive ? "activeLink" : undefined)}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/add"
            className={({ isActive }) => (isActive ? "activeLink" : undefined)}
          >
            Add techno
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/list"
            className={({ isActive }) => (isActive ? "activeLink" : undefined)}
          >
            All technos
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
