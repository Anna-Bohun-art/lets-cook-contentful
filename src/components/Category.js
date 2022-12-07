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
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Container } from "@mui/material";



export default function Category({ recipesInCategory }) {
  const { category } = useParams();

  return (
<<<<<<< HEAD
    <div className="category">
      <h1>{category} recipes</h1>
      {recipesInCategory.map((recipe) => (
        <NavLink   key={recipe.sys.id} to={`/R/${recipe.sys.id}` }>
        <Container onClick={recipe.fields.title} className="recipeLink" 
        sx={{ maxWidth: 'xl' ,
          display:'flex',
          flexWrap:'wrap',
          justifyContent:'center',
          padding:0
          
      }}>
          <Card   
          sx={{ 
            maxWidth: 345,
            minWidth: 400,
            marginBottom: 5,
            marginTop: 2,
            display: 'grid'
             }}  > 
              
          <CardMedia
        component="img"
        alt={recipe.fields.title}
        height="350" 
        width="150 " 
        image={recipe?.fields.image.fields.file.url}
      />
       
       <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {recipe.fields.title}
        </Typography>
      </CardContent>
      </Card>
      </Container>
      </NavLink>
      ))}
    </div>
=======
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
>>>>>>> bfc72c9a96e73c26354059dbe9774f6f0e840b9b
  );
}

