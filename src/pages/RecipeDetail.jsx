// src/pages/RecipeDetail.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import './RecipeDetail.css';

const recipes = [
  { id: 1, name: 'Ceviche', image: '/receta1.jpg' },
  { id: 2, name: 'Lomo Saltado', image: '/receta2.jpg' },
  // ... (mismas recetas que en Home.jsx)
];

const RecipeDetail = () => {
  const { id } = useParams();
  const recipe = recipes.find((r) => r.id === parseInt(id));

  if (!recipe) {
    return <h2>Receta no encontrada</h2>;
  }

  return (
    <div className="detail-container">
      <h2 className="recipe-name">{recipe.name}</h2>
      <div className="recipe-content">
        <img src={recipe.image} alt={recipe.name} className="detail-image" />
        <div className="recipe-description">
          <p>Descripción de la receta {recipe.name}.</p>
        </div>
      </div>
      <h3>Ingredientes</h3>
      <div className="ingredients">
        <p>Lista de ingredientes para {recipe.name}.</p>
      </div>
      <h3>Pasos a seguir</h3>
      <div className="steps">
        <p>Instrucciones para preparar {recipe.name}.</p>
      </div>
    </div>
  );
};

export default RecipeDetail;
