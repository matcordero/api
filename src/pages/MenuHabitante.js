import "./MenuAdministrador.css"
import React from 'react';
import {
    useNavigate, Outlet,
    Link
  } from "react-router-dom";

function MenuHabitante(){
    const navigate = useNavigate();

    return(
        <div className="MainContainer">
            <header>
            <h1>Sistema de Reclamos | Habitante : <span className="Span-usuario">{sessionStorage.getItem("usuario")}</span></h1>
            <nav>
                <ul className="nav_links nav_links-Habitante">
                    <Link to="MisReclamos" className="Link">Ver Reclamos</Link>
                    <Link to="EdificiosHabitantes" className="Link">Edificios</Link>
                    <Link to="UnidadesFuncionales" className="Link">Unidades Funcionales</Link>
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
export default MenuHabitante