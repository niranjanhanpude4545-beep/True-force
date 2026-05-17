import React from 'react';
import { FaFingerprint, FaRobot, FaFighterJet, FaBrain } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Capabilities = () => {
  const { t } = useTranslation();

  const features = [
    {
      title: t('capabilities.ai.title'),
      description: t('capabilities.ai.desc'),
      icon: <FaRobot />,
      color: 'from-blue-500 to-cyan-400',
      iconColor: 'text-blue-500 dark:text-cyan-400',
      glowColor: 'group-hover:shadow-blue-500/20 dark:group-hover:shadow-cyan-400/20',
    },
    {
      title: t('capabilities.qrt.title'),
      description: t('capabilities.qrt.desc'),
      icon: <FaFighterJet />,
      color: 'from-red-500 to-orange-400',
      iconColor: 'text-red-500 dark:text-red-400',
      glowColor: 'group-hover:shadow-red-500/20 dark:group-hover:shadow-red-400/20',
    },
    {
      title: t('capabilities.intel.title'),
      description: t('capabilities.intel.desc'),
      icon: <FaBrain />,
      color: 'from-amber-500 to-yellow-400',
      iconColor: 'text-amber-600 dark:text-amber-400',
      glowColor: 'group-hover:shadow-amber-500/20 dark:group-hover:shadow-amber-400/20',
    },
    {
      title: t('capabilities.biometric.title'),
      description: t('capabilities.biometric.desc'),
      icon: <FaFingerprint />,
      color: 'from-emerald-500 to-green-400',
      iconColor: 'text-emerald-600 dark:text-emerald-400',
      glowColor: 'group-hover:shadow-emerald-500/20 dark:group-hover:shadow-emerald-400/20',
    }
  ];

  return (
    <section className="py-28 relative overflow-hidden transition-colors duration-300 bg-transparent">
      {/* Subtle accent glow */}
      <div className="absolute top-1/4 -left-48 w-[500px] h-[500px] bg-blue-500/[0.04] rounded-full blur-[120px] pointer-events-none"></div>

      <div className="w-[90%] max-w-[1200px] mx-auto relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-block text-xs font-black uppercase text-blue-600 dark:text-cyan-400 tracking-[0.35em] mb-4 px-5 py-2 rounded-full bg-blue-50 dark:bg-cyan-400/10 border border-blue-200 dark:border-cyan-400/20">
            {t('capabilities.badge')}
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white leading-tight mt-4">
            {t('capabilities.title1', 'Operational')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">{t('capabilities.title2', 'Supremacy')}</span>
          </h2>
          <p className="mt-6 text-slate-500 dark:text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            {t('capabilities.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              className={`group relative rounded-3xl p-8 border border-slate-200 dark:border-white/[0.08] bg-white dark:bg-white/[0.04] backdrop-blur-md hover:-translate-y-3 transition-all duration-500 cursor-default shadow-sm hover:shadow-2xl liquid-glass-card ${feature.glowColor}`}
            >
              {/* Gradient accent line at top */}
              <div className={`absolute top-0 left-6 right-6 h-[3px] bg-gradient-to-r ${feature.color} rounded-b-full opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

              <div className={`${feature.iconColor} text-4xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {feature.icon}
              </div>
              <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors duration-300">{feature.title}</h4>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Capabilities;

