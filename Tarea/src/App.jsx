import MyCard from "./componentes/MyCards";
import Navbar from "./componentes/Navbar"; 
import MiProvider  from "../context/MiProvider";

import "./App.css";
// cambiar a useState 
function App() {

  return (
    <div>
          <Navbar />
      <h1>Bienvenido a taiere locura</h1>
      <MyCard jugadores={jugadores} />
    </div>
  );
}

export default App;
