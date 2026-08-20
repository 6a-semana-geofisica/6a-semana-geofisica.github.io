export const AnimatedButton = ({ children, onClick, className = '', type = 'button' }) => {
  return (
    <>
      {/* 
        Inyectamos los keyframes y el clip-path directamente en el componente 
        para que sea 100% portable y no ensucie tu CSS global.
      */}
      <style>
        {`
          .btn-31-effect:hover .text-inner {
            animation: move-up-alternate 0.3s ease forwards;
          }
          @keyframes move-up-alternate {
            0% { transform: translateY(0); }
            50% { transform: translateY(80%); }
            51% { transform: translateY(-80%); }
            100% { transform: translateY(0); }
          }
          .clip-bg {
            clip-path: polygon(100% 0, 100% 100%, 0 100%, 100% 100%);
            transition: clip-path 0.25s ease-out;
          }
          .btn-31-effect:hover .clip-bg {
            clip-path: polygon(100% 0, 0 0, 0 100%, 100% 100%);
          }
        `}
      </style>

      <button
        type={type}
        onClick={onClick}
        className={`group btn-31-effect relative overflow-hidden border border-gold-500/50 bg-brand-950 px-8 py-3.5 font-['Montserrat'] text-sm font-bold uppercase tracking-widest text-white transition-all md:text-base ${className}`}
      >
        {/* Capa de fondo dorada que se revela en diagonal */}
        <div className="clip-bg absolute inset-0 bg-gradient-to-br from-gold-400 to-gold-600"></div>

        {/* Contenedor del texto con overflow oculto para el efecto de caída */}
        <span className="relative block overflow-hidden">
          {/* El texto cambia de blanco a oscuro (brand-950) al hacer hover para contrastar con el oro */}
          <span className="text-inner relative block transition-colors duration-200 group-hover:text-brand-950">
            {children}
          </span>
        </span>
      </button>
    </>
  )
}

export default AnimatedButton