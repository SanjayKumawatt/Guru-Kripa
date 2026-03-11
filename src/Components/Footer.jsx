import { Link } from 'react-router-dom';
import { Mail, MapPin } from 'lucide-react';
import logo from "../assets/logo.png"

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 mb-16">

          {/* Left Column: Brand & Description */}
          <div className="flex flex-col">
            <Link to="/" className="flex gap-2">
              <img src={logo} className='h-12' alt="" />

              <div className='mb-6'>
                <span className="font-extrabold text-2xl text-slate-900 tracking-tight leading-none block">
                  GURU KRIPA INFRA
                </span>
                <span className="text-xs text-blue-600 font-bold tracking-widest uppercase mt-1 block">
                  Service Pvt. Ltd.
                </span>
              </div>
            </Link>
            <p className="text-slate-600 text-[15px] leading-relaxed max-w-md font-medium">
              We are building the future of long-term rentals in India. A systematic matching platform that connects verified tenants with the right properties, ensuring transparency and security from search to signed agreement.
            </p>
          </div>

          {/* Right Column: Contact Information */}
          <div className="flex flex-col sm:flex-row gap-10 sm:gap-16">

            {/* Email Section */}
            <div>
              <h3 className="text-xs font-bold text-slate-900 uppercase tracking-widest mb-4 flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-600" /> General Enquiries
              </h3>
              <a
                href="mailto:talk@gurukripaservice.in"
                className="text-base font-semibold text-slate-600 hover:text-blue-600 transition-colors"
              >
                talk@gurukripaservice.in
              </a>
            </div>

            {/* Address Section */}
            <div>
              <h3 className="text-xs font-bold text-slate-900 uppercase tracking-widest mb-4 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-blue-600" /> Headquarters
              </h3>
              <p className="text-base font-semibold text-slate-600 leading-relaxed max-w-xs">
                1121/1597 Gandhi Nagar,<br />
                Bura Gujjar Road Muktsar,<br />
                Channu, Muktsar, Malout,<br />
                Punjab, India, 152101
              </p>
            </div>

          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-slate-200">
          <p className="text-sm font-medium text-slate-500">
            &copy; {currentYear} Guru Kripa Infra Service Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex gap-8">

            <Link to="/usage-terms" className="text-sm font-bold text-slate-500 hover:text-blue-600 transition-colors">
              Usage Terms
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}