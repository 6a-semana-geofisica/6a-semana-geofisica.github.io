import Video from '../static/VideoHero.jsx'
import Hero from '../static/Hero.jsx'
import Button from '../ui/Button.jsx'
import AnimatedButton from '../ui/AnimatedButton.jsx'
import { DataPages } from '../../data/Vistas.js';

const tituloEstudiantes = DataPages.find(page => page.id === 7)?.titleHero;

// Configuración de Flyers
const flyers = [
  {
    id: 1,
    titulo: 'Flyer Convocatoria General',
    src: 'src/assets/flyers/flyer_estudiantes_1.jpg',
    alt: 'Flyer informativo convocatoria estudiantes 1'
  },
  {
    id: 2,
    titulo: 'Flyer Requisitos y Fechas',
    src: 'src/assets/flyers/flyer_estudiantes_2.jpg',
    alt: 'Flyer informativo convocatoria estudiantes 2'
  }
];

const Estudiantes = () => {
  return (
    <div>
      <Hero titulo={tituloEstudiantes}>
        <Button
          className="w-full sm:w-auto mr-12"
          onClick={() => console.log('Ir a subir resumen')}
        >
          SUBE TU RESUMEN
        </Button>

        <Button 
          className="w-full sm:w-auto border ml-12 border-white/20 bg-gradient-to-br from-white/10 to-white/5 shadow-none backdrop-blur-sm hover:border-gold-400 hover:text-gold-400"
          onClick={() => console.log('Ver noticias')}
        >
          NOTICIAS Y ACTUALIZACIONES
        </Button>
      </Hero>  

      <section className="bg-slate-50/50 px-4 py-16 sm:px-6 md:py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">

          {/* Encabezado Principal */}
          <div className="mb-12 text-center">
            <h1 className="mb-6 font-['Montserrat'] text-3xl font-black uppercase tracking-widest text-slate-900 sm:text-5xl">
              Apoyo a Estudiantes
            </h1>
            
            {/* Botón de Acción Principal */}
            <div className="flex justify-center mt-8">
              <AnimatedButton onClick={() => console.log('Inscribirse')}>
                INSCRÍBETE AQUÍ
              </AnimatedButton>
            </div>
          </div>

          {/* Sección Convocatoria */}
          <div className="mx-auto mb-20 max-w-4xl text-center">
            <div className="mb-8 flex items-center justify-center gap-4">
              <div className="h-[2px] w-12 bg-gradient-to-r from-transparent to-gold-400 sm:w-24"></div>
              <h2 className="font-['Montserrat'] text-2xl font-bold uppercase tracking-wider text-slate-900 sm:text-3xl">
                Convocatoria de apoyo para estudiantes de pregrado
              </h2>
              <div className="h-[2px] w-12 bg-gradient-to-l from-transparent to-gold-400 sm:w-24"></div>
            </div>

            <div className="space-y-4 font-['Montserrat'] text-base leading-relaxed text-slate-600 md:text-lg">
              <p>
                La VI Semana de la Geofísica invita a estudiantes de pregrado de universidades e instituciones de educación superior de todo Colombia a postularse para recibir un apoyo económico que facilite su participación presencial en el evento.
              </p>
              <p>
                Esta iniciativa busca promover la participación de estudiantes interesados en la geofísica, la geología, las geociencias y áreas relacionadas, fortaleciendo su formación mediante el intercambio de conocimientos con investigadores, profesionales y otros estudiantes del país.
              </p>
              <p className="font-semibold text-brand-700">
                El evento se realizará del 3 al 7 de noviembre de 2026 en la Universidad Industrial de Santander, en Bucaramanga.
              </p>
            </div>
          </div>

          {/* SECCIÓN DE FLYERS (2 Imágenes) */}
          <div className="mb-24">
            <h3 className="mb-10 text-center font-['Montserrat'] text-xl font-bold uppercase tracking-widest text-slate-500 sm:text-2xl">
              Material Informativo
            </h3>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
              {flyers.map((flyer) => (
                <div 
                  key={flyer.id}
                  className="group relative overflow-hidden rounded-2xl bg-white p-3 shadow-lg ring-1 ring-slate-200/60 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-gold-500/10"
                >
                  <div className="overflow-hidden rounded-xl bg-slate-100">
                    <img 
                      src={flyer.src} 
                      alt={flyer.alt}
                      className="h-auto w-full object-cover transition-transform duration-500 group-hover:scale-105" 
                    />
                  </div>
                  <div className="p-4 text-center">
                    <span className="font-['Montserrat'] text-sm font-semibold text-slate-700">
                      {flyer.titulo}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* SECCIÓN 1: ¿A quién está dirigida la convocatoria? */}
          <div className="mb-24">
            <h2 className="mb-12 text-center font-['Montserrat'] text-2xl font-black uppercase tracking-widest text-slate-900 sm:text-3xl">
              ¿A quién está dirigida la convocatoria?
            </h2>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {/* Card 1 */}
              <div className="group relative flex flex-col items-center rounded-2xl bg-white p-8 text-center shadow-md ring-1 ring-slate-100 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-gold-500/20">
                <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-gold-50 text-gold-600 shadow-sm transition-all duration-500 group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-gold-400 group-hover:to-gold-600 group-hover:text-white">
                  {/* Ícono Birrete / Estudiante */}
                  <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a6.04 6.04 0 00-.491 6.347A4.862 4.862 0 014 18.75c0 1.44.5 2.748 1.35 3.822h13.3c.85-1.074 1.35-2.382 1.35-3.822 0-.61-.1-1.196-.285-1.742a6.04 6.04 0 00-.49-6.347M8 18.75h8M8 21.75h8M12 15.75v-1.5m-3-4.5h6m-7.5 3h9" />
                  </svg>
                </div>
                <h3 className="mb-3 font-['Montserrat'] text-lg font-bold text-slate-800">
                  Estudiantes de pregrado
                </h3>
                <p className="font-['Montserrat'] text-sm leading-relaxed text-slate-600">
                  La convocatoria está dirigida a estudiantes activos de programas universitarios de cualquier institución de educación superior del país.
                </p>
              </div>

              {/* Card 2 */}
              <div className="group relative flex flex-col items-center rounded-2xl bg-white p-8 text-center shadow-md ring-1 ring-slate-100 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-gold-500/20">
                <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-gold-50 text-gold-600 shadow-sm transition-all duration-500 group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-gold-400 group-hover:to-gold-600 group-hover:text-white">
                  {/* Ícono Globo / Regiones */}
                  <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m-15.432 0A8.959 8.959 0 013 12c0-.778.099-1.533.284-2.253m0 0A8.997 8.997 0 0112 3" />
                  </svg>
                </div>
                <h3 className="mb-3 font-['Montserrat'] text-lg font-bold text-slate-800">
                  Participantes de diferentes regiones de Colombia
                </h3>
                <p className="font-['Montserrat'] text-sm leading-relaxed text-slate-600">
                  Podrán postularse estudiantes que requieran apoyo económico para trasladarse y participar presencialmente en la VI Semana de la Geofísica.
                </p>
              </div>

              {/* Card 3 */}
              <div className="group relative flex flex-col items-center rounded-2xl bg-white p-8 text-center shadow-md ring-1 ring-slate-100 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-gold-500/20">
                <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-gold-50 text-gold-600 shadow-sm transition-all duration-500 group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-gold-400 group-hover:to-gold-600 group-hover:text-white">
                  {/* Ícono Investigación / Ciencia */}
                  <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                  </svg>
                </div>
                <h3 className="mb-3 font-['Montserrat'] text-lg font-bold text-slate-800">
                  Interés en las geociencias
                </h3>
                <p className="font-['Montserrat'] text-sm leading-relaxed text-slate-600">
                  Se invita especialmente a estudiantes de geología, geofísica, ingeniería, ciencias de la Tierra y otras áreas relacionadas con las temáticas del evento.
                </p>
              </div>
            </div>

            <p className="mt-8 text-center font-['Montserrat'] text-sm italic text-slate-500">
              Los requisitos específicos, los criterios de selección y el alcance del apoyo económico se encuentran detallados en el formulario de inscripción.
            </p>
          </div>

          {/* SECCIÓN 2: ¿Por qué participar? */}
          <div className="mb-24">
            <h2 className="mb-12 text-center font-['Montserrat'] text-2xl font-black uppercase tracking-widest text-slate-900 sm:text-3xl">
              ¿Por qué participar?
            </h2>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {/* Item 1 */}
              <div className="group relative flex flex-col items-center rounded-2xl bg-white p-8 text-center shadow-md ring-1 ring-slate-100 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-gold-500/20">
                <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-gold-50 text-gold-600 shadow-sm transition-all duration-500 group-hover:rotate-6 group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-gold-400 group-hover:to-gold-600 group-hover:text-white">
                  {/* Ícono Libro / Formación */}
                  <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18c-2.305 0-4.408.867-6 2.292m0-14.25v14.25" />
                  </svg>
                </div>
                <h3 className="mb-3 font-['Montserrat'] text-lg font-bold text-slate-800">
                  Fortalece tu formación académica
                </h3>
                <p className="font-['Montserrat'] text-sm leading-relaxed text-slate-600">
                  Conoce investigaciones, metodologías y tecnologías emergentes aplicadas a las geociencias.
                </p>
              </div>

              {/* Item 2 */}
              <div className="group relative flex flex-col items-center rounded-2xl bg-white p-8 text-center shadow-md ring-1 ring-slate-100 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-gold-500/20">
                <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-gold-50 text-gold-600 shadow-sm transition-all duration-500 group-hover:-rotate-6 group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-gold-400 group-hover:to-gold-600 group-hover:text-white">
                  {/* Ícono Comunidad / Conexión */}
                  <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                  </svg>
                </div>
                <h3 className="mb-3 font-['Montserrat'] text-lg font-bold text-slate-800">
                  Conecta con la comunidad científica
                </h3>
                <p className="font-['Montserrat'] text-sm leading-relaxed text-slate-600">
                  Interactúa con estudiantes, docentes, investigadores y profesionales de diferentes instituciones.
                </p>
              </div>

              {/* Item 3 */}
              <div className="group relative flex flex-col items-center rounded-2xl bg-white p-8 text-center shadow-md ring-1 ring-slate-100 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-gold-500/20">
                <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-gold-50 text-gold-600 shadow-sm transition-all duration-500 group-hover:rotate-6 group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-gold-400 group-hover:to-gold-600 group-hover:text-white">
                  {/* Ícono Evento / Megáfono */}
                  <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 110-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.75.927 1.35.927h1.018a.75.75 0 00.725-.962 14.502 14.502 0 01-.26-1.58M10.34 6.66c.253-.962.584-1.892.985-2.783A1.5 1.5 0 0112.675 3h1.018a.75.75 0 01.725.962 14.502 14.502 0 01-.26 1.58m-3.818 1.118l6.364-2.121a.75.75 0 01.962.725v13.032a.75.75 0 01-.962.725l-6.364-2.121" />
                  </svg>
                </div>
                <h3 className="mb-3 font-['Montserrat'] text-lg font-bold text-slate-800">
                  Participa en un evento nacional
                </h3>
                <p className="font-['Montserrat'] text-sm leading-relaxed text-slate-600">
                  Vive una experiencia presencial de intercambio académico en la Universidad Industrial de Santander.
                </p>
              </div>
            </div>
          </div>

          {/* SECCIÓN 3: ¿Cómo postularte? */}
          <div className="mx-auto max-w-5xl">
            <h2 className="mb-12 text-center font-['Montserrat'] text-2xl font-black uppercase tracking-widest text-slate-900 sm:text-3xl">
              ¿Cómo postularte?
            </h2>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {/* Paso 1 */}
              <div className="relative flex flex-col items-center rounded-2xl bg-white p-8 text-center shadow-md ring-1 ring-slate-100 transition-all duration-300 hover:shadow-lg">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-900 text-gold-400 shadow-md">
                  {/* Ícono Formulario */}
                  <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                  </svg>
                </div>
                <h3 className="mb-3 font-['Montserrat'] text-lg font-bold text-slate-900">
                  1. Completa el formulario
                </h3>
                <p className="font-['Montserrat'] text-sm leading-relaxed text-slate-600">
                  Registra tus datos personales, académicos y la información solicitada para participar en la convocatoria.
                </p>
              </div>

              {/* Paso 2 */}
              <div className="relative flex flex-col items-center rounded-2xl bg-white p-8 text-center shadow-md ring-1 ring-slate-100 transition-all duration-300 hover:shadow-lg">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-900 text-gold-400 shadow-md">
                  {/* Ícono Documentos */}
                  <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18.375 12.739l-7.693 7.693a4.5 4.5 0 01-6.364-6.364l10.94-10.94a3 3 0 114.243 4.243L8.587 18.315a1.5 1.5 0 01-2.122-2.122l8.854-8.855" />
                  </svg>
                </div>
                <h3 className="mb-3 font-['Montserrat'] text-lg font-bold text-slate-900">
                  2. Adjunta los documentos requeridos
                </h3>
                <p className="font-['Montserrat'] text-sm leading-relaxed text-slate-600">
                  Verifica cuidadosamente los requisitos indicados en el formulario antes de enviar tu postulación.
                </p>
              </div>

              {/* Paso 3 */}
              <div className="relative flex flex-col items-center rounded-2xl bg-white p-8 text-center shadow-md ring-1 ring-slate-100 transition-all duration-300 hover:shadow-lg">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-900 text-gold-400 shadow-md">
                  {/* Ícono Calendario / Envío */}
                  <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                  </svg>
                </div>
                <h3 className="mb-3 font-['Montserrat'] text-lg font-bold text-slate-900">
                  3. Envía tu solicitud antes del cierre
                </h3>
                <p className="font-['Montserrat'] text-sm leading-relaxed text-slate-600">
                  Las postulaciones deberán realizarse hasta el:
                </p>
                <div className="mt-3 rounded-lg bg-gold-50 px-3 py-1.5 font-['Montserrat'] text-sm font-bold text-gold-700 ring-1 ring-gold-200">
                  Jueves 8 de octubre de 2026
                </div>
              </div>
            </div>

            {/* CTA Secundario en la parte inferior */}
            <div className="mt-16 flex justify-center">
              <AnimatedButton onClick={() => console.log('Inscribirse')}>
                INSCRÍBETE AQUÍ
              </AnimatedButton>
            </div>
          </div>

        </div>
      </section>

      <Video/>
    </div>
  )
}

export default Estudiantes