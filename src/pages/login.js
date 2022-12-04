import React from 'react'
import './login.css'
import { useState } from 'react';
import {
    useNavigate
  } from "react-router-dom";


function Login(){
    const init = {
        usuarioEmpleado:"",
        contraseñaEmpleado:""
    }
    const navigate = useNavigate();

    const [user,setUser] = useState(init)

    const onFormSubmit = (event) => {
        event.preventDefault();
        var formData = new FormData();
        formData.append("usuarioEmpleado",user.usuarioEmpleado)
        formData.append("contraseñaEmpleado",user.contraseñaEmpleado)

        fetch('http://localhost:8080/TPOAPI/Controller/Login', {
        method: 'POST',
        body: formData,
        mode: "cors"
        })
        .then(function(response) {
            if (!response.ok) {
                throw new Error(response.status);
            }
            return response.json();})
        .catch(error => {
            // eslint-disable-next-line
            if(error == "TypeError: Failed to fetch"){alert("Fallo de Conexion")}
            // eslint-disable-next-line
            else if(error == "Error: 400"){alert("Usuario o Contraseña Invalidos")}
            else{alert("Problema Desconocido")}
        })
        .then(response => {
            if (response!= null){ 
                sessionStorage.setItem("usuario",response.usuario)
                sessionStorage.setItem("contraseña",response.contraseña)
                sessionStorage.setItem("documento",response.persona.documento)
                // eslint-disable-next-line
                if(response.permisos.length > 1 || response.permisos[0].permiso != "habitante" ){
                    navigate("MenuAdminitrador")
                }
                else{
                    navigate("MenuHabitante")
                }
            }
        });

    }

    const handleChangeUsuario = (e) => {
        const valor = e.target.value
        setUser(previouState =>{return {...previouState,usuarioEmpleado:valor}})
    }
    const handleChangeContraseña = (e) => {
        const valor = e.target.value
        setUser(previouState =>{return {...previouState,contraseñaEmpleado:valor}})
    }

    return (
        <div className='mainForm'>
        <form className="form-box" onSubmit={onFormSubmit}>
            <div className="header-text">
                <h1>Inicio de Sesion</h1>
            </div>
            <div className="mail">
                <label for="usuario">Usuario</label>
                <input placeholder="Ingresar Correo" type="text" value={user.usuarioEmpleado} onChange={handleChangeUsuario}></input>
            </div>
            <div className="password">
                <label for="contraseña">Contraseña</label>
                <input placeholder="Ingresar Contraseña" type="password" value={user.contraseñaEmpleado} onChange={handleChangeContraseña}></input> 
            </div>
            <div className="button">
                <button type="submit">Login</button>
            </div>
	    </form>
        </div>
    )
}
export default Login