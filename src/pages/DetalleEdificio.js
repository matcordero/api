import React from 'react';
import {useEffect, useState} from 'react';
import { useParams} from "react-router-dom";
import "./DetalleUnidad.css"
import {
    useNavigate
  } from "react-router-dom";

function DetalleEdificio(){
    let { id } = useParams();
    const [edificio,setEdificios] = useState([])

    useEffect(()=>{
        fetch('http://LocalHost:8080/TPOAPI/Controller/GetEdificioByID/'+id, {
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
        .then(response => setEdificios(response))
        // eslint-disable-next-line
       }, []);

    

    return (
        <div className='Container-Detalle'>
            {edificio.map((p) => 
            <div>
                <h1>Detalle del Edificio N°<span>{p.codigo}</span>: <span>{p.nombre}</span></h1>
                <hr></hr>
                <h2>Direccion: <span>{p.direccion}</span></h2>
                <hr></hr>
                <Reclamos codigo={p.codigo}/>
            </div>
            )}
        </div>
    )
}

function Reclamos(props){
    const navigate = useNavigate();
    const [reclamos,setReclamos] = useState([])
    useEffect(()=>{
        var formData = new FormData();
        formData.append("usuarioEmpleado",sessionStorage.getItem("usuario"))
        formData.append("contraseñaEmpleado",sessionStorage.getItem("contraseña"))
        fetch('http://LocalHost:8080/TPOAPI/Controller/ReclamosByEdificio/'+props.codigo, {
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
    const sayHello = (id) => {
        navigate(`/MenuHabitante/DetalleReclamo/${id}`)
    }

       return (
        <div>
            <h1>Reclamos del Edicio:</h1>
            <div className='Inquilinos-Detalles Datos-Detalle Container-Unidades' >
                {reclamos.map(x => {return(
                    <div>
                        <h3>Numero Reclamo: <span>{x.numero}</span></h3>
                        <h3>Ubicacion: <span>{x.ubicacion}</span></h3>
                        <h3>Descripcion: <span>{x.descripcion}</span></h3>
                        <h3>Estado: <span>{x.estado}</span></h3>
                        <button onClick={() => sayHello(x.numero)}>Detalle Reclamo</button>
                    </div>
                )})}
            </div>
            <GenerarReclamo codigo={props.codigo}/>
        </div>
       )
}
function GenerarReclamo(props){
    const [reclamo,setReclamo] = useState({ubicacion:"",descripcion:""})
    const handleSubmit= ()=> {
        var formData = new FormData();
        formData.append("codigo",props.codigo)
        formData.append("documento",sessionStorage.getItem("documento"))
        formData.append("descripcion",reclamo.descripcion)
        formData.append("ubicacion",reclamo.ubicacion)
        formData.append("usuarioEmpleado",sessionStorage.getItem("usuario"))
        formData.append("contraseñaEmpleado",sessionStorage.getItem("contraseña"))

        
        fetch('http://LocalHost:8080/TPOAPI/Controller/PostAgregarReclamoEdificio', {
            method: 'POST',
            mode: "cors",
            body: formData
            })
        .then(function(response) {
            if (!response.ok) {
                throw new Error(response.status);
            }
            alert("Reclamo Generado")})
        .catch(error => {
            // eslint-disable-next-line
            // eslint-disable-next-line
            if(error == "Error: 400"){alert("Habitante no existe")}
            else{alert("Problema Desconocido")}
        })
    }

        const handleChangeDescripcion = (e) => {
            const valor = e.target.value;
            setReclamo(previouState =>{return {...previouState,descripcion:valor}})
        }
        const handleChangeUbicacion = (e) => {
            const valor = e.target.value
            setReclamo(previouState =>{return {...previouState,ubicacion:valor}})
        }

       return (
        <div>
            <h1>Generar Reclamo</h1>
            <form onSubmit={handleSubmit}>
                <div className='ubicacion'>
                    <label>Ubicacion</label>
                    <input placeholder="Ingresar Ubicacion" type="text" value={reclamo.ubicacion} onChange={handleChangeUbicacion}></input>
                </div>
                <div className='descripcion'>
                    <label>Descripcion</label>
                    <input placeholder="Ingresar Descripcion" type="text" value={reclamo.descripcion} onChange={handleChangeDescripcion}></input>   
                </div>
                <div className="button-reclamo">
                    <button type="submit">Generar Reclamo</button>
                </div>
            </form>
        </div>
       )
}

export default DetalleEdificio