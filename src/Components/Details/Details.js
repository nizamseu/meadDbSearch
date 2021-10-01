import React, { useEffect, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/material";
import { Box, margin } from "@mui/system";
const Details = () => {
  const histrory = useHistory();
  const { id } = useParams();
  const [meal, setMeal] = useState([]);
  useEffect(() => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMeal(data?.meals[0]));
  }, []);
  const { idMeal, strArea, strMeal, strCategory, strInstructions, strMealThumb, strTags, strYoutube } = meal;
  const back = () => {
    histrory.push("/");
  };
  console.log(meal);
  return (
    <Container maxWidth="sm">
      <Typography>
        <p>
          <h1>
            Food Details{" "}
            <Button variant="contained" onClick={back}>
              Go Back
            </Button>
          </h1>
        </p>
      </Typography>
      <Card>
        <CardMedia component="img" height="140" width="550" image={strMealThumb} alt="green iguana" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            <hr />
            {strMeal} | {strArea} | {strCategory}
            <hr />
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {strInstructions}
          </Typography>
        </CardContent>
        <CardActions>
          {/* <Button size="small">Share</Button> */}
          <Button size="small">
            <a href={strYoutube}>Learn More</a>
          </Button>
        </CardActions>
      </Card>
    </Container>
  );
};

export default Details;
