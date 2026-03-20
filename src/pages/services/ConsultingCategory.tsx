import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { useLanguage } from '../../context/LanguageContext';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import Breadcrumbs from '../../components/Breadcrumbs';
import { consultingData } from '../../constants/consultingData';

import { CategoryLanguageContent } from '../../types/consulting';

const ConsultingCategory = () => {
  const { categoryId } = useParams();
  const { language } = useLanguage();
  
  const category = consultingData.categories[categoryId || ''];
  if (!category) return <div className="pt-32 text-center">Category not found</div>;

  const t = (category[language as 'en' | 'fr' | 'pt'] || category.en) as CategoryLanguageContent;
  const services = category.services;

  const breadcrumbs = [
    { label: language === 'en' ? 'Services' : language === 'fr' ? 'Services' : 'Serviços', href: '/services' },
    { label: language === 'en' ? 'Consulting' : language === 'fr' ? 'Conseil' : 'Consultoria', href: '/services/consulting' },
    { label: t.title, href: `/services/consulting/${categoryId}` }
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
              <category.icon className="w-8 h-8" />
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-8 tracking-tight leading-[1.1]">
              {t.title}
            </h1>
            <p className="text-2xl text-brand-cyan font-bold mb-6">
              {t.subtitle}
            </p>
            <p className="text-xl text-white/60 leading-relaxed">
              {t.desc}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-brand-navy mb-12">
            {language === 'en' ? 'Services in this Category' : language === 'fr' ? 'Services dans cette catégorie' : 'Serviços nesta Categoria'}
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service: any) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-brand-navy/[0.02] border border-brand-navy/5 rounded-[40px] p-10 hover:border-brand-cyan/30 transition-all group"
              >
                <h3 className="text-2xl font-bold text-brand-navy mb-4">{service[language as keyof typeof service] || service.en}</h3>
                <p className="text-brand-navy/60 mb-8">
                  {language === 'en' ? 'Expert advisory and implementation support for ' : language === 'fr' ? 'Conseil d\'experts et soutien à la mise en œuvre pour ' : 'Consultoria especializada e apoio à implementação para '}
                  {service[language as keyof typeof service] || service.en}.
                </p>
                <Link 
                  to={`/services/consulting/${categoryId}/${service.id}`}
                  className="inline-flex items-center font-bold text-brand-navy hover:text-brand-cyan transition-colors"
                >
                  {language === 'en' ? 'Learn More' : language === 'fr' ? 'En savoir plus' : 'Saiba Mais'}
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-brand-navy/[0.02]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-brand-navy mb-8">
                {language === 'en' ? 'Why Choose Fluide for ' : language === 'fr' ? 'Pourquoi choisir Fluide pour ' : 'Porquê Escolher a Fluide para '}
                {t.title}
              </h2>
              <div className="space-y-6">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-brand-cyan/20 rounded-full flex items-center justify-center shrink-0 mt-1">
                      <CheckCircle2 className="w-4 h-4 text-brand-cyan" />
                    </div>
                    <div>
                      <h4 className="font-bold text-brand-navy">
                        {language === 'en' ? `Benefit ${i}` : language === 'fr' ? `Avantage ${i}` : `Benefício ${i}`}
                      </h4>
                      <p className="text-brand-navy/60">
                        {language === 'en' ? 'Strategic expertise tailored to your specific business needs and local market context.' : language === 'fr' ? 'Expertise stratégique adaptée à vos besoins spécifiques et au contexte du marché local.' : 'Expertise estratégica adaptada às suas necessidades específicas e ao contexto do mercado local.'}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img 
                src={`https://picsum.photos/seed/${categoryId}/800/600`} 
                alt={t.title} 
                className="rounded-[40px] shadow-2xl"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-brand-navy mb-4">
              {language === 'en' ? 'Common Questions' : language === 'fr' ? 'Questions fréquentes' : 'Perguntas Comuns'}
            </h2>
            <p className="text-brand-navy/60 text-lg">
              {language === 'en' ? `Everything you need to know about our ${t.title} services.` : language === 'fr' ? `Tout ce que vous devez savoir sur nos services de ${t.title}.` : `Tudo o que precisa de saber sobre os nossos serviços de ${t.title}.`}
            </p>
          </div>
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                q: language === 'en' ? "How do you tailor your advice?" : language === 'fr' ? "Comment adaptez-vous vos conseils ?" : "Como adaptam os vossos conselhos?",
                a: language === 'en' ? "We begin with a deep dive into your specific business context, challenges, and goals to ensure our recommendations are practical and impactful." : language === 'fr' ? "Nous commençons par une analyse approfondie de votre contexte commercial, de vos défis et de vos objectifs pour garantir que nos recommandations sont pratiques et percutantes." : "Começamos com uma análise profunda do seu contexto de negócio, desafios e objetivos para garantir que as nossas recomendações sejam práticas e impactantes."
              },
              {
                q: language === 'en' ? "Do you help with implementation?" : language === 'fr' ? "Aidez-vous à la mise en œuvre ?" : "Ajudam na implementação?",
                a: language === 'en' ? "Yes, we don't just provide reports. We work alongside your team to ensure successful execution and measurable results." : language === 'fr' ? "Oui, nous ne fournissons pas seulement des rapports. Nous travaillons aux côtés de votre équipe pour assurer une exécution réussie et des résultats mesurables." : "Sim, não fornecemos apenas relatórios. Trabalhamos ao lado da sua equipa para garantir uma execução bem-sucedida e resultados mensuráveis."
              }
            ].map((faq, idx) => (
              <div key={idx} className="border-b border-brand-navy/10 pb-6">
                <h4 className="font-bold text-xl text-brand-navy mb-3">{faq.q}</h4>
                <p className="text-brand-navy/60 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-brand-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 tracking-tight">
            {language === 'en' ? 'Ready to transform your business?' : language === 'fr' ? 'Prêt à transformer votre entreprise ?' : 'Pronto para transformar o seu negócio?'}
          </h2>
          <p className="text-xl text-white/60 mb-12 max-w-2xl mx-auto leading-relaxed">
            {language === 'en' ? `Our ${t.title} experts are ready to help you navigate complexity and unlock sustainable growth.` : language === 'fr' ? `Nos experts en ${t.title} sont prêts à vous aider à naviguer dans la complexité et à débloquer une croissance durable.` : `Os nossos especialistas em ${t.title} estão prontos para o ajudar a navegar pela complexidade e a desbloquear um crescimento sustentável.`}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              to="/contact"
              className="w-full sm:w-auto bg-brand-cyan text-brand-navy px-10 py-4 rounded-full font-bold text-lg hover:bg-white transition-all shadow-lg shadow-brand-cyan/20"
            >
              {language === 'en' ? 'Book a Free Strategy Session' : language === 'fr' ? 'Réserver une session stratégique gratuite' : 'Marcar Sessão Estratégica Gratuita'}
            </Link>
            <Link 
              to="/services"
              className="w-full sm:w-auto bg-white/10 text-white border border-white/20 px-10 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all"
            >
              {language === 'en' ? 'View All Services' : language === 'fr' ? 'Voir tous les services' : 'Ver Todos os Serviços'}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ConsultingCategory;
