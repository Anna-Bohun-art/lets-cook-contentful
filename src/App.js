import { client } from "./client";
import { Routes, Route, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import HomePage from "./components/HomePage";
import Navbar from "./components/Navbar";
import Category from "./components/Category";
import Recipe from "./components/Recipe";
import ErrorPage from "./components/ErrorPage";

import "./App.css";

function App() {
  const [recipes, setRecipes] = useState([]);
  const location = useLocation();
  const [, category, id] = location.pathname.split("/");

  const filterRecipesByCategory = (category) => {
    return recipes.filter(
      (recipe) => recipe.metadata.tags[0].sys.id === category
    );
  };

  const filterRecipeById = (id) => {
    return recipes.filter((recipe) => recipe.sys.id === id)[0];
  };

  const getCatgoryList = () => {
    return [
      ...new Set(recipes.map((recipe) => recipe.metadata.tags[0].sys.id)),
    ];
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
    <div className="App">
      <Navbar categoryList={getCatgoryList()} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        {recipes && (
          <Route
            path="/:category"
            element={
              <Category recipesInCategory={filterRecipesByCategory(category)} />
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
  );
}

export default App;
