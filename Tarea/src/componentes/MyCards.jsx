import  { useState } from "react";

function MyCard({ autos }) {
  const [autosData, setAutosData] = useState(autos);

  function handleLike(id) {
    const updatedAutos = autosData.map((auto) => {
      if (auto.id === id) {
        return { ...auto, likes: (auto.likes || 0) + 1 };
      }
      return auto;
    });
    setAutosData(updatedAutos);
  }

  function handleDelete(id) {
    const updatedAutos = autosData.filter((auto) => auto.id !== id);
    setAutosData(updatedAutos);
  }

  return (
    <div className="card-container">
      {autosData.map((auto) => (
        <div key={auto.id} className="card">
          <div className="card-content">
            <img src={auto.imagen} alt={auto.marca} />
            <h2>{auto.marca}</h2>
            <p>Año: {auto.año}</p>
          </div>
          <button onClick={() => handleLike(auto.id)}>
            Le diste like {auto.likes || 0} veces
          </button>
          <button className="btnElim" onClick={() => handleDelete(auto.id)}>
            Eliminar
          </button>
        </div>
      ))}
    </div>
  );
}

export default MyCard;
