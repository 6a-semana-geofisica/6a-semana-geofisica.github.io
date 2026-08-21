import { useMemo } from 'react';
import { motion } from 'framer-motion';
import { useReducedMotion } from '../../hooks/useReducedMotion.js';

const shapes = [
  { type: 'hexagon', size: 40, x: '8%', y: '15%', delay: 0, duration: 18, opacity: 0.07 },
  { type: 'circle', size: 24, x: '85%', y: '20%', delay: 2, duration: 22, opacity: 0.06 },
  { type: 'diamond', size: 20, x: '75%', y: '70%', delay: 4, duration: 16, opacity: 0.05 },
  { type: 'line', size: 60, x: '20%', y: '80%', delay: 1, duration: 20, opacity: 0.04 },
  { type: 'circle', size: 16, x: '50%', y: '10%', delay: 3, duration: 24, opacity: 0.06 },
  { type: 'hexagon', size: 28, x: '92%', y: '55%', delay: 5, duration: 19, opacity: 0.05 },
  { type: 'diamond', size: 14, x: '5%', y: '60%', delay: 2.5, duration: 21, opacity: 0.04 },
  { type: 'line', size: 45, x: '65%', y: '35%', delay: 1.5, duration: 17, opacity: 0.03 },
];

const renderShape = (type, size) => {
  switch (type) {
    case 'hexagon':
      return (
        <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
          <polygon
            points="50,2 93,25 93,75 50,98 7,75 7,25"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          />
        </svg>
      );
    case 'diamond':
      return (
        <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
          <polygon
            points="50,5 95,50 50,95 5,50"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          />
        </svg>
      );
    case 'line':
      return (
        <svg width={size} height="2" viewBox={`0 0 ${size} 2`} fill="none">
          <line x1="0" y1="1" x2={size} y2="1" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      );
    default:
      return (
        <div
          style={{ width: size, height: size }}
          className="rounded-full border border-current"
        />
      );
  }
};

const FloatingShapes = ({ className = '' }) => {
  const reducedMotion = useReducedMotion();

  const renderedShapes = useMemo(
    () =>
      shapes.map((shape, i) => (
        <motion.div
          key={i}
          className={`absolute text-gold-400 ${className}`}
          style={{ left: shape.x, top: shape.y, opacity: shape.opacity }}
          animate={
            reducedMotion
              ? {}
              : {
                  y: [0, -15, 8, -5, 0],
                  rotate: [0, 3, -2, 1, 0],
                }
          }
          transition={{
            duration: shape.duration,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: shape.delay,
          }}
        >
          {renderShape(shape.type, shape.size)}
        </motion.div>
      )),
    [reducedMotion, className]
  );

  if (reducedMotion) return null;

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {renderedShapes}
    </div>
  );
};

export default FloatingShapes;
