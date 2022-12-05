import React from "react";
import {Link} from 'react-router-dom'

import './estilos.css';

const ReclamosEdificio =() => {

    const [reclamos,setReclamo]= React.useState([])

    React.useEffect(() => { obtenerDatos()} ,[])

    const obtenerDatos= async()=> {
        const data=await fetch('https://jsonplaceholder.typicode.com/users')
        const users= await data.json()
        setReclamo(users)

    }
    return (
        <div>
            <h1 className="textito"> Reclamos edificio</h1>

<ul >
    {
        reclamos.map(item => (
            <div className="mb-3 border rounded p-3" key={item.id}>
                            <div className="d flex justify content between mb-1">
                            <Link to={`/ReclamosEdificio/${item.id}`}>
                                <div className=" titulo fw-bold">N° reclamo: {item.id}  - {item.name} </div>
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

export default ReclamosEdificio;