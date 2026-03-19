import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'motion/react';
import { ArrowRight, CreditCard, ShieldCheck, BarChart3, TrendingUp, Landmark } from 'lucide-react';
import { Link } from 'react-router-dom';

const FluideBank = () => {
  const { language } = useLanguage();

  const content = {
    hero: {
      title: { en: 'Smart credit based on your business, not your assets.', fr: 'Votre entreprise est solide. Nous pouvons le voir.', pt: 'O seu negócio é sólido. Nós conseguimos ver isso.' },
      desc: {
        en: 'Traditional banks need collateral. We look at your data. Fluide Bank gives MSMEs fair working capital based on real-time performance.',
        fr: 'Les banques traditionnelles regardent vos biens. Fluide Bank regarde quelque chose de mieux : comment vous gérez réellement votre entreprise. La régularité de votre paie. La fidélisation de vos employés. Vos performances réelles.',
        pt: 'Os bancos tradicionais olham para os seus bens. A Fluide Bank olha para algo melhor: como gere realmente o seu negócio. A consistência do seu processamento salarial. A retenção dos seus colaboradores. O seu desempenho real.'
      },
      primaryCTA: { en: 'Check your eligibility', fr: 'Vérifier mon éligibilité', pt: 'Verificar elegibilidade' }
    },
    score: {
      title: { en: 'Fluide Business Score', fr: 'Score Fluide Entreprise', pt: 'Pontuação Fluide Empresarial' },
      consistency: { en: 'Payroll Consistency', fr: 'Régularité de la Paie', pt: 'Consistência Salarial' },
      excellent: { en: 'Excellent', fr: 'Excellent', pt: 'Excelente' },
      retention: { en: 'Retention Rate', fr: 'Taux de Rétention', pt: 'Taxa de Retenção' }
    },
    products: {
      forLabel: { en: 'For', fr: 'Pour', pt: 'Para' },
      howLabel: { en: 'How it works', fr: 'Comment ça marche', pt: 'Como funciona' }
    },
    why: {
      title: { en: 'No collateral. No forms. Just data.', fr: 'Pas de garantie. Pas de formulaires. Juste des données.', pt: 'Sem garantias. Sem formulários. Apenas dados.' },
      subtitle: { en: 'The more you use Fluide, the better your credit terms get.', fr: 'Plus vous utilisez Fluide, meilleures sont vos conditions de crédit.', pt: 'Quanto mais usar a Fluide, melhores serão as suas condições de crédito.' },
      items: [
        { icon: ShieldCheck, title: { en: 'No physical collateral', fr: 'Pas de garantie physique', pt: 'Sem garantia física' }, desc: { en: 'We use your real business data to build trust.', fr: 'Nous utilisons les données réelles de votre entreprise comme signal de confiance ultime.', pt: 'Usamos os dados reais do seu negócio como o sinal de confiança definitivo.' } },
        { icon: TrendingUp, title: { en: 'Decision in < 24 hours', fr: 'Décision en < 24 heures', pt: 'Decisão em < 24 horas' }, desc: { en: 'Automated credit checks mean you get an answer fast.', fr: 'La souscription automatisée signifie que vous obtenez une réponse quand vous en avez besoin.', pt: 'A subscrição automatizada significa que obtém uma resposta quando precisa.' } },
        { icon: BarChart3, title: { en: 'Real risk rates', fr: 'Taux de risque réels', pt: 'Taxas de risque reais' }, desc: { en: 'Interest rates based on your actual performance.', fr: 'Des taux d\'intérêt basés sur vos performances, et non sur des hypothèses concernant les emprunteurs africains.', pt: 'Taxas de juro baseadas no seu desempenho, não em suposições sobre mutuários africanos.' } }
      ]
    }
  };

  const products = [
    { title: { en: 'SME Working Capital Loan', fr: 'Prêt de fonds de roulement PME', pt: 'Empréstimo de Capital de Trabalho PME' }, for: { en: 'Business owners who need cash flow to grow.', fr: 'Dirigeants d\'entreprise qui ont besoin de trésorerie pour se développer.', pt: 'Proprietários de negócios que precisam de fluxo de caixa para crescer.' }, how: { en: 'Based on your Fluide Business Score. Get a decision in 24 hours. Funds sent to your Fluide Pay wallet.', fr: 'Basé sur le Score Fluide Entreprise. Décision en 24 heures. Versé sur le portefeuille Fluide Pay.', pt: 'Baseado na Pontuação Fluide Empresarial. Decisão em 24 horas. Desembolsado para a carteira Fluide Pay.' } },
    { title: { en: 'Corporate Cards & Expense Management', fr: 'Cartes d\'entreprise et gestion des dépenses', pt: 'Cartões Corporativos e Gestão de Despesas' }, for: { en: 'Teams that need to spend money to make money.', fr: 'Les équipes qui ont besoin de dépenser de l\'argent pour en gagner.', pt: 'Equipas que precisam de gastar dinheiro para ganhar dinheiro.' }, how: { en: 'Issue virtual and physical cards with limits. Automated receipt matching and expense tracking.', fr: 'Émettez des cartes virtuelles et physiques avec des limites intégrées. Rapprochement automatisé des reçus et catégorisation des dépenses.', pt: 'Emita cartões virtuais e físicos com limites integrados. Correspondência automatizada de recibos e categorização de despesas.' } },
    { title: { en: 'FX & Treasury Management', fr: 'Gestion des changes et de la trésorerie', pt: 'Gestão de Câmbio e Tesouraria' }, for: { en: 'Businesses operating across borders.', fr: 'Les entreprises opérant au-delà des frontières.', pt: 'Empresas que operam além-fronteiras.' }, how: { en: 'Hold multiple currencies, get competitive FX rates, and manage your money across regions.', fr: 'Détenez plusieurs devises, accédez à des taux de change compétitifs et optimisez votre fonds de roulement dans toutes les régions.', pt: 'Mantenha várias moedas, aceda a taxas de câmbio competitivas e otimize o seu capital de trabalho em todas as regiões.' } },
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
                <Landmark className="w-3 h-3" />
                <span>Fluide Bank</span>
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
            <div className="bg-white rounded-[40px] shadow-2xl p-12 border border-brand-navy/5 relative overflow-hidden">
              <div className="relative z-10">
                <div className="text-sm font-bold text-brand-navy/40 uppercase tracking-widest mb-2">{content.score.title[language]}</div>
                <div className="text-6xl font-black mb-8 text-brand-navy">842</div>
                <div className="h-2 w-full bg-brand-navy/5 rounded-full mb-12 overflow-hidden">
                  <div className="h-full w-[84%] bg-brand-cyan rounded-full" />
                </div>
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <div className="text-[10px] font-bold text-brand-navy/40 uppercase mb-1">{content.score.consistency[language]}</div>
                    <div className="font-bold text-emerald-600">{content.score.excellent[language]}</div>
                  </div>
                  <div>
                    <div className="text-[10px] font-bold text-brand-navy/40 uppercase mb-1">{content.score.retention[language]}</div>
                    <div className="font-bold text-emerald-600">94%</div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-brand-cyan/10 rounded-full blur-3xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {products.map((product, idx) => (
              <div key={idx} className="p-10 rounded-[40px] border border-brand-navy/5 bg-brand-navy/[0.02] flex flex-col h-full group hover:bg-brand-navy hover:text-white transition-all duration-500">
                <h3 className="text-2xl font-bold mb-6">{product.title[language]}</h3>
                <div className="mb-8">
                  <div className="text-[10px] font-bold uppercase tracking-widest text-brand-navy/40 group-hover:text-white/40 mb-2">{content.products.forLabel[language]}</div>
                  <p className="text-lg font-medium">{product.for[language]}</p>
                </div>
                <div className="mt-auto pt-8 border-t border-brand-navy/5 group-hover:border-white/10">
                  <div className="text-[10px] font-bold uppercase tracking-widest text-brand-navy/40 group-hover:text-white/40 mb-2">{content.products.howLabel[language]}</div>
                  <p className="text-brand-navy/60 group-hover:text-white/60 text-sm leading-relaxed transition-colors">{product.how[language]}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Different */}
      <section className="py-24 bg-brand-navy text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,rgba(78,242,216,0.05),transparent_50%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold mb-4">{content.why.title[language]}</h2>
            <p className="text-white/40">{content.why.subtitle[language]}</p>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {content.why.items.map((item, idx) => (
              <div key={idx} className="text-center group">
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:bg-brand-cyan/20 transition-colors">
                  <item.icon className="w-8 h-8 text-brand-cyan" />
                </div>
                <h3 className="text-xl font-bold mb-4">{item.title[language]}</h3>
                <p className="text-white/40 leading-relaxed">{item.desc[language]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default FluideBank;
