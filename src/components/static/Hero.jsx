import Fondo from '../../assets/fondos/fondo_titulo_principal.jpg'

// Recibimos 'titulo' (por defecto el de inicio) y 'children' (para inyectar botones si se necesitan)
const Hero = ({ titulo = "VI Semana de la Geofísica", children }) => {
  
  // Lógica para que la ÚLTIMA palabra del título siempre tenga el degradado dorado
  const palabras = titulo.split(' ');
  const ultimaPalabra = palabras.pop(); // Saca la última palabra
  const restoDelTitulo = palabras.join(' '); // Une las demás

  return (
    <section className="relative flex min-h-[90vh] w-full items-center justify-center overflow-hidden">
        {/* Imagen de fondo */}
        <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${Fondo})` }}
        />

        {/* Capa Oscura */}
        <div className="absolute inset-0 bg-brand-950/40 bg-gradient-to-t from-brand-950 via-brand-900/30 to-transparent" />

        {/* Contenido */}
        <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center justify-center px-4 text-center sm:px-6 lg:px-8">
            
            {/* Fechas / Etiqueta superior */}
            <p className="mb-4 flex items-center justify-center gap-2 font-['Montserrat'] text-sm font-semibold tracking-widest text-gold-400 sm:text-base md:text-lg">
                <span className="hidden h-[1px] w-8 bg-gold-400/50 md:block"></span>
                    VI SEMANA DE LA GEOFÍSICA | 03 - 07 NOVIEMBRE 2026
                <span className="hidden h-[1px] w-8 bg-gold-400/50 md:block"></span>
            </p>

            {/* Título Dinámico */}
            <h1 className="mb-6 max-w-4xl font-['Montserrat'] text-5xl font-black leading-tight tracking-tight text-white drop-shadow-lg sm:text-6xl md:text-7xl lg:text-[5rem]">
                {restoDelTitulo} <span className="bg-gradient-to-r from-gold-300 to-gold-500 bg-clip-text text-transparent">{ultimaPalabra}</span>        
            </h1>

            {/* Separador */}
            <div className="mb-10 flex items-center justify-center gap-4">
                <div className="h-[2px] w-12 rounded-full bg-gradient-to-r from-transparent to-gold-400 sm:w-24"></div>
                <div className="h-2 w-2 rotate-45 transform bg-gold-500"></div>
                <div className="h-[2px] w-12 rounded-full bg-gradient-to-l from-transparent to-gold-400 sm:w-24"></div>
            </div>

            {/* Renderiza los botones u otro contenido SOLO si se le pasan al componente */}
            {children && (
              <div className="flex w-full flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
                {children}
              </div>
            )}
            
        </div>
    </section>
  )
}

export default Hero