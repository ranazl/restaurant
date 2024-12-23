import React from 'react';
import RecipeList from '../../components/RecipeList';
import {useFetch} from '../../hooks/useFetch'
import './Home.css'

export default function Home() {
  const {data, isLoading, error} = useFetch('http://localhost:3000/recipes')
  return (
    <div className='home'>
      {error && <p className='error'>{error}</p>}
      {isLoading && <p className='loading'>Loading...</p>}
      {data && <RecipeList Recipes={data}/>}
    </div>
  )
}
