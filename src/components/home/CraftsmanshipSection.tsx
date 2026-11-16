import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { ShieldCheck, Sparkles, Gauge, Sun, Microscope, Layers } from 'lucide-react';

export const CraftsmanshipSection: React.FC = () => {
  const pillars = [
    {
      icon: Gauge,
      title: 'Digitale Lackschichtdicken-Kartierung',
      description: 'Mit hochpräzisen Ultraschall- und magnetisch-induktiven Schichtdickenmessern kartieren wir das gesamte Fahrzeug. So wird vor jedem Polierzug sichergestellt, wie viele Mikrometer Klarlackreserve für künftige Generationen erhalten bleiben.'
    },
    {
      icon: Sun,
      title: '5000K High-CRI Inspektionslabor',
      description: 'Licht ist die wichtigste Zutat. Unser Studio verfügt über Decken- und Flutlicht-Module mit speziellem Tageslichtspektrum (CRI > 98). Kein noch so feiner Hologramm-Schleier oder Pinselstrich bleibt unentdeckt.'
    },
    {
      icon: Layers,
      title: 'XPEL DAP Präzisionsschablonen',
      description: 'Keine gefährlichen Skalpell-Schnitte am Fahrzeug. Über die offizielle XPEL Design Access Database schneiden wir alle Bauteile auf zehntel Millimeter passgenau zu, inklusive unsichtbar umschlagbarer Kanten.'
    },
    {
      icon: Microscope,
      title: 'Infrarot-Kurzwellen-Härtung (IR-Curing)',
      description: 'Keramikversiegelungen erreichen ihre maximale Härte von 9H erst durch thermische Vernetzung. Wir backen jede Schicht segmentweise mit temperaturkalibrierten Infrarotstrahlern aus.'
    },
    {
      icon: Sparkles,
      title: 'Klimatisierter Reinraum mit HEPA-Filter',
      description: 'Die Montage von Schutzfolien und der Auftrag molekularer Keramik erfordern Reinraum-Standards. Unsere Halle arbeitet mit geregeltem Überdruck, um das Eindringen von Flusen und Schwebeteilchen zu verhindern.'
    },
    {
      icon: ShieldCheck,
      title: 'Diskrete Einzelstellplätze & VIP-Sicherheit',
      description: 'Ihr Automobil verbleibt während des gesamten Aufenthalts in klimatisierten, alarm- und videoüberwachten Einzelboxen. Auf Wunsch organisieren wir geschlossenen Einzelfahrzeug-Transport im Spezialauflieger.'
    }
  ];

  return (
    <section className="py-24 bg-[#07080a] relative border-y border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Präzisionsstandards"
          title="Ingenieurskunst trifft Detailverliebtheit"
          subtitle="Traditionelle bayerische Ingenieursdisziplin vereint mit den modernsten Veredelungstechnologien der weltweiten Detailing-Elite."
        />

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-6 sm:p-8 rounded-2xl bg-[#0e1014] border border-white/[0.06] hover:border-[#c59b6d]/30 transition-all duration-300 relative group flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#14161b] border border-[#c59b6d]/30 flex items-center justify-center text-[#c59b6d] mb-6 group-hover:scale-110 group-hover:border-[#c59b6d] transition-all">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-light text-white font-['Outfit'] mb-3 group-hover:text-[#d8af82] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-400 font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <div className="h-[1px] w-12 bg-white/10 group-hover:w-full group-hover:bg-[#c59b6d]/40 transition-all duration-500 mt-6" />
              </div>
            );
          })}
        </div>

        {/* Studio Equipment Brand Bar */}
        <div className="mt-16 pt-10 border-t border-white/[0.06] flex flex-wrap items-center justify-center gap-8 sm:gap-14 text-neutral-400 text-xs tracking-widest uppercase font-mono">
          <span>XPEL® DESIGN ACCESS</span>
          <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
          <span>GYEON® QUARTZ INFINITE</span>
          <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
          <span>RUPES® BIGFOOT SYSTEM</span>
          <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
          <span>SWISSVAX® MANUFAKTUR</span>
          <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
          <span>DEFELSKO® POSITECTUR</span>
        </div>
      </div>
    </section>
  );
};
