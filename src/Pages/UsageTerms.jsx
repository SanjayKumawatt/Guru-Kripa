import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, 
  Database, 
  UserCog, 
  Cookie, 
  Scale, 
  ArrowLeft 
} from 'lucide-react';

export default function UsageTerms() {
  const sections = [
    {
      id: "website-data",
      title: "Data we collect through this website",
      icon: ShieldCheck,
      content: (
        <p>
          When you submit a form on <a href="https://gurukripaservice.in" className="text-blue-600 hover:underline font-semibold">gurukripaservice.in</a>, we receive the information you provide: your name, contact details, and the details of your housing search or property listing. We use this to respond to your enquiry and to manage your early access registration. We do not share this information with third parties for commercial purposes.
        </p>
      )
    },
    {
      id: "platform-data",
      title: "Data we collect and process through the platform",
      icon: Database,
      content: (
        <div className="space-y-4">
          <p>
            The Guru Kripa rental platform processes personal and property data from both tenants and landlords as part of delivering the matching service. Tenant data includes identity verification documents, contact information, stated rental preferences, and any rental history recorded on the platform. Landlord data includes property documentation, identity verification, listing details, and tenancy records. This data is used exclusively to operate the matching platform. We do not sell user data and do not use it for advertising.
          </p>
          <p>
            Verification documents are processed for identity confirmation and then stored securely with access restricted to authorised personnel. Documents are not shared with other users. The verification outcome - verified or not verified - is visible to matched parties; the underlying documents are not.
          </p>
          <p>
            Communication between tenants and landlords on the platform is stored to maintain a record of what was agreed during the tenancy negotiation. This record is accessible to both parties for the duration of their interaction on the platform.
          </p>
        </div>
      )
    },
    {
      id: "user-rights",
      title: "Your rights over your data",
      icon: UserCog,
      content: (
        <p>
          You can request to see, correct, or delete the personal data Guru Kripa holds about you by writing to <a href="mailto:talk@gurukripaservice.in" className="text-blue-600 hover:underline font-semibold">talk@gurukripaservice.in</a>. We will respond within thirty days. Deleting your account removes your active profile. Records of completed tenancies may be retained for the period required under applicable Indian law.
        </p>
      )
    },
    {
      id: "cookies",
      title: "Cookies",
      icon: Cookie,
      content: (
        <p>
          gurukripaservice.in uses session cookies for site navigation. The platform uses session management cookies for login and user state. We do not use advertising or tracking cookies on the website or platform.
        </p>
      )
    },
    {
      id: "platform-terms",
      title: "Platform terms",
      icon: Scale,
      content: (
        <div className="space-y-4">
          <p>
            Guru Kripa Infra Service Private Limited is incorporated under the Companies Act, 2013, with registered address at 1121/1597, Gandhi Nagar, Bura Gujjar Road, Muktsar, Malout, Punjab - 152101. Use of this website and the Guru Kripa platform is subject to these terms. The website and platform may be used only for lawful purposes related to residential property rental.
          </p>
          <p>
            All listings on the platform must represent real, available properties. Landlords are responsible for ensuring their listings are accurate and current. Guru Kripa verifies listings before they go live but cannot guarantee conditions have not changed since verification. Tenants are responsible for conducting their own due diligence before entering into a rental agreement.
          </p>
          <p>
            Guru Kripa facilitates connections between tenants and landlords. The rental agreement is entered into directly between tenant and landlord. Guru Kripa is not a party to that agreement and does not accept liability for the conduct of either party in the tenancy.
          </p>
          <p>
            Our liability for claims arising from use of this website or platform is limited to the extent permitted by applicable Indian law. Disputes are subject to the exclusive jurisdiction of competent courts in Muktsar, Punjab, India. Indian law governs.
          </p>
          <div className="mt-6 p-4 bg-blue-50 border-l-4 border-blue-600 rounded-r-lg text-slate-700 font-medium">
            Material updates to these terms are communicated to registered users before they take effect.
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Navigation */}
        <div className="mb-12">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-slate-500 hover:text-blue-600 font-medium transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
        </div>

        {/* Page Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Usage Terms & <span className="text-blue-600">Data Policy</span>
          </h1>
          <p className="text-lg text-slate-600 font-medium">
            This page covers how Guru Kripa handles personal data and what terms apply when you use this website or the platform.
          </p>
          
        </motion.div>

        {/* Content Sections */}
        <div className="space-y-12">
          {sections.map((section, index) => {
            const IconComponent = section.icon;
            return (
              <motion.div 
                key={section.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-[2rem] p-8 md:p-10 border border-slate-200 shadow-sm"
              >
                <div className="flex items-center gap-4 mb-6 pb-6 border-b border-slate-100">
                  <div className="bg-blue-50 p-3 rounded-xl">
                    <IconComponent className="w-6 h-6 text-blue-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
                    {section.title}
                  </h2>
                </div>
                <div className="text-slate-600 leading-relaxed text-[1.05rem] font-medium">
                  {section.content}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </div>
  );
}