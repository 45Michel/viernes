import React from 'react';

const Footer = () => {
  return (
    <footer className="border-top border-dark bg-white p-3 text-dark py-4">
      <div className="container text-center">
        <p>&copy; 2024 Mi Aplicación. Todos los derechos reservados.</p>
        <div>
          <a href="/about" className="text-dark mx-2">Acerca de</a> |
          <a href="/" className="text-dark mx-2">D&M</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;