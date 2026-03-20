import { Users, ShieldCheck, TrendingUp, GraduationCap, Briefcase, Handshake } from 'lucide-react';
import { ConsultingData } from '../types/consulting';

export const consultingData: ConsultingData = {
  hub: {
    en: {
      title: "Expert guidance for your workforce and business.",
      subtitle: "Software alone isn't always enough. Our consulting services provide the human expertise you need to navigate complex HR, financial, and compliance challenges – so you can focus on growing your business.",
      cta: "Explore our services",
      introTitle: "Introduction",
      introText: [
        "Running a business in Africa comes with unique challenges. Labor laws change. Tax regulations evolve. You need to formalize, expand, or prepare for funding. Your team needs training. Your processes need expert review.",
        "You could figure it all out yourself. Or you could work with people who've done it before.",
        "Fluide Consulting brings decades of combined experience in African HR, finance, compliance, and business growth. We've helped businesses just like yours navigate complexity, avoid costly mistakes, and move faster."
      ],
      discoveryText: "Not sure where to start? Book a free discovery call, and we'll help you figure out what you need.",
      categoriesTitle: "Our Consulting Categories",
      whyTitle: "Why Fluide Consulting",
      benefits: [
        { title: "We Know Africa", desc: "Our consultants have deep experience across Anglophone, Francophone, and Lusophone Africa. Not generic international advice – local expertise." },
        { title: "Software + Human", desc: "We don't just advise – we implement. Our consultants know Fluide products inside out, so recommendations turn into action." },
        { title: "Practical, Not Theoretical", desc: "No ivory tower consulting. We roll up our sleeves and help you get things done." },
        { title: "Trusted by Businesses Like Yours", desc: "We've helped dozens of businesses across Africa formalize, grow, and succeed." },
        { title: "Flexible Engagement", desc: "One-off project, ongoing retainer, or hourly advice – we work the way you want." }
      ],
      processTitle: "How It Works",
      processSteps: [
        { title: "Discovery Call", desc: "We learn about your business, challenges, and goals. Free, no obligation." },
        { title: "Proposal", desc: "We outline exactly what we'll do, how long it takes, and what it costs." },
        { title: "Engagement", desc: "We work alongside your team, transferring knowledge as we go." },
        { title: "Success", desc: "You get clear outcomes, actionable plans, and lasting capability." }
      ],
      pricingTitle: "Pricing Approach",
      pricingText: "Simple, transparent, value-based.",
      pricingModels: [
        "Fixed-fee projects for well-defined engagements (HR Health Check, Payroll Setup)",
        "Daily/hourly rates for advisory and ongoing support",
        "Retainers for monthly compliance monitoring and advice",
        "Training per participant for workshops and group sessions"
      ],
      testimonials: [
        {
          quote: "Fluide Consulting helped us prepare for our first external audit. They reviewed our books, identified gaps, and worked with our team to fix everything before the auditors arrived. We passed with zero findings.",
          author: "CFO, Logistics Company, Douala"
        },
        {
          quote: "We needed to formalize our HR policies as we grew from 15 to 50 employees. The HR Health Check caught issues we didn't know existed. Now we sleep better at night.",
          author: "Founder, Tech Startup, Lagos"
        }
      ],
      faqTitle: "FAQ",
      faqs: [
        { q: "How is consulting different from your software products?", a: "Software gives you tools. Consulting gives you expertise. We help you use the tools effectively, solve complex problems, and build capability." },
        { q: "Do I need to be a Fluide client to use consulting?", a: "Not at all. Many clients come to us for consulting first, then discover our software." },
        { q: "What countries do you cover?", a: "We have consultants across West, East, Central, and Southern Africa." },
        { q: "How do I know which service I need?", a: "Book a free discovery call. We'll listen to your situation and recommend the right approach." }
      ],
      finalCta: "Ready to talk?",
      finalCtaSub: "Book a free 30-minute discovery call. No pressure. Just advice from people who've been where you are.",
      finalCtaButton: "Book a free consultation"
    },
    fr: {
      title: "Des conseils d'experts pour votre entreprise et vos collaborateurs.",
      subtitle: "Le seul logiciel ne suffit pas toujours. Nos services de conseil vous apportent l'expertise humaine nécessaire pour naviguer dans les défis complexes des RH, de la finance et de la conformité.",
      cta: "Découvrir nos services",
      introTitle: "Introduction",
      introText: [
        "Gérer une entreprise en Afrique comporte des défis uniques. Le droit du travail change. La réglementation fiscale évolue. Vous devez formaliser votre structure, vous développer ou préparer une levée de fonds.",
        "Vous pourriez tout résoudre vous-même. Ou vous pourriez travailler avec des personnes qui l'ont déjà fait.",
        "Fluide Consulting réunit des décennies d'expérience combinée dans les RH, la finance, la conformité et la croissance d'entreprise en Afrique."
      ],
      discoveryText: "Vous ne savez pas par où commencer ? Réservez un appel de découverte gratuit.",
      categoriesTitle: "Nos Catégories de Conseil",
      whyTitle: "Pourquoi Choisir Fluide Consulting",
      benefits: [
        { title: "Nous Connaissons l'Afrique", desc: "Nos consultants ont une expérience approfondie en Afrique anglophone, francophone et lusophone." },
        { title: "Logiciel + Humain", desc: "Nous ne nous contentons pas de conseiller – nous mettons en œuvre." },
        { title: "Pragmatique, Pas Théorique", desc: "Pas de conseil hors-sol. Nous retroussons nos manches et vous aidons à faire avancer les choses." },
        { title: "Approuvé par des Entreprises", desc: "Nous avons aidé des dizaines d'entreprises à travers l'Afrique à se formaliser et à réussir." },
        { title: "Engagement Flexible", desc: "Projet ponctuel, contrat de suivi ou conseil à l'heure." }
      ],
      processTitle: "Comment Ça Marche",
      processSteps: [
        { title: "Appel de Découverte", desc: "Nous apprenons à connaître votre entreprise, vos défis et vos objectifs." },
        { title: "Proposition", desc: "Nous décrivons exactement ce que nous ferons, le temps nécessaire et le coût." },
        { title: "Mise en Œuvre", desc: "Nous travaillons aux côtés de votre équipe, en transférant les connaissances." },
        { title: "Réussite", desc: "Vous obtenez des résultats clairs, des plans d'action et des capacités durables." }
      ],
      pricingTitle: "Approche Tarifaire",
      pricingText: "Simple, transparente, basée sur la valeur.",
      pricingModels: [
        "Forfaits pour des missions bien définies",
        "Tarifs journaliers/horaires pour le conseil",
        "Contrats de suivi pour la veille mensuelle",
        "Tarifs par participant pour les formations"
      ],
      faqTitle: "FAQ",
      faqs: [
        { q: "Quelle est la différence entre le conseil et vos produits logiciels ?", a: "Les logiciels vous donnent des outils. Le conseil vous apporte de l'expertise." },
        { q: "Dois-je être client de Fluide pour utiliser le conseil ?", a: "Pas du tout. De nombreux clients viennent d'abord pour le conseil." },
        { q: "Quels pays couvrez-vous ?", a: "Nous avons des consultants en Afrique de l'Ouest, de l'Est, Centrale et Australe." },
        { q: "Comment savoir de quel service j'ai besoin ?", a: "Réservez un appel de découverte gratuit." }
      ],
      finalCta: "Prêt à échanger ?",
      finalCtaSub: "Réservez un appel de découverte gratuit de 30 minutes.",
      finalCtaButton: "Réserver une consultation gratuite",
      testimonials: [
        {
          quote: "Fluide Consulting nous a aidés à préparer notre premier audit externe. Ils ont examiné nos livres, identifié les lacunes et travaillé avec notre équipe pour tout corriger avant l'arrivée des auditeurs. Nous avons réussi avec zéro observation.",
          author: "CFO, Société de Logistique, Douala"
        },
        {
          quote: "Nous devions formaliser nos politiques RH alors que nous passions de 15 à 50 employés. Le bilan de santé RH a détecté des problèmes dont nous ignorions l'existence. Maintenant, nous dormons mieux.",
          author: "Fondateur, Startup Tech, Lagos"
        }
      ]
    },
    pt: {
      title: "Orientação especializada para sua força de trabalho e negócio.",
      subtitle: "O software sozinho nem sempre é suficiente. Nossos serviços de consultoria fornecem a expertise humana necessária para navegar pelos desafios complexos.",
      cta: "Explorar nossos serviços",
      introTitle: "Introdução",
      introText: [
        "Gerir um negócio em África apresenta desafios únicos. As leis trabalhistas mudam. As regulamentações fiscais evoluem. Precisa de formalizar, expandir ou preparar-se para financiamento.",
        "Você poderia resolver tudo sozinho. Ou poderia trabalhar com pessoas que já fizeram isso antes.",
        "A Fluide Consulting reúne décadas de experiência combinada em RH, finanças, conformidade e crescimento de negócios em África."
      ],
      discoveryText: "Não sabe por onde começar? Marque uma reunião de descoberta gratuita.",
      categoriesTitle: "Nossas Categorias de Consultoria",
      whyTitle: "Porquê Escolher a Fluide Consulting",
      benefits: [
        { title: "Conhecemos África", desc: "Nossos consultores têm vasta experiência em África anglófona, francófona e lusófona." },
        { title: "Software + Humano", desc: "Não apenas aconselhamos – implementamos. Nossos consultores conhecem profundamente os produtos." },
        { title: "Prático, Não Teórico", desc: "Sem consultoria de torre de marfim. Arregaçamos as mangas e ajudamos a fazer as coisas acontecerem." },
        { title: "Confiado por Empresas", desc: "Ajudamos dezenas de empresas em toda África a formalizar, crescer e ter sucesso." },
        { title: "Engajamento Flexível", desc: "Projeto único, retainer contínuo ou consultoria por hora." }
      ],
      processTitle: "Como Funciona",
      processSteps: [
        { title: "Reunião de Descoberta", desc: "Conhecemos seu negócio, desafios e objetivos. Gratuito, sem compromisso." },
        { title: "Proposta", desc: "Detalhamos exatamente o que faremos, o tempo necessário e o custo." },
        { title: "Implementação", desc: "Trabalhamos junto com sua equipa, transferindo conhecimento." },
        { title: "Sucesso", desc: "Você obtém resultados claros, planos acionáveis e capacidade duradoura." }
      ],
      pricingTitle: "Abordagem de Preços",
      pricingText: "Simples, transparente, baseada em valor.",
      pricingModels: [
        "Projetos com preço fixo para trabalhos bem definidos",
        "Taxas diárias/horárias para consultoria",
        "Retainers para monitoramento mensal",
        "Preço por participante para workshops"
      ],
      faqTitle: "FAQ",
      faqs: [
        { q: "Qual a diferença entre consultoria e seus produtos de software ?", a: "O software fornece ferramentas. A consultoria fornece expertise." },
        { q: "Preciso ser cliente da Fluide para usar a consultoria ?", a: "De forma alguma. Muitos clientes vêm primeiro para consultoria." },
        { q: "Que países cobrem ?", a: "Temos consultores em toda África Ocidental, Oriental, Central e Austral." },
        { q: "Como sei de qual serviço preciso ?", a: "Marque uma reunião de descoberta gratuita." }
      ],
      finalCta: "Pronto para conversar ?",
      finalCtaSub: "Marque uma reunião de descoberta gratuita de 30 minutos.",
      finalCtaButton: "Marcar consulta gratuita",
      testimonials: [
        {
          quote: "A Fluide Consulting ajudou-nos a preparar a nossa primeira auditoria externa. Revisaram os nossos livros, identificaram lacunas e trabalharam com a nossa equipa para corrigir tudo antes da chegada dos auditores. Passámos com zero observações.",
          author: "CFO, Empresa de Logística, Douala"
        },
        {
          quote: "Precisávamos de formalizar as nossas políticas de RH à medida que crescíamos de 15 para 50 funcionários. O Check-up de RH detetou problemas que não sabíamos que existiam. Agora dormimos melhor à noite.",
          author: "Fundador, Tech Startup, Lagos"
        }
      ]
    }
  },
  categories: {
    'hr-payroll': {
      icon: Users,
      en: { title: "HR & Payroll Consulting", subtitle: "Strategic HR management and payroll optimization.", desc: "We help you build a compliant, motivated workforce while ensuring your payroll processes are bulletproof." },
      fr: { title: "Conseil RH & Paie", subtitle: "Gestion stratégique des RH et optimisation de la paie.", desc: "Nous vous aidons à bâtir une main-d'œuvre conforme et motivée tout en garantissant des processus de paie irréprochables." },
      pt: { title: "Consultoria de RH e Folha", subtitle: "Gestão estratégica de RH e otimização da folha.", desc: "Ajudamos você a construir uma força de trabalho motivada e em conformidade." },
      services: [
        { id: 'hr-health-check', en: "HR Health Check", fr: "Bilan de santé RH", pt: "Check-up de RH" },
        { id: 'payroll-setup', en: "Payroll Setup & Migration", fr: "Mise en place & Migration de la paie", pt: "Configuração & Migração de Folha" }
      ]
    },
    'financial-tax': {
      icon: ShieldCheck,
      en: { title: "Financial & Tax Advisory", subtitle: "Expert financial guidance and tax planning.", desc: "Navigate local tax laws and optimize your financial health with our expert advisors." },
      fr: { title: "Conseil Fiscal & Financier", subtitle: "Conseils financiers d'experts et planification fiscale.", desc: "Naviguez dans les lois fiscales locales et optimisez votre santé financière." },
      pt: { title: "Consultoria Financeira e Fiscal", subtitle: "Orientação financeira especializada e planeamento fiscal.", desc: "Navegue pelas leis fiscais locais e otimize sua saúde financeira." },
      services: [
        { id: 'financial-health', en: "Financial Health Assessment", fr: "Évaluation de la santé financière", pt: "Avaliação de Saúde Financeira" },
        { id: 'tax-advisory', en: "Tax Advisory", fr: "Conseil fiscal", pt: "Consultoria Fiscal" }
      ]
    },
    'business-growth': {
      icon: TrendingUp,
      en: { title: "Business Growth", subtitle: "Strategic planning and operational support.", desc: "Scale your business across borders with confidence and expert support." },
      fr: { title: "Croissance de l'Entreprise", subtitle: "Planification stratégique et soutien opérationnel.", desc: "Développez votre entreprise au-delà des frontières avec confiance." },
      pt: { title: "Crescimento do Negócio", subtitle: "Planeamento estratégico e apoio operacional.", desc: "Escala seu negócio além-fronteiras com confiança." },
      services: [
        { id: 'formalization', en: "Business Formalization", fr: "Formalisation d'entreprise", pt: "Formalização de Negócio" },
        { id: 'growth-planning', en: "Growth Planning", fr: "Planification de la croissance", pt: "Planeamento de Crescimento" }
      ]
    },
    'training': {
      icon: GraduationCap,
      en: { title: "Training", subtitle: "Empower your team with modern skills.", desc: "Invest in your people to build lasting organizational capability." },
      fr: { title: "Formation", subtitle: "Donnez à votre équipe des compétences modernes.", desc: "Investissez dans vos collaborateurs pour bâtir une capacité organisationnelle durable." },
      pt: { title: "Formação", subtitle: "Capacite a sua equipa com competências modernas.", desc: "Invista em seu pessoal para construir capacidade organizacional duradoura." },
      services: [
        { id: 'manager-training', en: "Manager Training", fr: "Formation des managers", pt: "Formação de Gestores" },
        { id: 'financial-literacy', en: "Financial Literacy for Employees", fr: "Éducation financière des employés", pt: "Literacia Financeira para Funcionários" }
      ]
    },
    'specialized': {
      icon: Briefcase,
      en: { title: "Specialized Services", subtitle: "Tailored solutions for unique industries.", desc: "Deep expertise for NGOs, construction, and agricultural workforces." },
      fr: { title: "Services Spécialisés", subtitle: "Solutions sur mesure pour des industries uniques.", desc: "Expertise approfondie pour les ONG, la construction et l'agriculture." },
      pt: { title: "Serviços Especializados", subtitle: "Soluções personalizadas para indústrias únicas.", desc: "Expertise profunda para ONGs, construção e agricultura." },
      services: [
        { id: 'ngo-hr', en: "NGO HR Setup", fr: "Configuration RH pour ONG", pt: "Configuração de RH para ONGs" },
        { id: 'construction-compliance', en: "Construction Workforce Compliance", fr: "Conformité main-d'œuvre construction", pt: "Conformidade na Construção" }
      ]
    },
    'partners': {
      icon: Handshake,
      en: { title: "Partner Programs", subtitle: "Collaborate with Fluide.", desc: "Expand your service offerings and reach more clients with our partner programs." },
      fr: { title: "Programmes Partenaires", subtitle: "Collaborez avec Fluide.", desc: "Élargissez vos offres de services avec nos programmes partenaires." },
      pt: { title: "Programas de Parceiros", subtitle: "Colabore com a Fluide.", desc: "Expanda suas ofertas de serviços com nossos programas de parceiros." },
      services: [
        { id: 'accountant-partner', en: "Accountant Partnership", fr: "Partenariat comptable", pt: "Parceria com Contabilistas" },
        { id: 'implementation-partner', en: "Implementation Partner Program", fr: "Programme partenaire d'implémentation", pt: "Programa de Parceiro de Implementação" }
      ]
    }
  },
  services: {
    'hr-health-check': {
      icon: Users,
      productLink: { en: "Explore Fluide HR", fr: "Explorer Fluide HR", pt: "Explorar Fluide HR", href: "/products/hr" },
      en: {
        title: "HR Health Check",
        subtitle: "Know your HR risks before they become problems.",
        desc: "A comprehensive review of your HR practices, policies, and compliance – with clear recommendations and a prioritized action plan.",
        problemTitle: "The Problem: Hidden HR Risks",
        problemText: "Most SMEs discover HR problems only when an employee complains, a labor inspector visits, or an audit reveals issues. By then, it's too late – penalties, legal fees, and damaged reputation.",
        solutionTitle: "Our Solution: The Fluide HR Health Check",
        reviewAreas: [
          { title: "Employment Contracts", desc: "Compliance with local labor law, required clauses, signatures, dates" },
          { title: "Payroll Records", desc: "Calculation accuracy, overtime, deductions, leave payments" },
          { title: "Tax & Social Security", desc: "CNPS/PAYE/NSSF filings, payment timeliness, contribution calculations" },
          { title: "Leave Management", desc: "Accrual policies, approval records, payout calculations" }
        ],
        processSteps: [
          { title: "Discovery", desc: "We learn about your business and share documents securely." },
          { title: "Review", desc: "Our experts review everything against local requirements." },
          { title: "Report", desc: "You receive a comprehensive report with risk assessment." },
          { title: "Implementation", desc: "We help you implement recommendations (optional)." }
        ],
        pricingTitle: "Pricing",
        pricingModels: [
          "1-10 employees: 350,000 XAF",
          "11-30 employees: 650,000 XAF",
          "31-75 employees: 950,000 XAF",
          "76-150 employees: 1,500,000 XAF"
        ]
      },
      fr: {
        title: "Bilan de santé RH",
        subtitle: "Connaissez vos risques RH avant qu'ils ne deviennent des problèmes.",
        desc: "Un examen complet de vos pratiques, politiques et conformité RH.",
        problemTitle: "Le problème : Risques RH cachés",
        problemText: "La plupart des PME ne découvrent les problèmes RH que lorsqu'un employé se plaint ou qu'un inspecteur du travail passe.",
        solutionTitle: "Notre solution : Le bilan de santé RH Fluide",
        reviewAreas: [
          { title: "Contrats de travail", desc: "Conformité au droit du travail local, clauses requises" },
          { title: "Registres de paie", desc: "Exactitude des calculs, heures supplémentaires, déductions" },
          { title: "Fiscalité & Sécurité Sociale", desc: "Déclarations CNPS/DIPE, ponctualité des paiements" },
          { title: "Gestion des congés", desc: "Politiques d'acquisition, registres d'approbation" }
        ],
        processSteps: [
          { title: "Découverte", desc: "Nous apprenons à connaître votre entreprise." },
          { title: "Examen", desc: "Nos experts examinent tout par rapport aux exigences locales." },
          { title: "Rapport", desc: "Vous recevez un rapport complet avec évaluation des risques." },
          { title: "Mise en œuvre", desc: "Nous vous aidons à mettre en œuvre les recommandations." }
        ],
        pricingTitle: "Tarification",
        pricingModels: [
          "1-10 employés : 350 000 XAF",
          "11-30 employés : 650 000 XAF",
          "31-75 employés : 950 000 XAF",
          "76-150 employés : 1 500 000 XAF"
        ]
      },
      pt: {
        title: "Check-up de RH",
        subtitle: "Conheça seus riscos de RH antes que se tornem problemas.",
        desc: "Uma revisão abrangente de suas práticas, políticas e conformidade de RH.",
        problemTitle: "O Problema: Riscos de RH Ocultos",
        problemText: "A maioria das PMEs descobre problemas de RH apenas quando um funcionário reclama ou um inspetor visita.",
        solutionTitle: "Nossa Solução: O Check-up de RH Fluide",
        reviewAreas: [
          { title: "Contratos de Trabalho", desc: "Conformidade com a lei trabalhista local" },
          { title: "Registros de Folha", desc: "Precisão dos cálculos, horas extras" },
          { title: "Impostos & Segurança Social", desc: "Arquivamentos INSS/AGT, pontualidade" },
          { title: "Gestão de Férias", desc: "Políticas de acúmulo, registros" }
        ],
        processSteps: [
          { title: "Descoberta", desc: "Conhecemos seu negócio e compartilhamos documentos." },
          { title: "Revisão", desc: "Nossos especialistas revisam tudo." },
          { title: "Relatório", desc: "Você recebe um relatório abrangente." },
          { title: "Implementação", desc: "Ajudamos você a implementar (opcional)." }
        ],
        pricingTitle: "Preços",
        pricingModels: [
          "1-10 funcionários: 350.000 XAF",
          "11-30 funcionários: 650.000 XAF",
          "31-75 funcionários: 950.000 XAF",
          "76-150 funcionários: 1.500.000 XAF"
        ]
      }
    },
    'payroll-setup': {
      icon: Briefcase,
      productLink: { en: "Explore Fluide Pay", fr: "Explorer Fluide Pay", pt: "Explorar Fluide Pay", href: "/products/pay" },
      en: {
        title: "Payroll Setup & Migration",
        subtitle: "Seamlessly transition to a modern payroll system.",
        desc: "Expert assistance in configuring your payroll, migrating historical data, and ensuring a smooth go-live.",
        problemTitle: "The Problem: Complex Data Migration",
        problemText: "Switching payroll systems is daunting. Data errors during migration can lead to incorrect payments and compliance issues.",
        solutionTitle: "Our Solution: Expert Migration Support",
        reviewAreas: [
          { title: "Data Mapping", desc: "Ensuring historical data matches new system requirements" },
          { title: "Parallel Runs", desc: "Validating new system outputs against old records" },
          { title: "Compliance Check", desc: "Verifying tax and social security configurations" }
        ],
        processSteps: [
          { title: "Assessment", desc: "Reviewing current data quality and structure." },
          { title: "Configuration", desc: "Setting up the Fluide Pay environment." },
          { title: "Migration", desc: "Importing historical records and employee data." },
          { title: "Validation", desc: "Final checks and parallel run verification." }
        ],
        pricingTitle: "Pricing",
        pricingModels: ["Custom quote based on employee count and data complexity"]
      },
      fr: {
        title: "Mise en place & Migration de la paie",
        subtitle: "Transitionnez en douceur vers un système de paie moderne.",
        desc: "Assistance d'experts pour configurer votre paie et migrer vos données historiques.",
        problemTitle: "Le problème : Migration de données complexe",
        problemText: "Changer de système de paie est intimidant. Les erreurs de données peuvent entraîner des problèmes de conformité.",
        solutionTitle: "Notre solution : Support expert à la migration",
        reviewAreas: [
          { title: "Mappage des données", desc: "S'assurer que les données historiques correspondent" },
          { title: "Tests parallèles", desc: "Valider les sorties du nouveau système" }
        ],
        processSteps: [
          { title: "Évaluation", desc: "Examen de la qualité des données actuelles." },
          { title: "Configuration", desc: "Mise en place de l'environnement Fluide Pay." }
        ],
        pricingTitle: "Tarification",
        pricingModels: ["Devis personnalisé selon l'effectif"]
      },
      pt: {
        title: "Configuração & Migração de Folha",
        subtitle: "Transição perfeita para um sistema de folha moderno.",
        desc: "Assistência especializada na configuração da sua folha e migração de dados.",
        problemTitle: "O Problema: Migração de Dados Complexa",
        problemText: "Mudar de sistema de folha é um desafio. Erros de dados podem causar problemas.",
        solutionTitle: "Nossa Solução: Suporte Especializado",
        reviewAreas: [
          { title: "Mapeamento de Dados", desc: "Garantir que os dados históricos coincidam" },
          { title: "Testes Paralelos", desc: "Validar os resultados do novo sistema" }
        ],
        processSteps: [
          { title: "Avaliação", desc: "Revisão da qualidade dos dados atuais." },
          { title: "Configuração", desc: "Configuração do ambiente Fluide Pay." }
        ],
        pricingTitle: "Preços",
        pricingModels: ["Orçamento personalizado"]
      }
    },
    'financial-health': {
      icon: ShieldCheck,
      productLink: { en: "Explore Fluide Books", fr: "Explorer Fluide Books", pt: "Explorar Fluide Books", href: "/products/books" },
      en: {
        title: "Financial Health Assessment",
        subtitle: "Get a clear picture of your business's financial standing.",
        desc: "A deep dive into your financial records to identify strengths, weaknesses, and growth opportunities.",
        problemTitle: "The Problem: Financial Blind Spots",
        problemText: "Many businesses operate without a clear understanding of their cash flow, margins, or tax liabilities until it's too late.",
        solutionTitle: "Our Solution: Comprehensive Financial Audit",
        reviewAreas: [
          { title: "Cash Flow Analysis", desc: "Tracking inflows and outflows to ensure liquidity" },
          { title: "Profitability Review", desc: "Analyzing margins across products and services" },
          { title: "Balance Sheet Audit", desc: "Verifying assets, liabilities, and equity accuracy" }
        ],
        processSteps: [
          { title: "Data Collection", desc: "Gathering financial statements and records." },
          { title: "Analysis", desc: "In-depth review of financial performance metrics." },
          { title: "Reporting", desc: "Detailed findings and strategic recommendations." }
        ],
        pricingTitle: "Pricing",
        pricingModels: ["Fixed fee based on business size and transaction volume"]
      },
      fr: {
        title: "Évaluation de la santé financière",
        subtitle: "Obtenez une image claire de la situation financière de votre entreprise.",
        desc: "Une analyse approfondie de vos dossiers financiers pour identifier les opportunités.",
        problemTitle: "Le problème : Zones d'ombre financières",
        problemText: "Beaucoup d'entreprises opèrent sans comprendre leur flux de trésorerie.",
        solutionTitle: "Notre solution : Audit financier complet",
        reviewAreas: [
          { title: "Analyse du flux de trésorerie", desc: "Suivi des entrées et sorties" },
          { title: "Revue de rentabilité", desc: "Analyse des marges" }
        ],
        processSteps: [
          { title: "Collecte", desc: "Rassemblement des états financiers." },
          { title: "Analyse", desc: "Examen approfondi des indicateurs." }
        ],
        pricingTitle: "Tarification",
        pricingModels: ["Forfait basé sur la taille de l'entreprise"]
      },
      pt: {
        title: "Avaliação de Saúde Financeira",
        subtitle: "Obtenha uma imagem clara da situação financeira do seu negócio.",
        desc: "Um mergulho profundo nos seus registos financeiros para identificar pontos fortes.",
        problemTitle: "O Problema: Pontos Cegos Financeiros",
        problemText: "Muitos negócios operam sem uma compreensão clara do fluxo de caixa.",
        solutionTitle: "Nossa Solução: Auditoria Financeira Abrangente",
        reviewAreas: [
          { title: "Análise de Fluxo de Caixa", desc: "Acompanhamento de entradas e saídas" },
          { title: "Revisão de Rentabilidade", desc: "Análise de margens" }
        ],
        processSteps: [
          { title: "Recolha", desc: "Reunião de demonstrações financeiras." },
          { title: "Análise", desc: "Revisão profunda de métricas." }
        ],
        pricingTitle: "Preços",
        pricingModels: ["Taxa fixa baseada no tamanho do negócio"]
      }
    },
    'tax-advisory': {
      icon: ShieldCheck,
      productLink: { en: "Explore Fluide Books", fr: "Explorer Fluide Books", pt: "Explorar Fluide Books", href: "/products/books" },
      en: {
        title: "Tax Advisory",
        subtitle: "Navigate complex tax regulations with confidence.",
        desc: "Expert guidance on local tax laws, planning, and compliance to ensure your business remains in good standing.",
        problemTitle: "The Problem: Tax Compliance Complexity",
        problemText: "Tax laws in Africa are complex and frequently change. Non-compliance leads to heavy penalties and legal risks.",
        solutionTitle: "Our Solution: Strategic Tax Planning",
        reviewAreas: [
          { title: "Compliance Review", desc: "Ensuring all tax filings are accurate and timely" },
          { title: "Tax Optimization", desc: "Identifying legal ways to minimize tax liability" },
          { title: "Audit Support", desc: "Representing your business during tax authority audits" }
        ],
        processSteps: [
          { title: "Consultation", desc: "Understanding your business structure and tax history." },
          { title: "Strategy", desc: "Developing a custom tax planning roadmap." },
          { title: "Implementation", desc: "Ongoing support for filings and compliance." }
        ],
        pricingTitle: "Pricing",
        pricingModels: ["Monthly retainer or project-based fees"]
      },
      fr: {
        title: "Conseil fiscal",
        subtitle: "Naviguez dans les réglementations fiscales avec confiance.",
        desc: "Conseils d'experts sur les lois fiscales locales et la planification.",
        problemTitle: "Le problème : Complexité de la conformité fiscale",
        problemText: "Les lois fiscales en Afrique sont complexes et changent fréquemment.",
        solutionTitle: "Notre solution : Planification fiscale stratégique",
        reviewAreas: [
          { title: "Revue de conformité", desc: "S'assurer que les déclarations sont exactes" },
          { title: "Optimisation fiscale", desc: "Identifier les moyens légaux de réduire la charge" }
        ],
        processSteps: [
          { title: "Consultation", desc: "Compréhension de votre structure." },
          { title: "Stratégie", desc: "Développement d'une feuille de route." }
        ],
        pricingTitle: "Tarification",
        pricingModels: ["Abonnement mensuel ou honoraires au projet"]
      },
      pt: {
        title: "Consultoria Fiscal",
        subtitle: "Navegue por regulamentações fiscais complexas com confiança.",
        desc: "Orientação especializada sobre leis fiscais locais e planeamento.",
        problemTitle: "O Problema: Complexidade da Conformidade Fiscal",
        problemText: "As leis fiscais em África são complexas e mudam frequentemente.",
        solutionTitle: "Nossa Solução: Planeamento Fiscal Estratégico",
        reviewAreas: [
          { title: "Revisão de Conformidade", desc: "Garantir que as declarações sejam precisas" },
          { title: "Otimização Fiscal", desc: "Identificar formas legais de minimizar a carga" }
        ],
        processSteps: [
          { title: "Consulta", desc: "Compreensão da estrutura do negócio." },
          { title: "Estratégia", desc: "Desenvolvimento de um roteiro." }
        ],
        pricingTitle: "Preços",
        pricingModels: ["Retainer mensal ou taxas por projeto"]
      }
    },
    'formalization': {
      icon: TrendingUp,
      productLink: { en: "Explore Fluide Lite", fr: "Explorer Fluide Lite", pt: "Explorar Fluide Lite", href: "/products/lite" },
      en: {
        title: "Business Formalization",
        subtitle: "Transition from informal to formal with ease.",
        desc: "Step-by-step support for business registration, licensing, and setting up formal structures.",
        problemTitle: "The Problem: Barriers to Growth",
        problemText: "Informal businesses struggle to access credit, win contracts, or attract top talent.",
        solutionTitle: "Our Solution: End-to-End Formalization",
        reviewAreas: [
          { title: "Registration", desc: "Handling company registration with local authorities" },
          { title: "Licensing", desc: "Identifying and securing required industry licenses" },
          { title: "Structure Setup", desc: "Establishing formal governance and operational processes" }
        ],
        processSteps: [
          { title: "Strategy", desc: "Determining the best legal structure for your goals." },
          { title: "Documentation", desc: "Preparing all required legal and regulatory filings." },
          { title: "Filing", desc: "Managing the submission process with authorities." }
        ],
        pricingTitle: "Pricing",
        pricingModels: ["Fixed fee per registration package"]
      },
      fr: {
        title: "Formalisation d'entreprise",
        subtitle: "Passez de l'informel au formel en toute simplicité.",
        desc: "Soutien étape par étape pour l'enregistrement et les licences.",
        problemTitle: "Le problème : Barrières à la croissance",
        problemText: "Les entreprises informelles ont du mal à accéder au crédit.",
        solutionTitle: "Notre solution : Formalisation de bout en bout",
        reviewAreas: [
          { title: "Enregistrement", desc: "Gestion de l'enregistrement auprès des autorités" },
          { title: "Licences", desc: "Identification des licences requises" }
        ],
        processSteps: [
          { title: "Stratégie", desc: "Détermination de la structure juridique." },
          { title: "Documentation", desc: "Préparation des dossiers." }
        ],
        pricingTitle: "Tarification",
        pricingModels: ["Forfait par pack d'enregistrement"]
      },
      pt: {
        title: "Formalização de Negócio",
        subtitle: "Transição do informal para o formal com facilidade.",
        desc: "Suporte passo a passo para registo comercial e licenciamento.",
        problemTitle: "O Problema: Barreiras ao Crescimento",
        problemText: "Negócios informais têm dificuldade em aceder a crédito.",
        solutionTitle: "Nossa Solução: Formalização Ponta a Ponta",
        reviewAreas: [
          { title: "Registo", desc: "Gestão do registo com as autoridades locais" },
          { title: "Licenciamento", desc: "Identificação de licenças necessárias" }
        ],
        processSteps: [
          { title: "Estratégia", desc: "Determinação da melhor estrutura legal." },
          { title: "Documentação", desc: "Preparação de arquivos legais." }
        ],
        pricingTitle: "Preços",
        pricingModels: ["Taxa fixa por pacote de registo"]
      }
    },
    'growth-planning': {
      icon: TrendingUp,
      productLink: { en: "Explore Fluide Pulse", fr: "Explorer Fluide Pulse", pt: "Explorar Fluide Pulse", href: "/products/pulse" },
      en: {
        title: "Growth Planning",
        subtitle: "Scale your business with a clear roadmap.",
        desc: "Strategic advisory to help you expand into new markets, launch new products, or optimize operations for scale.",
        problemTitle: "The Problem: Scaling Pains",
        problemText: "Rapid growth without a plan leads to operational chaos, cash flow crises, and cultural dilution.",
        solutionTitle: "Our Solution: Strategic Growth Framework",
        reviewAreas: [
          { title: "Market Analysis", desc: "Identifying and evaluating new expansion opportunities" },
          { title: "Operational Audit", desc: "Ensuring systems and processes can handle increased scale" },
          { title: "Financial Modeling", desc: "Projecting capital needs and ROI for growth initiatives" }
        ],
        processSteps: [
          { title: "Visioning", desc: "Defining long-term goals and scaling objectives." },
          { title: "Roadmapping", desc: "Creating a detailed execution plan with milestones." },
          { title: "Monitoring", desc: "Ongoing support to track progress and adjust strategy." }
        ],
        pricingTitle: "Pricing",
        pricingModels: ["Project-based or strategic advisory retainer"]
      },
      fr: {
        title: "Planification de la croissance",
        subtitle: "Développez votre entreprise avec une feuille de route claire.",
        desc: "Conseil stratégique pour vous aider à vous étendre sur de nouveaux marchés.",
        problemTitle: "Le problème : Douleurs de croissance",
        problemText: "Une croissance rapide sans plan mène au chaos opérationnel.",
        solutionTitle: "Notre solution : Cadre de croissance stratégique",
        reviewAreas: [
          { title: "Analyse de marché", desc: "Identification des opportunités d'expansion" },
          { title: "Audit opérationnel", desc: "S'assurer que les systèmes peuvent suivre" }
        ],
        processSteps: [
          { title: "Vision", desc: "Définition des objectifs à long terme." },
          { title: "Feuille de route", desc: "Création d'un plan d'exécution détaillé." }
        ],
        pricingTitle: "Tarification",
        pricingModels: ["Au projet ou abonnement de conseil stratégique"]
      },
      pt: {
        title: "Planeamento de Crescimento",
        subtitle: "Escala o seu negócio com um roteiro claro.",
        desc: "Consultoria estratégica para ajudar na expansão para novos mercados.",
        problemTitle: "O Problema: Dores de Crescimento",
        problemText: "Crescimento rápido sem um plano leva ao caos operacional.",
        solutionTitle: "Nossa Solução: Estrutura de Crescimento Estratégico",
        reviewAreas: [
          { title: "Análise de Mercado", desc: "Identificação de oportunidades de expansão" },
          { title: "Auditoria Operacional", desc: "Garantir que os sistemas suportem a escala" }
        ],
        processSteps: [
          { title: "Visão", desc: "Definição de metas de longo prazo." },
          { title: "Roteiro", desc: "Criação de um plano de execução detalhado." }
        ],
        pricingTitle: "Preços",
        pricingModels: ["Baseado em projeto ou retainer estratégico"]
      }
    },
    'manager-training': {
      icon: GraduationCap,
      productLink: { en: "Explore Fluide HR", fr: "Explorer Fluide HR", pt: "Explorar Fluide HR", href: "/products/hr" },
      en: {
        title: "Manager Training",
        subtitle: "Equip your leaders with the tools to manage effectively.",
        desc: "Practical training programs designed to help managers lead teams, handle conflicts, and drive performance.",
        problemTitle: "The Problem: The Accidental Manager",
        problemText: "Many great individual contributors are promoted to management without the skills needed to lead people.",
        solutionTitle: "Our Solution: Practical Leadership Workshops",
        reviewAreas: [
          { title: "People Management", desc: "Delegation, motivation, and performance feedback" },
          { title: "Conflict Resolution", desc: "Handling team disputes and difficult conversations" },
          { title: "Compliance for Managers", desc: "Understanding labor laws and HR policies" }
        ],
        processSteps: [
          { title: "Assessment", desc: "Identifying specific leadership skill gaps." },
          { title: "Curriculum", desc: "Customizing training modules for your context." },
          { title: "Delivery", desc: "Interactive workshops and coaching sessions." }
        ],
        pricingTitle: "Pricing",
        pricingModels: ["Per participant or group workshop fee"]
      },
      fr: {
        title: "Formation des managers",
        subtitle: "Équipez vos leaders des outils pour gérer efficacement.",
        desc: "Programmes de formation pratique pour aider les managers à diriger.",
        problemTitle: "Le problème : Le manager accidentel",
        problemText: "Beaucoup de contributeurs sont promus sans les compétences de leadership.",
        solutionTitle: "Notre solution : Ateliers de leadership pratique",
        reviewAreas: [
          { title: "Gestion d'équipe", desc: "Délégation, motivation et feedback" },
          { title: "Résolution de conflits", desc: "Gérer les disputes et conversations difficiles" }
        ],
        processSteps: [
          { title: "Évaluation", desc: "Identification des lacunes de compétences." },
          { title: "Ateliers", desc: "Sessions interactives et coaching." }
        ],
        pricingTitle: "Tarification",
        pricingModels: ["Par participant ou forfait groupe"]
      },
      pt: {
        title: "Formação de Gestores",
        subtitle: "Equipe os seus líderes com as ferramentas para gerir eficazmente.",
        desc: "Programas de formação prática para ajudar os gestores a liderar.",
        problemTitle: "O Problema: O Gestor Acidental",
        problemText: "Muitos colaboradores são promovidos sem competências de liderança.",
        solutionTitle: "Nossa Solução: Workshops de Liderança Prática",
        reviewAreas: [
          { title: "Gestão de Pessoas", desc: "Delegação, motivação e feedback" },
          { title: "Resolução de Conflitos", desc: "Lidar com disputas e conversas difíceis" }
        ],
        processSteps: [
          { title: "Avaliação", desc: "Identificação de lacunas de competências." },
          { title: "Workshops", desc: "Sessões interativas e coaching." }
        ],
        pricingTitle: "Preços",
        pricingModels: ["Por participante ou taxa de workshop em grupo"]
      }
    },
    'financial-literacy': {
      icon: GraduationCap,
      productLink: { en: "Explore Fluide Pay", fr: "Explorer Fluide Pay", pt: "Explorar Fluide Pay", href: "/products/pay" },
      en: {
        title: "Financial Literacy for Employees",
        subtitle: "Improve employee wellbeing through financial education.",
        desc: "Workshops to help your team manage their money, understand their payslips, and plan for the future.",
        problemTitle: "The Problem: Financial Stress",
        problemText: "Employees stressed about money are less productive and more likely to leave. Many lack basic financial planning skills.",
        solutionTitle: "Our Solution: Employee Wellness Workshops",
        reviewAreas: [
          { title: "Budgeting", desc: "Practical tools for managing monthly income" },
          { title: "Savings & Debt", desc: "Strategies for building safety nets and managing loans" },
          { title: "Payslip Education", desc: "Understanding taxes, deductions, and benefits" }
        ],
        processSteps: [
          { title: "Planning", desc: "Defining workshop goals and employee needs." },
          { title: "Delivery", desc: "Engaging, easy-to-understand financial sessions." },
          { title: "Resources", desc: "Providing tools and templates for ongoing use." }
        ],
        pricingTitle: "Pricing",
        pricingModels: ["Flat fee per workshop session"]
      },
      fr: {
        title: "Éducation financière des employés",
        subtitle: "Améliorez le bien-être des employés par l'éducation financière.",
        desc: "Ateliers pour aider votre équipe à gérer son argent.",
        problemTitle: "Le problème : Stress financier",
        problemText: "Les employés stressés par l'argent sont moins productifs.",
        solutionTitle: "Notre solution : Ateliers de bien-être financier",
        reviewAreas: [
          { title: "Budget", desc: "Outils pratiques pour gérer le revenu mensuel" },
          { title: "Éducation fiche de paie", desc: "Comprendre les taxes et déductions" }
        ],
        processSteps: [
          { title: "Planification", desc: "Définition des besoins des employés." },
          { title: "Sessions", desc: "Ateliers engageants et simples." }
        ],
        pricingTitle: "Tarification",
        pricingModels: ["Forfait par session d'atelier"]
      },
      pt: {
        title: "Literacia Financeira para Funcionários",
        subtitle: "Melhore o bem-estar dos funcionários através da educação financeira.",
        desc: "Workshops para ajudar a sua equipa a gerir o seu dinheiro.",
        problemTitle: "O Problema: Stress Financeiro",
        problemText: "Funcionários stressados com dinheiro são menos produtivos.",
        solutionTitle: "Nossa Solução: Workshops de Bem-estar Financeiro",
        reviewAreas: [
          { title: "Orçamento", desc: "Ferramentas práticas para gerir o rendimento" },
          { title: "Educação do Recibo", desc: "Compreender impostos e descontos" }
        ],
        processSteps: [
          { title: "Planeamento", desc: "Definição das necessidades dos funcionários." },
          { title: "Sessões", desc: "Workshops envolventes e simples." }
        ],
        pricingTitle: "Preços",
        pricingModels: ["Taxa fixa por sessão de workshop"]
      }
    },
    'ngo-hr': {
      icon: Briefcase,
      productLink: { en: "Explore Fluide HR", fr: "Explorer Fluide HR", pt: "Explorar Fluide HR", href: "/products/hr" },
      en: {
        title: "NGO HR Setup",
        subtitle: "Compliant HR structures for non-profit organizations.",
        desc: "Specialized support for NGOs to manage local and international staff, donor compliance, and grant-specific HR reporting.",
        problemTitle: "The Problem: Donor Compliance Complexity",
        problemText: "NGOs face unique HR challenges, including complex donor reporting requirements and managing diverse contract types.",
        solutionTitle: "Our Solution: Specialized NGO HR Framework",
        reviewAreas: [
          { title: "Donor Reporting", desc: "Ensuring HR data meets specific grant requirements" },
          { title: "Contract Management", desc: "Handling local, expat, and short-term project contracts" },
          { title: "Policy Alignment", desc: "Matching global NGO standards with local labor laws" }
        ],
        processSteps: [
          { title: "Audit", desc: "Reviewing current NGO compliance and donor requirements." },
          { title: "Setup", desc: "Configuring HR systems for multi-fund reporting." },
          { title: "Training", desc: "Equipping NGO admins with specialized HR tools." }
        ],
        pricingTitle: "Pricing",
        pricingModels: ["Project-based setup or ongoing support retainer"]
      },
      fr: {
        title: "Configuration RH pour ONG",
        subtitle: "Structures RH conformes pour les organisations à but non lucratif.",
        desc: "Soutien spécialisé pour les ONG pour gérer le personnel local et international.",
        problemTitle: "Le problème : Complexité de la conformité bailleurs",
        problemText: "Les ONG font face à des défis RH uniques, notamment le reporting bailleurs.",
        solutionTitle: "Notre solution : Cadre RH spécialisé ONG",
        reviewAreas: [
          { title: "Reporting bailleurs", desc: "S'assurer que les données RH répondent aux exigences" },
          { title: "Gestion des contrats", desc: "Gestion des contrats locaux et expatriés" }
        ],
        processSteps: [
          { title: "Audit", desc: "Examen de la conformité actuelle." },
          { title: "Configuration", desc: "Mise en place des systèmes RH." }
        ],
        pricingTitle: "Tarification",
        pricingModels: ["Forfait de mise en place ou abonnement support"]
      },
      pt: {
        title: "Configuração de RH para ONGs",
        subtitle: "Estruturas de RH em conformidade para organizações sem fins lucrativos.",
        desc: "Suporte especializado para ONGs gerirem pessoal local e internacional.",
        problemTitle: "O Problema: Complexidade da Conformidade de Doadores",
        problemText: "As ONGs enfrentam desafios de RH únicos, como relatórios para doadores.",
        solutionTitle: "Nossa Solução: Estrutura de RH Especializada para ONGs",
        reviewAreas: [
          { title: "Relatórios de Doadores", desc: "Garantir que os dados de RH cumpram os requisitos" },
          { title: "Gestão de Contratos", desc: "Lidar com contratos locais e expatriados" }
        ],
        processSteps: [
          { title: "Auditoria", desc: "Revisão da conformidade atual." },
          { title: "Configuração", desc: "Configuração de sistemas de RH." }
        ],
        pricingTitle: "Preços",
        pricingModels: ["Configuração baseada em projeto ou retainer de suporte"]
      }
    },
    'construction-compliance': {
      icon: Briefcase,
      productLink: { en: "Explore Fluide Pay", fr: "Explorer Fluide Pay", pt: "Explorar Fluide Pay", href: "/products/pay" },
      en: {
        title: "Construction Workforce Compliance",
        subtitle: "Manage high-volume, high-turnover workforces safely.",
        desc: "Expert guidance on managing site workers, daily wage compliance, and safety documentation.",
        problemTitle: "The Problem: High-Volume Workforce Chaos",
        problemText: "Construction sites struggle with tracking attendance, managing daily payments, and ensuring safety compliance for hundreds of workers.",
        solutionTitle: "Our Solution: Site-Ready Compliance Systems",
        reviewAreas: [
          { title: "Attendance Tracking", desc: "Robust systems for high-volume site entry/exit" },
          { title: "Wage Compliance", desc: "Ensuring accurate daily and weekly wage payments" },
          { title: "Safety Records", desc: "Managing required safety certifications and documentation" }
        ],
        processSteps: [
          { title: "Site Audit", desc: "Evaluating current workforce tracking and payment methods." },
          { title: "System Setup", desc: "Implementing mobile-first attendance and payroll tools." },
          { title: "Training", desc: "Training site supervisors on compliance tools." }
        ],
        pricingTitle: "Pricing",
        pricingModels: ["Monthly service fee per active site"]
      },
      fr: {
        title: "Conformité main-d'œuvre construction",
        subtitle: "Gérez les effectifs à volume élevé en toute sécurité.",
        desc: "Conseils d'experts sur la gestion des travailleurs de chantier.",
        problemTitle: "Le problème : Chaos des effectifs à haut volume",
        problemText: "Les chantiers ont du mal à suivre l'assiduité et les paiements journaliers.",
        solutionTitle: "Notre solution : Systèmes de conformité de chantier",
        reviewAreas: [
          { title: "Suivi d'assiduité", desc: "Systèmes robustes pour les entrées/sorties" },
          { title: "Conformité salariale", desc: "Garantir des paiements journaliers exacts" }
        ],
        processSteps: [
          { title: "Audit de site", desc: "Évaluation des méthodes actuelles." },
          { title: "Mise en place", desc: "Implémentation d'outils mobiles." }
        ],
        pricingTitle: "Tarification",
        pricingModels: ["Frais de service mensuels par site actif"]
      },
      pt: {
        title: "Conformidade na Construção",
        subtitle: "Gira forças de trabalho de alto volume com segurança.",
        desc: "Orientação especializada na gestão de trabalhadores de estaleiro.",
        problemTitle: "O Problema: Caos na Força de Trabalho de Alto Volume",
        problemText: "Os estaleiros de construção lutam com o controlo de assiduidade e pagamentos diários.",
        solutionTitle: "Nossa Solução: Sistemas de Conformidade Prontos para Estaleiro",
        reviewAreas: [
          { title: "Controlo de Assiduidade", desc: "Sistemas robustos para entrada/saída" },
          { title: "Conformidade Salarial", desc: "Garantir pagamentos diários precisos" }
        ],
        processSteps: [
          { title: "Auditoria de Estaleiro", desc: "Avaliação dos métodos atuais." },
          { title: "Configuração", desc: "Implementação de ferramentas móveis." }
        ],
        pricingTitle: "Preços",
        pricingModels: ["Taxa de serviço mensal por estaleiro ativo"]
      }
    },
    'accountant-partner': {
      icon: Handshake,
      productLink: { en: "Explore Fluide Books", fr: "Explorer Fluide Books", pt: "Explorar Fluide Books", href: "/products/books" },
      en: {
        title: "Accountant Partnership",
        subtitle: "Modernize your practice with Fluide.",
        desc: "A program for accounting firms to leverage Fluide tools for their clients, improving efficiency and service quality.",
        problemTitle: "The Problem: Manual Accounting Overhead",
        problemText: "Accounting firms spend too much time on manual data entry and chasing client records.",
        solutionTitle: "Our Solution: The Accountant Partner Program",
        reviewAreas: [
          { title: "Tool Integration", desc: "Connecting your practice to Fluide Books" },
          { title: "Client Onboarding", desc: "Streamlined processes for moving clients to the cloud" },
          { title: "Reporting Automation", desc: "Generating professional financial reports instantly" }
        ],
        processSteps: [
          { title: "Onboarding", desc: "Setting up your partner dashboard and training your team." },
          { title: "Migration", desc: "Moving your first set of clients to Fluide." },
          { title: "Growth", desc: "Leveraging automated tools to take on more clients." }
        ],
        pricingTitle: "Pricing",
        pricingModels: ["Revenue sharing or wholesale pricing models"]
      },
      fr: {
        title: "Partenariat comptable",
        subtitle: "Modernisez votre cabinet avec Fluide.",
        desc: "Un programme pour les cabinets comptables pour exploiter les outils Fluide.",
        problemTitle: "Le problème : Surcharge de travail manuel",
        problemText: "Les cabinets passent trop de temps sur la saisie manuelle.",
        solutionTitle: "Notre solution : Programme Partenaire Comptable",
        reviewAreas: [
          { title: "Intégration d'outils", desc: "Connecter votre cabinet à Fluide Books" },
          { title: "Automatisation", desc: "Génération instantanée de rapports financiers" }
        ],
        processSteps: [
          { title: "Intégration", desc: "Configuration de votre tableau de bord partenaire." },
          { title: "Migration", desc: "Transfert de vos premiers clients." }
        ],
        pricingTitle: "Tarification",
        pricingModels: ["Partage de revenus ou modèles de prix de gros"]
      },
      pt: {
        title: "Parceria com Contabilistas",
        subtitle: "Modernize o seu escritório com a Fluide.",
        desc: "Um programa para escritórios de contabilidade alavancarem as ferramentas Fluide.",
        problemTitle: "O Problema: Sobrecarga de Trabalho Manual",
        problemText: "Os escritórios de contabilidade gastam muito tempo em introdução manual de dados.",
        solutionTitle: "Nossa Solução: Programa de Parceiro Contabilista",
        reviewAreas: [
          { title: "Integração de Ferramentas", desc: "Ligar o seu escritório ao Fluide Books" },
          { title: "Automação", desc: "Geração instantânea de relatórios financeiros" }
        ],
        processSteps: [
          { title: "Integração", desc: "Configuração do seu dashboard de parceiro." },
          { title: "Migração", desc: "Mover os seus primeiros clientes." }
        ],
        pricingTitle: "Preços",
        pricingModels: ["Partilha de receitas ou modelos de preços grossistas"]
      }
    },
    'implementation-partner': {
      icon: Handshake,
      productLink: { en: "Explore Fluide Lite", fr: "Explorer Fluide Lite", pt: "Explorar Fluide Lite", href: "/products/lite" },
      en: {
        title: "Implementation Partner Program",
        subtitle: "Help businesses transform with Fluide.",
        desc: "For consultants and agencies who want to lead Fluide implementations for their clients.",
        problemTitle: "The Problem: Implementation Gaps",
        problemText: "Businesses often buy software but struggle to implement it effectively within their unique operations.",
        solutionTitle: "Our Solution: Certified Implementation Support",
        reviewAreas: [
          { title: "Certification", desc: "Becoming a certified Fluide implementation expert" },
          { title: "Methodology", desc: "Access to proven implementation frameworks" },
          { title: "Support", desc: "Direct access to Fluide's technical and product teams" }
        ],
        processSteps: [
          { title: "Training", desc: "Deep dive into Fluide product capabilities and configuration." },
          { title: "Certification", desc: "Validating your implementation expertise." },
          { title: "Launch", desc: "Leading your first client implementation with our support." }
        ],
        pricingTitle: "Pricing",
        pricingModels: ["Referral commissions and implementation service revenue"]
      },
      fr: {
        title: "Programme partenaire d'implémentation",
        subtitle: "Aidez les entreprises à se transformer avec Fluide.",
        desc: "Pour les consultants qui souhaitent diriger les implémentations Fluide.",
        problemTitle: "Le problème : Lacunes d'implémentation",
        problemText: "Les entreprises achètent des logiciels mais peinent à les implémenter.",
        solutionTitle: "Notre solution : Support d'implémentation certifié",
        reviewAreas: [
          { title: "Certification", desc: "Devenir un expert certifié Fluide" },
          { title: "Méthodologie", desc: "Accès à des cadres d'implémentation éprouvés" }
        ],
        processSteps: [
          { title: "Formation", desc: "Analyse approfondie des capacités des produits." },
          { title: "Lancement", desc: "Direction de votre première implémentation client." }
        ],
        pricingTitle: "Tarification",
        pricingModels: ["Commissions de recommandation et revenus de services"]
      },
      pt: {
        title: "Programa de Parceiro de Implementação",
        subtitle: "Ajude as empresas a transformarem-se com a Fluide.",
        desc: "Para consultores que desejam liderar implementações Fluide.",
        problemTitle: "O Problema: Lacunas de Implementação",
        problemText: "As empresas compram software mas têm dificuldade em implementá-lo.",
        solutionTitle: "Nossa Solução: Suporte de Implementação Certificado",
        reviewAreas: [
          { title: "Certificação", desc: "Tornar-se um especialista certificado Fluide" },
          { title: "Metodologia", desc: "Acesso a estruturas de implementação comprovadas" }
        ],
        processSteps: [
          { title: "Formação", desc: "Mergulho profundo nas capacidades dos produtos." },
          { title: "Lançamento", desc: "Liderar a sua primeira implementação de cliente." }
        ],
        pricingTitle: "Preços",
        pricingModels: ["Comissões de recomendação e receitas de serviços"]
      }
    }
  }
};
