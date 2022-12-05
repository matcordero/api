import React from 'react';
import { useEffect, useState} from 'react';
import {
    useNavigate
  } from "react-router-dom";

function UnidadesFuncionalesHabitante(){
    const [unidadesDuenios,setUnidadesDuenios] = useState([])
    // eslint-disable-next-line
    const [unidadesInquilinos,setUnidadesInquilinos] = useState([])
    const navigate = useNavigate();
    useEffect(()=>{
        fetch('http://LocalHost:8080/TPOAPI/Controller/GetUnidadByDuenios/'+sessionStorage.getItem("documento"), {
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
        navigate(`/MenuHabitante/DetalleUnidad/${id}`)
    }
    return (
        <div>
            
            <div className='main-Container-unidades'>
                <h1>Unidades en la que sos Dueñio</h1>
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
                <h1>Unidades en la que sos Inquilino</h1>
                <hr></hr>
                <UnidadesInquilinosMostrar/>
            </div>
            
        </div>
    )

}
function UnidadesInquilinosMostrar(){
    const [unidadesInquilinos,setUnidadesInquilinos] = useState([])
    const navigate = useNavigate();
    useEffect(()=>{
        fetch('http://LocalHost:8080/TPOAPI/Controller/GetUnidadByInquilino/'+sessionStorage.getItem("documento"), {
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
        .then(setUnidadesInquilinos)
       }, []);

    const sayHello = (id) => {
        navigate(`/MenuHabitante/DetalleUnidad/${id}`)
    }
    return (
        <div>
            <div className='Container-Unidades'>
                    {unidadesInquilinos.map((p) => 
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
    )

}

export default UnidadesFuncionalesHabitante;