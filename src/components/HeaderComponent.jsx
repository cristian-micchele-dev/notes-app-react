import { Link } from "react-router-dom"
import "./HeaderComponent.css"

function HeaderComponent() {
  return (
    <header className="header">
      {/* Si tienes un logo, puedes agregarlo aquí */}
      {/* <img src="/ruta/al/logo.svg" alt="Logo" className="header-logo" /> */}
      <h2 className="header-title">Notes App</h2>
      <nav>
        <ul className="nav-list">
          <li>
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/notes" className="nav-link">
              Notes
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default HeaderComponent
