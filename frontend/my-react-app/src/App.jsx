import React from "react";
import BotonPrimario from "./Components/BotonPrimario";
import TargetaProducto from "./Components/TargetaProducto";
import Navegacion from "./Components/navegacion";
import Swal from "sweetalert2";
import lenteja from'./img/cultivo-lenteja.jpg'
import cocacola from './img/cocacola.jpg'
import arroz from './img/arroz.jpg'
import chocorramo from './img/Chocorramo.jpg'
import duoPack from './img/duoPack.jpg'
import zenu from './img/zenu.jpg'
import atun from './img/atun.jpg'
import rizadas from './img/rizadas.jpg'
import { Route, Routes } from "react-router-dom";

function App() {
  return(
      <div className="main-h-screen flex flex-col items-center bg-gray-100 p-4">
        <Navegacion/>
        <main className="flex flex-col items-center p-4 w-full max-w-7xl mx-auto">
          <Routes>
            <Route path="/" element={
              <>
                <h1 className="text-5xl font-extrabold text-blue-500 mb-8">Nuestra tienda online</h1>
                <h2 className="text-3xl font-extrabold text-gray-500 mt-12 mb-8">Nuestros Productos </h2>
                <TargetaProducto
                  nombre={'Arroz Roa'}
                  precio={2000}
                  imagenUrl={arroz}
                />
              </>
            }/>

            <Route path="/Usuarios" element={
              <>
                <h2 className="text-3xl font-extrabold text-gray-600">Lista de usuarios</h2>
              </>
            }/>
            <Route path="/Productos" element={
              <>
                <TargetaProducto
                  nombre={'Lentejas'}
                  precio={1500}
                  imagenUrl={lenteja}
                />
                <TargetaProducto
                  nombre={'Cocacola en lata'}
                  precio={2000}
                  imagenUrl={cocacola}
                />
                <TargetaProducto
                  nombre={'Chocorramo'}
                  precio={2500}
                  imagenUrl={chocorramo}
                />
              </>
            }/>
            <Route path="/Ofertas" element={
              <div className="w-full text-center">
                <h2 className="">Ofertas exclusivas!</h2>
                <p>No te pierdas de estas ofertas</p>
                <div className="flex flex-wrap justify-center gap-6">
                  <TargetaProducto 
                  nombre={'Cocacola paga 1 lleva 3'}
                  precio={20000}
                  imagenUrl={duoPack}
                  />
                  <TargetaProducto 
                  nombre={'Rizadas paquete completo'}
                  precio={10000}
                  imagenUrl={rizadas}
                  />
                  <TargetaProducto 
                  nombre={'Atunes x5'}
                  precio={30000}
                  imagenUrl={atun}
                  />
                  <TargetaProducto 
                  nombre={'Paquete completo zenu'}
                  precio={20000}
                  imagenUrl={zenu}
                  />
                </div>
              </div>
            }/>
          </Routes>
        </main>
      </div>
  )
} 

export default App
