import React, { useState, useEffect } from 'react';
import { FaShieldAlt, FaClock, FaMapMarkerAlt, FaExclamationTriangle, FaSignal, FaUsers, FaEye } from 'react-icons/fa';

const LiveSecurityDashboard = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [activeAlerts, setActiveAlerts] = useState(2);
  const [personnelActive, setPersonnelActive] = useState(1247);
  const [zonesMonitored, setZonesMonitored] = useState(89);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
      setActiveAlerts(prev => Math.max(0, prev + (Math.random() > 0.7 ? 1 : Math.random() > 0.8 ? -1 : 0)));
      setPersonnelActive(prev => prev + Math.floor(Math.random() * 3) - 1);
      setZonesMonitored(prev => Math.max(85, prev + (Math.random() > 0.5 ? 1 : -1)));
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  const alerts = [
    { id: 1, type: 'warning', message: 'Perimeter breach attempt - Sector 7', time: '2 min ago', priority: 'HIGH' },
    { id: 2, type: 'info', message: 'Security patrol completed - Zone Alpha', time: '5 min ago', priority: 'LOW' },
    { id: 3, type: 'success', message: 'System diagnostics passed', time: '12 min ago', priority: 'LOW' },
  ];

  const zoneStatus = [
    { zone: 'Alpha Sector', status: 'SECURE', personnel: 45, badge: 'bg-emerald-50 text-emerald-700', dot: 'bg-emerald-500' },
    { zone: 'Bravo Sector', status: 'SECURE', personnel: 38, badge: 'bg-emerald-50 text-emerald-700', dot: 'bg-emerald-500' },
    { zone: 'Charlie Sector', status: 'ALERT', personnel: 52, badge: 'bg-amber-50 text-amber-700', dot: 'bg-amber-500' },
    { zone: 'Delta Sector', status: 'SECURE', personnel: 29, badge: 'bg-emerald-50 text-emerald-700', dot: 'bg-emerald-500' },
  ];

  return (
    <section className="relative overflow-hidden bg-transparent py-24">
      <div className="absolute top-0 right-0 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />
      <div className="relative z-10 mx-auto w-[90%] max-w-[1400px]">
        <div className="mb-16 text-center">
          <div className="inline-flex items-center justify-center gap-3 rounded-full border border-blue-200 dark:border-blue-500/30 bg-white/90 dark:bg-gunmetal/90 px-5 py-2 text-sm text-slate-700 dark:text-slate-300 shadow-sm">
            <FaSignal className="text-blue-600" />
            <span className="font-semibold uppercase tracking-[0.18em]">Live Command Center</span>
            <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-700">LIVE</span>
          </div>

          <h2 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
            Real-Time Security Operations
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-400">
            A clear, modern dashboard for monitoring team strength, active alerts, and zone safety in one place.
          </p>
        </div>

        <div className="mb-10 rounded-[2rem] border border-blue-100 dark:border-blue-500/20 bg-white/90 dark:bg-gunmetal/50 p-6 shadow-xl shadow-blue-200/30 dark:shadow-none">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-100 text-blue-700 shadow-sm">
                <FaShieldAlt />
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">Command Center Status</p>
                <p className="mt-2 text-lg font-semibold text-slate-900 dark:text-white">Fully operational</p>
              </div>
            </div>

            <div className="rounded-3xl bg-blue-50 dark:bg-blue-900/20 px-5 py-4 text-right text-slate-700 dark:text-slate-300 shadow-sm">
              <p className="text-sm uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">System Time</p>
              <p className="mt-2 text-lg font-semibold text-slate-900 dark:text-white font-mono">
                {currentTime.toLocaleTimeString('en-US', { hour12: false, timeZone: 'Asia/Kolkata' })}
              </p>
            </div>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-4 mb-10">
          <div className="rounded-3xl border border-blue-100 dark:border-blue-500/20 bg-white dark:bg-gunmetal/30 p-6 shadow-sm">
            <div className="mb-4 flex items-center justify-between text-slate-600">
              <FaUsers className="text-xl text-blue-600" />
              <span className="text-xs uppercase tracking-[0.18em] text-slate-400">Live</span>
            </div>
            <p className="text-4xl font-semibold text-slate-900 dark:text-white">{personnelActive}</p>
            <p className="mt-3 text-sm text-slate-500">Active personnel</p>
            <p className="mt-4 text-xs font-semibold text-emerald-600">+2.3% from last hour</p>
          </div>

          <div className="rounded-3xl border border-blue-100 dark:border-blue-500/20 bg-white dark:bg-gunmetal/30 p-6 shadow-sm">
            <div className="mb-4 flex items-center justify-between text-slate-600">
              <FaEye className="text-xl text-blue-600" />
              <span className="text-xs uppercase tracking-[0.18em] text-slate-400">Live</span>
            </div>
            <p className="text-4xl font-semibold text-slate-900 dark:text-white">{zonesMonitored}</p>
            <p className="mt-3 text-sm text-slate-500">Zones monitored</p>
            <p className="mt-4 text-xs font-semibold text-emerald-600">98.7% coverage</p>
          </div>

          <div className="rounded-3xl border border-blue-100 dark:border-blue-500/20 bg-white dark:bg-gunmetal/30 p-6 shadow-sm">
            <div className="mb-4 flex items-center justify-between text-slate-600">
              <FaExclamationTriangle className="text-xl text-blue-600" />
              <span className="text-xs uppercase tracking-[0.18em] text-slate-400">Live</span>
            </div>
            <p className="text-4xl font-semibold text-slate-900 dark:text-white">{activeAlerts}</p>
            <p className="mt-3 text-sm text-slate-500">Active alerts</p>
            <p className="mt-4 text-xs font-semibold text-slate-500">Requires attention</p>
          </div>

          <div className="rounded-3xl border border-blue-100 dark:border-blue-500/20 bg-white dark:bg-gunmetal/30 p-6 shadow-sm">
            <div className="mb-4 flex items-center justify-between text-slate-600">
              <FaClock className="text-xl text-blue-600" />
              <span className="text-xs uppercase tracking-[0.18em] text-slate-400">Live</span>
            </div>
            <p className="text-4xl font-semibold text-slate-900 dark:text-white">1.8</p>
            <p className="mt-3 text-sm text-slate-500">Avg response</p>
            <p className="mt-4 text-xs font-semibold text-emerald-600">Within SLA</p>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-3xl border border-blue-100 dark:border-blue-500/20 bg-white dark:bg-gunmetal/30 p-6 shadow-sm">
            <div className="mb-6 flex items-center gap-3 text-slate-900">
              <FaExclamationTriangle className="text-xl text-blue-600" />
              <h3 className="text-xl font-semibold dark:text-white">Active Security Alerts</h3>
            </div>
            <div className="space-y-4">
              {alerts.map(alert => {
                const alertColor = alert.type === 'warning' ? 'bg-amber-50 text-amber-700' : alert.type === 'success' ? 'bg-emerald-50 text-emerald-700' : 'bg-slate-100 text-slate-700';
                const badgeColor = alert.priority === 'HIGH' ? 'bg-rose-100 text-rose-700' : 'bg-slate-100 text-slate-500';
                return (
                  <div key={alert.id} className={`rounded-3xl border border-blue-100 p-4 ${alertColor}`}>
                    <div className="mb-2 flex items-center justify-between gap-4 text-sm">
                      <span className={`inline-flex rounded-full px-3 py-1 font-semibold ${badgeColor}`}>{alert.priority}</span>
                      <span className="text-slate-500">{alert.time}</span>
                    </div>
                    <p className="text-slate-800">{alert.message}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="rounded-3xl border border-blue-100 dark:border-blue-500/20 bg-white dark:bg-gunmetal/30 p-6 shadow-sm">
            <div className="mb-6 flex items-center gap-3 text-slate-900">
              <FaMapMarkerAlt className="text-xl text-blue-600" />
              <h3 className="text-xl font-semibold dark:text-white">Security Zone Status</h3>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {zoneStatus.map((zone, index) => (
                <div key={index} className="rounded-3xl border border-blue-100 dark:border-blue-500/20 bg-blue-50 dark:bg-blue-900/10 p-4">
                  <div className="mb-3 flex items-center justify-between">
                    <span className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">{zone.zone}</span>
                    <span className={`${zone.dot} h-2 w-2 rounded-full`} />
                  </div>
                  <span className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${zone.badge}`}>{zone.status}</span>
                  <p className="mt-3 text-sm text-slate-600">{zone.personnel} personnel</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <button className="rounded-full bg-blue-600 px-8 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-white shadow-lg shadow-blue-200/60 transition hover:bg-blue-700">
            Access Full Command Center
          </button>
        </div>
      </div>
    </section>
  );
};

export default LiveSecurityDashboard;
