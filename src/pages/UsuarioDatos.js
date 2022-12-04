import React from 'react';
import {
    useLocation
  } from "react-router-dom";
function Usuario(){
    const {state} = useLocation();
    const { datos } = state; // Read values passed on state

    // eslint-disable-next-line
    if(datos.permisos.length > 1 || datos.permisos[0].permiso != "habitante" ){
        console.log("Tiene Permisos")
    }
    else{
        console.log("No Tiene Permisos")
    }



    return(
        <div>
            <h1>{datos.usuario}</h1>
            {datos.permisos.map((p) => <h2>{p.permiso}</h2>)}
        </div>
    )
}

export default Usuario