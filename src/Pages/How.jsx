import { motion } from 'framer-motion';
import { 
  Map, 
  Wallet, 
  CalendarClock, 
  Users, 
  Maximize, 
  ShieldCheck, 
  Heart,
  BrainCircuit,
  AlertCircle
} from 'lucide-react';

export default function MatchingEngine() {
  const criteria = [
    {
      title: "Location and commute",
      desc: "Tenants specify the area they want to live in and the locations they need to reach regularly - office, college, hospital, market. The matching engine considers not just whether the property is in the right area but whether it places the tenant within a practical commute of the places they flagged as important. Properties in the right locality but with poor access to the tenant’s key destinations rank lower than those that fit both.",
      icon: Map
    },
    {
      title: "Budget and deposit compatibility",
      desc: "Monthly rent is the starting point, but the total cost of moving in - rent plus deposit plus any upfront charges - is what determines whether a tenancy is affordable. The matching engine checks total move-in cost against the tenant’s stated budget range, not just monthly rent in isolation. Tenants are not shown properties that are technically within rent budget but require a deposit they cannot manage.",
      icon: Wallet
    },
    {
      title: "Tenancy duration",
      desc: "Long-term rental relationships fail when tenant and landlord have incompatible expectations about how long the tenancy will last. A landlord who wants a two-year tenant matched with a student planning to leave in six months creates a problem for both sides. The matching engine checks duration compatibility as a primary filter before any other match criteria are applied.",
      icon: CalendarClock
    },
    {
      title: "Tenant type and landlord preferences",
      desc: "Landlords specify which tenant types they are open to: students, working professionals, families, couples, single occupants. This is not discrimination - it is a statement of practical preference about the tenancy they want to offer. The matching engine respects these preferences and only surfaces a property to tenant types the landlord has indicated they will consider.",
      icon: Users
    },
    {
      title: "Property size and occupancy",
      desc: "The number of people who will occupy the property must match the property’s size and what the landlord has specified. A 1BHK listed for single occupancy is not surfaced to a family of four regardless of how well other criteria match. The matching engine treats occupancy compatibility as a hard filter.",
      icon: Maximize
    },
    {
      title: "Verification status",
      desc: "Matching only happens between verified parties. An unverified tenant profile is not surfaced to landlords. An unverified listing is not shown to tenants. Verification is not an optional add-on - it is the foundation of the match. This ensures that every connection the platform facilitates starts from a position of established identity on both sides.",
      icon: ShieldCheck
    },
    {
      title: "Lifestyle and property compatibility",
      desc: "Tenants indicate preferences that matter to their daily life: pet ownership, parking requirement, preference for ground floor or upper floors, need for a specific type of kitchen setup, proximity to vegetarian food establishments. Landlords indicate building rules and practical constraints. The matching engine cross-references these so that properties presented to tenants are ones that fit how they actually live, not just what they can afford.",
      icon: Heart
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="min-h-screen bg-white pt-24 pb-20">
      
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-20 pt-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-600 font-bold text-sm mb-6 border border-blue-100 shadow-sm">
            <BrainCircuit className="w-5 h-5" />
            <span>AI-Powered Matching Engine</span>
          </div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight mb-8"
          >
            How the platform decides who to <span className="text-blue-600">match with whom.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg md:text-xl text-slate-600 leading-relaxed font-medium"
          >
            A rental listing directory connects whoever happens to see a listing with whoever listed it. This produces a lot of enquiries and a small number of successful tenancies. Guru Kripa’s matching engine works differently. It builds a complete picture of both the tenant’s requirement and the landlord’s property and preferences, then finds the pairings where both sides are a genuine fit for each other.
          </motion.p>
        </div>
      </div>

      {/* What the Matching Engine Considers Section */}
      <div className="bg-slate-50 py-20 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              What the matching engine considers
            </h2>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {criteria.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <motion.div 
                  key={index} 
                  variants={itemVariants}
                  className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                    <IconComponent className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed text-sm font-medium">
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>

        </div>
      </div>

      {/* What Matching Does Not Do Section */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-slate-900 rounded-[2.5rem] p-8 md:p-16 text-white shadow-2xl relative overflow-hidden"
        >
          {/* Abstract Background Element */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          
          <div className="flex items-center gap-4 mb-8 relative z-10">
            <div className="bg-white/10 p-3 rounded-2xl backdrop-blur-sm">
              <AlertCircle className="w-8 h-8 text-blue-400" />
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
              What matching does <span className="text-blue-400">not</span> do
            </h2>
          </div>

          <div className="space-y-6 text-lg text-slate-300 font-medium leading-relaxed relative z-10">
            <p>
              The matching engine surfaces compatible pairings. It does not make the decision for either side. Tenants review every match and decide whether to express interest. Landlords review every matched tenant profile and decide whether to proceed. The platform facilitates the connection; the tenancy is agreed between real people who have met, spoken, and made an informed choice.
            </p>
            <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
              <p>
                The AI also does not produce a single result. It produces a ranked shortlist. The ranking reflects compatibility across all the criteria above, but tenants and landlords can review the full shortlist and proceed with any match they find suitable. <strong className="text-white font-bold">The ranking is a starting point, not a prescription.</strong>
              </p>
            </div>
          </div>

        </motion.div>
      </div>

    </div>
  );
}