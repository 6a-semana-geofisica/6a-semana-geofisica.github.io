import VideoHero from '../static/VideoHero';
import Hero from '../static/Hero';
import Button from '../ui/Button';
import { DataPages } from '../../data/Vistas.js';

const tituloVgeofisica = DataPages.find(page => page.id === 9)?.titleHero;

const Vgeofisica = () => {
  return (
    <div>
      <Hero titulo={tituloVgeofisica}>
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
      <VideoHero/>
    </div>
  )
}

export default Vgeofisica
