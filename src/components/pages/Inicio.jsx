import Hero from '../static/Hero.jsx';
import AcercaDelEvento from '../ui/AcercaDelEvento.jsx';
import Card from '../ui/Card.jsx';
import { teamMembers } from '../../data/Personal.js';
import VideoHero from '../static/VideoHero.jsx';
import Button from '../ui/Button.jsx'; // Asegúrate de que esta ruta sea correcta
import { DataPages } from '../../data/Vistas.js'; // Asegúrate de que esta ruta sea correcta

const Inicio = () => {

  // Función segura para abrir LinkedIn
  const abrirLinkedIn = (url) => {
    if (!url) return;
    const enlaceSeguro = url.startsWith('http') ? url : `https://${url}`;
    window.open(enlaceSeguro, '_blank', 'noopener,noreferrer');
  };

  // Obtenemos el título de la página de inicio desde Vistas.js (id: 1)
  const tituloInicio = DataPages.find(page => page.id === 1)?.titleHero || "VI Semana de la Geofísica";

  // Filtramos la data de los miembros del equipo
  const comiteOrganizador = teamMembers.filter(m => m.comite === "Comité Organizador");
  const comiteApoyo = teamMembers.filter(m => m.comite === "Comite de Apoyo");
  
  // Agrupamos el Científico y Administrativo
  const comiteCientificoYAdmin = teamMembers.filter(
    m => m.comite === "Comite Cientifico" || m.comite === "Comite Administrativo"
  );

  return (
    <div>
      {/* Sección del banner principal (Ahora estandarizado con botones) */}
      <Hero titulo={tituloInicio}>
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
      
      {/* Sección de información y descripción del evento */}
      <AcercaDelEvento />

      {/* SECCIÓN: Equipo de Trabajo */}
      <section className="bg-slate-50/50 px-4 py-16 sm:px-6 md:py-24 lg:px-8">
        <div className="mx-auto max-w-[1300px]"> 
          
          {/* Título Principal */}
          <div className="mb-16 flex items-center justify-center gap-4">
            <div className="h-[2px] w-16 bg-gradient-to-r from-transparent to-gold-400 sm:w-32"></div>
            <h2 className="text-center font-['Montserrat'] text-3xl font-bold uppercase tracking-widest text-slate-900 sm:text-4xl">
              Nuestro Equipo
            </h2>
            <div className="h-[2px] w-16 bg-gradient-to-l from-transparent to-gold-400 sm:w-32"></div>
          </div>

          {/* 1. COMITÉ ORGANIZADOR */}
          <div className="mb-16">
            <h3 className="mb-8 text-center font-['Montserrat'] text-xl font-semibold text-brand-800">
              Comité Organizador
            </h3>
            <div className="flex flex-wrap justify-center gap-8">
              {comiteOrganizador.map((miembro) => (
                <Card 
                  key={miembro.id}
                  name={miembro.name}
                  role={miembro.comite}
                  avatarImg={miembro.imagen} 
                  btnText1={miembro.linkedin ? "LinkedIn" : "Perfil"}
                  btnText2="Contacto"
                  onBtn1Click={() => abrirLinkedIn(miembro.linkedin)}
                  onBtn2Click={() => console.log(`Contactar a ${miembro.name}`)}
                />
              ))}
            </div>
          </div>

          {/* 2. COMITÉ DE APOYO */}
          <div className="mb-16">
            <h3 className="mb-8 text-center font-['Montserrat'] text-xl font-semibold text-brand-800">
              Comité de Apoyo
            </h3>
            <div className="flex flex-wrap justify-center gap-6 xl:gap-8">
              {comiteApoyo.map((miembro) => (
                <Card 
                  key={miembro.id}
                  name={miembro.name}
                  role={miembro.comite}
                  avatarImg={miembro.imagen}
                  btnText1={miembro.linkedin ? "LinkedIn" : "Perfil"}
                  btnText2="Contacto"
                  onBtn1Click={() => abrirLinkedIn(miembro.linkedin)}
                  onBtn2Click={() => console.log(`Contactar a ${miembro.name}`)}
                />
              ))}
            </div>
          </div>

          {/* 3. COMITÉS CIENTÍFICO Y ADMINISTRATIVO */}
          <div className="mb-16">
            <h3 className="mb-8 text-center font-['Montserrat'] text-xl font-semibold text-brand-800">
              Comité Científico y Administrativo
            </h3>
            <div className="flex flex-wrap justify-center gap-6 xl:gap-8">
              {comiteCientificoYAdmin.map((miembro) => (
                <Card 
                  key={miembro.id}
                  name={miembro.name}
                  role={miembro.comite} 
                  avatarImg={miembro.imagen}
                  btnText1={miembro.linkedin ? "LinkedIn" : "Perfil"}
                  btnText2="Contacto"
                  onBtn1Click={() => abrirLinkedIn(miembro.linkedin)}
                  onBtn2Click={() => console.log(`Contactar a ${miembro.name}`)}
                />
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Sección de Video */}
      <VideoHero/>
    </div>
  )
}

export default Inicio;