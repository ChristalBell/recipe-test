import Typography from "@mui/material/Typography";
import React from "react";
import Box from "@mui/material/Box";
import { COLORS } from "@/styles/colors";
import useMediaQuery from "@mui/material/useMediaQuery";

const Nutrition = ({ recipe }: any) => {
  const mobile = useMediaQuery("(min-width:600px)");
  return (
    <Box
      sx={{
        margin: " -4rem 2rem",
        padding: "2rem",
        transform: "translateY(-3rem)",
      }}
    >
      <Typography variant="h5" sx={{ color: COLORS.red, marginBottom: "1rem" }}>
        Nutrition
      </Typography>
      <Typography sx={{ marginBottom: "1rem" }}>
        The table below shows nutritional values per serving without the
        additional fillings.
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <Typography>Calories</Typography>
          <Typography sx={{ color: COLORS.red, fontWeight: "bold" }}>
            {recipe.nutrition.calories}
          </Typography>
        </Box>
        <hr style={{ width: mobile ? "75vw" : "50vw" }}></hr>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <Typography>Carbs</Typography>
          <Typography sx={{ color: COLORS.red, fontWeight: "bold" }}>
            {recipe.nutrition.carbs}
          </Typography>
        </Box>
        <hr style={{ width: mobile ? "75vw" : "50vw" }}></hr>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <Typography>Protein</Typography>
          <Typography sx={{ color: COLORS.red, fontWeight: "bold" }}>
            {recipe.nutrition.protein}
          </Typography>
        </Box>
        <hr style={{ width: mobile ? "75vw" : "50vw" }}></hr>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            paddingBottom: "2rem",
          }}
        >
          <Typography>Fat</Typography>
          <Typography sx={{ color: COLORS.red, fontWeight: "bold" }}>
            {recipe.nutrition.fat}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Nutrition;
