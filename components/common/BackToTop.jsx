'use client';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { BiChevronUp } from 'react-icons/bi';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Mostrar/esconder botão baseado no scroll
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  // Função para voltar ao topo
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          className="fixed bottom-8 right-8 z-50 group"
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0, y: 20 }}
          transition={{
            type: 'spring',
            stiffness: 260,
            damping: 20,
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Voltar ao topo">
          {/* Background principal */}
          <div className="relative">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-600 to-slate-700 rounded-full blur-lg opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>

            {/* Botão principal */}
            <div className="relative w-12 h-12 bg-gradient-to-br from-slate-700 to-slate-800 hover:from-slate-600 hover:to-slate-700 rounded-full flex items-center justify-center shadow-xl hover:shadow-2xl hover:shadow-slate-500/40 transition-all duration-300 border-2 border-white/20 backdrop-blur-sm">
              {/* Ícone animado */}
              <motion.div
                animate={{ y: [0, -3, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}>
                <BiChevronUp className="w-7 h-7 text-white drop-shadow-lg" />
              </motion.div>
            </div>

            {/* Ring animado */}
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-slate-500/40"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.2, 0.8, 0.2],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />

            {/* Partículas flutuantes melhoradas */}
            <div className="absolute inset-0 overflow-hidden rounded-full pointer-events-none">
              {[...Array(4)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1.5 h-1.5 bg-white rounded-full shadow-lg"
                  style={{
                    left: `${25 + i * 15}%`,
                    top: `${35 + i * 8}%`,
                  }}
                  animate={{
                    y: [0, -12, 0],
                    opacity: [0, 1, 0],
                    scale: [0, 1.2, 0],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    delay: i * 0.4,
                    ease: 'easeInOut',
                  }}
                />
              ))}
            </div>
          </div>

          {/* Tooltip melhorado */}
          <motion.div
            className="absolute bottom-full right-0 mb-3 px-4 py-2 bg-slate-900/90 backdrop-blur-sm text-white text-sm rounded-lg border border-slate-600/30 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-xl"
            initial={{ opacity: 0, y: 10 }}
            whileHover={{ opacity: 1, y: 0 }}>
            ⬆️ Voltar ao topo
            {/* Seta do tooltip */}
            <div className="absolute top-full right-6 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-slate-900/90"></div>
          </motion.div>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default BackToTop;
