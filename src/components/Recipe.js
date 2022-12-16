import { marked } from "marked";
import { Typography, Box } from "@mui/material";

export default function Recipe({ recipe }) {
  return (
    <>
      {recipe.length === 0 ? (
        <h1> Loading !!! </h1>
      ) : (
        <Box className="recipe" sx={{ bgcolor: "default" }}>
          <Typography sx={{ color: "primary" }} variant="h1Variant">
            {recipe[0].title}
          </Typography>
          <Box className="column">
            <Box className="left-column">
              <img src={recipe[0].image} alt={recipe[0].title} />
            </Box>
            <Box className="right-column">
              <Typography sx={{ color: "secondary" }} variant="textVariant">
                Rating: {recipe[0].rating}
              </Typography>
              <div className="ingredients">
                <ul>
                  <Typography sx={{ color: "secondary" }} variant="h2Variant">
                    Ingredients:
                  </Typography>
                  <Typography sx={{ color: "primary" }}>
                    {recipe[0].ingredients.map((ingredient) => (
                      <li>
                        {ingredient.amount} {ingredient.name}
                      </li>
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
              dangerouslySetInnerHTML={{
                __html: marked(recipe[0].instructions),
              }}
            />
          </div>
        </Box>
      )}
    </>
  );
}
