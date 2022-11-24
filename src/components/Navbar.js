import { NavLink } from "react-router-dom";

export default function Navbar({ categoryList }) {
  return (
    <div className="navbar">
      <h3>
        <NavLink className="nav-item" to="/">
          Home
        </NavLink>
      </h3>
      {categoryList.map((category) => (
        <h3>
          <NavLink className="nav-item" to={category}>
            {category}
          </NavLink>
        </h3>
      ))}
    </div>
  );
}
