import { useState, useEffect } from 'react';

export default function StickyHeader() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 100);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToForm = () => {
    document.getElementById('hero-form')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  return (
    <header
      className={`animate-slide-down fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="/" className="flex items-center flex-shrink-0">
            <img
              src={isScrolled ? '/80 PX for white.svg' : '/80 PX for Dark.svg'}
              alt="J Salon"
              className="h-12 md:h-20 w-auto object-contain transition-all duration-300"
            />
          </a>

          <div className="flex items-center gap-4">
            <button
              onClick={scrollToForm}
              className={`px-4 py-2 text-sm md:px-6 md:py-3 md:text-base rounded-lg transition-all duration-300 hover:scale-105 ${
                isScrolled
                  ? 'bg-[#2E2E2E] text-white hover:bg-[#5B4636]'
                  : 'bg-[#F2E3A6] text-[#2E2E2E] hover:bg-[#DCC6B3]'
              }`}
            >
              ENQUIRE NOW
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
