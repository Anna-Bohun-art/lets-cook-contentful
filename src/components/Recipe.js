import { marked } from "marked";

export default function Recipe({ recipe }) {
  const recipeInstructions =
    recipe && marked(recipe?.fields.instructions_field);

  return (
    <div className="recipe">
      <h2>{recipe?.fields.title}</h2>
      <img src={recipe?.fields.image.fields.file.url} />
      <p>Rating: {recipe?.fields.rating}</p>
      <ul>Ingredients:</ul>
      {recipe?.fields.ingredients.map((ingredient) => (
        <li>{ingredient}</li>
      ))}
      <p>Directions:</p>
      <section
        className="instructions"
        dangerouslySetInnerHTML={{ __html: recipeInstructions }}
      />
    </div>
  );
}
