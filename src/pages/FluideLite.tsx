import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'motion/react';
import { ArrowRight, Zap, Smartphone, Users, TrendingUp, RefreshCw, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';
import AIChatModal from '../components/AIChatModal';

const FluideLite = () => {
  const { language } = useLanguage();
  const [isAIChatOpen, setIsAIChatOpen] = useState(false);

  const content = {
    hero: {
      title: { en: 'Simple tools for small businesses.', fr: 'Des outils simples pour les entreprises qui nourrissent l\'Afrique.', pt: 'Ferramentas simples para os negócios que alimentam África.' },
      desc: {
        en: 'For market vendors and shop owners. Fluide Lite works offline, loads fast on basic phones, and needs no accounting skills.',
        fr: 'Pour le commerçant du marché, le propriétaire d\'une boutique de quartier, le travailleur à la commission. Fluide Lite fonctionne hors ligne, se charge rapidement sur les téléphones basiques et ne nécessite aucune connaissance en comptabilité.',
        pt: 'Para o vendedor de mercado, o proprietário de uma loja de esquina, o trabalhador por comissão. A Fluide Lite funciona offline, carrega rapidamente em telemóveis básicos e não requer conhecimentos de contabilidade.'
      },
      primaryCTA: { en: 'Get Fluide Lite', fr: 'Obtenir Fluide Lite', pt: 'Obter Fluide Lite' }
    },
    demo: {
      profitLabel: { en: 'Today\'s Profit', fr: 'Bénéfice du jour', pt: 'Lucro de Hoje' },
      recordSale: { en: 'Record Sale', fr: 'Enregistrer une vente', pt: 'Registar Venda' },
      recordExpense: { en: 'Record Expense', fr: 'Enregistrer une dépense', pt: 'Registar Despesa' },
      recentSales: { en: 'Recent Sales', fr: 'Ventes Récentes', pt: 'Vendas Recentes' },
      saleItem: { en: 'Fabric Sale', fr: 'Vente de tissu', pt: 'Venda de Tecido' },
      offlineBadge: { en: 'Works Offline ⚡️', fr: 'Fonctionne Hors Ligne ⚡️', pt: 'Funciona Offline ⚡️' }
    },
    upgrade: {
      title: { en: 'Built to grow with you.', fr: 'Conçu pour grandir avec vous.', pt: 'Construído para crescer consigo.' },
      desc: {
        en: 'When you are ready to hire more staff and run payroll, upgrade to Fluide HR easily. Your data moves with you.',
        fr: 'Lorsque votre entreprise est prête à se formaliser — embaucher plus de personnel, gérer une vraie paie, tenir un compte de résultat complet — Fluide Lite rend la transition vers Fluide HR transparente. Vos données vous suivent. Rien n\'est perdu.',
        pt: 'Quando o seu negócio estiver pronto para se formalizar — contratar mais pessoal, gerir uma folha de pagamentos adequada, manter um P&L completo — a Fluide Lite torna a atualização para o Fluide HR perfeita. Os seus dados acompanham-no. Nada se perde.'
      },
      deviceLabel: { en: 'Ideal Device', fr: 'Appareil Idéal', pt: 'Dispositivo Ideal' },
      deviceType: { en: 'Entry-level Android', fr: 'Android d\'entrée de gamme', pt: 'Android de entrada' },
      deviceSpecs: { en: '1GB RAM, Works on 2G, App under 10MB', fr: '1 Go de RAM, fonctionne en 2G, application de moins de 10 Mo', pt: '1GB RAM, Funciona em 2G, App com menos de 10MB' }
    }
  };

  const features = [
    { 
      icon: Zap, 
      title: { en: 'AI Business Assistant', fr: 'Assistant commercial IA', pt: 'Assistente de Negócios IA' }, 
      desc: { en: 'Ask questions in plain English. For example, "How much did I make yesterday?"', fr: 'Posez des questions sur votre entreprise en langage clair. "Combien ai-je gagné hier ?" ou "Quel est mon article le plus vendu ?"', pt: 'Faça perguntas sobre o seu negócio em linguagem simples. "Quanto ganhei ontem?" ou "Qual é o meu artigo mais vendido?"' },
      action: { label: { en: 'Try AI Assistant', fr: 'Essayer l\'Assistant IA', pt: 'Experimentar Assistente IA' }, onClick: () => setIsAIChatOpen(true) }
    },
    { icon: Smartphone, title: { en: 'Easy Mobile App', fr: 'Opérations mobiles simplifiées', pt: 'Operações Móveis Simplificadas' }, desc: { en: 'Record sales and track expenses with a few taps. Works offline on basic phones.', fr: 'Enregistrez les ventes, suivez les dépenses et gérez les stocks en quelques clics. Conçu pour les smartphones d\'entrée de gamme et fonctionne hors ligne.', pt: 'Registe vendas, acompanhe despesas e gerencie o inventário com alguns toques. Concebido para smartphones de entrada e funciona offline.' } },
    { icon: Users, title: { en: 'Staff Payments', fr: 'Suivi simple du paiement du personnel', pt: 'Rastreamento de Pagamento' }, desc: { en: 'Track what you owe your staff and pay them via mobile money right from the app.', fr: 'Enregistrez ce que vous avez payé à vos assistants. Suivez qui doit quoi. Payez-les via mobile money directement depuis l\'application.', pt: 'Registe o que pagou aos seus assistentes. Acompanhe quem deve o quê. Pague-os através de dinheiro móvel diretamente da aplicação.' } },
    { icon: RefreshCw, title: { en: 'Digital Savings Groups', fr: 'Outils Tontine / Njangi digitaux', pt: 'Ferramentas de Grupo de Poupança' }, desc: { en: 'Create or join a savings group. Track contributions and payouts easily.', fr: 'Créez ou rejoignez un groupe d\'épargne numérique. Suivez les contributions, le calendrier de rotation et les paiements. La tontine traditionnelle simplifiée.', pt: 'Crie ou junte-se a um grupo de poupança digital (Xitique). Acompanhe contribuições, calendário de rotação e pagamentos. A tontina tradicional simplificada.' } },
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
                <Zap className="w-3 h-3" />
                <span>Fluide Lite</span>
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
            <div className="relative flex justify-center">
              <div className="w-56 h-[450px] bg-white rounded-[32px] border-[6px] border-brand-navy shadow-2xl overflow-hidden">
                <div className="p-6 bg-brand-navy text-white">
                  <div className="text-xs opacity-60 uppercase font-bold mb-1">{content.demo.profitLabel[language]}</div>
                  <div className="text-2xl font-bold text-brand-cyan">₦8,450</div>
                </div>
                <div className="p-6 space-y-4">
                  <button className="w-full py-4 bg-brand-navy text-white rounded-2xl font-bold text-sm hover:bg-brand-navy/90 transition-all">{content.demo.recordSale[language]}</button>
                  <button className="w-full py-4 border border-brand-navy/10 rounded-2xl font-bold text-sm hover:bg-brand-navy/5 transition-all text-brand-navy">{content.demo.recordExpense[language]}</button>
                  <div className="pt-4 border-t border-brand-navy/5">
                    <div className="text-[10px] font-bold text-brand-navy/40 uppercase mb-3">{content.demo.recentSales[language]}</div>
                    {[1, 2].map((i) => (
                      <div key={i} className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-brand-navy">{content.demo.saleItem[language]}</span>
                        <span className="text-sm font-bold text-brand-navy">₦1,200</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-brand-cyan p-4 rounded-2xl font-bold text-xs shadow-lg text-brand-navy">
                {content.demo.offlineBadge[language]}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {features.map((feature, idx) => (
              <div key={idx} className="p-8 rounded-3xl bg-brand-navy/[0.02] border border-brand-navy/5 group hover:bg-brand-navy hover:text-white transition-all duration-500 flex flex-col">
                <div className="w-12 h-12 bg-brand-navy/5 rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-cyan/20">
                  <feature.icon className="w-6 h-6 text-brand-navy group-hover:text-brand-cyan" />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title[language]}</h3>
                <p className="text-brand-navy/60 group-hover:text-white/60 leading-relaxed transition-colors flex-1">{feature.desc[language]}</p>
                {feature.action && (
                  <button 
                    onClick={feature.action.onClick}
                    className="mt-6 self-start px-6 py-2 bg-brand-cyan text-brand-navy font-bold rounded-xl hover:bg-brand-cyan/90 transition-colors flex items-center space-x-2"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>{feature.action.label[language]}</span>
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upgrade Path */}
      <section className="py-24 bg-brand-navy text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,rgba(78,242,216,0.05),transparent_50%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">{content.upgrade.title[language]}</h2>
              <p className="text-white/60 text-lg leading-relaxed mb-8">
                {content.upgrade.desc[language]}
              </p>
              <div className="flex items-center space-x-4">
                <div className="px-4 py-2 rounded-lg bg-white/10 font-bold">Fluide Lite</div>
                <ArrowRight className="w-6 h-6 text-white/40" />
                <div className="px-4 py-2 rounded-lg bg-brand-cyan text-brand-navy font-bold">Fluide HR</div>
              </div>
            </div>
            <div className="bg-white/5 p-12 rounded-[40px] border border-white/10">
              <div className="text-center">
                <div className="text-sm font-bold text-white/40 uppercase tracking-widest mb-4">{content.upgrade.deviceLabel[language]}</div>
                <p className="text-xl font-medium mb-2">{content.upgrade.deviceType[language]}</p>
                <p className="text-white/40 text-sm">{content.upgrade.deviceSpecs[language]}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AIChatModal 
        isOpen={isAIChatOpen} 
        onClose={() => setIsAIChatOpen(false)} 
        context="Fluide Lite Business Assistant"
      />
    </div>
  );
};

export default FluideLite;
