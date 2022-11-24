import { useParams } from "react-router-dom";

export default function Recipe({ recipe }) {
  return (
    <div className="recipe">
      <p>{recipe[0].fields.title}</p>
    </div>
  );
}
