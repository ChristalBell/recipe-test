import Typography from "@mui/material/Typography";
import React from "react";
import Box from "@mui/material/Box";
import { COLORS } from "@/styles/colors";
import useMediaQuery from "@mui/material/useMediaQuery";

const Ingredients = ({ recipe }: any) => {
  const mobile = useMediaQuery("(min-width:600px)");
  return (
    <Box
      sx={{
        margin: "2rem",
        padding: "1rem",
      }}
    >
      <Typography variant="h5" sx={{ color: COLORS.red }}>
        Ingredients
      </Typography>
      {recipe.ingredients.map((ingredient: any) => {
        return (
          <ul key={recipe.ingredient}>
            <li
              style={{
                marginLeft: "-1.35rem",
              }}
            >
              {ingredient}
            </li>
          </ul>
        );
      })}
      <hr style={{ width: mobile ? "75vw" : "50vw" }}></hr>
    </Box>
  );
};

export default Ingredients;
