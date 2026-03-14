import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, Info } from 'lucide-react';

export default function ListProperty() {
  const steps = [
    {
      num: "01",
      title: "You create your property listing.",
      desc: "You add your property to Guru Kripa with a full listing: location, size, floor, furnishing level, monthly rent, security deposit, available date, and your preferences for the type of tenant you want. You upload photographs - real ones, taken by you or by one of our listed verification photographers. You set your requirements: the duration you are looking for, whether you are open to students, working professionals, or families, and any house rules that apply to the property.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      num: "02",
      title: "Your listing is verified.",
      desc: "Before your property appears in any tenant’s search results, Guru Kripa confirms it. This involves checking the property documentation you provide, confirming your identity as the owner or authorised representative, and verifying that the listing details - particularly the rent, size, and photographs - accurately represent the property. Verification typically completes within 48 hours. Once verified, your listing carries a verified badge that signals to tenants that what they see is what they will find.",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      num: "03",
      title: "The platform finds your matches.",
      desc: "The matching engine works in both directions. As tenants with verified profiles create their requirements, the system identifies properties that fit. Your property is presented to tenants whose needs, budget, and profile align with what you are looking for. You do not wait passively for random enquiries. The system actively surfaces your property to people who are looking for exactly what you have, in the area where it is located, in the duration range you have specified.",
      image: "https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      num: "04",
      title: "You review tenant profiles before responding.",
      desc: "When a match is confirmed, you receive the tenant’s profile to review before any direct contact is made. The profile includes their verified identity, their rental history on the platform if they have used it before, their stated reason for moving, their employment or enrollment status, and any references they have provided. You decide whether to proceed to a conversation. You are not making a decision based on a brief phone call with someone you know nothing about.",
      image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      num: "05",
      title: "You connect and negotiate directly.",
      desc: "Once you accept a match, Guru Kripa connects you with the tenant through the platform’s messaging system. You schedule a viewing, discuss the tenancy terms, and negotiate directly without an intermediary. Everything is on record. You set the terms. The platform supports the process without taking control of it.",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      num: "06",
      title: "The agreement is documented from the start.",
      desc: "The rental agreement is prepared through Guru Kripa’s documentation module based on the terms you and the tenant agree. It is signed digitally by both parties. The deposit is recorded. A move-in checklist is completed before the tenant takes possession. At the end of the tenancy, the same record is the basis for the deposit return. There are no verbal agreements to misremember and no undocumented promises to dispute.",
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    }
  ];

  return (
    <div className="min-h-screen bg-white pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="max-w-3xl mx-auto text-center mb-20 pt-8">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight"
          >
            What listing your property looks like on <span className="text-blue-600">Guru Kripa.</span>
          </motion.h1>
        </div>

        {/* Steps Timeline */}
        <div className="space-y-24 md:space-y-32 mb-32">
          {steps.map((step, index) => {
            const isEven = index % 2 === 0;

            return (
              <div key={step.num} className={`flex flex-col md:flex-row items-center gap-12 lg:gap-20 ${!isEven ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Text Content */}
                <motion.div 
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  className="flex-1 relative"
                >
                  {/* Giant Watermark Number */}
                  <div className="absolute -top-10 -left-6 text-[8rem] lg:text-[12rem] font-black text-slate-50 leading-none z-0 select-none">
                    {step.num}
                  </div>
                  
                  <div className="relative z-10 pt-8 pl-4">
                    <div className="flex items-center gap-4 mb-6">
                      <span className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600 font-bold text-xl shrink-0">
                        {step.num}
                      </span>
                      <h2 className="text-2xl md:text-3xl font-bold text-slate-900 leading-tight">
                        {step.title}
                      </h2>
                    </div>
                    <p className="text-lg text-slate-600 leading-relaxed font-medium">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>

                {/* Image Content */}
                <motion.div 
                  initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  className="flex-1 w-full"
                >
                  <div className="relative rounded-[2rem] overflow-hidden shadow-2xl shadow-slate-200/50 group">
                    <div className="absolute inset-0 bg-blue-600/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                    <img 
                      src={step.image} 
                      alt={step.title} 
                      loading="lazy"
                      className="w-full h-[350px] lg:h-[450px] object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
                    />
                  </div>
                </motion.div>

              </div>
            );
          })}
        </div>

        {/* CTA & Note on Fees Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-slate-50 rounded-[2.5rem] p-8 md:p-12 border border-slate-200 text-center shadow-sm">
            
            {/* CTA Button */}
            <div className="mb-12">
              <Link 
                to="/connect" 
                className="inline-flex items-center justify-center gap-3 bg-blue-600 hover:bg-slate-900 text-white px-10 py-5 rounded-2xl font-bold text-xl transition-all duration-300 shadow-xl shadow-blue-500/20"
              >
                <Home className="w-6 h-6" /> Add Your Listing
              </Link>
            </div>

            {/* Note on Fees Box */}
            <div className="bg-white rounded-2xl p-8 border border-slate-200 text-left shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <Info className="w-5 h-5 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">A note on fees</h3>
              </div>
              <p className="text-slate-600 leading-relaxed font-medium">
                Listing a property on Guru Kripa carries a platform fee, not a tenant-finding commission. You pay for the listing and the matching service, not a percentage of rent when the property lets. Listing fee details are published at <a href="https://gurukripaservice.in" className="text-blue-600 hover:underline font-bold">gurukripaservice.in</a>.
              </p>
            </div>
            
          </div>
        </motion.div>

      </div>
    </div>
  );
}