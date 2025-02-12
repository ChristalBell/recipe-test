import Typography from "@mui/material/Typography";
import React from "react";
import Box from "@mui/material/Box";
import Image from "next/image";

// import { data } from "@/data";

const Hero = ({ recipe }: any) => {
  console.log(recipe);
  return (
    <Box sx={{ margin: "4rem" }}>
      <Image
        src={recipe.picture}
        alt={recipe.title}
        width={750}
        height={400}
        style={{
          borderRadius: "1rem",
          marginBottom: "1rem",
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
