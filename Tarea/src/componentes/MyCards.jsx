import { useState } from "react";

function MyCard({ autos }) {
  const cardItems = autos.map((auto) => {
    const [count, setCount] = useState(0); // Estado local para cada tarjeta
    const [autosData, setAutosData] = useState(autos);
    function handleClick() {
      setCount(count + 1);
    }
    function handleElim(id) {
      // Filtramos los autos para eliminar el que tiene el ID igual al que pasamos
      const updatedAutos = autosData.filter((auto) => auto.id !== id);
      setAutosData(updatedAutos);

      console.log('Entro ' + id)
     
      console.log(updatedAutos)
    }

    return (
      <div key={auto.id} className="card">
        <div className="card-content">
          <img src={auto.imagen} alt={auto.marca} />
          <h2>{auto.marca}</h2>
          <p>Año: {auto.año}</p>
        </div>
        <button onClick={handleClick}>
          Le diste like {count} veces
        </button>
        <button  className="btnElim" onClick={() => handleElim(auto.id)}>
          Eliminar
        </button>

      </div>
    );
  });

  return <div className="card-container">{cardItems}</div>;
}

export default MyCard;
