import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar">
      <h3>
        <NavLink className="nav-item" to="/">
          Home
        </NavLink>
      </h3>
      <h3>
        <NavLink className="nav-item" to="/salad">
          Salads
        </NavLink>
      </h3>
      <h3>
        <NavLink className="nav-item" to="/seafood">
          Seafood
        </NavLink>
      </h3>
      <h3>
        <NavLink className="nav-item" to="/bread">
          Bread
        </NavLink>
      </h3>
    </div>
  );
}
