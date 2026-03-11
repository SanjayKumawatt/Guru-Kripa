import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Search, Home as HomeIcon } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center lg:justify-start pt-20">
      
      {/* Immersive Background Image */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=100")' 
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-transparent"></div>
        <div className="absolute inset-0 bg-slate-900/5"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Glassmorphism Content Card */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl bg-white/70 backdrop-blur-2xl border border-white/60 rounded-[2rem] p-8 md:p-12 shadow-2xl shadow-slate-200/50"
        >
          <h1 className="text-3xl md:text-4xl lg:text-[2.75rem] font-extrabold text-slate-900 leading-[1.2] mb-8 tracking-tight">
            <span className="block mb-2">To the person looking for a home.</span>
            <span className="block mb-2">To the person with a home to rent.</span>
            <span className="text-blue-600 block mt-4">Guru Kripa is built for both of you.</span>
          </h1>

          <div className="space-y-5 text-slate-700 text-[1.05rem] leading-relaxed font-medium">
            <p className="text-xl font-bold text-slate-900 mb-2">
              Renting in India should not be this difficult.
            </p>
            <p>
              It starts with a search. You find listings that look right but turn out to be outdated, overpriced, or already gone. You call a broker who adds a month’s rent in fees for making two phone calls. You visit properties where the photos bore no resemblance to reality.
            </p>
            <div className="p-5 bg-blue-50/50 rounded-2xl border border-blue-100/50 shadow-inner">
              <p>
                You negotiate with a landlord you have never met and know nothing about, and they know nothing about you. You sign an agreement that was written for someone else’s situation. <strong className="text-slate-900">Six weeks later, you are still looking.</strong>
              </p>
            </div>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link 
              to="/find-home" 
              className="flex items-center justify-center gap-2 w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold transition-all duration-300 shadow-lg shadow-blue-500/30"
            >
              <Search className="w-5 h-5" /> FIND A HOME
            </Link>
            <Link 
              to="/list-property" 
              className="flex items-center justify-center gap-2 w-full sm:w-auto bg-white hover:bg-slate-50 text-slate-900 px-8 py-4 rounded-xl font-bold shadow-sm border border-slate-200 transition-all duration-300"
            >
              <HomeIcon className="w-5 h-5" /> LIST YOUR PROPERTY
            </Link>
          </div>
        </motion.div>

      </div>
    </div>
  );
}