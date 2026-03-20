import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage, Language } from '../context/LanguageContext';
import { useCountry, countries, CountryCode } from '../context/CountryContext';
import { useAuth } from '../context/AuthContext';
import { Globe, Menu, X, ChevronDown, LogOut, User, MapPin, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import Logo from './Logo';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const Navbar = () => {
  const { language, setLanguage } = useLanguage();
  const { country, setCountryByCode } = useCountry();
  const { user, signIn, logout } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isLangOpen, setIsLangOpen] = React.useState(false);
  const [isCountryOpen, setIsCountryOpen] = React.useState(false);
  const [isServicesOpen, setIsServicesOpen] = React.useState(false);
  const location = useLocation();

  const navLinks = [
    { name: { en: 'Platform', fr: 'Plateforme', pt: 'Plataforma' }, href: '/platform' },
    { name: { en: 'Products', fr: 'Produits', pt: 'Produtos' }, href: '/products' },
    { name: { en: 'Businesses', fr: 'Entreprises', pt: 'Empresas' }, href: '/for-businesses' },
    { name: { en: 'Employees', fr: 'Employés', pt: 'Colaboradores' }, href: '/for-employees' },
    { name: { en: 'Partners', fr: 'Partenaires', pt: 'Parceiros' }, href: '/for-partners' },
    { 
      name: { en: 'Services', fr: 'Services', pt: 'Serviços' }, 
      href: '#',
      subLinks: [
        { name: { en: 'Employer of Record', fr: 'Portage Salarial (EoR)', pt: 'Empregador de Registo' }, href: '/services/eor' },
        { name: { en: 'Outsource Payroll', fr: 'Externalisation Paie', pt: 'Terceirização de Folha' }, href: '/services/outsource-payroll' },
        { type: 'separator' },
        { type: 'header', name: { en: 'Consulting', fr: 'Conseil', pt: 'Consultoria' }, href: '/services/consulting' },
        { name: { en: 'HR & Payroll Consulting', fr: 'Conseil RH & Paie', pt: 'Consultoria de RH e Folha' }, href: '/services/consulting/hr-payroll' },
        { name: { en: 'Financial & Tax Advisory', fr: 'Conseil Fiscal & Financier', pt: 'Consultoria Financeira e Fiscal' }, href: '/services/consulting/financial-tax' },
        { name: { en: 'Business Growth', fr: 'Croissance de l\'Entreprise', pt: 'Crescimento do Negócio' }, href: '/services/consulting/business-growth' },
        { name: { en: 'Training', fr: 'Formation', pt: 'Formação' }, href: '/services/consulting/training' },
        { name: { en: 'Specialized Services', fr: 'Services Spécialisés', pt: 'Serviços Especializados' }, href: '/services/consulting/specialized' },
        { name: { en: 'Partner Programs', fr: 'Programmes Partenaires', pt: 'Programas de Parceiros' }, href: '/services/consulting/partners' },
        { type: 'separator' },
        { name: { en: 'View All Services', fr: 'Voir tous les services', pt: 'Ver todos os serviços' }, href: '/services', isBold: true },
      ]
    },
    { name: { en: 'Blog', fr: 'Blog', pt: 'Blog' }, href: '/blog' },
    { name: { en: 'Pricing', fr: 'Tarifs', pt: 'Preços' }, href: '/pricing' },
    { name: { en: 'Careers', fr: 'Carrières', pt: 'Carreiras' }, href: '/careers' },
  ];

  const languages: { code: Language; name: string; flag: string }[] = [
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'pt', name: 'Português', flag: '🇵🇹' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-brand-navy/5">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center flex-shrink-0">
            <Logo />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex flex-1 items-center justify-between px-8 xl:px-16 max-w-[1200px] mx-auto">
            {navLinks.map((link) => (
              link.subLinks ? (
                <div 
                  key={link.name.en} 
                  className="relative group"
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                >
                  <button
                    className={cn(
                      "flex items-center space-x-1 text-[13px] xl:text-sm font-semibold transition-colors hover:text-brand-cyan py-8",
                      link.subLinks.some(s => location.pathname === s.href) ? "text-brand-navy" : "text-brand-navy/60"
                    )}
                  >
                    <span>{link.name[language]}</span>
                    <ChevronDown className="w-3 h-3" />
                  </button>
                  <AnimatePresence>
                    {isServicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute left-1/2 -translate-x-1/2 mt-0 w-64 bg-white rounded-2xl shadow-2xl border border-brand-navy/5 p-2 z-50"
                      >
                        {link.subLinks.map((sub, sIdx) => {
                          if (sub.type === 'separator') {
                            return <div key={`sep-${sIdx}`} className="my-2 border-t border-brand-navy/5" />;
                          }
                          if (sub.type === 'header') {
                            return (
                              <Link
                                key={sub.href}
                                to={sub.href}
                                onClick={() => setIsServicesOpen(false)}
                                className="block px-4 py-2 text-[11px] font-black uppercase tracking-widest text-brand-navy/60 hover:text-brand-cyan transition-colors mt-2"
                              >
                                {sub.name[language]}
                              </Link>
                            );
                          }
                          return (
                            <Link
                              key={sub.href}
                              to={sub.href}
                              onClick={() => setIsServicesOpen(false)}
                              className={cn(
                                "block px-4 py-2.5 rounded-xl text-sm font-medium transition-all hover:bg-brand-navy/5",
                                location.pathname === sub.href ? "text-brand-cyan bg-brand-navy/5" : "text-brand-navy/60 hover:text-brand-navy",
                                sub.isBold && "font-bold text-brand-navy"
                              )}
                            >
                              {sub.name[language]}
                            </Link>
                          );
                        })}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={link.href}
                  to={link.href}
                  className={cn(
                    "text-[13px] xl:text-sm font-semibold transition-colors hover:text-brand-cyan py-8",
                    location.pathname === link.href ? "text-brand-navy" : "text-brand-navy/60"
                  )}
                >
                  {link.name[language]}
                </Link>
              )
            ))}
          </div>

          {/* Right Actions */}
          <div className="hidden lg:flex items-center space-x-6 flex-shrink-0">
            {/* Country Selector */}
            <div className="relative">
              <button
                onClick={() => setIsCountryOpen(!isCountryOpen)}
                className="flex items-center space-x-2 text-sm font-medium text-brand-navy/60 hover:text-brand-navy transition-colors"
              >
                <span>{country.flag}</span>
                <span className="hidden xl:inline">{country.name}</span>
                <ChevronDown className={cn("w-3 h-3 transition-transform", isCountryOpen && "rotate-180")} />
              </button>
              <AnimatePresence>
                {isCountryOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-brand-navy/5 p-2 overflow-hidden z-50"
                  >
                    <div className="px-3 py-2 text-[10px] font-black uppercase tracking-widest text-brand-navy/30">Select Country</div>
                    <div className="max-h-[300px] overflow-y-auto custom-scrollbar">
                      {countries.map((c) => (
                        <div key={c.code} className="group relative">
                          <button
                            onClick={() => {
                              setCountryByCode(c.code as CountryCode);
                              setIsCountryOpen(false);
                            }}
                            className={cn(
                              "w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm transition-colors",
                              country.code === c.code ? "bg-brand-navy text-white" : "hover:bg-brand-navy/5 text-brand-navy/60 hover:text-brand-navy"
                            )}
                          >
                            <div className="flex items-center space-x-3">
                              <span>{c.flag}</span>
                              <span>{c.name}</span>
                            </div>
                            <span className="text-[10px] opacity-60">{c.currency}</span>
                          </button>
                          {c.code !== 'global' && (
                            <Link
                              to={`/country/${c.code}`}
                              onClick={() => setIsCountryOpen(false)}
                              className="absolute right-2 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 p-1 hover:bg-brand-navy/10 rounded transition-all"
                              title="Visit Country Page"
                            >
                              <ArrowRight className="w-3 h-3 text-brand-navy/40" />
                            </Link>
                          )}
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Language Switcher */}
            <div className="relative">
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center space-x-2 text-sm font-medium text-brand-navy/60 hover:text-brand-navy transition-colors"
              >
                <Globe className="w-4 h-4" />
                <span className="uppercase">{language}</span>
                <ChevronDown className={cn("w-3 h-3 transition-transform", isLangOpen && "rotate-180")} />
              </button>
              <AnimatePresence>
                {isLangOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute right-0 mt-2 w-40 bg-white rounded-xl shadow-xl border border-brand-navy/5 p-2 overflow-hidden z-50"
                  >
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          setLanguage(lang.code);
                          setIsLangOpen(false);
                        }}
                        className={cn(
                          "w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-sm transition-colors",
                          language === lang.code ? "bg-brand-navy text-white" : "hover:bg-brand-navy/5 text-brand-navy/60 hover:text-brand-navy"
                        )}
                      >
                        <span>{lang.flag}</span>
                        <span>{lang.name}</span>
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {user ? (
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2 px-4 py-2 bg-brand-navy/5 rounded-full border border-brand-navy/10">
                  <div className="w-6 h-6 rounded-full bg-brand-navy text-white flex items-center justify-center text-[10px] font-bold">
                    {user.displayName?.charAt(0) || user.email?.charAt(0).toUpperCase()}
                  </div>
                  <span className="text-xs font-bold text-brand-navy truncate max-w-[100px]">{user.displayName || user.email}</span>
                </div>
                <button
                  onClick={logout}
                  className="p-2 text-brand-navy/40 hover:text-red-500 transition-colors"
                  title="Logout"
                >
                  <LogOut className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <Link
                to="/onboarding"
                className="bg-brand-navy text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-brand-navy/90 transition-all shadow-lg shadow-brand-navy/10"
              >
                {language === 'en' ? 'Get Started' : language === 'fr' ? 'Commencer' : 'Começar'}
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-4">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-brand-navy/60 hover:text-brand-navy transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-brand-navy/5 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                link.subLinks ? (
                  <div key={link.name.en} className="space-y-1">
                    <div className="px-3 py-4 text-xs font-black uppercase tracking-widest text-brand-navy/40">
                      {link.name[language]}
                    </div>
                    {link.subLinks.map((sub, sIdx) => {
                      if (sub.type === 'separator') {
                        return <div key={`m-sep-${sIdx}`} className="my-2 border-t border-brand-navy/5 mx-6" />;
                      }
                      if (sub.type === 'header') {
                        return (
                          <Link
                            key={sub.href}
                            to={sub.href}
                            onClick={() => setIsMenuOpen(false)}
                            className="block px-8 py-2 text-[10px] font-black uppercase tracking-widest text-brand-navy/30"
                          >
                            {sub.name[language]}
                          </Link>
                        );
                      }
                      return (
                        <Link
                          key={sub.href}
                          to={sub.href}
                          onClick={() => setIsMenuOpen(false)}
                          className={cn(
                            "block px-8 py-3 text-base font-medium transition-all hover:bg-brand-navy/5 rounded-xl",
                            location.pathname === sub.href ? "text-brand-cyan bg-brand-navy/5" : "text-brand-navy/60 hover:text-brand-navy",
                            sub.isBold && "font-bold text-brand-navy"
                          )}
                        >
                          {sub.name[language]}
                        </Link>
                      );
                    })}
                  </div>
                ) : (
                  <Link
                    key={link.href}
                    to={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block px-3 py-4 text-base font-medium text-brand-navy/60 hover:text-brand-navy hover:bg-brand-navy/5 rounded-xl transition-all"
                  >
                    {link.name[language]}
                  </Link>
                )
              ))}
              <div className="pt-4 border-t border-brand-navy/5 mt-4">
                <div className="flex items-center justify-around py-4">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code);
                        setIsMenuOpen(false);
                      }}
                      className={cn(
                        "flex flex-col items-center space-y-1 px-4 py-2 rounded-xl transition-all",
                        language === lang.code ? "bg-brand-navy text-white" : "text-brand-navy/60"
                      )}
                    >
                      <span className="text-xl">{lang.flag}</span>
                      <span className="text-xs font-bold uppercase">{lang.code}</span>
                    </button>
                  ))}
                </div>
                {user ? (
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3 p-4 bg-brand-navy/5 rounded-2xl border border-brand-navy/10">
                      <div className="w-10 h-10 rounded-full bg-brand-navy text-white flex items-center justify-center font-bold">
                        {user.displayName?.charAt(0) || user.email?.charAt(0).toUpperCase()}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-bold text-brand-navy truncate">{user.displayName || user.email}</p>
                        <p className="text-xs text-brand-navy/40 truncate">{user.email}</p>
                      </div>
                    </div>
                    <button
                      onClick={() => {
                        logout();
                        setIsMenuOpen(false);
                      }}
                      className="w-full bg-red-50 text-red-600 py-4 rounded-xl font-bold flex items-center justify-center space-x-2"
                    >
                      <LogOut className="w-4 h-4" />
                      <span>{language === 'en' ? 'Logout' : language === 'fr' ? 'Déconnexion' : 'Sair'}</span>
                    </button>
                  </div>
                ) : (
                  <Link
                    to="/onboarding"
                    onClick={() => setIsMenuOpen(false)}
                    className="block w-full text-center bg-brand-navy text-white py-4 rounded-xl font-bold mt-4"
                  >
                    {language === 'en' ? 'Get Started' : language === 'fr' ? 'Commencer' : 'Começar'}
                  </Link>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
