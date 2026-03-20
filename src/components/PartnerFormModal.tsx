import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { X, Send, CheckCircle2, Building2, User, Mail, Phone, Briefcase } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface PartnerFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  type?: 'partner' | 'demo' | 'brochure';
}

const PartnerFormModal: React.FC<PartnerFormModalProps> = ({ isOpen, onClose, type = 'partner' }) => {
  const { language } = useLanguage();
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    partnerType: 'accountant',
    message: ''
  });

  const content = {
    partner: {
      title: { en: 'Become a Partner', fr: 'Devenir Partenaire', pt: 'Tornar-se Parceiro' },
      desc: { en: 'Join our ecosystem and grow your practice with Fluide.', fr: 'Rejoignez notre écosystème et développez votre cabinet avec Fluide.', pt: 'Junte-se ao nosso ecossistema e cresça a sua prática com a Fluide.' },
      submit: { en: 'Submit Application', fr: 'Soumettre la candidature', pt: 'Submeter Candidatura' }
    },
    demo: {
      title: { en: 'Book a Demo', fr: 'Réserver une Démo', pt: 'Agendar Demonstração' },
      desc: { en: 'See how Fluide can transform your business operations.', fr: 'Découvrez comment Fluide peut transformer vos opérations commerciales.', pt: 'Veja como a Fluide pode transformar as operações do seu negócio.' },
      submit: { en: 'Request Demo', fr: 'Demander une démo', pt: 'Solicitar Demonstração' }
    },
    brochure: {
      title: { en: 'Download Brochure', fr: 'Télécharger la Brochure', pt: 'Descarregar Brochura' },
      desc: { en: 'Get detailed information about our partner programs.', fr: 'Obtenez des informations détaillées sur nos programmes partenaires.', pt: 'Obtenha informações detalhadas sobre os nossos programas de parceiros.' },
      submit: { en: 'Download Now', fr: 'Télécharger maintenant', pt: 'Descarregar Agora' }
    },
    form: {
      firstName: { en: 'First Name', fr: 'Prénom', pt: 'Nome' },
      lastName: { en: 'Last Name', fr: 'Nom', pt: 'Apelido' },
      email: { en: 'Work Email', fr: 'Email professionnel', pt: 'Email de trabalho' },
      phone: { en: 'Phone Number', fr: 'Numéro de téléphone', pt: 'Número de telefone' },
      company: { en: 'Company Name', fr: 'Nom de l\'entreprise', pt: 'Nome da empresa' },
      partnerType: { en: 'Partner Type', fr: 'Type de partenaire', pt: 'Tipo de parceiro' },
      types: {
        accountant: { en: 'Accountant / Tax Advisor', fr: 'Comptable / Conseiller fiscal', pt: 'Contabilista / Consultor fiscal' },
        agent: { en: 'Fluide Force Agent', fr: 'Agent Fluide Force', pt: 'Agente Fluide Force' },
        distributor: { en: 'Wholesaler / Distributor', fr: 'Grossiste / Distributeur', pt: 'Grossista / Distribuidor' },
        bank: { en: 'Bank / MFI', fr: 'Banque / IMF', pt: 'Banco / IMF' },
        other: { en: 'Other', fr: 'Autre', pt: 'Outro' }
      },
      message: { en: 'How can we partner together?', fr: 'Comment pouvons-nous collaborer ?', pt: 'Como podemos ser parceiros?' },
      submitting: { en: 'Submitting...', fr: 'Envoi en cours...', pt: 'A submeter...' },
      success: { en: 'Request received! We will be in touch shortly.', fr: 'Demande reçue ! Nous vous contacterons sous peu.', pt: 'Pedido recebido! Entraremos em contacto em breve.' },
      error: { en: 'Something went wrong. Please try again.', fr: 'Une erreur est survenue. Veuillez réessayer.', pt: 'Algo correu mal. Por favor, tente novamente.' }
    }
  };

  const t = content[type];
  const f = content.form;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setTimeout(() => {
        onClose();
        setStatus('idle');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          company: '',
          partnerType: 'accountant',
          message: ''
        });
      }, 3000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
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
          className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden z-10 max-h-[90vh] flex flex-col"
        >
          {/* Header */}
          <div className="bg-brand-navy p-6 sm:p-8 text-white relative shrink-0">
            <button
              onClick={onClose}
              className="absolute top-6 right-6 p-2 text-white/60 hover:text-white hover:bg-white/10 rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <h2 className="text-2xl sm:text-3xl font-bold mb-2">{t.title[language as keyof typeof t.title] || t.title.en}</h2>
            <p className="text-white/60">{t.desc[language as keyof typeof t.desc] || t.desc.en}</p>
          </div>

          {/* Body */}
          <div className="p-6 sm:p-8 overflow-y-auto custom-scrollbar">
            {status === 'success' ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="text-2xl font-bold text-brand-navy mb-2">Success!</h3>
                <p className="text-brand-navy/60">{f.success[language as keyof typeof f.success] || f.success.en}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-brand-navy">{f.firstName[language as keyof typeof f.firstName] || f.firstName.en}</label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-brand-navy/40" />
                      <input
                        type="text"
                        name="firstName"
                        required
                        value={formData.firstName}
                        onChange={handleChange}
                        className="w-full pl-12 pr-4 py-3 bg-brand-navy/5 border border-brand-navy/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-cyan focus:border-transparent transition-all"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-brand-navy">{f.lastName[language as keyof typeof f.lastName] || f.lastName.en}</label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-brand-navy/40" />
                      <input
                        type="text"
                        name="lastName"
                        required
                        value={formData.lastName}
                        onChange={handleChange}
                        className="w-full pl-12 pr-4 py-3 bg-brand-navy/5 border border-brand-navy/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-cyan focus:border-transparent transition-all"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-brand-navy">{f.email[language as keyof typeof f.email] || f.email.en}</label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-brand-navy/40" />
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full pl-12 pr-4 py-3 bg-brand-navy/5 border border-brand-navy/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-cyan focus:border-transparent transition-all"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-brand-navy">{f.phone[language as keyof typeof f.phone] || f.phone.en}</label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-brand-navy/40" />
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full pl-12 pr-4 py-3 bg-brand-navy/5 border border-brand-navy/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-cyan focus:border-transparent transition-all"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-brand-navy">{f.company[language as keyof typeof f.company] || f.company.en}</label>
                  <div className="relative">
                    <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-brand-navy/40" />
                    <input
                      type="text"
                      name="company"
                      required
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full pl-12 pr-4 py-3 bg-brand-navy/5 border border-brand-navy/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-cyan focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                {type === 'partner' && (
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-brand-navy">{f.partnerType[language as keyof typeof f.partnerType] || f.partnerType.en}</label>
                    <div className="relative">
                      <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-brand-navy/40" />
                      <select
                        name="partnerType"
                        value={formData.partnerType}
                        onChange={handleChange}
                        className="w-full pl-12 pr-4 py-3 bg-brand-navy/5 border border-brand-navy/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-cyan focus:border-transparent transition-all appearance-none"
                      >
                        <option value="accountant">{f.types.accountant[language as keyof typeof f.types.accountant] || f.types.accountant.en}</option>
                        <option value="agent">{f.types.agent[language as keyof typeof f.types.agent] || f.types.agent.en}</option>
                        <option value="distributor">{f.types.distributor[language as keyof typeof f.types.distributor] || f.types.distributor.en}</option>
                        <option value="bank">{f.types.bank[language as keyof typeof f.types.bank] || f.types.bank.en}</option>
                        <option value="other">{f.types.other[language as keyof typeof f.types.other] || f.types.other.en}</option>
                      </select>
                    </div>
                  </div>
                )}

                {type !== 'brochure' && (
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-brand-navy">{f.message[language as keyof typeof f.message] || f.message.en}</label>
                    <textarea
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full p-4 bg-brand-navy/5 border border-brand-navy/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-cyan focus:border-transparent transition-all resize-none"
                    />
                  </div>
                )}

                {status === 'error' && (
                  <div className="p-4 bg-red-50 text-red-600 rounded-xl text-sm font-medium">
                    {f.error[language as keyof typeof f.error] || f.error.en}
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
                      <span>{t.submit[language as keyof typeof t.submit] || t.submit.en}</span>
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

export default PartnerFormModal;
