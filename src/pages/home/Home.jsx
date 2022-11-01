import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import Cards from "../../components/cards/Cards";
import Header from "../../components/header/Header";
import { HeaderText, HomeImg, ImgDiv } from "./Home.style";
import homeSvg from "../../assets/home.svg";

const Home = () => {
  const APP_ID = "a9ec6f9a";
  const APP_KEY = "0380ecfba75a6e995a3ad48c1f15dca0";
  const [query, setQuery] = useState("egg");
  const [selectedMeal, setSelectedMeal] = useState("breakfast");
  const [recipes, setRecipes] = useState(null);
  const mealType = ["Breakfast", "Lunch", "Dinner", "Snack", "TeaTime"];

  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${selectedMeal}`;

  const getData = async () => {
    if (query) {
      try {
        const { data } = await axios(url);
        setRecipes(data.hits);
      } catch (error) {
        console.log(error);
      }
    } else {
      alert("The form is empty!");
    }
  };
  console.log(recipes);
  // useEffect(() => {
  //   getData();
  // }, []);

  return (
    <div>
      <Header
        setQuery={setQuery}
        selectedMeal={setSelectedMeal}
        mealType={mealType}
        getData={getData}
      />
      {!recipes && (
        <ImgDiv>
          <HomeImg src={homeSvg} />
        </ImgDiv>
      )}
      {recipes?.lenght === 0 && (
        <HeaderText>The Food can not be found</HeaderText>
      )}
      {recipes?.lenght > 0 && <Cards recipes={recipes} />}
      <Cards />
    </div>
  );
};

export default Home;
