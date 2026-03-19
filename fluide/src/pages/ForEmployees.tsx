import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'motion/react';
import { ArrowRight, Wallet, CreditCard, Briefcase, Zap, Smartphone } from 'lucide-react';
import { Link } from 'react-router-dom';
import WaitlistModal from '../components/WaitlistModal';

const ForEmployees = () => {
  const { language } = useLanguage();
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  const content = {
    hero: {
      title: { en: 'Your work should work for you.', fr: 'Votre travail doit travailler pour vous.', pt: 'O seu trabalho deve trabalhar para si.' },
      desc: {
        en: 'Get paid instantly, build a financial safety net, and grow your career.',
        fr: 'Vous vous présentez tous les jours. Vous méritez d\'être payé instantanément, d\'avoir un filet de sécurité financier et de pouvoir évoluer au-delà de la fiche de paie.',
        pt: 'Você aparece todos os dias. Merece ser pago instantaneamente, ter uma rede de segurança financeira e poder crescer além do recibo de vencimento.'
      },
      cta: { en: 'Get the App', fr: 'Obtenir l\'application', pt: 'Obter a Aplicação' }
    },
    reality: {
      title: { en: 'Common Problems', fr: 'Votre Réalité Aujourd\'hui', pt: 'A Sua Realidade Hoje' },
      whoLabel: { en: 'Who It Affects', fr: 'Qui ressent cela', pt: 'Quem sente isto' },
      items: [
        { problem: { en: 'Salary arrives days late', fr: 'Votre salaire arrive 2-3 jours après le jour de paie', pt: 'O seu salário chega 2-3 dias após o dia de pagamento' }, who: { en: 'Workers using direct bank transfers.', fr: 'Marie, James, tout travailleur salarié par virement bancaire direct.', pt: 'Marie, James, todos os trabalhadores assalariados com transferência bancária direta.' } },
        { problem: { en: 'Unexpected emergencies', fr: 'En cas d\'urgence — frais d\'hôpital, frais de scolarité', pt: 'Quando ocorre uma emergência — conta do hospital, propinas escolares' }, who: { en: 'Anyone needing money before payday.', fr: 'Tous ceux qui ont déjà eu besoin d\'argent avant le jour de paie.', pt: 'Todos os que já precisaram de dinheiro antes do dia de pagamento.' } },
        { problem: { en: 'Having a job but no savings or insurance.', fr: 'Vous avez un emploi mais pas d\'économies. Pas d\'assurance.', pt: 'Tem um emprego, mas não tem poupanças. Sem seguro.' }, who: { en: 'Workers who want financial progress.', fr: 'Les travailleurs qui veulent des progrès financiers, pas seulement un salaire.', pt: 'Trabalhadores que querem progresso financeiro, não apenas um salário.' } },
        { problem: { en: 'Fake job postings and scams.', fr: 'On ne croit jamais votre CV. Vous avez été arnaqué.', pt: 'Nunca acreditam no seu CV. Já foi enganado.' }, who: { en: 'Job seekers looking for safe work.', fr: 'Les demandeurs d\'emploi — en particulier les femmes confrontées à des problèmes de sécurité.', pt: 'Candidatos a emprego — especialmente mulheres que lidam com questões de segurança.' } },
      ]
    },
    givesYou: {
      title: { en: 'What You Get', fr: 'Ce que Fluide vous offre', pt: 'O que a Fluide lhe oferece' },
      items: [
        { icon: Wallet, title: { en: 'Digital Wallet', fr: 'Portefeuille Numérique', pt: 'Carteira Digital' }, desc: { en: 'Get your salary the moment payroll is run.', fr: 'Votre salaire arrive au moment où votre employeur effectue la paie.', pt: 'O seu salário chega no momento em que o seu empregador processa a folha de pagamentos.' } },
        { icon: CreditCard, title: { en: 'Fair Loans', fr: 'Prêts Équitables', pt: 'Empréstimos Justos' }, desc: { en: 'Get salary advances after 3 months of work.', fr: 'Éligible à une avance sur salaire après plus de 3 mois d\'ancienneté.', pt: 'Elegível para adiantamento de salário após mais de 3 meses de histórico.' } },
        { icon: Briefcase, title: { en: 'Verified Work', fr: 'Travail Vérifié', pt: 'Trabalho Verificado' }, desc: { en: 'Find jobs at verified companies and track applications.', fr: 'Trouvez des emplois dans des entreprises vérifiées. Consultez le statut de votre candidature.', pt: 'Encontre empregos em empresas verificadas. Veja o estado da candidatura.' } },
        { icon: Smartphone, title: { en: 'Self-Employed', fr: 'Indépendant', pt: 'Trabalhador Independente' }, desc: { en: 'Track sales and expenses from your phone.', fr: 'Suivez vos ventes et vos dépenses depuis votre téléphone.', pt: 'Acompanhe as vendas e despesas a partir do seu telemóvel.' } }
      ]
    }
  };

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-brand-navy py-24 relative overflow-hidden min-h-[60vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1920&q=80" 
            alt="Happy African workers" 
            className="w-full h-full object-cover opacity-20"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/60 to-transparent" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight mb-8 leading-tight text-white">{content.hero.title[language]}</h1>
            <p className="text-xl text-white/60 leading-relaxed mb-10">{content.hero.desc[language]}</p>
            <div className="flex space-x-4">
              <button 
                onClick={() => setIsWaitlistOpen(true)}
                className="bg-brand-cyan text-brand-navy px-8 py-4 rounded-full font-bold hover:bg-white transition-all shadow-lg shadow-brand-cyan/10"
              >
                {content.hero.cta[language]}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Reality Today */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-16 text-brand-navy">{content.reality.title[language]}</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {content.reality.items.map((item, idx) => (
              <div key={idx} className="p-8 rounded-3xl bg-brand-navy/[0.02] border border-brand-navy/5 group hover:bg-brand-navy hover:text-white transition-all duration-500">
                <h3 className="text-xl font-bold mb-4">{item.problem[language]}</h3>
                <div className="pt-6 border-t border-brand-navy/5 group-hover:border-white/10">
                  <div className="text-[10px] font-bold uppercase tracking-widest text-brand-navy/40 group-hover:text-white/40 mb-2">{content.reality.whoLabel[language]}</div>
                  <p className="text-sm text-brand-navy/60 group-hover:text-white/60 font-medium transition-colors">{item.who[language]}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Fluide Gives You */}
      <section className="py-24 bg-brand-navy text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,rgba(78,242,216,0.05),transparent_50%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold mb-4">{content.givesYou.title[language]}</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {content.givesYou.items.map((item, idx) => (
              <div key={idx} className="p-8 rounded-3xl bg-white/5 border border-white/10 group hover:bg-white/10 transition-all">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-cyan/20">
                  <item.icon className="w-6 h-6 text-brand-cyan" />
                </div>
                <h3 className="text-lg font-bold mb-3">{item.title[language]}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{item.desc[language]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WaitlistModal 
        isOpen={isWaitlistOpen} 
        onClose={() => setIsWaitlistOpen(false)} 
      />
    </div>
  );
};

export default ForEmployees;
