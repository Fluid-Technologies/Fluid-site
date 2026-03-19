import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'motion/react';
import { ArrowRight, X, CheckCircle2, Briefcase, Users, Banknote, CreditCard, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

const ForBusinesses = () => {
  const { language } = useLanguage();

  const content = {
    en: {
      hero: {
        title: 'Run your business better.',
        desc: 'We handle the admin work so you can focus on growing your business.'
      },
      painPoints: {
        title: "Common Challenges",
        realityLabel: "The Reality",
        impactLabel: "The Impact",
        points: [
          { reality: 'Hiring on WhatsApp', impact: 'You waste hours hiring instead of running your business.' },
          { reality: 'Payroll mistakes in Excel', impact: 'Payroll takes too long. Taxes are done by hand. Compliance is a guess.' },
          { reality: 'Manual salary payments', impact: 'Late payments hurt team trust and increase turnover.' },
          { reality: 'Bank loans rejected', impact: 'You cannot grow when you need money the most.' }
        ]
      },
      pricing: {
        title: "Simple pricing.",
        subtitle: "Pick the right plan for your team.",
        popularBadge: "Most Popular",
        includedLabel: "What's Included",
        bestForLabel: "Best For",
        tiers: [
          { tier: 'Basic HR', cost: '$4-6 / employee / month', included: 'Payroll, HR, Pay, and Pulse. Includes salary calculation, team management, and instant payments.', bestFor: 'Small businesses needing basic HR and payroll.' },
          { tier: 'Pro Business', cost: '$6-8 / employee / month', included: 'Everything in Basic HR, plus Fluide Books for accounting and reporting.', bestFor: 'Growing businesses needing accounting.' },
          { tier: 'All-in-One', cost: '$8-12 / employee / month', included: 'All 9 products. Everything in Pro Business, plus hiring, lending, and insurance.', bestFor: 'Larger businesses needing everything.' }
        ]
      }
    },
    fr: {
      hero: {
        title: 'Gérez votre entreprise comme jamais auparavant.',
        desc: 'Fluide prend en charge chaque charge administrative — pour que vous puissiez vous concentrer sur ce qui compte : la croissance.'
      },
      painPoints: {
        title: "Vos Points de Douleur",
        realityLabel: "La Réalité",
        impactLabel: "L'Impact",
        points: [
          { reality: 'Recrutement via des groupes WhatsApp', impact: 'Vous passez 15 à 20 heures par semaine à recruter au lieu de gérer votre entreprise.' },
          { reality: 'Erreurs de paie sur Excel', impact: 'La paie prend une journée entière. Les calculs d\'impôts sont faits à la main. La CNPS est toujours une devinette.' },
          { reality: 'Virements de salaires manuels', impact: 'Votre équipe perd confiance quand l\'argent est en retard. Le turnover augmente.' },
          { reality: 'Prêt bancaire refusé', impact: 'Vous ne pouvez pas croître quand vous avez le plus besoin de capital.' }
        ]
      },
      pricing: {
        title: "Tarification simple et transparente.",
        subtitle: "Choisissez le bon plan pour votre équipe en croissance.",
        popularBadge: "Le Plus Populaire",
        includedLabel: "Ce Qui Est Inclus",
        bestForLabel: "Idéal Pour",
        tiers: [
          { tier: 'Pack RH Essentiel', cost: '4-6 $ / employé / mois', included: 'Paie + RH + Paiement + Pulse. Calcul des salaires et conformité, gestion de la main-d\'œuvre, décaissement instantané et portefeuille employé.', bestFor: 'Micro et PME ayant besoin des RH et de la paie essentiels.' },
          { tier: 'Entreprise Complète', cost: '6-8 $ / employé / mois', included: 'Tout dans le Pack RH Essentiel, plus Fluide Books. Comptabilité et finances, grand livre pour toutes les transactions et rapports avancés.', bestFor: 'PME en croissance ayant besoin d\'une comptabilité intégrée.' },
          { tier: 'Suite Complète', cost: '8-12 $ / employé / mois', included: 'Les 9 produits. Tout dans Entreprise Complète, plus Fluide Jobs (recrutement vérifié), Fluide Bank (prêts) et Fluide Protect (assurance).', bestFor: 'Entreprises établies ayant besoin de l\'écosystème complet.' }
        ]
      }
    },
    pt: {
      hero: {
        title: 'Gira o seu negócio como nunca antes.',
        desc: 'A Fluide tira cada encargo administrativo dos seus ombros — para que se possa focar no que importa: crescer.'
      },
      painPoints: {
        title: "Os Seus Pontos de Dor",
        realityLabel: "A Realidade",
        impactLabel: "O Impacto",
        points: [
          { reality: 'Contratação via grupos de WhatsApp', impact: 'Passa 15-20 horas por semana a contratar em vez de gerir o seu negócio.' },
          { reality: 'Erros de folha de pagamento no Excel', impact: 'A folha de pagamento leva um dia inteiro. Os cálculos de impostos são feitos à mão. O INSS é sempre um palpite.' },
          { reality: 'Transferências de salários manuais', impact: 'A sua equipa perde a confiança quando o dinheiro atrasa. A rotatividade aumenta.' },
          { reality: 'Empréstimo bancário rejeitado', impact: 'Não consegue crescer quando mais precisa de capital.' }
        ]
      },
      pricing: {
        title: "Preços simples e transparentes.",
        subtitle: "Escolha o plano certo para a sua equipa em crescimento.",
        popularBadge: "Mais Popular",
        includedLabel: "O Que Está Incluído",
        bestForLabel: "Melhor Para",
        tiers: [
          { tier: 'Pacote RH Essencial', cost: '$4-6 / funcionário / mês', included: 'Folha + RH + Pagamento + Pulse. Cálculo de salários e conformidade, gestão da força de trabalho, desembolso instantâneo e carteira do funcionário.', bestFor: 'Micro e PMEs que precisam de RH e folha essenciais.' },
          { tier: 'Negócio Completo', cost: '$6-8 / funcionário / mês', included: 'Tudo no Pacote RH Essencial, mais Fluide Books. Contabilidade e finanças, livro-razão para todas as transações e relatórios avançados.', bestFor: 'PMEs em crescimento que precisam de contabilidade integrada.' },
          { tier: 'Suite Completa', cost: '$8-12 / funcionário / mês', included: 'Todos os 9 produtos. Tudo no Negócio Completo, mais Fluide Jobs (contratação verificada), Fluide Bank (empréstimos) e Fluide Protect (seguros).', bestFor: 'Empresas estabelecidas que precisam do ecossistema completo.' }
        ]
      }
    }
  };

  const t = content[language as keyof typeof content] || content.en;

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-brand-navy py-24 relative overflow-hidden min-h-[60vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1920&q=80" 
            alt="Business team" 
            className="w-full h-full object-cover opacity-20"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/60 to-transparent" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight mb-8 text-white">{t.hero.title}</h1>
            <p className="text-xl text-white/60 leading-relaxed">{t.hero.desc}</p>
          </div>
        </div>
      </section>

      {/* Pain Points */}
      <section className="py-24 bg-brand-navy/[0.02]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-16 text-brand-navy">{t.painPoints.title}</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {t.painPoints.points.map((point, idx) => (
              <div key={idx} className="bg-white p-8 rounded-3xl border border-brand-navy/5 shadow-sm hover:shadow-md transition-all">
                <div className="flex items-center space-x-3 text-rose-500 mb-4">
                  <X className="w-5 h-5" />
                  <span className="font-bold uppercase tracking-widest text-xs">{t.painPoints.realityLabel}</span>
                </div>
                <p className="text-lg font-bold mb-6 text-brand-navy">{point.reality}</p>
                <div className="flex items-center space-x-3 text-brand-navy/40 mb-4">
                  <ArrowRight className="w-5 h-5" />
                  <span className="font-bold uppercase tracking-widest text-xs">{t.painPoints.impactLabel}</span>
                </div>
                <p className="text-brand-navy/60 leading-relaxed">{point.impact}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold mb-4 text-brand-navy">{t.pricing.title}</h2>
            <p className="text-brand-navy/40">{t.pricing.subtitle}</p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {t.pricing.tiers.map((tier, idx) => (
              <div key={idx} className={`p-10 rounded-[40px] border ${idx === 1 ? 'bg-brand-navy text-white border-brand-navy shadow-2xl scale-105 relative z-10' : 'bg-brand-navy/[0.02] border-brand-navy/5'} flex flex-col h-full transition-all duration-500`}>
                {idx === 1 && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-cyan text-brand-navy text-[10px] font-black uppercase tracking-widest px-4 py-1 rounded-full">
                    {t.pricing.popularBadge}
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2">{tier.tier}</h3>
                <div className="text-lg font-medium mb-8 opacity-60">{tier.cost}</div>
                <div className="flex-grow space-y-4 mb-10">
                  <div className="text-[10px] font-bold uppercase tracking-widest opacity-40">{t.pricing.includedLabel}</div>
                  <p className="text-sm leading-relaxed">{tier.included}</p>
                </div>
                <div className="pt-8 border-t border-white/10">
                  <div className="text-[10px] font-bold uppercase tracking-widest opacity-40 mb-2">{t.pricing.bestForLabel}</div>
                  <p className="text-sm font-medium">{tier.bestFor}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ForBusinesses;
