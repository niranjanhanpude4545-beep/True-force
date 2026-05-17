import React from 'react';
import { useTranslation } from 'react-i18next';
// Public assets served at root URL — reference by path, not imported as modules
const img1 = '/images/media__1779045351799.jpg';
const img2 = '/images/media__1779045351840.jpg';
const img3 = '/images/media__1779045351897.jpg';
const img4 = '/images/media__1779045351936.jpg';
const img5 = '/images/media__1779045351952.jpg';
const img6 = '/images/new_image_1.jpg';
const img7 = '/images/new_image_2.jpg';

const Gallery = () => {
  const { t } = useTranslation();
  
  const galleryItems = [
    { id: 1, src: img1, title: t('gallery.items.g1', 'Professional Security Guard') },
    { id: 2, src: img2, title: t('gallery.items.g2', 'Trained Security Personnel') },
    { id: 3, src: img3, title: t('gallery.items.g3', 'Event Security & Parades') },
    { id: 4, src: img4, title: t('gallery.items.g4', 'Honoring the Nation') },
    { id: 5, src: img5, title: t('gallery.items.g5', 'Community Engagement') },
    { id: 6, src: img6, title: t('gallery.items.g6', 'Security Briefing') },
    { id: 7, src: img7, title: t('gallery.items.g7', 'Specialized Uniforms') }
  ];

  return (
    <div className="pt-[120px] pb-16 min-h-[80vh] bg-transparent transition-colors duration-300">
      <div className="text-center mb-12 w-[90%] max-w-[1200px] mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">{t('gallery.title', 'Our Force in Action')}</h1>
        <p className="text-slate-500 dark:text-slate-400 text-lg max-w-2xl mx-auto">{t('gallery.subtitle', 'A glimpse into our real-time deployments, elite training, and command center.')}</p>
      </div>

      <div className="w-[90%] max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {galleryItems.map((item) => (
          <div key={item.id} className="relative group overflow-hidden rounded-xl bg-deepNavy/5 dark:bg-deepNavy/30 aspect-video flex justify-center items-center shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer">
            <img src={item.src} alt={item.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-gunmetal/90 via-gunmetal/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
              <h3 className="text-white font-bold text-lg translate-y-4 group-hover:translate-y-0 transition-transform duration-500">{item.title}</h3>
              <div className="h-1 w-12 bg-cyberBlue mt-2 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;

