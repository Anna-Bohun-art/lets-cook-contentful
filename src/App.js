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
  const [getCategories, setGetCategories] = useState(false);
  const [getRecipesInCategory, setGetRecipesInCategory] = useState(false);
  const [getRecipeInfo, setGetRecipeInfo] = useState(false);

  const [fetchResults, setFetchResults] = useState([]);

  const location = useLocation();
  const [, category, id] = location.pathname.split("/");

  const baseURL = "http://localhost:8080";
  const GetCategoriesURL = baseURL + `/api/categories`;
  const GetRecipesInCategoryURL = baseURL + `/api/${category}/recipes`;
  const GetRecipeInfoURL = baseURL + `/api/${id}`;

  const { mode, setMode } = useThemeContext();
  const theme = useTheme();

  console.log(fetchResults);

  const isFirstRender = useRef(true);

  function fetchData(url) {
    axios.get(url).then((res) => setFetchResults(res.data));
  }

  useEffect(() => {
    setGetCategories(true);
    fetchData(GetCategoriesURL);
  }, []);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return; // return early if first render
    }
    setGetCategories(false);
    fetchData(GetRecipesInCategoryURL);
  }, [category]);

  // useEffect(() => {
  //   fetchData(GetRecipeInfoURL);
  // }, [getRecipeInfo]);

  // const filterRecipesByCategory = () => {
  //   setGetRecipesInCategory(!getRecipesInCategory);

  // return fetchResults.filter(
  //   (recipe) => recipe?.metadata.tags[0]?.sys.id === category
  // );
  //});
  // };

  // const filterRecipeById = () => {
  //   setGetRecipeInfo(!getRecipeInfo);

  //   //   return recipes?.filter((recipe) => recipe.sys.id === id)[0];
  // };

  // const getCatgoryList = () => {
  //   return [
  //     ...new Set(recipes?.map((recipe) => recipe.metadata.tags[0]?.sys.id)),
  //   ].filter(Boolean);
  // };

  // useEffect(() => {
  //   client
  //     .getEntries()
  //     .then((res) => {
  //       setRecipes(res.items);
  //     })
  //     .catch((err) => console.log(err));
  // }, []);

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
        {getCategories && <Navbar categoryList={fetchResults} />}
        <Routes>
          <Route path="/" element={<HomePage />} />
          {fetchResults && (
            <Route
              path="/:category"
              element={<Category recipesInCategory={fetchResults} />}
            />
          )}
          {/* {fetchResults && (
            <Route path="/R/:id" element={<Recipe recipe={fetchResults} />} />
          )}
          <Route path="*" element={<ErrorPage />} /> */}
        </Routes>
      </div>
    </>
  );
}

export default App;
