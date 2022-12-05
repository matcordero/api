import { useState } from 'react';
import FormInput from "./components/FormInput";
import {
    useNavigate
  } from "react-router-dom";

const AgregarEdificio = () => {
    const navigate = useNavigate();
    const[values, setValues]= useState({
        direccion:"",
        nombre:"",
    });
  
    const inputs=[
    {
        id:1,
        name:"nombre",
        type:"text",
        placeholder:"Ingrese el nombre de Edificio.",
        errorMessage:"El nombre de usuario deberia estar entre 3 a 16 caracteres y no deberia incluir ningun caracter especial!",
        label:"Nombre del Edificio",
        pattern: "^[A-Za-z0-9]{3,16}$",
        required:true
    },
    {
        id:2,
        name:"direccion",
        type:"text",
        placeholder:"Ingrese la Direccion",
        errorMessage:"Deberia ser un documento valido!",
        label:"Direccion",
        required:true,
    },
    

    ];
  
    const handleSubmit = (e) => {
        e.preventDefault();
        var formData = new FormData();

        formData.append("nombre",values.nombre)
        formData.append("direccion",values.direccion) 
        formData.append("usuarioEmpleado",sessionStorage.getItem("usuario"))
        formData.append("contraseñaEmpleado",sessionStorage.getItem("contraseña"))
        

        fetch('http://localhost:8080/TPOAPI/Controller/PostCrearEdificio', {
        method: 'POST',
        body: formData,
        mode: "cors"
    })
    .then(function(response) {
        if (!response.ok) {
            throw new Error(response.status);
        }
        alert("Edificio Agregado");
        navigate("/MenuAdminitrador");})
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
                <h1 className='h1-RegistrarPersona' >Agregar Edificio</h1>
                {inputs.map((input)=> (
                    <FormInput key={input.id} {...input} value={values[input.name]} onChange={onChange}/>
                ))}
                <button className='button-RegistrarPersona'>Confirmar</button>
            </form> 
        </div>);

};

export default AgregarEdificio;