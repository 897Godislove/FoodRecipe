import {
  Box,
  Button,
  Grid,
  InputBase,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import { useState } from "react";
import "./App.css";
import { Recipetile } from "./Recipetile";

function App() {
  const YOUR_APP_KEY = "93847a770ce56920f8d05f0ca3b6228f";
  const YOUR_APP_ID = "211199f1";
  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState("");
  const [health, setHealth] = useState("vegetarian");

  const url = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&health=${health}`;

  const recipeInfo = async () => {
    var result = await axios.get(url);
    setRecipes(result.data.hits);
    console.log(result.data.hits);
  };
  const submitForm = (e) => {
    e.preventDefault();
    recipeInfo();
  };
  // useEffect(() => {
  //   recipeInfo()
  // })

  const change = (event) => {
    setHealth(event.target.value);
  };

  return (
    <Box
      className="app"
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      sx={{
        p: "40px 24px",
        borderTop: "15px solid pink",
      }}
    >
      <Typography variant="h4" sx={{ fontWeight: 700 }}>
        <u>Food Recipe Hub</u>🥗
      </Typography>
      <form onSubmit={submitForm}>
        <Box
          flexDirection="row"
          justifyContent={"space-around"}
          sx={{ pt: 3, display: { xs: "block", sm: "flex" } }}
        >
          <InputBase
            placeholder="Type a major Ingredient"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
            }}
            sx={{
              borderRadius: 5,
              border: "2px solid grey",
              px: 2,
              m: 2,
            }}
          />

          <Box width="250px" sx={{ mx: 2 }}>
            <TextField
              label="Eating Type"
              size="small"
              value={health}
              onChange={change}
              fullWidth
              select
              sx={{ color: "black", m: 2 }}
            >
              <MenuItem value="vegetarian">Vegetarian</MenuItem>
              <MenuItem value="vegan">Vegan</MenuItem>
              {/* <MenuItem value="high-fiber">High-Fiber</MenuItem> */}
              {/* <MenuItem value="low-fat">Low-Fat</MenuItem> */}
              <MenuItem value="alcohol-free">Alcohol-Free</MenuItem>
              <MenuItem value="immuno-supportive">Immune-Supportive</MenuItem>
              <MenuItem value="low-sugar">No-Sugar</MenuItem>
              <MenuItem value="sugar-conscious">Sugar-Conscious</MenuItem>
              <MenuItem value="keto-friendly">Keto</MenuItem>
              <MenuItem value="dairy-free">Diary</MenuItem>
              <MenuItem value="pescatarian">Pescatarian</MenuItem>
            </TextField>
          </Box>

          <Button
            type="submit"
            variant="contained"
            size="small"
            color="success"
            sx={{
              borderRadius: 3.5,
              my: 2,
              marginLeft: 5,
              fontSize: 14,
              border: "2px solid green",
              "&:hover": {
                bgcolor: "transparent",
                color: "green",
                border: "2px solid green",
              },
            }}
          >
            Get Dishes
          </Button>
        </Box>
      </form>
      <Box sx={{mt: 5,  }}>
        <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 1, md: 2 }}>
          {recipes.map((recipe) => {
            return (
              <Grid item md={0.5}>
                <Recipetile recipe={recipe} />
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Box>
  );
}

export default App;
