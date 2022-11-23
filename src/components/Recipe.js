import { useParams } from "react-router-dom";

export default function Recipe({ recipes }) {
  const { category, recipe } = useParams();

  return (
    <div className="category">
      <p>{category}</p>
      <p>{recipe}</p>
    </div>
  );
}
