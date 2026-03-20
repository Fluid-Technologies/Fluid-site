import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { useLanguage } from '../../context/LanguageContext';
import { CheckCircle2, ArrowRight, ShieldCheck, Users, GraduationCap, Briefcase, TrendingUp, Handshake, HelpCircle } from 'lucide-react';
import Breadcrumbs from '../../components/Breadcrumbs';
import { consultingData } from '../../constants/consultingData';

import { ServiceLanguageContent, CategoryLanguageContent } from '../../types/consulting';

const ConsultingService = () => {
  const { categoryId, serviceId } = useParams();
  const { language } = useLanguage();

  const service = consultingData.services[serviceId || ''];
  const category = consultingData.categories[categoryId || ''];

  if (!service || !category) return <div className="pt-32 text-center">Service not found</div>;

  const t = (service[language as 'en' | 'fr' | 'pt'] || service.en) as ServiceLanguageContent;
  const catT = (category[language as 'en' | 'fr' | 'pt'] || category.en) as CategoryLanguageContent;

  const breadcrumbs = [
    { label: language === 'en' ? 'Services' : language === 'fr' ? 'Services' : 'Serviços', href: '/services' },
    { label: language === 'en' ? 'Consulting' : language === 'fr' ? 'Conseil' : 'Consultoria', href: '/services/consulting' },
    { label: catT.title, href: `/services/consulting/${categoryId}` },
    { label: t.title, href: `/services/consulting/${categoryId}/${serviceId}` }
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
            <div className="w-16 h-16 bg-brand-cyan/20 rounded-2xl flex items-center justify-center mb-8 text-brand-cyan">
              <service.icon className="w-8 h-8" />
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-8 tracking-tight leading-[1.1]">
              {t.title}
            </h1>
            <p className="text-2xl text-brand-cyan font-bold mb-6">
              {t.subtitle}
            </p>
            <p className="text-xl text-white/60 leading-relaxed mb-8">
              {t.desc}
            </p>
            {service.productLink && (
              <Link 
                to={service.productLink.href}
                className="inline-flex items-center space-x-2 text-brand-cyan hover:text-white transition-colors font-bold text-lg group"
              >
                <span>{service.productLink[language as keyof typeof service.productLink] || service.productLink.en}</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            )}
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl font-bold text-brand-navy mb-6">{t.problemTitle}</h2>
              <p className="text-xl text-brand-navy/60 mb-10 leading-relaxed">
                {t.problemText}
              </p>
              
              <h2 className="text-3xl font-bold text-brand-navy mb-8">{t.solutionTitle}</h2>
              <div className="space-y-8">
                {t.reviewAreas?.map((area: any, idx: number) => (
                  <div key={idx} className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-brand-cyan/20 rounded-full flex items-center justify-center shrink-0 mt-1">
                      <CheckCircle2 className="w-4 h-4 text-brand-cyan" />
                    </div>
                    <div>
                      <h4 className="font-bold text-brand-navy text-lg mb-1">{area.title}</h4>
                      <p className="text-brand-navy/60">{area.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-brand-navy/[0.02] p-10 rounded-[40px] border border-brand-navy/5 sticky top-32">
              <h2 className="text-2xl font-bold text-brand-navy mb-8">
                {language === 'en' ? 'Our Process' : language === 'fr' ? 'Notre processus' : 'Nosso Processo'}
              </h2>
              <div className="space-y-8">
                {t.processSteps?.map((step: any, idx: number) => (
                  <div key={idx} className="flex items-center space-x-6">
                    <div className="w-10 h-10 bg-brand-navy text-brand-cyan rounded-full flex items-center justify-center font-bold shrink-0">
                      {idx + 1}
                    </div>
                    <div>
                      <p className="font-bold text-brand-navy">{step.title}</p>
                      <p className="text-sm text-brand-navy/60">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 pt-8 border-t border-brand-navy/10">
                <h3 className="text-xl font-bold text-brand-navy mb-4">{t.pricingTitle}</h3>
                <ul className="space-y-2 mb-8">
                  {t.pricingModels?.map((model: string, idx: number) => (
                    <li key={idx} className="text-brand-navy/70 flex items-center">
                      <div className="w-1.5 h-1.5 bg-brand-cyan rounded-full mr-2" />
                      {model}
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-brand-navy text-white py-4 rounded-xl font-bold hover:bg-brand-navy/90 transition-all">
                  {language === 'en' ? 'Get Started' : language === 'fr' ? 'Commencer' : 'Começar'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-brand-navy mb-4">
              {language === 'en' ? 'Service FAQs' : language === 'fr' ? 'FAQ du service' : 'Perguntas do Serviço'}
            </h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                q: language === 'en' ? "How long does a typical engagement last?" : language === 'fr' ? "Combien de temps dure une mission typique ?" : "Quanto tempo dura um compromisso típico?",
                a: language === 'en' ? "Engagement length varies based on complexity, ranging from a few weeks for specific reviews to several months for full implementation support." : language === 'fr' ? "La durée de la mission varie en fonction de la complexité, allant de quelques semaines pour des examens spécifiques à plusieurs mois pour un soutien complet à la mise en œuvre." : "A duração do compromisso varia com base na complexidade, variando de algumas semanas para revisões específicas a vários meses para apoio total à implementação."
              },
              {
                q: language === 'en' ? "Can you work with our existing team?" : language === 'fr' ? "Pouvez-vous travailler avec notre équipe existante ?" : "Podem trabalhar com a nossa equipa existente?",
                a: language === 'en' ? "Absolutely. We often work as an extension of your internal HR, finance, or leadership teams to provide specialized expertise." : language === 'fr' ? "Absolument. Nous travaillons souvent comme une extension de vos équipes internes RH, finance ou direction pour apporter une expertise spécialisée." : "Absolutamente. Frequentemente trabalhamos como uma extensão das suas equipas internas de RH, finanças ou liderança para fornecer expertise especializada."
              }
            ].map((faq, idx) => (
              <div key={idx} className="bg-brand-navy/[0.02] p-8 rounded-3xl border border-brand-navy/5">
                <h4 className="font-bold text-xl text-brand-navy mb-3 flex items-start">
                  <HelpCircle className="w-6 h-6 mr-3 text-brand-cyan shrink-0 mt-0.5" />
                  {faq.q}
                </h4>
                <p className="text-brand-navy/60 leading-relaxed ml-9">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-brand-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 tracking-tight">
            {language === 'en' ? 'Get expert guidance today' : language === 'fr' ? 'Obtenez des conseils d\'experts dès aujourd\'hui' : 'Obtenha orientação especializada hoje'}
          </h2>
          <p className="text-xl text-white/60 mb-12 max-w-2xl mx-auto leading-relaxed">
            {language === 'en' ? `Our ${t.title} specialists are ready to help you solve your most pressing business challenges.` : language === 'fr' ? `Nos spécialistes en ${t.title} sont prêts à vous aider à résoudre vos défis commerciaux les plus pressants.` : `Os nossos especialistas em ${t.title} estão prontos para o ajudar a resolver os seus desafios de negócio mais prementes.`}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              to="/contact"
              className="w-full sm:w-auto bg-brand-cyan text-brand-navy px-10 py-4 rounded-full font-bold text-lg hover:bg-white transition-all shadow-lg shadow-brand-cyan/20"
            >
              {language === 'en' ? 'Schedule a Consultation' : language === 'fr' ? 'Planifier une consultation' : 'Agendar uma Consulta'}
            </Link>
            <Link 
              to={`/services/consulting/${categoryId}`}
              className="w-full sm:w-auto bg-white/10 text-white border border-white/20 px-10 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all"
            >
              {language === 'en' ? 'Back to Category' : language === 'fr' ? 'Retour à la catégorie' : 'Voltar à Categoria'}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ConsultingService;
