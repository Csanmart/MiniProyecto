// src/App.jsx
import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import TargetaProducto from "./Components/TargetaProducto";
import Navegacion from "./Components/navegacion";
import UserForm from "./Components/UseForm";
import UserList from "./Components/UseList";
import BotonPrimario from "./Components/BotonPrimario";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [showUserForm, setShowUserForm] = useState(false);
  const [userActionTrigger, setUserActionTrigger] = useState(0);

  const handleEditUser = (user) => {
    setCurrentUser(user);
    setShowUserForm(true);
  };

  const handleSaveUser = () => {
    setCurrentUser(null);
    setShowUserForm(false);
    setUserActionTrigger((prev) => prev + 1);
  };

  const handleCancelEdit = () => {
    setCurrentUser(null);
    setShowUserForm(false);
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 p-4">
      {/* Barra de navegación */}
      <Navegacion />

      <main className="flex flex-col items-center p-4 w-full max-w-7xl mx-auto">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <h1 className="text-5xl font-extrabold text-blue-700 mb-8">
                  Nuestra tienda online
                </h1>
                <h2 className="text-4xl font-bold text-gray-800 mt-12 mb-8">
                  Nuestros productos
                </h2>
                <p className="mt-12 text-gray-600">
                  Bienvenido a la tienda. ¡Explora nuestra selección!
                </p>
              </>
            }
          />

          <Route
            path="/usuarios"
            element={
              <>
                <h1 className="text-5xl font-extrabold text-blue-700 mb-8">
                  Gestión de Usuarios
                </h1>

                {!showUserForm && (
                  <div className="mb-8">
                    <BotonPrimario
                      texto="Crear Nuevo Usuario"
                      onClick={() => setShowUserForm(true)}
                    />
                  </div>
                )}

                {showUserForm && (
                  <UserForm
                    currentUser={currentUser}
                    onSave={handleSaveUser}
                    onCancel={handleCancelEdit}
                  />
                )}

                <UserList
                  onEditUser={handleEditUser}
                  onUserCreatedOrUpdated={userActionTrigger}
                />
              </>
            }
          />

          <Route
            path="/productos"
            element={
              <TargetaProducto
                nombre="Smartwatch X1"
                precio={200}
                imagenUrl={"https://placehold.co/200x200?text=SmartWatch"}
              />
            }
          />

          <Route
            path="/ofertas"
            element={
              <div className="w-full text-center">
                <h1 className="text-5xl font-extrabold text-blue-700 mb-8">
                  ¡Ofertas Exclusivas!
                </h1>
                <p className="text-2xl text-gray-700 mb-12">
                  ¡No te pierdas esta promoción por tiempo limitado!
                </p>
                <div className="flex flex-wrap justify-center gap-6">
                  <TargetaProducto
                    nombre="Smartwatch X1 (50% OFF)"
                    precio={100}
                    imagenUrl={"https://placehold.co/200x200?text=SmartWatch+Oferta"}
                  />
                  <TargetaProducto
                    nombre="Teclado Mecánico (Envío Gratis)"
                    precio={129}
                    imagenUrl={"https://placehold.co/200x200?text=Teclado+Envio"}
                  />
                  <TargetaProducto
                    nombre="Mouse Gaming RGB (30% OFF)"
                    precio={85}
                    imagenUrl={"https://placehold.co/200x200?text=Mouse+Oferta"}
                  />
                </div>
              </div>
            }
          />

          <Route
            path="/contacto"
            element={
              <div className="w-full max-w-2xl bg-white shadow-xl rounded-lg p-8">
                <h1 className="text-5xl font-extrabold text-blue-700 mb-8 text-center">
                  Contáctanos
                </h1>
                <p className="text-lg text-gray-700 mb-8 text-center">
                  ¿Tienes alguna pregunta, comentario o necesitas ayuda? ¡No dudes en contactarnos!
                </p>
                <form
                  className="space-y-6"
                  onSubmit={(e) => {
                    e.preventDefault();
                    alert("Mensaje enviado con éxito.");
                  }}
                >
                  <div>
                    <label
                      htmlFor="nombreContacto"
                      className="block text-gray-700 text-sm font-bold mb-2"
                    >
                      Tu nombre
                    </label>
                    <input
                      type="text"
                      id="nombreContacto"
                      name="nombre"
                      placeholder="Escribe tu nombre completo"
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="emailContacto"
                      className="block text-gray-700 text-sm font-bold mb-2"
                    >
                      Tu Email
                    </label>
                    <input
                      type="email"
                      id="emailContacto"
                      name="email"
                      placeholder="tu@ejemplo.com"
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="mensajeContacto"
                      className="block text-gray-700 text-sm font-bold mb-2"
                    >
                      Tu Mensaje
                    </label>
                    <textarea
                      id="mensajeContacto"
                      name="mensaje"
                      rows="5"
                      placeholder="Escribe tu mensaje aquí..."
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      required
                    ></textarea>
                  </div>
                  <div className="flex justify-end">
                    <BotonPrimario texto="Enviar Mensaje" type="submit" />
                  </div>
                </form>
              </div>
            }
          />

          <Route
            path="*"
            element={
              <h2 className="text-4xl font-bold text-red-500 mt-12 mb-8 text-center">
                404 - Página no encontrada
              </h2>
            }
          />
        </Routes>
      </main>
    </div>
  );
}

export default App;