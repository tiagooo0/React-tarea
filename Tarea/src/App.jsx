import MyCard from "./componentes/MyCards";
import Navbar from "./componentes/Navbar"; 
import "./App.css";

function App() {
 const jugadores = [
    {
        id: 1,
        nombre: "Lionel Messi",
        posicion: "Delantero",
        imagen: "https://www.example.com/messi.png",
        edad: 34,
        nacionalidad: "Argentino",
        equipo: "Paris Saint-Germain",
    },
    {
        id: 2,
        nombre: "Cristiano Ronaldo",
        posicion: "Delantero",
        imagen: "https://www.example.com/ronaldo.png",
        edad: 36,
        nacionalidad: "Portugués",
        equipo: "Manchester United",
    },
    {
        id: 3,
        nombre: "Neymar Jr.",
        posicion: "Delantero",
        imagen: "https://www.example.com/neymar.png",
        edad: 29,
        nacionalidad: "Brasileño",
        equipo: "Paris Saint-Germain",
    },
    {
        id: 4,
        nombre: "Luis Suárez",
        posicion: "Delantero",
        imagen: "https://www.example.com/suarez.png",
        edad: 34,
        nacionalidad: "Uruguayo",
        equipo: "Atlético de Madrid",
    },
    {
        id: 5,
        nombre: "Robert Lewandowski",
        posicion: "Delantero",
        imagen: "https://www.example.com/lewandowski.png",
        edad: 33,
        nacionalidad: "Polaco",
        equipo: "Bayern Munich",
    },
    {
        id: 6,
        nombre: "Kevin De Bruyne",
        posicion: "Centrocampista",
        imagen: "https://www.example.com/debruyne.png",
        edad: 30,
        nacionalidad: "Belga",
        equipo: "Manchester City",
    },
    {
        id: 7,
        nombre: "Sergio Ramos",
        posicion: "Defensor",
        imagen: "https://www.example.com/ramos.png",
        edad: 35,
        nacionalidad: "Español",
        equipo: "Paris Saint-Germain",
    },
    {
        id: 8,
        nombre: "Manuel Neuer",
        posicion: "Portero",
        imagen: "https://www.example.com/neuer.png",
        edad: 35,
        nacionalidad: "Alemán",
        equipo: "Bayern Munich",
    },
    {
        id: 9,
        nombre: "Kylian Mbappé",
        posicion: "Delantero",
        imagen: "https://www.example.com/mbappe.png",
        edad: 23,
        nacionalidad: "Francés",
        equipo: "Paris Saint-Germain",
    },
    {
        id: 10,
        nombre: "Sergio Busquets",
        posicion: "Centrocampista",
        imagen: "https://www.example.com/busquets.png",
        edad: 33,
        nacionalidad: "Español",
        equipo: "Barcelona",
    },
    {
        id: 11,
        nombre: "Mohamed Salah",
        posicion: "Delantero",
        imagen: "https://www.example.com/salah.png",
        edad: 29,
        nacionalidad: "Egipcio",
        equipo: "Liverpool",
    },
];


  return (
    <div>
          <Navbar />
      <h1>Bienvenido a AutitosChocadores.net</h1>
      <MyCard jugadores={jugadores} />
    </div>
  );
}

export default App;
