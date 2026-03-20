import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'motion/react';
import { ArrowRight, Wallet, Zap, Heart, Clock, Shield, Smartphone } from 'lucide-react';
import { Link } from 'react-router-dom';
import WaitlistModal from '../components/WaitlistModal';

const FluidePulse = () => {
  const { language } = useLanguage();
  const [isWaitlistModalOpen, setIsWaitlistModalOpen] = useState(false);

  const content = {
    hero: {
      title: { en: 'The one app for your work life.', fr: 'L\'application unique pour toute votre vie professionnelle.', pt: 'A única aplicação para toda a sua vida profissional.' },
      desc: {
        en: 'Fluide Pulse gives every employee a digital wallet, instant access to their salary, and tools to save money.',
        fr: 'Salaires en espèces. Pas de bulletins de paie. Pas d\'épargne. Fluide Pulse est l\'application qui change tout cela — en donnant à chaque employé un portefeuille numérique, un accès instantané au salaire et des outils d\'épargne.',
        pt: 'Salários em dinheiro. Sem recibos de vencimento. Sem poupanças. A Fluide Pulse é a aplicação que muda isso — dando a cada colaborador uma carteira digital, acesso instantâneo ao salário e ferramentas de poupança.'
      },
      primaryCTA: { en: 'Get the app', fr: 'Télécharger l\'application', pt: 'Descarregar a aplicação' }
    },
    demo: {
      balanceLabel: { en: 'Balance', fr: 'Solde', pt: 'Saldo' },
      nextPaydayLabel: { en: 'Next Payday', fr: 'Prochaine Paie', pt: 'Próximo Pagamento' },
      nextPaydayVal: { en: '14 Days', fr: '14 Jours', pt: '14 Dias' },
      ewaLabel: { en: 'Available EWA', fr: 'EWA Disponible', pt: 'EWA Disponível' }
    },
    journey: {
      title: { en: 'Your journey with Fluide Pulse', fr: 'Votre parcours avec Fluide Pulse', pt: 'A sua jornada com a Fluide Pulse' },
      subtitle: { en: 'From financial stress to financial health.', fr: 'De l\'anxiété financière à une voie d\'avenir.', pt: 'Da ansiedade financeira a um caminho a seguir.' },
      steps: [
        { month: { en: 'Month 1', fr: 'Mois 1', pt: 'Mês 1' }, title: { en: 'Salary arrives in your wallet', fr: 'Le salaire arrive dans votre portefeuille', pt: 'O salário chega à sua carteira' }, gain: { en: 'Trust and reliability. No more payday stress.', fr: 'Confiance. Fiabilité. Fini les appels angoissés le jour de paie.', pt: 'Confiança. Fiabilidade. Acabaram-se as chamadas ansiosas no dia de pagamento.' } },
        { month: { en: 'Month 2-3', fr: 'Mois 2-3', pt: 'Mês 2-3' }, title: { en: 'First emergency? Use EWA', fr: 'Première urgence ? Utilisez l\'EWA', pt: 'Primeira emergência? Use o EWA' }, gain: { en: 'A safety net. No need for expensive loans.', fr: 'Filet de sécurité. Dignité financière. Pas besoin d\'usurier.', pt: 'Rede de segurança. Dignidade financeira. Sem necessidade de agiotas.' } },
        { month: { en: 'Month 4-6', fr: 'Mois 4-6', pt: 'Mês 4-6' }, title: { en: 'Set up your first savings pot', fr: 'Créez votre première tirelire d\'épargne', pt: 'Crie o seu primeiro cofre de poupança' }, gain: { en: 'Grow an emergency fund. Plan for school fees.', fr: 'Fonds d\'urgence en croissance. Frais de scolarité prévus.', pt: 'Fundo de emergência a crescer. Propinas planeadas.' } },
        { month: { en: 'Month 7-12', fr: 'Mois 7-12', pt: 'Mês 7-12' }, title: { en: 'Fluide Seeker Score established', fr: 'Fluide Seeker Score établi', pt: 'Fluide Seeker Score estabelecido' }, gain: { en: 'Fair credit with lower rates than informal lenders.', fr: 'Crédit équitable. Taux inférieur à tout prêteur informel.', pt: 'Crédito justo. Taxa mais baixa do que qualquer credor informal.' } },
        { month: { en: 'Year 2+', fr: 'Année 2+', pt: 'Ano 2+' }, title: { en: 'Full financial history', fr: 'Historique financier complet', pt: 'Histórico financeiro completo' }, gain: { en: 'A strong financial identity and a clear path forward.', fr: 'Une identité financière. Une voie d\'avenir.', pt: 'Uma identidade financeira. Um caminho a seguir.' } }
      ]
    },
    testimonial: {
      quote: { en: '"For the first time, I feel like my salary is mine."', fr: '"Pour la première fois, j\'ai l\'impression que mon salaire est à moi."', pt: '"Pela primeira vez, sinto que o meu salário é meu."' },
      author: 'Marie Nguema',
      role: { en: 'Sales Associate, Douala', fr: 'Associée aux Ventes, Douala', pt: 'Associada de Vendas, Douala' }
    }
  };

  const features = [
    { icon: Wallet, title: { en: 'Digital Salary Wallet', fr: 'Portefeuille Salaire Numérique', pt: 'Carteira Salarial Digital' }, desc: { en: 'Get your salary the moment payroll is run. Transfer it out instantly.', fr: 'Votre salaire arrive dans votre portefeuille dès que votre employeur lance la paie. Transférez-le instantanément.', pt: 'O seu salário chega à sua carteira no momento em que o seu empregador processa a folha. Transfira-o instantaneamente.' } },
    { icon: Zap, title: { en: 'Earned Wage Access (EWA)', fr: 'Virement Anticipé de Salaire', pt: 'Adiantamento Salarial (EWA)' }, desc: { en: 'Need cash early? Access up to 50% of your earned salary with no interest.', fr: 'Besoin d\'argent avant la paie ? Accédez à jusqu\'à 50% de votre salaire déjà acquis sur demande. Sans intérêt.', pt: 'Precisa de dinheiro antes do dia de pagamento? Aceda a até 50% do salário já ganho a pedido. Sem juros.' } },
    { icon: Heart, title: { en: 'Savings & Micro-Insurance', fr: 'Épargne et micro-assurance', pt: 'Poupanças e Micro-Seguros' }, desc: { en: 'Create savings pots and get affordable micro-insurance right from your wallet.', fr: 'Créez des tirelires nommées et accédez à des produits de micro-assurance abordables directement depuis votre portefeuille.', pt: 'Crie cofres de poupança com nomes e aceda a produtos de micro-seguro acessíveis diretamente da sua carteira.' } },
    { icon: Clock, title: { en: 'Financial Literacy', fr: 'Littératie financière', pt: 'Literacia Financeira' }, desc: { en: 'Learn to manage your money and build wealth with interactive tips.', fr: 'Modules interactifs et conseils personnalisés pour vous aider à mieux gérer votre argent et à créer de la richesse.', pt: 'Módulos interativos e dicas personalizadas para o ajudar a gerir melhor o seu dinheiro e a construir riqueza.' } },
  ];

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-brand-navy text-white py-24 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_50%_120%,rgba(78,242,216,0.1),transparent_50%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/10 text-brand-cyan text-[10px] font-bold uppercase tracking-widest mb-6">
                <Smartphone className="w-3 h-3" />
                <span>Fluide Pulse</span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold tracking-tight mb-8 leading-[1.1]">
                {content.hero.title[language]}
              </h1>
              <p className="text-xl text-white/60 leading-relaxed mb-10">
                {content.hero.desc[language]}
              </p>
              <div className="flex space-x-4">
                <button 
                  onClick={() => setIsWaitlistModalOpen(true)}
                  className="bg-brand-cyan text-brand-navy px-8 py-4 rounded-full font-bold hover:bg-brand-cyan/90 transition-all shadow-xl shadow-brand-cyan/10"
                >
                  App Store
                </button>
                <button 
                  onClick={() => setIsWaitlistModalOpen(true)}
                  className="bg-white/10 text-white border border-white/20 px-8 py-4 rounded-full font-bold hover:bg-white/20 transition-all"
                >
                  Google Play
                </button>
              </div>
            </div>
            <div className="relative flex justify-center">
              <div className="w-64 h-[500px] bg-[#1A1A1A] rounded-[40px] border-[8px] border-brand-navy shadow-2xl overflow-hidden relative">
                <div className="p-6">
                  <div className="text-xs text-white/40 mb-1 uppercase font-bold tracking-widest">{content.demo.balanceLabel[language]}</div>
                  <div className="text-3xl font-bold mb-8">₦124,500</div>
                  <div className="space-y-4">
                    <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                      <div className="text-[10px] text-white/40 uppercase font-bold mb-1">{content.demo.nextPaydayLabel[language]}</div>
                      <div className="font-bold">{content.demo.nextPaydayVal[language]}</div>
                    </div>
                    <div className="p-4 rounded-2xl bg-brand-cyan/20 border border-brand-cyan/20">
                      <div className="text-[10px] text-brand-cyan uppercase font-bold mb-1">{content.demo.ewaLabel[language]}</div>
                      <div className="font-bold text-brand-cyan">₦45,000</div>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-20 bg-white/5 backdrop-blur-md border-t border-white/10 flex items-center justify-around">
                  <Wallet className="w-6 h-6 text-white" />
                  <Zap className="w-6 h-6 text-white/40" />
                  <Heart className="w-6 h-6 text-white/40" />
                  <Clock className="w-6 h-6 text-white/40" />
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-brand-cyan/10 rounded-full blur-3xl" />
              <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-brand-navy/20 rounded-full blur-3xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {features.map((feature, idx) => (
              <div key={idx} className="p-10 rounded-[40px] bg-brand-navy/[0.02] border border-brand-navy/5 group hover:bg-brand-navy hover:text-white transition-all duration-500">
                <div className="w-16 h-16 bg-brand-navy/5 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-brand-cyan/20 transition-colors">
                  <feature.icon className="w-8 h-8 text-brand-navy group-hover:text-brand-cyan transition-colors" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{feature.title[language]}</h3>
                <p className="text-lg text-brand-navy/60 group-hover:text-white/60 leading-relaxed transition-colors">{feature.desc[language]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey */}
      <section className="py-24 bg-brand-navy/[0.02]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold mb-4 text-brand-navy">{content.journey.title[language]}</h2>
            <p className="text-brand-navy/40">{content.journey.subtitle[language]}</p>
          </div>
          <div className="space-y-4">
            {content.journey.steps.map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-3xl border border-brand-navy/5 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center space-x-6">
                  <div className="text-sm font-bold text-brand-navy/20 uppercase tracking-widest w-24">{item.month[language]}</div>
                  <div className="font-bold text-xl text-brand-navy">{item.title[language]}</div>
                </div>
                <div className="text-brand-navy/60 font-medium italic">{item.gain[language]}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-24 bg-brand-cyan text-brand-navy relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_50%_120%,rgba(30,35,77,0.05),transparent_50%)] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl lg:text-4xl font-bold mb-12 italic">{content.testimonial.quote[language]}</h2>
          <div className="flex items-center justify-center space-x-4">
            <div className="w-16 h-16 rounded-full bg-brand-navy/10" />
            <div className="text-left">
              <div className="font-bold">{content.testimonial.author}</div>
              <div className="text-brand-navy/60 text-sm">{content.testimonial.role[language]}</div>
            </div>
          </div>
        </div>
      </section>

      <WaitlistModal 
        isOpen={isWaitlistModalOpen} 
        onClose={() => setIsWaitlistModalOpen(false)} 
      />
    </div>
  );
};

export default FluidePulse;
