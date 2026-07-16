import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowLeft, Phone, Mail } from 'lucide-react';

export default function ThankYou() {
  useEffect(() => {
    // GTM conversion event for a successful franchise enquiry
    if (typeof window !== 'undefined' && window.dataLayer) {
      window.dataLayer.push({
        event: 'franchise_enquiry_submit',
        conversionValue: 1,
        currency: 'INR',
      });
    }

    // Meta Pixel conversion event
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', 'Lead');
    }
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(0, 0, 0, 0.85) 0%, rgba(0, 0, 0, 0.65) 100%), url('/hero-bg.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      <div className="relative z-10 max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 text-center border-2 border-yellow-500/20"
        >
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-[#F2E3A6] rounded-full flex items-center justify-center">
              <CheckCircle className="w-10 h-10 text-[#2E2E2E]" />
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl mb-4 text-[#2E2E2E]">
            Thank You!
          </h1>

          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Your franchise enquiry has been received. Our team will review your details and get back to you shortly to discuss the next steps.
          </p>

          <div className="bg-[#F7F4EE] rounded-2xl p-6 mb-8 text-left">
            <h2 className="text-lg font-semibold text-[#2E2E2E] mb-4">What happens next?</h2>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-[#F2E3A6] text-[#2E2E2E] flex items-center justify-center text-sm flex-shrink-0">1</span>
                <span>Our franchise consultant will call you within 24-48 hours.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-[#F2E3A6] text-[#2E2E2E] flex items-center justify-center text-sm flex-shrink-0">2</span>
                <span>We will share the detailed franchise information kit.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-[#F2E3A6] text-[#2E2E2E] flex items-center justify-center text-sm flex-shrink-0">3</span>
                <span>Schedule a one-on-one discussion with our team.</span>
              </li>
            </ul>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            <a
              href="tel:+919876543210"
              className="flex items-center justify-center gap-2 text-[#5B4636] bg-[#F2E3A6] px-5 py-3 rounded-lg hover:bg-[#DCC6B3] transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span>+91 98765 43210</span>
            </a>
            <a
              href="mailto:franchise@jsalons.co"
              className="flex items-center justify-center gap-2 text-[#5B4636] bg-[#F2E3A6] px-5 py-3 rounded-lg hover:bg-[#DCC6B3] transition-colors"
            >
              <Mail className="w-5 h-5" />
              <span>franchise@jsalons.co</span>
            </a>
          </div>

          <a
            href="/"
            className="inline-flex items-center gap-2 bg-[#2E2E2E] text-white px-8 py-4 rounded-lg transition-all duration-300 hover:bg-[#5B4636] hover:scale-105"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </a>
        </motion.div>
      </div>
    </div>
  );
}
