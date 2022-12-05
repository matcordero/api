import './App.css';
import React from 'react';
import Login from './pages/login'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import MenuAdministrador from './pages/MenuAdministrador';
import MenuHabitante from './pages/MenuHabitante';
import UnidadesFuncionalesHabitante from './pages/UnidadesFuncionales';
import DetalleUnidad from "./pages/DetalleUnidad"
import RegistrarPersona from './pages/RegistrarPersona';
import RegistrarUsuario from './pages/RegistrarUsuario';
import MisReclamos from './pages/MisReclamos';
import EdificioHabitante from './pages/Edificios';
import DetalleEdificio from './pages/DetalleEdificio';
import DetalleReclamo from './pages/DetalleReclamo';
import AdministrarUsuario from './pages/AdministrarUsuario';
import AdministrarUnidad from './pages/AdministrarUnidad';
import DetalleReclamoImagen from './pages/DetalleReclamoImagen';
import AgregarPermiso from './pages/paginasExtras/AgregarPermiso';
import EliminarPermiso from './pages/paginasExtras/EliminarPermiso';
import Personas from './pages/paginasExtras/personas';
import Usuarios from './pages/paginasExtras/usuarios';
import AgregarEdificio from './pages/paginasExtras/AgregarEdificio';
import CambiarEstado from './pages/paginasExtras/CambiarEstadoReclamo';
import HabitarUnidad from './pages/paginasExtras/HabitarUnidad';
import LiberarUnidades from './pages/paginasExtras/LiberarUnidades';
import AgregarInquilinoUnidad from './pages/paginasExtras/AgregarInquilino';
import AlquilarUnidad from './pages/paginasExtras/AlquilarUnidad';
import AgregarDuenioInquilino from './pages/paginasExtras/AgregarDueñioInquilino';
import TransferirUnidad from './pages/paginasExtras/TransferirUnidad';
import CrearUnidad from './pages/paginasExtras/CrearUnidad';
import AllUnidades from './pages/paginasExtras/MostrarUnidades';
import DetalleUnidadAdmin from './pages/paginasExtras/DetalleUnidades';
import AllEdificios from './pages/paginasExtras/MostrarEdificios';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route path="MenuAdminitrador" element={<MenuAdministrador />}>
          <Route path='AgregarEdificio' element={<AgregarEdificio />}/>
          <Route path='CambiarEstado' element={<CambiarEstado />}/>
          
          <Route path='AdministrarUsuario' element={<AdministrarUsuario />}>
            
            <Route path='RegistrarUsuario' element={<RegistrarUsuario/>}/>
            <Route path='AgregarPermiso' element={<AgregarPermiso/>}/>
            <Route path='EliminarPermiso' element={<EliminarPermiso/>}/>
            <Route path='Personas' element={<Personas/>}/>
            <Route path='Usuarios' element={<Usuarios/>}/>
          </Route>
          <Route path='AdministrarUnidad' element={<AdministrarUnidad />}>
            <Route path="DetalleUnidadAdmin/:id" element={<DetalleUnidadAdmin/>}/>
            <Route path="DetalleReclamo/:id" element={<DetalleReclamo/>}/>
            <Route path='HabitarUnidad' element={<HabitarUnidad/>} />
            <Route path='LiberarUnidades' element={<LiberarUnidades/>} />
            <Route path="AgregarInquilino" element={<AgregarInquilinoUnidad/>}/>
            <Route path="AlquilarUnidad" element={<AlquilarUnidad/>}/>
            <Route path="AgregarDuenioInquilino" element={<AgregarDuenioInquilino/>}/>
            <Route path="TransferirUnidad" element={<TransferirUnidad/>}/>
            <Route path="CrearUnidad" element={<CrearUnidad/>}/>
            <Route path="MostrarUnidades" element={<AllUnidades/>}/>
            <Route path="MostrarEdificios" element={<AllEdificios/>}/>
          </Route>
          <Route path='RegistrarPersona' element={<RegistrarPersona/>}/>
        </Route>
        <Route path="MenuHabitante" element={<MenuHabitante />}>
            <Route path='UnidadesFuncionales' element={<UnidadesFuncionalesHabitante/>}/>
            <Route path='EdificiosHabitantes' element={<EdificioHabitante/>} />
            <Route path="DetalleUnidad/:id" element={<DetalleUnidad/>}/>
            <Route path="DetalleEdificio/:id" element={<DetalleEdificio/>}/>
            <Route path="DetalleReclamo/:id" element={<DetalleReclamo/>}/>
            <Route path="DetalleReclamoImagen/:id" element={<DetalleReclamoImagen/>}/>
            <Route path="MisReclamos" element={<MisReclamos/>} />
        </Route>
      </Routes>
  </Router>
  );
}


export default App;
