import { marked } from "marked";

export default function Recipe({ recipe }) {
  const recipeInstructions =
    recipe && marked(recipe?.fields.instructions_field);

  return (
    <div className="recipe">
      <h1>{recipe?.fields.title}</h1>
      <div className="column">
        <div className="left-olumn">
          <img
            src={recipe?.fields.image.fields.file.url}
            alt={recipe?.fields.title}
          />
        </div>
        <div className="right-column">
          <p>Rating: {recipe?.fields.rating}</p>
          <div className="ingredients">
            <ul>
              <h2>Ingredients:</h2>
              {recipe?.fields.ingredients.map((ingredient) => (
                <li>{ingredient}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="directions">
        <hr />
        <h2>Directions:</h2>
        <section
          className="instructions"
          dangerouslySetInnerHTML={{ __html: recipeInstructions }}
        />
      </div>
    </div>
  );
}
