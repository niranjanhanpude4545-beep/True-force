import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';

const WhatsAppSupport = () => {
  return (
    <motion.a
      href="https://wa.me/919876543210"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-24 md:bottom-8 right-6 z-[999] w-14 h-14 liquid-glass-strong flex justify-center items-center cursor-pointer group rounded-2xl border-2 border-white/20 shadow-2xl shadow-green-500/30"
      whileTap={{ scale: 0.95 }}
      whileHover={{ scale: 1.1 }}
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 200, delay: 0.5 }}
    >
      <div className="absolute inset-0 bg-green-500/10 dark:bg-green-500/5 rounded-2xl group-hover:bg-green-500/20 transition-colors" />
      <FaWhatsapp className="text-2xl text-green-500 drop-shadow-[0_0_8px_rgba(34,197,94,0.4)]" />
      
      {/* Tooltip */}
      <div className="absolute right-full mr-4 px-3 py-1 bg-white dark:bg-[#0d1321] border border-slate-200 dark:border-white/10 rounded-lg text-xs font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-xl">
        Chat with Command
      </div>
    </motion.a>
  );
};

export default WhatsAppSupport;
