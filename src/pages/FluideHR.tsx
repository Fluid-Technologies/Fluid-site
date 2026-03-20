import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, Users, Clock, Shield, FileText, Globe, Smartphone, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';
import AIChatModal from '../components/AIChatModal';

const FluideHR = () => {
  const { language } = useLanguage();
  const [isAIChatOpen, setIsAIChatOpen] = useState(false);

  const content = {
    hero: {
      title: { en: 'Empower your team. Elevate your culture.', fr: 'Autonomisez votre équipe. Élevez votre culture.', pt: 'Capacite a sua equipa. Eleve a sua cultura.' },
      desc: {
        en: 'Go beyond basic admin. Fluide HR uses AI to manage performance, learning, analytics, and employee engagement.',
        fr: 'Allez au-delà de l\'administration de base. Fluide HR est une plateforme propulsée par l\'IA pour la gestion des performances, l\'apprentissage continu, les analyses approfondies et l\'engagement des employés.',
        pt: 'Vá além da administração básica. O Fluide HR é uma plataforma baseada em IA para gestão de desempenho, aprendizagem contínua, análises profundas e envolvimento dos colaboradores.'
      },
      primaryCTA: { en: 'Start your free trial', fr: 'Commencer l\'essai gratuit', pt: 'Iniciar teste gratuito' }
    },
    demo: {
      title: { en: 'Team Engagement Score', fr: 'Score d\'Engagement de l\'Équipe', pt: 'Pontuação de Envolvimento da Equipa' },
      status: { en: 'Excellent', fr: 'Excellent', pt: 'Excelente' },
      employees: { en: 'Active Users', fr: 'Utilisateurs Actifs', pt: 'Utilizadores Ativos' },
      gross: { en: 'Goals Completed', fr: 'Objectifs Atteints', pt: 'Objetivos Concluídos' },
      tax: { en: 'Learning Hours', fr: 'Heures d\'Apprentissage', pt: 'Horas de Aprendizagem' },
      cta: { en: 'View Analytics', fr: 'Voir les Analyses', pt: 'Ver Análises' }
    },
    howItWorks: {
      title: { en: 'How it works', fr: 'Comment ça marche', pt: 'Como funciona' },
      steps: [
        { step: '1', title: { en: 'Set AI Goals', fr: 'Définir des objectifs IA', pt: 'Definir Objetivos IA' }, desc: { en: 'AI helps your team set smart, aligned goals.', fr: 'L\'IA aide les managers et les employés à définir des objectifs SMART et alignés.', pt: 'A IA ajuda gestores e colaboradores a definir objetivos SMART e alinhados.' } },
        { step: '2', title: { en: 'Continuous Feedback', fr: 'Feedback continu', pt: 'Feedback Contínuo' }, desc: { en: 'Track performance in real time and recognize good work.', fr: 'Suivi des performances en temps réel et reconnaissance par les pairs.', pt: 'Acompanhamento de desempenho em tempo real e reconhecimento pelos pares.' } },
        { step: '3', title: { en: 'Personalized Learning', fr: 'Apprentissage personnalisé', pt: 'Aprendizagem Personalizada' }, desc: { en: 'AI builds learning paths based on skills and career goals.', fr: 'L\'IA organise des parcours d\'apprentissage basés sur les lacunes en compétences et les objectifs de carrière.', pt: 'A IA organiza percursos de aprendizagem com base em lacunas de competências e objetivos de carreira.' } },
        { step: '4', title: { en: 'Actionable Insights', fr: 'Informations exploitables', pt: 'Informações Acionáveis' }, desc: { en: 'Get data on retention, engagement, and productivity.', fr: 'Analyses prédictives sur la rétention, l\'engagement et la productivité.', pt: 'Análises preditivas sobre retenção, envolvimento e produtividade.' } }
      ]
    },
    finalCta: {
      title: { en: 'Start free trial (30 days, no credit card)', fr: 'Commencer l\'essai gratuit (30 jours, sans carte de crédit)', pt: 'Iniciar teste gratuito (30 dias, sem cartão de crédito)' },
      cta: { en: 'Get Started Now', fr: 'Commencer Maintenant', pt: 'Começar Agora' }
    }
  };

  const features = [
    { 
      icon: Clock, 
      title: { en: 'AI Performance Reviews', fr: 'Évaluations de performance IA', pt: 'Avaliações de Desempenho IA' }, 
      desc: { en: 'Automate reviews with AI-generated feedback and goal tracking.', fr: 'Automatisez les cycles d\'évaluation avec la génération de feedback assistée par l\'IA et le suivi des objectifs.', pt: 'Automatize os ciclos de avaliação com a geração de feedback assistida por IA e o acompanhamento de objetivos.' },
      action: { label: { en: 'Try AI Review', fr: 'Essayer l\'Évaluation IA', pt: 'Experimentar Avaliação IA' }, onClick: () => setIsAIChatOpen(true) }
    },
    { icon: Shield, title: { en: 'Smart Learning Paths', fr: 'Parcours d\'apprentissage intelligents', pt: 'Percursos de Aprendizagem Inteligentes' }, desc: { en: 'Provide custom training based on job needs and career goals.', fr: 'Proposez un contenu de formation personnalisé en fonction des exigences du poste et des aspirations professionnelles.', pt: 'Forneça conteúdo de formação personalizado com base nos requisitos da função e nas aspirações de carreira.' } },
    { icon: FileText, title: { en: 'Engagement Surveys', fr: 'Sondages d\'engagement', pt: 'Inquéritos de Envolvimento' }, desc: { en: 'Use quick surveys and sentiment analysis to check team morale.', fr: 'Sondages Pulse avec analyse des sentiments pour comprendre le moral de l\'équipe et identifier les risques de départ.', pt: 'Inquéritos Pulse com análise de sentimentos para compreender o moral da equipa e identificar riscos de saída.' } },
    { icon: Globe, title: { en: 'Predictive Analytics', fr: 'Analyses prédictives', pt: 'Análises Preditivas' }, desc: { en: 'Predict turnover, spot top talent, and make data-driven decisions.', fr: 'Prévoyez le roulement, identifiez les hauts potentiels et prenez des décisions RH basées sur les données.', pt: 'Preveja a rotatividade, identifique altos potenciais e tome decisões de RH baseadas em dados.' } },
  ];

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-brand-navy/[0.02] py-24 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_80%_20%,rgba(78,242,216,0.05),transparent_50%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-navy text-brand-cyan text-[10px] font-bold uppercase tracking-widest mb-6">
                <Users className="w-3 h-3" />
                <span>Fluide HR</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold tracking-tight mb-8 leading-tight text-brand-navy">
                {content.hero.title[language]}
              </h1>
              <p className="text-xl text-brand-navy/60 leading-relaxed mb-10">
                {content.hero.desc[language]}
              </p>
              <Link 
                to="/onboarding"
                className="inline-block bg-brand-navy text-white px-8 py-4 rounded-full font-bold hover:bg-brand-navy/90 transition-all shadow-lg shadow-brand-navy/10"
              >
                {content.hero.primaryCTA[language]}
              </Link>
            </div>
            <div className="bg-white rounded-[40px] shadow-2xl p-10 border border-brand-navy/5 relative">
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-brand-cyan/10 rounded-full blur-2xl" />
              <div className="flex items-center justify-between mb-10 relative z-10">
                <div className="font-bold text-xl text-brand-navy">{content.demo.title[language]}</div>
                <div className="px-4 py-2 rounded-full bg-brand-cyan/20 text-brand-navy text-xs font-bold uppercase">{content.demo.status[language]}</div>
              </div>
              <div className="space-y-6 mb-10 relative z-10">
                {[
                  { label: content.demo.employees[language], val: '142' },
                  { label: content.demo.gross[language], val: '87%' },
                  { label: content.demo.tax[language], val: '320h' }
                ].map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center py-4 border-b border-brand-navy/5">
                    <span className="text-brand-navy/40 font-medium">{item.label}</span>
                    <span className="font-bold text-brand-navy">{item.val}</span>
                  </div>
                ))}
              </div>
              <Link 
                to="/onboarding"
                className="block w-full text-center bg-brand-navy text-brand-cyan py-4 rounded-2xl font-bold shadow-lg shadow-brand-navy/20 hover:bg-brand-navy/95 transition-all"
              >
                {content.demo.cta[language]}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {features.map((feature, idx) => (
              <div key={idx} className="flex flex-col sm:flex-row space-y-6 sm:space-y-0 sm:space-x-6 p-8 rounded-3xl bg-brand-navy/[0.02] border border-brand-navy/5 group hover:bg-brand-navy hover:text-white transition-all duration-500">
                <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center flex-shrink-0 group-hover:bg-brand-cyan/20 transition-colors">
                  <feature.icon className="w-7 h-7 text-brand-navy group-hover:text-brand-cyan transition-colors" />
                </div>
                <div className="flex-1 flex flex-col">
                  <h3 className="text-xl font-bold mb-3">{feature.title[language]}</h3>
                  <p className="text-brand-navy/60 group-hover:text-white/60 leading-relaxed transition-colors flex-1">{feature.desc[language]}</p>
                  {feature.action && (
                    <button 
                      onClick={feature.action.onClick}
                      className="mt-6 self-start px-6 py-2 bg-brand-cyan text-brand-navy font-bold rounded-xl hover:bg-brand-cyan/90 transition-colors flex items-center space-x-2"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>{feature.action.label[language]}</span>
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24 bg-brand-navy text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_50%_120%,rgba(78,242,216,0.05),transparent_50%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold mb-4">{content.howItWorks.title[language]}</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {content.howItWorks.steps.map((item, idx) => (
              <div key={idx} className="relative group">
                <div className="w-10 h-10 bg-brand-cyan text-brand-navy rounded-full flex items-center justify-center font-bold mb-6 group-hover:scale-110 transition-transform">
                  {item.step}
                </div>
                <h4 className="text-lg font-bold mb-3">{item.title[language]}</h4>
                <p className="text-white/40 text-sm leading-relaxed">{item.desc[language]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8 text-brand-navy">{content.finalCta.title[language]}</h2>
          <Link 
            to="/onboarding"
            className="inline-block bg-brand-navy text-white px-10 py-4 rounded-full font-bold hover:bg-brand-navy/90 transition-all shadow-xl shadow-brand-navy/10"
          >
            {content.finalCta.cta[language]}
          </Link>
        </div>
      </section>

      <AIChatModal 
        isOpen={isAIChatOpen} 
        onClose={() => setIsAIChatOpen(false)} 
        context="Fluide HR Performance Review Assistant"
      />
    </div>
  );
};

export default FluideHR;
