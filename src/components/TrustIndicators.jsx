import React from 'react';
import { FaShieldAlt, FaCertificate, FaAward, FaCheckCircle, FaBuilding, FaIndustry, FaCity, FaHome, FaShoppingBag, FaTruckLoading } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import TheAgency from './TheAgency';

const TrustIndicators = () => {
  const { t } = useTranslation();

  const certifications = [
    { name: t('trust.certs.iso.name', 'ISO 27001'), desc: t('trust.certs.iso.desc', 'Information Security'), icon: FaShieldAlt, color: 'text-blue-500 dark:text-blue-400', bg: 'bg-blue-50 dark:bg-blue-500/10', border: 'border-blue-200 dark:border-blue-500/20' },
    { name: t('trust.certs.psara.name', 'PSARA Licensed'), desc: t('trust.certs.psara.desc', 'Private Security'), icon: FaCertificate, color: 'text-emerald-500 dark:text-emerald-400', bg: 'bg-emerald-50 dark:bg-emerald-500/10', border: 'border-emerald-200 dark:border-emerald-500/20' },
    { name: t('trust.certs.gdpr.name', 'GDPR Compliant'), desc: t('trust.certs.gdpr.desc', 'Data Protection'), icon: FaCheckCircle, color: 'text-cyan-500 dark:text-cyan-400', bg: 'bg-cyan-50 dark:bg-cyan-500/10', border: 'border-cyan-200 dark:border-cyan-500/20' },
    { name: t('trust.certs.bsi.name', 'BSI Verified'), desc: t('trust.certs.bsi.desc', 'Quality Standard'), icon: FaAward, color: 'text-amber-500 dark:text-amber-400', bg: 'bg-amber-50 dark:bg-amber-500/10', border: 'border-amber-200 dark:border-amber-500/20' },
  ];

  const clients = [
    { name: t('trust.sectors.techParks', 'Tech Parks'), icon: FaBuilding },
    { name: t('trust.sectors.industrial', 'Industrial Zones'), icon: FaIndustry },
    { name: t('trust.sectors.corporate', 'Corporate Hubs'), icon: FaCity },
    { name: t('trust.sectors.residential', 'Residential Spaces'), icon: FaHome },
    { name: t('trust.sectors.retail', 'Retail Malls'), icon: FaShoppingBag },
    { name: t('trust.sectors.logistics', 'Logistics Centers'), icon: FaTruckLoading },
  ];

  return (
    <section className="py-28 bg-transparent transition-colors duration-300 relative overflow-hidden">
      {/* Subtle glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-500/[0.03] rounded-full blur-[100px] pointer-events-none"></div>

      <div className="w-[90%] max-w-[1200px] mx-auto relative z-10">
        {/* Certifications */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-block text-xs font-black uppercase text-emerald-600 dark:text-emerald-400 tracking-[0.35em] mb-4 px-5 py-2 rounded-full bg-emerald-50 dark:bg-emerald-400/10 border border-emerald-200 dark:border-emerald-400/20">
            {t('trust.badge')}
          </span>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            {t('trust.title1', 'Elite Security')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-cyan-500">{t('trust.title2', 'Certifications')}</span>
          </h3>
          <p className="text-slate-500 dark:text-slate-400 text-lg mb-12 max-w-2xl mx-auto">
            {t('trust.subtitle')}
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`p-6 text-center rounded-2xl border ${cert.border} ${cert.bg} hover:scale-[1.04] transition-all duration-300 group cursor-default`}
              >
                <cert.icon className={`text-4xl ${cert.color} mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`} />
                <h4 className="text-base font-bold text-slate-900 dark:text-white mb-1">{cert.name}</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 mb-3">{cert.desc}</p>
                <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-400/10 px-3 py-1 rounded-full">
                  ✓ {t('trust.verified')}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* The Agency Section */}
        <TheAgency />

        {/* Client Sectors */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            {t('trust.clientsTitle1', 'Trusted Across')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-violet-500">{t('trust.clientsTitle2', 'Sectors')}</span>
          </h3>
          <p className="text-slate-500 dark:text-slate-400 mb-10">{t('trust.clientsSubtitle')}</p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {clients.map((client, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="group flex flex-col items-center gap-3 p-6 rounded-2xl border border-slate-200 dark:border-white/[0.08] bg-white dark:bg-white/[0.03] hover:border-blue-300 dark:hover:border-blue-500/30 hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-300 cursor-default"
              >
                <client.icon className="text-2xl text-slate-400 dark:text-slate-500 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors duration-300" />
                <span className="text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 whitespace-nowrap">
                  {client.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustIndicators;