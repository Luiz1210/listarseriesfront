import React from 'react';
import { Link } from 'react-router-dom';
import { FaSun, FaMoon } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';
import logo from "../assets/image/imagem1.jpg";

const NavBar: React.FC = () => {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <nav className={`navbar ${darkMode ? "navbar-dark" : "navbar-light"} navbar-transparent`}>
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link to="/" tabIndex={0} aria-label="link para a página principal">
            <img
              src={logo}
              width="150"
              height="150"
              className="rounded-logo"
              alt="Logo"
              tabIndex={0}
              aria-label="logo do site"
            />
          </Link>
        </div>
        <div className="navbar-links">
          <Link to="/" tabIndex={0} aria-label="link para a página principal de listar séries">
            Catálogo
          </Link>
          <Link to="/add" tabIndex={0} aria-label="link para adicionar séries">
            Indicar Série
          </Link>
        </div>
        <button
          onClick={toggleDarkMode}
          className="btn btn-link"
          tabIndex={0}
          aria-label="botão para alterar os modos claro e escuro da página"
        >
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
