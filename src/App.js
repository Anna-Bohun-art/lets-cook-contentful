import { client } from "./client";
import { Routes, Route, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
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

  const filterRecipe = (category, id) => {
    return recipes.filter(
      (recipe) =>
        (recipe.metadata.tags[0].sys.id === category) & (recipe.sys.id === id)
    );
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
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
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
            path="/:category/:id"
            element={<Recipe recipe={filterRecipe(category, id)} />}
          />
        )}
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
