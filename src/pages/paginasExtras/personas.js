import React from 'react';
import { useEffect, useState} from 'react';

function Personas(){
    const [persona,setPersona] = useState([])
    
    useEffect(()=>{
        fetch('http://LocalHost:8080/TPOAPI/Controller/GetAllPersona', {
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
        .then(setPersona)
       }, []);


    return (
        <div className='main-Container-unidades'>
            <h1>Listado de Personas</h1>
            <hr></hr>
            <div className='Container-Unidades'>
                {persona.map((p) => 
                    <div className='Container-elements'>
                        <h2>Documento: {p.documento}</h2>
                        <h2>Nombre: {p.nombre}</h2>
                    </div>
                )}
            </div>
            
        </div>
    )

}

export default Personas;