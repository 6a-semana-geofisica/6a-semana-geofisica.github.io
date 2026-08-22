import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

export const useScrollReveal = (options = {}) => {
  const {
    once = true,
    margin = '-100px',
    threshold = 0.1,
  } = options;

  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin, threshold });

  return [ref, isInView];
};

export const useStaggeredReveal = (count, options = {}) => {
  const [refs, setRefs] = useState(Array(count).fill(null));
  const [visible, setVisible] = useState(Array(count).fill(false));

  useEffect(() => {
    const observers = refs.map((ref, index) => {
      if (!ref) return null;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisible((prev) => {
              const next = [...prev];
              next[index] = true;
              return next;
            });
            if (options.once !== false) observer.disconnect();
          }
        },
        { rootMargin: options.margin || '-100px', threshold: options.threshold || 0.1 }
      );
      observer.observe(ref);
      return observer;
    });

    return () => observers.forEach((obs) => obs?.disconnect());
  }, [refs, options.once, options.margin, options.threshold]);

  const setRef = (index) => (el) => {
    setRefs((prev) => {
      const next = [...prev];
      next[index] = el;
      return next;
    });
  };

  return [setRef, visible];
};