import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FaDownload, FaShieldAlt, FaMapMarkerAlt, FaCalculator, FaChartLine, FaExclamationTriangle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const EliteROICalculator = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [propType, setPropType] = useState('residential');
  const [sqft, setSqft] = useState(50000);
  const [entryPoints, setEntryPoints] = useState(2);
  const [shift, setShift] = useState(12);
  const [threatLevel, setThreatLevel] = useState('medium');
  const [additionalGuards, setAdditionalGuards] = useState(0);

  const [score, setScore] = useState('A');
  const [recGuardsTxt, setRecGuardsTxt] = useState('');
  const [estCostTxt, setEstCostTxt] = useState('');
  const [roiMetrics, setRoiMetrics] = useState({
    responseTime: '2 min',
    coverage: '98%',
    incidentsPrevented: '15+',
    costSavings: '₹2.5L'
  });

  useEffect(() => {
    let baseGuards = Math.ceil(sqft / 15000);
    baseGuards += parseInt(entryPoints);

    // Threat level multiplier
    const threatMultiplier = threatLevel === 'high' ? 1.5 : threatLevel === 'low' ? 0.8 : 1;
    baseGuards = Math.ceil(baseGuards * threatMultiplier);
    
    // Add user's manual increment
    baseGuards += additionalGuards;

    let supervisor = baseGuards > 3 ? 1 : 0;
    let totalForce = baseGuards + supervisor;

    if(parseInt(shift) === 24) totalForce *= 2;

    let rate = 25000; // Elite pricing
    if(propType === 'industrial') rate = 28000;
    if(propType === 'corporate') rate = 32000;
    if(propType === 'event') rate = 1800;

    const totalCost = (baseGuards * rate) + (supervisor * (rate * 1.3));

    let currentScore = 'A';
    if (totalForce < 3) currentScore = 'B';
    if (totalForce > 10) currentScore = 'A+';
    if (threatLevel === 'high') currentScore = 'S'; // Special clearance

    setScore(currentScore);
    const guardsText = `${t('roi.forceDeployment')}: ${baseGuards}`;
    const supervisorText = supervisor ? ` + ${t('roi.supervisor', 'Command Supervisor')}` : '';
    setRecGuardsTxt(`${guardsText}${supervisorText}`);

    const unit = propType === 'event' ? t('roi.perDeployment') : t('roi.monthly');
    setEstCostTxt(`₹ ${Math.round(totalCost).toLocaleString()} ${unit}`);

    // Update ROI metrics based on calculations
    setRoiMetrics({
      responseTime: threatLevel === 'high' ? '<1 min' : '2 min',
      coverage: '98%',
      incidentsPrevented: threatLevel === 'high' ? '25+' : '15+',
      costSavings: threatLevel === 'high' ? '₹4.2L' : '₹2.5L'
    });
  }, [propType, sqft, entryPoints, shift, threatLevel, additionalGuards, t]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="py-[100px] relative overflow-hidden transition-colors duration-300 bg-transparent" id="roi-calculator">
      {/* Subtle accent glow */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/[0.03] rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-400/[0.02] rounded-full blur-3xl pointer-events-none"></div>

      <div className="w-[90%] max-w-[1400px] mx-auto relative z-10">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-3 bg-gunmetal/80 backdrop-blur-lg border border-titanium/40 rounded-full px-6 py-3 mb-6">
            <FaCalculator className="text-platinumSilver text-lg" />
            <span className="text-platinumSilver font-bold text-sm uppercase tracking-wider">{t('roi.title')}</span>
            <div className="status-active">{t('hero.online')}</div>
          </div>

          <h2 className="text-command font-bold font-heading text-slate-900 dark:text-white mb-4">
            {t('roi.subtitle')}
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-lg max-w-2xl mx-auto">
            {t('roi.description')}
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-[1.3fr_0.7fr] gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >

          {/* Command Center Inputs */}
          <motion.div
            variants={itemVariants}
            className="command-panel liquid-glass p-8 border-2"
          >
            <div className="flex items-center gap-3 mb-8">
              <FaShieldAlt className="text-cyberBlue text-xl" />
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">{t('roi.parameters')}</h3>
            </div>

            {/* Property Type */}
            <motion.div className="mb-6">
              <label className="block mb-3 font-semibold text-slate-900 dark:text-white flex items-center gap-2">
                <FaMapMarkerAlt className="text-cyberBlue" />
                {t('roi.assetClass')}
              </label>
              <select
                className="w-full p-4 bg-white/20 dark:bg-eliteNavy/80 border border-titanium/50 dark:text-white text-eliteNavy rounded-lg focus:outline-none focus:border-platinumSilver focus:ring-2 focus:ring-platinumSilver/30 transition-all backdrop-blur-sm"
                value={propType}
                onChange={e => setPropType(e.target.value)}
              >
                <option value="residential">{t('roi.propOptions.residential')}</option>
                <option value="corporate">{t('roi.propOptions.corporate')}</option>
                <option value="industrial">{t('roi.propOptions.industrial')}</option>
                <option value="event">{t('roi.propOptions.event')}</option>
              </select>
            </motion.div>

            {/* Threat Level */}
            <motion.div className="mb-6">
              <label className="block mb-3 font-semibold text-slate-900 dark:text-white flex items-center gap-2">
                <FaExclamationTriangle className="text-cyberBlue" />
                {t('roi.threatLevel')}
              </label>
              <select
                className="w-full p-4 bg-white/20 dark:bg-eliteNavy/80 border border-titanium/50 dark:text-white text-eliteNavy rounded-lg focus:outline-none focus:border-platinumSilver focus:ring-2 focus:ring-platinumSilver/30 transition-all backdrop-blur-sm"
                value={threatLevel}
                onChange={e => setThreatLevel(e.target.value)}
              >
                <option value="low">{t('roi.threatOptions.low')}</option>
                <option value="medium">{t('roi.threatOptions.medium')}</option>
                <option value="high">{t('roi.threatOptions.high')}</option>
              </select>
            </motion.div>

            {/* Square Feet Slider */}
            <motion.div className="mb-6">
              <div className="flex justify-between items-center mb-3">
                <label className="block font-semibold text-slate-900 dark:text-white">{t('roi.coverageArea')}</label>
                <span className="text-lg font-bold text-cyberBlue">{sqft.toLocaleString()}</span>
              </div>
              <input
                type="range"
                className="w-full h-3 bg-gunmetal rounded-lg appearance-none cursor-pointer accent-platinumSilver slider-elite"
                min="1000"
                max="500000"
                step="1000"
                value={sqft}
                onChange={e => setSqft(Number(e.target.value))}
              />
            </motion.div>

            {/* Entry Points */}
            <motion.div className="mb-6">
              <label className="block mb-3 font-semibold text-slate-900 dark:text-white">{t('roi.perimeters')}</label>
              <input
                type="number"
                className="w-full p-4 bg-white/20 dark:bg-eliteNavy/80 border border-titanium/50 dark:text-white text-eliteNavy rounded-lg focus:outline-none focus:border-platinumSilver focus:ring-2 focus:ring-platinumSilver/30 transition-all"
                value={entryPoints}
                min="1"
                max="20"
                onChange={e => setEntryPoints(e.target.value)}  
              />
            </motion.div>

            {/* Shift */}
            <motion.div className="mb-10">
              <label className="block mb-3 font-semibold text-slate-900 dark:text-white">{t('roi.operational')}</label>
              <select
                className="w-full p-4 bg-white/20 dark:bg-eliteNavy/80 border border-titanium/50 dark:text-white text-eliteNavy rounded-lg focus:outline-none focus:border-platinumSilver focus:ring-2 focus:ring-platinumSilver/30 transition-all"
                value={shift}
                onChange={e => setShift(e.target.value)}  
              >
                <option value="12">{t('roi.shiftOptions.12')}</option>
                <option value="24">{t('roi.shiftOptions.24')}</option>
              </select>
            </motion.div>

            {/* [NEW] Additional Guards Option */}
            <motion.div className="pt-6 border-t border-titanium/30">
              <div className="flex justify-between items-center mb-4">
                <label className="block font-bold text-cyberBlue uppercase tracking-widest text-xs">{t('roi.additionalGuards')}</label>
                <span className="text-xl font-bold text-cyberBlue">+{additionalGuards}</span>
              </div>
              <div className="flex gap-4">
                <button 
                  onClick={() => setAdditionalGuards(Math.max(0, additionalGuards - 1))}
                  className="flex-1 py-3 bg-gunmetal/5 dark:bg-gunmetal/40 border border-titanium/30 rounded-lg text-2xl font-bold text-slate-900 dark:text-white hover:bg-cyberBlue/20 transition-all"
                >
                  -
                </button>
                <button 
                  onClick={() => setAdditionalGuards(additionalGuards + 1)}
                  className="flex-1 py-3 bg-gunmetal/5 dark:bg-gunmetal/40 border border-titanium/30 rounded-lg text-2xl font-bold text-slate-900 dark:text-white hover:bg-cyberBlue/20 transition-all"
                >
                  +
                </button>
              </div>
            </motion.div>
          </motion.div>

          {/* Elite Results Command Center */}
          <motion.div
            variants={itemVariants}
            className="space-y-6"
          >
            {/* Security Clearance Badge */}
            <motion.div
              className="command-panel liquid-glass p-6 text-center"
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <div className="clearance-level mb-4 text-slate-600 dark:text-slate-300">{t('roi.clearance')}</div>
              <motion.div
                className="w-20 h-20 mx-auto rounded-full bg-securityRed/20 border-3 border-securityRed flex items-center justify-center text-3xl font-bold text-securityRed mb-3"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                {score}
              </motion.div>
              <div className="text-xs text-slate-600 dark:text-slate-300 uppercase tracking-wider">{t('roi.threatAssessment')}</div>
            </motion.div>

            {/* Elite Force Deployment */}
            <motion.div
              className="command-panel liquid-glass p-6"
            >
              <h4 className="text-lg font-bold dark:text-white text-eliteNavy mb-4 flex items-center gap-2">
                <FaShieldAlt className="text-cyberBlue" />
                {t('roi.forceDeployment')}
              </h4>
              <p className="text-cyberBlue font-semibold text-lg">{recGuardsTxt}</p>
              <div className="mt-4 pt-4 border-t border-titanium/30">
                <div className="text-sm text-slate-600 dark:text-slate-300">{t('forceMap.avgResponseTime')}</div>
                <div className="text-cyberBlue font-bold">{roiMetrics.responseTime}</div>
              </div>
            </motion.div>

            {/* ROI Metrics Grid */}
            <motion.div
              className="command-panel liquid-glass p-6"
            >
              <h4 className="text-lg font-bold dark:text-white text-eliteNavy mb-4 flex items-center gap-2">
                <FaChartLine className="text-successGreen" />
                {t('roi.roiMetrics')}
              </h4>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-xs text-slate-600 dark:text-slate-300 uppercase tracking-wider">{t('roi.coverage')}</div>
                  <div className="text-successGreen font-bold text-lg">{roiMetrics.coverage}</div>
                </div>
                <div>
                  <div className="text-xs text-slate-600 dark:text-slate-300 uppercase tracking-wider">{t('roi.incidents')}</div>
                  <div className="text-successGreen font-bold text-lg">{roiMetrics.incidentsPrevented}</div>
                </div>
                <div className="col-span-2 pt-2 border-t border-titanium/30">
                  <div className="text-xs text-slate-600 dark:text-slate-300 uppercase tracking-wider">{t('roi.savings')}</div>
                  <div className="text-successGreen font-bold text-xl">{roiMetrics.costSavings}</div>
                </div>
              </div>
            </motion.div>

            {/* Elite Cost Assessment */}
            <motion.div
              className="command-panel liquid-glass p-6"
            >
              <div className="mb-4">
                <p className="mb-2 text-xs text-slate-600 dark:text-slate-300 uppercase tracking-wider">{t('roi.investment')}</p>
                <h2 className="text-2xl font-bold m-0 text-cyberBlue">{estCostTxt}</h2>
                <small className="text-xs text-slate-600 dark:text-slate-300 mt-2 block">{t('roi.subjectToAudit')}</small>
              </div>

              {/* Elite CTA */}
              <motion.button
                onClick={() => navigate('/quote', { state: { propType, sqft, entryPoints, shift, threatLevel, additionalGuards, score, recGuardsTxt, estCostTxt, roiMetrics } })}
                className="w-full btn-elite-primary flex items-center justify-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <FaDownload size={16} />
                {t('roi.requestBtn')}
              </motion.button>
            </motion.div>
          </motion.div>

        </motion.div>
      </div>

      <style>{`
        .slider-elite::-webkit-slider-thumb {
          appearance: none;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: #2563eb;
          cursor: pointer;
          box-shadow: 0 0 15px rgba(37, 99, 235, 0.4);
          transition: all 0.3s;
        }
        .slider-elite::-webkit-slider-thumb:hover {
          box-shadow: 0 0 25px rgba(37, 99, 235, 0.6);
          transform: scale(1.1);
        }
      `}</style>
    </section>
  );
};

export default EliteROICalculator;
