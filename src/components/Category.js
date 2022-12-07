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
  );
}

