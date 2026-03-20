import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Check, Info, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Pricing = () => {
  const { language } = useLanguage();
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');

  const content = {
    hero: {
      title: { en: 'Simple, transparent pricing', fr: 'Tarification simple et transparente', pt: 'Preços simples e transparentes' },
      desc: { 
        en: 'Choose the right plan for your business, whether you are a solo worker or a growing company.',
        fr: 'Choisissez le bon plan pour votre entreprise, que vous soyez un micro-entrepreneur ou une entreprise en croissance.',
        pt: 'Escolha o plano certo para o seu negócio, seja um microempreendedor ou uma empresa em crescimento.'
      }
    },
    billing: {
      monthly: { en: 'Monthly', fr: 'Mensuel', pt: 'Mensal' },
      annual: { en: 'Annually (Save up to 20%)', fr: 'Annuel (Économisez jusqu\'à 20%)', pt: 'Anual (Poupe até 20%)' }
    },
    formal: {
      title: { en: 'For Registered Businesses', fr: 'Pour les Entreprises Formelles', pt: 'Para Empresas Formais' },
      desc: { en: 'Complete team and money management for growing businesses.', fr: 'Gestion complète de la main-d\'œuvre et des finances pour les équipes en croissance.', pt: 'Gestão completa da força de trabalho e financeira para equipas em crescimento.' },
      plans: [
        {
          name: { en: 'Basic HR Bundle', fr: 'Pack RH Essentiel', pt: 'Pacote RH Essencial' },
          price: { en: '$4-6', fr: '4-6 $', pt: '$4-6' },
          unit: { en: '/ employee / month', fr: '/ employé / mois', pt: '/ funcionário / mês' },
          desc: { en: 'Payroll + HR + Pay + Pulse', fr: 'Paie + RH + Paiement + Pulse', pt: 'Folha + RH + Pagamento + Pulse' },
          features: [
            { en: 'Salary calculation & tax rules', fr: 'Calcul des salaires et conformité', pt: 'Cálculo de salários e conformidade' },
            { en: 'Team management', fr: 'Gestion de la main-d\'œuvre', pt: 'Gestão da força de trabalho' },
            { en: 'Instant payouts', fr: 'Décaissement instantané', pt: 'Desembolso instantâneo' },
            { en: 'Employee wallet & financial health', fr: 'Portefeuille employé et bien-être financier', pt: 'Carteira do funcionário e bem-estar financeiro' }
          ]
        },
        {
          name: { en: 'Complete Business', fr: 'Entreprise Complète', pt: 'Negócio Completo' },
          price: { en: '$6-8', fr: '6-8 $', pt: '$6-8' },
          unit: { en: '/ employee / month', fr: '/ employé / mois', pt: '/ funcionário / mês' },
          desc: { en: 'Core HR + Books', fr: 'RH Essentiel + Comptabilité', pt: 'RH Essencial + Contabilidade' },
          popular: true,
          features: [
            { en: 'Everything in Basic HR', fr: 'Tout dans le Pack RH Essentiel', pt: 'Tudo no Pacote RH Essencial' },
            { en: 'Accounting & money', fr: 'Comptabilité et finances', pt: 'Contabilidade e finanças' },
            { en: 'Record of all transactions', fr: 'Grand livre pour toutes les transactions', pt: 'Livro-razão para todas as transações' },
            { en: 'Detailed reports', fr: 'Rapports avancés', pt: 'Relatórios avançados' }
          ]
        },
        {
          name: { en: 'Full System', fr: 'Suite Complète', pt: 'Suite Completa' },
          price: { en: '$8-12', fr: '8-12 $', pt: '$8-12' },
          unit: { en: '/ employee / month', fr: '/ employé / mois', pt: '/ funcionário / mês' },
          desc: { en: 'All 9 products', fr: 'Les 9 produits', pt: 'Todos os 9 produtos' },
          features: [
            { en: 'Everything in Complete Business', fr: 'Tout dans Entreprise Complète', pt: 'Tudo no Negócio Completo' },
            { en: 'Verified hiring (Fluide Jobs)', fr: 'Recrutement vérifié (Fluide Jobs)', pt: 'Contratação verificada (Fluide Jobs)' },
            { en: 'Loans & credit (Fluide Bank)', fr: 'Prêts et crédit (Fluide Bank)', pt: 'Empréstimos e crédito (Fluide Bank)' },
            { en: 'Insurance & benefits (Fluide Protect)', fr: 'Assurance et avantages (Fluide Protect)', pt: 'Seguros e benefícios (Fluide Protect)' }
          ]
        }
      ]
    },
    informal: {
      title: { en: 'For Unregistered Businesses (Fluide Lite)', fr: 'Pour les Entreprises Informelles (Fluide Lite)', pt: 'Para Empresas Informais (Fluide Lite)' },
      desc: { en: 'Simple tools for solo workers and small shops.', fr: 'Outils simples pour les micro-entrepreneurs et les petits commerces.', pt: 'Ferramentas simples para microempreendedores e pequenas lojas.' },
      plans: [
        {
          name: { en: 'Free Forever', fr: 'Gratuit pour toujours', pt: 'Grátis para sempre' },
          price: { en: '0', fr: '0', pt: '0' },
          unit: { en: 'XAF / month', fr: 'XAF / mois', pt: 'XAF / mês' },
          desc: { en: 'Basic tracking for solo workers', fr: 'Suivi de base pour les auto-entrepreneurs', pt: 'Acompanhamento básico para empreendedores individuais' },
          features: [
            { en: 'Income and expense tracking', fr: 'Suivi des revenus/dépenses', pt: 'Acompanhamento de receitas/despesas' },
            { en: 'Daily profit view', fr: 'Vue des bénéfices quotidiens', pt: 'Visão de lucro diário' },
            { en: 'Cash reports', fr: 'Rapports de caisse', pt: 'Relatórios de caixa' },
            { en: 'Up to 50 transactions/month', fr: 'Jusqu\'à 50 transactions/mois', pt: 'Até 50 transações/mês' }
          ]
        },
        {
          name: { en: 'Starter', fr: 'Démarrage', pt: 'Iniciante' },
          price: { en: '2,000', fr: '2 000', pt: '2.000' },
          unit: { en: 'XAF / month', fr: 'XAF / mois', pt: 'XAF / mês' },
          desc: { en: 'For small shops with a few staff', fr: 'Pour les petits commerces avec quelques employés', pt: 'Para pequenas lojas com alguns funcionários' },
          popular: true,
          features: [
            { en: 'All Free features', fr: 'Toutes les fonctionnalités gratuites', pt: 'Todas as funcionalidades gratuitas' },
            { en: 'Team management (up to 3)', fr: 'Gestion du personnel (jusqu\'à 3)', pt: 'Gestão de pessoal (até 3)' },
            { en: 'Stock tracking', fr: 'Suivi des stocks', pt: 'Acompanhamento de inventário' },
            { en: 'Up to 200 transactions/month', fr: 'Jusqu\'à 200 transactions/mois', pt: 'Até 200 transações/mês' },
            { en: 'Limited early wage access', fr: 'Accès limité à l\'EWA', pt: 'Acesso EWA limitado' }
          ]
        },
        {
          name: { en: 'Pro', fr: 'Pro', pt: 'Pro' },
          price: { en: billingCycle === 'annual' ? '50,000' : '5,000', fr: billingCycle === 'annual' ? '50 000' : '5 000', pt: billingCycle === 'annual' ? '50.000' : '5.000' },
          unit: { en: billingCycle === 'annual' ? 'XAF / year' : 'XAF / month', fr: billingCycle === 'annual' ? 'XAF / an' : 'XAF / mois', pt: billingCycle === 'annual' ? 'XAF / ano' : 'XAF / mês' },
          desc: { en: 'Full power for growing unregistered businesses', fr: 'Toute la puissance pour les entreprises informelles en croissance', pt: 'Potência total para empresas informais em crescimento' },
          features: [
            { en: 'All Starter features', fr: 'Toutes les fonctionnalités Démarrage', pt: 'Todas as funcionalidades Iniciante' },
            { en: 'Team management (up to 5)', fr: 'Gestion du personnel (jusqu\'à 5)', pt: 'Gestão de pessoal (até 5)' },
            { en: 'Unlimited transactions', fr: 'Transactions illimitées', pt: 'Transações ilimitadas' },
            { en: 'Detailed reports & exports', fr: 'Rapports avancés et export', pt: 'Relatórios avançados e exportação' },
            { en: 'Full early wage access & bill payments', fr: 'EWA complet et paiement de factures', pt: 'EWA completo e pagamento de contas' }
          ]
        }
      ]
    },
    cta: {
      contact: { en: 'Contact Sales', fr: 'Contacter les Ventes', pt: 'Contactar Vendas' },
      start: { en: 'Get Started', fr: 'Commencer', pt: 'Começar' }
    }
  };

  const t = content;

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-brand-navy py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_20%,rgba(78,242,216,0.1),transparent_50%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
            {t.hero.title[language as keyof typeof t.hero.title] || t.hero.title.en}
          </h1>
          <p className="text-xl text-white/60 max-w-2xl mx-auto mb-12">
            {t.hero.desc[language as keyof typeof t.hero.desc] || t.hero.desc.en}
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center space-x-4">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-6 py-2 rounded-full font-bold transition-all ${
                billingCycle === 'monthly' ? 'bg-brand-cyan text-brand-navy' : 'text-white/60 hover:text-white'
              }`}
            >
              {t.billing.monthly[language as keyof typeof t.billing.monthly] || t.billing.monthly.en}
            </button>
            <button
              onClick={() => setBillingCycle('annual')}
              className={`px-6 py-2 rounded-full font-bold transition-all ${
                billingCycle === 'annual' ? 'bg-brand-cyan text-brand-navy' : 'text-white/60 hover:text-white'
              }`}
            >
              {t.billing.annual[language as keyof typeof t.billing.annual] || t.billing.annual.en}
            </button>
          </div>
        </div>
      </section>

      {/* Formal Businesses Pricing */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
              {t.formal.title[language as keyof typeof t.formal.title] || t.formal.title.en}
            </h2>
            <p className="text-xl text-brand-navy/60">
              {t.formal.desc[language as keyof typeof t.formal.desc] || t.formal.desc.en}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {t.formal.plans.map((plan, idx) => (
              <div 
                key={idx} 
                className={`rounded-3xl p-8 border ${plan.popular ? 'border-brand-cyan shadow-xl relative' : 'border-brand-navy/10'} bg-white flex flex-col`}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-brand-cyan text-brand-navy text-xs font-bold uppercase tracking-wider py-1 px-4 rounded-full">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold text-brand-navy mb-2">{plan.name[language as keyof typeof plan.name] || plan.name.en}</h3>
                <p className="text-brand-navy/60 mb-6">{plan.desc[language as keyof typeof plan.desc] || plan.desc.en}</p>
                <div className="mb-8">
                  <span className="text-4xl font-bold text-brand-navy">{plan.price[language as keyof typeof plan.price] || plan.price.en}</span>
                  <span className="text-brand-navy/60 ml-2">{plan.unit[language as keyof typeof plan.unit] || plan.unit.en}</span>
                </div>
                <ul className="space-y-4 mb-8 flex-grow">
                  {plan.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-brand-cyan shrink-0 mt-0.5" />
                      <span className="text-brand-navy/80">{feature[language as keyof typeof feature] || feature.en}</span>
                    </li>
                  ))}
                </ul>
                <Link 
                  to="/contact"
                  className={`w-full py-4 rounded-xl font-bold text-center transition-all ${
                    plan.popular 
                      ? 'bg-brand-navy text-white hover:bg-brand-navy/90' 
                      : 'bg-brand-navy/5 text-brand-navy hover:bg-brand-navy/10'
                  }`}
                >
                  {t.cta.contact[language as keyof typeof t.cta.contact] || t.cta.contact.en}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Informal Businesses Pricing */}
      <section className="py-24 bg-brand-navy/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
              {t.informal.title[language as keyof typeof t.informal.title] || t.informal.title.en}
            </h2>
            <p className="text-xl text-brand-navy/60">
              {t.informal.desc[language as keyof typeof t.informal.desc] || t.informal.desc.en}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {t.informal.plans.map((plan, idx) => (
              <div 
                key={idx} 
                className={`rounded-3xl p-8 border ${plan.popular ? 'border-brand-cyan shadow-xl relative bg-white' : 'border-brand-navy/10 bg-white/50'} flex flex-col`}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-brand-cyan text-brand-navy text-xs font-bold uppercase tracking-wider py-1 px-4 rounded-full">
                    Recommended
                  </div>
                )}
                <h3 className="text-2xl font-bold text-brand-navy mb-2">{plan.name[language as keyof typeof plan.name] || plan.name.en}</h3>
                <p className="text-brand-navy/60 mb-6">{plan.desc[language as keyof typeof plan.desc] || plan.desc.en}</p>
                <div className="mb-8">
                  <span className="text-4xl font-bold text-brand-navy">{plan.price[language as keyof typeof plan.price] || plan.price.en}</span>
                  <span className="text-brand-navy/60 ml-2">{plan.unit[language as keyof typeof plan.unit] || plan.unit.en}</span>
                </div>
                <ul className="space-y-4 mb-8 flex-grow">
                  {plan.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-brand-cyan shrink-0 mt-0.5" />
                      <span className="text-brand-navy/80">{feature[language as keyof typeof feature] || feature.en}</span>
                    </li>
                  ))}
                </ul>
                <Link 
                  to="/onboarding"
                  className={`w-full py-4 rounded-xl font-bold text-center transition-all ${
                    plan.popular 
                      ? 'bg-brand-navy text-white hover:bg-brand-navy/90' 
                      : 'bg-brand-navy/5 text-brand-navy hover:bg-brand-navy/10'
                  }`}
                >
                  {t.cta.start[language as keyof typeof t.cta.start] || t.cta.start.en}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Future Verticals Teaser */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-brand-navy mb-6">
            {language === 'en' ? 'Solutions for your industry' : language === 'fr' ? 'Solutions spécifiques à l\'industrie' : 'Soluções Específicas da Indústria'}
          </h2>
          <p className="text-xl text-brand-navy/60 mb-10">
            {language === 'en' 
              ? 'We also offer custom pricing for specific industries like Education, Agriculture, Energy, Healthcare, and Fuel Retail.' 
              : language === 'fr' 
              ? 'Nous proposons également des tarifs sur mesure pour des secteurs spécifiques, notamment l\'éducation (Fluide Campus), l\'agriculture (Fluide Grow), l\'énergie (Fluide Power), la santé (Fluide Care) et la vente de carburant au détail (Fluide Gas).' 
              : 'Também oferecemos preços adaptados para verticais específicos, incluindo Educação (Fluide Campus), Agricultura (Fluide Grow), Energia (Fluide Power), Saúde (Fluide Care) e Retalho de Combustível (Fluide Gas).'}
          </p>
          <Link to="/contact" className="inline-flex items-center space-x-2 text-brand-cyan font-bold hover:text-brand-navy transition-colors">
            <span>{language === 'en' ? 'Contact us for a custom price' : language === 'fr' ? 'Contactez-nous pour un devis personnalisé' : 'Contacte-nos para um orçamento personalizado'}</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
