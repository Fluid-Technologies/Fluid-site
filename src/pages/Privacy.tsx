import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Privacy = () => {
  const { language } = useLanguage();

  const content = {
    title: { en: 'Privacy Policy', fr: 'Politique de confidentialité', pt: 'Política de Privacidade' },
    lastUpdated: { en: 'Last updated: March 2026', fr: 'Dernière mise à jour : Mars 2026', pt: 'Última atualização: Março de 2026' },
    sections: [
      {
        title: { en: '1. Introduction', fr: '1. Introduction', pt: '1. Introdução' },
        content: {
          en: 'Fluide ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our platform.',
          fr: 'Fluide ("nous", "notre" ou "nos") s\'engage à protéger votre vie privée. Cette politique de confidentialité explique comment nous recueillons, utilisons, divulguons et protégeons vos informations lorsque vous utilisez notre plateforme.',
          pt: 'O Fluide ("nós", "nosso" ou "nossos") está empenhado em proteger a sua privacidade. Esta Política de Privacidade explica como recolhemos, utilizamos, divulgamos e salvaguardamos as suas informações quando utiliza a nossa plataforma.'
        }
      },
      {
        title: { en: '2. Information We Collect', fr: '2. Informations que nous recueillons', pt: '2. Informações que Recolhemos' },
        content: {
          en: 'We collect information that you provide directly to us, such as when you create an account, process payroll, or contact support. This may include:',
          fr: 'Nous recueillons les informations que vous nous fournissez directement, par exemple lorsque vous créez un compte, traitez la paie ou contactez l\'assistance. Cela peut inclure :',
          pt: 'Recolhemos informações que nos fornece diretamente, como quando cria uma conta, processa salários ou contacta o suporte. Isto pode incluir:'
        },
        list: [
          { en: 'Personal identification information (Name, email address, phone number)', fr: 'Informations d\'identification personnelle (Nom, adresse e-mail, numéro de téléphone)', pt: 'Informações de identificação pessoal (Nome, endereço de e-mail, número de telefone)' },
          { en: 'Employment information (Job title, salary, work history)', fr: 'Informations sur l\'emploi (Titre du poste, salaire, antécédents professionnels)', pt: 'Informações de emprego (Cargo, salário, histórico de trabalho)' },
          { en: 'Financial information (Bank account details for payroll)', fr: 'Informations financières (Coordonnées bancaires pour la paie)', pt: 'Informações financeiras (Detalhes da conta bancária para processamento de salários)' },
          { en: 'Business information (Company name, tax ID, location)', fr: 'Informations commerciales (Nom de l\'entreprise, numéro d\'identification fiscale, emplacement)', pt: 'Informações comerciais (Nome da empresa, número de identificação fiscal, localização)' }
        ]
      },
      {
        title: { en: '3. How We Use Your Information', fr: '3. Comment nous utilisons vos informations', pt: '3. Como Utilizamos as Suas Informações' },
        content: {
          en: 'We use the information we collect to:',
          fr: 'Nous utilisons les informations que nous recueillons pour :',
          pt: 'Utilizamos as informações que recolhemos para:'
        },
        list: [
          { en: 'Provide, operate, and maintain our platform', fr: 'Fournir, exploiter et maintenir notre plateforme', pt: 'Fornecer, operar e manter a nossa plataforma' },
          { en: 'Process payroll and salary disbursements', fr: 'Traiter la paie et les décaissements de salaires', pt: 'Processar salários e desembolsos de salários' },
          { en: 'Verify employment and identity', fr: 'Vérifier l\'emploi et l\'identité', pt: 'Verificar emprego e identidade' },
          { en: 'Improve our services and develop new features', fr: 'Améliorer nos services et développer de nouvelles fonctionnalités', pt: 'Melhorar os nossos serviços e desenvolver novas funcionalidades' },
          { en: 'Comply with legal and regulatory requirements', fr: 'Se conformer aux exigences légales et réglementaires', pt: 'Cumprir os requisitos legais e regulamentares' }
        ]
      },
      {
        title: { en: '4. Data Security', fr: '4. Sécurité des données', pt: '4. Segurança de Dados' },
        content: {
          en: 'We implement bank-grade security measures to protect your data. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.',
          fr: 'Nous mettons en œuvre des mesures de sécurité de niveau bancaire pour protéger vos données. Cependant, aucune méthode de transmission sur Internet n\'est sûre à 100 % et nous ne pouvons garantir une sécurité absolue.',
          pt: 'Implementamos medidas de segurança de nível bancário para proteger os seus dados. No entanto, nenhum método de transmissão através da Internet é 100% seguro e não podemos garantir segurança absoluta.'
        }
      }
    ]
  };

  return (
    <div className="pt-40 pb-24 px-4 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_20%,rgba(78,242,216,0.05),transparent_50%)] pointer-events-none" />
      <div className="max-w-3xl mx-auto prose prose-lg relative z-10">
        <h1 className="text-5xl font-bold mb-12 text-brand-navy">{content.title[language]}</h1>
        <p className="text-brand-navy/60 mb-8">{content.lastUpdated[language]}</p>
        
        {content.sections.map((section, index) => (
          <section key={index} className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-brand-navy">{section.title[language]}</h2>
            <p className="text-brand-navy/60">{section.content[language]}</p>
            {section.list && (
              <ul className="list-disc pl-6 text-brand-navy/60 space-y-2 mt-4">
                {section.list.map((item, idx) => (
                  <li key={idx}>{item[language]}</li>
                ))}
              </ul>
            )}
          </section>
        ))}
      </div>
    </div>
  );
};

export default Privacy;
