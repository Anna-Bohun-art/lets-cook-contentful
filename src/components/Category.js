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

export default function Category({ recipesInCategory }) {
  const { category } = useParams();

  return (
    <Container
      sx={{
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        border: "1px solid red",
      }}
      disableGutters={true}
    >
      <Grid
        container
        spacing={2}
        sx={{ border: "1px solid black", margin: 0 }}
        rowSpacing={1}
        columnSpacing={1}
      >
        {recipesInCategory.map((recipe) => {
          return (
            <Grid
              item
              key={crypto.randomUUID}
              xs={6}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Card
                sx={{
                  width: "20vw",
                  height: "30vh",
                  "&:hover": {
                    backgroundColor: "primary.light",
                    opacity: [0.9, 0.8, 0.7],
                  },
                }}
              >
                <CardContent>
                  <Typography variant="subtitle2" component="div">
                    {recipe?.fields.title}
                  </Typography>
                  <NavLink to={`/R/${recipe.sys.id}`}>
                    <CardMedia
                      component="img"
                      height="200"
                      image={recipe?.fields.image.fields.file.url}
                      alt={recipe?.fields.title}
                      sx={{ objectFit: "contain" }}
                    />
                  </NavLink>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
}
