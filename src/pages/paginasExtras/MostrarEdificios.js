import React from 'react';
import { useEffect, useState} from 'react';
import {
    useNavigate
  } from "react-router-dom";

function AllEdificios(){
    const [edificios,setEdificios] = useState([])
    var formData = new FormData();
        formData.append("usuarioEmpleado",sessionStorage.getItem("usuario"))
        formData.append("contraseñaEmpleado",sessionStorage.getItem("contraseña"))
    useEffect(()=>{
        fetch('http://LocalHost:8080/TPOAPI/Controller/GetAllEdificios', {
            method: 'POST',
            mode: "cors",
            body: formData
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


    return (
        <div>
            
            <div className='main-Container-unidades'>
                <h1>Todas los Edificios</h1>
                <hr></hr>
                <div className='Container-Unidades'>
                    {edificios.map((p) => 
                        <div className='Container-elements'>
                            <h2>Codigo: {p.codigo}</h2>
                            <h2>Nombre: {p.nombre}</h2>
                            <h2>Direccion: {p.direccion}</h2>
                        </div>
                    )}
                </div>
            </div>
            
        </div>
    )
}
export default AllEdificios