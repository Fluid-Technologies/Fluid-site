import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'motion/react';
import { ArrowRight, Banknote, Globe, Zap, RefreshCw, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';

const FluidePay = () => {
  const { language } = useLanguage();

  const content = {
    hero: {
      title: { en: 'Salaries that arrive instantly. Every time.', fr: 'Des salaires qui arrivent instantanément. À chaque fois.', pt: 'Salários que chegam instantaneamente. Sempre.' },
      desc: {
        en: 'Your team works hard. They shouldn\'t wait days to get paid. Fluide Pay sends salaries instantly to mobile money, banks, or digital wallets.',
        fr: 'Vos employés travaillent dur tout le mois. Ils ne devraient pas attendre trois jours pour voir leur argent. Fluide Pay achemine les salaires instantanément vers l\'argent mobile, les comptes bancaires ou les portefeuilles numériques.',
        pt: 'Os seus colaboradores trabalham arduamente o mês todo. Não deveriam ter de esperar três dias para ver o seu dinheiro. A Fluide Pay encaminha os salários instantaneamente para dinheiro móvel, contas bancárias ou carteiras digitais.'
      },
      primaryCTA: { en: 'Activate Fluide Pay', fr: 'Activer Fluide Pay', pt: 'Ativar Fluide Pay' }
    },
    demo: {
      routingTitle: { en: 'Real-time Routing', fr: 'Routage en temps réel', pt: 'Encaminhamento em tempo real' },
      routingDesc: { en: 'Optimizing for speed & cost', fr: 'Optimisation pour la vitesse et le coût', pt: 'Otimização para velocidade e custo' },
      status: {
        instant: { en: 'Instant', fr: 'Instantané', pt: 'Instantâneo' },
        days13: { en: '1-3 days', fr: '1-3 jours', pt: '1-3 dias' }
      }
    },
    network: {
      title: { en: 'Provider Network', fr: 'Réseau de Fournisseurs', pt: 'Rede de Fornecedores' },
      desc: { en: 'Direct integrations for maximum reliability.', fr: 'Intégrations directes pour une fiabilité maximale.', pt: 'Integrações diretas para máxima fiabilidade.' },
      headers: {
        channel: { en: 'Channel', fr: 'Canal', pt: 'Canal' },
        countries: { en: 'Countries', fr: 'Pays', pt: 'Países' },
        settlement: { en: 'Settlement', fr: 'Règlement', pt: 'Liquidação' }
      },
      rows: [
        { name: 'MTN Mobile Money', countries: { en: '15 countries (Cameroon, Ghana, etc.)', fr: '15 pays (Cameroun, Ghana, etc.)', pt: '15 países (Camarões, Gana, etc.)' }, time: { en: 'Real-time to 24h', fr: 'Temps réel à 24h', pt: 'Tempo real a 24h' } },
        { name: 'Orange Money', countries: { en: '18 countries (Senegal, Mali, etc.)', fr: '18 pays (Sénégal, Mali, etc.)', pt: '18 países (Senegal, Mali, etc.)' }, time: { en: '2–48 hours', fr: '2–48 heures', pt: '2–48 horas' } },
        { name: 'Ecobank', countries: { en: '36 countries across Africa', fr: '36 pays à travers l\'Afrique', pt: '36 países em toda a África' }, time: { en: '1–3 business days', fr: '1–3 jours ouvrables', pt: '1–3 dias úteis' } },
        { name: 'Cellulant', countries: { en: '35+ African markets via single API', fr: '35+ marchés africains via une API unique', pt: '35+ mercados africanos via API única' }, time: { en: 'Variable by local rail', fr: 'Variable selon le réseau local', pt: 'Variável por rede local' } }
      ]
    }
  };

  const features = [
    { icon: Layers, title: { en: 'Multi-Currency Wallets', fr: 'Portefeuilles multi-devises', pt: 'Carteiras Multi-Moeda' }, desc: { en: 'Hold funds in multiple currencies. Reduce exchange risks and pay your team in their preferred currency.', fr: 'Détenez et gérez des fonds dans plusieurs devises africaines et mondiales. Atténuez le risque de change et payez votre équipe dans sa devise préférée.', pt: 'Mantenha e gira fundos em múltiplas moedas africanas e globais. Mitigue o risco cambial e pague à sua equipa na sua moeda preferida.' } },
    { icon: Globe, title: { en: 'Cross-Border Payments', fr: 'Paiements transfrontaliers', pt: 'Pagamentos Transfronteiriços' }, desc: { en: 'Pay employees and suppliers across borders easily. Our integration ensures competitive exchange rates.', fr: 'Payez les employés, les sous-traitants et les fournisseurs dans différents pays de manière transparente. L\'intégration AZA Finance FX garantit des taux compétitifs.', pt: 'Pague colaboradores, prestadores de serviços e fornecedores em diferentes países de forma integrada. A integração AZA Finance FX garante taxas competitivas.' } },
    { icon: Zap, title: { en: 'Expat Payroll', fr: 'Paie des expatriés', pt: 'Processamento Salarial de Expatriados' }, desc: { en: 'Manage complex expat payroll, including split payments, tax equalization, and multi-currency payouts.', fr: 'Gérez les exigences complexes de paie des expatriés, y compris les paiements fractionnés, la péréquation fiscale et les versements multi-devises.', pt: 'Lide com requisitos complexos de processamento salarial de expatriados, incluindo pagamentos divididos, equalização fiscal e desembolsos em várias moedas.' } },
    { icon: RefreshCw, title: { en: 'Automatic Reconciliation', fr: 'Réconciliation automatique', pt: 'Reconciliação Automática' }, desc: { en: 'Every payment is logged with its time, channel, and status. Get full reports in Fluide HR and Books.', fr: 'Chaque versement est enregistré avec horodatage, canal et statut. Rapports complets disponibles dans Fluide HR et Books.', pt: 'Cada desembolso é registado com carimbo de data/hora, canal e estado. Relatórios completos disponíveis no Fluide HR e Books.' } },
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
                <Banknote className="w-3 h-3" />
                <span>Fluide Pay</span>
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
            <div className="bg-white rounded-[40px] shadow-2xl p-10 border border-brand-navy/5 overflow-hidden relative">
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-12 h-12 bg-brand-cyan/10 rounded-xl flex items-center justify-center">
                  <RefreshCw className="w-6 h-6 text-brand-navy" />
                </div>
                <div>
                  <div className="font-bold text-brand-navy">{content.demo.routingTitle[language]}</div>
                  <div className="text-xs text-brand-navy/40">{content.demo.routingDesc[language]}</div>
                </div>
              </div>
              <div className="space-y-4">
                {[
                  { name: 'MTN Mobile Money', status: content.demo.status.instant[language], color: 'bg-yellow-400' },
                  { name: 'Orange Money', status: content.demo.status.instant[language], color: 'bg-orange-500' },
                  { name: 'Ecobank', status: content.demo.status.days13[language], color: 'bg-blue-800' },
                  { name: 'Fluide Pulse', status: content.demo.status.instant[language], color: 'bg-brand-navy' }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between p-4 rounded-2xl bg-brand-navy/[0.02] border border-brand-navy/5">
                    <div className="flex items-center space-x-3">
                      <div className={`w-2 h-2 rounded-full ${item.color}`} />
                      <span className="font-bold text-sm text-brand-navy">{item.name}</span>
                    </div>
                    <span className="text-xs font-medium text-brand-navy/40">{item.status}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, idx) => (
              <div key={idx} className="p-8 rounded-3xl bg-brand-navy/[0.02] border border-brand-navy/5 hover:border-brand-cyan/50 transition-all group">
                <div className="w-12 h-12 bg-brand-cyan/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-cyan/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-brand-navy group-hover:text-brand-navy transition-colors" />
                </div>
                <h3 className="text-lg font-bold mb-3 text-brand-navy">{feature.title[language]}</h3>
                <p className="text-brand-navy/60 text-sm leading-relaxed">{feature.desc[language]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Provider Network */}
      <section className="py-24 bg-brand-navy text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,rgba(78,242,216,0.05),transparent_50%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">{content.network.title[language]}</h2>
            <p className="text-white/40">{content.network.desc[language]}</p>
          </div>
          <div className="bg-white/5 rounded-3xl border border-white/10 overflow-hidden backdrop-blur-sm">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="px-8 py-6 text-xs font-bold uppercase tracking-widest text-white/40">{content.network.headers.channel[language]}</th>
                  <th className="px-8 py-6 text-xs font-bold uppercase tracking-widest text-white/40">{content.network.headers.countries[language]}</th>
                  <th className="px-8 py-6 text-xs font-bold uppercase tracking-widest text-white/40">{content.network.headers.settlement[language]}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                {content.network.rows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                    <td className="px-8 py-6 font-bold">{row.name}</td>
                    <td className="px-8 py-6 text-white/60 text-sm">{row.countries[language]}</td>
                    <td className="px-8 py-6 text-brand-cyan font-mono text-sm">{row.time[language]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FluidePay;
