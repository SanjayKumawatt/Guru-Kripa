import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  Briefcase, 
  Users, 
  Key, 
  AlertCircle, 
  CheckCircle2,
  Search,
  Home as HomeIcon
} from 'lucide-react';

export default function WhoItServes() {
  const audiences = [
    {
      id: "students",
      title: "Students",
      icon: GraduationCap,
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      challenge: "Finding a rental as a student in India means competing with a market that treats you as a risk. Landlords prefer working tenants with steady income. Brokers charge commissions you cannot afford. Listings near colleges and universities move fast and are often misleading about actual condition. You have no rental history to offer as reassurance.",
      solution: "Guru Kripa includes a student verification track that confirms enrollment and institution affiliation. Landlords on the platform who are open to students are explicitly flagged. The matching engine prioritises properties within practical distance of the tenant’s stated institution. A complete, verified student profile signals to landlords that you are a serious, identifiable applicant even without an employment history."
    },
    {
      id: "professionals",
      title: "Working Professionals",
      icon: Briefcase,
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      challenge: "You are relocating for a job or moving within a city where you do not have an established network. You need to find a place quickly, in an area that makes your commute manageable, at a price that fits your salary. You do not have weeks to spare on false leads, broker calls, and properties that were rented before you called.",
      solution: "Guru Kripa’s verified listings and AI matching surface properties that genuinely fit your commute and budget from day one. Employment verification builds your profile credibility with landlords. The direct communication model means no broker delays. Most verified matches on the platform progress to a viewing within days of the initial connection."
    },
    {
      id: "families",
      title: "Families",
      icon: Users,
      image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      challenge: "A family moving into a rental makes a significant commitment - to a building, a neighbourhood, a school catchment, a community. Getting it wrong is costly and disruptive. The market offers very little help in making this decision well: listings lack the detail a family needs, and the broker model does not include any systematic assessment of fit.",
      solution: "Guru Kripa provides the detailed listing information families need to make a real decision: building type and age, neighbourhood character, proximity to schools and hospitals, landlord history on the platform, and the actual terms of the tenancy before you visit. The matching engine treats family-specific criteria - size, stability, duration - as primary considerations, not afterthoughts."
    },
    {
      id: "landlords",
      title: "Landlords",
      icon: Key,
      image: "https://images.unsplash.com/photo-1556912167-f556f1f39fdf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      challenge: "You have a property to let and you want a reliable tenant who pays on time, treats the property well, and stays for the duration they said they would. The broker model gives you enquiries but no meaningful information about the people making them. You make a long-term decision based on a short conversation.",
      solution: "Every tenant who contacts you through Guru Kripa has a verified profile you can review before you respond. You see their identity, their rental intention, their verified background, and any platform history before any conversation takes place. Your preferences for tenant type, duration, and occupancy are built into the matching criteria so you only hear from tenants who fit what you are looking for."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Intro Section */}
        <div className="max-w-4xl mx-auto text-center mb-20 pt-8">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight mb-8"
          >
            Guru Kripa is built for <span className="text-blue-600">four groups</span> of people.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg md:text-xl text-slate-600 leading-relaxed font-medium"
          >
            The rental market involves students looking for their first independent home, professionals relocating for work, families making long-term decisions about where to live, and landlords who want reliable tenants without the cost and uncertainty of the broker model. Each group has different priorities. The platform is designed with all of them in mind.
          </motion.p>
        </div>

        {/* Comparative Cards Section */}
        <div className="space-y-16">
          {audiences.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div 
                key={item.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7 }}
                className="bg-white rounded-[2.5rem] border border-slate-200 overflow-hidden shadow-xl shadow-slate-200/40 flex flex-col lg:flex-row"
              >
                {/* Left Side: Image & Title */}
                <div className="lg:w-2/5 relative min-h-[300px] lg:min-h-full bg-slate-900 overflow-hidden">
                  <div className="absolute inset-0 bg-slate-900/40 z-10"></div>
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute bottom-0 left-0 p-8 z-20 w-full bg-gradient-to-t from-slate-900/90 to-transparent">
                    <div className="flex items-center gap-4 text-white">
                      <div className="bg-blue-600 p-3 rounded-xl">
                        <Icon className="w-8 h-8" />
                      </div>
                      <h2 className="text-3xl font-bold tracking-tight">{item.title}</h2>
                    </div>
                  </div>
                </div>

                {/* Right Side: Content (Challenge vs Solution) */}
                <div className="lg:w-3/5 p-8 md:p-12 flex flex-col gap-6">
                  
                  {/* Challenge Box */}
                  <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 md:p-8">
                    <div className="flex items-center gap-3 mb-4 text-slate-700">
                      <AlertCircle className="w-5 h-5" />
                      <h3 className="text-lg font-bold uppercase tracking-wider">The Challenge</h3>
                    </div>
                    <p className="text-slate-600 leading-relaxed font-medium">
                      {item.challenge}
                    </p>
                  </div>

                  {/* Solution Box */}
                  <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6 md:p-8 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                    <div className="flex items-center gap-3 mb-4 text-blue-700 relative z-10">
                      <CheckCircle2 className="w-5 h-5" />
                      <h3 className="text-lg font-bold uppercase tracking-wider">On Guru Kripa</h3>
                    </div>
                    <p className="text-slate-700 leading-relaxed font-medium relative z-10">
                      {item.solution}
                    </p>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-24 border-t border-slate-200 pt-16 text-center"
        >
          <h2 className="text-3xl font-extrabold text-slate-900 mb-10">Ready to get started?</h2>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <Link 
              to="/find-home" 
              className="w-full sm:w-auto flex items-center justify-center gap-3 bg-blue-600 hover:bg-slate-900 text-white px-10 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg shadow-blue-500/30"
            >
              <Search className="w-5 h-5" /> Find Your Home
            </Link>
            <Link 
              to="/list-property" 
              className="w-full sm:w-auto flex items-center justify-center gap-3 bg-white hover:bg-slate-50 text-slate-900 border-2 border-slate-200 hover:border-blue-200 px-10 py-4 rounded-xl font-bold text-lg transition-all duration-300"
            >
              <HomeIcon className="w-5 h-5" /> List Your Property
            </Link>
          </div>
        </motion.div>

      </div>
    </div>
  );
}