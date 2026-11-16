import React from 'react';
import { pricingPackages } from '../data/pricing';
import { CostEstimator } from '../components/pricing/CostEstimator';
import { ServiceComparison } from '../components/services/ServiceComparison';
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { faqList } from '../data/team';
import { useLanguage } from '../context/LanguageContext';

export const PricingPage: React.FC = () => {
  const { lang } = useLanguage();

  return (
    <div className="pt-24 pb-20 min-h-screen bg-[#161616] text-[#F2F0EB]">
      {/* Editorial Header */}
      <section className="py-20 border-b border-[#262626]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <span className="font-mono text-xs uppercase tracking-widest text-[#B8392D] block mb-3">
            03 // {lang === 'en' ? 'Pricing & Packages' : 'Preise & Tarife'}
          </span>
          <h1 className="text-4xl sm:text-6xl font-['Manrope'] font-medium tracking-tight text-[#F2F0EB] max-w-3xl leading-tight">
            {lang === 'en' ? (
              <>
                Transparent investment. <br />
                <span className="text-[#A6A6A2] font-light">Documented asset preservation.</span>
              </>
            ) : (
              <>
                Transparente Investition. <br />
                <span className="text-[#A6A6A2] font-light">Nachweisbarer Werterhalt.</span>
              </>
            )}
          </h1>
          <p className="text-base sm:text-lg text-[#A6A6A2] font-light max-w-2xl mt-6 leading-relaxed">
            {lang === 'en'
              ? 'Clear indicative sample rates in EUR including 19% German VAT, full paint depth mapping, and official manufacturer warranties.'
              : 'Klare Richtpreise in EUR inklusive 19% MwSt., vollständiger Schichtdickenmessung und offiziellen Herstellergarantien.'}
          </p>
        </div>
      </section>

      {/* Interactive Estimator Section (Prominently placed) */}
      <section className="py-20 max-w-7xl mx-auto px-6 sm:px-8">
        <CostEstimator />
      </section>

      {/* Strategic Light Section for Standard Packages */}
      <section className="bg-[#F2F0EB] text-[#161616] py-24 sm:py-32 border-y border-[#DDD9D0]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="border-b border-[#DCD8CF] pb-6 mb-16">
            <span className="font-mono text-xs uppercase tracking-widest text-[#777777] block mb-2">
              {lang === 'en' ? 'Curated Configurations' : 'Standardisierte Leistungspakete'}
            </span>
            <h2 className="text-3xl sm:text-4xl font-['Manrope'] font-semibold tracking-tight text-[#161616]">
              {lang === 'en' ? 'Core Treatment Packages' : 'Feste Veredelungs-Pakete'}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pricingPackages.map((pkg) => (
              <div
                key={pkg.id}
                className={`border p-8 bg-white flex flex-col justify-between ${
                  pkg.popular ? 'border-[#B8392D] ring-1 ring-[#B8392D]' : 'border-[#DCD8CF]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-[#E2DFD8]">
                    <span className="font-mono text-xs text-[#777777] uppercase">{pkg.category}</span>
                    {pkg.popular && (
                      <span className="text-[10px] font-mono uppercase bg-[#B8392D] text-white px-2 py-0.5">
                        {lang === 'en' ? 'Studio Choice' : 'Empfehlung'}
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl sm:text-2xl font-['Manrope'] font-semibold text-[#161616] mt-4 mb-1">
                    {pkg.name}
                  </h3>
                  <p className="text-xs text-[#666666] font-light mb-6">
                    {pkg.idealFor}
                  </p>

                  <div className="pb-6 mb-6 border-b border-[#E2DFD8]">
                    <span className="text-[10px] font-mono uppercase text-[#777777] block">ab</span>
                    <span className="text-3xl sm:text-4xl font-mono font-bold text-[#161616]">
                      {pkg.priceFrom.toLocaleString('de-DE')} €
                    </span>
                    <span className="text-xs font-mono text-[#777777] block mt-1">
                      {lang === 'en' ? 'Duration:' : 'Dauer:'} {pkg.duration}
                    </span>
                  </div>

                  <div className="space-y-3 mb-8">
                    <span className="text-xs font-mono uppercase tracking-wider text-[#161616] block">
                      {lang === 'en' ? 'Scope of Work:' : 'Leistungsumfang:'}
                    </span>
                    {pkg.inclusions.map((inc, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-[#444444] font-light">
                        <Check className="w-3.5 h-3.5 text-[#B8392D] shrink-0 mt-0.5" />
                        <span>{inc}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Link
                  to={`/termin?treatment=${encodeURIComponent(pkg.name)}&estimate=${pkg.priceFrom}`}
                  className={`w-full py-3 px-4 text-xs font-mono uppercase tracking-wider text-center transition-colors block ${
                    pkg.popular
                      ? 'bg-[#B8392D] text-white hover:bg-[#a02f24]'
                      : 'border border-[#161616] text-[#161616] hover:bg-[#161616] hover:text-[#F2F0EB]'
                  }`}
                >
                  {lang === 'en' ? 'Inquire Package' : 'Paket Anfragen'}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Matrix */}
      <section className="py-20 max-w-7xl mx-auto px-6 sm:px-8">
        <ServiceComparison />
      </section>

      {/* FAQs */}
      <section className="py-20 max-w-4xl mx-auto px-6 sm:px-8 border-t border-[#262626]">
        <div className="space-y-8">
          <div className="space-y-2">
            <span className="font-mono text-xs uppercase tracking-widest text-[#B8392D] block">
              04 // FAQ
            </span>
            <h2 className="text-2xl sm:text-3xl font-['Manrope'] font-medium text-[#F2F0EB]">
              {lang === 'en' ? 'Frequently Asked Questions' : 'Häufig gestellte Fragen'}
            </h2>
          </div>

          <div className="space-y-6">
            {faqList.map((faq, idx) => (
              <div key={idx} className="border-b border-[#262626] pb-6 space-y-2">
                <h4 className="text-base font-medium text-[#F2F0EB] font-['Manrope']">
                  {faq.question}
                </h4>
                <p className="text-xs sm:text-sm text-[#A6A6A2] font-light leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
