import { useRef, useState } from 'react';
import { CheckCircle, TrendingUp, Award } from 'lucide-react';
import emailjs from '@emailjs/browser';

export default function Hero() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current || status === 'sending') return;

    setStatus('sending');
    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID?.trim(),
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID?.trim(),
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY?.trim()
      )
      .then(
        () => {
          setStatus('success');
          formRef.current?.reset();
        },
        () => {
          setStatus('error');
        }
      );
  };

  return (
    <div className="relative min-h-screen flex items-center">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(0, 0, 0, 0.85) 0%, rgba(0, 0, 0, 0.65) 100%), url('/hero-bg.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 md:py-16 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-left">
            <div
              className="animate-fade-in-up inline-block bg-yellow-500/20 backdrop-blur-sm border border-yellow-500/30 px-4 py-2 rounded-full mb-6"
              style={{ animationDelay: '0.2s' }}
            >
              <span className="text-yellow-400 text-sm">J Salon – A Mass Premium Salon Brand</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl mb-6 text-white">
              Own a Salon Franchise
              <span className="block text-[#F2E3A6] mt-2">in Your City</span>
            </h1>

            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Build a scalable beauty business with expert training, recruitment support, operational excellence, and powerful marketing systems.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              <div
                className="animate-fade-in-up bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 hover:bg-white/15 transition-all duration-300"
                style={{ animationDelay: '0.4s' }}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-yellow-400 text-sm">Investment</span>
                </div>
                <p className="text-white text-lg">From ₹25 Lakhs+</p>
              </div>

              <div
                className="animate-fade-in-up bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 hover:bg-white/15 transition-all duration-300"
                style={{ animationDelay: '0.5s' }}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center">
                    <Award className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-yellow-400 text-sm">ROI Timeline</span>
                </div>
                <p className="text-white text-lg">18-24 Months</p>
              </div>

              <div
                className="animate-fade-in-up bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 hover:bg-white/15 transition-all duration-300"
                style={{ animationDelay: '0.6s' }}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-yellow-400 text-sm">Experience</span>
                </div>
                <p className="text-white text-lg">20+ Years</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => {
                  const formElement = document.getElementById('hero-form');
                  formElement?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }}
                className="bg-[#F2E3A6] text-[#2E2E2E] px-8 py-4 rounded-lg text-lg transition-all duration-300 hover:bg-[#DCC6B3] hover:scale-105"
              >
                Get Franchise Details
              </button>
            </div>
          </div>

          <div
            id="hero-form"
            className="animate-fade-in-right bg-white rounded-2xl shadow-2xl p-8 border-2 border-yellow-500/20 self-start mt-16"
          >
            <div className="text-center mb-6">
              <h3 className="text-3xl mb-2">Start Your Journey</h3>
              <p className="text-gray-600">Fill the form to get detailed franchise information</p>
            </div>

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-2">Full Name *</label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  required
                  placeholder="Enter your full name"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500/20 focus:border-yellow-500"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-gray-700 mb-2">Phone Number *</label>
                <input
                  id="phone"
                  type="tel"
                  name="phone"
                  required
                  placeholder="+91 XXXXX XXXXX"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500/20 focus:border-yellow-500"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-700 mb-2">Email Address *</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  required
                  placeholder="your.email@example.com"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500/20 focus:border-yellow-500"
                />
              </div>

              <div>
                <label htmlFor="city" className="block text-gray-700 mb-2">City *</label>
                <input
                  id="city"
                  type="text"
                  name="city"
                  required
                  placeholder="Your city"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500/20 focus:border-yellow-500"
                />
              </div>

              <div>
                <label htmlFor="budget" className="block text-gray-700 mb-2">Investment Budget *</label>
                <select
                  id="budget"
                  name="budget"
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500/20 focus:border-yellow-500"
                >
                  <option value="" disabled selected>Select budget range</option>
                  <option>₹20-30 Lakhs</option>
                  <option>₹30-40 Lakhs</option>
                  <option>₹40-50 Lakhs</option>
                  <option>₹50+ Lakhs</option>
                </select>
              </div>

              <div>
                <label htmlFor="experience" className="block text-gray-700 mb-2">Business Experience</label>
                <select
                  id="experience"
                  name="experience"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500/20 focus:border-yellow-500"
                >
                  <option value="" disabled selected>Select experience level</option>
                  <option>First-time entrepreneur</option>
                  <option>1-3 years</option>
                  <option>3-5 years</option>
                  <option>5+ years</option>
                </select>
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full bg-[#2E2E2E] text-white py-4 rounded-lg transition-all duration-300 hover:bg-[#5B4636] hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {status === 'sending' ? 'Sending...' : 'Get Franchise Details'}
              </button>

              {status === 'success' && (
                <p className="text-sm text-green-600 text-center">Thank you! We will contact you shortly.</p>
              )}
              {status === 'error' && (
                <p className="text-sm text-red-600 text-center">Something went wrong. Please try again.</p>
              )}

              <p className="text-xs text-gray-500 text-center">
                By submitting, you agree to receive franchise information via email & SMS
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
