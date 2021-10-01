import React, { useEffect, useState } from "react";
import Food from "../Food/Food";
import Card from "@mui/material/Card";
import { Box } from "@mui/system";
import { Input } from "@mui/material";
const Foods = () => {
  const [foods, setFoods] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        if (!data.meals) {
          console.log("painai");
        } else {
          setFoods(data.meals);
        }
      });
  }, [search]);

  const handleChange = (e) => {
    const inputValue = e.target.value;
    setSearch(inputValue);
  };

  return (
    <div className="d-flex">
      <Box sx={{ width: "75%", my: 2, mx: "auto" }}>
        <Input
          sx={{ width: "100%", my: 3 }}
          onChange={handleChange}
          type="text"
          name="search"
          id=""
          placeholder="Search Your Foods"
        />
      </Box>
      <Box sx={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)" }}>
        {foods.map((item) => (
          <Food key={item.idMeal} item={item}></Food>
        ))}
      </Box>
    </div>
  );
};

export default Foods;
