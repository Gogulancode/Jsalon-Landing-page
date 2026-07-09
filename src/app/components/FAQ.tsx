import { motion } from 'framer-motion';
import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

export default function FAQ() {
 const [openIndex, setOpenIndex] = useState<number | null>(0);

 const faqs = [
 {
 question: 'What is the total investment required for a J Salon franchise?',
 answer: 'The total investment ranges from ₹25-45 lakhs, depending on your city, location, and salon size. This includes setup costs, equipment, initial inventory, training, and marketing materials. Our team will provide a detailed breakdown based on your specific requirements.',
 },
 {
 question: 'How long does it take to break even and see returns?',
 answer: 'Based on our franchise network data, most franchises achieve break-even within 18-24 months. The actual timeline depends on factors like location, operational efficiency, and market conditions. We provide continuous support to help you optimize performance and reach profitability faster.',
 },
 {
 question: 'What kind of support does J Salon provide to franchisees?',
 answer: 'We offer comprehensive end-to-end support including: site selection assistance, complete salon setup, interior design, equipment procurement, staff recruitment and training, marketing and PR assistance, IT systems and PoS billing, operational guidance, and continuous strategic mentorship.',
 },
 {
 question: 'Do I need prior experience in the salon or beauty industry?',
 answer: 'No prior salon experience is required! We provide extensive training programs covering all aspects of salon operations, customer service, beauty treatments, and business management. Many of our successful franchise partners are first-time entrepreneurs.',
 },
 {
 question: 'What space requirements are needed for a J Salon franchise?',
 answer: 'Typically, you need 500-800 square feet of retail space in a prime location with good visibility and accessibility. Our team will help you identify the perfect location and design an efficient layout that maximizes your space.',
 },
 {
 question: 'How does the franchise application and approval process work?',
 answer: 'The process includes: (1) Initial enquiry and discussion, (2) Application submission and financial assessment, (3) Business plan review, (4) Agreement signing, (5) Location selection and setup, (6) Training program, and (7) Grand opening support. The entire process typically takes 30-45 days.',
 },
 {
 question: 'What are the ongoing fees and royalties?',
 answer: 'Details about ongoing royalty fees and marketing contributions will be provided during the application process. We believe in transparent pricing and will share a complete financial breakdown including all fees, projected revenues, and expenses.',
 },
 {
 question: 'Can I own multiple J Salon franchises?',
 answer: 'Yes! Many of our successful franchisees operate multiple locations. Once you establish a successful first salon, we encourage expansion and provide additional support for multi-unit franchise owners.',
 },
 {
 question: 'What makes J Salon different from other salon franchises?',
 answer: 'J Salon stands out with 20 years of industry expertise, comprehensive recruitment and training support, proprietary nail products, continuous marketing assistance, and strong brand recognition with 50,000+ loyal customers.',
 },
 {
 question: 'What territories or cities are available for franchising?',
 answer: 'We are expanding across India and have opportunities in most tier 1, tier 2, and tier 3 cities. Contact our franchise team to check availability in your desired location. We follow a territorial exclusivity policy to protect your investment.',
 },
 ];

 return (
 <section className="py-16 bg-white">
 <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
 <motion.div
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 className="text-center mb-10"
 >
 <div className="inline-block bg-[#2E2E2E] backdrop-blur-sm border border-[#2E2E2E] px-4 py-2 rounded-full mb-6">
 <span className="text-white">Got Questions?</span>
 </div>

 <h2 className="text-4xl md:text-5xl mb-6" >
 Frequently Asked <span className="text-[#5B4636]">Questions</span>
 </h2>

 <p className="text-xl text-gray-600">
 Everything you need to know about J Salon franchise opportunities
 </p>
 </motion.div>

 <div className="space-y-4">
 {faqs.map((faq, index) => (
 <motion.div
 key={index}
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ delay: index * 0.05 }}
 className="bg-gradient-to-br from-white to-gray-50 rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
 >
 <button
 onClick={() => setOpenIndex(openIndex === index ? null : index)}
 className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50/50 transition-colors"
 >
 <span className="text-lg pr-8" >
 {faq.question}
 </span>
 <div className={`flex-shrink-0 w-8 h-8 rounded-full bg-[#2E2E2E] flex items-center justify-center transition-transform duration-300 ${
 openIndex === index ? 'rotate-180' : ''
 }`}>
 {openIndex === index ? (
 <Minus className="w-5 h-5 text-white" />
 ) : (
 <Plus className="w-5 h-5 text-white" />
 )}
 </div>
 </button>

 <motion.div
 initial={false}
 animate={{
 height: openIndex === index ? 'auto' : 0,
 opacity: openIndex === index ? 1 : 0,
 }}
 transition={{ duration: 0.3 }}
 className="overflow-hidden"
 >
 <div className="px-6 pb-6">
 <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
 </div>
 </motion.div>
 </motion.div>
 ))}
 </div>

 <motion.div
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 className="mt-8 text-center bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 shadow-2xl"
 >
 <h3 className="text-2xl text-white mb-4" >
 Still Have Questions?
 </h3>
 <p className="text-gray-400 mb-6">
 Our franchise team is here to help. Get personalized answers to all your queries.
 </p>
 <button
 onClick={() => {
 const formElement = document.getElementById('hero-form');
 formElement?.scrollIntoView({ behavior: 'smooth', block: 'center' });
 }}
 className="bg-[#F2E3A6] text-[#2E2E2E] px-8 py-4 rounded-lg transition-all duration-300 hover:bg-[#DCC6B3] hover:scale-105"
 >
 Talk to Our Team
 </button>
 </motion.div>
 </div>
 </section>
 );
}
