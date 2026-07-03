import { motion } from 'framer-motion';
import { IndianRupee, TrendingUp, MapPin, Users, Package } from 'lucide-react';

export default function InvestmentSnapshot() {
 const investmentDetails = [
 {
 icon: IndianRupee,
 label: 'Total Investment',
 value: '₹25-45 Lakhs',
 description: 'Varies by city and location',
 gradient: 'from-yellow-400 to-yellow-600',
 },
 {
 icon: TrendingUp,
 label: 'Projected ROI',
 value: '18-24 Months',
 description: 'Based on location and operations',
 gradient: 'from-green-400 to-green-600',
 },
 {
 icon: MapPin,
 label: 'Space Required',
 value: '500-800 sq ft',
 description: 'Prime retail location',
 gradient: 'from-blue-400 to-blue-600',
 },
 {
 icon: Users,
 label: 'Team Size',
 value: '8-15 Staff',
 description: 'Stylists, beauticians & support',
 gradient: 'from-purple-400 to-purple-600',
 },
 ];

 const inclusionItems = [
 'Complete salon setup & interior design',
 'Branded equipment & furniture',
 'Initial inventory & product stock',
 'IT systems & PoS billing software',
 'Marketing & branding materials',
 'Staff recruitment & training',
 'Grand opening support',
 'Ongoing operational guidance',
 ];

 return (
 <section className="py-16 bg-gradient-to-br from-white to-gray-50">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 <motion.div
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 className="text-center mb-10"
 >
 <div className="inline-block bg-[#2E2E2E] backdrop-blur-sm border border-[#2E2E2E] px-4 py-2 rounded-full mb-6">
 <span className="text-white">Investment Details</span>
 </div>

 <h2 className="text-4xl md:text-5xl mb-6" >
 Investment <span className="text-[#5B4636]">Snapshot</span>
 </h2>

 <p className="text-xl text-gray-600 max-w-3xl mx-auto">
 Transparent pricing with comprehensive support to ensure your success from day one
 </p>
 </motion.div>

 <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
 {investmentDetails.map((item, index) => (
 <motion.div
 key={index}
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ delay: index * 0.1 }}
 className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
 >
 <div className={`w-14 h-14 bg-gradient-to-br ${item.gradient} rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}>
 <item.icon className="w-7 h-7 text-white" />
 </div>

 <p className="text-sm text-gray-600 mb-2">{item.label}</p>
 <h3 className="text-2xl mb-2" >
 {item.value}
 </h3>
 <p className="text-sm text-gray-500">{item.description}</p>
 </motion.div>
 ))}
 </div>

 <motion.div
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 md:p-12 shadow-2xl"
 >
 <div className="max-w-4xl mx-auto">
 <div className="flex items-center gap-3 mb-6 justify-center">
 <Package className="w-8 h-8 text-yellow-500" />
 <h3 className="text-3xl text-white" >
 What's Included
 </h3>
 </div>

 <p className="text-gray-400 text-lg mb-8 text-center">
 Your investment covers everything you need for a successful franchise launch
 </p>

 <div className="grid md:grid-cols-2 gap-4">
 {inclusionItems.map((item, index) => (
 <motion.div
 key={index}
 initial={{ opacity: 0, x: -20 }}
 whileInView={{ opacity: 1, x: 0 }}
 viewport={{ once: true }}
 transition={{ delay: index * 0.05 }}
 className="flex items-start gap-3"
 >
 <div className="w-6 h-6 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
 <svg
 className="w-4 h-4 text-white"
 fill="none"
 stroke="currentColor"
 viewBox="0 0 24 24"
 >
 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
 </svg>
 </div>
 <span className="text-gray-300">{item}</span>
 </motion.div>
 ))}
 </div>
 </div>
 </motion.div>
 </div>
 </section>
 );
}
