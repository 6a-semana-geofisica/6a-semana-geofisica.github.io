import { motion } from 'framer-motion'


const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}


const VideoHero = () => {
  return (
    <motion.div variants={itemVariants} className="max-w-6xl mx-auto mb-16">

        <h3 className="mb-3 font-['Montserrat'] text-2xl font-bold tracking-widest text-center text-slate-900 sm:text-2xl">
            Cónoce más sobre el Proyecto 8091 de Minciencias
        </h3>

        <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative group"
        >
        {/* Brillo exterior */}
        <motion.div
            animate={{
            opacity: [0.15, 0.3, 0.15],
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 via-gold-500 to-amber-500/20 rounded-[3rem] blur-2xl"
        />

        {/* Marco exterior con gradiente */}
        <div className="relative p-[3px] rounded-[2.8rem] bg-gradient-to-br from-gold-500 via-blue-500/20 to-amber-300/60 shadow-[0_0_60px_rgba(255,100,150,0.08)]">
            
            {/* Marco interior blanco */}
            <div className="bg-gradient-to-br from-white/95 to-rose-50/95 rounded-[2.6rem] p-3 shadow-xl">
            


            {/* Contenedor del video */}
            <div className="relative rounded-[2.2rem] overflow-hidden bg-black shadow-inner">
                <iframe
                src="https://www.youtube.com/embed/ptc4Awb0UpU"
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

  )
}

export default VideoHero
