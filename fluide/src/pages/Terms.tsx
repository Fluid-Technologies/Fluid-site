import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Terms = () => {
  const { language } = useLanguage();

  const content = {
    title: { en: 'Terms of Service', fr: 'Conditions d\'utilisation', pt: 'Termos de Serviço' },
    lastUpdated: { en: 'Last updated: March 2026', fr: 'Dernière mise à jour : Mars 2026', pt: 'Última atualização: Março de 2026' },
    sections: [
      {
        title: { en: '1. Acceptance of Terms', fr: '1. Acceptation des conditions', pt: '1. Aceitação dos Termos' },
        content: {
          en: 'By accessing or using Fluide, you agree to be bound by these Terms of Service. If you do not agree to all the terms and conditions, you may not use our services.',
          fr: 'En accédant ou en utilisant Fluide, vous acceptez d\'être lié par ces Conditions d\'utilisation. Si vous n\'acceptez pas toutes les conditions générales, vous ne pouvez pas utiliser nos services.',
          pt: 'Ao aceder ou utilizar o Fluide, concorda em ficar vinculado a estes Termos de Serviço. Se não concordar com todos os termos e condições, não poderá utilizar os nossos serviços.'
        }
      },
      {
        title: { en: '2. Use of Services', fr: '2. Utilisation des services', pt: '2. Utilização dos Serviços' },
        content: {
          en: 'You agree to use our services only for lawful purposes and in accordance with these Terms. You are responsible for maintaining the confidentiality of your account credentials.',
          fr: 'Vous acceptez d\'utiliser nos services uniquement à des fins légales et conformément à ces Conditions. Vous êtes responsable du maintien de la confidentialité des identifiants de votre compte.',
          pt: 'Concorda em utilizar os nossos serviços apenas para fins lícitos e de acordo com estes Termos. É responsável por manter a confidencialidade das credenciais da sua conta.'
        }
      },
      {
        title: { en: '3. Payroll and Payments', fr: '3. Paie et paiements', pt: '3. Processamento de Salários e Pagamentos' },
        content: {
          en: 'Employers are responsible for the accuracy of payroll data provided. Fluide acts as a facilitator for salary disbursements and is not responsible for errors caused by incorrect input data.',
          fr: 'Les employeurs sont responsables de l\'exactitude des données de paie fournies. Fluide agit en tant que facilitateur pour les décaissements de salaires et n\'est pas responsable des erreurs causées par des données d\'entrée incorrectes.',
          pt: 'Os empregadores são responsáveis pela exatidão dos dados de processamento de salários fornecidos. O Fluide atua como um facilitador para desembolsos de salários e não é responsável por erros causados por dados de entrada incorretos.'
        }
      },
      {
        title: { en: '4. Limitation of Liability', fr: '4. Limitation de responsabilité', pt: '4. Limitação de Responsabilidade' },
        content: {
          en: 'To the maximum extent permitted by law, Fluide shall not be liable for any indirect, incidental, special, or consequential damages resulting from the use or inability to use our services.',
          fr: 'Dans toute la mesure permise par la loi, Fluide ne sera pas responsable des dommages indirects, accessoires, spéciaux ou consécutifs résultant de l\'utilisation ou de l\'impossibilité d\'utiliser nos services.',
          pt: 'Na extensão máxima permitida por lei, o Fluide não será responsável por quaisquer danos indiretos, incidentais, especiais ou consequenciais resultantes da utilização ou incapacidade de utilizar os nossos serviços.'
        }
      }
    ]
  };

  return (
    <div className="pt-40 pb-24 px-4 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,rgba(78,242,216,0.05),transparent_50%)] pointer-events-none" />
      <div className="max-w-3xl mx-auto prose prose-lg relative z-10">
        <h1 className="text-5xl font-bold mb-12 text-brand-navy">{content.title[language]}</h1>
        <p className="text-brand-navy/60 mb-8">{content.lastUpdated[language]}</p>
        
        {content.sections.map((section, index) => (
          <section key={index} className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-brand-navy">{section.title[language]}</h2>
            <p className="text-brand-navy/60">{section.content[language]}</p>
          </section>
        ))}
      </div>
    </div>
  );
};

export default Terms;
