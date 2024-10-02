// src/components/RecipeCard.jsx
import React from 'react';
import './RecipeCard.css';
import { Link } from 'react-router-dom';

const RecipeCard = ({ recipe }) => {
  return (
    <div className="recipe-card">
      <Link to={`/recipe/${recipe.id}`} className="recipe-title">
        {recipe.name}
      </Link>
      <img src={recipe.image} alt={recipe.name} className="recipe-image" />
    </div>
  );
};

export default RecipeCard;
