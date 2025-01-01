import React, { useEffect, useState } from 'react';
import "./Create.css"
import { useFetch } from '../../hooks/useFetch';
import { useNavigate } from 'react-router-dom';
import axios from "axios";

export default function Create() {
  const [title,setTitle] = useState('')
  const [method, setMethod] = useState('')
  const [image,setImage] = useState('')
  const [cookingTime,setCookingTime] = useState('')
  const [ingredients,setIngredients] = useState([])
  const [newIngredient,setNewIngredient] = useState('')

  const navigate = useNavigate()

  const {postData, data, error} = useFetch('http://localhost:3000/recipes', 'POST')

  const handleSubmit = (e) => {
    e.preventDefault()
    postData({title, ingredients, method, cookingTime: cookingTime + ' minutes'})
  }

  useEffect (() => {
    if(data){
      navigate('/')
    }
  },[data])

  const handleAdd = (e) => {
    e.preventDefault()
    if(newIngredient && !ingredients.includes(newIngredient)){
      setIngredients(preIngredient => [...preIngredient,newIngredient])
    }
    setNewIngredient('')
  }

  const handleImg = (e) =>{
    setImage(e.target.files[0])
  }

  // const handleAddImg = (e) => {
  //   const formData = new FormData()
  //   formData.append('image', image)
  //   axios.post('url', formData)
  // }

  return (
    <div className='create'>
      <h2 className='page-title'> Add a new Recipe </h2>

      <form className='formStyle' onSubmit={handleSubmit}>
        <label>
          <span> Recipe title: </span>
          <input
            type='text'
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            required
          />
        </label>

        <label>
          <span> Add Image: </span>
          <input
            type='file'
            onChange={handleImg}
            value={title}
            required
          />
          {/* <button className='addBtn' onClick={handleAddImg}>Add</button> */}
        </label>

        <label>
          <span> Recipe ingredients: </span>
            <div className='ingredients'>
              <input type='text'
                onChange={(e) => setNewIngredient(e.target.value)}
                value={newIngredient}
              />
              <button className='addBtn' onClick={handleAdd}>Add</button>
            </div>
        </label>
        <p>Current ingredients: {ingredients.map(i => <em key={i}>{i}, </em>)}</p>

        <label>
          <span> Recipe method: </span>
          <textarea
            onChange={(e) => setMethod(e.target.value)}
            value={method}
            required
          />
        </label>

        <label>
          <span> Recipe cookingTime: </span>
          <input
            type='number'
            onChange={(e) => setCookingTime(e.target.value)}
            value={cookingTime}
            required
          />
        </label>

        <button className='btn'>Submit</button>

      </form>
    </div>
  )
}
