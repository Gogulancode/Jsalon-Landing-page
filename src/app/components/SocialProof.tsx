import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { MapPin, TrendingUp, Award } from 'lucide-react';

function Counter({ end, duration = 2000, suffix = '' }: { end: number; duration?: number; suffix?: string }) {
 const [count, setCount] = useState(0);
 const ref = useRef(null);
 const isInView = useInView(ref, { once: true });

 useEffect(() => {
 if (!isInView) return;

 let startTime: number | null = null;
 const animate = (currentTime: number) => {
 if (startTime === null) startTime = currentTime;
 const progress = Math.min((currentTime - startTime) / duration, 1);
 setCount(Math.floor(progress * end));

 if (progress < 1) {
 requestAnimationFrame(animate);
 }
 };

 requestAnimationFrame(animate);
 }, [isInView, end, duration]);

 return (
 <span ref={ref}>
 {count}
 {suffix}
 </span>
 );
}

export default function SocialProof() {
 const stats = [
 {
 icon: MapPin,
 value: 40,
 suffix: '+',
 label: 'Operational Salons',
 color: 'from-yellow-400 to-yellow-600',
 },
 {
 icon: TrendingUp,
 value: 50000,
 suffix: '+',
 label: 'Happy Customers',
 color: 'from-yellow-400 to-yellow-600',
 },
 {
 icon: Award,
 value: 20,
 suffix: ' Years',
 label: 'Industry Experience',
 color: 'from-yellow-400 to-yellow-600',
 },
 ];

 return (
 <section className="py-16 bg-gradient-to-br from-gray-50 to-white border-y border-gray-100">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
 {stats.map((stat, index) => (
 <motion.div
 key={index}
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ delay: index * 0.1 }}
 className="text-center group"
 >
 <div className="relative inline-block mb-4">
 <div className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:shadow-yellow-500/30 transition-all duration-300 group-hover:scale-110`}>
 <stat.icon className="w-8 h-8 text-white" />
 </div>
 <div className="absolute -inset-2 bg-gradient-to-br from-yellow-400/20 to-yellow-600/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
 </div>

 <div className="text-4xl mb-2 bg-gradient-to-r from-yellow-600 to-yellow-800 bg-clip-text text-transparent" >
 <Counter end={stat.value} suffix={stat.suffix} />
 </div>

 <p className="text-gray-600">{stat.label}</p>
 </motion.div>
 ))}
 </div>
 </div>
 </section>
 );
}
