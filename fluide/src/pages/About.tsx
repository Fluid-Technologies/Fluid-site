import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'motion/react';
import { Target, Users, Globe, Award } from 'lucide-react';

const About = () => {
  const { language } = useLanguage();

  const content = {
    hero: {
      title: { en: 'Building the tools for Africa\'s workforce.', fr: 'Construire l\'infrastructure pour la main-d\'œuvre africaine.', pt: 'Construindo a infraestrutura para a força de trabalho da África.' },
      desc: {
        en: 'Fluide is on a mission to connect employers and employees across Africa digitally.',
        fr: 'Fluide a pour mission de numériser la relation entre employeurs et employés.',
        pt: 'A Fluide tem a missão de digitalizar a relação entre empregadores e empregados em todo o continente.'
      }
    },
    story: {
      title: { en: 'Our Story', fr: 'Notre Histoire', pt: 'A Nossa História' },
      p1: {
        en: 'Fluide started with a simple idea: African small businesses drive the economy, but they still run on paper, WhatsApp, and manual spreadsheets.',
        fr: 'Fluide est née d\'un constat simple : les PME africaines sont l\'épine dorsale de l\'économie, pourtant elles sont contraintes de fonctionner sur papier, WhatsApp et des feuilles de calcul manuelles.',
        pt: 'A Fluide nasceu de uma observação simples: as PMEs africanas são a espinha dorsal da economia, mas são forçadas a funcionar em papel, WhatsApp e folhas de cálculo manuais.'
      },
      p2: {
        en: 'This paperwork doesn\'t just slow down businesses; it hurts workers. When payroll is manual, salaries are late. When work isn\'t verified, job seekers get scammed. When data isn\'t digital, banks won\'t lend.',
        fr: 'Cette "friction administrative" ne ralentit pas seulement les entreprises ; elle nuit aux travailleurs. Quand la paie est manuelle, les salaires sont en retard. Quand le travail n\'est pas vérifié, les demandeurs d\'emploi sont arnaqués. Quand les données ne sont pas numériques, les banques ne prêtent pas.',
        pt: 'Este "atrito administrativo" não apenas atrasa as empresas; prejudica os trabalhadores. Quando a folha de pagamentos é manual, os salários atrasam. Quando o trabalho não é verificado, os candidatos a emprego são enganados. Quando os dados não são digitais, os bancos não emprestam.'
      },
      p3: {
        en: 'We built Fluide to be your single, trusted source of truth that connects hiring, payroll, banking, and growth.',
        fr: 'Nous avons conçu Fluide pour être le "Dossier Or" — une source de vérité unique et fiable qui relie le recrutement, la paie, la banque et la croissance.',
        pt: 'Construímos a Fluide para ser o "Registro de Ouro" — uma fonte única e confiável de verdade que conecta contratação, folha de pagamentos, serviços bancários e crescimento.'
      }
    },
    valuesTitle: { en: 'Our Values', fr: 'Nos Valeurs', pt: 'Os Nossos Valores' },
    values: [
      { 
        icon: Target, 
        title: { en: 'Mission-Driven', fr: 'Guidés par la Mission', pt: 'Orientados pela Missão' }, 
        desc: { en: 'We exist to solve the paperwork and money problems that hold African businesses back.', fr: 'Nous existons pour résoudre les obstacles administratifs et financiers qui freinent les entreprises africaines.', pt: 'Existimos para resolver os obstáculos administrativos e financeiros que impedem o avanço das empresas africanas.' } 
      },
      { 
        icon: Users, 
        title: { en: 'Human-Centric', fr: 'Centrés sur l\'Humain', pt: 'Centrados no Humano' }, 
        desc: { en: 'We build for the person behind the payslip. Every feature must make life better.', fr: 'Nous construisons pour la personne derrière la fiche de paie. Chaque fonctionnalité doit améliorer une vie.', pt: 'Construímos para a pessoa por trás do recibo de vencimento. Cada funcionalidade deve melhorar uma vida.' } 
      },
      { 
        icon: Globe, 
        title: { en: 'Pan-African', fr: 'Panafricain', pt: 'Pan-Africano' }, 
        desc: { en: 'Starting in Cameroon, growing to every corner of the continent.', fr: 'Commençant au Cameroun, s\'étendant à chaque coin du continent.', pt: 'Começando nos Camarões, expandindo para todos os cantos do continente.' } 
      },
      { 
        icon: Award, 
        title: { en: 'Integrity First', fr: 'L\'Intégrité d\'Abord', pt: 'Integridade em Primeiro Lugar' }, 
        desc: { en: 'Trust is everything. We handle your payroll and data with total care.', fr: 'La confiance est notre monnaie. Nous gérons la paie et les données avec une précision absolue.', pt: 'A confiança é a nossa moeda. Lidamos com a folha de pagamentos e os dados com precisão absoluta.' } 
      },
    ]
  };

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-brand-navy text-white py-32 relative overflow-hidden min-h-[60vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1920&q=80" 
            alt="Diverse African team" 
            className="w-full h-full object-cover opacity-20"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/60 to-transparent" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight mb-8 leading-tight">{content.hero.title[language]}</h1>
            <p className="text-xl text-white/60 leading-relaxed">{content.hero.desc[language]}</p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-brand-navy">{content.story.title[language]}</h2>
              <div className="space-y-6 text-brand-navy/60 leading-relaxed text-lg">
                <p>{content.story.p1[language]}</p>
                <p>{content.story.p2[language]}</p>
                <p>{content.story.p3[language]}</p>
              </div>
            </div>
            <div className="aspect-square bg-brand-navy/[0.02] rounded-[60px] flex items-center justify-center p-12 overflow-hidden border border-brand-navy/5">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80" 
                alt="Team collaboration" 
                className="w-full h-full object-cover rounded-[40px] shadow-2xl" 
                referrerPolicy="no-referrer" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-brand-navy/[0.02]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-16 text-center text-brand-navy">{content.valuesTitle[language]}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {content.values.map((value, idx) => (
              <div key={idx} className="bg-white p-8 rounded-3xl border border-brand-navy/5 shadow-sm hover:shadow-md transition-all group">
                <div className="w-12 h-12 bg-brand-navy/5 rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-navy group-hover:text-brand-cyan transition-all">
                  <value.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold mb-3 text-brand-navy">{value.title[language]}</h3>
                <p className="text-brand-navy/60 text-sm leading-relaxed">{value.desc[language]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
