import { motion } from 'framer-motion';
import { Award, Users, TrendingUp, Lightbulb, Headphones, GraduationCap, LineChart, ShieldCheck } from 'lucide-react';

export default function WhyChooseUs() {
 const benefits = [
 {
 icon: Award,
 title: 'Established Brand Legacy',
 description: '20 years of parent company expertise with globally recognized brand status and proven franchise model.',
 },
 {
 icon: Users,
 title: 'Complete Recruitment Support',
 description: 'Expert hiring assistance and professional training from industry veterans to build your dream team.',
 },
 {
 icon: LineChart,
 title: 'Marketing & PR Assistance',
 description: 'Comprehensive marketing strategies, PR support, and business generation systems to drive growth.',
 },
 {
 icon: GraduationCap,
 title: 'Expert Training Ecosystem',
 description: 'Continuous training programs for staff development in latest beauty techniques and customer service.',
 },
 {
 icon: Lightbulb,
 title: 'Operational Excellence',
 description: 'IT systems, PoS billing, inventory management, and strategic guidance for seamless operations.',
 },
 {
 icon: ShieldCheck,
 title: 'End-to-End Setup Support',
 description: 'From location selection to grand opening, we provide comprehensive support at every stage.',
 },
 {
 icon: TrendingUp,
 title: 'Proven ROI Timeline',
 description: 'Projected 12-18 months ROI with scalable business model and multiple revenue streams.',
 },
 {
 icon: Headphones,
 title: 'Continuous Strategic Guidance',
 description: 'Ongoing support and mentorship from franchise experts to ensure long-term success.',
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
 <span className="text-white">Why Partner With Us</span>
 </div>

 <h2 className="text-4xl md:text-5xl mb-6" >
 Why Choose <span className="text-[#5B4636]">J Salon</span>
 </h2>

 <p className="text-xl text-gray-600 max-w-3xl mx-auto">
 Join India's most trusted premium salon franchise network backed by 20 years of expertise
 </p>
 </motion.div>

 <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
 {benefits.map((benefit, index) => (
 <motion.div
 key={index}
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ delay: index * 0.05 }}
 className="group relative bg-gradient-to-br from-white to-gray-50 p-6 rounded-2xl border border-gray-100 hover:border-yellow-500/30 hover:shadow-2xl hover:shadow-yellow-500/10 transition-all duration-300 hover:-translate-y-2"
 >
 <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

 <div className="relative">
 <div className="w-14 h-14 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:shadow-xl group-hover:shadow-yellow-500/30 transition-all duration-300 group-hover:scale-110">
 <benefit.icon className="w-7 h-7 text-white" />
 </div>

 <h3 className="text-xl mb-3 text-gray-900">
 {benefit.title}
 </h3>

 <p className="text-gray-600 leading-relaxed">
 {benefit.description}
 </p>
 </div>
 </motion.div>
 ))}
 </div>

 <motion.div
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 className="mt-8 text-center"
 >
 <button
 onClick={() => {
 const formElement = document.getElementById('hero-form');
 formElement?.scrollIntoView({ behavior: 'smooth', block: 'center' });
 }}
 className="bg-[#2E2E2E] text-white px-8 py-4 rounded-lg text-lg transition-all duration-300 hover:bg-[#5B4636] hover:scale-105"
 >
 Start Your Franchise Journey
 </button>
 </motion.div>
 </div>
 </section>
 );
}
