import { useState } from 'react';
import FormInput from "./components/FormInput";
import {
    useNavigate
  } from "react-router-dom";

const RegistrarPersona = () => {
    const navigate = useNavigate();
    const[values, setValues]= useState({
        personname:"",
        documento:"",
    });
  
    const inputs=[
    {
    id:1,
    name:"personname",
    type:"text",
    placeholder:"Ingrese su nombre completo.",
    errorMessage:"El nombre de persona deberia estar entre 3 a 16 caracteres y no deberia incluir ningun caracter especial!",
    label:"Nombre de persona",
    pattern: "^[A-Za-z0-9]{3,16}$",
    required:true
    },
    {
    id:2,
    name:"documento",
    type:"text",
    placeholder:"Ingrese su documento",
    errorMessage:"Deberia ser un documento valido!",
    label:"Documento",
    required:true,
    },];
  
    const handleSubmit= (e)=> {
        e.preventDefault();
        var formData = new FormData();

        formData.append("documento",values.documento)
        formData.append("nombre",values.personname)
        formData.append("usuarioEmpleado",sessionStorage.getItem("usuario"))
        formData.append("contraseñaEmpleado",sessionStorage.getItem("contraseña"))
    

        fetch('http://localhost:8080/TPOAPI/Controller/PostCrearPersona', {
            method: 'POST',
            body: formData,
            mode: "cors"
        })
        .then(function(response) {
            if (!response.ok) {
                throw new Error(response.status);
            }
            alert("Persona Registrada");
            navigate("/MenuHabitante");})
        .catch(error => {
            // eslint-disable-next-line
            if(error == "TypeError: Failed to fetch"){alert("Fallo de Conexion")}
            // eslint-disable-next-line
            else if(error == "Error: 400"){alert("El empleado no posee los permisos necesarios!")}
            else{alert("Problema Desconocido")}
        })
    };
    const onChange = (e) => {
        setValues({...values,[e.target.name]: e.target.value });
    };
    return( 
        <div className="app"> 
            <form className="form-RegistrarPersona" onSubmit={handleSubmit}>
                <h1 className='h1-RegistrarPersona' >Registrar Persona</h1>
                {inputs.map((input)=> (
                    <FormInput key={input.id} {...input} value={values[input.name]} onChange={onChange}/>
                ))}
                <button className='button-RegistrarPersona' >Confirmar</button>
            </form> 
        </div>);

};

export default RegistrarPersona ;