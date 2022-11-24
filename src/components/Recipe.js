export default function Recipe({ recipe }) {
  return (
    <div className="recipe">
      <p>{recipe.fields.title}</p>
    </div>
  );
}
