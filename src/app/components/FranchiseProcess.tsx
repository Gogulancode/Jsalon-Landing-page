import { motion } from 'framer-motion';
import { MessageSquare, FileCheck, Handshake, Building, GraduationCap, Rocket } from 'lucide-react';

export default function FranchiseProcess() {
 const steps = [
 {
 icon: MessageSquare,
 title: 'Initial Enquiry',
 description: 'Submit your details and our franchise team will contact you within 24 hours',
 duration: '1 Day',
 },
 {
 icon: FileCheck,
 title: 'Application Review',
 description: 'Complete the franchise application and financial assessment process',
 duration: '3-5 Days',
 },
 {
 icon: Handshake,
 title: 'Agreement Signing',
 description: 'Review and sign the franchise agreement with our legal team',
 duration: '7 Days',
 },
 {
 icon: Building,
 title: 'Location & Setup',
 description: 'Site selection, interior design, equipment installation, and salon setup',
 duration: '45-60 Days',
 },
 {
 icon: GraduationCap,
 title: 'Training Program',
 description: 'Comprehensive training for you and your staff on operations and services',
 duration: '15-20 Days',
 },
 {
 icon: Rocket,
 title: 'Grand Opening',
 description: 'Launch your salon with our marketing and operational support',
 duration: 'Day 1',
 },
 ];

 return (
 <section className="py-16 bg-white">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 <motion.div
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 className="text-center mb-10"
 >
 <div className="inline-block bg-[#2E2E2E] backdrop-blur-sm border border-[#2E2E2E] px-4 py-2 rounded-full mb-6">
 <span className="text-white">Simple Process</span>
 </div>

 <h2 className="text-4xl md:text-5xl mb-6" >
 Your Journey to <span className="text-[#5B4636]">Franchise Success</span>
 </h2>

 <p className="text-xl text-gray-600 max-w-3xl mx-auto">
 From enquiry to grand opening, we guide you through every step of your franchise journey
 </p>
 </motion.div>

 <div className="relative">
 <div className="hidden lg:block absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-yellow-400 via-yellow-500 to-yellow-600" />

 <div className="space-y-8">
 {steps.map((step, index) => (
 <motion.div
 key={index}
 initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
 whileInView={{ opacity: 1, x: 0 }}
 viewport={{ once: true }}
 transition={{ delay: index * 0.1 }}
 className={`relative flex items-center gap-8 ${
 index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
 }`}
 >
 <div className={`flex-1 w-full ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
 <div className={`bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 ${
 index % 2 === 0 ? 'lg:ml-auto' : 'lg:mr-auto'
 } max-w-md mx-auto`}>
 <div className={`flex items-center gap-4 mb-4 ${index % 2 === 0 ? 'lg:flex-row-reverse' : ''}`}>
 <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-xl flex items-center justify-center shadow-lg flex-shrink-0">
 <step.icon className="w-8 h-8 text-white" />
 </div>
 <div className={index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}>
 <div className="text-sm text-yellow-600 mb-1">Step {index + 1}</div>
 <h3 className="text-2xl" >
 {step.title}
 </h3>
 </div>
 </div>

 <p className="text-gray-600 mb-4">{step.description}</p>

 <div className="inline-block bg-yellow-500/10 border border-yellow-500/30 px-4 py-2 rounded-lg">
 <span className="text-yellow-700 text-sm">Duration: {step.duration}</span>
 </div>
 </div>
 </div>

 <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full border-4 border-white shadow-lg z-10" />

 <div className="flex-1 hidden lg:block" />
 </motion.div>
 ))}
 </div>
 </div>

 <motion.div
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 className="mt-10 text-center"
 >
 <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 shadow-2xl">
 <h3 className="text-3xl md:text-4xl text-white mb-4" >
 Ready to Begin Your Journey?
 </h3>
 <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
 Take the first step towards owning a premium salon franchise. Our team is ready to guide you.
 </p>
 <button
 onClick={() => {
 const formElement = document.getElementById('hero-form');
 formElement?.scrollIntoView({ behavior: 'smooth', block: 'center' });
 }}
 className="bg-[#F2E3A6] text-[#2E2E2E] px-8 py-4 rounded-lg text-lg transition-all duration-300 hover:bg-[#DCC6B3] hover:scale-105"
 >
 Start Application Process
 </button>
 </div>
 </motion.div>
 </div>
 </section>
 );
}
