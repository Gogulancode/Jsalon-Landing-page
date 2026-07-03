import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function StickyHeader() {
 const [isScrolled, setIsScrolled] = useState(false);

 useEffect(() => {
 const handleScroll = () => {
 setIsScrolled(window.scrollY > 100);
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
 <motion.header
 initial={{ y: -100 }}
 animate={{ y: 0 }}
 className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
 isScrolled
 ? 'bg-white/95 backdrop-blur-md shadow-lg'
 : 'bg-transparent'
 }`}
 >
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="flex items-center justify-between h-20">
 <a href="/" className="flex items-center flex-shrink-0">
 <img
 src={isScrolled ? '/80 PX for white.svg' : '/80 PX for Dark.svg'}
 alt="J Salon"
 className="h-20 w-auto object-contain transition-all duration-300"
 />
 </a>

 <div className="flex items-center gap-4">
 <button
 onClick={scrollToForm}
 className={`px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105 ${
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
 </motion.header>
 );
}
