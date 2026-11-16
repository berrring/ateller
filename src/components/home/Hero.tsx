import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export const Hero: React.FC = () => {
  const { lang } = useLanguage();

  return (
    <section className="relative min-h-[92vh] flex flex-col justify-between bg-[#161616] text-[#F2F0EB] pt-32 pb-12 overflow-hidden border-b border-[#262626]">
      {/* Background Automotive Photography with deliberate architectural crop */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=2400&auto=format&fit=crop"
          alt="Porsche 911 GT3 RS bodywork and paint reflection at ATELIER Studio Munich"
          className="w-full h-full object-cover object-center filter brightness-[0.38] contrast-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#161616] via-[#161616]/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#161616] via-[#161616]/60 to-transparent" />
      </div>

      {/* Top Editorial Index / Metadata bar */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 w-full">
        <div className="flex items-center gap-3 text-xs font-mono tracking-widest text-[#A6A6A2] uppercase border-b border-[#262626]/80 pb-4">
          <span className="text-[#B8392D] font-bold">01 //</span>
          <span>{lang === 'en' ? 'Munich Studio for Automotive Surface Preservation' : 'Münchner Manufaktur für Lackschutz & Veredelung'}</span>
        </div>
      </div>

      {/* Main Typography & Action Block */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 w-full my-auto py-12">
        <div className="max-w-4xl space-y-6">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-['Manrope'] font-medium tracking-tight text-[#F2F0EB] leading-[1.05]">
            {lang === 'en' ? (
              <>
                Precision in the <br />
                <span className="text-[#A6A6A2] font-light">submicron range.</span>
              </>
            ) : (
              <>
                Präzision im <br />
                <span className="text-[#A6A6A2] font-light">Submikron-Bereich.</span>
              </>
            )}
          </h1>

          <p className="text-base sm:text-lg text-[#A6A6A2] font-light max-w-2xl leading-relaxed">
            {lang === 'en'
              ? 'Computer-cut XPEL paint protection film (PPF), multi-stage surgical clearcoat correction, and 9H quartz coatings. Designed for Porsche, BMW M, and Mercedes-AMG in Munich.'
              : 'Computeroptimierte XPEL Lackschutzfolierung (PPF), mehrstufige chirurgische Lackkorrektur und molekulare Quarzversiegelung. Konzipiert für Porsche, BMW M und Mercedes-AMG in München.'}
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <Link
              to="/termin"
              className="inline-flex items-center gap-3 px-6 py-3.5 bg-[#B8392D] text-white hover:bg-[#a02f24] text-xs font-medium uppercase tracking-wider transition-colors duration-200"
            >
              <span>{lang === 'en' ? 'Request Consultation' : 'Beratungstermin Anfragen'}</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>

            <Link
              to="/leistungen"
              className="inline-flex items-center gap-2 px-6 py-3.5 border border-[#333333] text-[#F2F0EB] hover:border-[#F2F0EB] text-xs font-medium uppercase tracking-wider transition-colors duration-200"
            >
              <span>{lang === 'en' ? 'Explore Services' : 'Leistungen Entdecken'}</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Technical Grid (Precision specs instead of bubbly AI cards) */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 w-full border-t border-[#262626] pt-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-xs">
          <div className="space-y-1">
            <span className="font-mono text-[#A6A6A2] block uppercase text-[10px]">XPEL® Elite</span>
            <span className="text-[#F2F0EB] font-medium block">{lang === 'en' ? '10-Year Warranty' : '10 Jahre Garantie'}</span>
          </div>
          <div className="space-y-1">
            <span className="font-mono text-[#A6A6A2] block uppercase text-[10px]">Measurement</span>
            <span className="text-[#F2F0EB] font-medium block">{lang === 'en' ? 'DeFelsko Positector Gauging' : 'Digitale Schichtdickenmessung'}</span>
          </div>
          <div className="space-y-1">
            <span className="font-mono text-[#A6A6A2] block uppercase text-[10px]">Cleanroom</span>
            <span className="text-[#F2F0EB] font-medium block">{lang === 'en' ? '5000K High-CRI Lighting' : '5000K High-CRI Lichtlabor'}</span>
          </div>
          <div className="space-y-1">
            <span className="font-mono text-[#A6A6A2] block uppercase text-[10px]">Location</span>
            <span className="text-[#F2F0EB] font-medium block">München-Nord · Motorworld</span>
          </div>
        </div>
      </div>
    </section>
  );
};
