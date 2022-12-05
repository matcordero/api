import React from 'react';
import { useEffect, useState} from 'react';
import {
    useNavigate
  } from "react-router-dom";

function AllUnidades(){
    const [unidadesDuenios,setUnidadesDuenios] = useState([])
    const navigate = useNavigate();
    useEffect(()=>{
        fetch('http://LocalHost:8080/TPOAPI/Controller/GetAllUnidades', {
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
        .then(setUnidadesDuenios)
       }, []);

    const sayHello = (id) => {
        navigate(`/MenuAdminitrador/AdministrarUnidad/DetalleUnidadAdmin/${id}`)
    }
    return (
        <div>
            
            <div className='main-Container-unidades'>
                <h1>Todas las Unidades Funcionales</h1>
                <hr></hr>
                <div className='Container-Unidades'>
                    {unidadesDuenios.map((p) => 
                        <div className='Container-elements'>
                            <h2>Identificador: {p.id}</h2>
                            <h2>Numero Piso: {p.piso}</h2>
                            <h2>Numero Departamento: {p.numero}</h2>
                            <h2>Habitado: {p.habitado.toString()}</h2>
                            <button onClick={() => sayHello(p.id)}>Ver Detalle</button>
                        </div>
                    )}
                </div>
            </div>
            
        </div>
    )
}
export default AllUnidades