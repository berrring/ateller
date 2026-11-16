import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { servicesData } from '../data/services';
import { ServiceComparison } from '../components/services/ServiceComparison';
import { useLanguage } from '../context/LanguageContext';

export const ServicesPage: React.FC = () => {
  const { lang } = useLanguage();

  const processWorkflow = [
    {
      step: '01',
      title: lang === 'en' ? 'Digital Clearcoat Diagnostics' : 'Digitale Schichtdicken-Diagnostik',
      description: lang === 'en'
        ? 'Ultrasonic multi-point mapping across 80+ panel points to determine original paint depth and clearcoat reserves.'
        : 'Ultraschall- und Wirbelstrommessung an über 80 Karosseriestellen zur Erfassung von Lackdicke und Nachlackierungen.'
    },
    {
      step: '02',
      title: lang === 'en' ? 'Chemical & Mechanical Decontamination' : 'Tiefenreinigung & Dekontamination',
      description: lang === 'en'
        ? 'Alkaline foam bath, iron fallout neutralizer, tar purge, and synthetic detailing clay to establish pure clearcoat pores.'
        : 'Alkalische Schaumwäsche, Flugrost-Neutralisation, Teerentfernung und Lackknete zur Beseitigung aller Ablagerungen.'
    },
    {
      step: '03',
      title: lang === 'en' ? 'Surgical Paint Correction' : 'Chirurgische Lackkorrektur',
      description: lang === 'en'
        ? 'Up to 30 hours of dual-action machine polishing using Rupes BigFoot systems and micro-abrasives to eradicate swirls.'
        : 'Bis zu 30 Stunden Maschinenpolitur mit Rupes Exzentergeräten zur rückstandslosen Beseitigung von Waschkratzern.'
    },
    {
      step: '04',
      title: lang === 'en' ? 'Cleanroom Installation (PPF / Quartz)' : 'Reinraum-Applikation (PPF / Quarz)',
      description: lang === 'en'
        ? 'Computer-cut XPEL pattern application with wrapped edges, or cross-hatch layer installation of 9H quartz coatings.'
        : 'Blasenfreie Montage computeroptimierter XPEL Schablonen mit umgelegten Kanten oder schichtweiser 9H Quarzauftrag.'
    },
    {
      step: '05',
      title: lang === 'en' ? 'Infrared Curing & Final Protocol' : 'Infrarot-Härtung & Übergabeprotokoll',
      description: lang === 'en'
        ? 'Targeted short-wave infrared heat curing, final quality sign-off under 5000K daylight, and printed vehicle passport.'
        : 'Gezieltes thermisches Ausbacken mit kurzwelligen IR-Strahlern, Abschlussprüfung unter 5000K und Übergabedokumentation.'
    }
  ];

  return (
    <div className="pt-24 pb-20 min-h-screen bg-[#161616] text-[#F2F0EB]">
      {/* Editorial Header */}
      <section className="py-20 border-b border-[#262626]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <span className="font-mono text-xs uppercase tracking-widest text-[#B8392D] block mb-3">
            01 // {lang === 'en' ? 'Disciplines & Standards' : 'Disziplinen & Standards'}
          </span>
          <h1 className="text-4xl sm:text-6xl font-['Manrope'] font-medium tracking-tight text-[#F2F0EB] max-w-3xl leading-tight">
            {lang === 'en' ? (
              <>
                Engineered surface defense. <br />
                <span className="text-[#A6A6A2] font-light">Zero compromise.</span>
              </>
            ) : (
              <>
                Ingenieursmäßige Veredelung. <br />
                <span className="text-[#A6A6A2] font-light">Kompromissloser Schutz.</span>
              </>
            )}
          </h1>
          <p className="text-base sm:text-lg text-[#A6A6A2] font-light max-w-2xl mt-6 leading-relaxed">
            {lang === 'en'
              ? 'From invisible self-healing XPEL paint protection films to multi-layer 9H quartz coatings and surgical clearcoat restoration.'
              : 'Vom unsichtbaren selbstheilenden XPEL Steinschlagschutz über mehrschichtige 9H Quarzversiegelungen bis zur chirurgischen Lackkorrektur.'}
          </p>
        </div>
      </section>

      {/* Services List (Asymmetrical editorial layouts) */}
      <section className="py-20 max-w-7xl mx-auto px-6 sm:px-8 space-y-20">
        {servicesData.map((service, index) => {
          const isEven = index % 2 === 1;
          return (
            <div
              key={service.id}
              id={service.slug}
              className="border border-[#262626] bg-[#111111] overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
                {/* Visual Image Column */}
                <div className={`lg:col-span-6 relative min-h-[340px] lg:min-h-full bg-black ${isEven ? 'lg:order-2' : ''}`}>
                  <img
                    src={service.heroImage}
                    alt={service.title}
                    className="w-full h-full object-cover filter brightness-95"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="text-[10px] font-mono uppercase tracking-widest bg-[#161616]/90 border border-[#333333] px-2.5 py-1 text-[#F2F0EB]">
                      0{index + 1} // {service.title}
                    </span>
                  </div>
                </div>

                {/* Details Column */}
                <div className={`lg:col-span-6 p-8 sm:p-12 flex flex-col justify-between ${isEven ? 'lg:order-1' : ''}`}>
                  <div className="space-y-6">
                    <div className="space-y-1">
                      <span className="text-xs font-mono text-[#B8392D] uppercase tracking-wider block">
                        {service.title}
                      </span>
                      <h2 className="text-2xl sm:text-3xl font-['Manrope'] font-medium text-[#F2F0EB]">
                        {service.subtitle}
                      </h2>
                    </div>

                    <p className="text-sm text-[#A6A6A2] font-light leading-relaxed">
                      {service.fullDescription}
                    </p>

                    <div className="pt-4 border-t border-[#262626] grid grid-cols-2 gap-4 text-xs font-mono">
                      <div>
                        <span className="text-[#777777] block text-[10px] uppercase">{lang === 'en' ? 'Duration' : 'Dauer'}</span>
                        <span className="text-[#F2F0EB] font-medium">{service.duration}</span>
                      </div>
                      <div>
                        <span className="text-[#777777] block text-[10px] uppercase">{lang === 'en' ? 'Starting From' : 'Richtwert ab'}</span>
                        <span className="text-[#F2F0EB] font-medium">{service.indicativePrice}</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-8 mt-8 border-t border-[#262626] flex items-center gap-4">
                    <Link
                      to={`/leistungen/${service.slug}`}
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#B8392D] text-white hover:bg-[#a02f24] text-xs font-medium uppercase tracking-wider transition-colors"
                    >
                      <span>{lang === 'en' ? 'View Full Spec' : 'Details & Ablauf'}</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>

                    <Link
                      to={`/termin?treatment=${encodeURIComponent(service.title)}`}
                      className="inline-flex items-center gap-2 px-5 py-2.5 border border-[#333333] text-[#F2F0EB] hover:border-[#F2F0EB] text-xs font-medium uppercase tracking-wider transition-colors"
                    >
                      <span>{lang === 'en' ? 'Inquire' : 'Anfragen'}</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* 5-Step Process Timeline (Strategic Light Section) */}
      <section className="bg-[#F2F0EB] text-[#161616] py-24 sm:py-32 border-y border-[#DDD9D0]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="border-b border-[#DCD8CF] pb-6 mb-16">
            <span className="font-mono text-xs uppercase tracking-widest text-[#777777] block mb-2">
              02 // {lang === 'en' ? 'Standardized Quality Cycle' : 'Standardisierter Arbeitsablauf'}
            </span>
            <h2 className="text-3xl sm:text-4xl font-['Manrope'] font-semibold tracking-tight text-[#161616]">
              {lang === 'en' ? 'The 5-Stage Studio Process' : 'Der 5-Stufen Veredelungszyklus'}
            </h2>
            <p className="text-sm text-[#666666] font-light mt-2 max-w-2xl">
              {lang === 'en'
                ? 'Every vehicle follows an uncompromising protocol from initial ultrasonic paint depth mapping to final 5000K daylight sign-off.'
                : 'Jedes Fahrzeug durchläuft ein standardisiertes Mess- und Behandlungsverfahren nach höchsten industriellen Standards.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {processWorkflow.map((item, idx) => (
              <div key={idx} className="border border-[#DCD8CF] p-6 bg-white space-y-4">
                <span className="font-mono text-2xl font-bold text-[#B8392D] block">
                  {item.step}
                </span>
                <h3 className="text-base font-semibold text-[#161616] font-['Manrope']">
                  {item.title}
                </h3>
                <p className="text-xs text-[#555555] font-light leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Comparison Table */}
      <section className="py-24 max-w-7xl mx-auto px-6 sm:px-8">
        <ServiceComparison />
      </section>
    </div>
  );
};
