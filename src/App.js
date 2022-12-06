import * as React from "react";
import { useMemo } from "react";
import { client } from "./client";
import { Routes, Route, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import HomePage from "./components/HomePage";
import Navbar from "./components/Navbar";
import Category from "./components/Category";
import Recipe from "./components/Recipe";
import ErrorPage from "./components/ErrorPage";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import ToggleOffIcon from "@mui/icons-material/ToggleOff";
import ToggleOnIcon from "@mui/icons-material/ToggleOn";
import NightlightIcon from "@mui/icons-material/Nightlight";
import { CssBaseline } from "@mui/material";
import { useTheme } from "@mui/material/styles";
//import CssBaseline from "@mui/material/CssBaseline";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { useThemeContext } from "./ThemeContext";

import "./App.css";

function App() {
  const [recipes, setRecipes] = useState([]);
  const location = useLocation();
  const [, category, id] = location.pathname.split("/");

  const { mode, setMode } = useThemeContext();
  const theme = useTheme();

  // const darkTheme = createTheme({
  //   palette: {
  //     mode: "dark",
  //   },
  // });

  // const darkTheme = {
  //   body: "#1c1c1c",
  //   title: "#fff",
  //   subtitle: "#b6b6b6",
  // };

  // const lightTheme = {
  //   body: "#fff",
  //   title: "#1c1c1c",
  //   subtitle: "#333",
  // };

  const filterRecipesByCategory = (category) => {
    return recipes.filter(
      (recipe) => recipe?.metadata.tags[0]?.sys.id === category
    );
  };

  const filterRecipeById = (id) => {
    return recipes?.filter((recipe) => recipe.sys.id === id)[0];
  };

  const getCatgoryList = () => {
    return [
      ...new Set(recipes?.map((recipe) => recipe.metadata.tags[0]?.sys.id)),
    ].filter(Boolean);
  };

  useEffect(() => {
    client
      .getEntries()
      .then((res) => {
        setRecipes(res.items);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <CssBaseline />
      {/* <div onClick={() => alert("hey!")}>
        <WbSunnyIcon /> ToggleOffIcon
      </div> */}
      <IconButton
        sx={{ ml: 1 }}
        onClick={() => setMode((prev) => (prev === "light" ? "dark" : "light"))}
        color="inherit"
      >
        {theme.palette.mode === "dark" ? (
          <Brightness4Icon />
        ) : (
          <Brightness7Icon />
        )}
      </IconButton>
      <div>
        {recipes && <Navbar categoryList={getCatgoryList()} />}
        <Routes>
          <Route path="/" element={<HomePage />} />
          {recipes && (
            <Route
              path="/:category"
              element={
                <Category
                  recipesInCategory={filterRecipesByCategory(category)}
                />
              }
            />
          )}
          {recipes && (
            <Route
              path="/R/:id"
              element={<Recipe recipe={filterRecipeById(id)} />}
            />
          )}
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
