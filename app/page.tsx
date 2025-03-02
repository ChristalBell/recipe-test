"use client";
import Hero from "@/components/Hero";
import Ingredients from "@/components/Ingredients";
import Instructions from "@/components/Instructions";
import Nutrition from "@/components/Nutrition";
import Preparation from "@/components/Preparation";
import { COLORS } from "@/styles/colors";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import React, { useEffect, useState } from "react";

const Home = () => {
  const [recipe, setRecipe] = useState({
    title: "",
    picture: "",
    intro: "",
    time: "",
    prepTime: "",
    cookTime: "",
    ingredients: [""],
    steps: [""],
    nutrition: [
      {
        calories: "",
        carbs: "",
        protein: "",
        fat: "",
      },
    ],
  });
  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setRecipe(data));
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: COLORS.cream,
      }}
    >
      <Box
        sx={{
          backgroundColor: "white",
          width: "80vw",
          margin: "2rem",
          borderRadius: "1rem",
        }}
      >
        <Hero recipe={recipe} />
        <Preparation recipe={recipe} />
        <Ingredients recipe={recipe} />
        <Instructions recipe={recipe} />
        <Nutrition recipe={recipe} />
      </Box>
    </Box>
  );
};

export default Home;
