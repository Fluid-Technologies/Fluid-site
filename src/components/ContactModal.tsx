import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { X, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const { language } = useLanguage();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      setIsSuccess(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => {
        setIsSuccess(false);
        onClose();
      }, 3000);
    } catch (err) {
      setError(language === 'en' ? 'Something went wrong. Please try again.' : language === 'fr' ? 'Une erreur est survenue. Veuillez réessayer.' : 'Algo correu mal. Por favor, tente novamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const content = {
    title: { en: 'Contact Support', fr: 'Contacter le support', pt: 'Contactar Suporte' },
    desc: { en: 'How can we help you today?', fr: 'Comment pouvons-nous vous aider aujourd\'hui ?', pt: 'Como podemos ajudá-lo hoje?' },
    name: { en: 'Name', fr: 'Nom', pt: 'Nome' },
    email: { en: 'Email', fr: 'E-mail', pt: 'E-mail' },
    message: { en: 'Message', fr: 'Message', pt: 'Mensagem' },
    submit: { en: 'Send Message', fr: 'Envoyer le message', pt: 'Enviar Mensagem' },
    submitting: { en: 'Sending...', fr: 'Envoi en cours...', pt: 'Enviando...' },
    success: { en: 'Message sent successfully!', fr: 'Message envoyé avec succès !', pt: 'Mensagem enviada com sucesso!' }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
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
            className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden z-10"
          >
            <div className="p-6 sm:p-8">
              <button
                onClick={onClose}
                className="absolute top-6 right-6 p-2 text-brand-navy/40 hover:text-brand-navy hover:bg-brand-navy/5 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {isSuccess ? (
                <div className="py-12 flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-500 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-brand-navy mb-2">{content.success[language]}</h3>
                </div>
              ) : (
                <>
                  <h2 className="text-2xl font-bold text-brand-navy mb-2">{content.title[language]}</h2>
                  <p className="text-brand-navy/60 mb-8">{content.desc[language]}</p>

                  {error && (
                    <div className="mb-6 p-4 bg-red-50 text-red-600 rounded-xl flex items-start space-x-3">
                      <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                      <p className="text-sm font-medium">{error}</p>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label className="block text-sm font-bold text-brand-navy mb-2">{content.name[language]}</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 bg-brand-navy/5 border border-transparent rounded-xl focus:bg-white focus:border-brand-cyan focus:ring-2 focus:ring-brand-cyan/20 transition-all outline-none text-brand-navy"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-brand-navy mb-2">{content.email[language]}</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={e => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 bg-brand-navy/5 border border-transparent rounded-xl focus:bg-white focus:border-brand-cyan focus:ring-2 focus:ring-brand-cyan/20 transition-all outline-none text-brand-navy"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-brand-navy mb-2">{content.message[language]}</label>
                      <textarea
                        required
                        rows={4}
                        value={formData.message}
                        onChange={e => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 bg-brand-navy/5 border border-transparent rounded-xl focus:bg-white focus:border-brand-cyan focus:ring-2 focus:ring-brand-cyan/20 transition-all outline-none text-brand-navy resize-none"
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 bg-brand-navy text-white rounded-xl font-bold hover:bg-brand-navy/90 transition-colors flex items-center justify-center space-x-2 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <span>{content.submitting[language]}</span>
                      ) : (
                        <>
                          <span>{content.submit[language]}</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
