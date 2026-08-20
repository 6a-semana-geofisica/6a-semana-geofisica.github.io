import { BrowserRouter as Router, Route, Routes } from 'react-router'

// import layout components
import Navbar from './components/layout/Navbar.jsx'
import Footer from './components/layout/Footer.jsx'

// imports vistas de la pagina
import Inicio from './components/pages/Inicio.jsx'
import Registro from './components/pages/Registro.jsx'
import Contacto from './components/pages/Contacto.jsx';
import Programa from './components/pages/Programa.jsx';
import Cursos from './components/pages/Cursos.jsx';
import Patrocinadores from './components/pages/Patrocinadores.jsx';
import Estudiantes from './components/pages/Estudiantes.jsx';
import Aprende from './components/pages/Aprende.jsx';
import Vgeofisica from './components/pages/Vgeofisica.jsx';
import Resumenes from './components/pages/Resumenes.jsx';

function App() {

  return (
    <Router>
      <main>

        <Navbar/>

        <Routes>
          
          <Route path='/' element = {
            <>
              <Inicio/>
            </>
          }
          />

          {/* renderizar más vistas */}
          <Route path='/registro' element = { <Registro/> }/>
          <Route path='/contacto' element = { <Contacto/> }/>
          <Route path='/programa' element = { <Programa/> }/>
          <Route path='/cursos' element = { <Cursos/> }/>
          <Route path='/patrocinadores' element = { <Patrocinadores/> }/>
          <Route path='/apoyo-estudiantes' element = { <Estudiantes/> }/>
          <Route path='/aprende-geofisica' element = { <Aprende/> }/>
          <Route path='/v-semana' element = { <Vgeofisica/> }/>
          <Route path='/recepcion-resumenes' element= { <Resumenes/> }/>

        </Routes>
          
          <Footer/>

      </main>
    </Router>
  )
}

export default App
