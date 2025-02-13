import Typography from "@mui/material/Typography";
import React from "react";
import Box from "@mui/material/Box";
import { COLORS } from "@/styles/colors";

const Instructions = ({ recipe }: any) => {
  return (
    <Box
      sx={{
        margin: "2rem",
        padding: "1rem",
      }}
    >
      <Typography variant="h5" sx={{ color: COLORS.red }}>
        Instructions
      </Typography>
      {recipe.steps.map((step: any) => {
        const firstThree = step.split(" ", 3).join(" ");
        const restOfText = step.split(firstThree);
        console.log(firstThree);
        console.log(restOfText);

        return (
          <ol key={step} style={{ display: "list-item" }}>
            <li
              style={{
                marginLeft: "-1.35rem",
                listStyleType: "none",
              }}
            >
              <Typography>
                {" "}
                <span style={{ fontWeight: "bold" }}>{firstThree}</span>{" "}
                {restOfText}
              </Typography>
            </li>
          </ol>
        );
      })}
      <hr style={{ width: "75vw" }}></hr>
    </Box>
  );
};

export default Instructions;
