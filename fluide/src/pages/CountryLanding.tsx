import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { countryData } from '../constants/countryData';
import { motion } from 'motion/react';
import { Shield, CreditCard, ArrowRight, CheckCircle2, MapPin, Globe } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const CountryLanding = () => {
  const { countryCode } = useParams<{ countryCode: string }>();
  const { language } = useLanguage();
  
  const data = countryCode ? countryData[countryCode] : null;

  const content = {
    en: {
      notFound: {
        title: "Country page not found",
        desc: "We haven't launched in this region yet, but we're expanding fast!",
        back: "Back to Homepage"
      },
      hero: {
        getStarted: "Get Started",
        viewPricing: "View Pricing"
      },
      compliance: {
        desc: (name: string) => `We handle all the complexities of ${name} labor laws and tax regulations so you can focus on growing your business.`,
        boxTitle: "Compliant by Design",
        boxDesc: "Our platform is hard-coded with local regulations. From tax brackets to social security contributions, everything is calculated automatically and updated in real-time as laws change."
      },
      payments: {
        desc: (name: string) => `Disburse salaries and payments through the methods your employees in ${name} already use and trust.`
      },
      testimonials: {
        title: "Trusted by local businesses"
      },
      cta: {
        title: (name: string) => `Ready to scale in ${name}?`,
        desc: "Join hundreds of businesses using Fluide to manage their workforce, stay compliant, and empower their employees.",
        button: "Book a Demo"
      }
    },
    fr: {
      notFound: {
        title: "Page du pays introuvable",
        desc: "Nous ne sommes pas encore lancés dans cette région, mais nous nous développons rapidement !",
        back: "Retour à l'accueil"
      },
      hero: {
        getStarted: "Commencer",
        viewPricing: "Voir les tarifs"
      },
      compliance: {
        desc: (name: string) => `Nous gérons toutes les complexités des lois du travail et des réglementations fiscales de ${name} afin que vous puissiez vous concentrer sur la croissance de votre entreprise.`,
        boxTitle: "Conforme par conception",
        boxDesc: "Notre plateforme intègre les réglementations locales. Des tranches d'imposition aux cotisations de sécurité sociale, tout est calculé automatiquement et mis à jour en temps réel."
      },
      payments: {
        desc: (name: string) => `Versez les salaires et les paiements via les méthodes que vos employés au ${name} utilisent et apprécient déjà.`
      },
      testimonials: {
        title: "Approuvé par les entreprises locales"
      },
      cta: {
        title: (name: string) => `Prêt à vous développer au ${name} ?`,
        desc: "Rejoignez des centaines d'entreprises qui utilisent Fluide pour gérer leur personnel, rester en conformité et responsabiliser leurs employés.",
        button: "Réserver une démo"
      }
    },
    pt: {
      notFound: {
        title: "Página do país não encontrada",
        desc: "Ainda não lançámos nesta região, mas estamos a expandir-nos rapidamente!",
        back: "Voltar à página inicial"
      },
      hero: {
        getStarted: "Começar",
        viewPricing: "Ver preços"
      },
      compliance: {
        desc: (name: string) => `Lidamos com todas as complexidades das leis laborais e regulamentos fiscais de ${name} para que se possa focar no crescimento do seu negócio.`,
        boxTitle: "Conformidade por Design",
        boxDesc: "A nossa plataforma está programada com os regulamentos locais. Desde os escalões de impostos às contribuições para a segurança social, tudo é calculado automaticamente e atualizado em tempo real."
      },
      payments: {
        desc: (name: string) => `Desembolse salários e pagamentos através dos métodos que os seus funcionários em ${name} já usam e confiam.`
      },
      testimonials: {
        title: "Com a confiança de empresas locais"
      },
      cta: {
        title: (name: string) => `Pronto para escalar em ${name}?`,
        desc: "Junte-se a centenas de empresas que usam a Fluide para gerir a sua força de trabalho, manter a conformidade e capacitar os seus funcionários.",
        button: "Agendar uma Demonstração"
      }
    }
  };

  const t = content[language as keyof typeof content] || content.en;

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white p-4">
        <div className="text-center">
          <Globe className="w-16 h-16 text-brand-navy/20 mx-auto mb-6" />
          <h1 className="text-2xl font-bold text-brand-navy mb-4">{t.notFound.title}</h1>
          <p className="text-brand-navy/60 mb-8">{t.notFound.desc}</p>
          <Link to="/" className="inline-flex items-center space-x-2 text-brand-cyan font-bold hover:underline">
            <span>{t.notFound.back}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 bg-brand-navy text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(78,242,216,0.1),transparent_70%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-brand-cyan text-xs font-bold uppercase tracking-widest mb-6"
            >
              <MapPin className="w-3 h-3" />
              <span>Fluide {data.name}</span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
            >
              {data.hero.headline[language] || data.hero.headline['en']}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-white/70 mb-10 leading-relaxed"
            >
              {data.hero.subheadline[language] || data.hero.subheadline['en']}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                to="/onboarding"
                className="px-8 py-4 bg-brand-cyan text-brand-navy font-bold rounded-2xl hover:bg-white transition-all transform hover:scale-105"
              >
                {t.hero.getStarted}
              </Link>
              <Link
                to="/pricing"
                className="px-8 py-4 bg-white/10 text-white font-bold rounded-2xl hover:bg-white/20 transition-all border border-white/20"
              >
                {t.hero.viewPricing}
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="w-12 h-12 bg-brand-navy/5 rounded-2xl flex items-center justify-center mb-6">
                <Shield className="w-6 h-6 text-brand-navy" />
              </div>
              <h2 className="text-4xl font-bold text-brand-navy mb-6">
                {data.compliance.title[language] || data.compliance.title['en']}
              </h2>
              <p className="text-brand-navy/60 text-lg mb-8 leading-relaxed">
                {t.compliance.desc(data.name)}
              </p>
              <div className="space-y-4">
                {data.compliance.items.map((item, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-4 p-4 rounded-2xl border border-brand-navy/5 hover:border-brand-navy/10 transition-colors"
                  >
                    <div className="mt-1">
                      <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                    </div>
                    <div>
                      <div className="font-bold text-brand-navy">{item.label[language] || item.label['en']}</div>
                      <div className="text-sm text-brand-navy/40 mb-1 font-medium">{item.value}</div>
                      <p className="text-sm text-brand-navy/60">{item.description[language] || item.description['en']}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-brand-cyan/20 rounded-[40px] blur-3xl" />
              <div className="relative bg-brand-navy rounded-[40px] p-8 text-white aspect-square flex flex-col justify-center">
                <div className="text-6xl font-black mb-6 opacity-20">100%</div>
                <h3 className="text-3xl font-bold mb-4">{t.compliance.boxTitle}</h3>
                <p className="text-white/60 leading-relaxed">
                  {t.compliance.boxDesc}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Payments Section */}
      <section className="py-24 bg-brand-navy/[0.02]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="w-12 h-12 bg-brand-navy/5 rounded-2xl flex items-center justify-center mb-6 mx-auto">
              <CreditCard className="w-6 h-6 text-brand-navy" />
            </div>
            <h2 className="text-4xl font-bold text-brand-navy mb-4">
              {data.payments.title[language] || data.payments.title['en']}
            </h2>
            <p className="text-brand-navy/60 max-w-2xl mx-auto">
              {t.payments.desc(data.name)}
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {data.payments.methods.map((method, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white p-8 rounded-3xl border border-brand-navy/5 text-center shadow-sm hover:shadow-md transition-all"
              >
                <div className="w-16 h-16 bg-brand-navy/5 rounded-2xl flex items-center justify-center mb-4 mx-auto">
                  <span className="text-2xl font-bold text-brand-navy">{method.name.charAt(0)}</span>
                </div>
                <div className="font-bold text-brand-navy mb-1">{method.name}</div>
                <div className="text-xs text-brand-navy/40 uppercase tracking-widest font-black">
                  {method.type[language] || method.type['en']}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      {data.testimonials && data.testimonials.length > 0 && (
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-brand-navy mb-4">
                {t.testimonials.title}
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {data.testimonials.map((testimonial, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-brand-navy/[0.02] p-8 rounded-3xl border border-brand-navy/5"
                >
                  <div className="text-brand-cyan mb-6">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>
                  <p className="text-brand-navy/80 text-lg mb-8 italic">
                    "{testimonial.quote[language] || testimonial.quote['en']}"
                  </p>
                  <div>
                    <div className="font-bold text-brand-navy">{testimonial.author}</div>
                    <div className="text-sm text-brand-navy/60">
                      {testimonial.role[language] || testimonial.role['en']}, {testimonial.company}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-brand-cyan rounded-[40px] p-12 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl" />
            <div className="relative z-10">
              <h2 className="text-4xl font-bold text-brand-navy mb-6">
                {t.cta.title(data.name)}
              </h2>
              <p className="text-brand-navy/70 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
                {t.cta.desc}
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center space-x-3 px-10 py-5 bg-brand-navy text-white font-bold rounded-2xl hover:bg-brand-navy/90 transition-all transform hover:scale-105"
              >
                <span>{t.cta.button}</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CountryLanding;
