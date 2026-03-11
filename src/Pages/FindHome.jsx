import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Search, Info } from 'lucide-react';
import img from "../assets/img.png"

export default function FindHome() {
  const steps = [
    {
      num: "01",
      title: "You tell us what you need.",
      desc: "You create a tenant profile on Guru Kripa. This is not a search filter. It is a complete picture of your rental requirement: the city and area, your budget, the size of home you need, how long you plan to stay, whether you are a student or a working professional or a family, and the preferences that matter to you - building type, furnishing level, pet friendliness, proximity to specific locations. The more complete your profile, the more accurate the match. This takes roughly ten minutes.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" // Person typing on laptop
    },
    {
      num: "02",
      title: "Your profile is verified.",
      desc: "Before you can contact a landlord or be contacted by one, Guru Kripa verifies your identity. This means a government-issued ID, a phone number confirmed by OTP, and - depending on your tier - an employment or enrollment confirmation. Verification protects landlords from unqualified or fraudulent enquiries. It also signals to them that you are a serious applicant, which improves your chances of hearing back quickly.",
      image: img // Phone/Security/Verification
    },
    {
      num: "03",
      title: "The platform finds your matches.",
      desc: "Once your profile is complete and verified, the matching engine runs. It does not just filter by price and location. It cross-references your requirements against the full detail of every verified listing in your area: the landlord’s stated preferences for tenant type, the building rules, the actual photographs and floor plan, the verified rental history of the property, and proximity to the specific locations you flagged. You receive a shortlist of matches ranked by compatibility, not by who paid for a featured listing.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" // Abstract tech/data screen
    },
    {
      num: "04",
      title: "You review verified listings.",
      desc: "Every listing in your match results has been confirmed. The photographs are taken by or verified against the actual property. The price is the price that applies to your situation. The availability date is accurate. The landlord’s profile is real. You are not chasing listings that were posted months ago or properties that look nothing like the pictures. You can take a virtual walkthrough where available, review the full property detail, and check the landlord’s profile and history before making contact.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" // Clean property interior view
    },
    {
      num: "05",
      title: "You connect with the landlord directly.",
      desc: "Guru Kripa connects you to matched landlords through the platform’s messaging system. There is no broker in the middle. You and the landlord communicate directly, schedule a viewing, and negotiate the terms of the tenancy. The platform keeps a record of all communication so there is no ambiguity later about what was agreed.",
      image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" // People meeting/discussing
    },
    {
      num: "06",
      title: "The paperwork is handled on the platform.",
      desc: "Once you and the landlord have agreed on terms, the rental agreement is prepared through Guru Kripa’s documentation module. The agreement reflects the specific terms you negotiated - rent, deposit, notice period, maintenance responsibilities. Both parties sign digitally. The deposit is recorded. The move-in checklist is completed and stored. Everything is documented from the beginning so there is nothing to argue about at the end.",
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" // Document signing
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
            What finding a rental home looks like on <span className="text-blue-600">Guru Kripa.</span>
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
                to="/start-search" 
                className="inline-flex items-center justify-center gap-3 bg-blue-600 hover:bg-slate-900 text-white px-10 py-5 rounded-2xl font-bold text-xl transition-all duration-300 shadow-xl shadow-blue-500/20"
              >
                <Search className="w-6 h-6" /> Start Your Search
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
                Guru Kripa charges tenants a platform subscription fee, not a brokerage commission. The subscription gives you access to the matching engine, verified listings, and all platform features for the duration of your search and tenancy. There is no additional charge when you find a match and move in. Subscription pricing is published at <a href="https://gurukripaservice.in" className="text-blue-600 hover:underline font-bold">gurukripaservice.in</a>.
              </p>
            </div>
            
          </div>
        </motion.div>

      </div>
    </div>
  );
}