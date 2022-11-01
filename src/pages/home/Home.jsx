import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";

const Home = () => {
  const APP_ID = "a9ec6f9a";
  const APP_KEY = "0380ecfba75a6e995a3ad48c1f15dca0";
  const [query, setQuery] = useState("egg");
  const [selectedMeal, setSelectedMeal] = useState("breakfast");
  const [recipes, setRecipes] = useState("");

  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${selectedMeal}`;

  const getData = async () => {
    const { data } = await axios(url);
    console.log(data);
    setRecipes(data.hits);
  };

  useEffect(() => {
    getData();
  }, []);

  return <div>Home</div>;
};

export default Home;
