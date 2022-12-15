import { marked } from "marked";
import { Typography, Box } from "@mui/material";

export default function Recipe({ recipe }) {
  const recipeInstructions =
    recipe && marked(recipe?.fields.instructions_field);

  return (
    <Box className="recipe" sx={{ bgcolor: "default" }}>
      <Typography sx={{ color: "primary" }} variant="h1Variant">
        {recipe?.fields.title}
      </Typography>
      <Box className="column">
        <Box className="left-column">
          <img
            src={recipe?.fields.image.fields.file.url}
            alt={recipe?.fields.title}
          />
        </Box>
        <Box className="right-column">
          <Typography sx={{ color: "secondary" }} variant="textVariant">
            Rating: {recipe?.fields.rating}
          </Typography>
          <div className="ingredients">
            <ul>
              <Typography sx={{ color: "secondary" }} variant="h2Variant">
                Ingredients:
              </Typography>
              <Typography sx={{ color: "primary" }}>
                {recipe?.fields.ingredients.map((ingredient) => (
                  <li>{ingredient}</li>
                ))}
              </Typography>
            </ul>
          </div>
        </Box>
      </Box>
      <div className="directions">
        <hr />
        <Typography sx={{ color: "primary" }} variant="h2Variant">
          Directions:
        </Typography>
        <section
          className="instructions"
          dangerouslySetInnerHTML={{ __html: recipeInstructions }}
        />
      </div>
    </Box>
  );
}
