import React from 'react';
import { motion } from 'motion/react';
import { 
  Building2, 
  Settings, 
  CreditCard, 
  Wallet, 
  ArrowRight,
  ShieldCheck,
  Zap,
  Users
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const EoRDataFlow = () => {
  const { language } = useLanguage();

  const labels = {
    en: {
      title: "Seamless Data Flow",
      client: "Client Company",
      clientInput: "Input: Role, Salary, Details",
      hr: "Fluide HR",
      hrTask: "Compliance & Onboarding",
      pay: "Fluide Pay",
      payTask: "Automated Disbursement",
      pulse: "Fluide Pulse",
      pulseTask: "Employee Wallet & Benefits"
    },
    fr: {
      title: "Flux de Données Fluide",
      client: "Entreprise Cliente",
      clientInput: "Saisie : Poste, Salaire, Détails",
      hr: "Fluide HR",
      hrTask: "Conformité & Onboarding",
      pay: "Fluide Pay",
      payTask: "Versement Automatisé",
      pulse: "Fluide Pulse",
      pulseTask: "Portefeuille & Avantages"
    },
    pt: {
      title: "Fluxo de Dados Contínuo",
      client: "Empresa Cliente",
      clientInput: "Entrada: Cargo, Salário, Detalhes",
      hr: "Fluide HR",
      hrTask: "Conformidade e Integração",
      pay: "Fluide Pay",
      payTask: "Desembolso Automatizado",
      pulse: "Fluide Pulse",
      pulseTask: "Carteira e Benefícios"
    }
  };

  const l = labels[language as keyof typeof labels] || labels.en;

  const steps = [
    {
      id: 'client',
      icon: Building2,
      title: l.client,
      subtitle: l.clientInput,
      color: 'bg-brand-navy',
      iconColor: 'text-white'
    },
    {
      id: 'hr',
      icon: Settings,
      title: l.hr,
      subtitle: l.hrTask,
      color: 'bg-brand-cyan/20',
      iconColor: 'text-brand-navy'
    },
    {
      id: 'pay',
      icon: CreditCard,
      title: l.pay,
      subtitle: l.payTask,
      color: 'bg-brand-cyan/40',
      iconColor: 'text-brand-navy'
    },
    {
      id: 'pulse',
      icon: Wallet,
      title: l.pulse,
      subtitle: l.pulseTask,
      color: 'bg-brand-cyan',
      iconColor: 'text-brand-navy'
    }
  ];

  return (
    <div className="py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h3 className="text-2xl font-bold text-brand-navy mb-2">{l.title}</h3>
          <div className="h-1 w-20 bg-brand-cyan mx-auto rounded-full" />
        </div>

        <div className="relative">
          {/* Connection Line */}
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-brand-navy/5 -translate-y-1/2 hidden lg:block" />
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, idx) => (
              <div key={step.id} className="relative">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.2 }}
                  className="flex flex-col items-center text-center"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`w-20 h-20 ${step.color} rounded-3xl flex items-center justify-center mb-6 shadow-xl relative group`}
                  >
                    <step.icon className={`w-8 h-8 ${step.iconColor}`} />
                    
                    {/* Seamless Badge */}
                    {idx > 0 && (
                      <div className="absolute -left-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-1 shadow-md lg:hidden">
                        <Zap className="w-4 h-4 text-brand-cyan fill-brand-cyan" />
                      </div>
                    )}
                  </motion.div>
                  
                  <h4 className="font-bold text-brand-navy mb-2">{step.title}</h4>
                  <p className="text-xs text-brand-navy/60 leading-relaxed max-w-[150px]">
                    {step.subtitle}
                  </p>
                </motion.div>

                {/* Desktop Arrow */}
                {idx < steps.length - 1 && (
                  <div className="hidden lg:flex absolute top-10 -right-4 translate-x-1/2 z-20 items-center justify-center">
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ repeat: Infinity, duration: 2 }}
                      className="bg-white rounded-full p-2 shadow-lg border border-brand-navy/5"
                    >
                      <ArrowRight className="w-4 h-4 text-brand-cyan" />
                    </motion.div>
                  </div>
                )}

                {/* Mobile Arrow */}
                {idx < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center py-4">
                    <motion.div
                      animate={{ y: [0, 5, 0] }}
                      transition={{ repeat: Infinity, duration: 2 }}
                    >
                      <ArrowRight className="w-6 h-6 text-brand-cyan rotate-90" />
                    </motion.div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Integration Highlights */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1 }}
          className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6"
        >
          {[
            { icon: ShieldCheck, text: { en: "100% Compliant", fr: "100% Conforme", pt: "100% Conforme" } },
            { icon: Zap, text: { en: "Instant Disbursement", fr: "Versement Instantané", pt: "Desembolso Instantâneo" } },
            { icon: Users, text: { en: "Unified Experience", fr: "Expérience Unifiée", pt: "Experiência Unificada" } }
          ].map((item, i) => (
            <div key={i} className="flex items-center justify-center space-x-3 text-brand-navy/60 bg-brand-navy/[0.02] py-4 rounded-2xl border border-brand-navy/5">
              <item.icon className="w-5 h-5 text-brand-cyan" />
              <span className="text-sm font-bold uppercase tracking-wider">{item.text[language as keyof typeof item.text] || item.text.en}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default EoRDataFlow;
