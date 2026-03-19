import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, Users, Briefcase, Globe, Heart, Zap, Mail } from 'lucide-react';

const Careers = () => {
  const { language } = useLanguage();

  const content = {
    en: {
      hero: {
        headline: "Build the trust infrastructure for Africa's workforce.",
        subheadline: "Join Fluide and help millions of African workers and businesses become visible, bankable, and financially secure. We're hiring builders – engineers, designers, product leaders, and operations experts – who want to create something that matters.",
        cta: "View Open Positions"
      },
      whyJoinUs: {
        title: "Why Join Us",
        items: [
          { title: "Mission-Driven Work", desc: "You won't just move metrics. You'll help a market vendor in Douala see her daily profit for the first time. You'll help a commission worker in Nairobi access emergency cash at 2% instead of 50%. Your code. Your design. Your impact." },
          { title: "Build at Scale", desc: "We're building for 400 million workers and 44 million SMEs across Africa. The problems are hard. The scale is massive. The opportunity is unprecedented." },
          { title: "Grow with the Best", desc: "You'll work alongside \"The Power Six\" – experienced founders who have built, scaled, and sold. You'll learn faster than anywhere else." },
          { title: "Own Your Work", desc: "We believe in relentless ownership. You'll have real responsibility from day one. Your ideas won't just be heard – they'll be implemented." },
          { title: "Work Your Way", desc: "Remote-first, results-focused. Based in Douala? Prefer to work from Lagos or Nairobi occasionally? We care about your output, not your hours." },
          { title: "Competitive Compensation", desc: "We offer competitive salaries, equity in the company, and comprehensive benefits. When we win, you win." }
        ]
      },
      culture: {
        title: "Our Culture",
        subtitle: "Built by builders, for builders.",
        desc: "At Fluide, we're not corporate types. We're builders who got tired of watching good ideas die and good people remain invisible.",
        valuesTitle: "Our values aren't posters on a wall. They're how we work:",
        values: [
          { title: "Relentless Ownership", desc: "No passing the buck. If it's your problem, you own it. If it's not your problem but you see it, you flag it. We're all in this together." },
          { title: "Radical Collaboration", desc: "The best idea wins, regardless of who it came from. We debate fiercely, decide clearly, and commit fully. No silos. No heroes. No blame." },
          { title: "Uncompromising Dignity", desc: "Every pixel, every line of code, every word we write must honor the people we serve. We build for humans, not users." }
        ],
        daily: [
          "Open, honest feedback (give it, receive it, grow from it)",
          "Flat structures, not hierarchies",
          "Decisions made by those closest to the problem",
          "Celebrating wins (big and small)",
          "Learning from failures without finger-pointing"
        ]
      },
      life: {
        title: "Life at Fluide",
        items: [
          { label: "Work Environment", desc: "Remote-first with optional hub space in Douala. We trust you to do your best work where you do it best." },
          { label: "Health & Wellness", desc: "Comprehensive health insurance for you and your family. Because we protect our own." },
          { label: "Professional Development", desc: "Budget for courses, conferences, and books. We grow or we stagnate – we choose growth." },
          { label: "Team Connection", desc: "Regular virtual coffee chats, quarterly offsites, and team celebrations. Distance doesn't mean disconnection." },
          { label: "Equipment", desc: "We'll get you the gear you need to do your best work – laptop, monitor, whatever it takes." },
          { label: "Flexibility", desc: "Life happens. We get it. Flexible hours, parental leave, and understanding when you need to step away." }
        ]
      },
      positions: {
        title: "Open Positions",
        subtitle: "Current Openings",
        list: [
          { title: "Senior Backend Engineer (Node.js/NestJS)", location: "Douala / Remote", dept: "Engineering" },
          { title: "Senior Frontend Engineer (React/Flutter)", location: "Douala / Remote", dept: "Engineering" },
          { title: "Product Manager – Fluide Bank", location: "Douala / Remote", dept: "Product" },
          { title: "Product Designer (UI/UX)", location: "Douala / Remote", dept: "Design" },
          { title: "Lead Field Operations Manager", location: "Douala", dept: "Operations" },
          { title: "Sales Development Representative", location: "Douala / Remote", dept: "Sales" },
          { title: "Customer Success Manager", location: "Douala / Remote", dept: "Support" }
        ],
        footer: "Don't see your role? If you're passionate about our mission and think you can contribute, reach out anyway. We're always looking for exceptional builders."
      },
      apply: {
        title: "How to Apply",
        subtitle: "Ready to build with us?",
        desc: "Send your CV and a brief note about why you're interested to: careers@fluidesuite.com",
        include: "Please include:",
        points: [
          "Your role of interest",
          "Why Fluide (we read these carefully)",
          "Links to your work (GitHub, portfolio, LinkedIn)"
        ],
        note: "We review every application personally. You'll hear from us within 5 business days."
      },
      finalCta: "Join us in building the trust infrastructure Africa deserves."
    },
    fr: {
      hero: {
        headline: "Construisez l'infrastructure de confiance pour la main-d'œuvre africaine.",
        subheadline: "Rejoignez Fluide et aidez des millions de travailleurs et d'entreprises africains à devenir visibles, bancables et financièrement sécurisés. Nous recrutons des bâtisseurs – ingénieurs, designers, responsables produit, experts opérationnels – qui veulent créer quelque chose qui compte.",
        cta: "Voir les offres d'emploi"
      },
      whyJoinUs: {
        title: "Pourquoi Nous Rejoindre",
        items: [
          { title: "Travail Porteur de Sens", desc: "Vous ne ferez pas que déplacer des métriques. Vous aiderez une commerçante à Douala à voir son bénéfice quotidien pour la première fois. Vous aiderez un travailleur à commission à Nairobi à accéder à des fonds d'urgence à 2% au lieu de 50%. Votre code. Votre design. Votre impact." },
          { title: "Construire à Grande Échelle", desc: "Nous construisons pour 400 millions de travailleurs et 44 millions de PME à travers l'Afrique. Les problèmes sont complexes. L'échelle est massive. L'opportunité est sans précédent." },
          { title: "Grandir avec les Meilleurs", desc: "Vous travaillerez aux côtés des \"Power Six\" – des fondateurs expérimentés qui ont construit, développé et vendu. Vous apprendrez plus vite que nulle part ailleurs." },
          { title: "Possédez Votre Travail", desc: "Nous croyons en une appropriation sans faille. Vous aurez de vraies responsabilités dès le premier jour. Vos idées ne seront pas seulement entendues – elles seront mises en œuvre." },
          { title: "Travaillez à Votre Façon", desc: "Remote-first, axé sur les résultats. Basé à Douala ? Vous préférez travailler depuis Lagos ou Nairobi occasionnellement ? Nous nous soucions de vos résultats, pas de vos heures." },
          { title: "Rémunération Compétitive", desc: "Nous offrons des salaires compétitifs, des actions dans l'entreprise et des avantages complets. Quand nous gagnons, vous gagnez." }
        ]
      },
      culture: {
        title: "Notre Culture",
        subtitle: "Construit par des bâtisseurs, pour des bâtisseurs.",
        desc: "Chez Fluide, nous ne sommes pas des cadres corporate. Nous sommes des bâtisseurs qui en ont assez de voir les bonnes idées mourir et les bonnes personnes rester invisibles.",
        valuesTitle: "Nos valeurs ne sont pas des affiches au mur. C'est ainsi que nous travaillons :",
        values: [
          { title: "Appropriation sans faille", desc: "Personne ne se défausse. Si c'est votre problème, vous le gérez. Si ce n'est pas votre problème mais que vous le voyez, vous le signalez. Nous sommes tous dans le même bateau." },
          { title: "Collaboration radicale", desc: "La meilleure idée gagne, peu importe d'où elle vient. Nous débattons vigoureusement, décidons clairement et nous engageons pleinement. Pas de silos. Pas de héros. Pas de blâme." },
          { title: "Dignité sans compromis", desc: "Chaque pixel, chaque ligne de code, chaque mot que nous écrivons doit honorer les personnes que nous servons. Nous construisons pour des humains, pas pour des utilisateurs." }
        ],
        daily: [
          "Des retours ouverts et honnêtes (donnez-les, recevez-les, grandissez-en)",
          "Des structures plates, pas des hiérarchies",
          "Des décisions prises par ceux qui sont les plus proches du problème",
          "Célébration des victoires (petites et grandes)",
          "Apprendre des échecs sans pointer du doigt"
        ]
      },
      life: {
        title: "La Vie chez Fluide",
        items: [
          { label: "Environnement de travail", desc: "Remote-first avec espace de coworking optionnel à Douala. Nous vous faisons confiance pour faire votre meilleur travail là où vous le faites le mieux." },
          { label: "Santé & Bien-être", desc: "Assurance santé complète pour vous et votre famille. Parce que nous protégeons les nôtres." },
          { label: "Développement professionnel", desc: "Budget pour des formations, conférences et livres. Nous grandissons ou nous stagnons – nous choisissons la croissance." },
          { label: "Connexion d'équipe", desc: "Cafés virtuels réguliers, offsites trimestriels et célébrations d'équipe. La distance ne signifie pas la déconnexion." },
          { label: "Équipement", desc: "Nous vous fournissons le matériel dont vous avez besoin pour faire votre meilleur travail – ordinateur, écran, tout ce qu'il faut." },
          { label: "Flexibilité", desc: "La vie arrive. Nous comprenons. Horaires flexibles, congés parentaux et compréhension quand vous devez vous absenter." }
        ]
      },
      positions: {
        title: "Offres d'Emploi",
        subtitle: "Postes à pourvoir",
        list: [
          { title: "Ingénieur Backend Senior (Node.js/NestJS)", location: "Douala / Remote", dept: "Ingénierie" },
          { title: "Ingénieur Frontend Senior (React/Flutter)", location: "Douala / Remote", dept: "Ingénierie" },
          { title: "Chef de Produit – Fluide Bank", location: "Douala / Remote", dept: "Produit" },
          { title: "Designer Produit (UI/UX)", location: "Douala / Remote", dept: "Design" },
          { title: "Responsable Terrain Principal", location: "Douala", dept: "Opérations" },
          { title: "Chargé de Développement Commercial", location: "Douala / Remote", dept: "Commercial" },
          { title: "Responsable Succès Client", location: "Douala / Remote", dept: "Support" }
        ],
        footer: "Vous ne voyez pas votre poste ? Si vous êtes passionné par notre mission et pensez pouvoir contribuer, contactez-nous quand même. Nous sommes toujours à la recherche de bâtisseurs exceptionnels."
      },
      apply: {
        title: "Comment Postuler",
        subtitle: "Prêt à construire avec nous ?",
        desc: "Envoyez votre CV et une brève note expliquant votre intérêt à : careers@fluidesuite.com",
        include: "Merci d'inclure :",
        points: [
          "Le poste qui vous intéresse",
          "Pourquoi Fluide (nous lisons ces notes attentivement)",
          "Des liens vers votre travail (GitHub, portfolio, LinkedIn)"
        ],
        note: "Nous examinons chaque candidature personnellement. Vous aurez de nos nouvelles sous 5 jours ouvrés."
      },
      finalCta: "Rejoignez-nous pour construire l'infrastructure de confiance que l'Afrique mérite."
    },
    pt: {
      hero: {
        headline: "Construa a infraestrutura de confiança para a força de trabalho africana.",
        subheadline: "Junte-se à Fluide e ajude milhões de trabalhadores e empresas africanas a tornarem-se visíveis, bancáveis e financeiramente seguros. Estamos a recrutar construtores – engenheiros, designers, líderes de produto, especialistas em operações – que querem criar algo que realmente importa.",
        cta: "Ver vagas abertas"
      },
      whyJoinUs: {
        title: "Porquê Juntar-se a Nós",
        items: [
          { title: "Trabalho com Propósito", desc: "Não vai apenas mover métricas. Vai ajudar uma vendedora no mercado em Douala a ver o seu lucro diário pela primeira vez. Vai ajudar um trabalhador por comissão em Nairobi a aceder a dinheiro de emergência a 2% em vez de 50%. O seu código. O seu design. O seu impacto." },
          { title: "Construir à Escala", desc: "Estamos a construir para 400 milhões de trabalhadores e 44 milhões de PMEs em toda a África. Os problemas são complexos. A escala é massiva. A oportunidade é sem precedentes." },
          { title: "Crescer com os Melhores", desc: "Vai trabalhar ao lado dos \"Power Six\" – fundadores experientes que já construíram, escalaram e venderam. Vai aprender mais rápido do que em qualquer outro lugar." },
          { title: "Ser Dono do Seu Trabalho", desc: "Acreditamos em responsabilidade total. Vai ter responsabilidade real desde o primeiro dia. As suas ideias não serão apenas ouvidas – serão implementadas." },
          { title: "Trabalhe do Seu Jeito", desc: "Remote-first, focado em resultados. Baseado em Luanda? Prefere trabalhar de Lagos ou Nairobi ocasionalmente? Importamo-nos com os seus resultados, não com as suas horas." },
          { title: "Remuneração Competitiva", desc: "Oferecemos salários competitivos, participação na empresa e benefícios abrangentes. Quando ganhamos, você ganha." }
        ]
      },
      culture: {
        title: "A Nossa Cultura",
        subtitle: "Construído por construtores, para construtores.",
        desc: "Na Fluide, não somos tipos corporativos. Somos construtores que se cansaram de ver boas ideias morrerem e boas pessoas permanecerem invisíveis.",
        valuesTitle: "Os nossos valores não são cartazes na parede. São como trabalhamos:",
        values: [
          { title: "Responsabilidade Total", desc: "Ninguém passa a bola. Se é seu problema, você resolve. Se não é seu problema mas você vê, você sinaliza. Estamos todos juntos nisto." },
          { title: "Colaboração Radical", desc: "A melhor ideia ganha, independentemente de quem veio. Debatermos ferozmente, decidimos claramente e comprometemo-nos totalmente. Sem silos. Sem heróis. Sem culpas." },
          { title: "Dignidade Inegociável", desc: "Cada pixel, cada linha de código, cada palavra que escrevemos deve honrar as pessoas que servimos. Construímos para humanos, não para utilizadores." }
        ],
        daily: [
          "Feedback aberto e honesto (dê, receba, cresça com ele)",
          "Estruturas planas, não hierarquias",
          "Decisões tomadas por quem está mais perto do problema",
          "Celebrar vitórias (grandes e pequenas)",
          "Aprender com falhas sem apontar dedos"
        ]
      },
      life: {
        title: "Vida na Fluide",
        items: [
          { label: "Ambiente de Trabalho", desc: "Remote-first com espaço de coworking opcional em Luanda. Confiamos que fará o seu melhor trabalho onde o faz melhor." },
          { label: "Saúde & Bem-estar", desc: "Seguro de saúde abrangente para si e sua família. Porque protegemos os nossos." },
          { label: "Desenvolvimento Profissional", desc: "Orçamento para cursos, conferências e livros. Crescemos ou estagnamos – escolhemos crescer." },
          { label: "Conexão da Equipa", desc: "Cafés virtuais regulares, offsites trimestrais e celebrações de equipa. Distância não significa desconexão." },
          { label: "Equipamento", desc: "Fornecemos o material necessário para fazer o seu melhor trabalho – computador, monitor, o que for preciso." },
          { label: "Flexibilidade", desc: "A vida acontece. Nós percebemos. Horários flexíveis, licença parental e compreensão quando precisa de se ausentar." }
        ]
      },
      positions: {
        title: "Vagas Abertas",
        subtitle: "Oportunidades Atuais",
        list: [
          { title: "Engenheiro Backend Sénior (Node.js/NestJS)", location: "Luanda / Remoto", dept: "Engenharia" },
          { title: "Engenheiro Frontend Sénior (React/Flutter)", location: "Luanda / Remoto", dept: "Engenharia" },
          { title: "Gestor de Produto – Fluide Bank", location: "Luanda / Remoto", dept: "Produto" },
          { title: "Designer de Produto (UI/UX)", location: "Luanda / Remoto", dept: "Design" },
          { title: "Gestor de Operações de Campo Principal", location: "Luanda", dept: "Operações" },
          { title: "Representante de Desenvolvimento de Vendas", location: "Luanda / Remoto", dept: "Vendas" },
          { title: "Gestor de Sucesso do Cliente", location: "Luanda / Remoto", dept: "Suporte" }
        ],
        footer: "Não vê o seu cargo? Se é apaixonado pela nossa missão e acredita que pode contribuir, contacte-nos na mesma. Estamos sempre à procura de construtores excecionais."
      },
      apply: {
        title: "Como Candidatar-se",
        subtitle: "Pronto para construir connosco?",
        desc: "Envie o seu CV e uma breve nota sobre o seu interesse para: careers@fluidesuite.com",
        include: "Por favor inclua:",
        points: [
          "O cargo de interesse",
          "Porquê a Fluide (lemos estas notas cuidadosamente)",
          "Links para o seu trabalho (GitHub, portfólio, LinkedIn)"
        ],
        note: "Analisamos cada candidatura pessoalmente. Receberá notícias nossas dentro de 5 dias úteis."
      },
      finalCta: "Junte-se a nós na construção da infraestrutura de confiança que África merece."
    }
  };

  const t = content[language as keyof typeof content] || content.en;

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-brand-navy py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_20%,rgba(78,242,216,0.1),transparent_50%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-8 tracking-tight leading-[1.1]">
              {t.hero.headline}
            </h1>
            <p className="text-xl text-white/60 leading-relaxed mb-10">
              {t.hero.subheadline}
            </p>
            <a href="#positions" className="bg-brand-cyan text-brand-navy px-8 py-4 rounded-full font-bold text-lg hover:bg-white transition-all shadow-xl shadow-brand-cyan/10 inline-block">
              {t.hero.cta}
            </a>
          </motion.div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-brand-navy mb-16 text-center">{t.whyJoinUs.title}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.whyJoinUs.items.map((item, idx) => (
              <div key={idx} className="p-8 rounded-[32px] border border-brand-navy/5 hover:border-brand-cyan/30 transition-all group">
                <h4 className="text-xl font-bold text-brand-navy mb-4">{item.title}</h4>
                <p className="text-brand-navy/60 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Culture */}
      <section className="py-24 bg-brand-navy text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl font-bold mb-4">{t.culture.title}</h2>
            <p className="text-brand-cyan font-bold text-xl mb-6">{t.culture.subtitle}</p>
            <p className="text-white/60 text-lg leading-relaxed">{t.culture.desc}</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-20">
            {t.culture.values.map((value, idx) => (
              <div key={idx} className="bg-white/5 backdrop-blur-sm p-10 rounded-[40px] border border-white/10">
                <h4 className="text-2xl font-bold mb-4 text-brand-cyan">{value.title}</h4>
                <p className="text-white/60 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-white/5 p-12 rounded-[40px] border border-white/10">
            <h4 className="text-xl font-bold mb-8 text-center">{t.culture.valuesTitle}</h4>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {t.culture.daily.map((item, i) => (
                <div key={i} className="flex items-center space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-cyan shrink-0" />
                  <span className="text-white/80 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Life at Fluide */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-brand-navy mb-16 text-center">{t.life.title}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.life.items.map((item, idx) => (
              <div key={idx} className="p-8 rounded-[32px] bg-brand-navy/[0.02] border border-brand-navy/5">
                <h4 className="text-xs font-black uppercase tracking-widest text-brand-navy/40 mb-2">{item.label}</h4>
                <p className="text-brand-navy font-bold mb-2">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="positions" className="py-24 bg-brand-navy/[0.02]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-brand-navy mb-4">{t.positions.title}</h2>
            <p className="text-brand-navy/60">{t.positions.subtitle}</p>
          </div>
          
          <div className="space-y-4 mb-12">
            {t.positions.list.map((job, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl border border-brand-navy/5 flex flex-col md:flex-row md:items-center justify-between hover:border-brand-cyan/30 transition-all group">
                <div>
                  <h4 className="font-bold text-brand-navy text-lg mb-1">{job.title}</h4>
                  <div className="flex items-center space-x-4 text-sm text-brand-navy/40">
                    <span className="flex items-center"><Globe className="w-3 h-3 mr-1" /> {job.location}</span>
                    <span className="flex items-center"><Briefcase className="w-3 h-3 mr-1" /> {job.dept}</span>
                  </div>
                </div>
                <button className="mt-4 md:mt-0 text-brand-navy font-bold flex items-center group-hover:text-brand-cyan transition-colors">
                  Learn More <ArrowRight className="ml-2 w-4 h-4" />
                </button>
              </div>
            ))}
          </div>

          <div className="text-center p-8 bg-brand-navy text-white rounded-[32px]">
            <p className="text-white/60 italic">{t.positions.footer}</p>
          </div>
        </div>
      </section>

      {/* How to Apply */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-brand-navy mb-4">{t.apply.title}</h2>
          <p className="text-xl text-brand-cyan font-bold mb-8">{t.apply.subtitle}</p>
          <div className="bg-brand-navy/[0.02] p-10 rounded-[40px] border border-brand-navy/5 mb-12">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <Mail className="w-6 h-6 text-brand-navy" />
              <span className="text-xl font-bold text-brand-navy">careers@fluidesuite.com</span>
            </div>
            <div className="text-left max-w-md mx-auto">
              <p className="font-bold text-brand-navy mb-4">{t.apply.include}</p>
              <ul className="space-y-3 mb-8">
                {t.apply.points.map((point, i) => (
                  <li key={i} className="flex items-start space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-brand-cyan shrink-0 mt-0.5" />
                    <span className="text-brand-navy/60">{point}</span>
                  </li>
                ))}
              </ul>
              <p className="text-xs text-brand-navy/40 italic text-center">{t.apply.note}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-brand-cyan">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-brand-navy mb-8">
            {t.finalCta}
          </h2>
          <a href="#positions" className="bg-brand-navy text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-brand-navy/90 transition-all inline-block">
            {t.hero.cta} →
          </a>
        </div>
      </section>
    </div>
  );
};

export default Careers;
