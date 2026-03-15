import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Menu, X, Facebook, Twitter, Instagram, Linkedin, Mail, MapPin, Clock } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import logo from '../assets/Gemini_Generated_Image_fpw9i6fpw9i6fpw9-removebg-preview.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-3 text-blue-600">
          <img src={logo} alt="VoltFix logo" className="h-14 w-auto" />
          <span className="text-2xl font-black leading-tight tracking-tight text-slate-900">VoltFix</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-lg font-semibold transition-colors hover:text-blue-600 ${
                location.pathname === link.path ? 'text-blue-600' : 'text-slate-600'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a
            href="tel:+15551234567"
            className="hidden sm:flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-blue-600/30 transition-all hover:scale-105 active:scale-95"
          >
            <Phone className="h-4 w-4" />
            <span>Call Now</span>
          </a>
          <button
            className="md:hidden text-slate-900"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-slate-100 bg-white"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-lg font-bold ${
                    location.pathname === link.path ? 'text-blue-600' : 'text-slate-900'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <a
                href="tel:+15551234567"
                className="flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-5 py-3 text-base font-bold text-white shadow-lg"
              >
                <Phone className="h-5 w-5" />
                <span>Call Now</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

const Footer = () => {
  return (
    <footer className="bg-slate-900 py-16 text-slate-300">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-6">
            <div className="flex items-center gap-2 text-blue-500">
              <img src={logo} alt="VoltFix logo" className="h-10 w-auto" />
              <h2 className="text-2xl font-black text-white">VoltFix</h2>
            </div>
            <p className="text-sm leading-relaxed">
              Licensed electrical specialists dedicated to safety and quality since 2014. Your trusted local partner for all power needs.
            </p>
            <div className="flex gap-4">
              <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-blue-600 hover:text-white">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-blue-600 hover:text-white">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-blue-600 hover:text-white">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-blue-600 hover:text-white">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="mb-6 font-bold text-white">Quick Links</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/" className="hover:text-blue-500">Home</Link></li>
              <li><Link to="/services" className="hover:text-blue-500">Services</Link></li>
              <li><Link to="/about" className="hover:text-blue-500">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-blue-500">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-6 font-bold text-white">Services</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/services" className="hover:text-blue-500">Residential Wiring</Link></li>
              <li><Link to="/services" className="hover:text-blue-500">Commercial Power</Link></li>
              <li><Link to="/services" className="hover:text-blue-500">Smart Home Setup</Link></li>
              <li><Link to="/services" className="hover:text-blue-500">Panel Maintenance</Link></li>
              <li><Link to="/services" className="hover:text-blue-500">Emergency Support</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-6 font-bold text-white">Newsletter</h4>
            <p className="mb-4 text-sm">Subscribe for tips on electrical safety and energy savings.</p>
            <form className="flex flex-col gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                className="rounded-lg border-0 bg-white/10 px-4 py-3 text-sm focus:ring-2 focus:ring-blue-600 outline-none"
                placeholder="Your email"
                type="email"
              />
              <button className="rounded-lg bg-blue-600 py-3 text-sm font-bold text-white transition-colors hover:bg-blue-700">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="mt-16 border-t border-white/10 pt-8 text-center text-xs">
          <p>© 2024 VoltFix Electrical Services. All rights reserved. Licensed Contractor #EL-495021.</p>
        </div>
      </div>
    </footer>
  );
};

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
};
