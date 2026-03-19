import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { ArrowRight, CheckCircle2, Globe, Briefcase, Users, ShieldCheck, TrendingUp, GraduationCap, Handshake } from 'lucide-react';
import { Link } from 'react-router-dom';
import Breadcrumbs from '../components/Breadcrumbs';

const Services = () => {
  const { language } = useLanguage();

  const content = {
    en: {
      title: "Our Services",
      subtitle: "Complete solutions for the modern African workforce.",
      desc: "From global hiring and payroll to expert advice, we give you the tools and knowledge you need to grow.",
      mainServices: [
        {
          id: 'eor',
          title: "Employer of Record (EoR)",
          icon: Globe,
          desc: "Hire anywhere in Africa without setting up a local company. We handle the rules, payroll, and benefits.",
          href: "/services/eor"
        },
        {
          id: 'outsource-payroll',
          title: "Outsource Payroll",
          icon: Briefcase,
          desc: "Fully managed payroll to ensure correct, legal, and on-time payments for your team.",
          href: "/services/outsource-payroll"
        }
      ],
      consultingTitle: "Expert Advice",
      consultingDesc: "Expert advice to help you solve problems and grow.",
      consultingCategories: [
        { id: 'hr-payroll', title: "HR & Payroll Advice", icon: Users },
        { id: 'financial-tax', title: "Financial & Tax Advice", icon: ShieldCheck },
        { id: 'business-growth', title: "Business Growth", icon: TrendingUp },
        { id: 'training', title: "Training", icon: GraduationCap },
        { id: 'specialized', title: "Specialized Services", icon: Briefcase },
        { id: 'partners', title: "Partner Programs", icon: Handshake }
      ],
      cta: {
        title: "Not sure what you need?",
        subtitle: "Our experts are ready to help you find the right solution.",
        button: "Contact Us"
      }
    },
    fr: {
      title: "Nos Services",
      subtitle: "Des solutions complètes pour la main-d'œuvre africaine moderne.",
      desc: "Du recrutement mondial et de la gestion de la paie au conseil stratégique, nous fournissons l'infrastructure et l'expertise dont vous avez besoin pour croître.",
      mainServices: [
        {
          id: 'eor',
          title: "Portage Salarial (EoR)",
          icon: Globe,
          desc: "Recrutez n'importe où en Afrique sans créer d'entité locale. Nous gérons la conformité, la paie et les avantages.",
          href: "/services/eor"
        },
        {
          id: 'outsource-payroll',
          title: "Externalisation Paie",
          icon: Briefcase,
          desc: "Services de paie entièrement gérés pour garantir l'exactitude, la conformité et les paiements en temps voulu.",
          href: "/services/outsource-payroll"
        }
      ],
      consultingTitle: "Services de Conseil",
      consultingDesc: "Un accompagnement d'experts pour naviguer dans la complexité et débloquer la croissance.",
      consultingCategories: [
        { id: 'hr-payroll', title: "Conseil RH & Paie", icon: Users },
        { id: 'financial-tax', title: "Conseil Fiscal & Financier", icon: ShieldCheck },
        { id: 'business-growth', title: "Croissance de l'Entreprise", icon: TrendingUp },
        { id: 'training', title: "Formation", icon: GraduationCap },
        { id: 'specialized', title: "Services Spécialisés", icon: Briefcase },
        { id: 'partners', title: "Programmes Partenaires", icon: Handshake }
      ],
      cta: {
        title: "Vous ne savez pas de quoi vous avez besoin ?",
        subtitle: "Nos experts sont prêts à vous aider à trouver la bonne solution.",
        button: "Contactez-nous"
      }
    },
    pt: {
      title: "Nossos Serviços",
      subtitle: "Soluções abrangentes para a força de trabalho africana moderna.",
      desc: "Desde a contratação global e gestão de folha de pagamento até à consultoria estratégica, fornecemos a infraestrutura e a experiência necessária para crescer.",
      mainServices: [
        {
          id: 'eor',
          title: "Empregador de Registo (EoR)",
          icon: Globe,
          desc: "Contrate em qualquer lugar de África sem criar uma entidade local. Tratamos da conformidade, folha e benefícios.",
          href: "/services/eor"
        },
        {
          id: 'outsource-payroll',
          title: "Terceirização de Folha",
          icon: Briefcase,
          desc: "Serviços de folha de pagamento totalmente geridos para garantir precisão, conformidade e pagamentos atempados.",
          href: "/services/outsource-payroll"
        }
      ],
      consultingTitle: "Serviços de Consultoria",
      consultingDesc: "Orientação especializada para navegar na complexidade e desbloquear o crescimento.",
      consultingCategories: [
        { id: 'hr-payroll', title: "Consultoria de RH e Folha", icon: Users },
        { id: 'financial-tax', title: "Consultoria Financeira e Fiscal", icon: ShieldCheck },
        { id: 'business-growth', title: "Crescimento do Negócio", icon: TrendingUp },
        { id: 'training', title: "Formação", icon: GraduationCap },
        { id: 'specialized', title: "Serviços Especializados", icon: Briefcase },
        { id: 'partners', title: "Programmes Partenaires", icon: Handshake }
      ],
      cta: {
        title: "Não tem a certeza do que precisa?",
        subtitle: "Os nossos especialistas estão prontos para o ajudar a encontrar a solução certa.",
        button: "Contacte-nos"
      }
    }
  };

  const t = content[language as keyof typeof content] || content.en;

  const breadcrumbs = [
    { label: t.title, href: '/services' }
  ];

  return (
    <div className="pt-20">
      <section className="bg-brand-navy py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_20%,rgba(78,242,216,0.1),transparent_50%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumbs items={breadcrumbs} />
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-8 tracking-tight leading-[1.1]">
              {t.title}
            </h1>
            <p className="text-xl text-white/60 leading-relaxed">
              {t.desc}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 mb-24">
            {t.mainServices.map((service, idx) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-brand-navy/[0.02] border border-brand-navy/5 rounded-[40px] p-10 hover:border-brand-cyan/30 transition-all group"
              >
                <div className="w-16 h-16 bg-brand-navy/5 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-brand-navy group-hover:text-brand-cyan transition-all">
                  <service.icon className="w-8 h-8" />
                </div>
                <h3 className="text-3xl font-bold text-brand-navy mb-4">{service.title}</h3>
                <p className="text-brand-navy/60 text-lg mb-8">{service.desc}</p>
                <Link 
                  to={service.href}
                  className="inline-flex items-center font-bold text-brand-navy hover:text-brand-cyan transition-colors"
                >
                  {language === 'en' ? 'Learn More' : language === 'fr' ? 'En savoir plus' : 'Saiba Mais'}
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-brand-navy mb-4">{t.consultingTitle}</h2>
            <p className="text-brand-navy/60 text-lg">{t.consultingDesc}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {t.consultingCategories.map((cat, idx) => (
              <Link
                key={cat.id}
                to={`/services/consulting/${cat.id}`}
                className="flex items-center p-6 rounded-2xl border border-brand-navy/5 hover:border-brand-cyan/30 hover:bg-brand-navy/[0.02] transition-all group"
              >
                <div className="w-12 h-12 bg-brand-navy/5 rounded-xl flex items-center justify-center mr-4 group-hover:bg-brand-navy group-hover:text-brand-cyan transition-all">
                  <cat.icon className="w-6 h-6" />
                </div>
                <span className="font-bold text-brand-navy">{cat.title}</span>
                <ArrowRight className="ml-auto w-4 h-4 text-brand-navy/20 group-hover:text-brand-cyan transition-colors" />
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Link 
              to="/services/consulting"
              className="bg-brand-navy text-white px-8 py-4 rounded-full font-bold hover:bg-brand-navy/90 transition-all inline-block"
            >
              {language === 'en' ? 'Explore All Advice' : language === 'fr' ? 'Explorer tout le conseil' : 'Explorar Toda a Consultoria'}
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-brand-navy mb-4">
              {language === 'en' ? 'Frequently Asked Questions' : language === 'fr' ? 'Foire aux questions' : 'Perguntas Frequentes'}
            </h2>
            <p className="text-brand-navy/60 text-lg">
              {language === 'en' ? 'Common questions about our services and how we help businesses grow in Africa.' : language === 'fr' ? 'Questions courantes sur nos services et comment nous aidons les entreprises à croître en Afrique.' : 'Perguntas comuns sobre nossos serviços e como ajudamos as empresas a crescer em África.'}
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                q: language === 'en' ? "What is an Employer of Record (EoR)?" : language === 'fr' ? "Qu'est-ce qu'un Portage Salarial (EoR) ?" : "O que é um Empregador de Registo (EoR)?",
                a: language === 'en' ? "An EoR allows you to hire employees in a country where you don't have a legal entity. We handle payroll, taxes, benefits, and compliance." : language === 'fr' ? "Un EoR vous permet d'embaucher des employés dans un pays où vous n'avez pas d'entité légale. Nous gérons la paie, les impôts, les avantages et la conformité." : "Um EoR permite-lhe contratar funcionários num país onde não tem uma entidade legal. Tratamos da folha de pagamento, impostos, benefícios e conformidade."
              },
              {
                q: language === 'en' ? "How quickly can I start hiring?" : language === 'fr' ? "À quelle vitesse puis-je commencer à embaucher ?" : "Com que rapidez posso começar a contratar?",
                a: language === 'en' ? "With our EoR services, you can typically have your first employee onboarded and ready to work in as little as 48 hours." : language === 'fr' ? "Avec nos services EoR, vous pouvez généralement avoir votre premier employé intégré et prêt à travailler en seulement 48 heures." : "Com os nossos serviços de EoR, normalmente pode ter o seu primeiro funcionário integrado e pronto a trabalhar em apenas 48 horas."
              },
              {
                q: language === 'en' ? "Which African countries do you cover?" : language === 'fr' ? "Quels pays africains couvrez-vous ?" : "Quais países africanos vocês cobrem?",
                a: language === 'en' ? "We have a strong presence across major African markets including Nigeria, Kenya, South Africa, Ghana, Rwanda, and many more." : language === 'fr' ? "Nous avons une forte présence sur les principaux marchés africains, notamment le Nigeria, le Kenya, l'Afrique du Sud, le Ghana, le Rwanda et bien d'autres." : "Temos uma forte presença nos principais mercados africanos, incluindo Nigéria, Quénia, África do Sul, Gana, Ruanda e muitos outros."
              },
              {
                q: language === 'en' ? "Is my data secure with Fluide?" : language === 'fr' ? "Mes données sont-elles en sécurité avec Fluide ?" : "Os meus dados estão seguros com a Fluide?",
                a: language === 'en' ? "Yes, we use enterprise-grade security and are fully compliant with local data protection laws like GDPR and NDPR." : language === 'fr' ? "Oui, nous utilisons une sécurité de niveau entreprise et sommes entièrement conformes aux lois locales sur la protection des données comme le RGPD." : "Sim, utilizamos segurança de nível empresarial e estamos em total conformidade com as leis locais de proteção de dados."
              }
            ].map((faq, idx) => (
              <div key={idx} className="bg-brand-navy/[0.02] p-8 rounded-3xl border border-brand-navy/5">
                <h4 className="font-bold text-brand-navy mb-3 flex items-start">
                  <span className="text-brand-cyan mr-2">Q:</span>
                  {faq.q}
                </h4>
                <p className="text-brand-navy/60 leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-brand-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 tracking-tight">
            {language === 'en' ? 'Ready to scale your team in Africa?' : language === 'fr' ? 'Prêt à développer votre équipe en Afrique ?' : 'Pronto para expandir a sua equipa em África?'}
          </h2>
          <p className="text-xl text-white/60 mb-12 max-w-2xl mx-auto leading-relaxed">
            {language === 'en' ? 'Join hundreds of companies using Fluide to manage their global workforce with confidence and ease.' : language === 'fr' ? 'Rejoignez des centaines d\'entreprises utilisant Fluide pour gérer leur main-d\'œuvre mondiale en toute confiance et simplicité.' : 'Junte-se a centenas de empresas que utilizam a Fluide para gerir a sua força de trabalho global com confiança e facilidade.'}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              to="/contact"
              className="w-full sm:w-auto bg-brand-cyan text-brand-navy px-10 py-4 rounded-full font-bold text-lg hover:bg-white transition-all shadow-lg shadow-brand-cyan/20"
            >
              {language === 'en' ? 'Talk to an Expert' : language === 'fr' ? 'Parler à un expert' : 'Falar com um Especialista'}
            </Link>
            <Link 
              to="/onboarding"
              className="w-full sm:w-auto bg-white/10 text-white border border-white/20 px-10 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all"
            >
              {language === 'en' ? 'Get Started Now' : language === 'fr' ? 'Commencer maintenant' : 'Começar Agora'}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
