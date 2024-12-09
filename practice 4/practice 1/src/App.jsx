import React, { useState } from 'react';
import Hero from './Components/Hero';
import axios from 'axios';

function App() {
  const [recipes, setRecipes] = useState([]);

  const handleSearch = async (query) => {
    const id = "48ffb29d";
    const key = "5b3313d74ea9502e69f3a43fbea37edd";

    try {
      const response = await axios.get(`https://api.edamam.com/search?q=${query}&app_id=${id}&app_key=${key}`);
      console.log("Response:", response);
      setRecipes(response.data.hits);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="App">
      <Hero onSearch={handleSearch} />
      <div>
        {recipes.map((recipe, index) => (
          <div key={index}>
            <h3>{recipe.recipe.label}</h3>
            <img src={recipe.recipe.image} alt={recipe.recipe.label} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
