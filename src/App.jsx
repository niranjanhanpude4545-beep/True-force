import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { HashRouter as Router, Routes, Route, useLocation, Link } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Services from './pages/Services';
import Careers from './pages/Careers';
import Gallery from './pages/Gallery';
import QuoteInvoice from './pages/QuoteInvoice';

import MobileStickyBar from './components/MobileStickyBar';
import SplashScreen from './components/SplashScreen';
import WhatsAppSupport from './components/WhatsAppSupport';

// Public assets are referenced by URL path — NOT imported as modules.
// Files in /public are served at the root URL (e.g., /logo-new.png).
const LOGO_URL = '/logo-new.png';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  const { t } = useTranslation();
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 3500);
    return () => clearTimeout(timer);
  }, []);

  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem('theme');
    if (saved) return saved === 'dark';
    return true;
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  return (
    <Router>
      <ScrollToTop />
      <SplashScreen isVisible={showSplash} />
      <div className="min-h-screen pb-20 md:pb-0 relative transition-colors duration-300">
        <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />

        <main className="w-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/quote" element={<QuoteInvoice />} />
          </Routes>
        </main>

        <WhatsAppSupport />
        <MobileStickyBar />

        {/* Footer */}
        <footer className="mt-16 border-t border-slate-200 dark:border-white/[0.06] transition-colors duration-300">
          <div className="h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>

          <div className="w-[90%] max-w-[1200px] mx-auto py-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
              {/* Brand */}
              <div>
                <img
                  src={LOGO_URL}
                  alt="True Force Security"
                  className="h-12 w-auto mb-4 brightness-110 contrast-110"
                />
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed max-w-xs">
                  {t('hero.subtitle')}
                </p>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="text-sm font-bold uppercase tracking-widest text-slate-900 dark:text-white mb-4">
                  {t('nav.home')} &amp; {t('nav.services')}
                </h4>
                <ul className="space-y-2">
                  {[
                    { label: t('nav.home'), path: '/' },
                    { label: t('nav.services'), path: '/services' },
                    { label: t('nav.careers'), path: '/careers' },
                    { label: t('nav.gallery'), path: '/gallery' },
                  ].map((link) => (
                    <li key={link.label}>
                      <Link
                        to={link.path}
                        className="text-sm text-slate-500 dark:text-slate-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact */}
              <div>
                <h4 className="text-sm font-bold uppercase tracking-widest text-slate-900 dark:text-white mb-4">
                  {t('nav.contact')}
                </h4>
                <div className="space-y-2 text-sm text-slate-500 dark:text-slate-400">
                  <p>📍 Pune, Maharashtra, India</p>
                  <p>📞 +91 7385 629 397</p>
                  <p>✉️ info@trueforcesecurity.com</p>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-200 dark:border-white/[0.06] text-center">
              <p className="text-xs text-slate-400 dark:text-slate-500">{t('footer.rights')}</p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
