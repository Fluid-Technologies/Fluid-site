import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import Logo from '../components/Logo';
import { productOnboardingData } from '../data/productOnboardingData';

export default function ProductOnboarding() {
  const { productId } = useParams<{ productId: string }>();
  const { language } = useLanguage();
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);

  const productData = productId ? productOnboardingData[productId] : null;

  if (!productData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
          <button onClick={() => navigate('/products')} className="text-brand-cyan font-bold">Back to Products</button>
        </div>
      </div>
    );
  }

  const steps = productData.steps;

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      navigate(`/products/${productId}`);
    }
  };

  const CurrentIcon = steps[currentStep].icon;

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <header className="px-6 py-6 flex justify-between items-center border-b border-brand-navy/5">
        <div className="flex items-center space-x-4">
          <Logo />
          <div className="h-6 w-px bg-brand-navy/10" />
          <span className="text-sm font-bold text-brand-navy">{productData.name}</span>
        </div>
        <button 
          onClick={() => navigate(`/products/${productId}`)}
          className="text-sm font-bold text-brand-navy/60 hover:text-brand-navy transition-colors"
        >
          {language === 'en' ? 'Skip' : language === 'fr' ? 'Passer' : 'Saltar'}
        </button>
      </header>

      <main className="flex-1 flex flex-col lg:flex-row">
        <div className="flex-1 flex flex-col justify-center px-6 py-12 lg:px-24">
          <div className="max-w-md mx-auto w-full">
            <div className="flex items-center space-x-2 mb-12">
              {steps.map((_: any, idx: number) => (
                <div key={idx} className="flex-1 flex items-center">
                  <div className={`h-1.5 flex-1 rounded-full transition-all duration-500 ${idx <= currentStep ? 'bg-brand-cyan' : 'bg-brand-navy/10'}`} />
                  {idx < currentStep && (
                    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="ml-1 text-brand-cyan">
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
                <h1 className="text-4xl font-bold text-brand-navy mb-4 leading-tight">{steps[currentStep].title[language]}</h1>
                <p className="text-lg text-brand-navy/60 leading-relaxed mb-12">{steps[currentStep].desc[language]}</p>
                <button
                  onClick={handleNext}
                  className="w-full py-4 bg-brand-navy text-white rounded-xl font-bold hover:bg-brand-navy/90 transition-all flex items-center justify-center space-x-2 group"
                >
                  <span>
                    {currentStep === steps.length - 1 
                      ? (language === 'en' ? `Explore ${productData.name}` : language === 'fr' ? `Explorer ${productData.name}` : `Explorar ${productData.name}`)
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
