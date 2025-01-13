import React from 'react';
import RecipeList from '../../components/RecipeList';
import { useFetch } from '../../hooks/useFetch';
import './Home.css';

export default function Home({ searchTerm }) {
  const { data, isLoading, error } = useFetch('http://localhost:3000/recipes');

  // Filter recipes based on searchTerm
  const filteredRecipes = data
    ? data.filter((recipe) =>
        recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];

  return (
    <div className="home">
      {error && <p className="error">{error}</p>}
      {isLoading && <p className="loading">Loading...</p>}
      {data && <RecipeList Recipes={filteredRecipes} />}
    </div>
  );
}
