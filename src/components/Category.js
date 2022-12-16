import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Container,
  Grid,
} from "@mui/material";
import { NavLink, useParams } from "react-router-dom";

export default function Category({ categories, recipesInCategory }) {
  const { category } = useParams();

  return (
    <>
      {recipesInCategory.length === 0 ? (
        <h1> Loading !!! </h1>
      ) : (
        <div className="category">
          <h1>{categories[category - 1].name} recipes</h1>
          {recipesInCategory.map((recipe) => (
            <NavLink key={recipe.id} to={`/R/${recipe.id}`}>
              <Container
                onClick={recipe.title}
                className="recipeLink"
                sx={{
                  maxWidth: "xl",
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "center",
                  padding: 0,
                }}
              >
                <Card
                  sx={{
                    maxWidth: 345,
                    minWidth: 400,
                    marginBottom: 5,
                    marginTop: 2,
                    display: "grid",
                  }}
                >
                  <CardMedia
                    component="img"
                    alt={recipe.title}
                    height="350"
                    width="150 "
                    image={recipe.image}
                  />

                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {recipe.title}
                    </Typography>
                  </CardContent>
                </Card>
              </Container>
            </NavLink>
          ))}
        </div>
      )}
    </>
  );
}
