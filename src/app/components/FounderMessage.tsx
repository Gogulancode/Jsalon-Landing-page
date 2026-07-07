import { useState } from 'react';
import { motion } from 'framer-motion';
import { Quote, Play } from 'lucide-react';

export default function FounderMessage() {
  const [loadVideo, setLoadVideo] = useState(false);

  return (
    <section className="py-16 bg-gradient-to-br from-gray-900 to-black text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-500 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-600 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-video bg-gray-800">
              {loadVideo ? (
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/FDORzfKYngA?si=jL67cYpWjf8Pb-dK&autoplay=1"
                  title="Founder message video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  className="absolute inset-0"
                />
              ) : (
                <>
                  <img
                    src="/founder-video-poster.jpg"
                    alt="Founder message video thumbnail"
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30" />
                  <button
                    type="button"
                    onClick={() => setLoadVideo(true)}
                    aria-label="Play founder message video"
                    className="absolute inset-0 flex items-center justify-center group"
                  >
                    <span className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center pl-1 shadow-2xl transition-transform duration-300 group-hover:scale-110 group-focus:scale-110">
                      <Play className="w-8 h-8 text-[#2E2E2E] fill-current" />
                    </span>
                  </button>
                </>
              )}
            </div>

            <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-2xl p-6 shadow-2xl">
              <div className="text-center">
                <div className="text-4xl text-white mb-1">20+</div>
                <div className="text-white text-sm">Years Legacy</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="mb-6">
              <Quote className="w-16 h-16 text-yellow-500 mb-4" />
              <h2 className="text-4xl md:text-5xl mb-4">
                A Message from Our Founder
              </h2>
            </div>

            <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
              <p>
                "At J Salon, we believe in empowering entrepreneurs to build successful beauty businesses. With over 20 years of experience in the salon industry, we've created a franchise model that combines our proven operational expertise with your entrepreneurial vision."
              </p>

              <p>
                "Our journey began with Juice Salon, and today we're proud to support franchise partners across India. Each franchise partner becomes part of our family, benefiting from our comprehensive support systems, training programs, and marketing expertise."
              </p>

              <p>
                "We don't just offer a franchise - we offer a partnership. From your first day to your first anniversary and beyond, we're committed to your success. Our proprietary systems, recruitment support, and continuous guidance ensure you're never alone in your entrepreneurial journey."
              </p>

              <p className="text-yellow-400">
                "Join us in embracing the natural way to success. Together, we'll build not just a business, but a legacy."
              </p>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-700">
              <div className="flex items-center gap-4">
                <div>
                  <p className="text-xl text-white">Founder, J Salon</p>
                  <p className="text-gray-400">Building India's Premier Salon Network</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
