// src/pages/Home.jsx
import React from 'react';
import RecipeCard from '../components/RecipeCard';
import './Home.css';

const recipes = [
  { id: 1, name: 'Pique', image: '/pique.jpg' },
  { id: 2, name: 'Silpancho', image: '/silpancho.jpg' },
  { id: 3, name: 'Sopa de Maní', image: '/sopa_mani.jpg' },
  { id: 4, name: 'Salteñas', image: '/saltenia.jpg' },
  { id: 5, name: 'Rosquetes', image: '/rosquetes.jpg' },
  { id: 6, name: 'Humintas', image: '/humintas.jpg' },
  { id: 7, name: 'Puchero', image: '/puchero.jpg' },
  { id: 8, name: 'Chicharon', image: '/chicharon.jpg' },
  { id: 9, name: 'Buñuelos', image: '/bunuelos.jpg' },
  { id: 10, name: 'Anticucho', image: '/anticucho.jpg' },
  { id: 11, name: 'Aji de Papaliza', image: '/aji_papaliza.jpg' },
  { id: 12, name: 'Puchero', image: '/puchero.jpg' },
];

const Home = () => {
  return (
    <div className="home-container">
      <div className="recipes-grid">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default Home;
