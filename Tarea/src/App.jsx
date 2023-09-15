import MyCard from "./componentes/MyCards";
import Navbar from "./componentes/Navbar"; 
import "./App.css";

function App() {
  const autos = [
    { marca: "Toyota", id: 1, año: 2000 , imagen: "https://media.toyota.com.ar/16dfefb9-e905-4656-8084-703afe4bcc76.png"},
    { marca: "Fiat", id: 2, año: 2021, imagen: "https://www.fiat.com/content/dam/fiat/com/my23/500bev/colorizer/hb/black/New500-Hatchback-figurini-colorizer-Onyx-Black-desktop-680x430.png" },
    { marca: "Volkswagen", id: 3, año: 2017, imagen: "https://www.staging.carone.com.ar/wp-content/uploads/2021/09/vw-gol-2021.png"},
    { marca: "Renault", id: 4, año: 2007, imagen: 'https://www.carone.com.ar/wp-content/uploads/2021/10/renault-nuevo-kangoo-2020.png'},
    { marca: "Peugeot", id: 5, año: 2015, imagen: "https://www.chevrolet.com.ar/content/dam/chevrolet/mercosur/argentina/espanol/index/cars/cruze-5-premier/mov/04-images/enero-21/chevrolet-cruze-final.png?imwidth=960"},
    { marca: "Chevrolet", id: 6, año: 2004, imagen:'https://www.chevrolet.com.co/content/dam/chevrolet/south-america/colombia/espanol/index/cars/2021-joy-hb/mo/11-images/joy-hb-nuevo-mh/joy-hb-mh-nuevo/noviembre-2022/refresh/garantia/joy-garantia.png?imwidth=960' },
    { marca: "Ford", id: 7, año: 1987, imagen: "https://www.sdacford.com.my/clients/asset_DEA018E2-F866-475F-A215-AF7863EB8289/contentMS/img/dff60af5-bda8-4fcc-b04b-de6b764d7447.png" },
    { marca: "Jeep", id: 8, año: 2022, imagen:'https://centraljeep.divit.com.ar/wp-content/uploads/2022/06/2_puertas_sting_gray.jpg.img_.144-removebg-preview.png'},
    { marca: "Nissan", id: 9, año: 2023, imagen: "https://images.91wheels.com//assets/b_images/main/models/profile/profile1666092726.png?w=750&q=60"},
    { marca: "Hyundai", id: 10, año: 2008, imagen: 'https://images.drive.com.au/driveau/image/upload/t_wp-default/v1/cms/uploads/l3arcgwhkqtaljxvzaqf' },
  ];

  return (
    <div>
          <Navbar />
      <h1>Bienvenido a AutitosChocadores.net</h1>
      <MyCard autos={autos} />
    </div>
  );
}

export default App;
