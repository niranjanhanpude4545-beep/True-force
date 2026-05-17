import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const partners = [
  { name: 'TCS', fullName: 'Tata Consultancy Services' },
  { name: 'Wipro', fullName: 'Wipro Limited' },
  { name: 'Infosys', fullName: 'Infosys Technologies' },
  { name: 'Tech Mahindra', fullName: 'Tech Mahindra Ltd' },
  { name: 'L&T', fullName: 'Larsen & Toubro' },
  { name: 'Bajaj', fullName: 'Bajaj Group' },
  { name: 'Persistent', fullName: 'Persistent Systems' },
  { name: 'Cognizant', fullName: 'Cognizant Technology' },
  { name: 'Reliance', fullName: 'Reliance Industries' },
  { name: 'Mahindra', fullName: 'Mahindra Group' },
  { name: 'Godrej', fullName: 'Godrej Properties' },
  { name: 'Emcure', fullName: 'Emcure Pharma' },
];

const TrustedPartners = () => {
  const { t } = useTranslation();

  return (
    <section className="py-24 bg-transparent transition-colors duration-300 relative overflow-hidden">
      {/* Subtle gradient accent */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-300/40 to-transparent"></div>

      <div className="w-[90%] max-w-[1200px] mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-block text-xs font-black uppercase text-slate-500 dark:text-slate-400 tracking-[0.35em] mb-4 px-5 py-2 rounded-full bg-slate-100 dark:bg-white/[0.04] border border-slate-200 dark:border-white/[0.08]">
            {t('partners.badge')}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mt-4">
            {t('partners.title1', "Protecting")} <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-500">{t('partners.title2', "India's Finest")}</span>
          </h2>
          <p className="mt-4 text-slate-500 dark:text-slate-400 text-lg max-w-2xl mx-auto">
            {t('partners.subtitle')}
          </p>
        </motion.div>

        {/* Partner Logo Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              className="group relative flex flex-col items-center justify-center p-6 rounded-2xl border border-slate-200 dark:border-white/[0.06] bg-white dark:bg-white/[0.02] hover:border-blue-300 dark:hover:border-blue-500/30 hover:shadow-lg hover:shadow-blue-500/5 hover:bg-blue-50/50 dark:hover:bg-blue-500/[0.04] transition-all duration-300 cursor-default"
            >
              {/* Stylized text logo */}
              <span className="text-xl md:text-2xl font-black text-slate-300 dark:text-slate-600 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-500 tracking-tight select-none">
                {partner.name}
              </span>
              {/* Full name tooltip on hover */}
              <span className="text-[10px] text-slate-400 dark:text-slate-500 mt-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-medium truncate max-w-full text-center">
                {partner.fullName}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Stats bar */}
        <motion.div
          className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          {[
            { value: '200+', label: t('partners.stats.clients') },
            { value: '50+', label: t('partners.stats.partners') },
            { value: '8+', label: t('partners.stats.years') },
            { value: '99.7%', label: t('partners.stats.retention') },
          ].map((stat, i) => (
            <div key={i} className="text-center p-5 rounded-xl bg-white dark:bg-white/[0.03] border border-slate-200 dark:border-white/[0.06]">
              <div className="text-2xl md:text-3xl font-black text-blue-600 dark:text-blue-400">{stat.value}</div>
              <div className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider font-semibold mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TrustedPartners;

