import React from "react"
import {Link} from 'react-router-dom'
import './Reclamos'
import './estilos.css'

const MisReclamos =() => {

    const [reclamos,setReclamo]= React.useState([])

    React.useEffect(() => { obtenerDatos()} ,[])

    const obtenerDatos= async()=> {
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

    return (
    
        <div>
            <h1 className="textito"> Mis reclamos</h1>

            <ul >
                {
                    reclamos.map(item => (
                        <div className="mb-3 border rounded p-3" key={item.numero}>
                            <div className="d flex justify content between mb-1">
                            <Link to={`/MisReclamos/${item.numero}`}>
                                <div className=" titulo fw-bold">N° reclamo: {item.numero}  - {item.descripcion} </div>
                            </Link>
                            </div>

                        </div>
                        
                    )

                    )
                }
            </ul>

        </div>

    )

}

export default MisReclamos;