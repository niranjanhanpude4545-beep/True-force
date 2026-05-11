import React, { useState, useRef, useEffect } from 'react';
import { FaRobot, FaPaperPlane, FaTimes, FaCalculator, FaShieldAlt, FaMapMarkerAlt, FaBriefcase } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

const CommanderBot = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [inputText, setInputText] = useState('');
  const [messages, setMessages] = useState([
    { role: 'system', text: t('commander.responses.systemOnline'), hasActions: true }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  
  const bottomRef = useRef(null);

  useEffect(() => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen, isTyping]);

  const quickActions = [
    { id: 'quote', label: t('commander.quickActions.quote', 'Request Quote'), icon: <FaCalculator />, action: () => navigate('/services') },
    { id: 'coverage', label: t('commander.quickActions.coverage', 'Check Coverage'), icon: <FaMapMarkerAlt />, action: () => {
      const el = document.getElementById('coverage');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
      else navigate('/');
    }},
    { id: 'human', label: t('commander.quickActions.human', 'Speak to Human'), icon: <FaShieldAlt />, action: () => window.open('https://wa.me/919876543210', '_blank') },
    { id: 'jobs', label: t('commander.quickActions.jobs', 'View Careers'), icon: <FaBriefcase />, action: () => navigate('/careers') },
  ];

  const generateBotResponse = (userText) => {
    const text = userText.toLowerCase();
    
    if (text.includes('price') || text.includes('cost') || text.includes('quote') || text.includes('fee')) {
      return t('commander.responses.pricing');
    }
    if (text.includes('service') || text.includes('what do you do') || text.includes('offer')) {
      return t('commander.responses.services');
    }
    if (text.includes('location') || text.includes('where') || text.includes('city') || text.includes('pune') || text.includes('mumbai')) {
      return t('commander.responses.location');
    }
    if (text.includes('hi') || text.includes('hello') || text.includes('hey')) {
      return t('commander.responses.greeting');
    }
    if (text.includes('contact') || text.includes('phone') || text.includes('call') || text.includes('human')) {
      return t('commander.responses.human');
    }
    if (text.includes('job') || text.includes('career') || text.includes('hiring') || text.includes('vacancy')) {
      return t('commander.responses.jobs');
    }
    
    return t('commander.responses.fallback');
  };

  const handleAction = (item) => {
    setMessages(prev => [...prev, { role: 'user', text: item.label }]);
    setTimeout(() => {
      item.action();
      if (item.id === 'human') return; // Open link
      setIsOpen(false);
    }, 500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    const userMessage = inputText.trim();
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setInputText('');
    setIsTyping(true);

    setTimeout(() => {
      const response = generateBotResponse(userMessage);
      setMessages(prev => [...prev, { role: 'system', text: response }]);
      setIsTyping(false);
    }, 800 + Math.random() * 1000);
  };

  return (
    <>
      {/* Floating Logo-like Commander Bot */}
      {!isOpen && (
        <div className="fixed bottom-[100px] md:bottom-24 right-6 z-[1000]">
          <div
            className="w-14 h-14 liquid-glass-strong shadow-2xl shadow-cyberBlue/40 rounded-2xl flex items-center justify-center cursor-pointer hover:scale-110 !hover:rotate-0 transition-all duration-500 group animate-float border-2 border-white/20"
            onClick={() => setIsOpen(true)}
          >
            <FaRobot className="text-2xl text-platinumSilver group-hover:text-cyberBlue transition-colors duration-300" />
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-successGreen rounded-full border border-eliteNavy animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.8)]"></div>
          </div>
        </div>
      )}

      {/* Chat Interface */}
      {isOpen && (
        <div className="fixed bottom-[180px] md:bottom-[120px] right-[10px] md:right-[30px] w-[350px] shadow-2xl z-[1000] overflow-hidden rounded-2xl border border-slate-200 dark:border-white/[0.08] drop-shadow-2xl">
          {/* Bot Header */}
          <div className="bg-gradient-to-r from-gunmetal to-eliteNavy text-white py-4 px-5 flex justify-between items-center shadow-md">
            <div className="flex items-center gap-3">
              <div className="relative">
                <FaRobot className="text-2xl text-cyberBlue" />
                <span className="absolute -bottom-1 -right-1 block w-2.5 h-2.5 bg-successGreen rounded-full border border-white"></span>
              </div>
              <div>
                <h3 className="font-bold text-sm tracking-widest uppercase">{t('commander.chatTitle', 'Commander AI')}</h3>
                <p className="text-[10px] text-cyberBlue/80 uppercase font-bold tracking-wider">{t('hero.online', 'Tactical Support Active')}</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-platinumSilver hover:text-white hover:rotate-90 transition-all duration-300">
              <FaTimes />
            </button>
          </div>

          {/* Bot Body */}
          <div className="bg-white/95 dark:bg-gunmetal/95 backdrop-blur-xl h-[420px] flex flex-col">
            <div className="flex-1 p-4 overflow-y-auto flex flex-col gap-4">
              {messages.map((msg, idx) => (
                <div key={idx} className="flex flex-col gap-2">
                  <div className={`flex ${msg.role === 'system' ? 'justify-start' : 'justify-end'}`}>
                    <div
                      className={`p-3.5 rounded-2xl text-sm max-w-[85%] shadow-sm leading-relaxed ${
                        msg.role === 'system'
                          ? 'bg-gray-100 dark:bg-eliteNavy text-gunmetal dark:text-platinumSilver rounded-tl-none border border-black/5 dark:border-white/5'
                          : 'bg-cyberBlue text-white rounded-tr-none shadow-cyberBlue/20 font-medium'
                      }`}
                    >
                      {msg.text}
                    </div>
                  </div>
                  
                  {msg.role === 'system' && msg.hasActions && (
                    <div className="flex flex-wrap gap-2 mt-1 animate-fade-in-up">
                      {quickActions.map((action) => (
                        <button
                          key={action.id}
                          onClick={() => handleAction(action)}
                          className="flex items-center gap-2 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 px-3 py-2 rounded-xl text-[11px] font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300 hover:bg-cyberBlue hover:text-white dark:hover:bg-cyberBlue transition-all duration-300 shadow-sm"
                        >
                          {action.icon} {action.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-gray-100 dark:bg-eliteNavy p-4 rounded-2xl rounded-tl-none flex gap-1 items-center">
                    <span className="w-2 h-2 bg-textSecondary rounded-full animate-bounce"></span>
                    <span className="w-2 h-2 bg-textSecondary rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></span>
                    <span className="w-2 h-2 bg-textSecondary rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></span>
                  </div>
                </div>
              )}
              <div ref={bottomRef} />
            </div>

            {/* Input Form */}
            <form onSubmit={handleSubmit} className="p-3 border-t border-black/5 dark:border-white/10 bg-white dark:bg-gunmetal flex items-center gap-2">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder={t('commander.placeholder', 'Message command...')}
                className="flex-1 bg-gray-100 dark:bg-eliteNavy text-gunmetal dark:text-platinumSilver px-4 py-3 rounded-xl border-none focus:outline-none focus:ring-1 focus:ring-cyberBlue/50 text-sm placeholder-gray-400"
              />
              <button
                type="submit"
                disabled={!inputText.trim()}
                className="p-3 bg-cyberBlue hover:bg-cyberBlue/80 disabled:opacity-50 text-white rounded-xl transition-colors duration-300 shadow-md flex items-center justify-center cursor-pointer"
              >
                <FaPaperPlane className="text-xs" />
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default CommanderBot;


