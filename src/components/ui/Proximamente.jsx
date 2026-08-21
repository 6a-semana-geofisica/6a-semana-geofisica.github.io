import { motion } from 'framer-motion';
import { useScrollReveal } from '../../hooks/useScrollReveal.js';
import { Proximo } from '../../data/Prox.js';

const Proximamente = ({ id = 1 }) => {
  const data = Proximo.find((item) => item.id === id) || Proximo[0];
  const [ref, isVisible] = useScrollReveal({ margin: '-80px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40, scale: 0.97 }}
      animate={isVisible ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 40, scale: 0.97 }}
      transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
      className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-8 text-white shadow-2xl ring-1 ring-white/10 sm:p-12 md:p-16"
    >
      {/* Background halos */}
      <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-gold-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-brand-500/15 blur-3xl" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center">
        <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-gold-400/20 to-gold-600/10 text-gold-400 shadow-xl shadow-gold-500/10 ring-1 ring-gold-400/30 backdrop-blur-md">
          <svg className="h-10 w-10 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>

        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold-400/30 bg-gold-400/10 px-4 py-1.5 text-xs font-semibold tracking-widest text-gold-300 uppercase backdrop-blur-sm">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-gold-400" />
          </span>
          Anuncio Oficial
        </div>

        <h2 className="mb-4 font-['Montserrat'] text-3xl font-black uppercase tracking-widest bg-gradient-to-r from-white via-slate-100 to-gold-300 bg-clip-text text-transparent sm:text-4xl lg:text-5xl">
          Próximamente
        </h2>

        <div className="mb-6 h-[2px] w-24 bg-gradient-to-r from-transparent via-gold-400 to-transparent" />

        <p className="max-w-2xl font-['Montserrat'] text-base leading-relaxed text-slate-300 sm:text-lg">
          {data?.descripcion}
        </p>
      </div>
    </motion.div>
  );
};

export default Proximamente;
