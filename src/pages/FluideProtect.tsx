import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Shield, ArrowRight, HeartPulse, Briefcase, FileCheck, Umbrella } from 'lucide-react';
import { Link } from 'react-router-dom';

const FluideProtect = () => {
  const { language } = useLanguage();

  const content = {
    hero: {
      title: { en: 'Protect what matters most.', fr: 'Protégez ce qui compte le plus.', pt: 'Proteja o que mais importa.' },
      desc: { 
        en: 'Get affordable health plans for your team and full coverage for your business, right inside Fluide.', 
        fr: 'Une place de marché assurtech intégrée. Accédez à des plans de santé abordables pour votre équipe et à une couverture complète pour votre entreprise, le tout au sein de l\'écosystème Fluide.', 
        pt: 'Um mercado insurtech integrado. Aceda a planos de saúde acessíveis para a sua equipa e a uma cobertura abrangente para o seu negócio, tudo dentro do ecossistema Fluide.' 
      },
      primaryCTA: { en: 'Explore Coverage', fr: 'Explorer la couverture', pt: 'Explorar Cobertura' }
    },
    demo: {
      activeCoverage: { en: 'Active Coverage', fr: 'Couverture active', pt: 'Cobertura Ativa' },
      updatedToday: { en: 'Updated Today', fr: 'Mis à jour aujourd\'hui', pt: 'Atualizado Hoje' },
      teamHealthPlan: { en: 'Team Health Plan', fr: 'Plan de santé d\'équipe', pt: 'Plano de Saúde da Equipa' },
      activeEnrolled: { en: 'Active (24 Enrolled)', fr: 'Actif (24 Inscrits)', pt: 'Ativo (24 Inscritos)' },
      businessLiability: { en: 'Business Liability', fr: 'Responsabilité civile', pt: 'Responsabilidade Civil' },
      upTo: { en: 'Up to ₦50M', fr: 'Jusqu\'à ₦50M', pt: 'Até ₦50M' },
      nextPremiumDue: { en: 'Next Premium Due', fr: 'Prochaine prime due', pt: 'Próximo Prémio Devido' },
      date: { en: 'Oct 15, 2026', fr: '15 Oct 2026', pt: '15 Out 2026' }
    }
  };

  const features = [
    { icon: HeartPulse, title: { en: 'Employee Health Plans', fr: 'Plans de santé pour les employés', pt: 'Planos de Saúde para Colaboradores' }, desc: { en: 'Offer health insurance to your team. Choose flexible plans linked directly to Fluide HR.', fr: 'Offrez une assurance maladie compétitive à votre équipe. Choisissez parmi une gamme de plans flexibles adaptés aux PME, intégrés directement à Fluide RH pour une inscription facile.', pt: 'Ofereça um seguro de saúde competitivo à sua equipa. Escolha entre uma gama de planos flexíveis adaptados a PMEs, integrados diretamente com o Fluide HR para fácil inscrição.' } },
    { icon: Briefcase, title: { en: 'Business Insurance', fr: 'Assurance entreprise', pt: 'Seguro Empresarial' }, desc: { en: 'Protect your assets and operations. Get quotes for liability and property insurance in minutes.', fr: 'Protégez vos actifs, vos stocks et vos opérations. Obtenez des devis pour l\'assurance responsabilité civile, biens et cyber auprès des meilleurs fournisseurs en quelques minutes.', pt: 'Proteja os seus ativos, inventário e operações. Obtenha cotações para seguro de responsabilidade civil, propriedade e cibernético dos principais fornecedores em minutos.' } },
    { icon: FileCheck, title: { en: 'Automated Claims', fr: 'Traitement automatisé des réclamations', pt: 'Processamento Automatizado de Sinistros' }, desc: { en: 'File claims digitally. AI checks your documents to speed up payouts.', fr: 'Déposez des réclamations numériquement via la plateforme Fluide. La vérification des documents assistée par l\'IA accélère le traitement et les paiements.', pt: 'Apresente sinistros digitalmente através da plataforma Fluide. A verificação de documentos assistida por IA acelera o processamento e os pagamentos.' } },
    { icon: Umbrella, title: { en: 'Micro-Insurance', fr: 'Micro-assurance pour les travailleurs indépendants', pt: 'Micro-seguro para Trabalhadores Independentes' }, desc: { en: 'Small, affordable insurance plans for contractors and gig workers.', fr: 'Des produits d\'assurance abordables et de petite taille conçus pour les entrepreneurs et les travailleurs indépendants payés via Fluide Pay.', pt: 'Produtos de seguro acessíveis e de pequena dimensão concebidos para empreiteiros e trabalhadores independentes pagos através do Fluide Pay.' } },
  ];

  return (
    <div className="pt-20">
      <section className="bg-brand-navy/[0.02] py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_50%_120%,rgba(78,242,216,0.05),transparent_50%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-navy text-brand-cyan text-[10px] font-bold uppercase tracking-widest mb-6">
                <Shield className="w-3 h-3" />
                <span>Fluide Protect</span>
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
                <div className="font-bold text-brand-navy">{content.demo.activeCoverage[language]}</div>
                <div className="text-xs text-brand-navy/40">{content.demo.updatedToday[language]}</div>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 rounded-2xl bg-emerald-50 border border-emerald-100">
                  <span className="text-emerald-700 font-medium">{content.demo.teamHealthPlan[language]}</span>
                  <span className="font-bold text-emerald-700">{content.demo.activeEnrolled[language]}</span>
                </div>
                <div className="flex justify-between items-center p-4 rounded-2xl bg-blue-50 border border-blue-100">
                  <span className="text-blue-700 font-medium">{content.demo.businessLiability[language]}</span>
                  <span className="font-bold text-blue-700">{content.demo.upTo[language]}</span>
                </div>
                <div className="flex justify-between items-center p-4 rounded-2xl bg-brand-cyan/10 border border-brand-cyan/20">
                  <span className="text-brand-navy font-medium">{content.demo.nextPremiumDue[language]}</span>
                  <span className="font-bold text-brand-navy">{content.demo.date[language]}</span>
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
    </div>
  );
};

export default FluideProtect;
