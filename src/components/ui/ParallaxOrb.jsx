import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useEffect } from 'react';
import { useReducedMotion } from '../../hooks/useReducedMotion.js';

export const ParallaxOrb = ({ className = '', style = {}, ...props }) => {
  const reducedMotion = useReducedMotion();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 100, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 100, damping: 30 });

  const x = useTransform(springX, [-1, 1], ['-50%', '50%']);
  const y = useTransform(springY, [-1, 1], ['-50%', '50%']);

  useEffect(() => {
    if (reducedMotion) return;
    const handleMouseMove = (e) => {
      mouseX.set((e.clientX / window.innerWidth) * 2 - 1);
      mouseY.set((e.clientY / window.innerHeight) * 2 - 1);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY, reducedMotion]);

  if (reducedMotion) return null;

  return (
    <motion.div
      className={`fixed inset-0 pointer-events-none z-0 ${className}`}
      style={{
        background: 'radial-gradient(ellipse 80% 50% at 50% 50%, rgba(212, 169, 46, 0.15) 0%, transparent 70%)',
        ...style,
      }}
      animate={{ x, y }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      {...props}
    />
  );
};