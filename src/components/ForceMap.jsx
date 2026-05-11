import { MapContainer, TileLayer, Circle } from 'react-leaflet';
import { useTranslation, Trans } from 'react-i18next';
import { motion } from 'framer-motion';

const zones = [
  { loc: [18.5204, 73.8567], radius: 3000, color: '#2563eb' }, // Center - Cyber Blue
  { loc: [18.6161, 73.7983], radius: 2000, color: '#0891b2' }, // Pimpri - Cyan
  { loc: [18.5089, 73.9259], radius: 2500, color: '#0891b2' }, // Hadapsar/Magarpatta - Cyan
  { loc: [18.5808, 73.9787], radius: 1500, color: '#2563eb' }  // Wagholi/Bakori - Cyber Blue
];

const ForceMap = () => {
  const { t } = useTranslation();
  return (
    <section className="py-28 bg-white dark:bg-[#0d1321] transition-colors duration-300" id="coverage">
      <div className="w-[90%] max-w-[1200px] mx-auto">
        
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-block text-xs font-black uppercase text-violet-600 dark:text-violet-400 tracking-[0.35em] mb-4 px-5 py-2 rounded-full bg-violet-50 dark:bg-violet-400/10 border border-violet-200 dark:border-violet-400/20">
            {t('forceMap.badge')}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            {t('forceMap.title')}
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-lg max-w-2xl mx-auto">
            <Trans i18nKey="forceMap.subtitle">
              View our real-time <strong className="text-slate-900 dark:text-white font-semibold">Security Density</strong> across Pune. Fast backup, massive local presence.
            </Trans>
          </p>
        </motion.div>

        <motion.div
          className="h-[500px] relative rounded-2xl overflow-hidden border border-slate-200 dark:border-white/[0.08] shadow-xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          
          {/* Ensure leaflet map container takes full height */}
          <MapContainer 
            center={[18.5204, 73.8567]} 
            zoom={11} 
            scrollWheelZoom={false}
            style={{ width: '100%', height: '100%' }}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
              url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
              subdomains="abcd"
              maxZoom={20}
            />
            {zones.map((zone, idx) => (
              <Circle
                key={idx}
                center={zone.loc}
                pathOptions={{ color: zone.color, fillColor: zone.color, fillOpacity: 0.2 }}
                radius={zone.radius}
              />
            ))}
          </MapContainer>

          {/* Overlay Panel */}
          <div className="absolute top-5 right-5 bg-slate-900/80 backdrop-blur-xl border border-white/10 p-5 rounded-xl z-[1000] text-white shadow-2xl">
            <h4 className="font-bold mb-2 text-sm">{t('forceMap.zone')}: <span className="text-blue-400 font-semibold">{t('forceMap.industrialHub')}</span></h4>
            <p className="text-sm text-slate-300 mb-1">{t('forceMap.activeGuards')}: <span className="text-white font-bold">150+</span></p>
            <p className="text-sm text-slate-300">{t('forceMap.avgResponseTime')}: <span className="text-emerald-400 font-bold">{'<'} 8 mins</span></p>
          </div>

        </motion.div>
      </div>

    </section>
  );
};

export default ForceMap;
