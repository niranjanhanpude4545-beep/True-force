import React, { useEffect, useState } from 'react';
import { FaShieldAlt, FaClock, FaMapMarkerAlt, FaCheckCircle } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

// Public assets served at root URL — do NOT import from /public as modules
const heroBg = '/hero-new-bg.jpg';

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
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="metric-elite text-center hover:scale-105 transition-transform duration-300"
    >
      <div className="flex items-center justify-center mb-3">
        <Icon className="text-platinumSilver text-xl mr-2" />
        <span className="metric-value">{count}</span>
        <span className="text-xl text-platinumSilver font-bold">{suffix}</span>
      </div>
      <div className="text-sm text-textSecondary uppercase tracking-wider font-semibold">{text}</div>
    </motion.div>
  );
};



const EliteHero = () => {
  const { t } = useTranslation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

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
      className="relative min-h-screen flex items-center overflow-hidden bg-cover bg-center bg-no-repeat bg-[#0A0F1C]"
      style={{
        backgroundImage: `url(${heroBg})`,
      }}
      id="home"
    >
      {/* Gradient Overlay — cinematic with visible background */}
      <motion.div
        className="absolute inset-0 z-0 backdrop-blur-[6px]"
        style={{
          background: 'radial-gradient(ellipse at 50% 40%, rgba(10,15,28,0.45) 0%, rgba(10,15,28,0.78) 100%)',
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      />

      {/* Animated Tactical HUD Rings */}
      <div className="absolute inset-0 z-[1] flex items-center justify-center pointer-events-none opacity-20 scale-75 md:scale-100">
        <motion.div 
          className="w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] rounded-full border-2 border-cyberBlue/50 border-dashed"
          animate={{ rotate: 360 }}
          transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          className="absolute w-[45vw] h-[45vw] max-w-[600px] max-h-[600px] rounded-full border-2 border-platinumSilver/40"
          animate={{ rotate: -360 }}
          transition={{ duration: 160, repeat: Infinity, ease: "linear" }}
        >
          {/* Tracking Dots */}
          <div className="absolute -top-1.5 left-1/2 w-4 h-4 bg-cyberBlue rounded-full shadow-[0_0_20px_rgba(37,99,235,1)]" />
          <div className="absolute bottom-1/4 -right-2 w-3 h-3 bg-securityRed rounded-full shadow-[0_0_15px_rgba(220,38,38,1)] animate-pulse" />
        </motion.div>
      </div>

      {/* Tactical Grid Texture — fine dot matrix */}
      <div className="absolute inset-0 z-[1] pointer-events-none" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(37,99,235,0.12) 1px, transparent 0)`,
        backgroundSize: '40px 40px',
        opacity: 0.35,
      }} />

      {/* Film Grain / Noise Texture — premium feel */}
      <div className="absolute inset-0 z-[2] pointer-events-none opacity-[0.04] mix-blend-overlay" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
        backgroundRepeat: 'repeat',
        backgroundSize: '128px 128px',
      }} />

      {/* Cinematic Vignette */}
      <div className="absolute inset-0 z-[3] pointer-events-none" style={{
        background: 'radial-gradient(ellipse 80% 70% at 50% 45%, transparent 40%, rgba(10,15,28,0.55) 100%)',
      }} />

      {/* Subtle Scan Line */}
      <motion.div
        className="absolute left-0 w-full h-[2px] pointer-events-none z-[4]"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(37,99,235,0.25), transparent)' }}
        animate={{ top: ['0%', '100%'] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'linear' }}
      />

      <motion.div
        className="w-[90%] max-w-[1400px] mx-auto relative z-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Premium Command Center Header */}
        <motion.div
          variants={itemVariants}
          className="text-center mb-8"
        >
          <div className="threat-critical mb-6 inline-block">
            🔴 {t('hero.threatLevel')}
          </div>

          <div className="inline-flex items-center gap-4 liquid-glass px-8 py-4 mb-8 shadow-[0_4px_16px_rgba(229,231,235,0.1)]">
            <FaShieldAlt className="text-platinumSilver text-2xl" />
            <span className="text-platinumSilver font-bold text-sm uppercase tracking-wide">⚡ {t('hero.maxResponse')}</span>
            <div className="bg-successGreen/90 text-eliteNavy text-xs font-bold px-3 py-1 rounded-xl">{t('hero.online')}</div>
          </div>

          <div className="clearance-maximum mb-8 text-base font-bold tracking-wide shadow-[0_4px_16px_rgba(229,231,235,0.15)] border-2">✓ {t('hero.securityClearance')}</div>
        </motion.div>

        {/* Elite Headline - Tactical Solid Text */}
        <motion.h1
          variants={itemVariants}
          className="font-heading leading-[1.05] mb-8 text-center"
        >
          <span className="text-[3.5rem] md:text-[6rem] font-black text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)] block mb-2 tracking-tight">
            {t('hero.title1')}
          </span>
          <span className="text-[3.5rem] md:text-[6rem] font-black text-blue-500 drop-shadow-[0_4px_20px_rgba(37,99,235,0.4)] block tracking-tight">
            {t('hero.title2')}
          </span>
        </motion.h1>

        {/* Elite Subtitle */}
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-2xl text-slate-100 mb-16 max-w-3xl mx-auto text-center leading-relaxed font-semibold tracking-wide drop-shadow-md"
        >
          {t('hero.subtitle')}
        </motion.p>

        {/* Elite Metrics Grid */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-20"
        >
          <Counter target={1247} suffix="+" text={t('hero.personnel')} icon={FaShieldAlt} />
          <Counter target={2} suffix="min" text={t('hero.responseTime')} icon={FaClock} />
          <Counter target={500} suffix="km²" text={t('hero.coverageArea')} icon={FaMapMarkerAlt} />
        </motion.div>

        {/* Premium CTA Section */}
        <motion.div
          variants={itemVariants}
          className="text-center"
        >
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <button 
              onClick={handleActivateClick}
              className="btn-elite-primary liquid-glass border-2 border-platinumSilver/20 shadow-[0_8px_32px_rgba(212,175,55,0.12)] hover:shadow-[0_12px_48px_rgba(212,175,55,0.18)]"
            >
              🚀 {t('hero.activateBtn')}
            </button>
            <button 
              onClick={handleCommandClick}
              className="btn-elite-secondary liquid-glass border-2 border-platinumSilver/10 shadow-[0_4px_16px_rgba(37,99,235,0.08)]"
            >
              ⚙️ {t('hero.commandBtn')}
            </button>
          </div>

          {/* Premium Liquid Glass Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-white font-bold drop-shadow-md">
            <div className="flex items-center gap-3 liquid-glass px-6 py-3 shadow-[0_4px_16px_rgba(5,150,105,0.08)] backdrop-blur-sm">
              <FaCheckCircle className="text-successGreen text-lg" />
              <span>{t('hero.isoVerified')}</span>
            </div>
            <div className="flex items-center gap-3 liquid-glass px-6 py-3 shadow-[0_4px_16px_rgba(37,99,235,0.08)] backdrop-blur-sm">
              <FaCheckCircle className="text-cyberBlue text-lg" />
              <span>{t('hero.psaraLicensed')}</span>
            </div>
            <div className="flex items-center gap-3 liquid-glass px-6 py-3 shadow-[0_4px_16px_rgba(229,231,235,0.08)] backdrop-blur-sm">
              <FaCheckCircle className="text-platinumSilver text-lg" />
              <span>{t('hero.operational')}</span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </header>
  );
};

export default EliteHero;
