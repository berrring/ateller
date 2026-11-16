import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const NotFoundPage: React.FC = () => {
  const { lang } = useLanguage();

  return (
    <div className="min-h-[80vh] flex items-center justify-center pt-24 pb-16 px-6 bg-[#161616] text-[#F2F0EB]">
      <div className="max-w-md w-full text-left border border-[#262626] bg-[#111111] p-10 space-y-4">
        <span className="font-mono text-xs text-[#B8392D] uppercase tracking-widest block">
          ERROR // 404
        </span>
        <h1 className="text-3xl font-['Manrope'] font-medium text-[#F2F0EB]">
          {lang === 'en' ? 'Page Not Found.' : 'Seite nicht gefunden.'}
        </h1>
        <p className="text-xs font-mono text-[#A6A6A2] leading-relaxed">
          {lang === 'en'
            ? 'The requested URL does not exist or has been relocated in the studio archive.'
            : 'Die angeforderte Adresse existiert nicht oder wurde im Studio-Archiv verschoben.'}
        </p>

        <div className="pt-4 border-t border-[#262626]">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase text-[#F2F0EB] hover:text-[#B8392D] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>{lang === 'en' ? 'Return to Home' : 'Zurück zur Startseite'}</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
