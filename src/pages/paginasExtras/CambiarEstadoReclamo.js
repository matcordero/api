import { useState } from 'react';
import FormInput from "./components/FormInput";
import {
    useNavigate
  } from "react-router-dom";

const CambiarEstado = () => {
    const navigate = useNavigate();
    const[values, setValues]= useState({
        estado:"",
        reclamo:"",
    });
  
    const inputs=[
    {
        id:1,
        name:"reclamo",
        type:"number",
        placeholder:"Ingrese el id del Reclamo.",
        errorMessage:"El nombre de usuario deberia estar entre 3 a 16 caracteres y no deberia incluir ningun caracter especial!",
        label:"ID Reclamo",
        required:true
    },
    {
        id:2,
        name:"estado",
        type:"text",
        placeholder:"Ingrese el Nuevo estado",
        errorMessage:"Deberia ser un documento valido!",
        label:"Estado",
        required:true,
    },
    

    ];
  
    const handleSubmit = (e) => {
        e.preventDefault();
        var formData = new FormData();

        formData.append("usuarioEmpleado",sessionStorage.getItem("usuario"))
        formData.append("contraseñaEmpleado",sessionStorage.getItem("contraseña"))
        

        fetch('http://localhost:8080/TPOAPI/Controller/PutCambiarEstado'+"/"+values.reclamo+"/"+values.estado, {
        method: 'PUT',
        body: formData,
        mode: "cors"
    })
    .then(function(response) {
        if (!response.ok) {
            throw new Error(response.status);
        }
        alert("Estado Cambiado");
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
                <h1 className='h1-RegistrarPersona' >Cambiar Estado</h1>
                {inputs.map((input)=> (
                    <FormInput key={input.id} {...input} value={values[input.name]} onChange={onChange}/>
                ))}
                <button onClick={() =>{alert("nuevo, abierto, enProceso, desestimado, anulado, terminado ")}} className='button-RegistrarPersona'>Ver Estados</button>
                <button className='button-RegistrarPersona'>Confirmar</button>
            </form> 
        </div>);

};

export default CambiarEstado;