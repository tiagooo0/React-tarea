import React, { useState, useContext } from "react";
import { Contexto } from "../context/MiProvider";
function MyCard() {
  const {jugadoresData, setJugadoresData} = useContext(Contexto);

  function handleLike(id) {
    const updatedJugadores = jugadoresData.map((jugador) => {
      if (jugador.id === id) {
        return { ...jugador, likes: (jugador.likes || 0) + 1 };
      }
      return jugador;
    });
    setJugadoresData(updatedJugadores);
  }

  function handleDelete(id) {
    const updatedJugadores = jugadoresData.filter((jugador) => jugador.id !== id);
    setJugadoresData(updatedJugadores);
  }

  return (
    <div className="card-container">
      {jugadoresData.map((jugador) => (
        <div key={jugador.id} className="card">
          <div className="card-content">
            <img className="imgCard" src={jugador.imagen} alt={jugador.edad} />
            <h2>{jugador.nombre}</h2>
            <p>Edad: {jugador.edad}</p>
            <p>Posición: {jugador.posicion}</p>
            <p>Nacionalidad: {jugador.nacionalidad}</p>
            <p>Dorsal: {jugador.dorsal}</p>
          </div>
          <button className="btnLike" onClick={() => handleLike(jugador.id)}>
            Le diste like {jugador.likes || 0} veces
          </button>
          <button className="btnElim" onClick={() => handleDelete(jugador.id)}>
            Eliminar
          </button>
        </div>
      ))}
    </div>
  );
}

export default MyCard;
