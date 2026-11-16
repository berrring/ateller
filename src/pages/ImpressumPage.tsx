import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

export const ImpressumPage: React.FC = () => {
  const { lang } = useLanguage();

  return (
    <div className="pt-24 pb-20 min-h-screen bg-[#161616] text-[#F2F0EB]">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 py-16">
        <Link to="/" className="inline-flex items-center gap-1.5 text-xs font-mono text-[#A6A6A2] hover:text-[#F2F0EB] transition-colors mb-8">
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>{lang === 'en' ? 'Back to Overview' : 'Zurück zur Startseite'}</span>
        </Link>

        {/* Demo Notice */}
        <div className="p-4 border border-[#333333] bg-[#111111] mb-10 text-xs font-mono text-[#A6A6A2] space-y-1">
          <span className="text-[#B8392D] font-bold block">// PORTFOLIO CONCEPT DEMONSTRATION</span>
          <p className="font-light">
            This website is a fictitious design and engineering concept created for portfolio presentation purposes. No commercial business transactions are processed.
          </p>
        </div>

        <h1 className="text-3xl sm:text-4xl font-['Manrope'] font-medium text-[#F2F0EB] mb-8">
          Impressum
        </h1>

        <div className="space-y-8 text-[#A6A6A2] text-xs font-mono leading-relaxed border-t border-[#262626] pt-8">
          <section className="space-y-2">
            <h2 className="text-sm font-semibold text-[#F2F0EB]">Angaben gemäß § 5 TMG</h2>
            <p>
              ATELIER Fahrzeugpflege GmbH (in Gründung / Fiktives Portfolio)<br />
              Schleißheimer Straße 418<br />
              80935 München<br />
              Deutschland
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-sm font-semibold text-[#F2F0EB]">Vertretungsberechtigte Geschäftsführung</h2>
            <p>Fabian von Bernsdorff</p>
          </section>

          <section className="space-y-2">
            <h2 className="text-sm font-semibold text-[#F2F0EB]">Kontakt</h2>
            <p>
              Telefon: +49 (0) 89 2109 4580<br />
              E-Mail: kontakt@atelier-fahrzeugpflege.de
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-sm font-semibold text-[#F2F0EB]">Registereintrag (Musterangabe)</h2>
            <p>
              Registergericht: Amtsgericht München<br />
              Registernummer: HRB 984512
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-sm font-semibold text-[#F2F0EB]">Umsatzsteuer-Identifikationsnummer</h2>
            <p>DE 948 215 304</p>
          </section>
        </div>
      </div>
    </div>
  );
};
