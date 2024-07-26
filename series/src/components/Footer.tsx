import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-links">
          <a href="/" tabIndex={0} aria-label="link para a página home">Home</a>
          <a href="/catalogo" tabIndex={0} aria-label="link para a página catálogo">Catálogo</a>
          <a href="/add" tabIndex={0} aria-label="link para a página indicar série">Indicar Série</a>
        </div>
        <p>&copy; 2024 Seu Nome. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
