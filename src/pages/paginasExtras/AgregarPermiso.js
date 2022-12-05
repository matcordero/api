import { useState } from 'react';
import FormInput from "./components/FormInput";
import {
    useNavigate
  } from "react-router-dom";

const AgregarPermiso = () => {
    const navigate = useNavigate();
    const[values, setValues]= useState({
        permiso:"",
        username:"",
    });
  
    const inputs=[
    {
        id:1,
        name:"username",
        type:"text",
        placeholder:"Ingrese el nombre de usuario.",
        errorMessage:"El nombre de usuario deberia estar entre 3 a 16 caracteres y no deberia incluir ningun caracter especial!",
        label:"Nombre de usuario",
        pattern: "^[A-Za-z0-9]{3,16}$",
        required:true
    },
    {
        id:2,
        name:"permiso",
        type:"text",
        placeholder:"Ingrese el Permiso agregar",
        errorMessage:"Deberia ser un documento valido!",
        label:"Permiso",
        required:true,
    },
    

    ];
  
    const handleSubmit = (e) => {
        e.preventDefault();
        var formData = new FormData();

        formData.append("usuario",values.username)
        formData.append("permiso",values.permiso) 
        formData.append("usuarioEmpleado",sessionStorage.getItem("usuario"))
        formData.append("contraseñaEmpleado",sessionStorage.getItem("contraseña"))
        

        fetch('http://localhost:8080/TPOAPI/Controller/PutAgregarPermiso', {
        method: 'PUT',
        body: formData,
        mode: "cors"
    })
    .then(function(response) {
        if (!response.ok) {
            throw new Error(response.status);
        }
        alert("Permiso Agregado");
        navigate("/MenuAdminitrador/AdministrarUsuario");})
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
                <h1 className='h1-RegistrarPersona' >Agregar Permiso</h1>
                {inputs.map((input)=> (
                    <FormInput key={input.id} {...input} value={values[input.name]} onChange={onChange}/>
                ))}
                <button onClick={() =>{alert("habitante, administrador, gestionPersonas, gestionReclamos, gestionEdificios, gestionUnidades, gestionRegistros")}} className='button-RegistrarPersona'>Ver Permisos</button>
                <button className='button-RegistrarPersona'>Confirmar</button>
            </form> 
        </div>);

};

export default AgregarPermiso;