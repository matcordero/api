import React from 'react'
import './login.css'
import { useState } from 'react';

function Login(){
    const init = {
        usuarioEmpleado:"",
        contraseñaEmpleado:""
    }

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
        .then(response => response.json())
        .catch(error => console.error('Error:', error))
        .then(response => console.log('Success:', response.usuario));
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
    )
}
export default Login