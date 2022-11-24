import { useParams } from "react-router-dom";

export default function Recipe({ recipe }) {
  console.log(recipe);
  return (
    <div className="recipe">
      <p>{recipe.fields.title}</p>
    </div>
  );
}
