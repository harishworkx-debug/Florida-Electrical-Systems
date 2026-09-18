import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Menu, X, Zap, ChevronDown } from 'lucide-react';
import { SITE, SERVICES, LOCATIONS, MAIN_LOCATION } from '@/data/site';

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
    { 
      to: '/services', 
      label: 'Services',
      isDropdown: true,
      items: SERVICES.map(s => ({ to: `/${s.slug}-${MAIN_LOCATION}`, label: s.shortTitle }))
    },
    { 
      to: '/service-areas', 
      label: 'Service Areas',
      isDropdown: true,
      items: LOCATIONS.map(l => ({ to: `/electrician-${l.slug}`, label: l.name }))
    },
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
              link.isDropdown ? (
                <div key={link.to} className="relative group">
                  <Link
                    to={link.to}
                    className={`flex items-center gap-1 text-sm font-medium transition-colors ${
                      location.pathname.startsWith(link.to) || (link.items?.some(i => i.to === location.pathname))
                        ? 'text-amber-400'
                        : 'text-gray-300 hover:text-white'
                    }`}
                  >
                    {link.label}
                    <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                  </Link>
                  <div className="absolute top-full left-0 mt-4 w-56 bg-white rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 before:absolute before:-top-4 before:left-0 before:w-full before:h-4 overflow-hidden border border-gray-100">
                    <div className="py-2 max-h-[70vh] overflow-y-auto custom-scrollbar">
                      {link.items?.map((item) => (
                        <Link
                          key={item.to}
                          to={item.to}
                          className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-amber-50 hover:text-amber-600 transition-colors"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
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
              )
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
        <div className="lg:hidden bg-slate-900 border-t border-slate-700 h-[calc(100vh-4rem)] overflow-y-auto">
          <nav className="px-4 py-4 space-y-3 pb-24">
            {navLinks.map((link) => (
              <div key={link.to}>
                <Link
                  to={link.to}
                  className={`block text-sm font-medium py-2 ${
                    location.pathname === link.to || (link.items?.some(i => i.to === location.pathname))
                      ? 'text-amber-400'
                      : 'text-gray-300'
                  }`}
                >
                  {link.label}
                </Link>
                {link.isDropdown && (
                  <div className="pl-4 py-2 space-y-2 border-l border-slate-700 ml-2 mt-1">
                    {link.items?.map((item) => (
                      <Link
                        key={item.to}
                        to={item.to}
                        className={`block text-sm py-1 transition-colors ${
                          location.pathname === item.to ? 'text-amber-400' : 'text-gray-400 hover:text-amber-400'
                        }`}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <a
              href={`tel:${SITE.phoneRaw}`}
              className="flex items-center justify-center gap-2 bg-amber-400 text-slate-900 font-bold px-5 py-3 rounded-lg mt-6"
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
