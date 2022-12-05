import React from 'react';
import { useEffect, useState} from 'react';
import {
    useNavigate
  } from "react-router-dom";

function EdificioHabitante(){
    const [edificios,setEdificios] = useState([])
    const navigate = useNavigate();
    useEffect(()=>{
        fetch('http://LocalHost:8080/TPOAPI/Controller/GetEdificiosByUsuario/'+sessionStorage.getItem("documento"), {
            method: 'GET',
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
            else if(error == "Error: 400"){alert("Habitante no existe")}
            else{alert("Problema Desconocido")}
        })
        .then(setEdificios)
       }, []);

    const sayHello = (id) => {
        navigate(`/MenuHabitante/DetalleEdificio/${id}`)
    }
    return (
        <div className='main-Container-unidades'>
            <h1>Edificios que contienen alguna de mis Unidades Funcionales</h1>
            <hr></hr>
            <div className='Container-Unidades'>
                {edificios.map((p) => 
                    <div className='Container-elements'>
                        <h2>Identificador: {p.codigo}</h2>
                        <h2>Nombre Edificio: {p.nombre}</h2>
                        <h2>Dirección : {p.direccion}</h2>
                        <button onClick={() => sayHello(p.codigo)}>Ver Detalle</button>
                    </div>
                )}
            </div>
            
        </div>
    )

}

export default EdificioHabitante;