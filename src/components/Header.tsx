import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Menu, X, Zap } from 'lucide-react';
import { SITE } from '@/data/site';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/services', label: 'Services' },
    { to: '/service-areas', label: 'Service Areas' },
    { to: '/about', label: 'About' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-lg' : 'bg-slate-900'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link to="/" className="flex items-center gap-2 text-white">
            <div className="w-10 h-10 bg-amber-400 rounded-lg flex items-center justify-center">
              <Zap className="w-6 h-6 text-slate-900" fill="currentColor" />
            </div>
            <div className="leading-tight">
              <div className="font-bold text-base lg:text-lg">Florida Electrical</div>
              <div className="text-amber-400 text-xs lg:text-sm font-medium">Systems</div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-sm font-medium transition-colors ${
                  location.pathname === link.to
                    ? 'text-amber-400'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <a
              href={`tel:${SITE.phoneRaw}`}
              className="flex items-center gap-2 bg-amber-400 hover:bg-amber-300 text-slate-900 font-bold px-5 py-2.5 rounded-lg transition-all shadow-md hover:shadow-lg"
            >
              <Phone className="w-4 h-4" fill="currentColor" />
              {SITE.phone}
            </a>
          </div>

          <button
            className="lg:hidden text-white p-2"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden bg-slate-900 border-t border-slate-700">
          <nav className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`block text-sm font-medium py-2 ${
                  location.pathname === link.to
                    ? 'text-amber-400'
                    : 'text-gray-300'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={`tel:${SITE.phoneRaw}`}
              className="flex items-center justify-center gap-2 bg-amber-400 text-slate-900 font-bold px-5 py-3 rounded-lg mt-2"
            >
              <Phone className="w-4 h-4" fill="currentColor" />
              Call {SITE.phone}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
