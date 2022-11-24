import { NavLink, useParams } from "react-router-dom";

export default function Category({ recipesInCategory }) {
  const { category } = useParams();

  return (
    <div className="category">
      <div>{category}</div>
      {recipesInCategory.map((recipe) => (
        <NavLink to={`/${category}/${recipe.sys.id}`}>
          <div>{recipe.fields.title}</div>
        </NavLink>
      ))}
    </div>
  );
}
