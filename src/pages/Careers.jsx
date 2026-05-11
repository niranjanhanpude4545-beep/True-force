import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowLeft, FaPaperclip, FaCheckCircle } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const Careers = () => {
  const { t } = useTranslation();
  const [selectedJob, setSelectedJob] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const openings = [
    {
      id: 1,
      key: 'guard',
      title: t('careers.jobs.guard.title'),
      location: "Pune (Multiple Sites)",
      type: "Full-time",
      requirements: t('careers.jobs.guard.req'),
      salary: "₹18,000 - ₹25,000 / month"
    },
    {
      id: 2,
      key: 'supervisor',
      title: t('careers.jobs.supervisor.title'),
      location: "Pune HQ",
      type: "Full-time",
      requirements: t('careers.jobs.supervisor.req'),
      salary: "₹30,000 - ₹45,000 / month"
    },
    {
      id: 3,
      key: 'vigilance',
      title: t('careers.jobs.vigilance.title'),
      location: "Industrial Zones",
      type: "Shift-based",
      requirements: t('careers.jobs.vigilance.req'),
      salary: "₹25,000 - ₹35,000 / month"
    }
  ];

  const handleApply = (job) => {
    setSelectedJob(job);
    setIsSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setSelectedJob(null);
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <div className="pt-[120px] pb-24 min-h-screen bg-white dark:bg-[#0d1321] transition-colors duration-300">
      <div className="w-[90%] max-w-[1000px] mx-auto">
        <AnimatePresence mode="wait">
          {!selectedJob ? (
            <motion.div
              key="list"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <div className="text-center mb-12">
                <h1 className="text-4xl md:text-6xl font-black text-gunmetal dark:text-platinumSilver mb-6">
                  {t('careers.title')}<span className="text-cyberBlue">{t('careers.titleSpan')}</span>
                </h1>
                <p className="text-textSecondary text-lg max-w-2xl mx-auto">{t('careers.subtitle')}</p>
              </div>

              <div className="grid gap-6">
                {openings.map((job) => (
                  <div key={job.id} className="border border-slate-200 dark:border-white/[0.08] p-8 flex flex-col md:flex-row justify-between items-center group bg-white dark:bg-white/[0.03] rounded-2xl hover:shadow-lg transition-all">
                    <div className="mb-6 md:mb-0">
                      <h3 className="text-2xl font-bold text-gunmetal dark:text-platinumSilver mb-2">{job.title}</h3>
                      <div className="flex flex-wrap gap-4 text-sm text-textSecondary uppercase tracking-wider font-semibold">
                        <span>{job.location}</span>
                        <span className="text-cyberBlue">•</span>
                        <span>{job.type}</span>
                        <span className="text-cyberBlue">•</span>
                        <span className="text-successGreen">{job.salary}</span>
                      </div>
                      <p className="mt-4 text-textSecondary max-w-xl">{job.requirements}</p>
                    </div>
                    <button
                      onClick={() => handleApply(job)}
                      className="px-8 py-3 bg-cyberBlue hover:bg-cyberBlue/80 text-white font-bold rounded-xl transition-all w-full md:w-auto shadow-lg shadow-cyberBlue/20"
                    >
                      {t('careers.applyBtn')}
                    </button>
                  </div>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="form"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="max-w-2xl mx-auto"
            >
              <button
                onClick={() => setSelectedJob(null)}
                className="flex items-center gap-2 text-textSecondary hover:text-cyberBlue mb-8 transition-colors font-bold uppercase tracking-widest text-sm"
              >
                <FaArrowLeft /> {t('careers.backBtn')}
              </button>

              <div className="liquid-glass border border-titanium/20 dark:border-white/10 p-8 md:p-12 relative overflow-hidden bg-white dark:bg-white/5 backdrop-blur-md rounded-xl shadow-2xl">
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="text-successGreen text-7xl mb-6 flex justify-center"
                    >
                      <FaCheckCircle />
                    </motion.div>
                    <h2 className="text-3xl font-bold text-gunmetal dark:text-platinumSilver mb-4">{t('careers.successTitle')}</h2>
                    <p className="text-textSecondary">{t('careers.successMsg')}</p>
                  </div>
                ) : (
                  <>
                    <div className="mb-8">
                      <span className="text-cyberBlue font-bold uppercase tracking-widest text-xs">{t('careers.appFor')}</span>
                      <h2 className="text-3xl font-black text-gunmetal dark:text-platinumSilver mt-1">{selectedJob.title}</h2>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-xs font-bold text-textSecondary uppercase tracking-widest mb-2">{t('careers.fullName')}</label>
                          <input required type="text" className="w-full bg-gunmetal/5 dark:bg-white/5 border border-titanium/30 dark:border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-cyberBlue text-gunmetal dark:text-white" placeholder="e.g. Rahul Patil" />
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-textSecondary uppercase tracking-widest mb-2">{t('careers.phoneNumber')}</label>
                          <input required type="tel" className="w-full bg-gunmetal/5 dark:bg-white/5 border border-titanium/30 dark:border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-cyberBlue text-gunmetal dark:text-white" placeholder="+91 00000 00000" />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-textSecondary uppercase tracking-widest mb-2">{t('careers.experience')}</label>
                        <textarea rows="3" className="w-full bg-gunmetal/5 dark:bg-white/5 border border-titanium/30 dark:border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-cyberBlue text-gunmetal dark:text-white" placeholder="Tell us about your previous security roles..."></textarea>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-textSecondary uppercase tracking-widest mb-2">{t('careers.resume')}</label>
                        <div className="relative group">
                          <input required type="file" className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10" />
                          <div className="border-dashed border-2 border-titanium/30 dark:border-white/30 p-8 text-center flex flex-col items-center gap-3 rounded-xl hover:border-cyberBlue transition-colors">
                            <FaPaperclip className="text-3xl text-textSecondary group-hover:text-cyberBlue transition-colors" />
                            <span className="text-textSecondary font-bold">{t('careers.attach')}</span>
                            <span className="text-[10px] text-textSecondary/50 uppercase">{t('careers.maxSize')}</span>
                          </div>
                        </div>
                      </div>

                      <button
                        type="submit"
                        className="w-full py-4 bg-cyberBlue hover:bg-cyberBlue/80 text-white font-black uppercase tracking-widest rounded-xl transition-all shadow-xl shadow-cyberBlue/20"
                      >
                        {t('careers.submitBtn')}
                      </button>
                    </form>
                  </>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Careers;
