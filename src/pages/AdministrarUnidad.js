import "./MenuAdministrador.css"
import React from 'react';
import {
    Outlet,
    Link
  } from "react-router-dom";

function AdministrarUnidad(){

    return(
        <div className="MainContainer">
            <hr></hr>
            <header className="header2">
            <nav>
                <ul className="nav_links">
                    <Link className="Link" to="CrearUnidad">Crear Unidad</Link>
                    <Link className="Link" to="TransferirUnidad">Transferir Unidad</Link>
                    <Link className="Link" to="AgregarDuenioInquilino">Agregar Dueñio Inquilino</Link>
                    <Link className="Link" to="AlquilarUnidad">Alquilar Unidad</Link>
                    <Link className="Link" to="AgregarInquilino">Agregar Inquilino Unidad</Link>
                    <Link className="Link" to="LiberarUnidades">Liberar Unidad</Link>
                    <Link className="Link" to="HabitarUnidad">Habitar Unidad</Link>
                    <Link className="Link" to="MostrarUnidades">Mostrar Unidad</Link>
                    <Link className="Link" to="MostrarEdificios">Mostrar Edificios</Link>
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