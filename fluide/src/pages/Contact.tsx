import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';

const Contact = () => {
  const { language } = useLanguage();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const newErrors: Record<string, string> = {};
    
    if (!formData.firstName.trim()) {
      newErrors.firstName = language === 'en' ? 'First name is required' : language === 'fr' ? 'Le prénom est requis' : 'O primeiro nome é obrigatório';
    }
    
    if (!formData.lastName.trim()) {
      newErrors.lastName = language === 'en' ? 'Last name is required' : language === 'fr' ? 'Le nom est requis' : 'O apelido é obrigatório';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = language === 'en' ? 'Email is required' : language === 'fr' ? 'L\'e-mail est requis' : 'O e-mail é obrigatório';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = language === 'en' ? 'Please enter a valid email address' : language === 'fr' ? 'Veuillez entrer une adresse e-mail valide' : 'Por favor, insira um endereço de e-mail válido';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = language === 'en' ? 'Message is required' : language === 'fr' ? 'Le message est requis' : 'A mensagem é obrigatória';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = language === 'en' ? 'Message must be at least 10 characters' : language === 'fr' ? 'Le message doit comporter au moins 10 caractères' : 'A mensagem deve ter pelo menos 10 caracteres';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log('Form submitted:', formData);
    setIsSubmitting(false);
    setIsSuccess(true);
    setFormData({ firstName: '', lastName: '', email: '', message: '' });
    
    // Reset success message after 5 seconds
    setTimeout(() => setIsSuccess(false), 5000);
  };

  const content = {
    hero: {
      title: { en: 'Get in touch.', fr: 'Contactez-nous.', pt: 'Entre em contacto.' },
      desc: {
        en: 'Have questions about Fluide? Our team is here to help you manage your team better.',
        fr: 'Vous avez des questions sur Fluide ? Notre équipe est là pour vous aider.',
        pt: 'Tem dúvidas sobre a Fluide? A nossa equipa está aqui para o ajudar.'
      }
    },
    form: {
      firstName: { en: 'First Name', fr: 'Prénom', pt: 'Primeiro Nome' },
      lastName: { en: 'Last Name', fr: 'Nom', pt: 'Apelido' },
      email: { en: 'Email Address', fr: 'Adresse e-mail', pt: 'Endereço de E-mail' },
      message: { en: 'Message', fr: 'Message', pt: 'Mensagem' },
      placeholderName: { en: 'John', fr: 'Jean', pt: 'João' },
      placeholderLastName: { en: 'Doe', fr: 'Dupont', pt: 'Silva' },
      placeholderEmail: { en: 'john@company.com', fr: 'jean@entreprise.com', pt: 'joao@empresa.com' },
      placeholderMessage: { en: 'How can we help?', fr: 'Comment pouvons-nous vous aider ?', pt: 'Como podemos ajudar?' },
      submit: { en: 'Send Message', fr: 'Envoyer le message', pt: 'Enviar Mensagem' },
      submitting: { en: 'Sending...', fr: 'Envoi en cours...', pt: 'Enviando...' },
      success: { en: 'Message sent successfully!', fr: 'Message envoyé avec succès !', pt: 'Mensagem enviada com sucesso!' }
    }
  };

  return (
    <div className="pt-20">
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_20%,rgba(78,242,216,0.05),transparent_50%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h1 className="text-5xl lg:text-7xl font-bold tracking-tight mb-8 leading-tight text-brand-navy">{content.hero.title[language]}</h1>
              <p className="text-xl text-brand-navy/60 leading-relaxed mb-12">{content.hero.desc[language]}</p>
              
              <div className="space-y-8">
                <div className="flex items-start space-x-4 group">
                  <div className="w-12 h-12 bg-brand-navy/5 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-brand-navy group-hover:text-brand-cyan transition-all">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1 text-brand-navy">Email</h4>
                    <p className="text-brand-navy/60">hello@fluidesuite.com</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 group">
                  <div className="w-12 h-12 bg-brand-navy/5 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-brand-navy group-hover:text-brand-cyan transition-all">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1 text-brand-navy">{language === 'en' ? 'Phone' : language === 'fr' ? 'Téléphone' : 'Telefone'}</h4>
                    <p className="text-brand-navy/60">+237 6 75 21 38 29 · +237 6 97 88 86 79</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 group">
                  <div className="w-12 h-12 bg-brand-navy/5 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-brand-navy group-hover:text-brand-cyan transition-all">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1 text-brand-navy">{language === 'en' ? 'Office' : language === 'fr' ? 'Bureau' : 'Escritório'}</h4>
                    <p className="text-brand-navy/60">Douala, Cameroon</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-brand-navy/[0.02] p-10 rounded-[40px] border border-brand-navy/5 shadow-2xl shadow-brand-navy/5">
              {isSuccess ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-12">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-500 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-brand-navy">{content.form.success[language]}</h3>
                  <p className="text-brand-navy/60">{language === 'en' ? "We'll get back to you as soon as possible." : language === 'fr' ? "Nous vous répondrons dès que possible." : "Entraremos em contacto consigo o mais breve possível."}</p>
                  <button 
                    onClick={() => setIsSuccess(false)}
                    className="mt-8 px-6 py-2 bg-brand-navy/5 text-brand-navy font-bold rounded-xl hover:bg-brand-navy/10 transition-colors"
                  >
                    {language === 'en' ? 'Send another message' : language === 'fr' ? 'Envoyer un autre message' : 'Enviar outra mensagem'}
                  </button>
                </div>
              ) : (
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-brand-navy/40">{content.form.firstName[language]}</label>
                      <input 
                        type="text" 
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        className={`w-full bg-white border ${errors.firstName ? 'border-red-500' : 'border-brand-navy/10'} rounded-xl px-4 py-3 focus:outline-none focus:ring-2 ${errors.firstName ? 'focus:ring-red-500/20' : 'focus:ring-brand-cyan/20'} transition-all`} 
                        placeholder={content.form.placeholderName[language]} 
                      />
                      {errors.firstName && <p className="text-red-500 text-xs font-medium mt-1">{errors.firstName}</p>}
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-brand-navy/40">{content.form.lastName[language]}</label>
                      <input 
                        type="text" 
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        className={`w-full bg-white border ${errors.lastName ? 'border-red-500' : 'border-brand-navy/10'} rounded-xl px-4 py-3 focus:outline-none focus:ring-2 ${errors.lastName ? 'focus:ring-red-500/20' : 'focus:ring-brand-cyan/20'} transition-all`} 
                        placeholder={content.form.placeholderLastName[language]} 
                      />
                      {errors.lastName && <p className="text-red-500 text-xs font-medium mt-1">{errors.lastName}</p>}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-brand-navy/40">{content.form.email[language]}</label>
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full bg-white border ${errors.email ? 'border-red-500' : 'border-brand-navy/10'} rounded-xl px-4 py-3 focus:outline-none focus:ring-2 ${errors.email ? 'focus:ring-red-500/20' : 'focus:ring-brand-cyan/20'} transition-all`} 
                      placeholder={content.form.placeholderEmail[language]} 
                    />
                    {errors.email && <p className="text-red-500 text-xs font-medium mt-1">{errors.email}</p>}
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-brand-navy/40">{content.form.message[language]}</label>
                    <textarea 
                      rows={4} 
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className={`w-full bg-white border ${errors.message ? 'border-red-500' : 'border-brand-navy/10'} rounded-xl px-4 py-3 focus:outline-none focus:ring-2 ${errors.message ? 'focus:ring-red-500/20' : 'focus:ring-brand-cyan/20'} transition-all`} 
                      placeholder={content.form.placeholderMessage[language]} 
                    ></textarea>
                    {errors.message && <p className="text-red-500 text-xs font-medium mt-1">{errors.message}</p>}
                  </div>
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-brand-navy text-white py-4 rounded-xl font-bold flex items-center justify-center space-x-2 hover:bg-brand-navy/90 transition-all shadow-lg shadow-brand-navy/10 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    <span>{isSubmitting ? content.form.submitting[language] : content.form.submit[language]}</span>
                    {!isSubmitting && <Send className="w-4 h-4 text-brand-cyan" />}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

