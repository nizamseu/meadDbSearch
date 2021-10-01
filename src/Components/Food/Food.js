import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { useHistory } from "react-router";
const Food = (props) => {
  const { idMeal, strMeal, strCategory, strInstructions, strMealThumb, strTags, strYoutube } = props.item;
  const histrory = useHistory();

  const handleDetails = () => {
    histrory.push(`/details/${idMeal}`);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia component="img" height="140" image={strMealThumb} alt="green iguana" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {strMeal}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {strInstructions.slice(0, 200)}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button onClick={handleDetails} size="small" color="primary">
          Details
        </Button>
      </CardActions>
    </Card>
  );
};

export default Food;
