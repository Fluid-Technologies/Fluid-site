import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'motion/react';
import { 
  ShieldCheck, 
  Zap, 
  Globe, 
  Users, 
  Headphones, 
  CreditCard, 
  HelpCircle, 
  ArrowRight,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import { Link } from 'react-router-dom';
import EoRDataFlow from '../components/EoRDataFlow';

const EoR = () => {
  const { language } = useLanguage();

  const content = {
    en: {
      hero: {
        headline: "Hire anywhere in Africa. No entity needed.",
        subheadline: "Fluide acts as your Employer of Record in 15+ African countries. We handle contracts, payroll, taxes, and compliance. You hire the best talent. No subsidiary. No stress.",
        primaryCta: "Talk to our team",
        secondaryCta: "See how it works"
      },
      problem: {
        label: "The Problem",
        title: "Great Talent, Wrong Location",
        description: "You found the perfect candidate in Nairobi, Dakar, or Lagos. But your company is in Johannesburg, and you don't have a legal entity there.",
        options: [
          { title: "Option A: Hire as a contractor", desc: "Contractors lack benefits, and misclassifying employees is illegal and risky." },
          { title: "Option B: Set up a local entity", desc: "Spend months and thousands of dollars before proving the market." }
        ],
        conclusion: "Neither works. While you wait, your competitor hires them."
      },
      solution: {
        label: "The Solution",
        title: "Fluide EoR",
        subtitle: "We are the legal employer. You are the dream employer.",
        description: "We take on the legal and admin work. The employee works for you, but we handle contracts, payroll, taxes, and compliance."
      },
      howItWorks: {
        title: "How It Works",
        steps: [
          { title: "Tell us who to hire", desc: "Share the candidate's details. We give you a transparent cost breakdown." },
          { title: "We draft the contract", desc: "Our legal team prepares a contract that complies with local labor and tax laws." },
          { title: "Employee onboarding", desc: "The employee signs digitally. We handle all local registrations." },
          { title: "Automatic payroll", desc: "We run payroll monthly. Salaries and taxes are paid automatically." },
          { title: "You focus on work", desc: "You manage the employee's work; we manage the compliance." }
        ]
      },
      benefits: [
        { title: "Compliance guaranteed", desc: "We follow local laws. If we make a mistake, we pay the penalty.", icon: ShieldCheck },
        { title: "Fast entry", desc: "Hire in days, not months. No waiting for entity registration.", icon: Zap },
        { title: "No entity needed", desc: "Expand without the cost and complexity of incorporation.", icon: Globe },
        { title: "One point of contact", desc: "One team, one invoice, no matter how many countries you hire in.", icon: Users },
        { title: "Pulse access", desc: "Every worker gets Fluide Pulse for salary advances and savings.", icon: CheckCircle2 },
        { title: "Local experts", desc: "We use in-country partners. No one-size-fits-all approach.", icon: Headphones }
      ],
      whoItsForLabel: "Who It's For",
      whoItsFor: [
        { type: "Expanding Startups", why: "Test new markets without setting up entities. Hire your first team risk-free." },
        { type: "Remote-first companies", why: "Hire the best talent anywhere in Africa without building local infrastructure." },
        { type: "Companies with contractors", why: "Convert contractors to compliant employees easily. Reduce legal risk." },
        { type: "International companies", why: "Let us handle your first hire in a new country while you focus on growth." }
      ],
      complianceGuarantees: {
        title: "Our Guarantees",
        subtitle: "100% indemnification and peace of mind.",
        items: [
          { title: "100% Indemnification", desc: "If we make a labor or tax mistake, we cover the penalties. You are protected." },
          { title: "Local Legal Experts", desc: "We partner with top-tier local law firms and HR experts in every country." },
          { title: "Audit-Ready Reports", desc: "Access transparent reports for all international hires, taxes, and benefits." },
          { title: "Data Security", desc: "We adhere to GDPR and local data protection laws to keep employee data safe." }
        ]
      },
      countries: {
        title: "Countries We Cover",
        regions: [
          { name: "West Africa", list: "Nigeria, Ghana, Senegal, Côte d'Ivoire, Benin, Togo" },
          { name: "East Africa", list: "Kenya, Uganda, Tanzania, Rwanda, Ethiopia*" },
          { name: "Central Africa", list: "Cameroon, Gabon, Republic of Congo, DRC*" },
          { name: "Southern Africa", list: "South Africa, Zambia, Mozambique, Angola*" }
        ],
        note: "*Partner network – coming soon"
      },
      pricing: {
        label: "Pricing",
        title: "Pricing Approach",
        model: "Simple, transparent, value-based.",
        points: [
          "Monthly fee: percentage of payroll + small fixed fee",
          "No setup fees for standard hires",
          "Volume discounts for 10+ employees",
          "One consolidated invoice"
        ],
        footer: "Pricing depends on country, role, and benefits. We provide a clear quote upfront.",
        cta: "Get a custom quote"
      },
      faqLabel: "FAQ",
      faq: [
        { q: "Do I still own the employee relationship?", a: "Yes. The employee works for you. We are just the legal employer on paper." },
        { q: "What if the employee doesn't work out?", a: "We handle termination legally according to local laws. You decide; we execute." },
        { q: "Can I convert contractors to employees?", a: "Yes. We help you transition contractors to compliant employment smoothly." },
        { q: "How do I know you're compliant?", a: "We work with licensed in-country partners and legal experts in each market." },
        { q: "What about health insurance?", a: "We can include standard benefits in the package. Just tell us what to offer." }
      ],
      finalCta: {
        title: "Ready to hire across Africa without the headache?",
        button: "Talk to our team",
        footer: "First consultation is free. No pressure. Just expert advice."
      },
      footerDisclaimer: "Fluide is not a law firm. EoR services are provided with licensed partners in each country."
    },
    fr: {
      hero: {
        headline: "Embauchez partout en Afrique. Sans créer de structure locale.",
        subheadline: "Fluide agit comme votre Employeur de Juridiction dans plus de 15 pays africains. Nous gérons les contrats, la paie, les impôts et la conformité. Sans filiale. Sans structure locale. Sans stress.",
        primaryCta: "Parler à notre équipe",
        secondaryCta: "Voir comment ça marche"
      },
      problem: {
        label: "Le Problème",
        title: "De bons talents, au mauvais endroit",
        description: "Vous avez trouvé le candidat parfait. Un développeur à Nairobi. Un responsable commercial à Dakar. Un directeur pays à Lagos. Mais votre entreprise est basée à Douala, et vous n'avez pas de structure légale au Kenya, au Sénégal ou au Nigeria.",
        options: [
          { title: "Option A : L'embaucher comme prestataire", desc: "Mais les prestataires n'ont pas de protections sociales, et requalifier un employé en prestataire est souvent illégal." },
          { title: "Option B : Créer une structure locale", desc: "Passer des mois et des milliers d'euros avant même d'avoir validé le marché." }
        ],
        conclusion: "Aucune des deux options ne fonctionne. Pendant que vous hésitez, votre concurrent vient d'embaucher ce candidat."
      },
      solution: {
        label: "La Solution",
        title: "La Solution : Fluide EoR",
        subtitle: "Nous devenons l'employeur légal. Vous devenez l'employeur de rêve.",
        description: "Quand vous embauchez via le service EoR de Fluide, nous prenons en charge toutes les responsabilités légales. L'employé travaille pour vous, mais nous gérons les contrats, la paie, les impôts et la conformité."
      },
      howItWorks: {
        title: "Comment Ça Marche",
        steps: [
          { title: "Dites-nous qui vous voulez embaucher", desc: "Partagez les détails du candidat. Nous vous communiquerons le coût exact – transparent, sans surprise." },
          { title: "Nous rédigeons le contrat conforme", desc: "Notre équipe juridique prépare un contrat conforme au droit local, aux obligations fiscales et à la sécurité sociale." },
          { title: "Onboarding du salarié", desc: "Le salarié signe numériquement. Nous gérons toutes les inscriptions (impôts, CNPS, mutuelle). Il accède à Fluide Pulse." },
          { title: "La paie est automatique", desc: "Chaque mois, les salaires sont versés via Fluide Pay. Les impôts et cotisations sont reversés automatiquement." },
          { title: "Vous vous concentrez sur le travail", desc: "Fini l'inquiétude sur les changements de droit. Vous gérez le travail ; nous gérons tout le reste." }
        ]
      },
      benefits: [
        { title: "Conformité garantie", desc: "Nous suivons l'évolution du droit. En cas d'erreur, nous prenons en charge les pénalités.", icon: ShieldCheck },
        { title: "Entrée rapide", desc: "Embauchez en quelques jours. Pas d'attente pour créer une structure.", icon: Zap },
        { title: "Pas de structure requise", desc: "Développez-vous sans les coûts et la complexité d'une implantation.", icon: Globe },
        { title: "Interlocuteur unique", desc: "Une équipe, une facture, une relation – quel que soit le nombre de pays.", icon: Users },
        { title: "Accès à Pulse", desc: "Chaque employé accède à Fluide Pulse – portefeuille, avances, épargne, assurance.", icon: CheckCircle2 },
        { title: "Experts locaux", desc: "Nous avons des partenaires et experts dans chaque marché. Pas de solution standardisée.", icon: Headphones }
      ],
      whoItsForLabel: "Pour Qui",
      whoItsFor: [
        { type: "Startups en expansion", why: "Testez de nouveaux marchés sans les frais de création de structure. Embauchez vos 5-10 premiers employés sans risque." },
        { type: "Entreprises distantes", why: "Recrutez les meilleurs talents où qu'ils vivent – Lagos, Nairobi, Douala – sans infrastructure locale." },
        { type: "Entreprises avec prestataires", why: "Transformez facilement vos prestataires en employés. Réduisez les risques, améliorez la fidélisation." },
        { type: "Entreprises internationales", why: "Votre premier recrutement est le plus difficile. Laissez-nous gérer pendant que vous grandissez." }
      ],
      complianceGuarantees: {
        title: "Nos Garanties de Conformité",
        subtitle: "Indemnisation à 100 % et tranquillité d'esprit.",
        items: [
          { title: "Indemnisation à 100 %", desc: "Si nous commettons une erreur concernant le droit du travail, les impôts ou la paie, nous couvrons les pénalités financières. Vous êtes totalement protégé." },
          { title: "Experts Juridiques Locaux", desc: "Nous ne nous contentons pas d'utiliser des logiciels. Nous travaillons avec des cabinets d'avocats et des experts RH de premier plan dans chaque pays africain où nous opérons." },
          { title: "Rapports Prêts pour l'Audit", desc: "Accédez à des rapports transparents et prêts pour l'audit concernant toutes vos embauches internationales, les impôts payés et les avantages sociaux administrés." },
          { title: "Confidentialité et Sécurité des Données", desc: "Nous respectons le RGPD et les lois locales sur la protection des données à travers l'Afrique, garantissant que les données de vos employés sont toujours sécurisées." }
        ]
      },
      countries: {
        title: "Pays Couverts",
        regions: [
          { name: "Afrique de l'Ouest", list: "Nigeria, Ghana, Sénégal, Côte d'Ivoire, Bénin, Togo" },
          { name: "Afrique de l'Est", list: "Kenya, Ouganda, Tanzanie, Rwanda, Éthiopie*" },
          { name: "Afrique Centrale", list: "Cameroun, Gabon, République du Congo, RDC*" },
          { name: "Afrique Australe", list: "Afrique du Sud, Zambie, Mozambique, Angola*" }
        ],
        note: "*Réseau de partenaires – à venir"
      },
      pricing: {
        label: "Tarification",
        title: "Approche Tarifaire",
        model: "Simple, transparente, basée sur la valeur.",
        points: [
          "Frais mensuels par employé : pourcentage de la paie + petit fixe",
          "Pas de frais de dossier pour les recrutements standards",
          "Remises volume pour les équipes de 10+ employés",
          "Une seule facture – quel que soit le nombre de pays"
        ],
        footer: "Le prix exact dépend du pays et du poste. Nous vous donnerons un devis clair avant tout engagement.",
        cta: "Obtenir un devis personnalisé"
      },
      faqLabel: "Questions Fréquentes",
      faq: [
        { q: "Est-ce que je garde la relation avec l'employé ?", a: "Absolument. L'employé travaille pour vous. Nous sommes l'employeur légal sur le papier pour vous éviter de créer une structure." },
        { q: "Que se passe-t-il si l'employé ne donne pas satisfaction ?", a: "Nous gérons le licenciement en conformité avec le droit local. Vous prenez la décision ; nous l'exécutons légalement." },
        { q: "Puis-je transformer mes prestataires en employés ?", a: "Oui. C'est l'un des cas d'usage les plus courants. Nous vous aidons à faire la transition sans heurts." },
        { q: "Comment être sûr que vous êtes conforme ?", a: "Nous travaillons avec des partenaires locaux agréés dans chaque pays. Nous nous associons à des experts locaux." },
        { q: "Qu'en est-il des avantages comme la mutuelle ?", a: "Nous pouvons inclure les avantages standards dans le package. Dites-nous ce que vous voulez offrir." }
      ],
      finalCta: {
        title: "Prêt à recruter en Afrique sans les maux de tête ?",
        button: "Parler à notre équipe",
        footer: "Premier entretien gratuit. Sans pression. Simplement des conseils d'experts."
      },
      footerDisclaimer: "Fluide n'est pas un cabinet d'avocats. Les services EoR sont fournis en partenariat avec des entités agréées dans chaque pays."
    },
    pt: {
      hero: {
        headline: "Contrate em qualquer lugar da África. Sem abrir entidade local.",
        subheadline: "A Fluide atua como seu Empregador de Registro em mais de 15 países africanos. Cuidamos de contratos, folha de pagamento, impostos e conformidade. Sem subsidiária. Sem entidade local. Sem estresse.",
        primaryCta: "Falar com a nossa equipa",
        secondaryCta: "Ver como funciona"
      },
      problem: {
        label: "O Problema",
        title: "Grande Talento, Localização Errada",
        description: "Você encontrou o candidato perfeito em Nairóbi, Dakar ou Lagos. Mas a sua empresa está em Joanesburgo e você não tem entidade legal nesses países.",
        options: [
          { title: "Opção A: Contratá-lo como prestador", desc: "Mas prestadores não têm benefícios e a classificação errada é ilegal e arriscada." },
          { title: "Opção B: Abrir uma entidade local", desc: "Gastar meses e milhares de dólares antes mesmo de testar o mercado." }
        ],
        conclusion: "Nenhuma das opções funciona. E enquanto você está preso, o seu concorrente acaba de contratar aquele candidato."
      },
      solution: {
        label: "A Solução",
        title: "A Solução: Fluide EoR",
        subtitle: "Nós tornamo-nos o empregador legal. Você torna-se o empregador dos sonhos.",
        description: "Quando contrata através da Fluide, assumimos todas as responsabilidades legais. O funcionário trabalha para si, mas nós cuidamos dos contratos, folha, impostos e conformidade."
      },
      howItWorks: {
        title: "Como Funciona",
        steps: [
          { title: "Diga-nos quem quer contratar", desc: "Partilhe os detalhes. Informaremos o custo exato – transparente, sem surpresas." },
          { title: "Elaboramos o contrato conforme", desc: "A nossa equipa jurídica prepara um contrato em conformidade com as leis laborais e fiscais locais." },
          { title: "Integração do funcionário", desc: "O funcionário assina digitalmente. Cuidamos de todo o registo local. Ele ganha acesso ao Fluide Pulse." },
          { title: "Folha de pagamento automática", desc: "Todos os meses, os salários são pagos via Fluide Pay. Impostos são remetidos automaticamente." },
          { title: "Você foca-se no trabalho", desc: "Chega de preocupações legais. Você gere o trabalho; nós tratamos de todo o resto." }
        ]
      },
      benefits: [
        { title: "Conformidade garantida", desc: "Acompanhamos as leis locais. Se cometermos um erro, cobrimos as penalidades.", icon: ShieldCheck },
        { title: "Entrada rápida", desc: "Contrate em dias, não em meses. Sem espera pelo registo da entidade.", icon: Zap },
        { title: "Sem entidade necessária", desc: "Expanda para novos países sem o custo e a complexidade da incorporação.", icon: Globe },
        { title: "Interlocutor único", desc: "Uma equipa, uma fatura, um relacionamento – em qualquer número de países.", icon: Users },
        { title: "Acesso ao Pulse", desc: "Cada trabalhador tem acesso ao Fluide Pulse – carteira, adiantamentos, poupanças.", icon: CheckCircle2 },
        { title: "Especialistas locais", desc: "Temos parceiros e especialistas em cada mercado. Abordagem personalizada.", icon: Headphones }
      ],
      whoItsForLabel: "Para Quem É",
      whoItsFor: [
        { type: "Startups em expansão", why: "Teste novos mercados sem custos de abertura. Contrate os primeiros 5-10 funcionários sem risco." },
        { type: "Empresas remotas", why: "Contrate os melhores talentos onde quer que vivam – Lagos, Nairobi, Luanda – sem infraestrutura." },
        { type: "Empresas com prestadores", why: "Converta prestadores em funcionários facilmente. Reduza o risco legal e melhore a retenção." },
        { type: "Empresas internacionais", why: "A sua primeira contratação é a mais difícil. Deixe-nos tratar enquanto você foca no crescimento." }
      ],
      complianceGuarantees: {
        title: "Nossas Garantias de Conformidade",
        subtitle: "100% de indemnização e paz de espírito.",
        items: [
          { title: "Indemnização a 100%", desc: "Se cometermos um erro com as leis laborais locais, impostos ou folha de pagamento, cobrimos as penalidades financeiras. Você está totalmente protegido." },
          { title: "Especialistas Jurídicos Locais", desc: "Não usamos apenas software. Estabelecemos parcerias com escritórios de advocacia e especialistas em RH de topo em todos os países africanos onde operamos." },
          { title: "Relatórios Prontos para Auditoria", desc: "Aceda a relatórios transparentes e prontos para auditoria de todas as suas contratações internacionais, impostos pagos e benefícios administrados." },
          { title: "Privacidade e Segurança de Dados", desc: "Aderimos ao RGPD e às leis locais de proteção de dados em toda a África, garantindo que os dados dos seus funcionários estejam sempre seguros." }
        ]
      },
      countries: {
        title: "Países Cobertos",
        regions: [
          { name: "África Ocidental", list: "Nigéria, Gana, Senegal, Costa do Marfim, Benim, Togo" },
          { name: "África Oriental", list: "Quénia, Uganda, Tanzânia, Ruanda, Etiópia*" },
          { name: "África Central", list: "Camarões, Gabão, República do Congo, RDC*" },
          { name: "África Austral", list: "África do Sul, Zâmbia, Moçambique, Angola*" }
        ],
        note: "*Rede de parceiros – em breve"
      },
      pricing: {
        label: "Preços",
        title: "Abordagem de Preços",
        model: "Simples, transparente, baseada em valor.",
        points: [
          "Taxa mensal por funcionário: percentagem da folha de pagamentos + pequena taxa fixa",
          "Sem taxas de configuração para contratações padrão",
          "Descontos por volume para equipas de 10+ funcionários",
          "Fatura única consolidada – independentemente do número de países"
        ],
        footer: "O preço exato depende do país e cargo. Forneceremos um orçamento claro antes de qualquer compromisso.",
        cta: "Obter um orçamento personalizado"
      },
      faqLabel: "Perguntas Frequentes",
      faq: [
        { q: "Ainda sou o responsável pela relação?", a: "Absolutamente. O funcionário trabalha para si. Somos o empregador legal no papel para que não precise abrir uma entidade." },
        { q: "O que acontece se o funcionário não corresponder?", a: "Gerimos o despedimento em conformidade com as leis locais. Você toma a decisão; nós executamo-la legalmente." },
        { q: "Posso converter os meus prestadores?", a: "Sim. Este é um dos casos de uso mais comuns. Ajudamo-lo a fazer a transição sem interrupções." },
        { q: "Como sei que estão em conformidade?", a: "Trabalhamos com parceiros licenciados localmente em cada mercado. Fazemos parcerias com especialistas locais." },
        { q: "E os benefícios como seguro?", a: "Podemos incluir benefícios padrão no pacote. Diga-nos o que pretende oferecer." }
      ],
      finalCta: {
        title: "Pronto para contratar em toda a África – sem dores de cabeça?",
        button: "Falar com a nossa equipa",
        footer: "Primeira consulta gratuita. Sem pressão. Apenas conselhos de especialistas."
      },
      footerDisclaimer: "A Fluide não é um escritório de advocacia. Os serviços de EoR são fornecidos em parceria com entidades licenciadas em cada país."
    }
  };

  const t = content[language as keyof typeof content] || content.en;

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-brand-navy py-24 relative overflow-hidden min-h-[60vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=1920&q=80" 
            alt="Global connectivity" 
            className="w-full h-full object-cover opacity-20"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/60 to-transparent" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-8 tracking-tight leading-[1.1]">
              {t.hero.headline}
            </h1>
            <p className="text-xl text-white/60 leading-relaxed mb-10">
              {t.hero.subheadline}
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-brand-cyan text-brand-navy px-8 py-4 rounded-full font-bold text-lg hover:bg-white transition-all shadow-xl shadow-brand-cyan/10">
                {t.hero.primaryCta}
              </button>
              <button className="border border-white/20 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/5 transition-all">
                {t.hero.secondaryCta} ↓
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Problem */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-8">
              <div className="inline-block px-4 py-1 bg-red-50 text-red-600 rounded-full text-xs font-black uppercase tracking-widest">
                {t.problem.label}
              </div>
              <h2 className="text-4xl font-bold text-brand-navy leading-tight">
                {t.problem.title}
              </h2>
              <p className="text-lg text-brand-navy/60 leading-relaxed">
                {t.problem.description}
              </p>
              <div className="space-y-6">
                {t.problem.options.map((opt, i) => (
                  <div key={i} className="flex gap-4 p-6 bg-brand-navy/[0.02] rounded-3xl border border-brand-navy/5">
                    <div className="w-10 h-10 bg-red-50 rounded-xl flex items-center justify-center shrink-0">
                      <AlertCircle className="w-5 h-5 text-red-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-brand-navy mb-1">{opt.title}</h4>
                      <p className="text-sm text-brand-navy/60">{opt.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="font-bold text-brand-navy italic">
                {t.problem.conclusion}
              </p>
            </div>
            <div className="lg:sticky lg:top-32">
              <div className="bg-brand-navy p-12 rounded-[40px] text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-cyan/10 blur-3xl rounded-full" />
                <div className="relative z-10">
                  <div className="inline-block px-4 py-1 bg-brand-cyan/20 text-brand-cyan rounded-full text-xs font-black uppercase tracking-widest mb-8">
                    {t.solution.label}
                  </div>
                  <h3 className="text-3xl font-bold mb-4">{t.solution.title}</h3>
                  <p className="text-brand-cyan font-medium mb-6">{t.solution.subtitle}</p>
                  <p className="text-white/70 text-lg leading-relaxed">
                    {t.solution.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-brand-navy/[0.02]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl font-bold text-brand-navy mb-6">{t.howItWorks.title}</h2>
          </div>
          <div className="grid md:grid-cols-5 gap-8">
            {t.howItWorks.steps.map((step, idx) => (
              <div key={idx} className="relative">
                <div className="w-12 h-12 bg-brand-navy text-brand-cyan rounded-2xl flex items-center justify-center font-bold text-xl mb-6 shadow-lg shadow-brand-navy/10">
                  {idx + 1}
                </div>
                <h4 className="font-bold text-brand-navy mb-3">{step.title}</h4>
                <p className="text-sm text-brand-navy/60 leading-relaxed">{step.desc}</p>
                {idx < 4 && (
                  <div className="hidden md:block absolute top-6 left-12 w-full h-[2px] bg-brand-navy/5 -z-10" />
                )}
              </div>
            ))}
          </div>

          {/* Seamless Integration Diagram */}
          <div className="mt-24 bg-white rounded-[40px] border border-brand-navy/5 shadow-sm overflow-hidden">
            <EoRDataFlow />
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.benefits.map((benefit, idx) => (
              <div key={idx} className="p-8 rounded-[32px] border border-brand-navy/5 hover:border-brand-cyan/30 transition-all group">
                <div className="w-14 h-14 bg-brand-navy/5 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-navy transition-colors">
                  <benefit.icon className="w-7 h-7 text-brand-navy group-hover:text-brand-cyan transition-colors" />
                </div>
                <h4 className="text-xl font-bold text-brand-navy mb-4">{benefit.title}</h4>
                <p className="text-brand-navy/60 text-sm leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Guarantees */}
      <section className="py-24 bg-brand-navy/[0.02] border-y border-brand-navy/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-brand-navy mb-6">{t.complianceGuarantees.title}</h2>
            <p className="text-xl text-brand-cyan font-bold">{t.complianceGuarantees.subtitle}</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {t.complianceGuarantees.items.map((item, idx) => (
              <div key={idx} className="flex gap-6 p-8 bg-white rounded-[32px] border border-brand-navy/5 shadow-sm hover:shadow-md transition-all">
                <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-brand-navy mb-3">{item.title}</h4>
                  <p className="text-brand-navy/60 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-24 bg-brand-navy text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-4xl font-bold mb-16 text-center">{t.whoItsForLabel}</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {t.whoItsFor.map((profile, idx) => (
              <div key={idx} className="bg-white/5 backdrop-blur-sm p-10 rounded-[40px] border border-white/10">
                <h4 className="text-2xl font-bold mb-4 text-brand-cyan">{profile.type}</h4>
                <p className="text-white/60 leading-relaxed">{profile.why}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Countries */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-brand-navy/[0.02] rounded-[40px] p-12 border border-brand-navy/5">
            <h2 className="text-3xl font-bold text-brand-navy mb-12 text-center">{t.countries.title}</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
              {t.countries.regions.map((region, i) => (
                <div key={i}>
                  <h4 className="font-black text-xs uppercase tracking-widest text-brand-navy/40 mb-4">{region.name}</h4>
                  <p className="text-brand-navy font-medium leading-relaxed">{region.list}</p>
                </div>
              ))}
            </div>
            <p className="mt-12 text-center text-sm text-brand-navy/40 italic">{t.countries.note}</p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block px-4 py-1 bg-brand-cyan/10 text-brand-navy font-black uppercase tracking-widest text-[10px] rounded-full mb-8">
            {t.pricing.label}
          </div>
          <h2 className="text-4xl font-bold text-brand-navy mb-4">{t.pricing.title}</h2>
          <p className="text-xl text-brand-cyan font-bold mb-8">{t.pricing.model}</p>
          <div className="grid sm:grid-cols-2 gap-4 text-left mb-12">
            {t.pricing.points.map((p, i) => (
              <div key={i} className="flex items-center space-x-3 p-4 bg-brand-navy/[0.02] rounded-2xl border border-brand-navy/5">
                <CheckCircle2 className="w-5 h-5 text-brand-cyan shrink-0" />
                <span className="text-sm font-medium text-brand-navy/80">{p}</span>
              </div>
            ))}
          </div>
          <p className="text-sm text-brand-navy/40 italic mb-12">
            {t.pricing.footer}
          </p>
          <button className="bg-brand-navy text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-brand-navy/90 transition-all shadow-xl shadow-brand-navy/10">
            {t.pricing.cta}
          </button>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-brand-navy/[0.02]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-brand-navy mb-12 text-center">{t.faqLabel}</h2>
          <div className="space-y-6">
            {t.faq.map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-3xl border border-brand-navy/5">
                <h4 className="font-bold text-brand-navy mb-3 flex items-start">
                  <HelpCircle className="w-5 h-5 mr-3 text-brand-cyan shrink-0 mt-0.5" />
                  {item.q}
                </h4>
                <p className="text-brand-navy/60 text-sm leading-relaxed pl-8">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-brand-cyan">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-brand-navy mb-8">
            {t.finalCta.title}
          </h2>
          <button className="bg-brand-navy text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-brand-navy/90 transition-all mb-6">
            {t.finalCta.button} →
          </button>
          <p className="text-brand-navy/60 font-medium">
            {t.finalCta.footer}
          </p>
        </div>
      </section>

      {/* Footer Disclaimer */}
      <div className="py-8 bg-white border-t border-brand-navy/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[10px] text-brand-navy/40 text-center uppercase tracking-widest font-bold">
            {t.footerDisclaimer}
          </p>
        </div>
      </div>
    </div>
  );
};

export default EoR;
