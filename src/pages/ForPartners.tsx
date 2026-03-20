import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'motion/react';
import { ArrowRight, Users, TrendingUp, ShieldCheck, Landmark } from 'lucide-react';
import { Link } from 'react-router-dom';
import PartnerFormModal from '../components/PartnerFormModal';

const ForPartners = () => {
  const { language } = useLanguage();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState<'partner' | 'demo' | 'brochure'>('partner');

  const openModal = (type: 'partner' | 'demo' | 'brochure') => {
    setModalType(type);
    setIsModalOpen(true);
  };

  const content = {
    hero: {
      title: { en: 'Partner with us and grow.', fr: 'Devenez partenaire de Fluide. Développez votre cabinet.', pt: 'Seja parceiro da Fluide. Cresça a sua prática.' },
      desc: {
        en: 'Together, we can help businesses across Africa with payroll, banking, and digital tools.',
        fr: 'Les PME africaines sont nos clients communs. Elles ont besoin de paie, de conformité, de services bancaires et d\'outils numériques. Ensemble, nous pouvons atteindre chaque entreprise du continent.',
        pt: 'As PMEs africanas são os nossos clientes comuns. Precisam de processamento salarial, conformidade, serviços bancários e ferramentas digitais. Juntos, podemos chegar a todas as empresas do continente.'
      },
      cta: { en: 'Become a partner', fr: 'Devenir partenaire', pt: 'Tornar-se parceiro' }
    },
    partnerTypes: [
      { title: { en: 'Accountants & Tax Advisors', fr: 'Comptables et Conseillers Fiscaux', pt: 'Contabilistas e Consultores Fiscais' }, benefit: { en: 'Manage all your clients in one place. See payroll and compliance alerts easily.', fr: 'Passez d\'un client à l\'autre en un clic. Consultez l\'état de la paie et les alertes de conformité de tous les comptes dans une vue unique.', pt: 'Alterne entre clientes com um clique. Veja o estado do processamento salarial e alertas de conformidade em todas as contas numa única vista.' } },
      { title: { en: 'Fluide Force Agents', fr: 'Agents Fluide Force', pt: 'Agentes Fluide Force' }, benefit: { en: 'Help businesses grow and earn recurring commissions.', fr: 'Gagnez de l\'argent en aidant les entreprises à se développer. Intégrez des clients Fluide HR sur votre marché et gagnez des commissions récurrentes.', pt: 'Ganhe ajudando as empresas a crescer. Angarie clientes Fluide HR no seu mercado e ganhe comissões recorrentes.' } },
      { title: { en: 'Wholesalers & Distributors', fr: 'Grossistes et Distributeurs', pt: 'Grossistas e Distribuidores' }, benefit: { en: 'Digitize your credit and reach more customers easily.', fr: 'Numérisez votre crédit. Atteignez plus de clients. Fluide Lite + Books peut numériser l\'ensemble de votre chaîne d\'approvisionnement en crédit.', pt: 'Digitalize o seu crédito. Chegue a mais clientes. Fluide Lite + Books pode digitalizar toda a sua cadeia de fornecimento de crédito.' } },
      { title: { en: 'Banks & MFIs', fr: 'Banques et IMF', pt: 'Bancos e IMFs' }, benefit: { en: 'Partner with us to offer your credit products on our platform.', fr: 'Intégrez le crédit dans l\'infrastructure de paie de l\'Afrique. Associez-vous à nous pour intégrer des produits de crédit dans notre plateforme.', pt: 'Incorpore o crédito na infraestrutura de processamento salarial de África. Seja nosso parceiro para incorporar produtos de crédito na nossa plataforma.' } },
    ],
    baas: {
      title: { en: 'Offer credit through our platform.', fr: 'Intégrez le crédit dans l\'infrastructure de paie de l\'Afrique.', pt: 'Incorpore o crédito na infraestrutura de processamento salarial de África.' },
      items: [
        { title: { en: 'Data-as-a-Service', fr: 'Données en tant que Service (DaaS)', pt: 'Dados como Serviço (DaaS)' }, desc: { en: 'Use our data to make better credit decisions.', fr: 'Accédez aux données anonymisées et agrégées du Fluide Score pour la prise de décision en matière de crédit.', pt: 'Aceda a dados anonimizados e agregados do Fluide Score para decisões de crédito.' } },
        { title: { en: 'Embedded Lending', fr: 'Prêts Intégrés', pt: 'Empréstimos Incorporados' }, desc: { en: 'Show your loan products directly in our apps.', fr: 'Les produits de prêt du partenaire apparaissent directement dans Fluide Pulse / Fluide Bank.', pt: 'Produtos de empréstimo do parceiro apresentados diretamente no Fluide Pulse / Fluide Bank.' } },
        { title: { en: 'White-Label Payroll Banking', fr: 'Services Bancaires de Paie en Marque Blanche', pt: 'Serviços Bancários de Processamento Salarial em Marca Branca' }, desc: { en: 'You provide the banking infrastructure, we provide the app.', fr: 'La banque partenaire fournit l\'infrastructure BaaS ; Fluide fournit l\'interface utilisateur.', pt: 'O banco parceiro fornece a infraestrutura BaaS; a Fluide fornece a interface de utilizador.' } }
      ],
      ready: {
        title: { en: 'Ready to scale?', fr: 'Prêt à évoluer ?', pt: 'Pronto para crescer?' },
        brochure: { en: 'Download Partner Brochure', fr: 'Télécharger la Brochure Partenaire', pt: 'Descarregar Brochura de Parceiro' },
        demo: { en: 'Book a demo', fr: 'Réserver une démo', pt: 'Agendar uma demonstração' }
      }
    }
  };

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-brand-navy/[0.02] py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_20%,rgba(78,242,216,0.05),transparent_50%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight mb-8 leading-tight text-brand-navy">{content.hero.title[language]}</h1>
            <p className="text-xl text-brand-navy/60 leading-relaxed mb-10">{content.hero.desc[language]}</p>
            <button 
              onClick={() => openModal('partner')}
              className="bg-brand-navy text-white px-10 py-4 rounded-full font-bold hover:bg-brand-navy/90 transition-all shadow-lg shadow-brand-navy/10"
            >
              {content.hero.cta[language]}
            </button>
          </div>
        </div>
      </section>

      {/* Partner Types */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {content.partnerTypes.map((type, idx) => (
              <div key={idx} className="p-10 rounded-[40px] bg-brand-navy/[0.02] border border-brand-navy/5 group hover:bg-brand-navy hover:text-white transition-all duration-500">
                <h3 className="text-2xl font-bold mb-6">{type.title[language]}</h3>
                <p className="text-lg text-brand-navy/60 group-hover:text-white/60 leading-relaxed transition-colors">{type.benefit[language]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BAAS Partnerships */}
      <section className="py-24 bg-brand-navy text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,rgba(78,242,216,0.05),transparent_50%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-8">{content.baas.title[language]}</h2>
              <div className="space-y-8">
                {content.baas.items.map((item, idx) => (
                  <div key={idx} className="flex items-start space-x-4 group">
                    <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 mt-1 group-hover:bg-brand-cyan/20 transition-colors">
                      <div className="w-2 h-2 bg-brand-cyan rounded-full" />
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">{item.title[language]}</h4>
                      <p className="text-white/40 text-sm">{item.desc[language]}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white/5 p-12 rounded-[40px] border border-white/10 text-center">
              <h3 className="text-2xl font-bold mb-8">{content.baas.ready.title[language]}</h3>
              <div className="space-y-4">
                <button 
                  onClick={() => openModal('brochure')}
                  className="w-full bg-brand-cyan text-brand-navy py-4 rounded-2xl font-bold hover:bg-brand-cyan/90 transition-all shadow-lg shadow-brand-cyan/10"
                >
                  {content.baas.ready.brochure[language]}
                </button>
                <button 
                  onClick={() => openModal('demo')}
                  className="w-full border border-white/20 py-4 rounded-2xl font-bold hover:bg-white/10 transition-all"
                >
                  {content.baas.ready.demo[language]}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <PartnerFormModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        type={modalType} 
      />
    </div>
  );
};

export default ForPartners;
