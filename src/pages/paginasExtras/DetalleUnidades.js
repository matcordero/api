import React from 'react';
import {useEffect, useState} from 'react';
import { useParams, useNavigate} from "react-router-dom";


function DetalleUnidadAdmin(){
    let { id } = useParams();
    const [unidades,setUnidades] = useState([])

    useEffect(()=>{
        fetch('http://LocalHost:8080/TPOAPI/Controller/GetUnidadByID/'+id, {
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
        .then(response => setUnidades(response))
        // eslint-disable-next-line
       }, []);

    

    return (
        <div className='Container-Detalle'>
            {unidades.map((p) => 
            <div>
                <h1>Detalle de la Unidad Funcional {p.id}</h1>
                <hr></hr>
                
                <div className='Datos-Detalle'>
                    <h2>Informacion de la unidad:</h2>
                    <p>Edificio N°<span>{p.edificio.codigo}</span>: <span>{p.edificio.nombre}</span></p>
                    <p>Piso: <span>{p.piso}</span></p>
                    <p>Numero: <span>{p.numero}</span></p>
                    <p>Habitado: <span>{p.habitado.toString()}</span></p>
                </div>
                <hr></hr>
                <div className='duenios-inquilinos'>
                    <div className='Duenios-Grupo Datos-Detalle'>
                            <h2>Dueñios de la Unidad:</h2>
                            <div className='Duenios-Detalles Datos-Detalle'>
                                {p.duenios.map(x => {return <div>
                                    <h3>Nombre: <span>{x.nombre}</span></h3>
                                    <h3>Dni: <span>{x.documento}</span></h3>
                                    </div>
                                })}
                            </div>
                    </div>
                    <hr></hr>
                    <div className='Inquilinos-Grupo Datos-Detalle'>
                        <h2>Inquilinos de la Unidad:</h2>
                        <div className='Inquilinos-Detalles Datos-Detalle' >
                            {p.inquilinos.map(x => {return (<div>
                                <h3>Nombre: <span>{x.nombre}</span></h3>
                                <h3>Dni: <span>{x.documento}</span></h3>
                                </div>)
                            })}
                        </div>
                    </div>
                </div>
                <hr></hr>
                <Reclamos id={p.id}/>
            </div>
            )}
        </div>
    )
}

function Reclamos(props){
    const [reclamos,setReclamos] = useState([])
    useEffect(()=>{
        var formData = new FormData();

        formData.append("usuarioEmpleado",sessionStorage.getItem("usuario"))
        formData.append("contraseñaEmpleado",sessionStorage.getItem("contraseña"))
        fetch('http://LocalHost:8080/TPOAPI/Controller/GetReclamosByUnidad/'+props.id, {
            method: 'POST',
            mode: "cors",
            body: formData
            })
        .then(function(response) {
            if (!response.ok) {
                console.log(response.status)
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
        .then(response => setReclamos(response)) 
        // eslint-disable-next-line
       }, []);
       const navigate = useNavigate();
       const sayHello2 = (id) => {
        navigate(`/MenuAdminitrador/AdministrarUnidad/DetalleReclamo/${id}`)
       }

       return (
        <div>
            <h1>Reclamos de la Unidad:</h1>
            
            <div className='Inquilinos-Detalles Datos-Detalle Container-Unidades' >
                {reclamos.map(x => {return(
                    <div>
                        <h3>Numero Reclamo: <span>{x.numero}</span></h3>
                        <h3>Ubicacion: <span>{x.ubicacion}</span></h3>
                        <h3>Descripcion: <span>{x.descripcion}</span></h3>
                        <h3>Estado: <span>{x.estado}</span></h3>
                        <button onClick={() => sayHello2(x.numero)}>Detalle Reclamo</button>
                    </div>
                )})}
            </div>
        </div>
       )
}


export default DetalleUnidadAdmin