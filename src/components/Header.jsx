// src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-logo">
        {/* Si tienes una imagen de logo, úsala aquí */}
        {/* <img src="/logo.png" alt="Logo" className="logo-image" /> */}
        Logo Aquí
      </div>
      <h1 className="header-title">Mikhuy</h1>
      <nav className="header-nav">
        <Link to="/" className="nav-button">Inicio</Link>
        <Link to="/categorias" className="nav-button">Categorías</Link>
      </nav>
    </header>
  );
};

export default Header;
