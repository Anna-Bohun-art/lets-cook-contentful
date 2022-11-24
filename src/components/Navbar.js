import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar">
      <NavLink to="/">
        <div>Home</div>
      </NavLink>
      <NavLink to="/salads">
        <div>Salads</div>
      </NavLink>
      <NavLink to="/seafood">
        <div>Seafood</div>
      </NavLink>
      <NavLink to="/bread">
        <div>Bread</div>
      </NavLink>
    </div>
  );
}
