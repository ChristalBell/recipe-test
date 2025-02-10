import Hero from "@/components/Hero";
import Ingredients from "@/components/Ingredients";
import Instructions from "@/components/Instructions";
import Nutrition from "@/components/Nutrition";
import Preparation from "@/components/Preparation";
import { COLORS } from "@/styles/colors";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import React from "react";

const Home = () => {
  return (
    <Box sx={{ backgroundColor: COLORS.cream }}>
      <Box
      // sx={{
      //   backgroundColor: "white",
      //   width: "40vw",
      //   display: "flex",
      //   flexDirection: "column",
      //   alignItems: "center",
      //   justifyContent: "center",
      // }}
      >
        <Hero />
        <Preparation />
        <Ingredients />
        <Instructions />
        <Nutrition />
      </Box>
    </Box>
  );
};

export default Home;
