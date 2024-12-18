import React from 'react'
import {Link} from 'react-router-dom'
import './RecipeList.css'

export default function RecipeList({Recipes}) {
  return (
    <div className='recipe-list'>
      {Recipes.map(Recipe => (
          <div key={Recipe.id} className='card'>
              <h3>{Recipe.title}</h3>
              <p>{Recipe.cookingTime} to make</p>
              <div>{Recipe.method.substring(0,100)}...</div>
              <Link to={`/recipe/${Recipe.id}`}>cook this</Link>
          </div>
      ))}
    </div>
  )
}
