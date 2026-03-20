import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'motion/react';
import { ArrowRight, Briefcase, Users, Banknote, Wallet, CreditCard, BookOpen, Zap, Shield, Package, Calculator } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProductsHub = () => {
  const { language } = useLanguage();

  const content = {
    hero: {
      title: { en: '10 tools. One system. Built for Africa.', fr: '10 outils. Un écosystème. Conçu pour l\'Afrique.', pt: '10 ferramentas. Um ecossistema. Construído para África.' },
      desc: {
        en: 'Whether you run a small shop or a large company, Fluide has the tools you need, and they all work together.',
        fr: 'Que vous gériez un atelier de 5 personnes à Douala ou une entreprise de 200 employés à Lagos, Fluide possède exactement les outils dont vous avez besoin — et ils fonctionnent tous ensemble de manière transparente.',
        pt: 'Quer esteja a gerir uma oficina de 5 pessoas em Luanda ou uma empresa de 200 colaboradores em Maputo, a Fluide tem as ferramentas exatas de que necessita — e todas funcionam em conjunto de forma perfeita.'
      }
    },
    labels: {
      bestFor: { en: 'Best For', fr: 'Idéal pour', pt: 'Ideal para' }
    },
    cta: {
      title: { en: 'Want to see how they work together?', fr: 'Vous voulez voir comment ils fonctionnent ensemble ?', pt: 'Quer ver como funcionam em conjunto?' },
      button: { en: 'Explore the Platform', fr: 'Explorer la Plateforme', pt: 'Explorar a Plataforma' }
    }
  };

  const [activeCategory, setActiveCategory] = React.useState('all');

  const categories = [
    { id: 'all', name: { en: 'All Products', fr: 'Tous les produits', pt: 'Todos os produtos' } },
    { id: 'hr', name: { en: 'HR & Hiring', fr: 'RH & Recrutement', pt: 'RH e Recrutamento' } },
    { id: 'finance', name: { en: 'Finance & Payroll', fr: 'Finance & Paie', pt: 'Finanças e Folha' } },
    { id: 'growth', name: { en: 'Business Growth', fr: 'Croissance', pt: 'Crescimento' } },
    { id: 'micro', name: { en: 'Micro-Business', fr: 'Micro-entreprise', pt: 'Micro-empresa' } },
  ];

  const products = [
    { id: 'jobs', icon: Briefcase, name: 'Fluide Jobs', category: 'hr', tagline: { en: 'Find and hire verified talent using AI.', fr: 'Mise en relation des talents par l\'IA et recrutement vérifié.', pt: 'Correspondência de talentos por IA e contratação verificada.' }, bestFor: { en: 'Companies hiring people and job seekers looking for trusted companies.', fr: 'Employeurs recrutant 1 à 200 postes. Demandeurs d\'emploi qui veulent des entreprises vérifiées.', pt: 'Empregadores a contratar 1-200 funções. Candidatos a emprego que pretendem empresas verificadas.' } },
    { id: 'hr', icon: Users, name: 'Fluide HR', category: 'hr', tagline: { en: 'Manage performance, learning, and engagement with AI.', fr: 'Performance, apprentissage et engagement pilotés par l\'IA.', pt: 'Desempenho, aprendizagem e envolvimento impulsionados por IA.' }, bestFor: { en: 'Small businesses growing their team and culture.', fr: 'PME développant leur culture et la gestion des talents.', pt: 'PMEs a escalar a sua cultura e gestão de talentos.' } },
    { id: 'payroll', icon: Calculator, name: 'Fluide Payroll', category: 'finance', tagline: { en: 'Run payroll and stay compliant in minutes.', fr: 'Paie automatisée et conformité en quelques minutes.', pt: 'Processamento salarial automatizado e conformidade em minutos.' }, bestFor: { en: 'Teams tired of using Excel for payroll.', fr: 'Équipes financières qui en ont fini avec Excel et les calculs manuels.', pt: 'Equipas financeiras que já não usam o Excel e cálculos manuais.' } },
    { id: 'pay', icon: Banknote, name: 'Fluide Pay', category: 'finance', tagline: { en: 'Pay your team instantly, across borders.', fr: 'Versement de salaire instantané et transfrontalier routé par l\'IA.', pt: 'Desembolso salarial transfronteiriço instantâneo roteado por IA.' }, bestFor: { en: 'Any business paying via mobile money, bank, or wallet.', fr: 'Toute entreprise versant des salaires vers de l\'argent mobile, une banque ou un portefeuille.', pt: 'Qualquer entreprise que pague via dinheiro móvel, banco ou carteira.' } },
    { id: 'pulse', icon: Wallet, name: 'Fluide Pulse', category: 'finance', tagline: { en: 'Your AI guide for financial wellness.', fr: 'Votre compagnon de bien-être financier IA.', pt: 'O seu companheiro de bem-estar financeiro de IA.' }, bestFor: { en: 'Employees who want instant access to their pay and savings.', fr: 'Employés qui veulent leur salaire instantanément, EWA et des économies.', pt: 'Colaboradores que querem o salário imediatamente, EWA e poupanças.' } },
    { id: 'bank', icon: CreditCard, name: 'Fluide Bank', category: 'growth', tagline: { en: 'Smart credit based on your business, not your assets.', fr: 'Crédit intelligent basé sur votre activité, pas sur ce que vous possédez.', pt: 'Crédito inteligente baseado no que faz, não no que possui.' }, bestFor: { en: 'Businesses needing capital and employees needing fair salary advances.', fr: 'PME ayant besoin de fonds de roulement. Employés ayant besoin d\'avances sur salaire équitables.', pt: 'PMEs que precisam de capital de trabalho. Colaboradores que precisam de adiantamentos salariais justos.' } },
    { id: 'books', icon: BookOpen, name: 'Fluide Books', category: 'finance', tagline: { en: 'Automated accounting and real-time business insights.', fr: 'Comptabilité automatisée par l\'IA et informations en temps réel.', pt: 'Contabilidade automatizada por IA e insights em tempo real.' }, bestFor: { en: 'Business owners who need real-time financials without a full-time accountant.', fr: 'Dirigeants de PME ayant besoin d\'un compte de résultat en temps réel sans comptable à temps plein.', pt: 'Proprietários de PMEs que precisam de P&L em tempo real sem um contabilista a tempo inteiro.' } },
    { id: 'stock', icon: Package, name: 'Fluide Stock', category: 'growth', tagline: { en: 'Smart inventory management for small businesses.', fr: 'Gestion des stocks propulsée par l\'IA pour les MPME.', pt: 'Gestão de inventário baseada em IA para MPMEs.' }, bestFor: { en: 'Shops and businesses tracking physical goods.', fr: 'Détaillants, grossistes et entreprises suivant des biens physiques.', pt: 'Retalhistas, grossistas e empresas que rastreiam bens físicos.' } },
    { id: 'protect', icon: Shield, name: 'Fluide Protect', category: 'growth', tagline: { en: 'Easy insurance options for your team.', fr: 'Place de marché assurtech intégrée pour votre personnel.', pt: 'Mercado insurtech integrado para a sua força de trabalho.' }, bestFor: { en: 'Businesses wanting to offer health and life insurance.', fr: 'Entreprises souhaitant offrir une protection santé, vie et biens.', pt: 'Empresas que pretendem oferecer proteção de saúde, vida e bens.' } },
    { id: 'lite', icon: Zap, name: 'Fluide Lite', category: 'micro', tagline: { en: 'Simple, AI-powered tools for micro-businesses.', fr: 'Outils simples assistés par l\'IA pour les micro-entreprises.', pt: 'Ferramentas simples assistidas por IA para microempresas.' }, bestFor: { en: 'Market vendors, freelancers, and informal businesses.', fr: 'Commerçants du marché, travailleurs à la commission, entreprises informelles.', pt: 'Vendedores de mercado, trabalhadores por comissão, negócios informais.' } },
  ];

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <div className="pt-20">
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <h1 className="text-5xl font-bold tracking-tight mb-8 text-brand-navy">{content.hero.title[language]}</h1>
            <p className="text-xl text-brand-navy/60 leading-relaxed">{content.hero.desc[language]}</p>
          </div>

          {/* Filter Chips */}
          <div className="flex flex-wrap gap-3 mb-16">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-6 py-3 rounded-full text-sm font-bold transition-all ${
                  activeCategory === cat.id
                    ? 'bg-brand-navy text-white shadow-lg shadow-brand-navy/20'
                    : 'bg-brand-navy/5 text-brand-navy/60 hover:bg-brand-navy/10'
                }`}
              >
                {cat.name[language]}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, idx) => (
              <Link
                key={product.id}
                to={`/products/${product.id}`}
                className="group bg-brand-navy/[0.02] border border-brand-navy/5 p-10 rounded-[32px] hover:bg-brand-navy hover:text-white transition-all duration-500 flex flex-col h-full"
              >
                <div className="w-16 h-16 bg-brand-navy/5 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-brand-cyan/20 transition-colors">
                  <product.icon className="w-8 h-8 text-brand-navy group-hover:text-brand-cyan transition-colors" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{product.name}</h3>
                <p className="text-lg font-medium mb-8 leading-tight group-hover:text-white/80 transition-colors">
                  {product.tagline[language]}
                </p>
                <div className="mt-auto pt-8 border-t border-brand-navy/5 group-hover:border-white/10">
                  <div className="text-[10px] font-bold uppercase tracking-widest text-brand-navy/40 group-hover:text-white/40 mb-3">{content.labels.bestFor[language]}</div>
                  <p className="text-sm text-brand-navy/60 group-hover:text-white/60 leading-relaxed mb-6">
                    {product.bestFor[language]}
                  </p>
                  <Link
                    to={`/onboarding/${product.id}`}
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center space-x-2 text-sm font-bold text-brand-navy group-hover:text-brand-cyan transition-colors"
                  >
                    <span>{language === 'en' ? 'Get Started' : language === 'fr' ? 'Commencer' : 'Começar'}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-24 bg-brand-navy rounded-[40px] p-12 lg:p-20 text-white text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_50%_120%,rgba(78,242,216,0.15),transparent_50%)] pointer-events-none" />
            <h2 className="text-3xl lg:text-4xl font-bold mb-8 relative z-10">{content.cta.title[language]}</h2>
            <Link to="/platform" className="relative z-10 inline-flex items-center space-x-3 bg-brand-cyan text-brand-navy px-10 py-4 rounded-full font-bold hover:bg-brand-cyan/90 transition-all shadow-xl shadow-brand-cyan/10">
              <span>{content.cta.button[language]}</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductsHub;
