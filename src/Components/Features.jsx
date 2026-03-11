import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  FileCheck, 
  UserCheck, 
  Sparkles, 
  MessageSquare, 
  FileText, 
  CalendarClock,
  ArrowRight
} from 'lucide-react';

export default function Features() {
  // Yahan humne Icon ka JSX (<Icon />) nahi, balki seedha component reference pass kiya hai
  const features = [
    {
      title: "Verified listings",
      description: "Every property listed on Guru Kripa is confirmed against documentation before it appears in search results. No ghost listings, no misleading photographs, no properties already occupied.",
      icon: FileCheck 
    },
    {
      title: "Verified profiles",
      description: "Tenants and landlords both complete a verification process before they can contact each other. Identity, rental history, and references are checked at the level the platform requires.",
      icon: UserCheck
    },
    {
      title: "AI-driven matching",
      description: "The system matches tenants to properties based on budget, location, size, duration, lifestyle preferences, and landlord requirements - not just keyword search.",
      icon: Sparkles
    },
    {
      title: "Direct communication",
      description: "Matched parties connect through the platform directly, with no mandatory broker intermediary and no commission fee on either side.",
      icon: MessageSquare
    },
    {
      title: "Digital documentation",
      description: "Rental agreements, move-in checklists, and deposit records handled through the platform with a clear record both parties can access.",
      icon: FileText
    },
    {
      title: "Built for long-term rentals",
      description: "Guru Kripa is designed for the 6-month, 1-year, and 2-year rental market, not short-stay or hospitality. The matching criteria and platform features reflect that.",
      icon: CalendarClock
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <section className="py-20 lg:py-32 bg-slate-50 relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#2563eb 1px, transparent 1px)', backgroundSize: '32px 32px' }}>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 lg:mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-6"
          >
            What makes <span className="text-blue-600">Guru Kripa</span> different
          </motion.h2>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-slate-600 leading-relaxed font-medium bg-white/60 p-6 rounded-2xl border border-slate-200/60 shadow-sm"
          >
            <p>
              Most rental platforms are listing directories. They show you what is available. What happens next is up to you: call the number, find out the listing is four months old, start again. 
            </p>
            <p className="mt-4 text-slate-900 font-semibold">
              Guru Kripa is a matching platform. It learns what you need - or what your property requires - and connects you with the right match, verified and ready to proceed.
            </p>
          </motion.div>
        </div>

        {/* Feature Cards Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {features.map((feature, index) => {
            // Yahan hum dynamic component render kar rahe hain
            const IconComponent = feature.icon; 
            
            return (
              <motion.div 
                key={index} 
                variants={cardVariants}
                className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-blue-600 transition-all duration-300">
                  <IconComponent className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4 tracking-tight">
                  {feature.title}
                </h3>
                <p className="text-slate-600 leading-relaxed text-sm font-medium">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row justify-center items-center gap-4"
        >
          <Link 
            to="/find-home" 
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-blue-600 hover:bg-slate-900 text-white px-10 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg shadow-blue-500/30"
          >
            Find Your Home <ArrowRight className="w-5 h-5" />
          </Link>
          <Link 
            to="/list-property" 
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white hover:bg-blue-50 text-slate-900 border-2 border-slate-200 hover:border-blue-200 px-10 py-4 rounded-xl font-bold text-lg transition-all duration-300"
          >
            List Your Property
          </Link>
        </motion.div>

      </div>
    </section>
  );
}