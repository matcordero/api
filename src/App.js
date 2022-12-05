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
import RegistrarReclamo from './pages/RegistrarReclamo';
import EdificioHabitante from './pages/Edificios';
import DetalleEdificio from './pages/DetalleEdificio';
import DetalleReclamo from './pages/DetalleReclamo';
import AdministrarUsuario from './pages/AdministrarUsuario';
import AdministrarUnidad from './pages/AdministrarUnidad';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="MenuAdminitrador" element={<MenuAdministrador />}>
          <Route path='AdministrarUsuario' element={<AdministrarUsuario />}>
            <Route path='RegistrarUsuario' element={<RegistrarUsuario/>}/>
          </Route>
          <Route path='AdministrarUnidad' element={<AdministrarUnidad />}>

          </Route>
          <Route path='RegistrarPersona' element={<RegistrarPersona/>}/>
        </Route>
        <Route path="MenuHabitante" element={<MenuHabitante />}>
            <Route path="RegistrarReclamo" element={<RegistrarReclamo/>}/>
            <Route path='UnidadesFuncionales' element={<UnidadesFuncionalesHabitante/>}/>
            <Route path='EdificiosHabitantes' element={<EdificioHabitante/>} />
            <Route path="DetalleUnidad/:id" element={<DetalleUnidad/>}/>
            <Route path="DetalleEdificio/:id" element={<DetalleEdificio/>}/>
            <Route path="DetalleReclamo/:id" element={<DetalleReclamo/>}/>
            <Route path="MisReclamos" element={<MisReclamos/>} />
        </Route>
      </Routes>
  </Router>
  );
}


export default App;
