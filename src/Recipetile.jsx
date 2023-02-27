import {
  Box,
  IconButton,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  styled,
  Typography,
} from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import "./App.css";
import React from "react";

export const Recipetile = ({ recipe }) => {
  return (
    // recipe["recipe"]["label"].match(/\.(jpeg|jpg|gif|png)$/) != null && (
      <ImageListItem sx={{}}>
        <img
          className="image"
          src={recipe["recipe"]["image"]}
          alt="Recipe image"
          onClick={() => window.open(recipe["recipe"]["url"])}
        />
        <ImageListItemBar
          title={recipe["recipe"]["label"]}
          actionIcon={
            <IconButton
              sx={{ color: "rgba(255, 255, 255, 0.54)" }}
              aria-label={`info about ${recipe["recipe"]["label"]}`}
            >
              <InfoIcon />
            </IconButton>
          }
        />
      </ImageListItem>
    // )
  );
};
