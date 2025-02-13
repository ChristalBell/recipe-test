import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import React from "react";
import { COLORS } from "@/styles/colors";

const Preparation = ({ recipe }: any) => {
  return (
    <Box
      sx={{
        backgroundColor: COLORS.pink,
        margin: "2rem",
        padding: "1rem",
        borderRadius: "1rem",
      }}
    >
      <Typography
        sx={{
          color: COLORS.purple,
          fontSize: "1.25rem",
          fontWeight: "bold",
          paddingLeft: "1.5rem",
        }}
      >
        Preparation Time
      </Typography>
      <ul style={{ lineHeight: "2rem" }}>
        <li>
          <span style={{ fontWeight: "bold" }}>Total:</span> {recipe.time}
        </li>
        <li>
          <span style={{ fontWeight: "bold" }}>Preparation:</span>{" "}
          {recipe.prepTime}
        </li>
        <li>
          <span style={{ fontWeight: "bold" }}>Cooking:</span> {recipe.cookTime}
        </li>
      </ul>
    </Box>
  );
};

export default Preparation;
