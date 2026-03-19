import { 
  Building2, 
  Users, 
  Wallet, 
  ShieldCheck, 
  Zap,
  TrendingUp,
  Briefcase,
  Calculator,
  Banknote,
  CreditCard,
  BookOpen,
  Package,
  Shield
} from 'lucide-react';

export const productOnboardingData: Record<string, any> = {
  jobs: {
    name: 'Fluide Jobs',
    steps: [
      {
        title: { en: 'Find Verified Talent', fr: 'Trouvez des talents vérifiés', pt: 'Encontre talentos verificados' },
        desc: { en: 'Access a pool of pre-screened professionals across Africa.', fr: 'Accédez à un vivier de professionnels présélectionnés à travers l\'Afrique.', pt: 'Aceda a um grupo de profissionais pré-selecionados em toda a África.' },
        icon: Briefcase,
        image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=800'
      },
      {
        title: { en: 'AI-Powered Matching', fr: 'Matching propulsé par l\'IA', pt: 'Correspondência baseada em IA' },
        desc: { en: 'Our AI matches the best candidates to your specific job requirements.', fr: 'Notre IA fait correspondre les meilleurs candidats à vos exigences de poste spécifiques.', pt: 'A nossa IA faz a correspondência dos melhores candidatos aos seus requisitos de trabalho específicos.' },
        icon: Zap,
        image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800'
      }
    ]
  },
  payroll: {
    name: 'Fluide Payroll',
    steps: [
      {
        title: { en: 'Automated Compliance', fr: 'Conformité automatisée', pt: 'Conformidade automatizada' },
        desc: { en: 'Stay compliant with local tax laws in 40+ African countries.', fr: 'Restez en conformité avec les lois fiscales locales dans plus de 40 pays africains.', pt: 'Mantenha-se em conformidade com as leis fiscais locais em mais de 40 países africanos.' },
        icon: Calculator,
        image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=800'
      },
      {
        title: { en: 'One-Click Payments', fr: 'Paiements en un clic', pt: 'Pagamentos com um clique' },
        desc: { en: 'Pay your entire team instantly via bank, mobile money, or wallet.', fr: 'Payez toute votre équipe instantanément par banque, mobile money ou portefeuille.', pt: 'Pague toda a sua equipa instantaneamente via banco, dinheiro móvel ou carteira.' },
        icon: Banknote,
        image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80&w=800'
      }
    ]
  },
  // Add other products as needed
};
