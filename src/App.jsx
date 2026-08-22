import { HashRouter as Router, Route, Routes, useLocation } from 'react-router'
import { AnimatePresence, motion } from 'framer-motion'

import Navbar from './components/layout/Navbar.jsx'
import Footer from './components/layout/Footer.jsx'
import ScrollProgress from './components/ui/ScrollProgress.jsx'
import ScrollToTop from './components/ui/ScrollToTop.jsx'

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

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

const pageTransition = {
  type: 'tween',
  ease: [0.23, 1, 0.32, 1],
  duration: 0.2,
};

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={pageTransition}
      >
        <Routes location={location}>
          <Route path='/' element={<Inicio/>} />
          <Route path='/registro' element={<Registro/>}/>
          <Route path='/contacto' element={<Contacto/>}/>
          <Route path='/programa' element={<Programa/>}/>
          <Route path='/cursos' element={<Cursos/>}/>
          <Route path='/patrocinadores' element={<Patrocinadores/>}/>
          <Route path='/apoyo-estudiantes' element={<Estudiantes/>}/>
          <Route path='/aprende-geofisica' element={<Aprende/>}/>
          <Route path='/v-semana' element={<Vgeofisica/>}/>
          <Route path='/recepcion-resumenes' element={<Resumenes/>}/>
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <main>
        <ScrollProgress />
        <ScrollToTop />
        <Navbar/>
        <AnimatedRoutes/>
        <Footer/>
      </main>
    </Router>
  )
}

export default App
