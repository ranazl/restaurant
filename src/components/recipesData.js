import React, { useState } from 'react';
import Navbar from './Navbar';
import RecipeList from './RecipeList';
import Searchbar from './Searchbar';

const recipesData = [
  {
    id: '1',
    title: 'Pasta',
    ingredients: ['2oog pasta', '4 garlic cloves', '100g Mashroom', '¾ cup heavy cream'],
    method: 'Heat olive oil in a medium pan over medium heat. Add garlic and stir until fragrant, 1 to 2 minutes. Add butter and stir constantly until melted.',
    cookingTime: '30 minutes',
    image: '/assets/pasta.jpg',
  },
  {
    id: '2',
    title: 'Ghorme sabzi',
    ingredients: ['1 Onions', '100g Herbs', '200g Beef', '300ml Red Kidney Beans'],
    method: 'To a 6-quart dutch oven or larger, add 3 tablespoons of olive oil over medium heat ...',
    cookingTime: '3 hours',
    image: '/assets/ghorme.jpg',
  },
  {
    id: '3',
    title: 'Tahchin',
    ingredients: ['2 Cups rice', '1 Onion', '1 Chicken', '1 cup Barberry'],
    method: 'In a shallow mixing bowl, combine 2 tablespoons yogurt with 1 teaspoon cumin, the turmeric, 1 teaspoon salt, 2 tablespoons of lemon juice, and the grated onion and its juices. Add the chicken ...',
    cookingTime: '2 hours',
    image: '/assets/tahchin.jpg',
  },
];

export default function App() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredRecipes = recipesData.filter((recipe) =>
    recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className='app'>
      <Navbar />
      <Searchbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <RecipeList Recipes={filteredRecipes} />
    </div>
  );
}
