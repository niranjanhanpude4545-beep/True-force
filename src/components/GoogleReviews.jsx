import React from 'react';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const GoogleReviews = () => {
  const { t } = useTranslation();
  
  const reviews = [
    {
      id: 1,
      name: t('reviews.items.r1.name', "Rajesh Sharma"),
      date: t('reviews.items.r1.date', "2 weeks ago"),
      text: t('reviews.items.r1.text', "Exceptional service by TrueForce. Their guards are well-trained and extremely professional."),
      stars: 5,
    },
    {
      id: 2,
      name: t('reviews.items.r2.name', "Priya Deshmukh"),
      date: t('reviews.items.r2.date', "1 month ago"),
      text: t('reviews.items.r2.text', "We hired TrueForce for our residential society. The shift transitions are seamless."),
      stars: 5,
    },
    {
      id: 3,
      name: t('reviews.items.r3.name', "Amit Patil"),
      date: t('reviews.items.r3.date', "2 months ago"),
      text: t('reviews.items.r3.text', "Highly reliable security firm in Pune. Transparent pricing and no hidden fees."),
      stars: 5,
    }
  ];

  const colors = ['bg-blue-500', 'bg-emerald-500', 'bg-violet-500'];

  return (
    <section className="py-28 bg-white dark:bg-[#0d1321] transition-colors duration-300 relative overflow-hidden">
      {/* Subtle accent glow */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[400px] bg-amber-500/[0.04] rounded-full blur-[120px] pointer-events-none"></div>

      <div className="w-[90%] max-w-[1200px] mx-auto relative z-10">
        <motion.div
          className="flex flex-col items-center mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <FcGoogle className="text-4xl" />
            <span className="text-sm font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">{t('reviews.googleBadge', 'Google Reviews')}</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            {t('reviews.title1', 'What Our')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500">{t('reviews.title2', 'Clients')}</span> {t('reviews.subtitle', 'Say')}
          </h2>
          <div className="flex items-center gap-3 mb-3">
            <span className="text-3xl font-black text-slate-900 dark:text-white">4.9</span>
            <div className="flex text-amber-400 text-xl gap-0.5">
              {[...Array(5)].map((_, i) => <FaStar key={i} />)}
            </div>
          </div>
          <p className="text-slate-500 dark:text-slate-400 text-sm">{t('reviews.verified', 'Based on verified Google Reviews')}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review, idx) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.12 }}
              className="relative p-7 rounded-2xl border border-slate-200 dark:border-white/[0.08] bg-slate-50 dark:bg-white/[0.03] hover:shadow-xl hover:shadow-amber-500/5 hover:border-amber-200 dark:hover:border-amber-500/20 transition-all duration-500 group"
            >
              {/* Quote icon */}
              <FaQuoteLeft className="absolute top-5 right-5 text-2xl text-slate-200 dark:text-white/[0.06] group-hover:text-amber-200 dark:group-hover:text-amber-400/10 transition-colors duration-500" />

              <div className="flex items-center gap-3 mb-5">
                <div className={`w-11 h-11 ${colors[idx]} rounded-full flex justify-center items-center font-bold text-white text-lg shadow-lg`}>
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-sm">{review.name}</h4>
                  <span className="text-xs text-slate-400 dark:text-slate-500">{review.date}</span>
                </div>
                <FcGoogle className="text-xl ml-auto" />
              </div>
              <div className="flex text-amber-400 mb-4 text-sm gap-0.5">
                {[...Array(review.stars)].map((_, i) => <FaStar key={i} />)}
              </div>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">"{review.text}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GoogleReviews;

