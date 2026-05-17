import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
// Public assets are served at root URL — do NOT import from /public as modules
const logoNew = '/logo-new.png';

const SplashScreen = ({ isVisible }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (isVisible) {
      const timer = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            clearInterval(timer);
            return 100;
          }
          return prev + 2;
        });
      }, 50);
      return () => clearInterval(timer);
    }
  }, [isVisible]);

  if (!isVisible) return null;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.2,
      },
    },
  };

  const logoVariants = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 1.5,
        ease: "easeOut",
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.5,
      },
    },
  };

  const progressVariants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: progress / 100,
      transition: {
        duration: 0.1,
        ease: "linear",
      },
    },
  };

  return (
    <motion.div
      className="fixed inset-0 z-[9999] bg-deepNavy flex flex-col items-center justify-center pointer-events-none overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Animated background particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-platinumSilver/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Central glow effect */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.3, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-96 h-96 bg-platinumSilver/10 rounded-full blur-3xl" />
      </motion.div>

      <motion.div
        className="text-center relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* 3D Logo */}
        <motion.div
          variants={logoVariants}
          className="logo-3d-container relative"
        >
          <img
            src={logoNew}
            alt="True Force Security Logo"
            className="logo-3d-splash w-56 md:w-72 lg:w-80 h-auto object-contain mx-auto"
          />
        </motion.div>

        {/* Loading text */}
        <motion.div
          variants={textVariants}
          className="mt-8"
        >
          <motion.p
            className="text-textSecondary text-lg font-medium tracking-wider"
            animate={{
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            INITIALIZING SECURITY PROTOCOLS
          </motion.p>
        </motion.div>

        {/* Enhanced progress bar */}
        <motion.div
          variants={textVariants}
          className="mt-6"
        >
          <div className="w-80 h-2 bg-textPrimary/10 rounded-full overflow-hidden backdrop-blur-sm border border-textPrimary/20">
            <motion.div
              className="h-full bg-platinumSilver rounded-full relative"
              variants={progressVariants}
              animate="visible"
            >
              {/* Progress bar glow */}
              <motion.div
                className="absolute inset-0 bg-platinumSilver rounded-full blur-sm opacity-50"
                animate={{
                  opacity: [0.3, 0.7, 0.3],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>
          </div>

          {/* Progress percentage */}
          <motion.div
            className="mt-3 text-textSecondary text-sm font-mono"
            animate={{
              color: progress > 80 ? '#e5e7eb' : '#a0aabf',
            }}
          >
            {progress}%
          </motion.div>
        </motion.div>

        {/* Security indicators */}
        <motion.div
          variants={textVariants}
          className="mt-6 flex justify-center space-x-4"
        >
          {['SYSTEMS', 'NETWORK', 'DATABASE'].map((item, index) => (
            <motion.div
              key={item}
              className="flex items-center space-x-2"
              animate={{
                opacity: progress > (index + 1) * 25 ? 1 : 0.3,
              }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="w-2 h-2 rounded-full"
                animate={{
                  backgroundColor: progress > (index + 1) * 25 ? '#ff4500' : '#a0aabf',
                  boxShadow: progress > (index + 1) * 25
                    ? '0 0 10px rgba(255,69,0,0.6)'
                    : 'none',
                }}
                transition={{ duration: 0.3 }}
              />
              <span className="text-xs text-textSecondary font-mono tracking-wider">
                {item}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default SplashScreen;
