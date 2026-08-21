import { useMotionValue, useSpring } from 'framer-motion';
import { useReducedMotion } from './useReducedMotion.js';

export const useMagnetic = (strength = 0.15) => {
  const reducedMotion = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 400, damping: 40 });
  const springY = useSpring(y, { stiffness: 400, damping: 40 });

  const handleMouseMove = (e) => {
    if (reducedMotion) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const deltaX = (e.clientX - centerX) * strength;
    const deltaY = (e.clientY - centerY) * strength;
    x.set(deltaX);
    y.set(deltaY);
  };

  const handleMouseLeave = () => {
    if (reducedMotion) return;
    x.set(0);
    y.set(0);
  };

  return {
    x: springX,
    y: springY,
    handlers: { onMouseMove: handleMouseMove, onMouseLeave: handleMouseLeave },
  };
};