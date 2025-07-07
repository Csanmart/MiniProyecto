import React from "react";
import { Link } from "react-router-dom";

const Navegacion = () => {
  const listNavegacion = [
    { id: 1, name: "Inicio", to: "/" },
    { id: 2, name: "Usuarios", to: "/usuarios" },
    { id: 3, name: "Productos", to: "/productos" },
    { id: 4, name: "Ofertas", to: "/ofertas" },
    { id: 5, name: "Contacto", to: "/contacto" }
  ];

  return (
    <nav className="bg-blue-800 p-4 shadow-md w-full">
      <div className="container mx-auto flex items-center justify-between">
        <Link
          to="/"
          className="text-white text-2xl font-bold hover:text-blue-200 transition duration-300"
        >
          Mi tienda online
        </Link>
        <div className="flex space-x-6">
          {listNavegacion.map((navegacion) => (
            <Link
              key={navegacion.id}
              to={navegacion.to}
              className="text-white hover:text-blue-200 text-lg transition duration-300"
            >
              {navegacion.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navegacion;
