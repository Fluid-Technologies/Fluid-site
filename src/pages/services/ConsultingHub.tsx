import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../../context/LanguageContext';
import { ArrowRight, CheckCircle2, HelpCircle, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';
import Breadcrumbs from '../../components/Breadcrumbs';
import { consultingData } from '../../constants/consultingData';

const ConsultingHub = () => {
  const { language } = useLanguage();
  const t = consultingData.hub[language as keyof typeof consultingData.hub] || consultingData.hub.en;
  const categories = consultingData.categories;

  const breadcrumbs = [
    { label: language === 'en' ? 'Services' : language === 'fr' ? 'Services' : 'Serviços', href: '/services' },
    { label: language === 'en' ? 'Consulting' : language === 'fr' ? 'Conseil' : 'Consultoria', href: '/services/consulting' }
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
            <p className="text-xl text-white/60 leading-relaxed mb-10">
              {t.subtitle}
            </p>
            <button className="bg-brand-cyan text-brand-navy px-8 py-4 rounded-full font-bold hover:bg-white transition-all">
              {t.cta}
            </button>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            <div>
              <h2 className="text-3xl font-bold text-brand-navy mb-6">{t.introTitle}</h2>
              <div className="space-y-4 text-lg text-brand-navy/70">
                {t.introText.map((text: string, idx: number) => (
                  <p key={idx}>{text}</p>
                ))}
              </div>
              <div className="mt-8 p-6 bg-brand-cyan/10 rounded-2xl border border-brand-cyan/20">
                <p className="text-brand-navy font-bold">{t.discoveryText}</p>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://picsum.photos/seed/consulting/800/600" 
                alt="Consulting" 
                className="rounded-[40px] shadow-2xl"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-8 -left-8 bg-brand-navy p-8 rounded-3xl text-white max-w-xs shadow-xl hidden md:block">
                <MessageSquare className="w-8 h-8 text-brand-cyan mb-4" />
                <p className="font-medium italic">
                  {language === 'en' 
                    ? '"Fluide Consulting helped us navigate complexity and avoid costly mistakes."' 
                    : language === 'fr' 
                    ? '"Fluide Consulting nous a aidés à naviguer dans la complexité et à éviter des erreurs coûteuses."' 
                    : '"A Fluide Consulting ajudou-nos a navegar pela complexidade e a evitar erros dispendiosos."'}
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-4xl font-bold text-brand-navy mb-12 text-center">{t.categoriesTitle}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
            {Object.entries(categories).map(([key, cat]: [string, any], idx: number) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-brand-navy/[0.02] border border-brand-navy/5 rounded-[40px] p-8 hover:border-brand-cyan/30 transition-all group"
              >
                <div className="w-14 h-14 bg-brand-navy/5 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-navy group-hover:text-brand-cyan transition-all">
                  <cat.icon className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-brand-navy mb-2">{cat[language as keyof typeof cat]?.title || cat.en.title}</h3>
                <p className="text-brand-navy/60 mb-6">{cat[language as keyof typeof cat]?.desc || cat.en.desc}</p>
                <Link 
                  to={`/services/consulting/${key}`}
                  className="inline-flex items-center font-bold text-brand-navy hover:text-brand-cyan transition-colors"
                >
                  {language === 'en' ? 'Explore Category' : language === 'fr' ? 'Explorer la catégorie' : 'Explorar Categoria'}
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="bg-brand-navy rounded-[60px] p-12 lg:p-20 text-white overflow-hidden relative mb-24">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(circle_at_70%_30%,rgba(78,242,216,0.1),transparent_50%)] pointer-events-none" />
            <div className="relative z-10">
              <h2 className="text-4xl font-bold mb-12">{t.whyTitle}</h2>
              <div className="grid md:grid-cols-2 gap-12">
                {t.benefits.map((benefit: any, idx: number) => (
                  <div key={idx} className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-brand-cyan/20 rounded-full flex items-center justify-center shrink-0 mt-1">
                      <CheckCircle2 className="w-4 h-4 text-brand-cyan" />
                    </div>
                    <div>
                      <h4 className="font-bold text-xl mb-2">{benefit.title}</h4>
                      <p className="text-white/60">{benefit.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-24">
            {t.testimonials?.map((testimonial: any, idx: number) => (
              <div key={idx} className="bg-brand-navy/[0.02] p-10 rounded-[40px] border border-brand-navy/5 italic text-lg text-brand-navy/70 relative">
                <MessageSquare className="w-8 h-8 text-brand-cyan/20 absolute top-6 right-6" />
                <p className="mb-6">"{testimonial.quote}"</p>
                <p className="font-bold text-brand-navy not-italic">— {testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-brand-navy/[0.02]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-brand-navy mb-16 text-center">{t.processTitle}</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {t.processSteps.map((step: any, idx: number) => (
              <div key={idx} className="relative">
                <div className="w-12 h-12 bg-brand-navy text-brand-cyan rounded-full flex items-center justify-center font-bold text-xl mb-6">
                  {idx + 1}
                </div>
                <h4 className="font-bold text-xl text-brand-navy mb-2">{step.title}</h4>
                <p className="text-brand-navy/60">{step.desc}</p>
                {idx < 3 && (
                  <div className="hidden lg:block absolute top-6 left-12 w-full h-[2px] bg-brand-navy/10" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold text-brand-navy mb-8">{t.pricingTitle}</h2>
              <p className="text-xl text-brand-navy/60 mb-8">{t.pricingText}</p>
              <ul className="space-y-4">
                {t.pricingModels.map((model: string, idx: number) => (
                  <li key={idx} className="flex items-center space-x-3 text-brand-navy/80">
                    <div className="w-2 h-2 bg-brand-cyan rounded-full" />
                    <span>{model}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-brand-navy mb-8">{t.faqTitle}</h2>
              <div className="space-y-6">
                {t.faqs.map((faq: any, idx: number) => (
                  <div key={idx} className="border-b border-brand-navy/10 pb-6">
                    <h4 className="font-bold text-lg text-brand-navy mb-2 flex items-center">
                      <HelpCircle className="w-5 h-5 mr-2 text-brand-cyan" />
                      {faq.q}
                    </h4>
                    <p className="text-brand-navy/60">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-brand-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">{t.finalCta}</h2>
          <p className="text-xl text-white/60 mb-12 max-w-2xl mx-auto">{t.finalCtaSub}</p>
          <Link 
            to="/contact"
            className="bg-brand-cyan text-brand-navy px-10 py-4 rounded-full font-bold text-lg hover:bg-white transition-all inline-block"
          >
            {t.finalCtaButton}
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ConsultingHub;
