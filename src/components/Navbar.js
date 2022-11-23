import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/salads">Salads</NavLink>
      <NavLink to="/seafood">Seafood</NavLink>
      <NavLink to="/bread">Bread</NavLink>
    </div>
  );
}
