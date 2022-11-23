import { NavLink, useParams } from "react-router-dom";

export default function Category({ recipes }) {
  const { category } = useParams();

  return (
    <div className="category">
      <p>{category}</p>
      {recipes.map((recipe) => (
        <NavLink to="/:category/:recipe">{recipe}</NavLink>
      ))}
    </div>
  );
}
