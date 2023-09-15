
function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item">
          <a href="/">Inicio</a>
        </li>
        <li className="nav-item">
          <a href="/productos">Productos</a>
        </li>
        <li className="nav-item">
          <a href="/servicios">Servicios</a>
        </li>
        <li className="nav-item">
          <a href="/contacto">Contacto</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
