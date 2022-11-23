import { client } from "./client";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Category from "./components/Category";
import Recipe from "./components/Recipe";
import ErrorPage from "./components/ErrorPage";

import "./App.css";

function App() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    client
      .getEntries()
      .then((res) => {
        setRecipes(res.items);
      })
      .catch((err) => console.log(err));
  }, []);

  console.log(recipes);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:category" element={<Category recipes={recipes} />} />
        <Route
          path="/:category/:recipe"
          element={<Recipe recipes={recipes} />}
        />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
