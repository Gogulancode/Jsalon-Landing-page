import { motion } from 'framer-motion';
import { useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Testimonials() {
 const [currentIndex, setCurrentIndex] = useState(0);

 const testimonials = [
 {
 name: 'Vaishali Shah',
 location: 'Mumbai',
 role: 'Franchise Owner',
 rating: 5,
 image: 'https://images.unsplash.com/photo-1614438865362-9137f7e3036e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw3fHxwcmVtaXVtJTIwYmVhdXR5JTIwc2Fsb24lMjBlbGVnYW50JTIwbW9kZXJufGVufDF8fHx8MTc3ODc1NDY2NHww&ixlib=rb-4.1.0&q=80&w=400',
 quote: 'The support from J Salon has been extremely helpful throughout my journey - from setup to stabilization. The training programs and marketing assistance have been instrumental in our success.',
 businessAge: '2 years',
 },
 {
 name: 'Jiten Shah',
 location: 'Hyderabad',
 role: 'Franchise Owner',
 rating: 5,
 image: 'https://images.unsplash.com/photo-1600948836101-f9ffda59d250?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVtaXVtJTIwYmVhdXR5JTIwc2Fsb24lMjBlbGVnYW50JTIwbW9kZXJufGVufDF8fHx8MTc3ODc1NDY2NHww&ixlib=rb-4.1.0&q=80&w=400',
 quote: 'Our partnership with J Salon has been unwavering, fostering innovation and growth. The continuous strategic guidance and operational support have exceeded our expectations.',
 businessAge: '3 years',
 },
 {
 name: 'Mahesh Chavan',
 location: 'Navi Mumbai (Seawoods)',
 role: 'Franchise Owner',
 rating: 5,
 image: 'https://images.unsplash.com/photo-1706629503650-cade709d15e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw2fHxwcmVtaXVtJTIwYmVhdXR5JTIwc2Fsb24lMjBlbGVnYW50JTIwbW9kZXJufGVufDF8fHx8MTc3ODc1NDY2NHww&ixlib=rb-4.1.0&q=80&w=400',
 quote: 'J Salon\'s brand presence is felt all the time, especially during challenging situations. Their recruitment support and training ecosystem are world-class.',
 businessAge: '18 months',
 },
 {
 name: 'Priya Deshmukh',
 location: 'Pune',
 role: 'Franchise Owner',
 rating: 5,
 image: 'https://images.unsplash.com/photo-1706629505300-168aa1604912?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxwcmVtaXVtJTIwYmVhdXR5JTIwc2Fsb24lMjBlbGVnYW50JTIwbW9kZXJufGVufDF8fHx8MTc3ODc1NDY2NHww&ixlib=rb-4.1.0&q=80&w=400',
 quote: 'As a first-time entrepreneur, the comprehensive training and setup support gave me the confidence to succeed. The ROI projections were accurate and we\'re already seeing strong returns.',
 businessAge: '1 year',
 },
 ];

 const nextTestimonial = () => {
 setCurrentIndex((prev) => (prev + 1) % testimonials.length);
 };

 const prevTestimonial = () => {
 setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
 };

 return (
 <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 <motion.div
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 className="text-center mb-10"
 >
 <div className="inline-block bg-[#2E2E2E] backdrop-blur-sm border border-[#2E2E2E] px-4 py-2 rounded-full mb-6">
 <span className="text-white">Success Stories</span>
 </div>

 <h2 className="text-4xl md:text-5xl mb-6" >
 Hear from Our <span className="text-[#5B4636]">Franchise Partners</span>
 </h2>

 <p className="text-xl text-gray-600 max-w-3xl mx-auto">
 Join successful entrepreneurs who transformed their dreams into thriving businesses
 </p>
 </motion.div>

 <div className="relative max-w-5xl mx-auto">
 <motion.div
 key={currentIndex}
 initial={{ opacity: 0, x: 100 }}
 animate={{ opacity: 1, x: 0 }}
 exit={{ opacity: 0, x: -100 }}
 className="bg-white rounded-3xl shadow-2xl overflow-hidden"
 >
 <div className="grid md:grid-cols-5 gap-8">
 <div className="md:col-span-2 relative h-64 md:h-auto">
 <img
 src={testimonials[currentIndex].image}
 alt={testimonials[currentIndex].name}
 className="w-full h-full object-cover"
 />
 <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
 <div className="absolute bottom-6 left-6 right-6">
 <h3 className="text-2xl text-white mb-1" >
 {testimonials[currentIndex].name}
 </h3>
 <p className="text-yellow-400">{testimonials[currentIndex].location}</p>
 <p className="text-gray-300 text-sm mt-1">
 {testimonials[currentIndex].role} • {testimonials[currentIndex].businessAge}
 </p>
 </div>
 </div>

 <div className="md:col-span-3 p-8 md:p-12 flex flex-col justify-center">
 <Quote className="w-12 h-12 text-yellow-500 mb-6" />

 <div className="flex gap-1 mb-6">
 {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
 <Star key={i} className="w-5 h-5 fill-yellow-500 text-yellow-500" />
 ))}
 </div>

 <p className="text-xl text-gray-700 leading-relaxed mb-6 italic">
 "{testimonials[currentIndex].quote}"
 </p>

 <div className="flex items-center gap-4">
 <div className="h-1 flex-1 bg-gray-200 rounded-full overflow-hidden">
 <div
 className="h-full bg-gradient-to-r from-yellow-400 to-yellow-600 transition-all duration-500"
 style={{ width: `${((currentIndex + 1) / testimonials.length) * 100}%` }}
 />
 </div>
 <span className="text-sm text-gray-500">
 {currentIndex + 1} / {testimonials.length}
 </span>
 </div>
 </div>
 </div>
 </motion.div>

 <button
 onClick={prevTestimonial}
 className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-[#2E2E2E] rounded-full shadow-lg flex items-center justify-center hover:bg-[#5B4636] transition-all hover:scale-110"
 >
 <ChevronLeft className="w-6 h-6 text-white" />
 </button>

 <button
 onClick={nextTestimonial}
 className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-[#2E2E2E] rounded-full shadow-lg flex items-center justify-center hover:bg-[#5B4636] transition-all hover:scale-110"
 >
 <ChevronRight className="w-6 h-6 text-white" />
 </button>
 </div>

 <div className="flex justify-center gap-2 mt-6">
 {testimonials.map((_, index) => (
 <button
 key={index}
 onClick={() => setCurrentIndex(index)}
 className={`w-3 h-3 rounded-full transition-all duration-300 ${
 index === currentIndex
 ? 'bg-[#2E2E2E] w-8'
 : 'bg-gray-300 hover:bg-gray-400'
 }`}
 />
 ))}
 </div>
 </div>
 </section>
 );
}
