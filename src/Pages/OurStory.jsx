import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Target, Rocket, ShieldCheck, MapPin, Mail, Globe, ArrowRight } from 'lucide-react';

export default function OurStory() {
  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-20">
      
      {/* Hero Image & Title */}
      <div className="relative w-full h-[40vh] md:h-[50vh] bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-blue-900/20 z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent z-20"></div>
        {/* NEW 100% WORKING STABLE IMAGE */}
        <img 
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
          alt="Our Story - Guru Kripa" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-0 w-full z-30 p-6 md:p-12 lg:px-20 max-w-7xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white tracking-tight leading-tight mb-4"
          >
            Our Story
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-lg md:text-2xl text-blue-100 font-medium tracking-wide"
          >
            Building the rental platform India actually needs.
          </motion.p>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-40">
        
        {/* The Problem Statement */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-t-[3rem] p-8 md:p-16 shadow-2xl shadow-slate-200/50 text-lg md:text-xl text-slate-700 leading-relaxed font-medium space-y-8 border-x border-t border-slate-100"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight mb-6">
            Finding a rental home in India is <span className="text-blue-600">harder than it needs to be.</span>
          </h2>
          
          <p>
            The process has not changed much in decades. A prospective tenant searches portals full of listings that may or may not be current, calls brokers who charge a month’s rent for making introductions, visits properties that do not match their descriptions, and eventually settles for something that is almost but not quite right because the search became exhausting. 
          </p>
          <p>
            Landlords on the other side have no systematic way to find reliable tenants and no real protection against the mismatch that a brief meeting and a gut feeling cannot prevent.
          </p>
          
          <div className="p-8 bg-slate-50 border-l-4 border-blue-600 rounded-r-2xl text-slate-800 italic font-medium shadow-sm">
            "Technology has made some of this easier - listings are easier to find, photographs are more common, communication is faster. But the fundamental problem has not been solved: there is still no platform that systematically matches the right tenant with the right property based on what both sides actually need, verifies both parties before they interact, and handles the process from first contact through to a signed agreement."
          </div>
        </motion.div>

        {/* Why We Built Guru Kripa */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="bg-white p-8 md:p-16 border-x border-t border-slate-100 space-y-8"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="bg-blue-100 p-3 rounded-2xl">
              <Target className="w-8 h-8 text-blue-600" />
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              Why we built Guru Kripa
            </h2>
          </div>

          <p className="text-lg text-slate-600 leading-relaxed font-medium">
            <strong className="text-slate-900">Guru Kripa Infra Service Private Limited was incorporated on 7 March 2026 in Muktsar, Punjab</strong>, with a specific aim: to build the rental platform that treats both tenant and landlord as equal participants in a transaction that matters to both of them. Not a listing directory. Not a broker replacement that just moves the middleman online. A genuine matching platform built on verified data, real profiles, and AI that understands what a good rental match looks like.
          </p>
          <p className="text-lg text-slate-600 leading-relaxed font-medium">
            We chose long-term rental as our focus deliberately. The long-term rental market - tenancies of six months to several years - is where the damage from a bad match is greatest and where the current system does the least to prevent it. Students spending a semester in the wrong building, families discovering the neighbourhood does not work for them after they have already moved in, landlords dealing with tenant turnover because the match was never right to begin with - these are the problems Guru Kripa is built to prevent.
          </p>
        </motion.div>

        {/* What We Are Building Toward & CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="bg-white p-8 md:p-16 border-x border-t border-slate-100 space-y-8"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="bg-blue-100 p-3 rounded-2xl">
              <Rocket className="w-8 h-8 text-blue-600" />
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              What we are building toward
            </h2>
          </div>

          <p className="text-lg text-slate-600 leading-relaxed font-medium">
            The platform launches with coverage in Punjab and expands to other states as the verification infrastructure and listing base are established. The AI matching engine improves as the platform processes more tenancies - every successful long-term rental adds to the data that makes the next match more accurate. The goal is a rental platform where finding a good home or a good tenant takes days, not weeks, and where both parties enter the tenancy with confidence rather than hope.
          </p>
          
          {/* Early Access Highlight Box */}
          <div className="mt-10 bg-blue-600 rounded-3xl p-8 md:p-10 text-white shadow-xl shadow-blue-500/30 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-3">Join the Early Access</h3>
              <p className="text-blue-100 font-medium text-lg">
                We are a startup. The platform described on this website is in development. If you want to be part of the first cohort of verified tenants and landlords, register your interest and we will be in touch before the launch.
              </p>
            </div>
            <a 
              href="https://gurukripaservice.in" 
              className="w-full md:w-auto flex-shrink-0 bg-white text-blue-600 hover:bg-slate-50 px-8 py-4 rounded-xl font-bold text-lg transition-colors flex items-center justify-center gap-2 shadow-sm"
            >
              Register Now <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </motion.div>

        {/* Registered Details (Trust Anchor) */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-slate-900 rounded-b-[3rem] p-8 md:p-16 text-slate-300 shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          
          <div className="flex items-center gap-3 mb-8 text-white">
            <ShieldCheck className="w-6 h-6 text-blue-500" />
            <h3 className="text-2xl font-bold tracking-wide">Registered Details</h3>
          </div>

          <p className="mb-8 text-lg font-medium leading-relaxed">
            Guru Kripa Infra Service Private Limited is incorporated under the Companies Act, 2013.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 text-blue-500 shrink-0 mt-1" />
              <div>
                <p className="text-sm text-slate-400 uppercase tracking-widest font-bold mb-1">Registered Address</p>
                <p className="font-medium text-white leading-relaxed">
                  1121/1597, Gandhi Nagar,<br/> 
                  Bura Gujjar Road, Muktsar, Malout,<br/> 
                  Punjab - 152101, India.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <Globe className="w-5 h-5 text-blue-500 shrink-0" />
                <div>
                  <p className="text-sm text-slate-400 uppercase tracking-widest font-bold mb-1">Website</p>
                  <a href="https://gurukripaservice.in" className="font-medium text-white hover:text-blue-400 transition-colors">
                    gurukripaservice.in
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="w-5 h-5 text-blue-500 shrink-0" />
                <div>
                  <p className="text-sm text-slate-400 uppercase tracking-widest font-bold mb-1">Email</p>
                  <a href="mailto:talk@gurukripaservice.in" className="font-medium text-white hover:text-blue-400 transition-colors">
                    talk@gurukripaservice.in
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}