import { motion } from 'framer-motion';
import { useScrollReveal } from '../../hooks/useScrollReveal.js';
import { ParallaxOrb } from '../ui/ParallaxOrb.jsx';
import { TextReveal } from '../ui/TextReveal.jsx';
import Video from '../../assets/videos/VIDEO_proyecto_general.mp4'

const VideoHero = () => {
  const [titleRef, titleVisible] = useScrollReveal({ margin: '-50px' });
  const [videoRef, videoVisible] = useScrollReveal({ margin: '-100px' });

  return (
    <section className="relative py-16 px-4">
      <ParallaxOrb className="opacity-50" />

      <motion.div className="max-w-6xl mx-auto mb-16">
        <motion.h3
          ref={titleRef}
          initial={{ opacity: 0, y: 20 }}
          animate={titleVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
          className="mb-3 font-['Montserrat'] text-lg font-bold tracking-wide text-center text-slate-900 sm:text-xl sm:tracking-widest md:text-2xl"
        >
          <TextReveal split="words" stagger={0.05}>
            Cónoce más sobre el Proyecto 8091 de Minciencias
          </TextReveal>
        </motion.h3>

        <motion.div
          ref={videoRef}
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={videoVisible ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.95, y: 30 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
          className="relative group"
        >
          {/* Brillo exterior */}
          <motion.div
            animate={{ opacity: [0.15, 0.3, 0.15] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 via-gold-500 to-amber-500/20 rounded-xl sm:rounded-[3rem] blur-2xl"
          />

          {/* Marco exterior con gradiente */}
          <div className="relative p-[3px] rounded-xl sm:rounded-[2.8rem] bg-gradient-to-br from-gold-500 via-blue-500/20 to-amber-300/60 shadow-[0_0_60px_rgba(255,100,150,0.08)]">
            
            {/* Marco interior blanco */}
            <div className="bg-gradient-to-br from-white/95 to-rose-50/95 rounded-xl sm:rounded-[2.6rem] p-3 shadow-xl">
            

            {/* Contenedor del video */}
            <div className="relative rounded-xl sm:rounded-[2.2rem] overflow-hidden bg-black shadow-inner">
                <iframe
                src={Video}
                title="Video final"
                className="w-full aspect-[16/9]"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                />
            </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default VideoHero