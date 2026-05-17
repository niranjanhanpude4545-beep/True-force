import React from 'react';
import { useTranslation } from 'react-i18next';
import img1 from '../../public/images/gallery_command_center_1775724037981.jpg';
import img2 from '../../public/images/gallery_cctv_system_1775724262552.jpg';
import img3 from '../../public/images/gallery_guard_post_1775724080278.jpg';
import img4 from '../../public/images/gallery_cyber_security_1775724351240.jpg';
import img5 from '../../public/images/gallery_asset_vault_1775724396613.jpg';
import img6 from '../../public/images/gallery_patrol_vehicle_1775724379983.jpg';

const Gallery = () => {
  const { t } = useTranslation();
  
  const galleryItems = [
    { id: 1, src: img1, title: t('gallery.items.c1', 'Live Command Operations') },
    { id: 2, src: img2, title: t('gallery.items.c2', 'Advanced CCTV Tracking') },
    { id: 3, src: img3, title: t('gallery.items.c3', 'Tactical Response Teams') },
    { id: 4, src: img4, title: t('gallery.items.c4', 'Cybersecurity Divisions') },
    { id: 5, src: img5, title: t('gallery.items.c5', 'Asset Protection Vaults') },
    { id: 6, src: img6, title: t('gallery.items.c6', 'Patrol Operations') }
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

