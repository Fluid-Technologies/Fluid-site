import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion, AnimatePresence } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { 
  Building2, 
  Users, 
  Wallet, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2,
  Zap,
  TrendingUp
} from 'lucide-react';
import Logo from '../components/Logo';

export default function Onboarding() {
  const { language } = useLanguage();
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      id: 'welcome',
      icon: Building2,
      title: { en: 'Welcome to Fluide', fr: 'Bienvenue sur Fluide', pt: 'Bem-vindo à Fluide' },
      desc: { 
        en: 'The AI-powered operating system for African businesses. Let\'s set up your workspace.', 
        fr: 'Le système d\'exploitation propulsé par l\'IA pour les entreprises africaines. Configurons votre espace de travail.', 
        pt: 'O sistema operativo com IA para empresas africanas. Vamos configurar o seu espaço de trabalho.' 
      },
      image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 'hr-payroll',
      icon: Users,
      title: { en: 'Automate HR & Payroll', fr: 'Automatisez les RH et la Paie', pt: 'Automatize RH e Folha' },
      desc: { 
        en: 'Manage your team, run compliant payroll across 40+ countries, and let AI handle the administrative heavy lifting.', 
        fr: 'Gérez votre équipe, exécutez une paie conforme dans plus de 40 pays, et laissez l\'IA gérer les tâches administratives lourdes.', 
        pt: 'Faça a gestão da sua equipa, processe salários em conformidade em mais de 40 países e deixe a IA lidar com o trabalho administrativo pesado.' 
      },
      image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 'pulse',
      icon: Wallet,
      title: { en: 'Empower Your Employees', fr: 'Autonomisez vos employés', pt: 'Capacite os seus Colaboradores' },
      desc: { 
        en: 'Give your team access to earned wages, digital savings groups, and financial wellness tools with Fluide Pulse.', 
        fr: 'Donnez à votre équipe l\'accès aux salaires gagnés, aux groupes d\'épargne numériques et aux outils de bien-être financier avec Fluide Pulse.', 
        pt: 'Dê à sua equipa acesso a salários ganhos, grupos de poupança digitais e ferramentas de bem-estar financeiro com o Fluide Pulse.' 
      },
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 'stock-protect',
      icon: TrendingUp,
      title: { en: 'Manage & Protect', fr: 'Gérer et Protéger', pt: 'Gerir e Proteger' },
      desc: { 
        en: 'Track inventory with AI demand forecasting (Fluide Stock) and secure your business with embedded insurance (Fluide Protect).', 
        fr: 'Suivez les stocks avec la prévision de la demande par l\'IA (Fluide Stock) et sécurisez votre entreprise avec une assurance intégrée (Fluide Protect).', 
        pt: 'Acompanhe o inventário com previsão de procura por IA (Fluide Stock) e proteja o seu negócio com seguros integrados (Fluide Protect).' 
      },
      image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800'
    }
  ];

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      navigate('/platform');
    }
  };

  const CurrentIcon = steps[currentStep].icon;

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <header className="px-6 py-6 flex justify-between items-center border-b border-brand-navy/5">
        <Logo />
        <button 
          onClick={() => navigate('/platform')}
          className="text-sm font-bold text-brand-navy/60 hover:text-brand-navy transition-colors"
        >
          {language === 'en' ? 'Skip' : language === 'fr' ? 'Passer' : 'Saltar'}
        </button>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col lg:flex-row">
        {/* Left Side - Text & Controls */}
        <div className="flex-1 flex flex-col justify-center px-6 py-12 lg:px-24">
          <div className="max-w-md mx-auto w-full">
            {/* Progress Indicators */}
            <div className="flex items-center space-x-2 mb-12">
              {steps.map((_, idx) => (
                <div 
                  key={idx} 
                  className="flex-1 flex items-center"
                >
                  <div 
                    className={`h-1.5 flex-1 rounded-full transition-all duration-500 ${
                      idx <= currentStep ? 'bg-brand-cyan' : 'bg-brand-navy/10'
                    }`}
                  />
                  {idx < currentStep && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="ml-1 text-brand-cyan"
                    >
                      <CheckCircle2 className="w-4 h-4" />
                    </motion.div>
                  )}
                </div>
              ))}
            </div>

            <div className="mb-6 flex items-center justify-between">
              <span className="text-[10px] font-black uppercase tracking-widest text-brand-navy/40">
                {language === 'en' ? 'Step' : language === 'fr' ? 'Étape' : 'Passo'} {currentStep + 1} / {steps.length}
              </span>
              {currentStep > 0 && (
                <button
                  onClick={() => setCurrentStep(prev => prev - 1)}
                  className="text-xs font-bold text-brand-navy/40 hover:text-brand-navy transition-colors flex items-center space-x-1"
                >
                  <span>{language === 'en' ? 'Back' : language === 'fr' ? 'Retour' : 'Voltar'}</span>
                </button>
              )}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-16 h-16 bg-brand-navy/5 rounded-2xl flex items-center justify-center mb-8 text-brand-navy">
                  <CurrentIcon className="w-8 h-8" />
                </div>
                
                <h1 className="text-4xl font-bold text-brand-navy mb-4 leading-tight">
                  {steps[currentStep].title[language]}
                </h1>
                
                <p className="text-lg text-brand-navy/60 leading-relaxed mb-12">
                  {steps[currentStep].desc[language]}
                </p>

                <button
                  onClick={handleNext}
                  className="w-full py-4 bg-brand-navy text-white rounded-xl font-bold hover:bg-brand-navy/90 transition-all flex items-center justify-center space-x-2 group"
                >
                  <span>
                    {currentStep === steps.length - 1 
                      ? (language === 'en' ? 'Get Started' : language === 'fr' ? 'Commencer' : 'Começar')
                      : (language === 'en' ? 'Continue' : language === 'fr' ? 'Continuer' : 'Continuar')
                    }
                  </span>
                  {currentStep === steps.length - 1 ? (
                    <CheckCircle2 className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  ) : (
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  )}
                </button>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="hidden lg:block lg:w-1/2 bg-brand-navy/5 relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentStep}
              src={steps[currentStep].image}
              alt="Onboarding"
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/80 via-brand-navy/20 to-transparent" />
        </div>
      </main>
    </div>
  );
}
