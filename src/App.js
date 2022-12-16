import axios from "axios";
import * as React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import HomePage from "./components/HomePage";
import Navbar from "./components/Navbar";
import Category from "./components/Category";
import Recipe from "./components/Recipe";
import ErrorPage from "./components/ErrorPage";
import { CssBaseline } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { useThemeContext } from "./ThemeContext";

import "./App.css";

function App() {
  const [fetchResults, setFetchResults] = useState([]);
  const [categories, setCategories] = useState([]);

  const location = useLocation();
  const [, category, id] = location.pathname.split("/");

  const baseURL =
    "http://recipebackend-env-1.eba-hrveypmi.us-east-1.elasticbeanstalk.com";
  // "http://localhost:8080";
  const GetCategoriesURL = baseURL + `/api/categories`;
  const GetRecipesInCategoryURL = baseURL + `/api/${category}/recipes`;
  const GetRecipeInfoURL = baseURL + `/api/recipe/${id}`;

  const { mode, setMode } = useThemeContext();
  const theme = useTheme();

  const isFirstRender = useRef(true);

  function fetchData(url) {
    axios.get(url).then((res) => setFetchResults(res.data));
  }

  useEffect(() => {
    axios.get(GetCategoriesURL).then((res) => setCategories(res.data));
  }, []);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return; // return early if first render
    }
    fetchData(GetRecipesInCategoryURL);
  }, [category]);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return; // return early if first render
    }
    fetchData(GetRecipeInfoURL);
  }, [id]);

  return (
    <>
      <CssBaseline />
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
        <Navbar categoryList={categories} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/:category"
            element={
              <Category
                categories={categories}
                recipesInCategory={fetchResults}
              />
            }
          />
          <Route path="/R/:id" element={<Recipe recipe={fetchResults} />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
