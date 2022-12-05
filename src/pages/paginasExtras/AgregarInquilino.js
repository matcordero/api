import { useState } from 'react';
import FormInput from "./components/FormInput";
import {
    useNavigate
  } from "react-router-dom";

const AgregarInquilinoUnidad = () => {
    const navigate = useNavigate();
    const[values, setValues]= useState({
        codigoEdificio:"",
        piso:"",
        numeroUnidad:"",
        documento:""
      });
      
    const inputs=[
    {
      id:1,
      name:"codigoEdificio",
      type:"text",
      placeholder:"Ingrese su código de edificio.",
      errorMessage:"El edificio no existe",
      label:"Edificio",
      required:true
    },
    {
      id:2,
      name:"piso",
      type:"int",
      placeholder:"Ingrese el Piso",
      errorMessage:"El piso no existe para el edificio elegido",
      label:"Piso",
      required:true,
    },
    {
      id:3,
      name:"numeroUnidad",
      type:"int",
      placeholder:"Ingrese el Numero de Unidad",
      label:"Numero de Unidad",
      required:true
    },
    {
      id:4,
      name:"documento",
      type:"int",
      placeholder:"Ingrese el Documento del Inquilino",
      label:"Inquilino",
      required:true
    },
    
    ];
  
    const handleSubmit = (e) => {
        e.preventDefault();
        var formData = new FormData();
 
        formData.append("usuarioEmpleado",sessionStorage.getItem("usuario"))
        formData.append("contraseñaEmpleado",sessionStorage.getItem("contraseña"))
        

        fetch('http://localhost:8080/TPOAPI/Controller/PutAgregarInquilinoUnidad'+"/"+values.codigoEdificio+"/"+values.piso+"/"+values.numeroUnidad+"/"+values.documento, {
        method: 'PUT',
        body: formData,
        mode: "cors"
    })
    .then(function(response) {
        if (!response.ok) {
            throw new Error(response.status);
        }
        alert("Agregar Inquilino Completado");
        navigate("/MenuAdminitrador/AdministrarUnidad");})
    .catch(error => {
        // eslint-disable-next-line
        if(error == "TypeError: Failed to fetch"){alert("Fallo de Conexion")}
        // eslint-disable-next-line
        else if(error == "Error: 400"){alert("Persona o Documento invalidos!")}
        else{alert("Problema Desconocido")}
    })
    };
    const onChange = (e) => {
        setValues({...values,[e.target.name]: e.target.value });
    };
    return( 
        <div className="app"> 
            <form className='form-RegistrarPersona' onSubmit={handleSubmit}>
                <h1 className='h1-RegistrarPersona' >Agregar Inquilino Unidad</h1>
                {inputs.map((input)=> (
                    <FormInput key={input.id} {...input} value={values[input.name]} onChange={onChange}/>
                ))}
                <button className='button-RegistrarPersona'>Confirmar</button>
            </form> 
        </div>);

};

export default AgregarInquilinoUnidad;