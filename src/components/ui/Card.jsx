import { useId } from 'react'

const Card = ({
  name = "Nombre Apellido",
  role = "Especialidad / Rol",
  coverImg,
  avatarImg,
  btnText1 = "Perfil",
  btnText2 = "Contacto",
  onBtn1Click,
  onBtn2Click
}) => {
  const uniqueId = useId()

  const gradientId = `cardGradient-${uniqueId}`
  const patternId = `triangles-${uniqueId}`

  return (
    <div className="relative flex h-[384px] w-[300px] flex-col items-center rounded-[20px] bg-white font-['Montserrat'] shadow-lg ring-1 ring-slate-200 transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl">

      {/* 1. Imagen de portada (Cover) */}
      <div className="h-[192px] w-full overflow-hidden rounded-t-[20px]">
        {coverImg ? (
          <img
            src={coverImg}
            alt="Fondo de la tarjeta"
            className="h-full w-full object-cover"
          />
        ) : (
          /* Fondo geométrico azul + dorado */
          <div className="h-full w-full overflow-hidden">
            <svg
              className="h-full w-full"
              viewBox="0 0 540 450"
              preserveAspectRatio="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>

                {/* Degradado base */}
                <linearGradient
                  id={gradientId}
                  x1="0"
                  y1="0"
                  x2="540"
                  y2="450"
                >
                  <stop offset="0%" stopColor="#020617" />
                  <stop offset="45%" stopColor="#0F172A" />
                  <stop offset="100%" stopColor="#FBBF24" />
                </linearGradient>

                {/* Patrón de triángulos */}
                <pattern
                  id={patternId}
                  width="180"
                  height="150"
                  patternUnits="userSpaceOnUse"
                >
                  <g fillOpacity="0.35">

                    {/* Triángulo dorado */}
                    <polygon
                      fill="#FBBF24"
                      points="90,0 0,150 180,150"
                    />

                    {/* Triángulo azul */}
                    <polygon
                      fill="#1E3A8A"
                      points="90,150 180,0 0,0"
                    />

                    {/* Triángulo dorado oscuro */}
                    <polygon
                      fill="#F59E0B"
                      points="270,150 180,0 360,0"
                    />

                    {/* Triángulo navy */}
                    <polygon
                      fill="#172554"
                      points="270,0 180,150 360,150"
                    />

                  </g>
                </pattern>

              </defs>

              {/* Fondo degradado */}
              <rect
                x="0"
                y="0"
                width="100%"
                height="100%"
                fill={`url(#${gradientId})`}
              />

              {/* Patrón geométrico */}
              <rect
                x="0"
                y="0"
                width="100%"
                height="100%"
                fill={`url(#${patternId})`}
              />

            </svg>
          </div>
        )}
      </div>

      {/* 2. Avatar circular */}
      <div className="absolute top-[135px] flex h-[114px] w-[114px] items-center justify-center rounded-full bg-white shadow-sm">
        {avatarImg ? (
          <img
            src={avatarImg}
            alt={`Avatar de ${name}`}
            className="h-[100px] w-[100px] rounded-full object-cover"
          />
        ) : (
          /* Avatar SVG por defecto */
          <svg
            className="h-[100px] w-[100px] rounded-full"
            viewBox="0 0 128 128"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="64"
              cy="64"
              fill="#1e293b"
              r="60"
            />

            <circle
              cx="64"
              cy="64"
              fill="#0f172a"
              opacity=".4"
              r="48"
            />

            <path
              d="m64 14a32 32 0 0 1 32 32v41a6 6 0 0 1-6 6h-52a6 6 0 0 1-6-6v-41a32 32 0 0 1 32-32z"
              fill="#0f172a"
            />

            <path
              d="m62.73 22h2.54a23.73 23.73 0 0 1 23.73 23.73v42.82a4.45 4.45 0 0 1-4.45 4.45h-41.1a4.45 4.45 0 0 1-4.45-4.45v-42.82a23.73 23.73 0 0 1 23.73-23.73z"
              fill="#393c54"
              opacity=".4"
            />

            <circle
              cx="89"
              cy="65"
              fill="#fbc0aa"
              r="7"
            />

            <path
              d="m64 124a59.67 59.67 0 0 0 34.69-11.06l-3.32-9.3a10 10 0 0 0-9.37-6.64h-43.95a10 10 0 0 0-9.42 6.64l-3.32 9.3a59.67 59.67 0 0 0 34.69 11.06z"
              fill="#FBBF24"
            />

            <path
              d="m57 123.68a58.54 58.54 0 0 0 14 0v-25.68h-14z"
              fill="#fff"
            />

            <path
              d="m64 88.75v9.75"
              fill="none"
              stroke="#fbc0aa"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="14"
            />

            <circle
              cx="39"
              cy="65"
              fill="#fbc0aa"
              r="7"
            />

            <path
              d="m64 91a25 25 0 0 1-25-25v-16.48a25 25 0 1 1 50 0v16.48a25 25 0 0 1-25 25z"
              fill="#ffd8c9"
            />

            <path
              d="m64 84c5 0 7-3 7-3h-14s2 3 7 3z"
              fill="#F59E0B"
              opacity=".4"
            />
          </svg>
        )}
      </div>

      {/* 3. Información */}
      <h3 className="mt-[60px] text-[18px] font-semibold text-slate-900">
        {name}
      </h3>

      <p className="mt-[10px] text-[15px] font-medium text-slate-500">
        {role}
      </p>

      {/* 4. Botones */}
      <div className="mt-[15px] flex gap-3">

        {/* Botón Outline */}
        <button
          onClick={onBtn1Click}
          className="h-[31px] w-[76px] rounded-[4px] border-2 border-brand-900 bg-white text-[11px] font-bold uppercase tracking-wide text-brand-900 transition-all duration-300 hover:bg-brand-900 hover:text-white"
        >
          {btnText1}
        </button>

        {/* Botón Sólido */}
        <button
          onClick={onBtn2Click}
          className="h-[31px] w-[76px] rounded-[4px] border-2 border-brand-900 bg-brand-900 text-[11px] font-bold uppercase tracking-wide text-white transition-all duration-300 hover:bg-white hover:text-brand-900"
        >
          {btnText2}
        </button>

      </div>

    </div>
  )
}

export default Card