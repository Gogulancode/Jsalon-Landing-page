import { useState, useEffect } from 'react';
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
    <button
      type="button"
      onClick={scrollToForm}
      aria-hidden={!isVisible}
      className={`hidden lg:flex fixed right-8 top-1/2 -translate-y-1/2 z-40 items-center gap-3 bg-[#2E2E2E] text-white px-6 py-4 rounded-l-full shadow-2xl hover:bg-[#5B4636] hover:scale-105 transition-all duration-300 ${
        isVisible
          ? 'opacity-100 translate-x-0 pointer-events-auto'
          : 'opacity-0 translate-x-full pointer-events-none'
      }`}
    >
      <span className="font-semibold">Start Your Franchise Journey</span>
      <ArrowRight className="w-5 h-5" />
    </button>
  );
}
