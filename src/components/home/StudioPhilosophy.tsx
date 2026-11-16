import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const StudioPhilosophy: React.FC = () => {
  const { lang } = useLanguage();

  return (
    <section className="bg-[#F2F0EB] text-[#161616] py-24 sm:py-32 border-b border-[#DDD9D0]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#DCD8CF] pb-6 mb-16">
          <div className="space-y-2">
            <span className="font-mono text-xs uppercase tracking-widest text-[#777777] block">
              02 // {lang === 'en' ? 'Studio Philosophy' : 'Haltung & Philosophie'}
            </span>
            <h2 className="text-3xl sm:text-4xl font-['Manrope'] font-semibold tracking-tight text-[#161616]">
              {lang === 'en' ? 'Precision. Restraint. Craftsmanship.' : 'Präzision. Zurückhaltung. Handwerk.'}
            </h2>
          </div>
          <Link
            to="/ueber-uns"
            className="mt-4 md:mt-0 text-xs font-mono uppercase tracking-wider text-[#161616] hover:text-[#B8392D] transition-colors flex items-center gap-1.5"
          >
            <span>{lang === 'en' ? 'Studio Details' : 'Mehr zum Studio'}</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Asymmetrical Editorial Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Main Statement (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            <p className="text-xl sm:text-2xl font-light text-[#161616] leading-snug">
              {lang === 'en' ? (
                <>
                  We do not believe in superficial shine or quick cosmetic masking. We approach every vehicle with the analytical rigor of German engineering and the patience of traditional craftsmanship.
                </>
              ) : (
                <>
                  Wir glauben nicht an oberflächliche Verkaufspolituren oder kurzlebigen Glanz. Wir begegnen jedem Fahrzeug mit der analytischen Strenge deutscher Ingenieurskunst und der Geduld echter Handwerksarbeit.
                </>
              )}
            </p>

            <div className="space-y-4 text-sm sm:text-base font-light text-[#444444] leading-relaxed">
              <p>
                {lang === 'en'
                  ? 'Modern clearcoats applied to vehicles from Zuffenhausen, Garching, or Affalterbach measure merely 35 to 50 micrometers. Before a single polishing pad touches the paint, our studio maps the clearcoat depth across more than 80 measurement points using ultrasonic gauges. This ensures maximum gloss while preserving clearcoat reserves for decades.'
                  : 'Moderne Klarlackschichten auf Fahrzeugen aus Zuffenhausen, Garching oder Affalterbach messen oft nur 35 bis 50 Mikrometer. Bevor ein Polierpad den Lack berührt, kartieren wir die Schichtdicken an über 80 Messpunkten mit Ultraschall- und Wirbelstromsonden. Unser Ziel: maximaler Glanz bei gleichzeitigem Schutz der Substanz für künftige Generationen.'}
              </p>
              <p>
                {lang === 'en'
                  ? 'In our dust-controlled cleanroom studio in northern Munich, XPEL paint protection films are pre-cut via digital plotters to avoid dangerous knife cuts on the painted bodywork. All visible edges are seamlessly wrapped around panels wherever technically possible.'
                  : 'In unserem staubfreien Reinraum-Studio im Münchner Norden schneiden wir XPEL Lackschutzfolien auf computergesteuerten Schneideplottern zu. So werden gefährliche Klingenschnitte auf dem Fahrzeug gänzlich ausgeschlossen und Kanten unsichtbar umgelegt.'}
              </p>
            </div>

            {/* Metrics Row */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-[#DCD8CF]">
              <div>
                <span className="font-mono text-2xl sm:text-3xl font-semibold text-[#161616] block">
                  &lt; 2 µm
                </span>
                <span className="text-xs text-[#666666] font-light mt-1 block">
                  {lang === 'en' ? 'Max. clearcoat removed' : 'Maximaler Klarlackabtrag'}
                </span>
              </div>
              <div>
                <span className="font-mono text-2xl sm:text-3xl font-semibold text-[#161616] block">
                  98%
                </span>
                <span className="text-xs text-[#666666] font-light mt-1 block">
                  {lang === 'en' ? 'Defect removal rate' : 'Defektbeseitigung'}
                </span>
              </div>
              <div>
                <span className="font-mono text-2xl sm:text-3xl font-semibold text-[#161616] block">
                  5000K
                </span>
                <span className="text-xs text-[#666666] font-light mt-1 block">
                  {lang === 'en' ? 'Daylight CRI 98+ Lab' : 'High-CRI Lichtlabor'}
                </span>
              </div>
            </div>
          </div>

          {/* Architectural Image Crop (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="aspect-[4/5] overflow-hidden bg-[#E2DFD8] border border-[#DDD9D0]">
              <img
                src="https://images.unsplash.com/photo-1607860108855-64acf2078ed9?q=80&w=1200&auto=format&fit=crop"
                alt="Precision paint correction under 5000K daylight lighting"
                className="w-full h-full object-cover filter grayscale contrast-110"
              />
            </div>
            <div className="flex items-center justify-between text-xs font-mono text-[#777777]">
              <span>LAB_MUNICH // 01</span>
              <span>INSPECTION PROTOCOL</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
