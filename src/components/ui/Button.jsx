import { motion } from 'framer-motion';
import { useMagnetic } from '../../hooks/useMagnetic.js';

const Button = ({ children, onClick, className = '', type = 'button', ...props }) => {
  const { x, y, handlers } = useMagnetic(0.15);

  return (
    <motion.button
      type={type}
      onClick={onClick}
      style={{ x, y }}
      {...handlers}
      className={`
        inline-flex items-center justify-center
        px-8 py-3.5 rounded-[50px]
        font-['Montserrat'] text-sm md:text-base font-semibold text-white uppercase tracking-wide
        bg-gradient-to-br from-[#FBBF24] to-[#D97706]
        shadow-[0_20px_30px_-6px_rgba(217,119,6,0.5)]
        transition-all duration-300 ease-in-out
        hover:translate-y-[-3px] hover:shadow-none
        active:opacity-50 active:translate-y-[1px]
        outline-none border-none cursor-pointer
        ${className}
      `}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;
