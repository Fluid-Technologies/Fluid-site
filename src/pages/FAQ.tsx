import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Plus, Minus } from 'lucide-react';

const FAQ = () => {
  const { language } = useLanguage();
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

  const content = {
    title: { en: 'Frequently Asked Questions', fr: 'Questions Fréquemment Posées', pt: 'Perguntas Frequentes' },
    desc: { en: 'Everything you need to know about the Fluide ecosystem.', fr: 'Tout ce que vous devez savoir sur l\'écosystème Fluide.', pt: 'Tudo o que precisa de saber sobre o ecossistema Fluide.' },
    faqs: [
      {
        q: { en: 'Is Fluide a bank?', fr: 'Fluide est-elle une banque ?', pt: 'A Fluide é um banco?' },
        a: { en: 'No. Fluide is a financial technology company. Banking services are provided by our partner banks. We provide the software.', fr: 'Non. Fluide est une plateforme de technologie financière. Les services bancaires sont fournis par nos banques partenaires et IMF. Nous fournissons l\'infrastructure et l\'interface utilisateur qui rendent ces services accessibles et utiles pour votre entreprise.', pt: 'Não. A Fluide é uma plataforma de tecnologia financeira. Os serviços bancários são fornecidos pelos nossos bancos parceiros e IMFs. Fornecemos a infraestrutura e a interface de utilizador que tornam estes serviços acessíveis e úteis para o seu negócio.' }
      },
      {
        q: { en: 'How much does it cost?', fr: 'Combien ça coûte ?', pt: 'Quanto custa?' },
        a: { en: 'We have a free tier for small businesses. Paid plans start at $6-8 per employee per month. See our Pricing page for details.', fr: 'Nous avons un niveau gratuit pour les petites entreprises. Nos forfaits payants commencent à partir de 6 à 8 $ par employé et par mois, selon l\'échelle et les fonctionnalités requises. Consultez notre page "Pour les entreprises" pour plus de détails.', pt: 'Temos um nível gratuito para pequenas empresas. Os nossos planos pagos começam a partir de 6 a 8 $ por colaborador por mês, dependendo da escala e das funcionalidades necessárias. Consulte a nossa página "Para Empresas" para mais detalhes.' }
      },
      {
        q: { en: 'Is my data secure?', fr: 'Mes données sont-elles sécurisées ?', pt: 'Os meus dados estão seguros?' },
        a: { en: 'Yes. We use bank-grade encryption to protect your data. Your payroll and employee info is stored securely.', fr: 'Absolument. Nous utilisons un cryptage de niveau bancaire et suivons des protocoles stricts de protection des données. Vos données de paie et d\'employés sont stockées en toute sécurité et ne sont accessibles qu\'au personnel autorisé de votre entreprise.', pt: 'Absolutamente. Utilizamos encriptação de nível bancário e seguimos protocolos rigorosos de proteção de dados. Os seus dados de folha de pagamentos e de colaboradores são armazenados de forma segura e só são acessíveis por pessoal autorizado na sua empresa.' }
      },
      {
        q: { en: 'Does it work offline?', fr: 'Cela fonctionne-t-il hors ligne ?', pt: 'Funciona offline?' },
        a: { en: 'Fluide Lite works offline. You can record sales and payments without internet, and it syncs when you reconnect.', fr: 'Fluide Lite est spécialement conçu pour fonctionner avec une connectivité limitée, vous permettant d\'enregistrer les ventes et les paiements du personnel hors ligne et de vous synchroniser lorsque vous avez une connexion.', pt: 'O Fluide Lite foi concebido especificamente para funcionar com conectividade limitada, permitindo-lhe registar vendas e pagamentos de pessoal offline e sincronizar quando tiver uma ligação.' }
      },
      {
        q: { en: 'Can I pay employees in other countries?', fr: 'Puis-je payer des employés dans différents pays ?', pt: 'Posso pagar a colaboradores em diferentes países?' },
        a: { en: 'Yes. Fluide Pay supports cross-border payments, so you can pay remote teams in their local currency.', fr: 'Oui. Fluide Pay prend en charge les versements de salaires transfrontaliers, vous permettant de payer les membres de votre équipe distante dans leurs devises et canaux locaux.', pt: 'Sim. O Fluide Pay suporta desembolsos de salários transfronteiriços, permitindo-lhe pagar aos membros da sua equipa remota nas suas moedas e canais locais.' }
      }
    ],
    stillQuestions: { en: 'Still have questions?', fr: 'Vous avez encore des questions ?', pt: 'Ainda tem dúvidas?' },
    helpStart: { en: 'We\'re here to help you get started.', fr: 'Nous sommes là pour vous aider à démarrer.', pt: 'Estamos aqui para o ajudar a começar.' },
    contactSupport: { en: 'Contact Support', fr: 'Contacter le support', pt: 'Contactar o Suporte' }
  };

  return (
    <div className="pt-20">
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,rgba(78,242,216,0.05),transparent_50%)] pointer-events-none" />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h1 className="text-5xl font-bold mb-6 text-brand-navy">{content.title[language]}</h1>
            <p className="text-xl text-brand-navy/60">{content.desc[language]}</p>
          </div>

          <div className="space-y-4">
            {content.faqs.map((faq, idx) => (
              <div key={idx} className="border border-brand-navy/5 rounded-[32px] overflow-hidden bg-white shadow-sm hover:shadow-md transition-all">
                <button 
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-8 text-left hover:bg-brand-navy/[0.02] transition-all group"
                >
                  <span className="text-lg font-bold pr-8 text-brand-navy group-hover:text-brand-navy/80">{faq.q[language]}</span>
                  {openIndex === idx ? (
                    <Minus className="w-5 h-5 flex-shrink-0 text-brand-cyan" />
                  ) : (
                    <Plus className="w-5 h-5 flex-shrink-0 text-brand-navy/40 group-hover:text-brand-cyan transition-all" />
                  )}
                </button>
                {openIndex === idx && (
                  <div className="p-8 pt-0 text-brand-navy/60 leading-relaxed bg-brand-navy/[0.01]">
                    {faq.a[language]}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-20 p-12 bg-brand-navy text-white rounded-[40px] text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_20%,rgba(78,242,216,0.1),transparent_50%)] pointer-events-none" />
            <h3 className="text-2xl font-bold mb-4 relative z-10">{content.stillQuestions[language]}</h3>
            <p className="text-white/60 mb-8 relative z-10">{content.helpStart[language]}</p>
            <button className="bg-brand-cyan text-brand-navy px-8 py-4 rounded-full font-bold hover:bg-brand-cyan/90 transition-all relative z-10 shadow-lg shadow-brand-cyan/20">
              {content.contactSupport[language]}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
