import React from "react";
import BotonPrimario from "./Components/BotonPrimario";
import TargetaProducto from "./Components/TargetaProducto";
import Navegacion from "./Components/navegacion";
import Swal from "sweetalert2";
import lenteja from'./img/cultivo-lenteja.jpg'
import cocacola from './img/cocacola.jpg'
import arroz from './img/arroz.jpg'

function App() {
  const manejarClik = () =>{
    Swal.fire({
      title: "Buen trabajo",
      text: "Hiciste click en el boton de sweetAlert2",
      icon: "success",
      confirmButtonText: "¡Entendido!"
    })
  }
  return(
    <body>

    <Navegacion/>
    <section className="flex flex-col items-center justify-center bg-gray-100 p-4 w-full">
      <div className="text-7xl text-blue-700 py-5">
        <h1>Nuestra tienda online</h1>
      </div>
      <section className="flex flex-grap">
      <TargetaProducto nombre={"Arroz"} precio={1200} imagenUrl={arroz}/>
      <TargetaProducto nombre={"Lentejas"} precio={1000} imagenUrl={lenteja}/>
      <TargetaProducto nombre={"Gaseosa"} precio={2000} imagenUrl={cocacola}/>
    </section>
    </section>
    </body>
  )
} 

export default App
