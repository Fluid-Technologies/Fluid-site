import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Package, ArrowRight, TrendingUp, ShoppingCart, RefreshCw } from 'lucide-react';
import { Link } from 'react-router-dom';

const FluideStock = () => {
  const { language } = useLanguage();

  const content = {
    hero: {
      title: { en: 'Never run out of what sells.', fr: 'Ne soyez jamais en rupture de ce qui se vend.', pt: 'Nunca fique sem o que vende.' },
      desc: { 
        en: 'AI-powered inventory management for MSMEs. Track goods, predict demand, and optimize your supply chain automatically.', 
        fr: 'Outil de gestion des stocks propulsé par l\'IA pour les MPME. Suivez les biens physiques, prévoyez la demande et optimisez votre chaîne d\'approvisionnement automatiquement.', 
        pt: 'Ferramenta de gestão de inventário baseada em IA para MPMEs. Acompanhe bens físicos, preveja a procura e otimize a sua cadeia de abastecimento automaticamente.' 
      },
      primaryCTA: { en: 'Start tracking', fr: 'Commencer le suivi', pt: 'Iniciar rastreamento' }
    },
    demo: {
      inventoryStatus: { en: 'Inventory Status', fr: 'État des stocks', pt: 'Estado do Inventário' },
      live: { en: 'Live', fr: 'En direct', pt: 'Em Direto' },
      inStock: { en: 'In Stock', fr: 'En stock', pt: 'Em Stock' },
      items1245: { en: '1,245 items', fr: '1 245 articles', pt: '1.245 itens' },
      lowStockAlerts: { en: 'Low Stock Alerts', fr: 'Alertes de stock bas', pt: 'Alertas de Stock Baixo' },
      items12: { en: '12 items', fr: '12 articles', pt: '12 itens' },
      predictedDemand: { en: 'Predicted Demand (Next 7 Days)', fr: 'Demande prévue (7 prochains jours)', pt: 'Procura Prevista (Próximos 7 Dias)' }
    }
  };

  const features = [
    { icon: Package, title: { en: 'AI-Powered Inventory Tracking', fr: 'Suivi des stocks propulsé par l\'IA', pt: 'Rastreamento de Inventário com IA' }, desc: { en: 'See your stock levels in real-time across all locations. Get low-stock alerts before you run out.', fr: 'Visibilité en temps réel de vos niveaux de stock sur plusieurs sites. Recevez des alertes automatiques de stock bas avant la rupture.', pt: 'Visibilidade em tempo real dos seus níveis de stock em vários locais. Receba alertas automáticos de stock baixo antes que acabe.' } },
    { icon: TrendingUp, title: { en: 'Demand Forecasting', fr: 'Prévision de la demande', pt: 'Previsão de Procura' }, desc: { en: 'AI predicts what you need to order and when, based on past sales and local events.', fr: 'Notre IA analyse les tendances des ventes passées, la saisonnalité et les événements locaux pour prédire ce que vous devrez commander et quand.', pt: 'A nossa IA analisa tendências de vendas passadas, sazonalidade e eventos locais para prever o que precisará de encomendar e quando.' } },
    { icon: ShoppingCart, title: { en: 'Supplier Integration', fr: 'Intégration des fournisseurs', pt: 'Integração de Fornecedores' }, desc: { en: 'Connect with suppliers and generate purchase orders automatically when stock is low.', fr: 'Connectez-vous directement avec vos fournisseurs. Générez des bons de commande automatiquement lorsque le stock atteint le point de commande.', pt: 'Ligue-se diretamente aos seus fornecedores. Gere notas de encomenda automaticamente quando o stock atingir o ponto de encomenda.' } },
    { icon: RefreshCw, title: { en: 'Seamless Sync with Fluide Books', fr: 'Synchronisation fluide avec Fluide Books', pt: 'Sincronização perfeita com Fluide Books' }, desc: { en: 'Every sale and purchase automatically updates your P&L and cash flow in Fluide Books.', fr: 'Chaque vente et achat de stock met automatiquement à jour votre compte de résultat et votre trésorerie dans Fluide Books.', pt: 'Cada venda e compra de inventário atualiza automaticamente o seu P&L e fluxo de caixa no Fluide Books.' } },
  ];

  return (
    <div className="pt-20">
      <section className="bg-brand-navy/[0.02] py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_50%_120%,rgba(78,242,216,0.05),transparent_50%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-navy text-brand-cyan text-[10px] font-bold uppercase tracking-widest mb-6">
                <Package className="w-3 h-3" />
                <span>Fluide Stock</span>
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
                <div className="font-bold text-brand-navy">{content.demo.inventoryStatus[language]}</div>
                <div className="text-xs text-brand-navy/40">{content.demo.live[language]}</div>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 rounded-2xl bg-emerald-50 border border-emerald-100">
                  <span className="text-emerald-700 font-medium">{content.demo.inStock[language]}</span>
                  <span className="font-bold text-emerald-700">{content.demo.items1245[language]}</span>
                </div>
                <div className="flex justify-between items-center p-4 rounded-2xl bg-amber-50 border border-amber-100">
                  <span className="text-amber-700 font-medium">{content.demo.lowStockAlerts[language]}</span>
                  <span className="font-bold text-amber-700">{content.demo.items12[language]}</span>
                </div>
                <div className="flex justify-between items-center p-4 rounded-2xl bg-brand-cyan/10 border border-brand-cyan/20">
                  <span className="text-brand-navy font-medium">{content.demo.predictedDemand[language]}</span>
                  <span className="font-bold text-brand-navy">+15%</span>
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

export default FluideStock;
