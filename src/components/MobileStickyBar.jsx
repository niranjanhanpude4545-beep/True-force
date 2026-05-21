import React from 'react';
import { FaPhone, FaExclamationTriangle } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const MobileStickyBar = () => {
  const { t } = useTranslation();
  
  return (
    <>
      {/* Universal Sticky Bar - Persistent with Liquid Glass aesthetic */}
      <div className="fixed bottom-0 left-0 w-full md:w-auto md:left-6 md:bottom-8 z-[998] flex gap-3 p-4 md:p-0 transition-all duration-500">
        
        {/* Call Now - Liquid Glass Blue */}
        <motion.a 
          href="tel:+917385629397" 
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="flex-1 md:flex-none md:px-8 bg-blue-600/10 dark:bg-blue-600/20 backdrop-blur-xl border border-blue-400/30 dark:border-blue-500/30 text-blue-600 dark:text-blue-400 font-black py-4 md:py-3.5 flex items-center justify-center gap-3 rounded-2xl hover:bg-blue-600 hover:text-white transition-all duration-500 shadow-xl shadow-blue-500/10 group origin-left"
        >
          <FaPhone className="group-hover:rotate-12 transition-transform" /> 
          <span className="text-[12px] uppercase tracking-[0.15em] font-bold">{t('mobileSticky.callNow')}</span>
        </motion.a>

        {/* SOS - Liquid Glass Red */}
        <motion.a 
          href="tel:112" 
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="flex-1 md:flex-none md:px-8 bg-red-600/10 dark:bg-red-600/20 backdrop-blur-xl border border-red-400/30 dark:border-red-500/30 text-red-600 dark:text-red-400 font-black py-4 md:py-3.5 flex items-center justify-center gap-3 rounded-2xl hover:bg-red-600 hover:text-white transition-all duration-500 shadow-xl shadow-red-500/10 group border-2"
        >
          <FaExclamationTriangle className="animate-pulse text-lg" /> 
          <span className="text-[12px] uppercase tracking-[0.15em] font-black">{t('mobileSticky.sos')}</span>
        </motion.a>

      </div>
    </>
  );
};

export default MobileStickyBar;
