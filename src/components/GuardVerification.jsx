import React, { useState } from 'react';
import { FaSearch, FaCheckCircle, FaExclamationTriangle } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const GuardVerification = () => {
  const { t } = useTranslation();
  const [guardId, setGuardId] = useState('');
  const [status, setStatus] = useState('idle'); // idle | loading | success | error

  const handleVerify = () => {
    if (!guardId.trim()) return;
    setStatus('loading');
    
    setTimeout(() => {
      if (guardId.toUpperCase().startsWith('TF-')) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    }, 800);
  };

  return (
    <section className="py-[80px] bg-gradient-to-br from-white via-blue-50 to-blue-100" id="verification">
      <div className="w-[90%] max-w-[1200px] mx-auto text-center">
        <div className="max-w-[800px] mx-auto mb-10">
          <h2 className="text-[2.5rem]">{t('verification.title')}</h2>
          <p className="text-textSecondary text-[1.1rem]">
            {t('verification.subtitle')}
          </p>
        </div>
        
        <div className="max-w-[500px] mx-auto flex gap-sm-gap mb-8">
          <input 
            type="text" 
            className="flex-1 p-4 rounded-sm border border-textPrimary/20 bg-charcoal text-textPrimary text-base focus:outline-none focus:border-platinumSilver"
            placeholder={t('verification.placeholder')}
            value={guardId}
            onChange={(e) => setGuardId(e.target.value)}
          />
          <button 
            onClick={handleVerify}
            className="bg-transparent border-2 border-platinumSilver text-platinumSilver font-semibold py-3 px-6 rounded-sm hover:bg-platinumSilver/10 transition-colors flex items-center justify-center gap-2"
          >
            <FaSearch /> {t('verification.verify')}
          </button>
        </div>
        
        {status !== 'idle' && (
          <div className="bg-navyLight p-pad-xl rounded-lg border-l-[5px] border-platinumSilver max-w-[600px] mx-auto text-left min-h-[150px]">
            {status === 'loading' && (
              <div className="animate-pulse-anim p-5 text-center text-platinumSilver font-medium">
                {t('verification.fetching')}
              </div>
            )}
            
            {status === 'success' && (
              <div className="animate-fade-in-up">
                <div className="flex justify-between items-center border-b border-textPrimary/10 pb-4 mb-4">
                   <div>
                    <h3 className="m-0 text-gold text-xl font-bold">{t('verification.activeGuard')}</h3>
                    <p className="m-0 text-textSecondary mt-1">ID: {guardId.toUpperCase()} | {t('verification.assigned')} {t('roi.propOptions.industrial', 'Industrial Zone')}</p>
                  </div>
                  <FaCheckCircle className="text-3xl text-[#25D366]" />
                </div>
                <p className="mb-2"><strong>{t('verification.bgCheck')}</strong> {t('verification.cleared')} (Aug 2025)</p>
                <p className="mb-2"><strong>{t('verification.psara')}</strong> {t('verification.completed')}</p>
                <p className="mb-0"><strong>{t('verification.exp')}</strong> 4 {t('partners.stats.years', 'Years')}</p>
              </div>
            )}

            {status === 'error' && (
              <div className="text-platinumSilver flex items-center gap-3">
                <FaExclamationTriangle className="text-2xl" />
                <span>{t('verification.invalid')}</span>
              </div>
            )}
          </div>
        )}
        
      </div>
    </section>
  );
};

export default GuardVerification;
