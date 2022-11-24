import { NavLink, useParams } from "react-router-dom";

export default function Category({ recipesInCategory }) {
  const { category } = useParams();

  return (
    <div className="category">
      <h2>{category} recipes</h2>
      {recipesInCategory.map((recipe) => (
        <NavLink key={recipe.sys.id} to={`/R/${recipe.sys.id}`}>
          <div>{recipe.fields.title}</div>
        </NavLink>
      ))}
    </div>
  );
}
