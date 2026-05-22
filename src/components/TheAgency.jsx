import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FaUserTie, FaShieldAlt } from 'react-icons/fa';

const TheAgency = () => {
  const { t } = useTranslation();

  return (
    <motion.div
      className="text-center mb-20 relative"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      <span className="inline-block text-xs font-black uppercase text-blue-600 dark:text-blue-400 tracking-[0.35em] mb-4 px-5 py-2 rounded-full bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20">
        {t('agency.badge', 'The Agency')}
      </span>
      <h3 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-12">
        {t('agency.title', 'The People Behind Your Safety')}
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {/* Ramesh Jadhav */}
        <motion.div
          whileHover={{ y: -5 }}
          className="relative group overflow-hidden rounded-2xl bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-white/10 p-8 shadow-lg transition-all duration-300"
        >
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <FaShieldAlt className="text-6xl text-blue-500" />
          </div>
          <div className="relative z-10 flex flex-col items-center">
            <div className="w-24 h-24 rounded-full bg-slate-100 dark:bg-slate-700 flex items-center justify-center mb-4 border-4 border-white dark:border-slate-800 shadow-md">
              <FaUserTie className="text-4xl text-slate-400 dark:text-slate-500" />
            </div>
            <h4 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Ramesh Jadhav</h4>
            <p className="text-blue-600 dark:text-blue-400 font-semibold uppercase tracking-wider text-sm mb-4">Managing Director</p>
            <p className="text-slate-600 dark:text-slate-400 text-sm">
              Leading True Force Security with unwavering dedication, vision, and a commitment to providing elite security solutions across the nation.
            </p>
          </div>
        </motion.div>

        {/* Ajit Singh */}
        <motion.div
          whileHover={{ y: -5 }}
          className="relative group overflow-hidden rounded-2xl bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-white/10 p-8 shadow-lg transition-all duration-300"
        >
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <FaShieldAlt className="text-6xl text-blue-500" />
          </div>
          <div className="relative z-10 flex flex-col items-center">
            <div className="w-24 h-24 rounded-full bg-slate-100 dark:bg-slate-700 flex items-center justify-center mb-4 border-4 border-white dark:border-slate-800 shadow-md overflow-hidden">
              <img 
                src={import.meta.env.BASE_URL + 'images/ajit_singh.jpg'} 
                alt="Ajit Singh" 
                className="w-full h-full object-cover object-top transform group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <h4 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Ajit Singh</h4>
            <p className="text-blue-600 dark:text-blue-400 font-semibold uppercase tracking-wider text-sm mb-4">General Manager</p>
            <p className="text-slate-600 dark:text-slate-400 text-sm">
              Ensuring operational excellence, rigorous training standards, and seamless execution on the ground.
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default TheAgency;
