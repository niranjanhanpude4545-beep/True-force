import React, { useState } from 'react';
import { FaMoon, FaSun, FaBars, FaTimes } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

// Public assets are served at root URL — do NOT import from /public as modules
const logoNew = import.meta.env.BASE_URL + 'logo-new.png';

const Navbar = ({ isDarkMode, toggleTheme }) => {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const [hoveredNav, setHoveredNav] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: t('nav.home', 'Home'), href: '/' },
    { id: 'services', label: t('nav.services', 'Services'), href: '/services' },
    { id: 'careers', label: t('nav.careers', 'Careers'), href: '/careers' },
    { id: 'gallery', label: t('nav.gallery', 'Gallery'), href: '/gallery' },
  ];

  const handleNavClick = (href) => {
    if (href === location.pathname) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };


  return (
    <motion.nav 
      className="fixed top-0 w-full bg-white/90 dark:bg-[#0a0f1c]/90 backdrop-blur-xl !rounded-none !border-x-0 !border-t-0 !shadow-sm z-[1000] border-b border-blue-200/40 dark:border-blue-900/40 transition-all duration-300"
      initial={{ y: -75 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="w-[90%] max-w-[1400px] h-[75px] mx-auto flex justify-between items-center">
        
        <motion.div 
          className="logo-3d-container flex items-center cursor-pointer"
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Link to="/" onClick={() => handleNavClick('/')}>
            <img
              src={logoNew}
              alt="True Force Security"
              className="logo-3d h-[50px] w-auto object-contain transition-all duration-300 brightness-110 contrast-110"
            />
          </Link>
        </motion.div>

        {/* Desktop Links with Animated Underline */}
        <ul className="hidden md:flex gap-10 text-gunmetal dark:text-platinumSilver font-bold uppercase tracking-widest text-xs">
          {navItems.map((item) => (
            <motion.li key={item.id} className="relative">
              <Link 
                to={item.href} 
                className="relative py-2 group transition-colors hover:text-cyberBlue"
                onMouseEnter={() => setHoveredNav(item.id)}
                onMouseLeave={() => setHoveredNav(null)}
                onClick={() => handleNavClick(item.href)}
              >
                {item.label}
                <motion.span
                  className="absolute -bottom-1 left-0 h-0.5 bg-cyberBlue"
                  initial={{ width: 0 }}
                  animate={{ width: hoveredNav === item.id ? '100%' : 0 }}
                  transition={{ duration: 0.3 }}
                />
              </Link>
            </motion.li>
          ))}
        </ul>

        {/* Actions */}
        <div className="flex items-center gap-3 md:gap-6">
          {/* Theme Toggle */}
          <motion.button 
            onClick={toggleTheme}
            className="text-gunmetal dark:text-platinumSilver text-xl bg-gunmetal/5 dark:bg-white/10 p-3 rounded-xl border border-titanium/20 hover:border-cyberBlue hover:text-cyberBlue transition-all duration-300 backdrop-blur-md"
            aria-label="Toggle Dark Mode"
            whileHover={{ scale: 1.1, rotate: 15 }}
            whileTap={{ scale: 0.9 }}
          >
            {isDarkMode ? <FaSun className="text-amber-400" /> : <FaMoon className="text-cyberBlue" />}
          </motion.button>

          {/* Language Selector */}
          <div className="relative group">
            <select 
              className="appearance-none bg-gunmetal/5 dark:bg-white/10 text-gunmetal dark:text-platinumSilver border border-titanium/20 rounded-xl px-4 py-2.5 focus:outline-none focus:border-cyberBlue focus:ring-1 focus:ring-cyberBlue/30 transition-all duration-300 backdrop-blur-md cursor-pointer font-bold text-xs tracking-widest uppercase"
              value={i18n.language}
              onChange={(e) => i18n.changeLanguage(e.target.value)}
            >
              <option value="en" className="bg-white dark:bg-eliteNavy text-gunmetal dark:text-platinumSilver">EN</option>
              <option value="hi" className="bg-white dark:bg-eliteNavy text-gunmetal dark:text-platinumSilver">HI</option>
              <option value="mr" className="bg-white dark:bg-eliteNavy text-gunmetal dark:text-platinumSilver">MR</option>
            </select>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-gunmetal dark:text-platinumSilver text-xl p-2.5 rounded-xl border border-titanium/20 hover:border-cyberBlue hover:text-cyberBlue transition-all duration-300 backdrop-blur-md"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>

          {/* CTA Button with Glow */}
          <motion.a 
            href="https://wa.me/917385629397?text=I%20would%20like%20to%20book%20a%20consultation"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-block bg-cyberBlue hover:bg-cyberBlue/80 text-white px-6 py-3 font-bold uppercase tracking-widest text-xs rounded-xl relative overflow-hidden group shadow-lg shadow-cyberBlue/20"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.span
              className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100"
              animate={{ x: ['-100%', '200%'] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            />
            {t('nav.bookConsult')}
          </motion.a>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden bg-white/95 dark:bg-[#0a0f1c]/95 backdrop-blur-xl border-b border-blue-200/40 dark:border-blue-900/40 shadow-lg"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ul className="flex flex-col py-4 px-[5%] gap-4 text-gunmetal dark:text-platinumSilver font-bold uppercase tracking-widest text-sm">
              {navItems.map((item) => (
                <li key={item.id} className="border-b border-slate-100 dark:border-slate-800 pb-2">
                  <Link 
                    to={item.href} 
                    className="block w-full hover:text-cyberBlue transition-colors"
                    onClick={() => handleNavClick(item.href)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <a 
                  href="https://wa.me/917385629397?text=I%20would%20like%20to%20book%20a%20consultation"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-full text-center bg-cyberBlue hover:bg-cyberBlue/80 text-white px-6 py-3 font-bold uppercase tracking-widest text-xs rounded-xl shadow-lg shadow-cyberBlue/20 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t('nav.bookConsult')}
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
