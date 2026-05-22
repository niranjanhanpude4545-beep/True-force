import React, { useEffect, useState } from 'react';
import { FaShieldAlt, FaClock, FaMapMarkerAlt, FaCheckCircle } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

// Public assets served at root URL — do NOT import from /public as modules
const heroBg = import.meta.env.BASE_URL + 'hero-new-bg.jpg';

const Counter = ({ target, suffix = '', text, icon: Icon }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let current = 0;
    const speed = 60;
    const inc = target / speed;
    let frameId;

    const updateCount = () => {
      if (current < target) {
        current = Math.ceil(current + inc);
        setCount(current > target ? target : current);
        frameId = requestAnimationFrame(updateCount);
      } else {
        setCount(target);
      }
    };

    frameId = requestAnimationFrame(updateCount);
    return () => cancelAnimationFrame(frameId);
  }, [target]);

  return (
    <div
      className="metric-elite text-center hover:scale-105 transition-transform duration-300"
    >
      <div className="flex items-center justify-center mb-3">
        <Icon className="text-slate-700 text-xl mr-2" />
        <span className="metric-value">{count}</span>
        <span className="text-xl text-slate-700 font-bold">{suffix}</span>
      </div>
      <div className="text-sm text-slate-600 uppercase tracking-wider font-semibold">{text}</div>
    </div>
  );
};

const EliteHero = () => {
  const { t } = useTranslation();

  const handleActivateClick = () => {
    const el = document.getElementById('roi-calculator');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleCommandClick = () => {
    const el = document.getElementById('coverage');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className="relative min-h-screen flex items-center overflow-hidden bg-transparent"
      id="home"
    >

      <div
        className="w-[90%] max-w-[1400px] mx-auto relative z-20"
      >
        {/* Premium Command Center Header */}
        <div
          className="text-center mb-8"
        >
          <div className="threat-critical mb-6 inline-block text-lg font-bold text-red-600 px-4 py-2 rounded-full bg-red-100 border border-red-300">
            🔴 {t('hero.threatLevel')}
          </div>

          <div className="inline-flex items-center gap-4 liquid-glass px-8 py-4 mb-8 shadow-[0_4px_16px_rgba(59,130,246,0.15)]">
            <FaShieldAlt className="text-blue-600 text-2xl" />
            <span className="text-blue-700 font-bold text-sm uppercase tracking-wide">⚡ {t('hero.maxResponse')}</span>
            <div className="bg-green-500/90 text-white text-xs font-bold px-3 py-1 rounded-xl">{t('hero.online')}</div>
          </div>

          <div className="clearance-maximum mb-8 text-base font-bold tracking-wide">✓ {t('hero.securityClearance')}</div>
        </div>

        {/* Elite Headline - Tactical Solid Text */}
        <h1
          className="font-heading leading-[1.05] mb-8 text-center"
        >
          <span className="text-[3.5rem] md:text-[6rem] font-black text-blue-800 drop-shadow-[0_4px_12px_rgba(0,0,0,0.1)] block mb-2 tracking-tight">
            {t('hero.title1')}
          </span>
          <span className="text-[3.5rem] md:text-[6rem] font-black text-blue-600 drop-shadow-[0_4px_20px_rgba(37,99,235,0.3)] block tracking-tight">
            {t('hero.title2')}
          </span>
        </h1>

        {/* Elite Subtitle */}
        <p
          className="text-lg md:text-2xl text-slate-700 mb-16 max-w-3xl mx-auto text-center leading-relaxed font-semibold tracking-wide drop-shadow-md"
        >
          {t('hero.subtitle')}
        </p>

        {/* Elite Metrics Grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-20"
        >
          <Counter target={1247} suffix="+" text={t('hero.personnel')} icon={FaShieldAlt} />
          <Counter target={2} suffix="min" text={t('hero.responseTime')} icon={FaClock} />
          <Counter target={500} suffix="km²" text={t('hero.coverageArea')} icon={FaMapMarkerAlt} />
        </div>

        {/* Premium CTA Section */}
        <div
          className="text-center"
        >
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <button 
              onClick={handleActivateClick}
              className="btn-elite-primary liquid-glass border-2 border-blue-500/20 shadow-[0_8px_32px_rgba(37,99,235,0.12)] hover:shadow-[0_12px_48px_rgba(37,99,235,0.18)]"
            >
              🚀 {t('hero.activateBtn')}
            </button>
            <button 
              onClick={handleCommandClick}
              className="btn-elite-secondary liquid-glass border-2 border-blue-400/10 shadow-[0_4px_16px_rgba(37,99,235,0.08)]"
            >
              ⚙️ {t('hero.commandBtn')}
            </button>
          </div>

          {/* Premium Liquid Glass Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-slate-700 font-bold drop-shadow-md">
            <div className="flex items-center gap-3 liquid-glass px-6 py-3 shadow-[0_4px_16px_rgba(5,150,105,0.08)] backdrop-blur-sm">
              <FaCheckCircle className="text-successGreen text-lg" />
              <span>{t('hero.isoVerified')}</span>
            </div>
            <div className="flex items-center gap-3 liquid-glass px-6 py-3 shadow-[0_4px_16px_rgba(37,99,235,0.08)] backdrop-blur-sm">
              <FaCheckCircle className="text-blue-600 text-lg" />
              <span>{t('hero.psaraLicensed')}</span>
            </div>
            <div className="flex items-center gap-3 liquid-glass px-6 py-3 shadow-[0_4px_16px_rgba(100,100,100,0.08)] backdrop-blur-sm">
              <FaCheckCircle className="text-slate-500 text-lg" />
              <span>{t('hero.operational')}</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default EliteHero;
