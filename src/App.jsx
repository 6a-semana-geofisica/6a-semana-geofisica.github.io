import { BrowserRouter as Router, Route, Routes } from 'react-router'

// import layout components
import Navbar from './components/layout/Navbar.jsx'
import Footer from './components/layout/Footer.jsx'

// imports vistas de la pagina
import Inicio from './components/pages/Inicio.jsx'


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
          

        </Routes>
          
          <Footer/>

      </main>
    </Router>
  )
}

export default App
