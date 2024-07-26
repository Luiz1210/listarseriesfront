import React from "react";
import { useTheme } from '../context/ThemeContext'; 

const Footer: React.FC = () => {
  const { darkMode } = useTheme();

  return (
    <footer className={`footer ${darkMode ? "footer-dark" : "footer-light"}`}>
      <div className="footer-container">
        <div className="footer-links">
          <a href="/" tabIndex={0} aria-label="link para a página catálogo">Catálogo</a>
          <a href="/add" tabIndex={0} aria-label="link para a página indicar série">Indicar Série</a>
        </div>
        <p>&copy; 2024 Luiz Gustavo de Azevedo. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
