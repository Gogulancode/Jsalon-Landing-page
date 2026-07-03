import { motion } from 'framer-motion';
import { Clock, MapPin, TrendingUp } from 'lucide-react';

export default function ScarcityCTA() {
 return (
 <section className="py-16 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
 <div className="absolute inset-0 opacity-20">
 <div className="absolute top-0 left-1/4 w-96 h-96 bg-yellow-500 rounded-full blur-3xl" />
 <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-600 rounded-full blur-3xl" />
 </div>

 <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
 <motion.div
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 className="text-center mb-8"
 >
 <motion.div
 initial={{ scale: 0 }}
 whileInView={{ scale: 1 }}
 viewport={{ once: true }}
 className="inline-flex items-center gap-2 bg-red-500/20 backdrop-blur-sm border border-red-500/30 px-4 py-2 rounded-full mb-6"
 >
 <Clock className="w-4 h-4 text-red-400" />
 <span className="text-red-400">Limited Availability</span>
 </motion.div>

 <h2 className="text-4xl md:text-6xl text-white mb-6" >
 Don't Miss This Opportunity
 </h2>

 <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
 We're accepting only <span className="text-yellow-400">10 new franchise partners</span> this quarter to ensure quality support and success for each location
 </p>
 </motion.div>

 <div className="grid md:grid-cols-3 gap-6 mb-8">
 <motion.div
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ delay: 0.1 }}
 className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center hover:bg-white/15 transition-all duration-300"
 >
 <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
 <MapPin className="w-8 h-8 text-white" />
 </div>
 <h3 className="text-2xl text-white mb-2" >
 Prime Territories
 </h3>
 <p className="text-gray-400">
 Secure your preferred city before someone else does
 </p>
 </motion.div>

 <motion.div
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ delay: 0.2 }}
 className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center hover:bg-white/15 transition-all duration-300"
 >
 <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
 <TrendingUp className="w-8 h-8 text-white" />
 </div>
 <h3 className="text-2xl text-white mb-2" >
 Early Bird Benefits
 </h3>
 <p className="text-gray-400">
 Special discounts and waived fees for first 10 applicants
 </p>
 </motion.div>

 <motion.div
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ delay: 0.3 }}
 className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center hover:bg-white/15 transition-all duration-300"
 >
 <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
 <Clock className="w-8 h-8 text-white" />
 </div>
 <h3 className="text-2xl text-white mb-2" >
 Fast-Track Setup
 </h3>
 <p className="text-gray-400">
 Priority support for faster launch and operations
 </p>
 </motion.div>
 </div>

 <motion.div
 initial={{ opacity: 0, scale: 0.95 }}
 whileInView={{ opacity: 1, scale: 1 }}
 viewport={{ once: true }}
 className="bg-gradient-to-br from-yellow-500/20 to-yellow-600/20 backdrop-blur-sm border border-yellow-500/30 rounded-3xl p-8 text-center"
 >
 <h3 className="text-3xl md:text-4xl text-white mb-6" >
 Ready to Claim Your Spot?
 </h3>

 <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
 Join the exclusive network of premium salon franchise owners. Fill out the enquiry form now to secure your territory and receive a comprehensive franchise brochure.
 </p>

 <div className="flex justify-center">
 <button
 onClick={() => {
 const formElement = document.getElementById('hero-form');
 formElement?.scrollIntoView({ behavior: 'smooth', block: 'center' });
 }}
 className="bg-[#F2E3A6] text-[#2E2E2E] px-10 py-5 rounded-lg text-lg transition-all duration-300 hover:bg-[#DCC6B3] hover:scale-105"
 >
 Apply Now - Limited Spots
 </button>
 </div>

 <p className="text-gray-400 text-sm mt-4">
 Only <span className="text-yellow-400">6 territories</span> remaining this quarter
 </p>
 </motion.div>
 </div>
 </section>
 );
}
