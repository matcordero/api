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
            <header>
            <h1>Sistema de Reclamos | Administrador : <span className="Span-usuario">{sessionStorage.getItem("usuario")}</span></h1>
            <nav>
                <ul className="nav_links">
                    <li>Reclamos</li>
                    <li>Edificio</li>
                    <li>Unidades Funcionales</li>
                    <Link to="dashboard">Dashboard</Link>
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