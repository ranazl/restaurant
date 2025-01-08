import React, { useEffect, useState } from 'react';
import './Create.css';
import { useFetch } from '../../hooks/useFetch';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Create() {
  const [title, setTitle] = useState('');
  const [method, setMethod] = useState('');
  const [image, setImage] = useState(null); // Changed to handle file
  const [imageUrl, setImageUrl] = useState(''); // For the uploaded image URL
  const [cookingTime, setCookingTime] = useState('');
  const [ingredients, setIngredients] = useState([]);
  const [newIngredient, setNewIngredient] = useState('');

  const navigate = useNavigate();
  const { postData, data, error } = useFetch('http://localhost:3000/recipes', 'POST');

  const handleSubmit = (e) => {
    e.preventDefault();
    // if (!imageUrl) {
    //   alert('Please upload an image first.');
    //   return;
    // }
    postData({ title, ingredients, method, cookingTime: cookingTime + ' minutes', image: imageUrl });
  };

  useEffect(() => {
    if (data) {
      navigate('/');
    }
  }, [data, navigate]);

  const handleAdd = (e) => {
    e.preventDefault();
    if (newIngredient && !ingredients.includes(newIngredient)) {
      setIngredients((prev) => [...prev, newIngredient]);
    }
    setNewIngredient('');
  };

  const handleImg = (e) => {
    const selectedFile = e.target.files[0];
    setImage(selectedFile);
  };

  // const uploadImage = async () => {
  //   if (!image) {
  //     alert('Please select an image to upload.');
  //     return;
  //   }

  //   const formData = new FormData();
  //   formData.append('image', image);

  //   try {
  //     const response = await axios.post('http://localhost:3000/upload', formData, {
  //       headers: {
  //         'Content-Type': 'multipart/form-data',
  //       },
  //     });
  //     setImageUrl(response.data.imageUrl); // Assuming the server returns the image URL
  //     alert('Image uploaded successfully.');
  //   } catch (err) {
  //     console.error('Image upload failed:', err);
  //   }
  // };

  return (
    <div className="create">
      <h2 className="page-title">Add a new Recipe</h2>
      <form className="formStyle" onSubmit={handleSubmit}>
        <label>
          <span>Recipe title:</span>
          <input type="text" onChange={(e) => setTitle(e.target.value)} value={title} required />
        </label>

        <label>
          <span>Add Image:</span>
          <input type="file" onChange={handleImg} required />
          {/* <button type="button" className="addBtn" onClick={uploadImage}>
            Upload Image
          </button> */}
        </label>
        {imageUrl && <p>Image uploaded: {imageUrl}</p>}

        <label>
          <span>Recipe ingredients:</span>
          <div className="ingredients">
            <input
              type="text"
              onChange={(e) => setNewIngredient(e.target.value)}
              value={newIngredient}
            />
            <button className="addBtn" onClick={handleAdd}>
              Add
            </button>
          </div>
        </label>
        <p>Current ingredients: {ingredients.map((i) => <em key={i}>{i}, </em>)}</p>

        <label>
          <span>Recipe method:</span>
          <textarea onChange={(e) => setMethod(e.target.value)} value={method} required />
        </label>

        <label>
          <span>Recipe cookingTime:</span>
          <input
            type="number"
            onChange={(e) => setCookingTime(e.target.value)}
            value={cookingTime}
            required
          />
        </label>

        <button className="btn">Submit</button>
      </form>
    </div>
  );
}
