import React, { useState } from 'react';
import { FaBuilding, FaHome, FaIndustry, FaCalendarAlt, FaUserShield, FaNetworkWired, FaTimes } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import LiveSecurityDashboard from '../components/LiveSecurityDashboard';

const Services = () => {
  const { t } = useTranslation();
  const [selectedService, setSelectedService] = useState(null);
  
  const services = [
    {
      id: 1,
      name: t('services.corporate.name'),
      icon: <FaBuilding className="text-4xl text-cyberBlue" />,
      description: t('services.corporate.desc'),
      details: t('services.corporate.details'),
      cost: t('services.corporate.cost')
    },
    {
      id: 2,
      name: t('services.residential.name'),
      icon: <FaHome className="text-4xl text-successGreen" />,
      description: t('services.residential.desc'),
      details: t('services.residential.details'),
      cost: t('services.residential.cost')
    },
    {
      id: 3,
      name: t('services.industrial.name'),
      icon: <FaIndustry className="text-4xl text-warningAmber" />,
      description: t('services.industrial.desc'),
      details: t('services.industrial.details'),
      cost: t('services.industrial.cost')
    },
    {
      id: 4,
      name: t('services.event.name'),
      icon: <FaCalendarAlt className="text-4xl text-securityRed" />,
      description: t('services.event.desc'),
      details: t('services.event.details'),
      cost: t('services.event.cost')
    },
    {
      id: 5,
      name: t('services.executive.name'),
      icon: <FaUserShield className="text-4xl text-platinumSilver" />,
      description: t('services.executive.desc'),
      details: t('services.executive.details'),
      cost: t('services.executive.cost')
    },
    {
      id: 6,
      name: t('services.cyber.name'),
      icon: <FaNetworkWired className="text-4xl text-cyberBlue" />,
      description: t('services.cyber.desc'),
      details: t('services.cyber.details'),
      cost: t('services.cyber.cost')
    }
  ];

  return (
    <div className="pt-[100px] pb-16 bg-transparent transition-colors duration-300">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold font-heading text-gunmetal dark:text-platinumSilver mb-4 transition-colors">
          {t('services.title')}
        </h1>
        <p className="text-textSecondary text-lg max-w-2xl mx-auto">
          {t('services.subtitle')}
        </p>
      </div>

      {/* Services Grid */}
      <div className="w-[90%] max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
        {services.map((service) => (
          <div 
            key={service.id} 
            onClick={() => setSelectedService(service)}
            className="border border-slate-200 dark:border-white/[0.08] p-8 flex flex-col items-start hover:-translate-y-1 hover:shadow-2xl hover:border-blue-300 dark:hover:border-blue-500/30 cursor-pointer transition-all bg-white dark:bg-white/[0.03] rounded-2xl group"
          >
            <div className="mb-4 p-4 bg-gunmetal/5 dark:bg-white/5 rounded-xl inline-block border border-titanium/20 dark:border-white/10 group-hover:scale-110 transition-transform">
              {service.icon}
            </div>
            <h3 className="text-2xl font-bold text-gunmetal dark:text-platinumSilver mb-3 group-hover:text-cyberBlue transition-colors">{service.name}</h3>
            <p className="text-textSecondary text-sm">{service.description}</p>
            <div className="mt-6 text-sm font-bold text-cyberBlue uppercase tracking-widest flex items-center gap-2 relative">
              View Details <span className="transform translate-x-0 group-hover:translate-x-2 transition-transform">→</span>
            </div>
          </div>
        ))}
      </div>

      {/* Service Details Modal */}
      <AnimatePresence>
        {selectedService && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={() => setSelectedService(null)}
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white dark:bg-eliteNavy w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden border border-titanium/20 dark:border-white/10 relative"
            >
              <button 
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 p-2 bg-black/5 dark:bg-white/10 rounded-full hover:bg-securityRed hover:text-white transition-colors z-10"
              >
                <FaTimes />
              </button>
              
              <div className="p-8 md:p-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-4 bg-gunmetal/5 dark:bg-white/5 rounded-xl border border-titanium/20 dark:border-white/10">
                    {selectedService.icon}
                  </div>
                  <h2 className="text-3xl font-bold text-gunmetal dark:text-platinumSilver">
                    {selectedService.name}
                  </h2>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="text-sm font-black uppercase text-cyberBlue tracking-widest mb-2">{t('services.overview', 'Overview')}</h4>
                    <p className="text-textSecondary text-lg">{selectedService.description}</p>
                  </div>
                  
                  <div className="bg-gunmetal/5 dark:bg-white/5 p-6 rounded-xl border border-titanium/20 dark:border-white/10">
                    <h4 className="text-sm font-black uppercase text-cyberBlue tracking-widest mb-2">{t('services.howItIsDone', "How It's Done")}</h4>
                    <p className="text-gunmetal dark:text-platinumSilver leading-relaxed">{selectedService.details}</p>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-successGreen/10 border border-successGreen/30 rounded-xl">
                    <span className="font-bold text-gunmetal dark:text-platinumSilver">{t('services.costEstimator', 'Average Cost Estimator')}</span>
                    <span className="font-black text-successGreen text-lg">{selectedService.cost}</span>
                  </div>
                </div>
                
                <div className="mt-8 pt-6 border-t border-titanium/20 dark:border-white/10">
                  <a href="/quote" className="block w-full py-4 text-center bg-cyberBlue hover:bg-cyberBlue/80 text-white font-bold uppercase tracking-widest rounded-xl transition-all shadow-lg hover:shadow-cyan-500/25">
                    {t('services.requestQuote', 'Request Formal Quote')}
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <LiveSecurityDashboard />
    </div>
  );
};

export default Services;
