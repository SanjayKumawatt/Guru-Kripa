import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Home, Users, Users2, Users2Icon } from 'lucide-react';
import logo from "../assets/logo.png"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'HOME', path: '/' },
    { name: 'FIND A HOME', path: '/find-home' },
    { name: 'OUR STORY', path: '/our-story' },
    { name: 'HOW MATCHING WORKS', path: '/how-matching-works' },
    { name: 'LIST YOUR PROPERTY', path: '/list-property' },
    { name: 'WHO IT SERVES', path: '/who-it-serves' },
  ];

  return (
    <div className="fixed top-0 left-0 w-full z-50 flex justify-center px-4 pt-4 transition-all duration-300">
      <header 
        className={`w-full max-w-[90rem] rounded-full transition-all duration-300 ${
          scrolled 
            ? 'bg-white/90 backdrop-blur-xl shadow-lg border border-white/20' 
            : 'bg-white/70 backdrop-blur-md shadow-sm border border-white/50'
        }`}
      >
        <div className="px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            
            {/* Logo */}
            <Link to="/" className="flex flex-col justify-center">
              <img src={logo} className='h-12' alt="" />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden xl:flex space-x-8 items-center">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-slate-700 hover:text-blue-600 text-[13px] font-bold tracking-wide transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA Button */}
            <div className="hidden lg:flex items-center">
              <Link 
                to="/connect" 
                className="group flex items-center gap-2 bg-blue-600 hover:bg-slate-900 text-white px-6 py-2.5 rounded-full text-sm font-bold tracking-wide transition-all duration-300 shadow-md shadow-blue-500/30"
              >
                <Users2Icon className="w-4 h-4" /> Connect
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="xl:hidden p-2 text-slate-600 rounded-full bg-white/50 hover:bg-white transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-24 left-4 right-4 bg-white/95 backdrop-blur-2xl rounded-3xl shadow-2xl border border-white/50 p-6 xl:hidden flex flex-col gap-4 animate-in slide-in-from-top-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="text-sm font-bold tracking-wide text-slate-800 hover:text-blue-600 p-2"
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}