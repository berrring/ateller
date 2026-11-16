import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

export const DatenschutzPage: React.FC = () => {
  const { lang } = useLanguage();

  return (
    <div className="pt-24 pb-20 min-h-screen bg-[#161616] text-[#F2F0EB]">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 py-16">
        <Link to="/" className="inline-flex items-center gap-1.5 text-xs font-mono text-[#A6A6A2] hover:text-[#F2F0EB] transition-colors mb-8">
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>{lang === 'en' ? 'Back to Overview' : 'Zurück zur Startseite'}</span>
        </Link>

        <h1 className="text-3xl sm:text-4xl font-['Manrope'] font-medium text-[#F2F0EB] mb-8">
          Datenschutzerklärung (GDPR / DSGVO)
        </h1>

        <div className="space-y-8 text-[#A6A6A2] text-xs font-mono leading-relaxed border-t border-[#262626] pt-8">
          <section className="space-y-2">
            <h2 className="text-sm font-semibold text-[#F2F0EB]">1. Datenschutz auf einen Blick</h2>
            <p>
              Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-sm font-semibold text-[#F2F0EB]">2. Verantwortliche Stelle</h2>
            <p>
              ATELIER Fahrzeugpflege München<br />
              Schleißheimer Straße 418<br />
              80935 München<br />
              E-Mail: datenschutz@atelier-fahrzeugpflege.de
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-sm font-semibold text-[#F2F0EB]">3. Datenerfassung auf dieser Website</h2>
            <p>
              Daten aus Kontakt- und Terminanfrageformularen werden zwecks Vorbereitung und Abstimmung einer individuellen Fahrzeugveredelung erhoben und keinesfalls an unbefugte Dritte weitergegeben.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};
