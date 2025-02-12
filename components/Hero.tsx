import Typography from "@mui/material/Typography";
import React from "react";
import Box from "@mui/material/Box";
import Image from "next/image";
import { data } from "@/data";

const Hero = ({ recipe }: any) => {
  console.log(recipe);
  return (
    <Box>
      <Image src={data.picture} alt={data.title} width={80} height={40} />
      <Typography variant="h1">{data.title}</Typography>
      <Typography>{data.intro}</Typography>
    </Box>
  );
};

export default Hero;
