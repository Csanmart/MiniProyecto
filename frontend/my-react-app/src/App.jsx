import React from "react";
import BotonPrimario from "./Components/BotonPrimario";
import TargetaProducto from "./Components/TargetaProducto";
import Navegacion from "./Components/navegacion";
import Swal from "sweetalert2";
import lenteja from "./img/cultivo-lenteja.jpg";
import cocacola from "./img/cocacola.jpg";
import arroz from "./img/arroz.jpg";
import chocorramo from "./img/Chocorramo.jpg";
import duoPack from "./img/duoPack.jpg";
import zenu from "./img/zenu.jpg";
import atun from "./img/atun.jpg";
import rizadas from "./img/rizadas.jpg";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="main-h-screen flex flex-col items-center bg-gray-100 p-4">
      <Navegacion />
      <main className="flex flex-col items-center p-4 w-full max-w-7xl mx-auto">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <h1 className="text-5xl font-extrabold text-blue-500 mb-8">
                  Nuestra tienda online
                </h1>
                <h2 className="text-3xl font-extrabold text-gray-500 mt-12 mb-8">
                  Nuestros Productos{" "}
                </h2>
                <TargetaProducto
                  nombre={"Arroz Roa"}
                  precio={2000}
                  imagenUrl={arroz}
                />
              </>
            }
          />

          <Route
            path="/Usuarios"
            element={
              <>
                <h2 className="text-3xl font-extrabold text-gray-600">
                  Lista de usuarios
                </h2>
              </>
            }
          />
          <Route
            path="/Productos"
            element={
              <>
                <TargetaProducto
                  nombre={"Lentejas"}
                  precio={1500}
                  imagenUrl={lenteja}
                />
                <TargetaProducto
                  nombre={"Cocacola en lata"}
                  precio={2000}
                  imagenUrl={cocacola}
                />
                <TargetaProducto
                  nombre={"Chocorramo"}
                  precio={2500}
                  imagenUrl={chocorramo}
                />
              </>
            }
          />
          <Route
            path="/Ofertas"
            element={
              <div className="w-full text-center">
                <h2 className="">Ofertas exclusivas!</h2>
                <p>No te pierdas de estas ofertas</p>
                <div className="flex flex-wrap justify-center gap-6">
                  <TargetaProducto
                    nombre={"Cocacola paga 1 lleva 3"}
                    precio={20000}
                    imagenUrl={duoPack}
                  />
                  <TargetaProducto
                    nombre={"Rizadas paquete completo"}
                    precio={10000}
                    imagenUrl={rizadas}
                  />
                  <TargetaProducto
                    nombre={"Atunes x5"}
                    precio={30000}
                    imagenUrl={atun}
                  />
                  <TargetaProducto
                    nombre={"Paquete completo zenu"}
                    precio={20000}
                    imagenUrl={zenu}
                  />
                </div>
              </div>
            }
          />
          <Route
            path="/Contactanos"
            element={
              <div className="w-full max-w-2x1 bg-white shadow-xl rounded-lg p-8">
                <h1 className="text-5xl font-extrabold text-blue-700 mb-8 text-center">
                  Contactanos
                </h1>
                <p className="text-lg text-gray-700 mb-8 text-center">
                  Tienes alguna pregunta, comentaro o necesitas ayuda, no dudes
                  en contactarnos
                </p>
                <form className="space-y-6" action=" ">
                  <div>
                    <label
                      htmlFor="nombreContacto"
                      className="block text-gray-700 text-sm font-bold mb-2"
                    >
                      Tu Nombre
                    </label>
                    <input
                      type="text"
                      id="nombreContacto"
                      name="nombre"
                      placeholder="Escriba su nombre completo...."
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="mensajeContacto"
                      className="block text-gray-700 text-sm font-bold mb-2"
                    >
                      Tu mensaje
                    </label>
                    <textarea
                      id="mensajeContacto"
                      name="mensaje"
                      rows="5"
                      placeholder="Escriba su mensaje aqui...."
                      className="shadow appearance-none border rounded w-full py-2
                      px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      required
                    ></textarea>
                  </div>
                </form>
                <div>
                  <h3 className="text-2xl font-bold mb-4">Tambien puedes encontrarnos en:</h3>
                  <p className="mb-2"><strong className="text-blue-600">Teléfono:</strong> +57 123 456 7890</p>
                  <p className="mb-2"><strong className="text-blue-600">Horario de Atención:</strong> Lunes a Viernes, 9:00 AM - 6:00 PM</p>
                  <p className="mb-2"><strong className="text-blue-600">Dirección:</strong> Calle Ficticia 123, Ciudad Ejemplo, País</p>
                </div>
              </div> 
            }/>
        </Routes>
      </main>
    </div>
  );
}

export default App;
