import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Phone } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export const CtaBanner: React.FC = () => {
  const { lang } = useLanguage();

  return (
    <section className="bg-[#111111] text-[#F2F0EB] py-24 sm:py-32 border-b border-[#262626]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="border border-[#262626] p-8 sm:p-16 lg:p-20 relative overflow-hidden bg-[#161616]">
          <div className="max-w-3xl space-y-6">
            <span className="font-mono text-xs uppercase tracking-widest text-[#B8392D] block">
              {lang === 'en' ? 'Direct Consultation // Munich Studio' : 'Direkte Beratung // Studio München'}
            </span>

            <h2 className="text-3xl sm:text-5xl font-['Manrope'] font-medium tracking-tight text-[#F2F0EB] leading-tight">
              {lang === 'en' ? (
                <>
                  Preserve the provenance <br />
                  <span className="text-[#A6A6A2]">of your automobile.</span>
                </>
              ) : (
                <>
                  Bewahren Sie die Geschichte <br />
                  <span className="text-[#A6A6A2]">Ihres Automobils.</span>
                </>
              )}
            </h2>

            <p className="text-base sm:text-lg text-[#A6A6A2] font-light max-w-xl leading-relaxed">
              {lang === 'en'
                ? 'We allocate time for an individual paint thickness diagnostic and custom protection strategy at our studio. Schedule a preliminary assessment or request an indicative proposal.'
                : 'Wir nehmen uns die Zeit für eine individuelle Schichtdicken-Diagnostik und ein maßgeschneidertes Veredelungskonzept bei uns vor Ort in München. Vereinbaren Sie ein unverbindliches Erstgespräch.'}
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <Link
                to="/termin"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#B8392D] text-white hover:bg-[#a02f24] text-xs font-medium uppercase tracking-wider transition-colors"
              >
                <span>{lang === 'en' ? 'Book Consultation' : 'Beratungstermin Vereinbaren'}</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>

              <a
                href="tel:+498921094580"
                className="inline-flex items-center gap-2 px-6 py-3.5 border border-[#333333] text-[#F2F0EB] hover:border-[#F2F0EB] text-xs font-mono uppercase tracking-wider transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#B8392D]" />
                <span>+49 (0) 89 2109 4580</span>
              </a>
            </div>

            <div className="pt-6 border-t border-[#262626] text-xs font-mono text-[#777777] flex flex-wrap gap-6">
              <span>• Schleißheimer Str. 418 · München</span>
              <span>• Discrete Single-Vehicle Bays</span>
              <span>• XPEL Certified Facility</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
