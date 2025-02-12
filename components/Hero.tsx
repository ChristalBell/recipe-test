import Typography from "@mui/material/Typography";
import React from "react";
import Box from "@mui/material/Box";
import Image from "next/image";

// import { data } from "@/data";

const Hero = ({ recipe }: any) => {
  console.log(recipe);
  return (
    <Box>
      <Image src={recipe.picture} alt={recipe.title} width={80} height={40} />
      <Typography variant="h1">{recipe.title}</Typography>
      <Typography>{recipe.intro}</Typography>
    </Box>
  );
};

export default Hero;
