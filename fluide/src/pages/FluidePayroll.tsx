import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Calculator, CheckCircle2, ArrowRight, Globe, FileText, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const FluidePayroll = () => {
  const { language } = useLanguage();

  const content = {
    hero: {
      title: { en: 'Payroll that runs itself.', fr: 'Une paie qui se gère toute seule.', pt: 'Processamento salarial que funciona sozinho.' },
      desc: { 
        en: 'Automate payroll and compliance in minutes. AI ensures your calculations are right across multiple African countries.', 
        fr: 'Paie automatisée et conformité en quelques minutes. Les calculs propulsés par l\'IA garantissent l\'exactitude dans plusieurs pays africains.', 
        pt: 'Processamento salarial automatizado e conformidade em minutos. Os cálculos baseados em IA garantem precisão em vários países africanos.' 
      },
      primaryCTA: { en: 'Run Payroll Now', fr: 'Lancer la paie maintenant', pt: 'Processar Salários Agora' }
    },
    demo: {
      payrollRun: { en: 'Payroll Run: Oct 2026', fr: 'Paie : Oct 2026', pt: 'Processamento: Out 2026' },
      statusReady: { en: 'Status: Ready', fr: 'Statut : Prêt', pt: 'Estado: Pronto' },
      totalNetPay: { en: 'Total Net Pay', fr: 'Salaire net total', pt: 'Salário Líquido Total' },
      totalTaxes: { en: 'Total Taxes (PAYE)', fr: 'Total des impôts (PAYE)', pt: 'Total de Impostos (PAYE)' },
      complianceCheck: { en: 'Compliance Check', fr: 'Vérification de conformité', pt: 'Verificação de Conformidade' },
      passed: { en: 'Passed', fr: 'Réussi', pt: 'Aprovado' }
    }
  };

  const features = [
    { icon: Zap, title: { en: 'One-Click Payroll', fr: 'Paie en un clic', pt: 'Processamento Salarial num Clique' }, desc: { en: 'Run payroll for your whole team in minutes. We automatically calculate salaries, deductions, and bonuses.', fr: 'Gérez la paie de toute votre équipe en quelques minutes. Fluide Payroll calcule automatiquement les salaires, les déductions et les primes en fonction des données de présence et de performance.', pt: 'Processe salários para toda a sua equipa em minutos. O Fluide Payroll calcula automaticamente salários, deduções e bónus com base em dados de assiduidade e desempenho.' } },
    { icon: Globe, title: { en: 'Multi-Country Compliance', fr: 'Conformité multi-pays', pt: 'Conformidade Multi-País' }, desc: { en: 'Stay compliant easily. Our AI updates tax rules and labor laws across 40+ African countries.', fr: 'Restez en conformité sans effort. Notre moteur d\'IA met à jour en permanence les règles fiscales et le droit du travail dans plus de 40 pays africains.', pt: 'Mantenha-se em conformidade sem esforço. O nosso motor de IA atualiza continuamente as regras fiscais e as leis laborais em mais de 40 países africanos.' } },
    { icon: FileText, title: { en: 'Automated Tax Filings', fr: 'Déclarations fiscales automatisées', pt: 'Declarações Fiscais Automatizadas' }, desc: { en: 'Generate and file reports (PAYE, Pension, NHIF) to local authorities with one click.', fr: 'Générez et déposez des rapports légaux (PAYE, Pension, NHIF, etc.) directement auprès des autorités locales en un seul clic.', pt: 'Gere e envie relatórios estatutários (PAYE, Pensão, NHIF, etc.) diretamente para as autoridades locais com um único clique.' } },
    { icon: Calculator, title: { en: 'Flexible Pay Cycles', fr: 'Cycles de paie flexibles', pt: 'Ciclos de Pagamento Flexíveis' }, desc: { en: 'Pay weekly, bi-weekly, or monthly. Easily manage contractors and full-time staff on different schedules.', fr: 'Prise en charge des cycles de paie hebdomadaires, bihebdomadaires ou mensuels. Gérez facilement les sous-traitants, le personnel à temps partiel et les employés à temps plein sur des horaires différents.', pt: 'Suporte para ciclos de pagamento semanais, quinzenais ou mensais. Lide facilmente com empreiteiros, pessoal a tempo parcial e funcionários a tempo inteiro em horários diferentes.' } },
  ];

  return (
    <div className="pt-20">
      <section className="bg-brand-navy/[0.02] py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_50%_120%,rgba(78,242,216,0.05),transparent_50%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-navy text-brand-cyan text-[10px] font-bold uppercase tracking-widest mb-6">
                <Calculator className="w-3 h-3" />
                <span>Fluide Payroll</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold tracking-tight mb-8 leading-tight text-brand-navy">
                {content.hero.title[language]}
              </h1>
              <p className="text-xl text-brand-navy/60 leading-relaxed mb-10">
                {content.hero.desc[language]}
              </p>
              <button className="bg-brand-navy text-white px-8 py-4 rounded-full font-bold hover:bg-brand-navy/90 transition-all shadow-lg shadow-brand-navy/10">
                {content.hero.primaryCTA[language]}
              </button>
            </div>
            <div className="bg-white rounded-[40px] shadow-2xl p-10 border border-brand-navy/5 relative overflow-hidden">
               <div className="flex items-center justify-between mb-8">
                <div className="font-bold text-brand-navy">{content.demo.payrollRun[language]}</div>
                <div className="text-xs text-brand-navy/40">{content.demo.statusReady[language]}</div>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 rounded-2xl bg-emerald-50 border border-emerald-100">
                  <span className="text-emerald-700 font-medium">{content.demo.totalNetPay[language]}</span>
                  <span className="font-bold text-emerald-700">₦12,450,000</span>
                </div>
                <div className="flex justify-between items-center p-4 rounded-2xl bg-rose-50 border border-rose-100">
                  <span className="text-rose-700 font-medium">{content.demo.totalTaxes[language]}</span>
                  <span className="font-bold text-rose-700">₦3,200,000</span>
                </div>
                <div className="flex justify-between items-center p-4 rounded-2xl bg-brand-cyan/10 border border-brand-cyan/20">
                  <span className="text-brand-navy font-medium">{content.demo.complianceCheck[language]}</span>
                  <span className="font-bold text-brand-navy flex items-center"><CheckCircle2 className="w-4 h-4 mr-1 text-emerald-600"/> {content.demo.passed[language]}</span>
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

export default FluidePayroll;
