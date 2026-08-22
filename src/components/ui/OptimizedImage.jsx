import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const OptimizedImage = ({
  src,
  alt = '',
  className = '',
  imgClassName = 'object-cover',
  priority = false,
  sizes,
  fill = false,
  onLoad,
  onError,
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const imgRef = useRef(null);

  useEffect(() => {
    if (priority) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: '100px', threshold: 0.01 }
    );
    if (imgRef.current) observer.observe(imgRef.current);
    return () => observer.disconnect();
  }, [priority]);

  const handleLoad = (e) => {
    setIsLoaded(true);
    onLoad?.(e);
  };

  const handleError = (e) => {
    setHasError(true);
    onError?.(e);
  };

  return (
    <div
      ref={imgRef}
      className={`${imgClassName === 'object-contain' ? '' : 'overflow-hidden'} relative ${className}`}
      style={{ borderRadius: 'inherit' }}
      aria-hidden={priority}
    >
      {!isLoaded && !hasError && (
        <div
          className="absolute inset-0 animate-shimmer"
          style={{
            backgroundColor: '#e2e8f0',
            backgroundImage: 'linear-gradient(90deg, #e2e8f0 25%, #f1f5f9 50%, #e2e8f0 75%)',
            backgroundSize: '200% 100%',
            borderRadius: 'inherit',
          }}
        />
      )}

      {hasError && (
        <div className="absolute inset-0 flex items-center justify-center bg-slate-100 text-slate-400 font-['Montserrat'] text-sm">
          No se pudo cargar la imagen
        </div>
      )}

      {isInView && (
        <picture>
          <source type="image/avif" srcSet={src.replace(/\.(png|jpg|jpeg)$/i, '.avif')} />
          <source type="image/webp" srcSet={src.replace(/\.(png|jpg|jpeg|avif)$/i, '.webp')} />
          <motion.img
            src={src}
            alt={alt}
            loading={priority ? 'eager' : 'lazy'}
            decoding={priority ? 'sync' : 'async'}
            sizes={sizes}
            className={`block w-full h-full ${imgClassName} transition-opacity duration-500 ${fill ? 'absolute inset-0' : ''}`}
            style={{
              opacity: isLoaded ? 1 : 0,
              filter: isLoaded ? 'none' : 'blur(20px)',
              transform: isLoaded ? 'scale(1)' : 'scale(1.02)',
            }}
            onLoad={handleLoad}
            onError={handleError}
            {...props}
          />
        </picture>
      )}
    </div>
  );
};

export default OptimizedImage;