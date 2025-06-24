import HeaderComponent from "../components/HeaderComponent"
import "./HomePage.css"


function HomePage() {
  return (
    <> 
     <HeaderComponent/>
    <div className="homepage-container">
      <div className="homepage-content">
        <h1 className="homepage-title">¡Bienvenido a Notes App!</h1>
        <p className="homepage-description">
          Esta es tu primera aplicación React con temática nórdica/vikinga.<br/>
          Crea, edita y organiza tus notas en un entorno épico y personalizado.
        </p>
        <div className="homepage-actions">
          <a href="/notes" className="homepage-button">Ver mis notas</a>
          <a href="https://portfolio-cristian-backend.vercel.app/" className="homepage-button" target="_blank" rel="noopener noreferrer">Portafolio</a>
          <a href="https://github.com/cristian-micchele-dev" className="homepage-button" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
        <footer style={{marginTop: '3rem', color: '#7c6f3a', fontWeight: 500, fontSize: '1rem', textShadow: '0 1px 4px #fffbe7'}}>Hecho por Cristian Micchele © 2025</footer>
      </div>
    </div>
    </>
 
  )
}

export default HomePage