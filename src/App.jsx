import React from 'react';
import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Inicio from './componets/Inicio';
import Galeria from './componets/Galeria';
import Navbar from './componets/Navbar';
import Registro from './componets/Registro';
import Creditos from './componets/Creditos';
import Ingles from './componets/Ingles';
import Español from './componets/Español';
import Frances from './componets/Frances';
import Chino from './componets/Chino'
import Portugues from './componets/Portugues'
import Contacto from './componets/Contactanos';
import fondo from "./assets/img/fondo.png"; 
import Footer from './componets/Pie';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div style={{ backgroundImage: `url(${fondo})` }}></div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/galeria" element={<Galeria />} />
          <Route path="/contactanos" element={<Contacto />} />
          <Route path="/registro" element={<Registro />} />
          <Route path="/creditos" element={<Creditos />} />
          <Route path="/ingles" element={<Ingles />} />
          <Route path="/español" element={<Español />} />
          <Route path="/frances" element={<Frances />} />
          <Route path="/chino" element={<Chino />} />
          <Route path="/portugues" element={<Portugues />} />
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
