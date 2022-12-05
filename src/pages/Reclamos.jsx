import React from "react";
import {useParams} from 'react-router-dom'

const Reclamos = () => {

    const{id}= useParams()
    console.log(id)

    const [reclamos,setReclamo]= React.useState([])

    React.useEffect(() => { 
        const obtenerDatos= async()=> {
            const data=await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            const users= await data.json()
            setReclamo(users)
        }
        
        obtenerDatos()} ,[id])
        


      //const loadImage= imageName => (require(`https://LocalHost:8080/TPOAPI/Controller/GetImagenReclamo/${id}`).default);
      //<img src={loadImage("image.jpg")} alt="img"/>
    
    
    return(

        <div className="mb-3 border rounded p-3">

            <h3 className="id"> Id reclamo: {reclamos.id}    </h3>
            <p>                               </p>
            <h4 className="documento">Documento: {reclamos.username} </h4>
            <p>                               </p>
            <h5 className="ubicacion">Edificio: {reclamos.website} - {reclamos.email}  </h5>
            <p>                                </p>
            <h6 className="descripcion">Descripción: {reclamos.phone}</h6>
            <p>                                </p>
            <h7 className="imagen">Imagen:  </h7>
            <p>                             
                
            </p>
            <div >
             
                              
            </div>
             
           



        </div>
    )
}

export default Reclamos;