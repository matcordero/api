import "./MenuAdministrador.css"
import React from 'react';
import {
    useNavigate, Outlet,
    Link
  } from "react-router-dom";

function MenuAdministrador(){
    const navigate = useNavigate();

    return(
        <div className="MainContainer">
            <header className="header2">
            <h1>Sistema de Reclamos | Administrador : <span className="Span-usuario">{sessionStorage.getItem("usuario")}</span></h1>
            <nav>
                <ul className="nav_links">
                    <li>Cambiar Estado Reclamo</li>
                    <li>Crear Edificio</li>
                    <Link className="Link" to="AdministrarUnidad">Administrar Unidad</Link>
                    <Link className="Link" to="RegistrarPersona">Registrar Persona</Link>
                    <Link className="Link" to="AdministrarUsuario">Administrar Usuario</Link>
                </ul>
            </nav>
            <button className="cdc" onClick={() => navigate("/")}>Cambiar de Cuenta</button>
            </header>
            <div className="content">
                <Outlet />
            </div>
        </div>
        
    )
}
export default MenuAdministrador