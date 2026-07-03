import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 800);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToForm = () => {
    const formElement = document.getElementById('hero-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          onClick={scrollToForm}
          className="hidden lg:flex fixed right-8 top-1/2 -translate-y-1/2 z-40 items-center gap-3 bg-[#2E2E2E] text-white px-6 py-4 rounded-l-full shadow-2xl transition-all duration-300 hover:bg-[#5B4636] hover:scale-105"
        >
          <span className="font-semibold">Start Your Franchise Journey</span>
          <ArrowRight className="w-5 h-5" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
