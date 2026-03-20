import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  CheckCircle2, 
  Users, 
  Briefcase, 
  Wallet, 
  CreditCard, 
  Banknote, 
  BookOpen, 
  Zap, 
  X, 
  Shield, 
  Package, 
  Calculator,
  ShieldCheck,
  Globe
} from 'lucide-react';
import { Link } from 'react-router-dom';
import CentralizedSystemAnimation from '../components/CentralizedSystemAnimation';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const Homepage = () => {
  const { language } = useLanguage();

  const content = {
    hero: {
      headline: {
        en: 'All you need to run your business.',
        fr: 'Tout ce dont vous avez besoin pour gérer votre entreprise.',
        pt: 'Tudo o que precisa para gerir o seu negócio.'
      },
      subheadline: {
        en: '10 tools in one platform. Hire, pay, and grow your team easily.',
        fr: 'Fluide réunit 10 outils puissants en une seule plateforme. Recrutez les bonnes personnes, exécutez la paie en quelques minutes, payez instantanément, aidez votre équipe à épargner et à emprunter équitablement.',
        pt: 'A Fluide reúne 10 ferramentas poderosas numa única plataforma. Encontre as pessoas certas, processe a folha de pagamentos em minutos, pague instantaneamente, ajude a sua equipa a poupar e a pedir empréstimos de forma justa.'
      },
      primaryCTA: { en: 'Get Started', fr: 'Commencer', pt: 'Começar' },
      secondaryCTA: { en: 'For employees? Get the app', fr: 'Vous êtes salarié ? Téléchargez l\'appli', pt: 'É colaborador? Descarregue a aplicação' }
    },
    problem: {
      title: {
        en: 'Running a business is demanding. Your tools should help with the heavy lifting.',
        fr: 'Gérer une entreprise est exigeant. Vos outils doivent vous faciliter la tâche.',
        pt: 'Gerir um negócio em África já é suficientemente difícil. As suas ferramentas não deveriam dificultar ainda mais.'
      },
      description: {
        en: 'Keep hiring simple. Make payroll professional.',
        fr: 'Simplifiez le recrutement. Confiez la gestion de la paie à des professionnels.',
        pt: 'Simplifique o processo de contratação. Profissionalize a folha de pagamento.'
      }
    },
    solution: {
      title: {
        en: 'One platform. Many solutions.',
        fr: 'Une plateforme propulsée par l\'IA. De multiples solutions. Une Afrique connectée.',
        pt: 'Uma plataforma baseada em IA. Múltiplas soluções. Uma África conectada.'
      },
      description: {
        en: 'Fluide is an all-in-one HR and finance platform for your business.',
        fr: 'Fluide est la première plateforme entièrement intégrée de gestion des ressources humaines et d\'inclusion financière, conçue pour les PME africaines.',
        pt: 'A Fluide é a primeira plataforma totalmente integrada de gestão de recursos humanos e inclusão financeira, criada para as PMEs africanas.'
      }
    }
  };

  const products = [
    { id: 'jobs', icon: Briefcase, name: { en: 'Fluide Jobs', fr: 'Fluide Jobs', pt: 'Fluide Jobs' }, desc: { en: 'Find and hire verified talent using AI.', fr: 'Mise en relation des talents par l\'IA et recrutement vérifié.', pt: 'Correspondência de talentos por IA e contratação verificada.' } },
    { id: 'hr', icon: Users, name: { en: 'Fluide HR', fr: 'Fluide HR', pt: 'Fluide HR' }, desc: { en: 'Manage performance, learning, and engagement with AI.', fr: 'Performance, apprentissage et engagement pilotés par l\'IA.', pt: 'Desempenho, aprendizagem e envolvimento impulsionados por IA.' } },
    { id: 'payroll', icon: Calculator, name: { en: 'Fluide Payroll', fr: 'Fluide Payroll', pt: 'Fluide Payroll' }, desc: { en: 'Run payroll and stay compliant in minutes.', fr: 'Paie automatisée et conformité en quelques minutes.', pt: 'Processamento salarial automatizado e conformidade em minutos.' } },
    { id: 'pay', icon: Banknote, name: { en: 'Fluide Pay', fr: 'Fluide Pay', pt: 'Fluide Pay' }, desc: { en: 'Pay your team instantly, across borders.', fr: 'Versement de salaire instantané et transfrontalier routé par l\'IA.', pt: 'Desembolso salarial transfronteiriço instantâneo roteado por IA.' } },
    { id: 'pulse', icon: Wallet, name: { en: 'Fluide Pulse', fr: 'Fluide Pulse', pt: 'Fluide Pulse' }, desc: { en: 'Your AI guide for financial wellness.', fr: 'Votre compagnon de bien-être financier IA.', pt: 'O seu companheiro de bem-estar financeiro de IA.' } },
    { id: 'bank', icon: CreditCard, name: { en: 'Fluide Bank', fr: 'Fluide Bank', pt: 'Fluide Bank' }, desc: { en: 'Smart credit based on your business, not your assets.', fr: 'Crédit intelligent basé sur votre activité, pas sur ce que vous possédez.', pt: 'Crédito inteligente baseado no que faz, não no que possui.' } },
    { id: 'books', icon: BookOpen, name: { en: 'Fluide Books', fr: 'Fluide Books', pt: 'Fluide Books' }, desc: { en: 'Automated accounting and real-time business insights.', fr: 'Comptabilité automatisée par l\'IA et informations en temps réel.', pt: 'Contabilidade automatizada por IA e insights em tempo real.' } },
    { id: 'stock', icon: Package, name: { en: 'Fluide Stock', fr: 'Fluide Stock', pt: 'Fluide Stock' }, desc: { en: 'Smart inventory management for small businesses.', fr: 'Gestion des stocks propulsée par l\'IA pour les MPME.', pt: 'Gestão de inventário baseada em IA para MPMEs.' } },
    { id: 'protect', icon: Shield, name: { en: 'Fluide Protect', fr: 'Fluide Protect', pt: 'Fluide Protect' }, desc: { en: 'Easy insurance options for your team.', fr: 'Place de marché assurtech intégrée pour votre personnel.', pt: 'Mercado insurtech integrado para a sua força de trabalho.' } },
    { id: 'lite', icon: Zap, name: { en: 'Fluide Lite', fr: 'Fluide Lite', pt: 'Fluide Lite' }, desc: { en: 'Simple, AI-powered tools for micro-businesses.', fr: 'Outils simples assistés par l\'IA pour les micro-entreprises.', pt: 'Ferramentas simples assistidas por IA para microempresas.' } },
  ];

  return (
    <div className="pt-20">
      <Helmet>
        <title>Fluide | All-in-One Business Platform for Africa</title>
        <meta name="description" content="Fluide is the leading digital platform for African businesses. Manage payroll, hiring, and financial services in one centralized system." />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <meta property="og:title" content="Fluide | All-in-One Business Platform for Africa" />
        <meta property="og:description" content="Empower your team with instant payroll, professional hiring, and financial support." />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-brand-navy py-24 lg:py-32 min-h-[80vh] flex items-center">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1573163281530-5be9c88b407e?auto=format&fit=crop&w=1920&q=80" 
            alt="African business woman" 
            className="w-full h-full object-cover opacity-30"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/80 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-3xl">
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="text-5xl lg:text-7xl font-bold tracking-tight text-white mb-8 leading-[1.1]"
              >
                {content.hero.headline[language]}
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="text-xl text-white/60 leading-relaxed mb-10"
              >
                {content.hero.subheadline[language]}
              </motion.p>
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link to="/onboarding" className="bg-brand-cyan text-brand-navy px-8 py-4 rounded-full font-bold flex items-center group transition-all hover:bg-white shadow-xl shadow-brand-cyan/10">
                    {content.hero.primaryCTA[language]}
                    <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </motion.div>
                <motion.div
                  whileHover={{ x: 5 }}
                >
                  <Link to="/for-employees" className="text-white font-bold flex items-center hover:text-brand-cyan transition-colors">
                    {content.hero.secondaryCTA[language]}
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </motion.div>
              </motion.div>
            </div>

            {/* Hero Image / Illustration */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, x: 50 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="hidden lg:block relative"
            >
              <div className="relative z-10 rounded-[40px] overflow-hidden shadow-2xl border border-white/10">
                <img 
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=80" 
                  alt="Business process facilitation" 
                  className="w-full h-auto object-cover"
                  referrerPolicy="no-referrer"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-tr from-brand-navy/40 to-transparent pointer-events-none" />
              </div>
              
              {/* Floating UI Elements for illustrative feel */}
              <motion.div 
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -right-6 bg-white p-4 rounded-2xl shadow-xl z-20 border border-brand-navy/5"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold text-brand-navy/40 uppercase tracking-wider">Payroll Status</div>
                    <div className="text-sm font-bold text-brand-navy">Processed Successfully</div>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -bottom-10 -left-10 bg-brand-navy p-6 rounded-3xl shadow-2xl z-20 border border-white/10"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-brand-cyan/20 rounded-xl flex items-center justify-center">
                    <Users className="w-6 h-6 text-brand-cyan" />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold text-white/40 uppercase tracking-wider">New Hires</div>
                    <div className="text-lg font-bold text-white">+12 This Month</div>
                  </div>
                </div>
              </motion.div>

              {/* Decorative circles */}
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-brand-cyan/10 rounded-full blur-3xl -z-10" />
              <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-brand-navy/20 rounded-full blur-3xl -z-10" />
            </motion.div>
          </div>
        </div>
        
        {/* Abstract background elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-cyan/[0.05] to-transparent pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-brand-navy/[0.03] rounded-full blur-3xl pointer-events-none" />
      </section>

      {/* Problem Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-brand-navy mb-6 leading-tight">
                {content.problem.title[language]}
              </h2>
              <p className="text-lg text-brand-navy/60 leading-relaxed mb-8">
                {content.problem.description[language]}
              </p>
              <div className="space-y-4">
                {['WhatsApp hiring', 'Excel payroll', 'Delayed salaries', 'Loan shark risks'].map((item, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + (idx * 0.1) }}
                    className="flex items-center space-x-3 text-brand-navy/40"
                  >
                    <X className="w-5 h-5 text-red-500/50" />
                    <span className="font-medium">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative group"
            >
              <CentralizedSystemAnimation />
              
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 text-center pointer-events-none"
              >
                <div className="text-6xl font-black text-brand-navy/5 tracking-tighter italic whitespace-nowrap">Until now.</div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Solution / Products Grid */}
      <section className="py-24 bg-brand-navy text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_120%,rgba(78,242,216,0.15),transparent_50%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">{content.solution.title[language]}</h2>
            <p className="text-white/60 text-lg leading-relaxed">{content.solution.description[language]}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, idx) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -10,
                  backgroundColor: "rgba(255, 255, 255, 0.08)",
                  borderColor: "rgba(78, 242, 216, 0.3)",
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.2)"
                }}
                className="bg-white/5 border border-white/10 p-8 rounded-3xl transition-all group cursor-pointer relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-brand-cyan/5 blur-2xl rounded-full -mr-12 -mt-12 group-hover:bg-brand-cyan/10 transition-colors" />
                <div className="w-14 h-14 bg-brand-cyan/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-brand-cyan/30 transition-all duration-500">
                  <product.icon className="w-7 h-7 text-brand-cyan" />
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-brand-cyan transition-colors">{product.name[language]}</h3>
                <p className="text-white/60 leading-relaxed text-sm mb-6">{product.desc[language]}</p>
                <Link to={`/products/${product.id}`} className="text-xs font-bold uppercase tracking-widest flex items-center group-hover:text-brand-cyan transition-colors">
                  {language === 'en' ? 'Learn More' : language === 'fr' ? 'En savoir plus' : 'Saber mais'}
                  <ArrowRight className="ml-2 w-3 h-3 transition-transform group-hover:translate-x-1" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl font-bold mb-4 text-brand-navy">How it works — 3 Steps</h2>
          </motion.div>
          
          <motion.div 
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.3
                }
              }
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid lg:grid-cols-3 gap-12"
          >
            {[
              { step: '01', title: { en: 'Set Up', fr: 'Configurez', pt: 'Configure' }, desc: { en: 'Register your company, add your team, and connect payments.', fr: 'Inscrivez votre entreprise. Importez votre liste d\'employés.', pt: 'Registe a sua empresa. Importe a sua lista de colaboradores.' } },
              { step: '02', title: { en: 'Run Your Business', fr: 'Gérez votre activité', pt: 'Gira o seu negócio' }, desc: { en: 'Hire, run payroll, and track performance easily.', fr: 'Publiez des offres. Faites la paie en quelques minutes.', pt: 'Publique ofertas. Processe a folha de pagamentos em minutos.' } },
              { step: '03', title: { en: 'Watch Everyone Grow', fr: 'Regardez tout le monde grandir', pt: 'Veja todos a crescer' }, desc: { en: 'Pay instantly. Help your team save and get loans.', fr: 'Les salaires arrivent instantanément sur les téléphones.', pt: 'Os salários chegam instantaneamente aos telemóveis.' } }
            ].map((item, idx) => (
              <motion.div 
                key={idx} 
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
                }}
                className="relative"
              >
                <div className="text-8xl font-black text-brand-navy/[0.03] absolute -top-10 -left-4 select-none">{item.step}</div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-4 text-brand-navy">{item.title[language]}</h3>
                  <p className="text-brand-navy/60 leading-relaxed">{item.desc[language]}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-12 bg-brand-navy/5 border-y border-brand-navy/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: ShieldCheck, title: 'Bank-Grade Security', desc: 'Your data is encrypted and protected by industry-leading security protocols.' },
              { icon: Globe, title: 'Global Reach', desc: 'Compliant operations in 50+ countries across Africa and beyond.' },
              { icon: Zap, title: 'AI-Powered Efficiency', desc: 'Automate complex processes with our proprietary business intelligence engine.' }
            ].map((badge, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-sm border border-brand-navy/5"
              >
                <div className="w-12 h-12 bg-brand-cyan/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <badge.icon className="w-6 h-6 text-brand-cyan" />
                </div>
                <div>
                  <h3 className="font-bold text-brand-navy mb-1">{badge.title}</h3>
                  <p className="text-sm text-brand-navy/60 leading-relaxed">{badge.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Where We Operate */}
      <section className="py-24 bg-brand-navy/[0.02] border-y border-brand-navy/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-brand-navy mb-4">
              {language === 'en' ? 'Trusted across Africa' : language === 'fr' ? 'Présent dans toute l\'Afrique' : 'Presente em toda a África'}
            </h2>
            <p className="text-brand-navy/60 max-w-2xl mx-auto">
              {language === 'en' ? 'We are building the future of work in Africa.' : language === 'fr' ? 'Nous construisons l\'infrastructure pour l\'avenir du travail en Afrique, un pays à la fois.' : 'Estamos a construir a infraestrutura para o futuro do trabalho em África, um país de cada vez.'}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {[
              { code: 'cm', name: 'Cameroon', flag: '🇨🇲', status: 'Live' },
              { code: 'ng', name: 'Nigeria', flag: '🇳🇬', status: 'Live' },
              { code: 'ke', name: 'Kenya', flag: '🇰🇪', status: 'Live' },
              { code: 'gh', name: 'Ghana', flag: '🇬🇭', status: 'Live' },
              { code: 'ci', name: 'Côte d\'Ivoire', flag: '🇨🇮', status: 'Live' },
              { code: 'ao', name: 'Angola', flag: '🇦🇴', status: 'Coming 2028' },
              { code: 'za', name: 'South Africa', flag: '🇿🇦', status: 'Coming 2028' },
            ].map((c) => (
              c.status === 'Live' ? (
                <Link key={c.code} to={`/country/${c.code}`}>
                  <motion.div
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="bg-white p-6 rounded-3xl border border-brand-navy/5 shadow-sm text-center group transition-all hover:shadow-md hover:border-brand-cyan/30 h-full"
                  >
                    <div className="text-4xl mb-3">{c.flag}</div>
                    <div className="font-bold text-brand-navy mb-1">{c.name}</div>
                    <div className="text-[10px] font-black uppercase tracking-widest text-emerald-500">
                      {c.status}
                    </div>
                  </motion.div>
                </Link>
              ) : (
                <motion.div
                  key={c.code}
                  className="bg-white/50 p-6 rounded-3xl border border-brand-navy/5 shadow-sm text-center opacity-60 grayscale h-full"
                >
                  <div className="text-4xl mb-3">{c.flag}</div>
                  <div className="font-bold text-brand-navy mb-1">{c.name}</div>
                  <div className="text-[10px] font-black uppercase tracking-widest text-brand-navy/30">
                    {c.status}
                  </div>
                </motion.div>
              )
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-brand-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(78,242,216,0.1),transparent_70%)]" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-cyan/5 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-8">
              {language === 'en' ? 'Ready to grow your team?' : language === 'fr' ? 'Prêt à transformer votre main-d\'œuvre ?' : 'Pronto para transformar a sua força de trabalho?'}
            </h2>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to="/onboarding" className="w-full sm:w-auto bg-brand-cyan text-brand-navy px-10 py-4 rounded-full font-bold hover:bg-brand-cyan/90 transition-all shadow-xl shadow-brand-cyan/10 block">
                  {language === 'en' ? 'Start Free Trial' : language === 'fr' ? 'Essai gratuit' : 'Iniciar Teste Gratuito'}
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to="/contact" className="w-full sm:w-auto border border-white/20 px-10 py-4 rounded-full font-bold hover:bg-white/10 transition-all block">
                  {language === 'en' ? 'Talk to Sales' : language === 'fr' ? 'Contacter les ventes' : 'Falar com Vendas'}
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
