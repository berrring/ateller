import React from 'react';
import { teamData, studioFeatures } from '../data/team';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

export const AboutPage: React.FC = () => {
  const { lang } = useLanguage();

  return (
    <div className="pt-24 pb-20 min-h-screen bg-[#161616] text-[#F2F0EB]">
      {/* Editorial Header */}
      <section className="py-20 border-b border-[#262626]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <span className="font-mono text-xs uppercase tracking-widest text-[#B8392D] block mb-3">
            01 // {lang === 'en' ? 'Provenance & Identity' : 'Herkunft & Philosophie'}
          </span>
          <h1 className="text-4xl sm:text-6xl font-['Manrope'] font-medium tracking-tight text-[#F2F0EB] max-w-3xl leading-tight">
            {lang === 'en' ? (
              <>
                Bavarian discipline. <br />
                <span className="text-[#A6A6A2] font-light">International concours standards.</span>
              </>
            ) : (
              <>
                Bayerische Disziplin. <br />
                <span className="text-[#A6A6A2] font-light">Internationale Concours-Standards.</span>
              </>
            )}
          </h1>
          <p className="text-base sm:text-lg text-[#A6A6A2] font-light max-w-2xl mt-6 leading-relaxed">
            {lang === 'en'
              ? 'ATELIER Fahrzeugpflege was founded in Munich with an uncompromising objective: preserving the historical and aesthetic value of sports cars and collector automobiles.'
              : 'ATELIER Fahrzeugpflege wurde in München mit einem klaren Ziel gegründet: den substanziellen und ästhetischen Wert von Sportwagen und Sammlerfahrzeugen dauerhaft zu bewahren.'}
          </p>
        </div>
      </section>

      {/* Philosophy Details (Strategic Light Section) */}
      <section className="bg-[#F2F0EB] text-[#161616] py-24 sm:py-32 border-b border-[#DDD9D0]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-7 space-y-6">
              <span className="font-mono text-xs uppercase tracking-widest text-[#777777] block">
                02 // {lang === 'en' ? 'Core Approach' : 'Handwerkliche Haltung'}
              </span>
              <h2 className="text-3xl sm:text-4xl font-['Manrope'] font-semibold tracking-tight text-[#161616]">
                {lang === 'en' ? 'We do not polish over history. We conserve it.' : 'Wir polieren keine Geschichte weg. Wir konservieren sie.'}
              </h2>
              <div className="space-y-4 text-sm sm:text-base font-light text-[#444444] leading-relaxed">
                <p>
                  {lang === 'en'
                    ? 'Every automobile entering our facility in Munich-North is treated as an individual historical asset. Before a machine touches the clearcoat, we map thickness in micrometers, identify repainted sections, and formulate a conservative strategy.'
                    : 'Jedes Automobil, das unser Studio im Münchner Norden erreicht, wird als automobiles Kulturgut betrachtet. Vor jedem Polierschritt kartieren wir die Lackschichtdicken, prüfen Originallacke und entwickeln eine substanzschonende Konservierungsstrategie.'}
                </p>
                <p>
                  {lang === 'en'
                    ? 'Our focus is not the fleeting gleam of a commercial car wash, but chemical armor and a flawless reflection that endures across thousands of autobahn and trackday kilometers.'
                    : 'Unser Anspruch ist kein flüchtiger Verkaufsschein, sondern eine chemische Panzerung und ein spiegelndes Finish, das selbst nach tausenden Kilometern Autobahn- und Rundstreckeneinsatz unverändert bleibt.'}
                </p>
              </div>
            </div>

            <div className="lg:col-span-5 aspect-[4/5] overflow-hidden bg-[#E2DFD8] border border-[#DDD9D0]">
              <img
                src="https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?q=80&w=1200&auto=format&fit=crop"
                alt="Munich cleanroom detailing bay"
                className="w-full h-full object-cover filter grayscale contrast-110"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Cleanroom Infrastructure */}
      <section className="py-24 max-w-7xl mx-auto px-6 sm:px-8 border-b border-[#262626]">
        <div className="border-b border-[#262626] pb-6 mb-16">
          <span className="font-mono text-xs uppercase tracking-widest text-[#B8392D] block mb-2">
            03 // {lang === 'en' ? 'Facility Architecture' : 'Studio-Infrastruktur'}
          </span>
          <h2 className="text-3xl sm:text-4xl font-['Manrope'] font-semibold tracking-tight text-[#F2F0EB]">
            {lang === 'en' ? 'Cleanroom & Lighting Lab Standards' : 'Reinraum & Laborstandards'}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {studioFeatures.map((feat, idx) => (
            <div key={idx} className="border border-[#262626] p-6 bg-[#111111] space-y-3">
              <span className="font-mono text-xs text-[#B8392D] block">
                FEAT_0{idx + 1}
              </span>
              <h3 className="text-base font-medium text-[#F2F0EB] font-['Manrope']">
                {feat.title}
              </h3>
              <p className="text-xs text-[#A6A6A2] font-light leading-relaxed">
                {feat.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Master Detailers */}
      <section className="py-24 max-w-7xl mx-auto px-6 sm:px-8 border-b border-[#262626]">
        <div className="border-b border-[#262626] pb-6 mb-16">
          <span className="font-mono text-xs uppercase tracking-widest text-[#B8392D] block mb-2">
            04 // {lang === 'en' ? 'Studio Craftsmen' : 'Die Meister'}
          </span>
          <h2 className="text-3xl sm:text-4xl font-['Manrope'] font-semibold tracking-tight text-[#F2F0EB]">
            {lang === 'en' ? 'Decades of Concours Experience' : 'Erfahrung & Verantwortung'}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamData.map((member, idx) => (
            <div key={idx} className="border border-[#262626] bg-[#111111] overflow-hidden">
              <div className="aspect-[4/3] bg-black overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover filter grayscale contrast-125"
                />
              </div>
              <div className="p-6 space-y-4">
                <div>
                  <span className="font-mono text-[10px] text-[#B8392D] uppercase block">{member.role}</span>
                  <h3 className="text-lg font-medium text-[#F2F0EB] font-['Manrope']">{member.name}</h3>
                </div>
                <div className="space-y-1 text-xs text-[#A6A6A2] font-light">
                  <p><strong className="text-[#F2F0EB]">{lang === 'en' ? 'Focus:' : 'Schwerpunkt:'}</strong> {member.specialization}</p>
                  <p><strong className="text-[#F2F0EB]">{lang === 'en' ? 'Track Record:' : 'Erfahrung:'}</strong> {member.experience}</p>
                </div>
                <p className="text-xs italic text-[#777777] border-t border-[#222222] pt-3">
                  "{member.quote}"
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Studio Location Action */}
      <section className="py-20 max-w-4xl mx-auto px-6 sm:px-8 text-center space-y-6">
        <h2 className="text-2xl sm:text-4xl font-['Manrope'] font-medium text-[#F2F0EB]">
          {lang === 'en' ? 'Schedule a Studio Assessment in Munich' : 'Besuchen Sie uns in München-Nord'}
        </h2>
        <p className="text-sm text-[#A6A6A2] font-light max-w-xl mx-auto leading-relaxed">
          {lang === 'en'
            ? 'Located in direct proximity to Motorworld Munich and the A9 autobahn. Schedule a personal walk-around and clearcoat inspection.'
            : 'In direkter Nachbarschaft zur Motorworld München und der A9. Vereinbaren Sie eine persönliche Begutachtung bei einem Espresso.'}
        </p>
        <div className="pt-2">
          <Link
            to="/termin"
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#B8392D] text-white hover:bg-[#a02f24] text-xs font-medium uppercase tracking-wider transition-colors"
          >
            <span>{lang === 'en' ? 'Book In-Person Appointment' : 'Termin vor Ort anfragen'}</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
};
