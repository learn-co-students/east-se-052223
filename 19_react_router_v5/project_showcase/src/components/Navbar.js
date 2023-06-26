import { NavLink } from "react-router-dom";
function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/projects">Projects</NavLink>
        </li>
        <li>
          <NavLink to="/new-project">New Project</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
