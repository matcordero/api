import "./MenuAdministrador.css"
import React from 'react';
import {
    useNavigate, Outlet,
    Link
  } from "react-router-dom";

function AdministrarUsuario(){

    return(
        <div className="MainContainer">
            <hr></hr>
            <header className="header2">
            <nav>
                <ul className="nav_links">
                    <li>Agregar Permiso</li>
                    <li>Ver Permiso Usuario</li>
                    <li>Eliminar Usuario</li>
                    <Link className="Link" to="RegistrarUsuario">Registrar Usuario</Link>
                </ul>
            </nav>
            </header>
            <div className="content">
                <Outlet />
            </div>
        </div>
        
    )
}
export default AdministrarUsuario