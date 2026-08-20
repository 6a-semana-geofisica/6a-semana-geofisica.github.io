import Video from '../static/VideoHero.jsx'
import Hero from '../static/Hero.jsx'
import Button from '../ui/Button.jsx'
import { DataPages } from '../../data/Vistas.js';

const tituloAprende = DataPages.find(page => page.id === 8)?.titleHero;

const Aprende = () => {
  return (
    <div>
      <Hero titulo={tituloAprende}>
            <Button
                  className="w-full sm:w-auto mr-12"
                  onClick={() => console.log('Ir a subir resumen')}
                  >
                  SUBE TU RESUMEN
                  </Button>

                  <Button 
                  className="w-full sm:w-auto border ml-12 border-white/20 bg-gradient-to-br from-white/10 to-white/5 shadow-none backdrop-blur-sm hover:border-gold-400 hover:text-gold-400"
                  onClick={() => console.log('Ver noticias')}
                  >
                  NOTICIAS Y ACTUALIZACIONES
            </Button>
      </Hero>  
      <Video/>
    </div>
  )
}

export default Aprende
