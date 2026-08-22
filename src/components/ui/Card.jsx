import { useId, useRef, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import OptimizedImage from './OptimizedImage.jsx'

const Card = ({
  name = "Nombre Apellido",
  role = "Especialidad / Rol",
  coverImg,
  avatarImg,
  onBtn1Click,
}) => {
  const uniqueId = useId()
  const cardRef = useRef(null)
  const reducedMotion = useReducedMotion()
  const [glowPos, setGlowPos] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

  const gradientId = `cardGradient-${uniqueId}`
  const patternId = `triangles-${uniqueId}`

  const handleMouseMove = (e) => {
    if (reducedMotion || !cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    const deltaX = (e.clientX - centerX) / 20
    const deltaY = (e.clientY - centerY) / 20
    cardRef.current.style.transform = `perspective(1000px) rotateX(${-deltaY}deg) rotateY(${deltaX}deg) translateY(-4px)`
    cardRef.current.style.boxShadow = '0 20px 40px rgba(0,0,0,0.15)'
    setGlowPos({ x: e.clientX - rect.left, y: e.clientY - rect.top })
  }

  const handleMouseLeave = () => {
    if (!cardRef.current) return
    cardRef.current.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)'
    cardRef.current.style.boxShadow = '0 10px 25px rgba(0,0,0,0.1)'
    setIsHovered(false)
  }

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="relative flex h-[384px] w-[300px] flex-col items-center overflow-hidden rounded-[20px] bg-white font-['Montserrat'] shadow-lg ring-1 ring-slate-200 transition-all duration-300"
      style={{ transformStyle: 'preserve-3d' }}
    >
      {/* Mouse glow overlay */}
      <div
        className="pointer-events-none absolute inset-0 z-20 opacity-0 transition-opacity duration-300"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(250px circle at ${glowPos.x}px ${glowPos.y}px, rgba(212, 169, 46, 0.12), transparent 60%)`,
        }}
      />

      {/* 1. Imagen de portada (Cover) */}
      <div className="h-[192px] w-full overflow-hidden rounded-t-[20px]">
        {coverImg ? (
          <OptimizedImage
            src={coverImg}
            alt="Fondo de la tarjeta"
            className="h-full w-full object-cover"
            fill
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
          <OptimizedImage
            src={avatarImg}
            alt={`Avatar de ${name}`}
            className="h-[100px] w-[100px] rounded-full object-cover"
            fill
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

      {/* 4. Botón LinkedIn */}
      <div className="mt-[15px]">
        <button
          onClick={onBtn1Click}
          className="flex h-[36px] w-[36px] items-center justify-center rounded-full border-2 border-brand-900 bg-white text-brand-900 transition-all duration-300 hover:bg-brand-900 hover:text-white"
          aria-label="LinkedIn"
        >
          <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
        </button>
      </div>

    </motion.div>
  )
}

export default Card