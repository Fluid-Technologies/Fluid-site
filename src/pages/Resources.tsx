import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { BookOpen, FileText, Video, Download, ArrowRight } from 'lucide-react';

const Resources = () => {
  const { language } = useLanguage();

  const content = {
    hero: {
      title: { en: 'Resources Hub', fr: 'Centre de Ressources', pt: 'Centro de Recursos' },
      desc: {
        en: 'Everything you need to know about hiring, payroll, and growing your business in Africa.',
        fr: 'Tout ce que vous devez savoir sur le recrutement, la paie et le développement de votre entreprise en Afrique.',
        pt: 'Tudo o que precisa de saber sobre contratação, processamento salarial e crescimento do seu negócio em África.'
      }
    },
    labels: {
      resources: { en: 'resources', fr: 'ressources', pt: 'recursos' },
      featured: { en: 'Featured Content', fr: 'Contenu en Vedette', pt: 'Conteúdo em Destaque' },
      readMore: { en: 'Read More', fr: 'Lire la suite', pt: 'Ler Mais' }
    }
  };

  const categories = [
    { title: { en: 'Guides & E-books', fr: 'Guides et E-books', pt: 'Guias e E-books' }, icon: BookOpen, count: 12 },
    { title: { en: 'Case Studies', fr: 'Études de Cas', pt: 'Estudos de Caso' }, icon: FileText, count: 8 },
    { title: { en: 'Video Tutorials', fr: 'Tutoriels Vidéo', pt: 'Tutoriais em Vídeo' }, icon: Video, count: 24 },
    { title: { en: 'Templates', fr: 'Modèles', pt: 'Modelos' }, icon: Download, count: 15 },
  ];

  const featured = [
    { title: { en: 'The Future of Payroll in Africa 2025', fr: 'L\'Avenir de la Paie en Afrique 2025', pt: 'O Futuro do Processamento Salarial em África 2025' }, category: { en: 'Report', fr: 'Rapport', pt: 'Relatório' }, image: 'https://picsum.photos/seed/report/800/450' },
    { title: { en: 'How to scale your SME from 5 to 50 employees', fr: 'Comment faire passer votre PME de 5 à 50 employés', pt: 'Como escalar a sua PME de 5 para 50 colaboradores' }, category: { en: 'Guide', fr: 'Guide', pt: 'Guia' }, image: 'https://picsum.photos/seed/guide/800/450' },
    { title: { en: 'Understanding CNPS compliance in Cameroon', fr: 'Comprendre la conformité CNPS au Cameroun', pt: 'Compreender a conformidade CNPS nos Camarões' }, category: { en: 'Compliance', fr: 'Conformité', pt: 'Conformidade' }, image: 'https://picsum.photos/seed/legal/800/450' },
  ];

  return (
    <div className="pt-20">
      <section className="py-24 bg-brand-navy/[0.02] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_20%,rgba(78,242,216,0.05),transparent_50%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mb-16">
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight mb-8 leading-tight text-brand-navy">{content.hero.title[language]}</h1>
            <p className="text-xl text-brand-navy/60 leading-relaxed">{content.hero.desc[language]}</p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
            {categories.map((cat, idx) => (
              <div key={idx} className="bg-white p-8 rounded-3xl border border-brand-navy/5 hover:border-brand-navy/20 hover:shadow-xl hover:shadow-brand-navy/5 transition-all cursor-pointer group">
                <div className="w-12 h-12 bg-brand-navy/5 rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-navy group-hover:text-brand-cyan transition-all">
                  <cat.icon className="w-6 h-6" />
                </div>
                <h3 className="font-bold mb-1 text-brand-navy">{cat.title[language]}</h3>
                <p className="text-sm text-brand-navy/40">{cat.count} {content.labels.resources[language]}</p>
              </div>
            ))}
          </div>

          <h2 className="text-3xl font-bold mb-12 text-brand-navy">{content.labels.featured[language]}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {featured.map((item, idx) => (
              <div key={idx} className="group cursor-pointer">
                <div className="aspect-video rounded-[32px] overflow-hidden mb-6 border border-brand-navy/5 shadow-sm group-hover:shadow-xl transition-all duration-500">
                  <img src={item.image} alt={item.title[language]} className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700" referrerPolicy="no-referrer" />
                </div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-brand-navy/40 mb-2">{item.category[language]}</div>
                <h3 className="text-xl font-bold mb-4 text-brand-navy group-hover:text-brand-navy/70 transition-all">{item.title[language]}</h3>
                <div className="flex items-center text-brand-navy font-bold text-sm">
                  <span>{content.labels.readMore[language]}</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-all text-brand-cyan" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resources;
