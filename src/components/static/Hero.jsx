import { motion } from 'framer-motion';
import { useScroll, useTransform } from 'framer-motion';
import { useScrollReveal } from '../../hooks/useScrollReveal.js';
import { ParallaxOrb } from '../ui/ParallaxOrb.jsx';
import { TextReveal } from '../ui/TextReveal.jsx';
import FloatingShapes from '../ui/FloatingShapes.jsx';
import Fondo from '../../assets/fondos/fondo_titulo_principal.avif'

// Recibimos 'titulo' (por defecto el de inicio) y 'children' (para inyectar botones si se necesitan)
const Hero = ({ titulo = "VI Semana de la Geofísica", children }) => {
  
  // Lógica para que la ÚLTIMA palabra del título siempre tenga el degradado dorado
  const palabras = titulo.split(' ');
  const ultimaPalabra = palabras.pop(); // Saca la última palabra
  const restoDelTitulo = palabras.join(' '); // Une las demás

  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 800], [0, 150]);
  const contentY = useTransform(scrollY, [0, 800], [0, -50]);
  const overlayOpacity = useTransform(scrollY, [0, 800], [0.4, 0.7]);

  const [dateRef, dateVisible] = useScrollReveal({ margin: '0px' });
  const [titleRef, titleVisible] = useScrollReveal({ margin: '0px' });
  const [separatorRef, separatorVisible] = useScrollReveal({ margin: '0px' });
  const [buttonsRef, buttonsVisible] = useScrollReveal({ margin: '0px' });

  return (
    <section className="relative flex min-h-[70vh] w-full items-center justify-center overflow-hidden sm:min-h-[90vh]">
      {/* Floating geometric shapes */}
      <FloatingShapes />

      {/* Parallax Orb - mouse following gradient */}
      <ParallaxOrb />

      {/* Imagen de fondo con parallax */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${Fondo})` }}
        animate={{ y: bgY }}
      />

      {/* Capa Oscura con opacity animada */}
      <motion.div
        className="absolute inset-0 bg-brand-950/40 bg-gradient-to-t from-brand-950 via-brand-900/30 to-transparent"
        animate={{ opacity: overlayOpacity }}
      />

      {/* Contenido */}
      <motion.div
        className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center justify-center px-4 text-center sm:px-6 lg:px-8"
        animate={{ y: contentY }}
      >
        {/* Fechas / Etiqueta superior */}
        <motion.p
          ref={dateRef}
          initial={{ opacity: 0, y: 20 }}
          animate={dateVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
          className="mb-4 flex items-center justify-center gap-2 font-['Montserrat'] text-xs font-semibold tracking-widest text-gold-400 sm:text-sm md:text-base lg:text-lg"
        >
          <span className="hidden h-[1px] w-8 bg-gold-400/50 md:block"></span>
          VI SEMANA DE LA GEOFÍSICA | 03 - 07 NOVIEMBRE 2026
          <span className="hidden h-[1px] w-8 bg-gold-400/50 md:block"></span>
        </motion.p>

        {/* Título Dinámico con TextReveal */}
        <motion.h1
          ref={titleRef}
          initial={{ opacity: 0, y: 30 }}
          animate={titleVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
          className="mb-6 max-w-4xl break-words font-['Montserrat'] text-3xl font-black leading-tight tracking-tight text-white drop-shadow-lg sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5rem]"
        >
          <TextReveal split="words" stagger={0.06} delay={0.15}>
            {restoDelTitulo}
          </TextReveal>{' '}
          <span className="bg-gradient-to-r from-gold-300 to-gold-500 bg-clip-text text-transparent">
            <TextReveal split="chars" stagger={0.03} delay={0.5}>{ultimaPalabra}</TextReveal>
          </span>
        </motion.h1>

        {/* Separador */}
        <motion.div
          ref={separatorRef}
          initial={{ opacity: 0, scaleX: 0 }}
          animate={separatorVisible ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.23, 1, 0.32, 1] }}
          className="mb-10 flex items-center justify-center gap-4"
        >
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.23, 1, 0.32, 1] }}
            className="h-[2px] w-12 rounded-full bg-gradient-to-r from-transparent to-gold-400 sm:w-24"
            style={{ transformOrigin: 'left center' }}
          />
          <motion.div
            initial={{ scale: 0, rotate: -45 }}
            animate={{ scale: 1, rotate: 45 }}
            transition={{ duration: 0.6, delay: 0.6, ease: [0.23, 1, 0.32, 1] }}
            className="h-2 w-2 rotate-45 transform bg-gold-500"
          />
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.23, 1, 0.32, 1] }}
            className="h-[2px] w-12 rounded-full bg-gradient-to-l from-transparent to-gold-400 sm:w-24"
            style={{ transformOrigin: 'right center' }}
          />
        </motion.div>

        {/* Renderiza los botones u otro contenido SOLO si se le pasan al componente */}
        {children && (
          <motion.div
            ref={buttonsRef}
            initial={{ opacity: 0, y: 20 }}
            animate={buttonsVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.5, ease: [0.23, 1, 0.32, 1] }}
            className="flex w-full flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6"
          >
            {children}
          </motion.div>
        )}
      </motion.div>
    </section>
  )
}

export default Hero