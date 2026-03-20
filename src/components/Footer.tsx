import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage, Language } from '../context/LanguageContext';
import { Linkedin, Twitter, Instagram, Youtube, Globe, ChevronDown, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import Logo from './Logo';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const Footer = () => {
  const { language, setLanguage } = useLanguage();
  const [isLangOpen, setIsLangOpen] = React.useState(false);

  const languages: { code: Language; name: string; flag: string }[] = [
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'pt', name: 'Português', flag: '🇵🇹' },
  ];

  const footerLinks = {
    platform: {
      title: { en: 'Platform', fr: 'Plateforme', pt: 'Plataforma' },
      links: [
        { name: { en: 'Overview', fr: 'Aperçu', pt: 'Visão Geral' }, href: '/platform' },
        { name: { en: 'Fluide HR', fr: 'Fluide HR', pt: 'Fluide HR' }, href: '/products/hr' },
        { name: { en: 'Fluide Payroll', fr: 'Fluide Payroll', pt: 'Fluide Payroll' }, href: '/products/payroll' },
        { name: { en: 'Fluide Jobs', fr: 'Fluide Jobs', pt: 'Fluide Jobs' }, href: '/products/jobs' },
        { name: { en: 'Fluide Pay', fr: 'Fluide Pay', pt: 'Fluide Pay' }, href: '/products/pay' },
        { name: { en: 'Fluide Pulse', fr: 'Fluide Pulse', pt: 'Fluide Pulse' }, href: '/products/pulse' },
        { name: { en: 'Fluide Bank', fr: 'Fluide Bank', pt: 'Fluide Bank' }, href: '/products/bank' },
        { name: { en: 'Fluide Books', fr: 'Fluide Books', pt: 'Fluide Books' }, href: '/products/books' },
        { name: { en: 'Fluide Lite', fr: 'Fluide Lite', pt: 'Fluide Lite' }, href: '/products/lite' },
        { name: { en: 'Fluide Stock', fr: 'Fluide Stock', pt: 'Fluide Stock' }, href: '/products/stock' },
        { name: { en: 'Fluide Protect', fr: 'Fluide Protect', pt: 'Fluide Protect' }, href: '/products/protect' },
      ]
    },
    solutions: {
      title: { en: 'Solutions', fr: 'Solutions', pt: 'Soluções' },
      links: [
        { name: { en: 'For Businesses', fr: 'Pour les Entreprises', pt: 'Para Empresas' }, href: '/for-businesses' },
        { name: { en: 'For Employees', fr: 'Pour les Employés', pt: 'Para Colaboradores' }, href: '/for-employees' },
        { name: { en: 'For Partners', fr: 'Pour les Partenaires', pt: 'Para Parceiros' }, href: '/for-partners' },
      ]
    },
    services: {
      title: { en: 'Services', fr: 'Services', pt: 'Serviços' },
      links: [
        { name: { en: 'Employer of Record', fr: 'Portage Salarial (EoR)', pt: 'Empregador de Registo' }, href: '/services/eor' },
        { name: { en: 'Outsource Payroll', fr: 'Externalisation Paie', pt: 'Terceirização de Folha' }, href: '/services/outsource-payroll' },
      ]
    },
    company: {
      title: { en: 'Company', fr: 'Entreprise', pt: 'Empresa' },
      links: [
        { name: { en: 'About Us', fr: 'À Propos', pt: 'Sobre Nós' }, href: '/about' },
        { name: { en: 'Pricing', fr: 'Tarifs', pt: 'Preços' }, href: '/pricing' },
        { name: { en: 'Blog', fr: 'Blog', pt: 'Blog' }, href: '/blog' },
        { name: { en: 'Contact', fr: 'Contact', pt: 'Contacto' }, href: '/contact' },
        { name: { en: 'Careers', fr: 'Carrières', pt: 'Carreiras' }, href: '/careers' },
      ]
    },
    consulting: {
      title: { en: 'Consulting', fr: 'Conseil', pt: 'Consultoria' },
      links: [
        { name: { en: 'HR & Payroll', fr: 'RH & Paie', pt: 'RH e Folha' }, href: '/services/consulting/hr-payroll' },
        { name: { en: 'Financial & Tax', fr: 'Fiscal & Financier', pt: 'Financeira e Fiscal' }, href: '/services/consulting/financial-tax' },
        { name: { en: 'Business Growth', fr: 'Croissance', pt: 'Crescimento' }, href: '/services/consulting/business-growth' },
        { name: { en: 'Training', fr: 'Formation', pt: 'Formação' }, href: '/services/consulting/training' },
      ]
    },
    legal: {
      title: { en: 'Legal', fr: 'Légal', pt: 'Legal' },
      links: [
        { name: { en: 'Privacy Policy', fr: 'Politique de Confidentialité', pt: 'Política de Privacidade' }, href: '/privacy' },
        { name: { en: 'Terms of Service', fr: 'Conditions d\'Utilisation', pt: 'Termos de Serviço' }, href: '/terms' },
      ]
    }
  };

  const socialLinks = [
    { icon: Linkedin, href: 'https://linkedin.com/company/fluide' },
    { icon: Twitter, href: 'https://twitter.com/fluide' },
    { icon: Instagram, href: 'https://instagram.com/fluide' },
    { icon: Youtube, href: 'https://youtube.com/c/fluide' },
  ];

  return (
    <footer className="bg-white border-t border-brand-navy/5 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-20">
          {/* Brand Column */}
          <div className="col-span-2 lg:col-span-1">
            <Link to="/" className="flex items-center mb-6">
              <Logo />
            </Link>
            <p className="text-sm text-brand-navy/60 leading-relaxed mb-6">
              {language === 'en' 
                ? 'One Africa. Connected by Trust. The first fully integrated workforce and financial inclusion platform for African SMEs.' 
                : language === 'fr'
                ? 'Une Afrique. Connectée par la confiance. La première plateforme de main-d\'œuvre et d\'inclusion financière pour les PME africaines.'
                : 'Uma África. Conectada pela Confiança. A primeira plataforma de força de trabalho e inclusão financeira para PMEs africanas.'}
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-brand-navy/5 flex items-center justify-center text-brand-navy/40 hover:text-brand-navy hover:border-brand-navy/20 transition-all"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div className="col-span-2 lg:col-span-4 grid grid-cols-2 md:grid-cols-4 gap-12">
            {Object.values(footerLinks).map((section, idx) => (
              <div key={idx}>
                <h3 className="text-sm font-bold uppercase tracking-wider mb-6 text-brand-navy">{section.title[language]}</h3>
                <ul className="space-y-4">
                  {section.links.map((link, lIdx) => (
                    <li key={lIdx}>
                      <Link
                        to={link.href}
                        className="text-sm text-brand-navy/60 hover:text-brand-cyan transition-colors"
                      >
                        {link.name[language]}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-10 border-t border-brand-navy/5 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
            <p className="text-xs text-brand-navy/40">
              © {new Date().getFullYear()} Fluide Group. All rights reserved.
            </p>
            
            {/* Language Switcher */}
            <div className="relative">
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center space-x-2 px-3 py-1.5 rounded-full border border-brand-navy/5 text-xs font-bold text-brand-navy/60 hover:text-brand-navy hover:border-brand-navy/20 transition-all bg-white"
              >
                <span className="text-base leading-none">{languages.find(l => l.code === language)?.flag}</span>
                <span className="uppercase tracking-wider">{languages.find(l => l.code === language)?.name}</span>
                <ChevronDown className={cn("w-3 h-3 transition-transform opacity-40", isLangOpen && "rotate-180")} />
              </button>
              <AnimatePresence>
                {isLangOpen && (
                  <>
                    <div 
                      className="fixed inset-0 z-40" 
                      onClick={() => setIsLangOpen(false)} 
                    />
                    <motion.div
                      initial={{ opacity: 0, y: -10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -10, scale: 0.95 }}
                      className="absolute bottom-full left-0 mb-3 w-48 bg-white rounded-2xl shadow-2xl shadow-brand-navy/10 border border-brand-navy/5 p-2 overflow-hidden z-50"
                    >
                      <div className="px-3 py-2 mb-1 border-b border-brand-navy/5">
                        <span className="text-[10px] font-black uppercase tracking-widest text-brand-navy/30">Select Language</span>
                      </div>
                      {languages.map((lang) => (
                        <button
                          key={lang.code}
                          onClick={() => {
                            setLanguage(lang.code);
                            setIsLangOpen(false);
                          }}
                          className={cn(
                            "w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs transition-all group",
                            language === lang.code 
                              ? "bg-brand-navy text-white shadow-lg shadow-brand-navy/20" 
                              : "hover:bg-brand-navy/5 text-brand-navy/60 hover:text-brand-navy"
                          )}
                        >
                          <div className="flex items-center space-x-3">
                            <span className="text-lg leading-none">{lang.flag}</span>
                            <span className="font-bold">{lang.name}</span>
                          </div>
                          {language === lang.code && (
                            <Check className="w-3.5 h-3.5 text-brand-cyan" />
                          )}
                        </button>
                      ))}
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </div>
          </div>

          <div className="flex space-x-6">
            <span className="text-xs text-brand-navy/40 italic">Work. Pay. Grow.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
