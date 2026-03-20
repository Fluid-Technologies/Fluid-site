import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  const { language } = useLanguage();

  return (
    <nav className="flex items-center space-x-2 text-xs font-medium text-brand-navy/40 mb-8 overflow-x-auto whitespace-nowrap pb-2 scrollbar-hide">
      <Link to="/" className="hover:text-brand-cyan transition-colors flex items-center">
        <Home className="w-3 h-3 mr-1" />
        {language === 'en' ? 'Home' : language === 'fr' ? 'Accueil' : 'Início'}
      </Link>
      {items.map((item, idx) => (
        <React.Fragment key={item.href}>
          <ChevronRight className="w-3 h-3 opacity-50 shrink-0" />
          {idx === items.length - 1 ? (
            <span className="text-brand-navy font-bold">{item.label}</span>
          ) : (
            <Link to={item.href} className="hover:text-brand-cyan transition-colors">
              {item.label}
            </Link>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
};

export default Breadcrumbs;
