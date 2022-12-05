import { useState } from 'react';
import FormInput from "./components/FormInput";


const RegistrarReclamo = () => {
  const[values, setValues]= useState({
    edificio:"",
    piso:"",
    numeroUnidad:"",
    descripcion:"",
    fotos:"",
  });
  
const inputs=[
{
  id:1,
  name:"numero",
  type:"text",
  placeholder:"Ingresar Numero de Reclamo.",
  errorMessage:"El Reclamo no existe",
  label:"Ingresar Reclamo",
  required:true
}


];
  

  const handleSubmit= (e)=> {
      e.preventDefault();
      var formData = new FormData();

    formData.append("usuario",sessionStorage.getItem("usuario"))
    formData.append("contraseña",sessionStorage.getItem("contraseña"))
    formData.append("edificio",values.edificio)
    formData.append("piso",values.piso)
    formData.append("unidadFuncional",values.numeroUnidad)
    formData.append("fotos",image)


    fetch('http://localhost:8080/TPOAPI/Controller/PostCrearReclamo', {
    method: 'POST',
    body: formData,
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
        else if(error == "Error: 400"){alert("El empleado no posee los permisos necesarios!")}
        else{alert("Problema Desconocido")}
    })
    .then(response => {
        if (response!= null){ 
            // eslint-disable-next-line

        }
    });

    
  };

  const onChange = (e) => {
    setValues({...values,[e.target.name]: e.target.value });
  };
  
  /* para cargar imagen */
  const [image, setImage] = useState('')
  function handleImage(e) {
    console.log(e.target.files)
    setImage(e.target.files[0])
  }

  return( <div className="app"> 
    <form onSubmit={handleSubmit} className="form-RegistrarPersona">
    <h1 className='h1-RegistrarPersona'>Agregar Imagen al Reclamo</h1>
      {inputs.map((input)=> (
      <FormInput key={input.id} {...input} value={values[input.name]} 
      onChange={onChange}
      />
      ))}
      <label className='label-RegistrarPersona'>Imágen</label>
      <input type="file" name="file" onChange={handleImage} className="input-RegistrarPersona"/>
      <button className='button-RegistrarPersona'>Crear</button>
    </form> 
  </div>);

};


export default RegistrarReclamo;