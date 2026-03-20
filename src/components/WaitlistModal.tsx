import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { X, Send, CheckCircle2, Smartphone, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface WaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const WaitlistModal: React.FC<WaitlistModalProps> = ({ isOpen, onClose }) => {
  const { language } = useLanguage();
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [email, setEmail] = useState('');

  const content = {
    title: { en: 'Get Early Access', fr: 'Obtenir un accès anticipé', pt: 'Obter Acesso Antecipado' },
    desc: { 
      en: 'The Fluide App is launching soon. Join the waitlist to be the first to know.', 
      fr: 'L\'application Fluide sera bientôt lancée. Rejoignez la liste d\'attente pour être le premier informé.', 
      pt: 'A Aplicação Fluide será lançada em breve. Junte-se à lista de espera para ser o primeiro a saber.' 
    },
    emailLabel: { en: 'Email Address', fr: 'Adresse e-mail', pt: 'Endereço de Email' },
    submit: { en: 'Join Waitlist', fr: 'Rejoindre la liste d\'attente', pt: 'Juntar-se à Lista de Espera' },
    submitting: { en: 'Joining...', fr: 'Inscription...', pt: 'A juntar...' },
    success: { en: 'You\'re on the list! We\'ll be in touch soon.', fr: 'Vous êtes sur la liste ! Nous vous contacterons bientôt.', pt: 'Está na lista! Entraremos em contacto em breve.' },
    error: { en: 'Something went wrong. Please try again.', fr: 'Une erreur est survenue. Veuillez réessayer.', pt: 'Algo correu mal. Por favor, tente novamente.' }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setTimeout(() => {
        onClose();
        setStatus('idle');
        setEmail('');
      }, 3000);
    }, 1500);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-brand-navy/60 backdrop-blur-sm"
        />
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden z-10"
        >
          {/* Header */}
          <div className="bg-brand-navy p-6 sm:p-8 text-white relative text-center">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 text-white/60 hover:text-white hover:bg-white/10 rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="w-16 h-16 bg-brand-cyan/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Smartphone className="w-8 h-8 text-brand-cyan" />
            </div>
            <h2 className="text-2xl font-bold mb-2">{content.title[language as keyof typeof content.title] || content.title.en}</h2>
            <p className="text-white/60 text-sm">{content.desc[language as keyof typeof content.desc] || content.desc.en}</p>
          </div>

          {/* Body */}
          <div className="p-6 sm:p-8">
            {status === 'success' ? (
              <div className="flex flex-col items-center justify-center py-8 text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold text-brand-navy mb-2">Success!</h3>
                <p className="text-brand-navy/60 text-sm">{content.success[language as keyof typeof content.success] || content.success.en}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-brand-navy">{content.emailLabel[language as keyof typeof content.emailLabel] || content.emailLabel.en}</label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-brand-navy/40" />
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-12 pr-4 py-3 bg-brand-navy/5 border border-brand-navy/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-cyan focus:border-transparent transition-all"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>

                {status === 'error' && (
                  <div className="p-4 bg-red-50 text-red-600 rounded-xl text-sm font-medium">
                    {content.error[language as keyof typeof content.error] || content.error.en}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full bg-brand-cyan text-brand-navy py-4 rounded-xl font-bold hover:bg-brand-cyan/90 transition-all flex items-center justify-center space-x-2 disabled:opacity-70 disabled:cursor-not-allowed shadow-lg shadow-brand-cyan/20"
                >
                  {status === 'submitting' ? (
                    <div className="w-6 h-6 border-2 border-brand-navy/20 border-t-brand-navy rounded-full animate-spin" />
                  ) : (
                    <>
                      <span>{content.submit[language as keyof typeof content.submit] || content.submit.en}</span>
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default WaitlistModal;
