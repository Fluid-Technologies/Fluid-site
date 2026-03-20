import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'motion/react';
import { ArrowRight, BookOpen, BarChart3, FileText, Receipt, Calculator } from 'lucide-react';
import { Link } from 'react-router-dom';

const FluideBooks = () => {
  const { language } = useLanguage();

  const content = {
    hero: {
      title: { en: 'Know your numbers. Grow your business.', fr: 'Connaissez vos chiffres. Développez votre activité.', pt: 'Conheça os seus números. Cresça o seu negócio.' },
      desc: {
        en: 'Get a real-time view of your finances. Fluide Books gives you a live P&L, clean cash flow, and tax-ready reports.',
        fr: 'La plupart des dirigeants de PME africaines n\'ont pas une vision en temps réel de leurs finances. Fluide Books change cela — en vous donnant un compte de résultat en direct, une trésorerie claire et des rapports prêts pour les impôts.',
        pt: 'A maioria dos proprietários de PMEs em África não tem uma visão em tempo real das suas finanças. O Fluide Books muda isso — dando-lhe uma demonstração de resultados em tempo real, fluxo de caixa limpo e relatórios prontos para impostos.'
      },
      primaryCTA: { en: 'Start tracking', fr: 'Commencer le suivi', pt: 'Iniciar rastreamento' }
    },
    demo: {
      pl: { en: 'Profit & Loss', fr: 'Compte de Résultat', pt: 'Demonstração de Resultados' },
      date: { en: 'March 2026', fr: 'Mars 2026', pt: 'Março 2026' },
      income: { en: 'Income', fr: 'Revenus', pt: 'Rendimentos' },
      expenses: { en: 'Expenses', fr: 'Dépenses', pt: 'Despesas' },
      netProfit: { en: 'Net Profit', fr: 'Bénéfice Net', pt: 'Lucro Líquido' }
    },
    dualMode: {
      title: { en: 'Standalone or Integrated', fr: 'Mode Double : Autonome ou Intégré', pt: 'Modo Duplo: Autónomo ou Integrado' },
      desc: { en: 'Use Fluide Books on its own, or pair it with Fluide HR and Fluide Bank. The more Fluide products you use, the more your books update themselves.', fr: 'Utilisez Fluide Books comme un outil comptable autonome — ou associez-le à Fluide RH et Fluide Bank. Plus vous utilisez Fluide, plus vos livres se mettent à jour d\'eux-mêmes.', pt: 'Use o Fluide Books como uma ferramenta de contabilidade autónoma — ou combine-o com o Fluide HR e o Fluide Bank. Quanto mais usar a Fluide, mais os seus livros se atualizam sozinhos.' },
      cta: { en: 'Start Free 30-day Trial', fr: 'Commencer l\'essai gratuit de 30 jours', pt: 'Iniciar Teste Gratuito de 30 dias' }
    }
  };

  const features = [
    { icon: Receipt, title: { en: 'Smart Invoicing', fr: 'Facturation intelligente', pt: 'Faturação Inteligente' }, desc: { en: 'Create professional invoices in seconds. Send automatic reminders and accept payments via Fluide Pay.', fr: 'Créez des factures professionnelles en quelques secondes. Support multi-devises. Envoyez des rappels automatiquement et acceptez les paiements directement via Fluide Pay.', pt: 'Crie faturas profissionais em segundos. Suporte multi-moeda. Envie lembretes automaticamente e aceite pagamentos diretamente via Fluide Pay.' } },
    { icon: FileText, title: { en: 'Automated Tax Filing', fr: 'Déclaration fiscale automatisée', pt: 'Declaração Fiscal Automatizada' }, desc: { en: 'Generate tax-ready reports and automate filings based on local rules. Never miss a deadline.', fr: 'Générez des rapports prêts pour les impôts et automatisez les déclarations en fonction des réglementations locales. Ne manquez jamais une échéance ou ne calculez plus mal la TVA.', pt: 'Gere relatórios prontos para impostos e automatize declarações com base nas regulamentações locais. Nunca mais perca um prazo ou calcule mal o IVA.' } },
    { icon: BarChart3, title: { en: 'Cash Flow Forecasting', fr: 'Prévision des flux de trésorerie', pt: 'Previsão de Fluxo de Caixa' }, desc: { en: 'AI predicts your future cash position based on past data, upcoming payroll, and unpaid invoices.', fr: 'Des informations basées sur l\'IA prédisent votre future position de trésorerie en fonction des données historiques, de la paie à venir et des factures impayées.', pt: 'Informações baseadas em IA preveem a sua posição futura de caixa com base em dados históricos, próximos salários e faturas pendentes.' } },
    { icon: Calculator, title: { en: 'Automated Payroll Integration', fr: 'Intégration automatique de la paie', pt: 'Integração Automática de Paie' }, desc: { en: 'When you run payroll, all salary costs and taxes post automatically to your Books.', fr: 'Lorsque Fluide RH traite la paie, tous les coûts salariaux et les retenues d\'impôts sont enregistrés automatiquement dans vos livres.', pt: 'Quando a Fluide RH processa salários, todos os custos salariais e retenções de impostos são lançados automaticamente nos seus Livros.' } },
  ];

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-brand-navy/[0.02] py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_50%_120%,rgba(78,242,216,0.05),transparent_50%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-navy text-brand-cyan text-[10px] font-bold uppercase tracking-widest mb-6">
                <BookOpen className="w-3 h-3" />
                <span>Fluide Books</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold tracking-tight mb-8 leading-tight text-brand-navy">
                {content.hero.title[language]}
              </h1>
              <p className="text-xl text-brand-navy/60 leading-relaxed mb-10">
                {content.hero.desc[language]}
              </p>
              <Link 
                to="/onboarding"
                className="inline-block bg-brand-navy text-white px-8 py-4 rounded-full font-bold hover:bg-brand-navy/90 transition-all shadow-lg shadow-brand-navy/10"
              >
                {content.hero.primaryCTA[language]}
              </Link>
            </div>
            <div className="bg-white rounded-[40px] shadow-2xl p-10 border border-brand-navy/5 relative overflow-hidden">
              <div className="flex items-center justify-between mb-8">
                <div className="font-bold text-brand-navy">{content.demo.pl[language]}</div>
                <div className="text-xs text-brand-navy/40">{content.demo.date[language]}</div>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 rounded-2xl bg-emerald-50 border border-emerald-100">
                  <span className="text-emerald-700 font-medium">{content.demo.income[language]}</span>
                  <span className="font-bold text-emerald-700">₦12,450,000</span>
                </div>
                <div className="flex justify-between items-center p-4 rounded-2xl bg-rose-50 border border-rose-100">
                  <span className="text-rose-700 font-medium">{content.demo.expenses[language]}</span>
                  <span className="font-bold text-rose-700">₦8,200,000</span>
                </div>
                <div className="pt-4 border-t border-brand-navy/5 flex justify-between items-center">
                  <span className="font-bold text-brand-navy">{content.demo.netProfit[language]}</span>
                  <span className="text-2xl font-black text-brand-navy">₦4,250,000</span>
                </div>
              </div>
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-brand-cyan/10 rounded-full blur-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {features.map((feature, idx) => (
              <div key={idx} className="flex items-start space-x-6 group">
                <div className="w-12 h-12 bg-brand-navy/5 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-brand-navy group-hover:text-brand-cyan transition-all duration-300">
                  <feature.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-brand-navy">{feature.title[language]}</h3>
                  <p className="text-brand-navy/60 leading-relaxed">{feature.desc[language]}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dual Mode */}
      <section className="py-24 bg-brand-navy text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,rgba(78,242,216,0.05),transparent_50%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">{content.dualMode.title[language]}</h2>
            <p className="text-white/60 leading-relaxed mb-12">
              {content.dualMode.desc[language]}
            </p>
            <Link 
              to="/onboarding"
              className="inline-block bg-brand-cyan text-brand-navy px-10 py-4 rounded-full font-bold hover:bg-brand-cyan/90 transition-all shadow-lg shadow-brand-cyan/20"
            >
              {content.dualMode.cta[language]}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FluideBooks;
