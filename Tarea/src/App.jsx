import MyCard from "./componentes/MyCards";
import Navbar from "./componentes/Navbar"; 
import MiProvider  from "";

import "./App.css";
// cambiar a useState 
function App() {

    return (
        
        <div>
            <MiProvider> 
                <Navbar />
                <h1>Bienvenido a taiere locura</h1>
                <MyCard />
           </MiProvider>
      </div>
  );
}

export default App;
