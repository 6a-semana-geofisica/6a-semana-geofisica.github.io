import { motion } from 'framer-motion';
import { useScrollReveal } from '../../hooks/useScrollReveal.js';

const Footer = () => {
  const [ref, isVisible] = useScrollReveal({ margin: '-40px' });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-brand-950 via-brand-900 to-brand-800">
      {/* Shimmer line */}
      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-gold-400/60 to-transparent animate-gradient-shift" />

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
        className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-4 py-8 sm:flex-row sm:justify-between sm:px-6 lg:px-8"
      >
        {/* Left: Copyright */}
        <p className="font-['Montserrat'] text-sm text-slate-400">
          &copy; 2026{' '}
          <span className="font-semibold text-slate-300">
            6a Semana de la Geof&iacute;sica
          </span>{' '}
          &mdash; Universidad Industrial de Santander
        </p>

        {/* Right: Back to top */}
        <button
          type="button"
          onClick={scrollToTop}
          className="group flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 font-['Montserrat'] text-xs font-semibold tracking-wider text-slate-400 uppercase transition-all duration-300 hover:border-gold-400/30 hover:bg-gold-400/10 hover:text-gold-300 hover:shadow-lg hover:shadow-gold-500/10"
          aria-label="Volver arriba"
        >
          <svg
            className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
          </svg>
          Volver arriba
        </button>
      </motion.div>
    </footer>
  );
};

export default Footer;
