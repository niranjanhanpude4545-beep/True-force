import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaShieldAlt, FaClock, FaMapMarkerAlt, FaExclamationTriangle, FaSignal, FaUsers, FaEye } from 'react-icons/fa';

const LiveSecurityDashboard = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [activeAlerts, setActiveAlerts] = useState(2);
  const [personnelActive, setPersonnelActive] = useState(1247);
  const [zonesMonitored, setZonesMonitored] = useState(89);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
      // Simulate live data updates
      setActiveAlerts(prev => Math.max(0, prev + (Math.random() > 0.7 ? 1 : Math.random() > 0.8 ? -1 : 0)));
      setPersonnelActive(prev => prev + Math.floor(Math.random() * 3) - 1);
      setZonesMonitored(prev => Math.max(85, prev + (Math.random() > 0.5 ? 1 : -1)));
    }, 3000);

    return () => clearInterval(timer);
  }, []);

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

  const alerts = [
    { id: 1, type: 'warning', message: 'Perimeter breach attempt - Sector 7', time: '2 min ago', priority: 'HIGH' },
    { id: 2, type: 'info', message: 'Security patrol completed - Zone Alpha', time: '5 min ago', priority: 'LOW' },
    { id: 3, type: 'success', message: 'System diagnostics passed', time: '12 min ago', priority: 'LOW' },
  ];

  return (
    <section className="bg-eliteNavy py-[100px] relative overflow-hidden">
      {/* Elite Background Elements */}
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 bg-cyberBlue/3 rounded-full blur-3xl opacity-20 pointer-events-none"
        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.3, 0.1] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      {/* Security Grid Overlay */}
      <div className="absolute inset-0 opacity-3 z-0">
        <div className="absolute inset-0 border border-cyberBlue/5" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(37,99,235,0.06) 1px, transparent 0)`,
          backgroundSize: '30px 30px'
        }} />
      </div>

      <div className="w-[90%] max-w-[1400px] mx-auto relative z-10">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-3 bg-gunmetal/80 backdrop-blur-lg border border-titanium/40 rounded-full px-6 py-3 mb-6">
            <FaSignal className="text-successGreen text-lg animate-pulse" />
            <span className="text-platinumSilver font-bold text-sm uppercase tracking-wider">Live Command Center</span>
            <div className="status-active animate-pulse">LIVE</div>
          </div>

          <h2 className="text-command font-bold font-heading text-white mb-4">
            Real-Time Security Operations
          </h2>
          <p className="text-briefing text-textSecondary max-w-2xl mx-auto">
            Live monitoring dashboard with instant threat detection and response coordination
          </p>
        </motion.div>

        {/* Command Center Header */}
        <motion.div
          className="command-panel p-6 rounded-xl border border-titanium/40 bg-gunmetal/20 backdrop-blur-lg mb-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-cyberBlue/20 border border-cyberBlue flex items-center justify-center">
                <FaShieldAlt className="text-cyberBlue" />
              </div>
              <div>
                <div className="text-sm text-textSecondary uppercase tracking-wider">Command Center Status</div>
                <div className="text-successGreen font-bold flex items-center gap-2">
                  <div className="w-2 h-2 bg-successGreen rounded-full animate-pulse"></div>
                  FULLY OPERATIONAL
                </div>
              </div>
            </div>

            <div className="text-right">
              <div className="text-sm text-textSecondary uppercase tracking-wider">System Time</div>
              <div className="text-platinumSilver font-bold font-mono">
                {currentTime.toLocaleTimeString('en-US', {
                  hour12: false,
                  timeZone: 'Asia/Kolkata'
                })}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Live Metrics Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants} className="metric-elite-card">
            <div className="flex items-center justify-between mb-4">
              <FaUsers className="text-platinumSilver text-2xl" />
              <div className="status-active text-xs">LIVE</div>
            </div>
            <div className="metric-value">{personnelActive}</div>
            <div className="metric-label">Active Personnel</div>
            <div className="mt-2 text-xs text-successGreen">+2.3% from last hour</div>
          </motion.div>

          <motion.div variants={itemVariants} className="metric-elite-card">
            <div className="flex items-center justify-between mb-4">
              <FaEye className="text-cyberBlue text-2xl" />
              <div className="status-active text-xs">LIVE</div>
            </div>
            <div className="metric-value">{zonesMonitored}</div>
            <div className="metric-label">Zones Monitored</div>
            <div className="mt-2 text-xs text-successGreen">98.7% coverage</div>
          </motion.div>

          <motion.div variants={itemVariants} className="metric-elite-card">
            <div className="flex items-center justify-between mb-4">
              <FaExclamationTriangle className="text-platinumSilver text-2xl" />
              <div className="status-active text-xs">LIVE</div>
            </div>
            <div className="metric-value">{activeAlerts}</div>
            <div className="metric-label">Active Alerts</div>
            <div className="mt-2 text-xs text-platinumSilver">Requires attention</div>
          </motion.div>

          <motion.div variants={itemVariants} className="metric-elite-card">
            <div className="flex items-center justify-between mb-4">
              <FaClock className="text-successGreen text-2xl" />
              <div className="status-active text-xs">LIVE</div>
            </div>
            <div className="metric-value">1.8</div>
            <div className="metric-label">Avg Response (min)</div>
            <div className="mt-2 text-xs text-successGreen">Within SLA</div>
          </motion.div>
        </motion.div>

        {/* Live Alerts & Activity Feed */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Active Alerts Panel */}
          <motion.div variants={itemVariants} className="command-panel p-6 rounded-xl border border-titanium/40 bg-gunmetal/20 backdrop-blur-lg">
            <div className="flex items-center gap-3 mb-6">
              <FaExclamationTriangle className="text-platinumSilver text-xl" />
              <h3 className="text-xl font-bold text-textPrimary">Active Security Alerts</h3>
            </div>

            <div className="space-y-4">
              {alerts.map((alert) => (
                <motion.div
                  key={alert.id}
                  className="flex items-start gap-4 p-4 rounded-lg bg-eliteNavy/50 border border-titanium/30"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className={`w-3 h-3 rounded-full mt-2 ${
                    alert.type === 'warning' ? 'bg-warningOrange' :
                    alert.type === 'success' ? 'bg-successGreen' : 'bg-infoBlue'
                  } animate-pulse`} />
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <span className={`text-xs font-bold uppercase tracking-wider px-2 py-1 rounded ${
                        alert.priority === 'HIGH' ? 'bg-securityRed/20 text-securityRed' : 'bg-titanium/20 text-textSecondary'
                      }`}>
                        {alert.priority}
                      </span>
                      <span className="text-xs text-textSecondary">{alert.time}</span>
                    </div>
                    <p className="text-sm text-textPrimary">{alert.message}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Security Zones Status */}
          <motion.div variants={itemVariants} className="command-panel p-6 rounded-xl border border-titanium/40 bg-gunmetal/20 backdrop-blur-lg">
            <div className="flex items-center gap-3 mb-6">
              <FaMapMarkerAlt className="text-platinumSilver text-xl" />
              <h3 className="text-xl font-bold text-textPrimary">Security Zone Status</h3>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { zone: 'Alpha Sector', status: 'SECURE', personnel: 45, color: 'successGreen' },
                { zone: 'Bravo Sector', status: 'SECURE', personnel: 38, color: 'successGreen' },
                { zone: 'Charlie Sector', status: 'ALERT', personnel: 52, color: 'warningOrange' },
                { zone: 'Delta Sector', status: 'SECURE', personnel: 29, color: 'successGreen' },
              ].map((zone, index) => (
                <motion.div
                  key={index}
                  className="p-4 rounded-lg bg-eliteNavy/50 border border-titanium/30"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-textSecondary uppercase tracking-wider">{zone.zone}</span>
                    <div className={`w-2 h-2 rounded-full bg-${zone.color} animate-pulse`} />
                  </div>
                  <div className={`text-sm font-bold text-${zone.color} mb-1`}>{zone.status}</div>
                  <div className="text-xs text-textSecondary">{zone.personnel} personnel</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Elite CTA */}
        <motion.div
          className="text-center mt-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.button
            variants={itemVariants}
            className="btn-elite-primary"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            ACCESS FULL COMMAND CENTER
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default LiveSecurityDashboard;