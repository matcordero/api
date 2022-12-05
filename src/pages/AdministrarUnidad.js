import "./MenuAdministrador.css"
import React from 'react';
import {
    useNavigate, Outlet,
    Link
  } from "react-router-dom";

function AdministrarUnidad(){

    return(
        <div className="MainContainer">
            <hr></hr>
            <header className="header2">
            <nav>
                <ul className="nav_links">
                    <li>Transferir Unidad</li>
                    <li>Agregar Duenio Inquilino</li>
                    <li>Alquilar Unidad</li>
                    <li>Agregar Inquilino Unidad</li>
                    <li>Liberar Unidad</li>
                    <li>Habitar Unidad</li>
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
export default AdministrarUnidad