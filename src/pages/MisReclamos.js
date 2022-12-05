import React from "react"
import {useNavigate} from 'react-router-dom'
import './Reclamos'
import './estilos.css'

const MisReclamosRealizados =() => {  
    const [reclamos,setReclamo]= React.useState([])
    const navigate = useNavigate();
    React.useEffect(() => { obtenerDatos()} ,[])

    const obtenerDatos = async()=> {
        var formData = new FormData();
        formData.append("usuarioEmpleado",sessionStorage.getItem("usuario"))
        formData.append("contraseñaEmpleado",sessionStorage.getItem("contraseña"))

        const data=await fetch('http://localhost:8080/TPOAPI/Controller/GetReclamosByPersona/'+sessionStorage.getItem("documento"), {
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
                else if(error == "Error: 400"){alert("Usuario o Contraseña Invalidos")}
                else{alert("Problema Desconocido")}
            })
            const users= await data
            setReclamo(users)
    }

        const sayHello = (id) => {
            navigate(`/MenuHabitante/DetalleReclamoImagen/${id}`)
        }

        return(
        <div className='Inquilinos-Detalles lista-reclamos Container-Unidades Container-Detalle' >
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
        )
}
export default MisReclamosRealizados