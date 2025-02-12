import Typography from "@mui/material/Typography";
import React from "react";
import Box from "@mui/material/Box";
import Image from "next/image";

// import { data } from "@/data";

const Hero = ({ recipe }: any) => {
  console.log(recipe);
  return (
    <Box sx={{ margin: "2rem" }}>
      <Image
        src={recipe.picture}
        alt={recipe.title}
        layout="responsive"
        height={1}
        width={1}
        style={{
          borderRadius: "1rem",
          marginBottom: "1rem",
          height: "30vh",
          width: "70vw",
        }}
      />
      <Typography variant="h3" sx={{ margin: "1rem 0", fontWeight: "bold" }}>
        {recipe.title}
      </Typography>
      <Typography sx={{ lineHeight: "1.75rem" }}>{recipe.intro}</Typography>
    </Box>
  );
};

export default Hero;
