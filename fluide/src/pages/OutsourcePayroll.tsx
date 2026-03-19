import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'motion/react';
import { 
  ShieldCheck, 
  Clock, 
  BarChart3, 
  Headphones, 
  CreditCard, 
  HelpCircle, 
  CheckCircle2,
  AlertCircle,
  FileText,
  Zap
} from 'lucide-react';
import { Link } from 'react-router-dom';

const OutsourcePayroll = () => {
  const { language } = useLanguage();

  const content = {
    en: {
      hero: {
        headline: "Run payroll without running payroll.",
        subheadline: "Focus on your business. We run your payroll end-to-end—accurately, compliantly, and on time. One click to approve. Zero stress.",
        primaryCta: "Get a free consultation",
        secondaryCta: "See how it works"
      },
      problem: {
        label: "The Problem",
        title: "Payroll is a monthly headache",
        description: "Running payroll yourself means hours of manual entry, anxiety over tax deadlines, and employees constantly asking for payslips.",
        risks: [
          { title: "Fines", desc: "Heavy penalties for late or incorrect tax filings." },
          { title: "Angry Employees", desc: "Pay mistakes lead to low morale and high turnover." },
          { title: "Audits", desc: "Regulatory audits that waste weeks of your time." }
        ],
        conclusion: "There's a better way."
      },
      solution: {
        label: "The Solution",
        title: "Fluide Outsource Payroll",
        subtitle: "We run your payroll. You just approve.",
        description: "Send us employee hours. We calculate, pay, file taxes, and handle compliance. You get one invoice. Employees get paid on time."
      },
      howItWorks: {
        title: "How It Works",
        steps: [
          { title: "Share your data", desc: "Upload hours, overtime, and bonuses to our secure portal in minutes." },
          { title: "We calculate", desc: "Our system and experts calculate gross-to-net for each employee." },
          { title: "You approve", desc: "Review a clear summary of costs and taxes. One click to approve." },
          { title: "We pay and file", desc: "Salaries are sent via Fluide Pay. Taxes are remitted to authorities." },
          { title: "We support employees", desc: "Employees call us with questions, not you." },
          { title: "Reports delivered", desc: "Get monthly reports and annual summaries for your accountant." }
        ]
      },
      benefits: [
        { title: "Zero errors", desc: "Automated calculations and expert review catch mistakes early.", icon: ShieldCheck },
        { title: "Time savings", desc: "Reclaim days every month to focus on your business.", icon: Clock },
        { title: "Compliance guaranteed", desc: "We track tax rates. If we err, we cover the penalties.", icon: ShieldCheck },
        { title: "Full visibility", desc: "You control approvals. Nothing happens without your OK.", icon: BarChart3 },
        { title: "Employee support", desc: "Your staff gets a dedicated team for payroll questions.", icon: Headphones },
        { title: "One flat fee", desc: "No surprises. Know exactly what you pay each month.", icon: CreditCard }
      ],
      whoItsForLabel: "Who It's For",
      whoItsFor: [
        { type: "SMEs (5-200 employees)", why: "You've outgrown spreadsheets but don't need an in-house team." },
        { type: "Growing businesses", why: "Payroll gets complex. Let experts handle it while you scale." },
        { type: "Complex pay structures", why: "We handle commissions, overtime, bonuses, and allowances." },
        { type: "Businesses seeking peace of mind", why: "One mistake costs more than our service. Avoid the risk." }
      ],
      whatsIncluded: {
        title: "What's Included",
        features: [
          "Employee onboarding and data collection",
          "Gross-to-net calculation with all deductions",
          "Payslip generation via PDF and Fluide Pulse",
          "Tax and social security filing",
          "Statutory report generation",
          "Dedicated employee support team",
          "Year-end summaries and tax certificates",
          "Optional integration with Fluide Books"
        ]
      },
      pricing: {
        label: "Pricing",
        title: "Simple Pricing",
        model: "Transparent and scalable.",
        plans: [
          { name: "Essential", price: "XAF per employee/month", best: "Basic payroll, single country" },
          { name: "Professional", price: "XAF per employee/month", best: "Multi-country, complex payroll" },
          { name: "Enterprise", price: "Custom quote", best: "100+ employees, custom needs" }
        ],
        footer: "No setup fees. No long-term contracts. Volume discounts available.",
        cta: "Talk to our team"
      },
      faqLabel: "FAQ",
      faq: [
        { q: "What information do you need?", a: "Just hours worked, overtime, bonuses, and changes like new hires. We handle the rest." },
        { q: "How do employees get payslips?", a: "Instantly via the Fluide Pulse app, or by email and print on request." },
        { q: "What if an employee has a pay issue?", a: "They contact our support team. We investigate and correct it." },
        { q: "Do I lose control?", a: "No. You approve every payroll run before disbursement and see all calculations." },
        { q: "What about tax deadlines?", a: "We track deadlines across countries and file on time, every time." },
        { q: "Can you handle multiple countries?", a: "Yes. We have payroll experts across Africa for a single, unified service." }
      ],
      finalCta: {
        title: "Stop doing payroll. Start growing.",
        button: "Get a free consultation",
        footer: "We'll review your payroll, identify risks, and show your savings."
      },
      footerDisclaimer: "Fluide is not a law firm. Payroll services are provided with licensed partners in each country."
    },
    fr: {
      hero: {
        headline: "Gérez la paie... sans gérer la paie.",
        subheadline: "Vous vous concentrez sur votre métier. Nous gérons votre paie de A à Z – avec précision, conformité et ponctualité. Un clic pour valider. Zéro stress. Garanti.",
        primaryCta: "Obtenir une consultation gratuite",
        secondaryCta: "Voir comment ça marche"
      },
      problem: {
        label: "Le Problème",
        title: "La Paie, un Cauchemar Mensuel",
        description: "Si vous gérez la paie vous-même, vous connaissez la chanson : des heures de saisie manuelle et l'angoisse permanente des échéances fiscales.",
        risks: [
          { title: "Amendes", desc: "Des pénalités lourdes des autorités fiscales pour retard ou erreur." },
          { title: "Employés mécontents", desc: "Les erreurs de paie nuisent au moral et à la fidélisation." },
          { title: "Contrôles", desc: "Des audits réglementaires qui vous font perdre des semaines." }
        ],
        conclusion: "Il y a une meilleure façon."
      },
      solution: {
        label: "La Solution",
        title: "La Solution : Fluide Paie Externalisée",
        subtitle: "Nous gérons votre paie intégralement. Vous validez simplement.",
        description: "Transmettez-nous les heures. Nous calculons, versons, déclarons les impôts et gérons la conformité. Vos employés sont payés à l'heure, tous les mois."
      },
      howItWorks: {
        title: "Comment Ça Marche",
        steps: [
          { title: "Transmettez vos données", desc: "Chargez les heures, primes et changements sur notre portail sécurisé. 5 minutes suffisent." },
          { title: "Nous calculons tout", desc: "Notre système (avec relecture humaine) calcule le net pour chaque employé." },
          { title: "Vous validez", desc: "Vous recevez un résumé clair : coût total, détail par employé. Un clic pour valider." },
          { title: "Nous payons et déclarons", desc: "Les salaires sont versés via Fluide Pay. Les impôts sont reversés aux administrations." },
          { title: "Nous répondons aux employés", desc: "Des questions ? Les employés nous appellent, pas vous. Notre support s'en charge." },
          { title: "Rapports transmis", desc: "Recevez des rapports mensuels et tous les documents pour votre expert-comptable." }
        ]
      },
      benefits: [
        { title: "Zéro erreur", desc: "Calculs automatisés + relecture humaine. Nous détectons les erreurs en amont.", icon: ShieldCheck },
        { title: "Gain de temps", desc: "Récupérez 2-3 jours par mois. Concentrez-vous sur votre développement.", icon: Clock },
        { title: "Garantie conformité", desc: "Nous suivons l'évolution des taux. En cas d'erreur, nous couvrons les pénalités.", icon: ShieldCheck },
        { title: "Visibilité totale", desc: "Vous gardez le contrôle et voyez tout. Rien ne se fait sans votre accord.", icon: BarChart3 },
        { title: "Support employés", desc: "Vos équipes ont une équipe dédiée pour les questions de paie.", icon: Headphones },
        { title: "Forfait unique", desc: "Pas de surprise. Vous savez exactement ce que vous payez chaque mois.", icon: CreditCard }
      ],
      whoItsForLabel: "Pour Qui",
      whoItsFor: [
        { type: "PME (5-200 salariés)", why: "Vous avez dépassé Excel mais n'avez pas besoin d'une équipe paie interne." },
        { type: "Entreprises en croissance", why: "La paie se complexifie à chaque recrutement. Laissez des experts gérer." },
        { type: "Paies complexes", why: "Commissions, heures sup', primes, indemnités – nous gérons tout." },
        { type: "Entreprises ayant fait des erreurs", why: "Une erreur peut coûter plus cher qu'un an d'abonnement. Achetez la tranquillité." }
      ],
      whatsIncluded: {
        title: "Ce Qui Est Inclus",
        features: [
          "Intégration des employés (collecte données, contrats)",
          "Calcul du net (toutes cotisations)",
          "Génération des fiches de paie (PDF, Fluide Pulse)",
          "Déclarations fiscales et sociales",
          "Édition des déclarations obligatoires (DIPE, CNPS, etc.)",
          "Support employés (équipe dédiée)",
          "Bilans annuels et certificats fiscaux",
          "Intégration avec Fluide Books (optionnel)"
        ]
      },
      pricing: {
        label: "Tarifs",
        title: "Approche Tarifaire",
        model: "Simple, transparente, évolutive.",
        plans: [
          { name: "Essentiel", price: "XAF par salarié/mois", best: "Paie simple, un seul pays" },
          { name: "Professionnel", price: "XAF par salarié/mois", best: "Paie complexe, multi-pays" },
          { name: "Entreprise", price: "Devis personnalisé", best: "100+ salariés, besoins spécifiques" }
        ],
        footer: "Pas de frais de dossier. Pas d'engagement de durée. Remises volume.",
        cta: "Parler à notre équipe"
      },
      faqLabel: "Questions Fréquentes",
      faq: [
        { q: "De quelles informations avez-vous besoin ?", a: "Uniquement les heures travaillées, primes et changements. Tout le reste est géré par nos soins." },
        { q: "Comment les employés reçoivent-ils leurs fiches ?", a: "Les fiches sont disponibles instantanément dans Fluide Pulse. Elles peuvent aussi être envoyées par mail." },
        { q: "Que se passe-t-il si un employé a un problème ?", a: "Il contacte notre équipe support. Nous enquêtons et gérons la communication." },
        { q: "Est-ce que je perds le contrôle ?", a: "Pas du tout. Vous validez chaque paie avant le versement. Vous voyez tous les calculs." },
        { q: "Qu'en est-il des échéances fiscales ?", a: "Nous suivons chaque échéance dans chaque pays. Nous déclarons à l'heure." },
        { q: "Pouvez-vous gérer plusieurs pays ?", a: "Oui. Nous avons des experts paie partout en Afrique. Une équipe, une facture." }
      ],
      finalCta: {
        title: "Arrêtez de faire la paie. Commencez à développer votre entreprise.",
        button: "Obtenir une consultation gratuite",
        footer: "Nous analyserons votre paie, identifierons les risques et montrerons vos économies."
      },
      footerDisclaimer: "Fluide n'est pas un cabinet d'avocats. Les services de paie sont fournis en partenariat avec des entités agréées dans chaque pays."
    },
    pt: {
      hero: {
        headline: "Processe a folha... sem processar a folha.",
        subheadline: "Você foca no seu negócio. Nós processamos a sua folha de ponta a ponta – com precisão, conformidade e pontualidade. Um clique para aprovar. Zero stress. Garantido.",
        primaryCta: "Obter uma consulta gratuita",
        secondaryCta: "Ver como funciona"
      },
      problem: {
        label: "O Problema",
        title: "A Folha de Pagamento é uma Dor de Cabeça Mensal",
        description: "Se você processa a folha sozinho, conhece a rotina: horas de entrada manual e ansiedade constante sobre prazos fiscais.",
        risks: [
          { title: "Multas", desc: "Penalidades pesadas das autoridades fiscais por atrasos ou erros." },
          { title: "Funcionários zangados", desc: "Erros no pagamento prejudicam o moral e a retenção." },
          { title: "Auditorias", desc: "Auditorias regulatórias que desperdiçam semanas do seu tempo." }
        ],
        conclusion: "Há uma maneira melhor."
      },
      solution: {
        label: "A Solução",
        title: "A Solução: Fluide Folha Externalizada",
        subtitle: "Nós processamos a sua folha completamente. Você apenas aprova.",
        description: "Envie-nos as horas. Nós calculamos, pagamos, declaramos impostos e tratamos da conformidade. Os seus funcionários recebem a tempo, sempre."
      },
      howItWorks: {
        title: "Como Funciona",
        steps: [
          { title: "Partilhe os seus dados", desc: "Carregue as horas e bónus no nosso portal seguro. Leva 5 minutos." },
          { title: "Nós calculamos tudo", desc: "O nosso sistema (com revisão humana) calcula o valor líquido para cada funcionário." },
          { title: "Você revê e aprova", desc: "Recebe um resumo claro: custo total, detalhe por funcionário. Um clique para aprovar." },
          { title: "Nós pagamos e declaramos", desc: "Salários são enviados via Fluide Pay. Impostos são remetidos às autoridades." },
          { title: "Nós respondemos às dúvidas", desc: "Dúvidas sobre o recibo? Eles ligam para nós, não para si. O suporte trata disso." },
          { title: "Relatórios entregues", desc: "Recebe relatórios mensais e todos os documentos para o seu contabilista." }
        ]
      },
      benefits: [
        { title: "Zero erros", desc: "Cálculos automatizados + revisão especializada. Detectamos erros antes que aconteçam.", icon: ShieldCheck },
        { title: "Poupança de tempo", desc: "Recupere 2-3 dias por mês. Foque-se em fazer crescer o seu negócio.", icon: Clock },
        { title: "Garantia conformidade", desc: "Acompanhamos as taxas e leis. Se cometermos um erro, cobrimos as penalidades.", icon: ShieldCheck },
        { title: "Visibilidade total", desc: "Ainda controla as aprovações e vê tudo. Nada acontece sem a sua autorização.", icon: BarChart3 },
        { title: "Suporte funcionários", desc: "A sua equipa tem um serviço dedicado para questões salariais.", icon: Headphones },
        { title: "Taxa fixa única", desc: "Sem surpresas. Sabe exatamente o que paga cada mês.", icon: CreditCard }
      ],
      whoItsForLabel: "Para Quem É",
      whoItsFor: [
        { type: "PMEs (5-200 funcionários)", why: "Já superou as folhas de cálculo mas não precisa de uma equipa interna." },
        { type: "Empresas em crescimento", why: "A complexidade aumenta a cada contratação. Deixe especialistas tratar." },
        { type: "Pagamentos múltiplos", why: "Comissões, horas extras, bónus, subsídios – nós tratamos de tudo." },
        { type: "Empresas que já erraram", why: "Um erro pode custar mais do que um ano do nosso serviço. Compre tranquilidade." }
      ],
      whatsIncluded: {
        title: "O Que Está Incluído",
        features: [
          "Integração de funcionários (dados, contratos)",
          "Cálculo líquido (todos os descontos)",
          "Geração de recibos (PDF, Fluide Pulse)",
          "Declaração de impostos e segurança social",
          "Geração de relatórios legais (AGT, INSS, etc.)",
          "Suporte a funcionários (equipa dedicada)",
          "Resumos anuais e certificados fiscais",
          "Integração com Fluide Books (opcional)"
        ]
      },
      pricing: {
        label: "Preços",
        title: "Preços Simples por Funcionário",
        model: "Simples, transparente, escalável.",
        plans: [
          { name: "Essencial", price: "AOA por funcionário/mês", best: "Folha simples, um país" },
          { name: "Profissional", price: "AOA por funcionário/mês", best: "Folha complexa, multi-país" },
          { name: "Empresarial", price: "Orçamento personalizado", best: "100+ funcionários, necessidades específicas" }
        ],
        footer: "Sem taxas de configuração. Sem contratos de longo prazo. Descontos por volume.",
        cta: "Falar com a nossa equipa"
      },
      faqLabel: "Perguntas Frequentes",
      faq: [
        { q: "De que informação precisam todos os meses?", a: "Apenas horas trabalhadas, bónus e alterações. Tudo o resto tratamos nós." },
        { q: "Como os funcionários recebem os recibos?", a: "Os recibos estão disponíveis instantaneamente no Fluide Pulse. Também podem ser enviados por email." },
        { q: "E se um funcionário tiver um problema?", a: "Contacta a nossa equipa de suporte. Investigamos e gerimos a comunicação." },
        { q: "Perco o controlo?", a: "De forma alguma. Aprova cada processamento antes de pagarmos. Vê todos os cálculos." },
        { q: "E os prazos fiscais?", a: "Acompanhamos cada prazo em cada país. Declaramos a tempo, sempre." },
        { q: "Podem lidar com vários países?", a: "Sim. Temos especialistas em toda a África. Uma equipa, uma fatura." }
      ],
      finalCta: {
        title: "Pare de processar a folha. Comece a fazer crescer o seu negócio.",
        button: "Obter uma consulta gratuita",
        footer: "Analisaremos a sua folha atual, identificaremos riscos e mostraremos a sua poupança."
      },
      footerDisclaimer: "A Fluide não é um escritório de advocacia. Os serviços de folha de pagamento são fornecidos em parceria com entidades licenciadas em cada país."
    }
  };

  const t = content[language as keyof typeof content] || content.en;

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-brand-navy py-24 relative overflow-hidden min-h-[60vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1920&q=80" 
            alt="Accounting and payroll" 
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
                {t.problem.risks.map((risk, i) => (
                  <div key={i} className="flex gap-4 p-6 bg-brand-navy/[0.02] rounded-3xl border border-brand-navy/5">
                    <div className="w-10 h-10 bg-red-50 rounded-xl flex items-center justify-center shrink-0">
                      <AlertCircle className="w-5 h-5 text-red-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-brand-navy mb-1">{risk.title}</h4>
                      <p className="text-sm text-brand-navy/60">{risk.desc}</p>
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
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-8">
            {t.howItWorks.steps.map((step, idx) => (
              <div key={idx} className="relative">
                <div className="w-12 h-12 bg-brand-navy text-brand-cyan rounded-2xl flex items-center justify-center font-bold text-xl mb-6 shadow-lg shadow-brand-navy/10">
                  {idx + 1}
                </div>
                <h4 className="font-bold text-brand-navy mb-3 text-sm">{step.title}</h4>
                <p className="text-xs text-brand-navy/60 leading-relaxed">{step.desc}</p>
              </div>
            ))}
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

      {/* What's Included */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-brand-navy/[0.02] rounded-[40px] p-12 border border-brand-navy/5">
            <h2 className="text-3xl font-bold text-brand-navy mb-12 text-center">{t.whatsIncluded.title}</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {t.whatsIncluded.features.map((feature, i) => (
                <div key={i} className="flex items-center space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-cyan shrink-0" />
                  <span className="text-brand-navy font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block px-4 py-1 bg-brand-cyan/10 text-brand-navy font-black uppercase tracking-widest text-[10px] rounded-full mb-8">
            {t.pricing.label}
          </div>
          <h2 className="text-4xl font-bold text-brand-navy mb-4">{t.pricing.title}</h2>
          <p className="text-xl text-brand-cyan font-bold mb-12">{t.pricing.model}</p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {t.pricing.plans.map((plan, i) => (
              <div key={i} className="bg-white p-8 rounded-[32px] border border-brand-navy/5 shadow-xl shadow-brand-navy/5 hover:border-brand-cyan/30 transition-all">
                <h4 className="text-xs font-black uppercase tracking-widest text-brand-navy/40 mb-2">{plan.name}</h4>
                <div className="text-2xl font-bold text-brand-navy mb-4">{plan.price}</div>
                <p className="text-sm text-brand-navy/60">{plan.best}</p>
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

export default OutsourcePayroll;
