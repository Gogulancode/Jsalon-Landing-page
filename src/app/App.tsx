import { Suspense, lazy, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Hero from './components/Hero';
import StickyHeader from './components/StickyHeader';
import FloatingCTA from './components/FloatingCTA';
import MobileCTA from './components/MobileCTA';
const ThankYou = lazy(() => import('./components/ThankYou'));
import LazySection from './components/LazySection';

const importWhyChooseUs = () => import('./components/WhyChooseUs');
const importFounderMessage = () => import('./components/FounderMessage');
const importInvestmentSnapshot = () => import('./components/InvestmentSnapshot');
const importFranchiseProcess = () => import('./components/FranchiseProcess');
const importTestimonials = () => import('./components/Testimonials');
const importFAQ = () => import('./components/FAQ');
const importScarcityCTA = () => import('./components/ScarcityCTA');

function HomePage() {
  return (
    <>
      <Hero />
      <Suspense fallback={null}>
        <section id="opportunity">
          <LazySection importFn={importWhyChooseUs} />
        </section>
        <LazySection importFn={importFounderMessage} />
        <section id="investment">
          <LazySection importFn={importInvestmentSnapshot} />
        </section>
        <LazySection importFn={importFranchiseProcess} />
        <LazySection importFn={importTestimonials} />
        <LazySection importFn={importFAQ} />
        <LazySection importFn={importScarcityCTA} />
      </Suspense>
    </>
  );
}

function Layout() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    // Push a virtual pageview to GTM on every React Router navigation
    if (typeof window !== 'undefined' && window.dataLayer) {
      window.dataLayer.push({
        event: 'pageview',
        page: {
          title: document.title,
          path: location.pathname + location.search,
        },
      });
    }
  }, [location.pathname, location.search]);

  return (
    <div className="min-h-screen bg-white">
      {isHome && <StickyHeader />}
      {isHome && <FloatingCTA />}
      {isHome && <MobileCTA />}

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/thank-you" element={<ThankYou />} />
      </Routes>

      {isHome && (
        <footer className="bg-[#2E2E2E] text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12 items-start">
              <div className="flex flex-col items-center md:items-start text-center md:text-left">
                <div className="mb-5">
                  <picture>
                    <source srcSet="/j-salon-logo-footer-250.webp" type="image/webp" />
                    <img
                      src="/j-salon-logo-footer-250.png"
                      alt="J Salon"
                      width="250"
                      height="250"
                      loading="lazy"
                      decoding="async"
                      className="h-32 md:h-48 w-auto object-contain drop-shadow-sm"
                    />
                  </picture>
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
      )}
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}
