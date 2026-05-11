import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaShareAlt, FaArrowLeft, FaShieldAlt, FaFileInvoice, FaCheckCircle, FaPrint, FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import logoNew from '../../public/logo-new.png';

const QuoteInvoice = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const quoteData = location.state || {};

  // No extra effects needed here currently

  const handlePrint = () => {
    window.print();
  };

  const handleShare = () => {
    const summary = `TrueForce Security Quote: ${quoteData.propType} - ${quoteData.estCostTxt}. Total Force: ${quoteData.recGuardsTxt}`;
    if (navigator.share) {
      navigator.share({
        title: 'TrueForce Strategic Quote',
        text: summary,
        url: window.location.href,
      }).catch(console.error);
    } else {
      navigator.clipboard.writeText(summary + " " + window.location.href);
      alert('Quote summary copied to clipboard!');
    }
  };

  const handleEmail = () => {
    const summary = `TrueForce Security Quote: ${quoteData.propType} - ${quoteData.estCostTxt}.%0D%0ATotal Force: ${quoteData.recGuardsTxt}`;
    window.location.href = `mailto:?subject=TrueForce Strategic Quote&body=${summary}`;
  };

  if (!location.state) return null;

  const quoteId = `TF-${Math.floor(100000 + Math.random() * 900000)}`;
  const date = new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' });

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-deepNavy py-20 px-4 transition-colors duration-300">
      <div className="max-w-[900px] mx-auto">
        
        {/* Actions Bar - Hidden on Print */}
        <div className="print:hidden flex flex-wrap justify-between items-center mb-8 gap-4">
          <button 
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-textSecondary hover:text-cyberBlue transition-colors font-bold group"
          >
            <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
            {t('common.back', 'Back to Command Center')}
          </button>
          
          <div className="flex flex-wrap gap-3 mt-4 md:mt-0">
            <button 
              onClick={handleEmail}
              className="flex items-center gap-2 bg-gunmetal/10 dark:bg-gunmetal/40 text-textPrimary px-4 md:px-5 py-2.5 rounded-xl border border-titanium/30 hover:bg-cyberBlue/10 transition-all font-bold text-sm"
            >
              <FaEnvelope /> {t('common.email', 'Email')}
            </button>
            <button 
              onClick={handleShare}
              className="flex items-center gap-2 bg-gunmetal/10 dark:bg-gunmetal/40 text-textPrimary px-4 md:px-5 py-2.5 rounded-xl border border-titanium/30 hover:bg-cyberBlue/10 transition-all font-bold text-sm"
            >
              <FaShareAlt /> {t('common.share', 'Share')}
            </button>
            <button 
              onClick={handlePrint}
              className="flex items-center gap-2 bg-cyberBlue text-white px-4 md:px-6 py-2.5 rounded-xl shadow-lg shadow-cyberBlue/20 hover:scale-105 transition-all font-bold text-sm"
            >
              <FaPrint /> {t('common.download', 'Download PDF')}
            </button>
            <a 
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#25D366] text-white px-4 md:px-6 py-2.5 rounded-xl shadow-lg shadow-[#25D366]/20 hover:scale-105 transition-all font-bold text-sm"
            >
              <FaWhatsapp /> {t('common.contact', 'Contact')}
            </a>
          </div>
        </div>

        {/* Professional Invoice Container */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white dark:bg-gunmetal/20 backdrop-blur-xl border border-titanium/30 rounded-3xl shadow-2xl overflow-hidden print:shadow-none print:border-none print:bg-white"
          id="invoice-capture"
        >
          {/* Header & Identification */}
          <div className="bg-eliteNavy dark:bg-black/40 p-10 text-white flex flex-col md:flex-row justify-between items-start md:items-center gap-8 border-b border-white/10">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center p-2 shadow-xl">
                 <img src={logoNew} alt="TrueForce" className="w-full h-auto object-contain" />
              </div>
              <div>
                <h1 className="text-2xl font-black tracking-tighter m-0 uppercase text-white">TrueForce</h1>
                <p className="text-xs text-platinumSilver/60 font-mono m-0">{t('common.motto', 'ELITE SECURITY SOLUTIONS')}</p>
              </div>
            </div>
            <div className="text-right">
              <div className="text-cyberBlue font-black text-xl mb-1 tracking-widest uppercase">{t('roi.title', 'Tactical Quote')}</div>
              <div className="text-sm font-mono opacity-80">{t('common.reference', 'Reference')}: {quoteId}</div>
              <div className="text-sm opacity-60">{t('common.date', 'Date')}: {date}</div>
            </div>
          </div>


          <div className="p-10">
            {/* Status & Validity */}
            <div className="flex justify-between items-center mb-10 pb-6 border-b border-gray-100 dark:border-white/5">
              <div className="flex items-center gap-2">
                <FaCheckCircle className="text-successGreen" />
                <span className="text-successGreen font-bold uppercase text-xs tracking-widest">{t('verification.verified', 'Verified Tactical Audit')}</span>
              </div>
              <div className="text-xs text-textSecondary italic">{t('common.validity', 'Valid for 15 Days from Issue Date')}</div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
              {/* Asset Information */}
              <div>
                <h3 className="text-xs font-black text-cyberBlue uppercase tracking-[0.2em] mb-4">{t('roi.parameters', 'Strategic Profile')}</h3>
                <div className="space-y-3">
                  <div className="flex justify-between py-2 border-b border-gray-50 dark:border-white/5">
                    <span className="text-textSecondary">{t('roi.assetClass', 'Asset Classification')}:</span>
                    <span className="font-bold text-textPrimary capitalize">{quoteData.propType}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-50 dark:border-white/5">
                    <span className="text-textSecondary">{t('roi.coverageArea', 'Operational Scale')}:</span>
                    <span className="font-bold text-textPrimary">{quoteData.sqft.toLocaleString()} {t('common.sqft', 'Sq.Ft')}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-50 dark:border-white/5">
                    <span className="text-textSecondary">{t('roi.perimeters', 'Primary Perimeters')}:</span>
                    <span className="font-bold text-textPrimary">{quoteData.entryPoints} {t('common.entryPoints', 'Entry Points')}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-50 dark:border-white/5">
                    <span className="text-textSecondary">{t('roi.threatLevel', 'Risk Assessment')}:</span>
                    <span className={`font-bold px-2 py-0.5 rounded text-xs uppercase ${
                      quoteData.threatLevel === 'high' ? 'bg-securityRed/10 text-securityRed' : 'bg-successGreen/10 text-successGreen'
                    }`}>{quoteData.threatLevel} {t('common.alertLevel', 'Alert Level')}</span>
                  </div>
                </div>
              </div>

              {/* Force Deployment */}
              <div className="bg-gray-50 dark:bg-white/5 p-6 rounded-2xl border border-gray-100 dark:border-white/10">
                <h3 className="text-xs font-black text-cyberBlue uppercase tracking-[0.2em] mb-4">{t('roi.forceDeployment', 'Force Deployment')}</h3>
                <div className="text-3xl font-black text-textPrimary mb-2">{quoteData.recGuardsTxt}</div>
                <div className="flex items-center gap-2 text-textSecondary text-sm mb-6">
                  <FaShieldAlt className="text-cyberBlue" />
                  {quoteData.shift} {t('common.hourCommandLoop', 'Hour Active Command Loop')}
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-3 bg-white dark:bg-gunmetal/40 rounded-xl border border-gray-100 dark:border-white/10">
                    <div className="text-[10px] text-textSecondary uppercase">{t('roi.avgResponseTime', 'Response Time')}</div>
                    <div className="font-bold text-cyberBlue">{quoteData.roiMetrics.responseTime}</div>
                  </div>
                  <div className="p-3 bg-white dark:bg-gunmetal/40 rounded-xl border border-gray-100 dark:border-white/10">
                    <div className="text-[10px] text-textSecondary uppercase">{t('roi.coverage', 'Coverage')}</div>
                    <div className="font-bold text-successGreen">{quoteData.roiMetrics.coverage}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Financial Summary */}
            <div className="mt-12 bg-eliteNavy text-white p-8 rounded-2xl shadow-xl shadow-eliteNavy/20 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                 <FaFileInvoice className="text-8xl transform rotate-12" />
              </div>
              <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-6">
                <div>
                  <h3 className="text-sm font-bold m-0 uppercase tracking-widest text-platinumSilver/60 mb-2 font-mono">{t('roi.estMonthlyCost', 'Estimated Tactical Investment')}</h3>
                  <div className="text-4xl font-black text-white">{quoteData.estCostTxt}</div>
                  <p className="text-xs text-platinumSilver/40 mt-2 m-0">*{t('roi.subjectToAudit', 'Inclusive of basic training, surveillance integration & duty insurance')}</p>
                </div>
                <div className="text-right border-l border-white/10 pl-8 hidden md:block">
                  <div className="text-[10px] text-platinumSilver/40 uppercase mb-1">{t('common.auditStatus', 'Audit Status')}</div>
                  <div className="px-3 py-1 bg-successGreen text-[10px] font-black rounded text-black mb-3 inline-block">PRE-APPROVED</div>
                  <div className="text-[10px] text-platinumSilver/40 uppercase">{t('common.commandNode', 'Assigned Command Node')}</div>
                  <div className="text-xs font-bold text-cyberBlue">PUNE-ALPHA-07</div>
                </div>
              </div>
            </div>

            {/* Terms & Seal */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-[1fr_200px] gap-8 border-t border-gray-100 dark:border-white/5 pt-8">
              <div className="text-[10px] text-textSecondary uppercase leading-relaxed font-mono opacity-60">
                {t('common.invoiceDisclaimer', 'TrueForce Elite Security Audit. This document is a tactical recommendation based on user-provided parameters.')}
              </div>
              <div className="flex flex-col items-center justify-center opacity-30 grayscale hover:grayscale-0 transition-all cursor-crosshair">
                 <img src={logoNew} alt="Seal" className="w-20 h-auto mb-2" />
                 <div className="text-[8px] font-black text-center leading-tight">OFFICIAL STRATEGIC<br/>RECOMMENDATION</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Support Footer */}
        <div className="print:hidden mt-8 text-center">
          <p className="text-textSecondary text-sm">
            Questions regarding this quote? <span className="text-cyberBlue font-bold cursor-pointer hover:underline">Contact Deployment Command</span>
          </p>
        </div>
      </div>

      <style>{`
        @media print {
          body { background: white !important; }
          .min-h-screen { padding: 0 !important; }
          #invoice-capture { border: none !important; border-radius: 0 !important; box-shadow: none !important; }
          .p-10 { padding: 0 !important; }
          .bg-gray-50 { background: white !important; }
          .dark .bg-deepNavy { background: white !important; }
          .bg-eliteNavy { color: black !important; background: transparent !important; border-bottom: 2px solid #0f172a !important; }
          .bg-eliteNavy * { color: black !important; }
          .text-white { color: black !important; }
          .text-platinumSilver { color: grey !important; }
          .bg-gunmetal { background: #f8fafc !important; }
          .dark .bg-gunmetal { background: white !important; }
          .shadow-2xl { box-shadow: none !important; }
          /* Ensure text colors are printed */
          .text-cyberBlue { color: #2563eb !important; -webkit-print-color-adjust: exact; }
          .text-successGreen { color: #10b981 !important; -webkit-print-color-adjust: exact; }
          .bg-successGreen { background-color: #10b981 !important; -webkit-print-color-adjust: exact; }
        }
      `}</style>
    </div>
  );
};

export default QuoteInvoice;
