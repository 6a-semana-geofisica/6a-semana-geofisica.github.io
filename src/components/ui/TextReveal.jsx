import { motion, useReducedMotion } from 'framer-motion';

export const TextReveal = ({
  children,
  className = '',
  split = 'words',
  delay = 0,
  stagger = 0.05,
  ...props
}) => {
  const reducedMotion = useReducedMotion();
  const text = typeof children === 'string' ? children : '';
  const parts = split === 'chars' ? text.split('') : text.split(' ');

  if (reducedMotion) {
    return (
      <span className={className} {...props}>
        {children}
      </span>
    );
  }

  return (
    <span className={`inline-flex ${className}`} {...props}>
      {parts.map((part, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: '1.2em', filter: 'blur(4px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0)' }}
          transition={{
            duration: 0.6,
            delay: delay + index * stagger,
            ease: [0.23, 1, 0.32, 1],
          }}
          style={{ display: 'inline-block', whiteSpace: split === 'words' ? 'pre' : 'nowrap' }}
        >
          {part}{split === 'words' && index < parts.length - 1 && ' '}
        </motion.span>
      ))}
    </span>
  );
};