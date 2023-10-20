import  { useState } from "react";

function MyCard({ jugadores }) {
  const [jugadoresData, setjugadoresData] = useState(jugadores);

  function handleLike(id) {
    const updatedAutos = jugadoresData.map((jugadores) => {
      if (jugadores.id === id) {
        return { ...jugadores, likes: (jugadores.likes || 0) + 1 };
      }
      return jugadores;
    });
    setjugadoresData(updatedAutos);
  }

  function handleDelete(id) {
    const updatedAutos = jugadoresData.filter((jugadores) => jugadores.id !== id);
    setjugadoresData(updatedAutos);
  }

  return (
    <div className="card-container">
      {jugadoresData.map((jugadores) => (
        <div key={jugadores.id} className="card">
          <div className="card-content">
            <img src={jugadores.imagen} alt={jugadores.edad} />
            <h2>{jugadores.nombre}</h2>
            <p>Año: {jugadores.edad}</p>
          </div>
          <button onClick={() => handleLike(jugadores.id)}>
            Le diste like {jugadores.likes || 0} veces
          </button>
          <button className="btnElim" onClick={() => handleDelete(jugadores.id)}>
            Eliminar
          </button>
        </div>
      ))}
    </div>
  );
}

export default MyCard;
