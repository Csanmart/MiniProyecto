import React from "react"
import { Link } from "react-router-dom";

const Navegacion = ()=>{
    const listNavegacion = [
        {id: 1, name: 'Inicio', to: '/'},
        {id:1, name: 'usuarios', to:'/Usuarios'},
        {id: 1, name: 'Productos', to:'/Productos'},
        {id: 1, name: 'Ofertas', to: '/Ofertas'},
        {id: 1, name: 'Contactanos', to: '/Contactanos'}
    ]
    
    return(
        <nav className="bg-blue-800 p-4 shadow-md w-full">
            <div className="container mx-auto flex items-center justify-between">
                <a className="text-white text-2xl font-bold hover:text-blue-200 transition duration-300" href="#">Mi tienda online</a>
                <div className="flex space-x-6">
                    {listNavegacion.map((navegation, index)=>(
                        <Link key={navegation.id}  to = {navegation.to}className="text-white hover:text-blue-200 text-lg transition duration-300">{navegation.name}</Link>
                    ))}
                </div>
            </div>
        </nav>
    )
}

export default Navegacion;