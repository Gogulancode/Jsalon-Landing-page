import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

export default function FounderMessage() {
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
 <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-video">
 <iframe
 width="100%"
 height="100%"
 src="https://www.youtube.com/embed/FDORzfKYngA?si=jL67cYpWjf8Pb-dK"
 title="YouTube video player"
 frameBorder="0"
 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
 referrerPolicy="strict-origin-when-cross-origin"
 allowFullScreen
 className="absolute inset-0"
 />
 </div>

 <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-2xl p-6 shadow-2xl">
 <div className="text-center">
 <div className="text-4xl text-white mb-1" >20+</div>
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
 <h2 className="text-4xl md:text-5xl mb-4" >
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
 <p className="text-xl text-white" >Founder, J Salon</p>
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
