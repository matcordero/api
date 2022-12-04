import React from 'react';
import { useState } from 'react';

function UnidadesFuncionalesHabitante(){
    const [unidades,setUnidades] = useState([])

    fetch('http://localhost:8080/TPOAPI/Controller/Login', {
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
        .then(response => {
            if (response!= null){ 
                sessionStorage.setItem("usuario",response.usuario)
                sessionStorage.setItem("contraseña",response.contraseña)
                sessionStorage.setItem("documento",response.persona.documento)
                // eslint-disable-next-line
                if(response.permisos.length > 1 || response.permisos[0].permiso != "habitante" ){
                    navigate("MenuAdminitrador")
                }
                else{
                    navigate("MenuHabitante")
                }
            }
        });

}