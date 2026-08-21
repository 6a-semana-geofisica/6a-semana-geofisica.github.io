import { useScroll, useTransform, motion, useReducedMotion } from 'framer-motion';

export default function ScrollProgress({ className = '' }) {
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();

  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  if (reducedMotion) return null;

  return (
    <div className={`fixed top-0 left-0 z-50 h-1 ${className}`} style={{ width: '100%' }}>
      {/* Glow layer */}
      <motion.div
        className="absolute inset-0 h-1 bg-gradient-to-r from-gold-400 to-brand-600 opacity-60 blur-sm"
        style={{ transformOrigin: 'left center', scaleX }}
        animate={{ scaleX }}
        initial={false}
      />
      {/* Main bar */}
      <motion.div
        className="absolute inset-0 h-1 bg-gradient-to-r from-gold-400 to-brand-600"
        style={{ transformOrigin: 'left center', scaleX }}
        animate={{ scaleX }}
        initial={false}
      />
    </div>
  );
}
