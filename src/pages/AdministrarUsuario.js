import "./MenuAdministrador.css"
import React from 'react';
import {
    Outlet,
    Link
  } from "react-router-dom";

function AdministrarUsuario(){

    return(
        <div className="MainContainer">
            <hr></hr>
            <header className="header2">
            <nav>
                <ul className="nav_links">
                    <Link className="Link" to="AgregarPermiso">Agregar Permiso</Link>
                    <Link className="Link" to="EliminarPermiso">Quitar Permiso</Link>
                    <Link className="Link" to="Personas">Listado Personas</Link>
                    <Link className="Link" to="Usuarios">Listado Usuarios</Link>
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