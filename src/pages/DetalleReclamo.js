import React from 'react';
import {useEffect, useState} from 'react';
import { useParams} from "react-router-dom";
import "./DetalleUnidad.css"

function DetalleReclamo(){
    let { id } = useParams();
    const [reclamo,setReclamo] = useState([])

    useEffect(()=>{
        fetch('http://LocalHost:8080/TPOAPI/Controller/GetReclamo/'+id, {
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
        .then(response => setReclamo(response))
        // eslint-disable-next-line
       }, []);

    

    return (
        <div className='Container-Detalle'>
            {reclamo.map((p) => 
            <div>
                <h1>Detalle del Reclamo N°<span>{p.numero}</span></h1>
                <hr></hr>
                <h2>Usuario Reclamante: <span>{p.usuario.nombre}</span></h2>
                <hr></hr>
                <h2>Ubicacion: <span>{p.ubicacion}</span></h2>
                <hr></hr>
                <h2>Descripcion: <span>{p.descripcion}</span></h2>
                <hr></hr>
                <h2>Estado: <span>{p.estado}</span></h2>
                <hr></hr>
                <h1>Imagenes del Reclamo:</h1>
                <div className='Inquilinos-Detalles Datos-Detalle Imagen' >
                {p.imagenes.map(x => {return(
                    <div>
                        <img src={x.direccion}></img>
                    </div>
                )})}
            </div>
            </div>
            )}
        </div>
    )
}


export default DetalleReclamo