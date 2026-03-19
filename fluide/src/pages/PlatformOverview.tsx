import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'motion/react';
import { ArrowRight, ShieldCheck, Zap, Database, RefreshCw, Globe, Smartphone } from 'lucide-react';

const PlatformOverview = () => {
  const { language } = useLanguage();

  const content = {
    hero: {
      title: {
        en: 'One platform. 10 tools.',
        fr: 'Une plateforme. 10 produits. Connectés par la confiance.',
        pt: 'Uma plataforma. 10 produtos. Conectados pela confiança.'
      },
      desc: {
        en: 'Most tools don\'t talk to each other. Fluide is different. Every tool shares the same data, making your work faster and easier.',
        fr: 'La plupart des outils de gestion sont conçus en silos. Vous recrutez avec une application, vous payez avec une autre, vous suivez votre comptabilité dans une troisième, et vous espérez qu\'elles communiquent entre elles. Elles ne le font pas.',
        pt: 'A maioria das ferramentas de gestão são construídas em silos. Você contrata com uma aplicação, paga com outra, acompanha a contabilidade numa terceira e espera que todas comuniquem entre si. Não comunicam.'
      }
    },
    ecosystem: {
      title: { en: 'How it works together.', fr: 'Comment tout s\'articule.', pt: 'Como tudo se encaixa.' },
      desc: {
        en: 'Data moves between tools automatically, so you never enter the same info twice.',
        fr: 'Considérez Fluide comme un écosystème vivant pour votre personnel. Les données circulent automatiquement entre les produits.',
        pt: 'Pense na Fluide como um ecossistema vivo para a sua força de trabalho. Os dados fluem automaticamente entre os produtos.'
      }
    },
    goldenRecord: {
      title: { en: 'One Identity', fr: 'Le Dossier Or', pt: 'O Registro de Ouro' },
      subtitle: { en: 'One verified profile for everyone.', fr: 'Une identité vérifiée. Une confiance infinie.', pt: 'Uma identidade verificada. Confiança infinita.' },
      desc: {
        en: 'Fluide uses one verified digital profile for every person on your team.',
        fr: 'Au cœur de Fluide se trouve le Dossier Or — une identité numérique unique et vérifiée pour chaque personne de votre écosystème.',
        pt: 'No coração da Fluide está o Registro de Ouro — uma identidade digital única e verificada para cada pessoa no seu ecossistema.'
      }
    }
  };

  const dataFlows = [
    { flow: 'Jobs → HR', trigger: { en: 'Candidate accepts offer', fr: 'Le candidat accepte l\'offre', pt: 'Candidato aceita a oferta' }, result: { en: 'Employee profile is created in Fluide HR with verified documents.', fr: 'Dossier employé créé dans Fluide HR avec documents vérifiés.', pt: 'Registro de colaborador criado na Fluide HR com documentos verificados.' } },
    { flow: 'HR → Payroll', trigger: { en: 'Employee added or updated', fr: 'Employé intégré ou mis à jour', pt: 'Colaborador integrado ou atualizado' }, result: { en: 'Payroll and taxes are calculated automatically.', fr: 'Calculs automatisés de la paie et de la conformité mis à jour en quelques minutes.', pt: 'Cálculos automatizados de folha de pagamento e conformidade atualizados em minutos.' } },
    { flow: 'Payroll → Pay', trigger: { en: 'Payroll approved', fr: 'Paie approuvée par le manager', pt: 'Folha de pagamentos aprovada' }, result: { en: 'Salaries are sent instantly to employees.', fr: 'Versement de salaire instantané et transfrontalier routé par l\'IA.', pt: 'Desembolso salarial transfronteiriço instantâneo roteado por IA.' } },
    { flow: 'Pay → Pulse', trigger: { en: 'Salary paid', fr: 'Salaire versé', pt: 'Salário transferido' }, result: { en: 'Employee wallet is updated in Fluide Pulse.', fr: 'Solde Fluide Pulse mis à jour en temps réel. Compagnon de bien-être financier activé.', pt: 'Saldo da Fluide Pulse atualizado em tempo real. Companheiro de bem-estar financeiro ativado.' } },
    { flow: 'Pulse → Bank', trigger: { en: '6 months of history', fr: '6+ mois d\'historique de transactions', pt: '6+ meses de histórico' }, result: { en: 'Employees can get fair salary advances.', fr: 'Crédit intelligent débloqué basé sur votre activité. Avances sur salaire équitables disponibles.', pt: 'Crédito inteligente desbloqueado com base no que faz. Adiantamentos salariais justos disponíveis.' } },
    { flow: 'HR → Protect', trigger: { en: 'Benefits plan updated', fr: 'Employé ajouté au plan d\'avantages', pt: 'Colaborador adicionado ao plano de benefícios' }, result: { en: 'Insurance options are offered to the team.', fr: 'Place de marché assurtech intégrée activée pour la protection du personnel.', pt: 'Mercado insurtech integrado ativado para proteção da força de trabalho.' } },
    { flow: 'Stock → Books', trigger: { en: 'Inventory changes', fr: 'Stock acheté ou vendu', pt: 'Inventário comprado ou vendido' }, result: { en: 'Accounting records are updated in Fluide Books.', fr: 'La comptabilité automatisée par l\'IA met à jour les informations en temps réel et le compte de résultat dans Fluide Books.', pt: 'A contabilidade automatizada por IA atualiza insights em tempo real e P&L no Fluide Books.' } },
    { flow: 'Books → Bank', trigger: { en: 'Financials synced', fr: 'Données financières de l\'entreprise synchronisées', pt: 'Dados financeiros da empresa sincronizados' }, result: { en: 'Business can access smart credit based on cash flow.', fr: 'La MPME se qualifie pour un crédit de fonds de roulement intelligent basé sur les flux de trésorerie.', pt: 'A MPME qualifica-se para crédito de capital de giro inteligente com base no fluxo de caixa.' } },
    { flow: 'Lite → Books', trigger: { en: 'Business grows', fr: 'La micro-entreprise se développe', pt: 'A microempresa cresce' }, result: { en: 'Upgrade from basic tools to full accounting.', fr: 'Passe d\'outils simples assistés par l\'IA à une comptabilité complète et des informations en temps réel.', pt: 'Atualiza de ferramentas simples assistidas por IA para contabilidade completa e insights em tempo real.' } },
  ];

  const flywheel = [
    { stage: 'HIRE', action: { en: 'Post jobs and hire verified talent.', fr: 'Publiez une offre, vérifiez les candidats.', pt: 'Publique uma oferta, verifique candidatos.' }, outcome: { en: 'Build a trusted team.', fr: 'Talents vérifiés dans votre équipe.', pt: 'Talentos verificados na sua equipa.' } },
    { stage: 'PAY', action: { en: 'Run payroll and pay instantly.', fr: 'Lancez la paie. Versez instantanément.', pt: 'Processe a folha. Transfira instantaneamente.' }, outcome: { en: 'Keep your team happy and loyal.', fr: 'Les employés vous font confiance.', pt: 'Os colaboradores confiam em si.' } },
    { stage: 'SAVE', action: { en: 'Employees save with Fluide Pulse.', fr: 'L\'employé épargne via Fluide Pulse.', pt: 'Colaborador poupa através da Fluide Pulse.' }, outcome: { en: 'Reduce financial stress.', fr: 'Fonds d\'urgence constitué.', pt: 'Fundo de emergência criado.' } },
    { stage: 'BORROW', action: { en: 'Access fair credit when needed.', fr: 'L\'employé ou l\'entreprise accède au crédit.', pt: 'Colaborador ou empresa acede ao crédito.' }, outcome: { en: 'Grow without high interest rates.', fr: 'Liquidité quand c\'est nécessaire.', pt: 'Liquidez quando importa.' } },
    { stage: 'GROW', action: { en: 'Use data to get better credit and expand.', fr: 'Plus de données. Meilleur crédit.', pt: 'Mais dados. Melhor crédito.' }, outcome: { en: 'A cycle of trust and growth.', fr: 'Un cycle auto-renforçant de confiance.', pt: 'Um ciclo auto-reforçado de confiança.' } },
  ];

  const renderFlow = (flow: string) => {
    const parts = flow.split(' → ');
    const productMap: Record<string, { name: string, path: string }> = {
      'Jobs': { name: 'Fluide Jobs', path: '/products/jobs' },
      'HR': { name: 'Fluide HR', path: '/products/hr' },
      'Payroll': { name: 'Fluide Payroll', path: '/products/payroll' },
      'Pay': { name: 'Fluide Pay', path: '/products/pay' },
      'Pulse': { name: 'Fluide Pulse', path: '/products/pulse' },
      'Bank': { name: 'Fluide Bank', path: '/products/bank' },
      'Books': { name: 'Fluide Books', path: '/products/books' },
      'Stock': { name: 'Fluide Stock', path: '/products/stock' },
      'Protect': { name: 'Fluide Protect', path: '/products/protect' },
      'Lite': { name: 'Fluide Lite', path: '/products/lite' }
    };

    return (
      <div className="flex items-center space-x-2">
        {parts.map((part, i) => (
          <React.Fragment key={i}>
            {productMap[part] ? (
              <Link 
                to={productMap[part].path}
                className="hover:text-brand-cyan transition-colors border-b border-transparent hover:border-brand-cyan"
              >
                {part}
              </Link>
            ) : (
              <span>{part}</span>
            )}
            {i < parts.length - 1 && <span className="text-brand-navy/20">→</span>}
          </React.Fragment>
        ))}
      </div>
    );
  };

  const renderResult = (text: string) => {
    const products = [
      { name: 'Fluide Jobs', path: '/products/jobs' },
      { name: 'Fluide HR', path: '/products/hr' },
      { name: 'Fluide Payroll', path: '/products/payroll' },
      { name: 'Fluide Pay', path: '/products/pay' },
      { name: 'Fluide Pulse', path: '/products/pulse' },
      { name: 'Fluide Bank', path: '/products/bank' },
      { name: 'Fluide Books', path: '/products/books' },
      { name: 'Fluide Stock', path: '/products/stock' },
      { name: 'Fluide Protect', path: '/products/protect' },
      { name: 'Fluide Lite', path: '/products/lite' }
    ];

    let elements: (string | React.ReactNode)[] = [text];

    products.forEach(product => {
      const newElements: (string | React.ReactNode)[] = [];
      elements.forEach(el => {
        if (typeof el === 'string') {
          const parts = el.split(product.name);
          parts.forEach((part, i) => {
            newElements.push(part);
            if (i < parts.length - 1) {
              newElements.push(
                <Link 
                  key={`${product.name}-${i}`} 
                  to={product.path}
                  className="text-brand-navy font-bold hover:text-brand-cyan transition-colors underline decoration-brand-cyan/30 underline-offset-2"
                >
                  {product.name}
                </Link>
              );
            }
          });
        } else {
          newElements.push(el);
        }
      });
      elements = newElements;
    });

    return elements;
  };

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-white py-24 border-b border-brand-navy/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl lg:text-6xl font-bold tracking-tight mb-8 text-brand-navy"
            >
              {content.hero.title[language]}
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-brand-navy/60 leading-relaxed"
            >
              {content.hero.desc[language]}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Data Flow Table */}
      <section className="py-24 bg-brand-navy/[0.02]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-4 text-brand-navy">{content.ecosystem.title[language]}</h2>
            <p className="text-brand-navy/60 max-w-2xl">{content.ecosystem.desc[language]}</p>
          </div>

          <div className="bg-white rounded-3xl border border-brand-navy/5 overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-brand-navy text-white">
                    <th className="px-8 py-6 font-bold uppercase tracking-wider text-xs">
                      {language === 'en' ? 'Data Flow' : language === 'fr' ? 'Flux de données' : 'Fluxo de Dados'}
                    </th>
                    <th className="px-8 py-6 font-bold uppercase tracking-wider text-xs">
                      {language === 'en' ? 'Trigger' : language === 'fr' ? 'Déclencheur' : 'Gatilho'}
                    </th>
                    <th className="px-8 py-6 font-bold uppercase tracking-wider text-xs">
                      {language === 'en' ? 'What Happens Automatically' : language === 'fr' ? 'Ce qui se passe automatiquement' : 'O que acontece automaticamente'}
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-brand-navy/5">
                  {dataFlows.map((flow, idx) => (
                    <tr key={idx} className="hover:bg-brand-navy/[0.01] transition-colors">
                      <td className="px-8 py-8 font-mono font-bold text-brand-navy">
                        {renderFlow(flow.flow)}
                      </td>
                      <td className="px-8 py-8 text-brand-navy/60">{flow.trigger[language]}</td>
                      <td className="px-8 py-8 text-brand-navy/80 font-medium">
                        {renderResult(flow.result[language])}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* The Golden Record */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-navy text-white text-[10px] font-bold uppercase tracking-widest mb-6">
                <Database className="w-3 h-3 text-brand-cyan" />
                <span>The Core</span>
              </div>
              <h2 className="text-4xl font-bold mb-4 text-brand-navy">{content.goldenRecord.title[language]}</h2>
              <h3 className="text-2xl font-medium text-brand-navy/40 mb-6 italic">{content.goldenRecord.subtitle[language]}</h3>
              <p className="text-lg text-brand-navy/60 leading-relaxed mb-8">
                {content.goldenRecord.desc[language]}
              </p>
              <ul className="space-y-4">
                {[
                  { en: 'Verified ID and qualifications', fr: 'Documents d\'identité vérifiés', pt: 'Documentos de identidade verificados' },
                  { en: 'Employment and payroll info', fr: 'Données d\'emploi et de paie', pt: 'Dados de emprego e folha de pagamentos' },
                  { en: 'Savings and transaction history', fr: 'Comportement financier', pt: 'Comportamento financeiro' }
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start space-x-3">
                    <ShieldCheck className="w-5 h-5 text-brand-cyan mt-1" />
                    <span className="font-medium text-brand-navy/80">{item[language]}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="order-1 lg:order-2 bg-brand-navy rounded-[40px] p-12 aspect-square flex items-center justify-center relative overflow-hidden">
              <div className="relative z-10 text-center">
                <div className="w-32 h-32 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6 border border-white/20">
                  <Database className="w-12 h-12 text-brand-cyan" />
                </div>
                <div className="text-white font-bold text-2xl tracking-tight">GOLDEN RECORD</div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-brand-cyan/10 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* The Flywheel */}
      <section className="py-24 bg-brand-navy text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_50%_120%,rgba(78,242,216,0.1),transparent_50%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold mb-4">
              {language === 'en' ? 'The Flywheel' : language === 'fr' ? 'Le Volant d\'Inertie' : 'O Volante de Inércia'}
            </h2>
            <p className="text-brand-cyan/60 font-mono tracking-widest uppercase text-sm">
              {language === 'en' ? 'Hire → Pay → Save → Borrow → Grow → Repeat' : language === 'fr' ? 'Embaucher → Payer → Épargner → Emprunter → Grandir → Répéter' : 'Contratar → Pagar → Poupar → Pedir Emprestado → Crescer → Repetir'}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
            {flywheel.map((item, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 p-8 rounded-3xl flex flex-col h-full">
                <div className="text-xs font-black tracking-[0.2em] text-brand-cyan/40 mb-6">{item.stage}</div>
                <div className="flex-grow">
                  <h4 className="text-sm font-bold mb-4 text-white/40 uppercase tracking-wider">
                    {language === 'en' ? 'Action' : language === 'fr' ? 'Action' : 'Ação'}
                  </h4>
                  <p className="text-sm mb-8 leading-relaxed">{item.action[language]}</p>
                  <h4 className="text-sm font-bold mb-4 text-white/40 uppercase tracking-wider">
                    {language === 'en' ? 'Outcome' : language === 'fr' ? 'Résultat' : 'Resultado'}
                  </h4>
                  <p className="text-sm font-medium text-brand-cyan leading-relaxed">{item.outcome[language]}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Partners */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-brand-navy">
              {language === 'en' ? 'Connected to Africa\'s financial infrastructure.' : language === 'fr' ? 'Connecté à l\'infrastructure financière de l\'Afrique.' : 'Conectado à infraestrutura financeira de África.'}
            </h2>
            <p className="text-brand-navy/60 max-w-2xl mx-auto">
              {language === 'en' ? 'Fluide works with the payment providers, banks, and telecoms your business already uses.' : language === 'fr' ? 'Fluide fonctionne avec les fournisseurs de paiement, les banques et les télécoms que votre entreprise utilise déjà.' : 'A Fluide funciona com os fornecedores de pagamentos, bancos e telecomunicações que a sua empresa já utiliza.'}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {[
              { type: { en: 'Mobile Money', fr: 'Argent Mobile', pt: 'Dinheiro Móvel' }, partners: 'MTN, Orange' },
              { type: { en: 'Payments', fr: 'Paiements', pt: 'Pagamentos' }, partners: 'Cellulant, AZA' },
              { type: { en: 'Banks', fr: 'Banques', pt: 'Bancos' }, partners: 'Ecobank' },
              { type: { en: 'Verification', fr: 'Vérification', pt: 'Verificação' }, partners: 'Smile ID, Identitypass' },
              { type: { en: 'Comms', fr: 'Comms', pt: 'Comunicações' }, partners: "Africa's Talking, Twilio" }
            ].map((partner, idx) => (
              <div key={idx} className="text-center p-6 rounded-2xl border border-brand-navy/5 bg-brand-navy/[0.02]">
                <div className="text-[10px] font-bold uppercase tracking-widest text-brand-navy/40 mb-2">{partner.type[language]}</div>
                <div className="font-bold text-brand-navy">{partner.partners}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security & Compliance */}
      <section className="py-24 bg-brand-navy/[0.02]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-[40px] p-12 lg:p-20 border border-brand-navy/5">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-8 text-brand-navy">
                  {language === 'en' ? 'Bank-grade security and compliance.' : language === 'fr' ? 'Sécurité de niveau bancaire. Conformité aux normes africaines.' : 'Segurança de nível bancário. Conformidade com os padrões africanos.'}
                </h2>
                <div className="space-y-6">
                  {[
                    { title: { en: 'AES-256 Encryption', fr: 'Chiffrement AES-256', pt: 'Criptografia AES-256' }, desc: { en: 'Your data is always encrypted and safe.', fr: 'Chiffrement de toutes les données au repos. TLS 1.3 en transit.', pt: 'Criptografia para todos os dados em repouso. TLS 1.3 em trânsito.' } },
                    { title: { en: 'OHADA Compliance', fr: 'Conformité OHADA', pt: 'Conformidade OHADA' }, desc: { en: 'Compliant in 17 Francophone countries.', fr: 'Conforme avec 17 pays francophones.', pt: 'Em conformidade com 17 países francófonos.' } },
                    { title: { en: 'Data Protection', fr: 'Protection des Données', pt: 'Proteção de Dados' }, desc: { en: 'Compliant with local data protection laws.', fr: 'Conforme au NDPR (Nigeria) et à la loi sur la protection des données du Kenya.', pt: 'Em conformidade com o NDPR (Nigéria) e a Lei de Proteção de Dados do Quénia.' } },
                    { title: { en: '99.9% Uptime', fr: 'Disponibilité de 99,9 %', pt: '99,9% de Tempo de Atividade' }, desc: { en: 'Reliable service you can count on.', fr: 'Fiabilité de niveau entreprise et SLA.', pt: 'Fiabilidade de nível empresarial e SLA.' } }
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start space-x-4">
                      <div className="w-6 h-6 rounded-full bg-brand-navy flex items-center justify-center flex-shrink-0 mt-1">
                        <ShieldCheck className="w-3.5 h-3.5 text-brand-cyan" />
                      </div>
                      <div>
                        <h4 className="font-bold text-brand-navy">{item.title[language]}</h4>
                        <p className="text-sm text-brand-navy/60">{item.desc[language]}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-square bg-brand-navy/[0.02] rounded-3xl flex items-center justify-center p-8 border border-brand-navy/5">
                  <Smartphone className="w-12 h-12 text-brand-navy/20" />
                </div>
                <div className="aspect-square bg-brand-navy/[0.02] rounded-3xl flex items-center justify-center p-8 border border-brand-navy/5">
                  <Globe className="w-12 h-12 text-brand-navy/20" />
                </div>
                <div className="aspect-square bg-brand-navy/[0.02] rounded-3xl flex items-center justify-center p-8 border border-brand-navy/5">
                  <Zap className="w-12 h-12 text-brand-navy/20" />
                </div>
                <div className="aspect-square bg-brand-navy/[0.02] rounded-3xl flex items-center justify-center p-8 border border-brand-navy/5">
                  <RefreshCw className="w-12 h-12 text-brand-navy/20" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PlatformOverview;
