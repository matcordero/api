import { useState } from 'react';
import FormInput from "./components/FormInput";
import {
    useNavigate
  } from "react-router-dom";

const RegistrarUsuario = () => {
    const navigate = useNavigate();
    const[values, setValues]= useState({
        documento:"",
        username:"",
        password:"",
        confirmPassword:"",

    });
  
    const inputs=[
    {
        id:1,
        name:"username",
        type:"text",
        placeholder:"Ingrese su nombre de usuario.",
        errorMessage:"El nombre de usuario deberia estar entre 3 a 16 caracteres y no deberia incluir ningun caracter especial!",
        label:"Nombre de usuario",
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
    },
    {
        id:3,
        name:"password",
        type:"password",
        errorMessage:"La contraseña deberia estar entre 8  a 20 caracteres e incluir al menos 1 letra, 1 numero y 1 caracter especial",
        placeholder:"Ingrese una contraseña",
        label:"Contraseña",
        pattern: '^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8-20}$',
        required:true
    },
    {
        id:4,
        name:"confirmPassword",
        type:"password",
        placeholder:"Repetir contraseña",
        errorMessage:"Las contrasenas no coinciden!",
        label:"Confirmar Contraseña",
        pattern: values.password,
        required:true
    },

    ];
  
    const handleSubmit = (e) => {
        e.preventDefault();
        var formData = new FormData();

        formData.append("documento",values.documento)
        formData.append("usuario",values.username)
        formData.append("contraseña",values.password) 
        formData.append("usuarioEmpleado",sessionStorage.getItem("usuario"))
        formData.append("contraseñaEmpleado",sessionStorage.getItem("contraseña"))
        

        fetch('http://localhost:8080/TPOAPI/Controller/PostRegistrarUsuario', {
        method: 'POST',
        body: formData,
        mode: "cors"
    })
    .then(function(response) {
        if (!response.ok) {
            throw new Error(response.status);
        }
        alert("Usuario Registrada");
        navigate("/MenuHabitante");})
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
                <h1 className='h1-RegistrarPersona' >Registrarse</h1>
                {inputs.map((input)=> (
                    <FormInput key={input.id} {...input} value={values[input.name]} onChange={onChange}/>
                ))}
                <button className='button-RegistrarPersona'>Confirmar</button>
            </form> 
        </div>);

};

export default RegistrarUsuario;