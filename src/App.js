import './App.css';
import React from 'react';
import Login from './pages/login'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import UsuarioDatos from "./pages/UsuarioDatos"
import MenuAdministrador from './pages/MenuAdministrador';
import MenuHabitante from './pages/MenuHabitante';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="UsuarioDatos" element={<UsuarioDatos />}/>
        <Route path="MenuAdminitrador" element={<MenuAdministrador />}>

        </Route>
        <Route path="MenuHabitante" element={<MenuHabitante />}>

        </Route>
      </Routes>
  </Router>
  );
}


export default App;
