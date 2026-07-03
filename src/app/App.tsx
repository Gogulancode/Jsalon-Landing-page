import Hero from './components/Hero';
import WhyChooseUs from './components/WhyChooseUs';
import FounderMessage from './components/FounderMessage';
import InvestmentSnapshot from './components/InvestmentSnapshot';
import FranchiseProcess from './components/FranchiseProcess';
import Testimonials from './components/Testimonials';
import SocialProof from './components/SocialProof';
import FAQ from './components/FAQ';
import ScarcityCTA from './components/ScarcityCTA';
import StickyHeader from './components/StickyHeader';
import FloatingCTA from './components/FloatingCTA';
import MobileCTA from './components/MobileCTA';

export default function App() {
 return (
 <div className="min-h-screen bg-white">
 <StickyHeader />
 <FloatingCTA />
 <MobileCTA />

 <Hero />
 <SocialProof />
 <section id="opportunity">
 <WhyChooseUs />
 </section>
 <FounderMessage />
 <section id="investment">
 <InvestmentSnapshot />
 </section>
 <FranchiseProcess />
 <Testimonials />
 <FAQ />
 <ScarcityCTA />

 <footer className="bg-[#2E2E2E] text-white py-16">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12 items-start">
 <div className="flex flex-col items-center md:items-start text-center md:text-left">
 <div className="mb-5">
 <img
 src="/j%20salon%20logo%20-footer.png"
 alt="J Salon"
 className="h-32 md:h-48 w-auto object-contain drop-shadow-sm"
 />
 </div>
 <p className="text-gray-400 max-w-xs">
 Building India's most trusted premium salon franchise network
 </p>
 </div>

 <div className="grid grid-cols-2 gap-8">
 <div>
 <h4 className="mb-4">Quick Links</h4>
 <ul className="space-y-2 text-gray-400">
 <li>
 <a href="https://jsalons.co/about-us/" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-500 transition-colors">
 About Us
 </a>
 </li>
 <li>
 <a href="#opportunity" className="hover:text-yellow-500 transition-colors">
 Franchise Opportunity
 </a>
 </li>
 <li>
 <a href="#investment" className="hover:text-yellow-500 transition-colors">
 Investment Details
 </a>
 </li>
 <li>
 <a href="https://jsalons.co/contact-us/" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-500 transition-colors">
 Contact Us
 </a>
 </li>
 </ul>
 </div>

 <div>
 <h4 className="mb-4">Legal</h4>
 <ul className="space-y-2 text-gray-400">
 <li>
 <a href="#" className="hover:text-yellow-500 transition-colors">
 Franchise Agreement
 </a>
 </li>
 </ul>
 </div>
 </div>
 </div>

 <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
 <p>&copy; 2026 J Salon. All rights reserved. | Premium Salon Franchise Opportunity in India</p>
 </div>
 </div>
 </footer>
 </div>
 );
}
