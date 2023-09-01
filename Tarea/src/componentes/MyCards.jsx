import React, { useState } from "react";

function MyCard({ autos }) {
  const cardItems = autos.map((auto) => {
    const [count, setCount] = useState(0); // Estado local para cada tarjeta

    function handleClick() {
      setCount(count + 1);
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
      </div>
    );
  });

  return <div className="card-container">{cardItems}</div>;
}

export default MyCard;
