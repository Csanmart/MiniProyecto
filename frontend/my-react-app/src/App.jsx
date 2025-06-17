import React from "react";
import BotonPrimario from "./Components/BotonPrimario";
import Swal from "sweetalert2";

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
    <section className="flex flex-col items-center justify-center bg-gray-100 p-4 w-full">
      <div className="p-8 bg-white rounded-xl shadow-2xl text-center">
        <BotonPrimario texto={"Enviar"} onClick={manejarClik}/>
      </div>
    </section>
  )
} 

export default App
