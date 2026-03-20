import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, Briefcase, Search, Shield, WifiOff, Cpu, Users, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const FluideJobs = () => {
  const { language } = useLanguage();

  const content = {
    en: {
      hero: {
        title: 'Find verified people you can trust.',
        desc: 'Hiring shouldn\'t be a gamble. We connect employers with verified talent and treat job seekers with dignity.',
        primaryCTA: 'Post a job for free',
        secondaryCTA: 'Find verified work'
      },
      problem: {
        title: 'The Problem',
        stats: [
          { label: 'Days to fill a role', value: '45' },
          { label: 'New hires leave within 90 days', value: '40%' },
          { label: 'Applications get no response', value: '80%' }
        ],
        desc: 'Posting on social media brings too many unqualified replies. Manual screening is slow, candidates miss interviews, and verifying identities is hard.'
      },
      features: {
        title: "Key Features",
        subtitle: "Built for trust and reliable connectivity.",
        items: [
          { icon: Cpu, title: 'AI Matching', desc: 'Post a job in 5 minutes with AI. Get a ranked list of the top 5-10 candidates.' },
          { icon: Globe, title: 'Global & Internal Hiring', desc: 'Find talent globally or discover great fits within your current team using AI.' },
          { icon: Shield, title: 'Company Verification', desc: 'All companies are verified. Job seekers see exactly what we checked.' },
          { icon: Search, title: 'Status Tracker', desc: 'Track applications in real time. Candidates get updates at every stage.' },
          { icon: WifiOff, title: 'Offline Mode', desc: 'Browse jobs and save applications without internet. They send when you reconnect.' }
        ]
      },
      howItWorks: {
        employers: {
          title: "For Employers",
          steps: [
            { step: '01', title: 'Post in 5 minutes', desc: 'Use AI to write descriptions and see real salary data.' },
            { step: '02', title: 'Get a Shortlist', desc: 'See the top verified candidates ranked by match score.' },
            { step: '03', title: 'Easy Handoff', desc: 'New hires move straight into Fluide HR when they accept.' }
          ]
        },
        jobSeekers: {
          title: "For Job Seekers",
          steps: [
            { step: '01', title: 'Create One Profile', desc: 'Upload your documents and set your safety preferences.' },
            { step: '02', title: 'Find Safe Jobs', desc: 'Filter by safety, pay, and location. Apply fast.' },
            { step: '03', title: 'Track Progress', desc: 'See your application status and sign offers online.' }
          ]
        }
      },
      finalCta: {
        title: "Post your first job free",
        button: "Get Started Now"
      }
    },
    fr: {
      hero: {
        title: 'Recrutez des personnes en qui vous pouvez vraiment avoir confiance — vérifiées.',
        desc: 'Le recrutement en Afrique ne devrait pas ressembler à un jeu de hasard. Fluide Jobs offre aux employeurs des talents vérifiés et aux chercheurs d\'emploi une plateforme qui les traite avec dignité.',
        primaryCTA: 'Publier une offre gratuitement',
        secondaryCTA: 'Trouver un emploi vérifié'
      },
      problem: {
        title: 'Le Problème',
        stats: [
          { label: 'Jours pour pourvoir un poste', value: '45' },
          { label: 'Départs dans les 90 jours', value: '40%' },
          { label: 'Candidatures sans réponse', value: '80%' }
        ],
        desc: 'Vous publiez dans trois groupes WhatsApp et une page Facebook, recevez 80 réponses non qualifiées, les triez manuellement sur Excel, planifiez des entretiens où la moitié des candidats ne se présentent pas — et espérez que la personne choisie est bien celle qu\'elle prétend être.'
      },
      features: {
        title: "Fonctionnalités Clés",
        subtitle: "Conçu pour la réalité de la connectivité et de la confiance en Afrique.",
        items: [
          { icon: Cpu, title: 'Mise en correspondance par IA', desc: 'Publiez une offre en 5 minutes avec notre générateur assisté par IA. Recevez une liste restreinte des 5 à 10 meilleurs candidats avec des scores de correspondance.' },
          { icon: Globe, title: 'Recrutement mondial et mobilité interne', desc: 'Trouvez des talents à l\'échelle mondiale ou découvrez des perles rares au sein de votre personnel existant grâce à la mise en correspondance de mobilité interne basée sur l\'IA.' },
          { icon: Shield, title: 'Vérification d\'entreprise par niveaux', desc: 'Chaque entreprise inscrite est soumise à un processus de vérification. Les candidats voient exactement ce qui a été vérifié — de l\'e-mail/téléphone de base à la visite complète des bureaux.' },
          { icon: Search, title: 'Suivi des candidatures', desc: 'Chaque candidature affiche son statut en temps réel. Chaque candidat reçoit une notification à chaque changement d\'étape — même en cas de refus.' },
          { icon: WifiOff, title: 'Conception hors ligne d\'abord', desc: 'Consultez les offres mémorisées sans connexion. Rédigez et enregistrez vos candidatures hors ligne — elles sont soumises automatiquement lors de la reconnexion.' }
        ]
      },
      howItWorks: {
        employers: {
          title: "Pour les Employeurs",
          steps: [
            { step: '01', title: 'Publiez en 5 minutes', desc: 'Description assistée par IA et références salariales basées sur des données réelles du marché.' },
            { step: '02', title: 'Liste restreinte classée', desc: 'Recevez les 5 à 10 meilleurs candidats avec des scores de correspondance et des références vérifiées.' },
            { step: '03', title: 'Transfert transparent', desc: 'Regardez la nouvelle recrue s\'intégrer automatiquement dans Fluide HR lors de l\'acceptation de l\'offre.' }
          ]
        },
        jobSeekers: {
          title: "Pour les Chercheurs d'Emploi",
          steps: [
            { step: '01', title: 'Créez un profil une fois', desc: 'Téléchargez des documents vérifiés et définissez vos préférences du Mode Sécurité.' },
            { step: '02', title: 'Parcourez les emplois vérifiés', desc: 'Filtrez par niveau de sécurité, salaire et emplacement. Postulez en moins de 5 minutes.' },
            { step: '03', title: 'Suivi en temps réel', desc: 'Suivez le statut de votre candidature et signez les offres numériquement.' }
          ]
        }
      },
      finalCta: {
        title: "Publiez votre première offre gratuitement",
        button: "Commencer Maintenant"
      }
    },
    pt: {
      hero: {
        title: 'Encontre pessoas em quem possa realmente confiar — verificadas.',
        desc: 'A contratação em África não deveria parecer uma aposta. A Fluide Jobs oferece aos empregadores talentos verificados e aos candidatos uma plataforma que os trata com dignidade.',
        primaryCTA: 'Publicar uma oferta gratuitamente',
        secondaryCTA: 'Encontrar trabalho verificado'
      },
      problem: {
        title: 'O Problema',
        stats: [
          { label: 'Dias para preencher uma vaga', value: '45' },
          { label: 'Saídas em 90 dias', value: '40%' },
          { label: 'Candidaturas sem resposta', value: '80%' }
        ],
        desc: 'Está a publicar em três grupos de WhatsApp e numa página de Facebook, recebendo 80 respostas não qualificadas, triando-as manualmente no Excel, agendando entrevistas onde metade dos candidatos não aparece — e esperando que a pessoa que escolher seja quem diz ser.'
      },
      features: {
        title: "Funcionalidades Principais",
        subtitle: "Construído para a realidade de conectividade e confiança em África.",
        items: [
          { icon: Cpu, title: 'Correspondência por IA', desc: 'Publique uma oferta em 5 minutos com o nosso gerador assistido por IA. Receba uma lista restrita dos 5 a 10 melhores candidatos com pontuações de correspondência.' },
          { icon: Globe, title: 'Recrutamento Global e Mobilidade Interna', desc: 'Encontre talentos globalmente ou descubra talentos ocultos na sua força de trabalho existente através da correspondência de mobilidade interna baseada em IA.' },
          { icon: Shield, title: 'Verificação de Empresa por Níveis', desc: 'Cada empresa listada passa por um processo de verificação. Os candidatos veem exatamente o que foi verificado — desde o e-mail/telefone básico até à visita completa ao escritório.' },
          { icon: Search, title: 'Rastreador de Candidaturas', desc: 'Cada candidatura mostra o seu estado em tempo real. Cada candidato recebe uma notificação a cada mudança de fase — mesmo em caso de rejeição.' },
          { icon: WifiOff, title: 'Design Offline-First', desc: 'Consulte as ofertas memorizadas sem ligação. Redija e guarde candidaturas offline — elas são submetidas automaticamente quando se reconectar.' }
        ]
      },
      howItWorks: {
        employers: {
          title: "Para Empregadores",
          steps: [
            { step: '01', title: 'Publique em 5 minutos', desc: 'Descrição assistida por IA e referências salariais baseadas em dados reais do mercado.' },
            { step: '02', title: 'Lista restrita classificada', desc: 'Receba os 5 a 10 melhores candidatos com pontuações de correspondência e credenciais verificadas.' },
            { step: '03', title: 'Transferência perfeita', desc: 'Veja a nova contratação fluir automaticamente para o Fluide HR na aceitação da oferta.' }
          ]
        },
        jobSeekers: {
          title: "Para Candidatos a Emprego",
          steps: [
            { step: '01', title: 'Crie um perfil uma vez', desc: 'Carregue documentos verificados e defina as suas preferências do Modo de Segurança.' },
            { step: '02', title: 'Navegue por empregos verificados', desc: 'Filtre por nível de segurança, salário e localização. Candidate-se em menos de 5 minutos.' },
            { step: '03', title: 'Acompanhamento em tempo real', desc: 'Acompanhe o estado da sua candidatura e assine ofertas digitalmente.' }
          ]
        }
      },
      finalCta: {
        title: "Publique a sua primeira oferta gratuitamente",
        button: "Começar Agora"
      }
    }
  };

  const t = content[language as keyof typeof content] || content.en;

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-brand-navy/[0.02] py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-cyan/5 to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-navy text-brand-cyan text-[10px] font-bold uppercase tracking-widest mb-6">
                <Briefcase className="w-3 h-3" />
                <span>Fluide Jobs</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold tracking-tight mb-8 leading-tight text-brand-navy">
                {t.hero.title}
              </h1>
              <p className="text-xl text-brand-navy/60 leading-relaxed mb-10">
                {t.hero.desc}
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <button className="bg-brand-navy text-white px-8 py-4 rounded-full font-bold hover:bg-brand-navy/90 transition-all shadow-lg shadow-brand-navy/10">
                  {t.hero.primaryCTA}
                </button>
                <button className="border border-brand-navy/10 text-brand-navy px-8 py-4 rounded-full font-bold hover:bg-brand-navy/5 transition-all">
                  {t.hero.secondaryCTA}
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-3xl shadow-2xl p-8 border border-brand-navy/5">
                <div className="space-y-6">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="flex items-center space-x-4 p-4 rounded-2xl bg-brand-navy/[0.02] border border-brand-navy/5">
                      <div className="w-12 h-12 bg-brand-cyan/10 rounded-xl flex items-center justify-center">
                        <Users className="w-6 h-6 text-brand-navy" />
                      </div>
                      <div className="flex-grow">
                        <div className="h-4 w-32 bg-brand-navy/10 rounded mb-2" />
                        <div className="h-3 w-24 bg-brand-navy/5 rounded" />
                      </div>
                      <div className="px-3 py-1 rounded-full bg-brand-cyan/20 text-brand-navy text-[10px] font-bold uppercase">Verified</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-brand-navy text-brand-cyan p-6 rounded-2xl shadow-xl">
                <div className="text-3xl font-bold mb-1">98%</div>
                <div className="text-[10px] font-bold uppercase tracking-widest opacity-60">Match Accuracy</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl font-bold mb-6 text-brand-navy">{t.problem.title}</h2>
            <p className="text-lg text-brand-navy/60 leading-relaxed">
              {t.problem.desc}
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {t.problem.stats.map((stat, idx) => (
              <div key={idx} className="p-8 rounded-3xl bg-brand-navy/[0.02] border border-brand-navy/5">
                <div className="text-5xl font-bold mb-4 text-brand-navy">{stat.value}</div>
                <div className="text-sm font-bold text-brand-navy/40 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-brand-navy text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,rgba(78,242,216,0.05),transparent_50%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold mb-4">{t.features.title}</h2>
            <p className="text-white/40">{t.features.subtitle}</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.features.items.map((feature, idx) => (
              <div key={idx} className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all group">
                <div className="w-12 h-12 bg-brand-cyan/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-cyan/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-brand-cyan" />
                </div>
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-white/60 leading-relaxed text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-24">
            <div>
              <h3 className="text-2xl font-bold mb-10 text-brand-navy">{t.howItWorks.employers.title}</h3>
              <div className="space-y-12">
                {t.howItWorks.employers.steps.map((item, idx) => (
                  <div key={idx} className="flex space-x-6">
                    <div className="text-4xl font-black text-brand-navy/10">{item.step}</div>
                    <div>
                      <h4 className="text-xl font-bold mb-2 text-brand-navy">{item.title}</h4>
                      <p className="text-brand-navy/60">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-10 text-brand-navy">{t.howItWorks.jobSeekers.title}</h3>
              <div className="space-y-12">
                {t.howItWorks.jobSeekers.steps.map((item, idx) => (
                  <div key={idx} className="flex space-x-6">
                    <div className="text-4xl font-black text-brand-navy/10">{item.step}</div>
                    <div>
                      <h4 className="text-xl font-bold mb-2 text-brand-navy">{item.title}</h4>
                      <p className="text-brand-navy/60">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-brand-navy text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_50%_120%,rgba(78,242,216,0.15),transparent_50%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl font-bold mb-8">{t.finalCta.title}</h2>
          <button className="bg-brand-cyan text-brand-navy px-10 py-4 rounded-full font-bold hover:bg-brand-cyan/90 transition-all shadow-xl shadow-brand-cyan/10">
            {t.finalCta.button}
          </button>
        </div>
      </section>
    </div>
  );
};

export default FluideJobs;
