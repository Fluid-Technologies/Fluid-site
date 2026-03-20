export interface CountryContent {
  code: string;
  name: string;
  hero: {
    headline: { [key: string]: string };
    subheadline: { [key: string]: string };
  };
  compliance: {
    title: { [key: string]: string };
    items: {
      label: { [key: string]: string };
      value: string;
      description: { [key: string]: string };
    }[];
  };
  payments: {
    title: { [key: string]: string };
    methods: {
      name: string;
      type: { [key: string]: string };
    }[];
  };
  testimonials: {
    quote: { [key: string]: string };
    author: string;
    role: { [key: string]: string };
    company: string;
  }[];
}

export const countryData: { [key: string]: CountryContent } = {
  cm: {
    code: 'cm',
    name: 'Cameroon',
    hero: {
      headline: {
        en: 'Fluide in Cameroon',
        fr: 'Fluide au Cameroun'
      },
      subheadline: {
        en: 'The #1 integrated workforce and financial inclusion platform for Cameroonian SMEs.',
        fr: 'La plateforme intégrée n°1 de gestion du personnel et d\'inclusion financière pour les PME camerounaises.'
      }
    },
    compliance: {
      title: {
        en: 'Local Compliance & Regulations',
        fr: 'Conformité et Réglementations Locales'
      },
      items: [
        {
          label: { en: 'Tax Authority', fr: 'Administration Fiscale' },
          value: 'DGI (Direction Générale des Impôts)',
          description: { en: 'Automated IRPP calculations and monthly DIPE generation.', fr: 'Calculs automatisés de l\'IRPP et génération mensuelle du DIPE.' }
        },
        {
          label: { en: 'Social Security', fr: 'Sécurité Sociale' },
          value: 'CNPS',
          description: { en: 'Seamless social contribution management and reporting.', fr: 'Gestion et déclaration transparentes des cotisations sociales.' }
        },
        {
          label: { en: 'Labor Law', fr: 'Droit du Travail' },
          value: 'Code du Travail du Cameroun',
          description: { en: 'Contracts and policies built on local labor regulations.', fr: 'Contrats et politiques basés sur la réglementation locale du travail.' }
        }
      ]
    },
    payments: {
      title: {
        en: 'Local Payment Methods',
        fr: 'Moyens de Paiement Locaux'
      },
      methods: [
        { name: 'MTN MoMo', type: { en: 'Mobile Money', fr: 'Mobile Money' } },
        { name: 'Orange Money', type: { en: 'Mobile Money', fr: 'Mobile Money' } },
        { name: 'Afriland First Bank', type: { en: 'Local Bank', fr: 'Banque Locale' } },
        { name: 'UBA Cameroon', type: { en: 'Local Bank', fr: 'Banque Locale' } }
      ]
    },
    testimonials: [
      {
        quote: {
          en: "Fluide has completely transformed how we manage our team in Douala. Payroll is now a breeze.",
          fr: "Fluide a complètement transformé la façon dont nous gérons notre équipe à Douala. La paie est maintenant un jeu d'enfant."
        },
        author: "Jean-Paul N.",
        role: { en: "Operations Manager", fr: "Responsable des Opérations" },
        company: "TechCam Solutions"
      }
    ]
  },
  ng: {
    code: 'ng',
    name: 'Nigeria',
    hero: {
      headline: {
        en: 'Fluide in Nigeria',
        fr: 'Fluide au Nigeria'
      },
      subheadline: {
        en: 'Empowering Nigerian businesses with automated payroll and financial tools.',
        fr: 'Donner aux entreprises nigérianes les moyens d\'automatiser leur paie et leurs outils financiers.'
      }
    },
    compliance: {
      title: {
        en: 'Nigerian Compliance Standards',
        fr: 'Normes de Conformité au Nigeria'
      },
      items: [
        {
          label: { en: 'Tax Authority', fr: 'Administration Fiscale' },
          value: 'FIRS / LIRS',
          description: { en: 'PAYE tax automation and monthly filing support.', fr: 'Automatisation de la taxe PAYE et support pour les déclarations mensuelles.' }
        },
        {
          label: { en: 'Pension', fr: 'Pension' },
          value: 'PenCom',
          description: { en: 'Automated pension deductions and remittances.', fr: 'Déductions et versements de pension automatisés.' }
        },
        {
          label: { en: 'Health Insurance', fr: 'Assurance Maladie' },
          value: 'NHIS',
          description: { en: 'Management of statutory health insurance contributions.', fr: 'Gestion des cotisations obligatoires d\'assurance maladie.' }
        }
      ]
    },
    payments: {
      title: {
        en: 'Nigerian Payment Ecosystem',
        fr: 'Écosystème de Paiement au Nigeria'
      },
      methods: [
        { name: 'GTBank', type: { en: 'Local Bank', fr: 'Banque Locale' } },
        { name: 'Zenith Bank', type: { en: 'Local Bank', fr: 'Banque Locale' } },
        { name: 'OPay', type: { en: 'Digital Wallet', fr: 'Portefeuille Numérique' } },
        { name: 'PalmPay', type: { en: 'Digital Wallet', fr: 'Portefeuille Numérique' } }
      ]
    },
    testimonials: [
      {
        quote: {
          en: "Managing PAYE and pension remittances used to be a nightmare. Fluide handles it all automatically.",
          fr: "Gérer le PAYE et les versements de pension était un cauchemar. Fluide gère tout automatiquement."
        },
        author: "Amina Y.",
        role: { en: "HR Director", fr: "Directrice des RH" },
        company: "Lagos Retail Group"
      }
    ]
  },
  ke: {
    code: 'ke',
    name: 'Kenya',
    hero: {
      headline: {
        en: 'Fluide in Kenya',
        fr: 'Fluide au Kenya'
      },
      subheadline: {
        en: 'The most advanced payroll and HR solution for Kenyan enterprises.',
        fr: 'La solution de paie et de RH la plus avancée pour les entreprises kenyanes.'
      }
    },
    compliance: {
      title: {
        en: 'Kenyan Statutory Compliance',
        fr: 'Conformité Réglementaire au Kenya'
      },
      items: [
        {
          label: { en: 'Tax Authority', fr: 'Administration Fiscale' },
          value: 'KRA (Kenya Revenue Authority)',
          description: { en: 'Automated PAYE, NSSF, and NHIF calculations and filing.', fr: 'Calculs et déclarations automatisés de PAYE, NSSF et NHIF.' }
        },
        {
          label: { en: 'Housing Fund', fr: 'Fonds de Logement' },
          value: 'Affordable Housing Levy',
          description: { en: 'Stay compliant with the latest housing fund regulations.', fr: 'Restez en conformité avec les dernières réglementations sur le fonds de logement.' }
        },
        {
          label: { en: 'Labor Standards', fr: 'Normes du Travail' },
          value: 'Employment Act 2007',
          description: { en: 'Ensuring your contracts meet Kenyan employment standards.', fr: 'S\'assurer que vos contrats respectent les normes d\'emploi kenyanes.' }
        }
      ]
    },
    payments: {
      title: {
        en: 'Kenyan Payment Methods',
        fr: 'Moyens de Paiement au Kenya'
      },
      methods: [
        { name: 'M-PESA', type: { en: 'Mobile Money', fr: 'Mobile Money' } },
        { name: 'Equity Bank', type: { en: 'Local Bank', fr: 'Banque Locale' } },
        { name: 'KCB Bank', type: { en: 'Local Bank', fr: 'Banque Locale' } },
        { name: 'Airtel Money', type: { en: 'Mobile Money', fr: 'Mobile Money' } }
      ]
    },
    testimonials: [
      {
        quote: {
          en: "Paying our remote workers via M-PESA directly from Fluide has saved us countless hours every month.",
          fr: "Payer nos travailleurs à distance via M-PESA directement depuis Fluide nous a fait gagner d'innombrables heures chaque mois."
        },
        author: "David K.",
        role: { en: "Founder", fr: "Fondateur" },
        company: "Nairobi Tech Hub"
      }
    ]
  },
  gh: {
    code: 'gh',
    name: 'Ghana',
    hero: {
      headline: {
        en: 'Fluide in Ghana',
        fr: 'Fluide au Ghana'
      },
      subheadline: {
        en: 'Streamlining workforce management for Ghanaian businesses.',
        fr: 'Simplifier la gestion du personnel pour les entreprises ghanéennes.'
      }
    },
    compliance: {
      title: {
        en: 'Ghanaian Compliance & Tax',
        fr: 'Conformité et Fiscalité au Ghana'
      },
      items: [
        {
          label: { en: 'Tax Authority', fr: 'Administration Fiscale' },
          value: 'GRA (Ghana Revenue Authority)',
          description: { en: 'Automated income tax (PAYE) and Tier 1, 2, 3 pension filing.', fr: 'Automatisation de l\'impôt sur le revenu (PAYE) et des déclarations de pension de niveaux 1, 2 et 3.' }
        },
        {
          label: { en: 'Social Security', fr: 'Sécurité Sociale' },
          value: 'SSNIT',
          description: { en: 'Seamless management of social security contributions.', fr: 'Gestion transparente des cotisations de sécurité sociale.' }
        }
      ]
    },
    payments: {
      title: {
        en: 'Ghanaian Payment Options',
        fr: 'Options de Paiement au Ghana'
      },
      methods: [
        { name: 'MTN Mobile Money', type: { en: 'Mobile Money', fr: 'Mobile Money' } },
        { name: 'Telecel Cash', type: { en: 'Mobile Money', fr: 'Mobile Money' } },
        { name: 'GCB Bank', type: { en: 'Local Bank', fr: 'Banque Locale' } },
        { name: 'Ecobank Ghana', type: { en: 'Local Bank', fr: 'Banque Locale' } }
      ]
    },
    testimonials: [
      {
        quote: {
          en: "Fluide's integration with local banks and mobile money makes payroll incredibly efficient for our diverse team.",
          fr: "L'intégration de Fluide avec les banques locales et l'argent mobile rend la paie incroyablement efficace pour notre équipe diversifiée."
        },
        author: "Kwame O.",
        role: { en: "Finance Manager", fr: "Responsable Financier" },
        company: "Accra Logistics"
      }
    ]
  },
  ci: {
    code: 'ci',
    name: 'Côte d\'Ivoire',
    hero: {
      headline: {
        en: 'Fluide en Côte d\'Ivoire',
        fr: 'Fluide en Côte d\'Ivoire'
      },
      subheadline: {
        en: 'La solution RH et paie leader pour les entreprises ivoiriennes.',
        fr: 'La solution RH et paie leader pour les entreprises ivoiriennes.'
      }
    },
    compliance: {
      title: {
        en: 'Conformité Ivoirienne',
        fr: 'Conformité Ivoirienne'
      },
      items: [
        {
          label: { en: 'Administration Fiscale', fr: 'Administration Fiscale' },
          value: 'DGI Côte d\'Ivoire',
          description: { en: 'Calcul automatique de l\'ITS et de la contribution nationale.', fr: 'Calcul automatique de l\'ITS et de la contribution nationale.' }
        },
        {
          label: { en: 'Sécurité Sociale', fr: 'Sécurité Sociale' },
          value: 'CNPS',
          description: { en: 'Gestion des cotisations sociales et déclarations DISI.', fr: 'Gestion des cotisations sociales et déclarations DISI.' }
        }
      ]
    },
    payments: {
      title: {
        en: 'Moyens de Paiement en Côte d\'Ivoire',
        fr: 'Moyens de Paiement en Côte d\'Ivoire'
      },
      methods: [
        { name: 'Orange Money', type: { en: 'Mobile Money', fr: 'Mobile Money' } },
        { name: 'MTN MoMo', type: { en: 'Mobile Money', fr: 'Mobile Money' } },
        { name: 'Moov Money', type: { en: 'Mobile Money', fr: 'Mobile Money' } },
        { name: 'NSIA Banque', type: { en: 'Banque Locale', fr: 'Banque Locale' } }
      ]
    },
    testimonials: [
      {
        quote: {
          en: "The automated DGI and CNPS calculations have removed all the stress from our monthly reporting.",
          fr: "Les calculs automatisés de la DGI et de la CNPS ont éliminé tout le stress de nos rapports mensuels."
        },
        author: "Marie C.",
        role: { en: "CEO", fr: "PDG" },
        company: "Abidjan Enterprises"
      }
    ]
  }
};
