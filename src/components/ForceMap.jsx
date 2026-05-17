import { MapContainer, TileLayer, Circle } from 'react-leaflet';
import { useTranslation, Trans } from 'react-i18next';

const zones = [
  { loc: [18.5204, 73.8567], radius: 3000, color: '#2563eb' },
  { loc: [18.6161, 73.7983], radius: 2000, color: '#0891b2' },
  { loc: [18.5089, 73.9259], radius: 2500, color: '#0891b2' },
  { loc: [18.5808, 73.9787], radius: 1500, color: '#2563eb' }
];

const ForceMap = () => {
  const { t } = useTranslation();

  return (
    <section className="py-28 bg-transparent transition-colors duration-300" id="coverage">
      <div className="w-[90%] max-w-[1200px] mx-auto">
        <div className="mb-12 text-center">
          <span className="inline-flex items-center rounded-full border border-blue-200 bg-blue-100 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-blue-700">
            {t('forceMap.badge')}
          </span>
          <h2 className="mt-5 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            {t('forceMap.title')}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-400">
            <Trans i18nKey="forceMap.subtitle">
              View our real-time <strong className="text-slate-900 dark:text-white font-semibold">Security Density</strong> across Pune. Fast backup, massive local presence.
            </Trans>
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.4fr_0.6fr] items-start">
          <div className="h-[520px] overflow-hidden rounded-[2rem] border border-blue-100 dark:border-blue-500/20 shadow-xl bg-white dark:bg-gunmetal/30 dark:invert-[.95] dark:hue-rotate-180 dark:contrast-105">
            <MapContainer
              center={[18.5204, 73.8567]}
              zoom={11}
              scrollWheelZoom={false}
              style={{ width: '100%', height: '100%' }}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              {zones.map((zone, idx) => (
                <Circle
                  key={idx}
                  center={zone.loc}
                  pathOptions={{ color: zone.color, fillColor: zone.color, fillOpacity: 0.18 }}
                  radius={zone.radius}
                />
              ))}
            </MapContainer>
          </div>

          <div className="space-y-6 rounded-[2rem] border border-blue-100 dark:border-blue-500/20 bg-white/95 dark:bg-gunmetal/50 p-6 shadow-xl shadow-blue-200/20 dark:shadow-none backdrop-blur-sm">
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-700 dark:text-blue-400">{t('forceMap.coverage')}</h4>
              <p className="mt-4 text-slate-700 dark:text-slate-300 text-lg font-semibold">{t('forceMap.industrialHub')}</p>
            </div>

            <div className="rounded-3xl border border-blue-100 dark:border-blue-500/20 bg-blue-50 dark:bg-blue-900/10 p-5">
              <p className="text-sm text-slate-500 dark:text-slate-400">{t('forceMap.activeGuards')}</p>
              <p className="mt-3 text-3xl font-semibold text-slate-900 dark:text-white">150+</p>
            </div>

            <div className="rounded-3xl border border-blue-100 dark:border-blue-500/20 bg-white dark:bg-gunmetal/30 p-5">
              <p className="text-sm text-slate-500 dark:text-slate-400">{t('forceMap.avgResponseTime')}</p>
              <p className="mt-3 text-3xl font-semibold text-slate-900 dark:text-white">&lt; 8 mins</p>
            </div>

            <div className="rounded-3xl border border-blue-100 dark:border-blue-500/20 bg-white dark:bg-gunmetal/30 p-5">
              <p className="text-sm text-slate-500 dark:text-slate-400">{t('forceMap.backup') || 'Rapid local backup'}</p>
              <p className="mt-3 text-base font-semibold text-slate-700 dark:text-slate-300">Multiple rapid response teams across the network</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForceMap;
