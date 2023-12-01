import React, { useContext } from "react";
import { Contexto } from "../context/MiProvider";
// Agrega la imagen importada si aún no lo has hecho

function Navbar() {
  const { setBusqueda } = useContext(Contexto);

  const handleSearch = (event) => {
    setBusqueda(event.target.value);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Escudo_Talleres_2015.svg/893px-Escudo_Talleres_2015.svg.png' alt="Logo" className="logo" />
        <h1 className="navbar-title">Talleres</h1>
        <div className="search-container">
          <input
            type="text"
            className="search-input"
            placeholder="Buscar jugadores..."
            onChange={handleSearch}
          />
          {/* Agrega un icono o botón de búsqueda si es necesario */}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
