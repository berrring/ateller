import React from 'react';
import { Star, ShieldCheck, Quote } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';

export const Testimonials: React.FC = () => {
  const reviews = [
    {
      quote: 'Mein 992 GT3 RS hat nach 6.000 Rennstrecken-Kilometern und Autobahnfahrten keinerlei Einschläge an der Front. Die Kanten der XPEL-Folie sind so tief umgeschlagen, dass selbst Werksgutachter sie nicht auf den ersten Blick erkennen.',
      author: 'Maximilian Graf von R.',
      vehicle: 'Porsche 911 GT3 RS Weissach',
      city: 'München-Bogenhausen',
      service: 'XPEL Full Body Armor'
    },
    {
      quote: 'Nach der Auslieferung meines BMW M3 Touring waren sichtbare Hologramme im Klarlack. Das ATELIER-Team hat den Lack in einen flüssigen Smaragd verwandelt. Der Keramik-Abperleffekt beim Waschen ist atemberaubend.',
      author: 'Florian K.',
      vehicle: 'BMW M3 Competition Touring',
      city: 'Grünwald',
      service: '2-Stufen Korrektur & DuraFlex'
    },
    {
      quote: 'Als Sammler historischer und moderner Porsche ist Vertrauen das Einzige, was zählt. Die fotografische Schichtdicken-Dokumentation und das Reinraum-Lichtlabor in München suchen europaweit ihresgleichen.',
      author: 'Dr. Christian B.',
      vehicle: 'Mercedes-AMG GT Black Series',
      city: 'Starnberg',
      service: 'Signature Concours Detailing'
    }
  ];

  return (
    <section className="py-24 bg-[#0a0b0e] relative border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Kundenstimmen & Vertrauen"
          title="Stimmen unserer anspruchsvollen Klienten"
          subtitle="Diskretion, kompromisslose Akribie und langfristiger Werterhalt für Sportwagen-Enthusiasten."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl bg-[#101217] border border-white/[0.06] hover:border-[#c59b6d]/30 transition-all flex flex-col justify-between relative group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex text-[#c59b6d] gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#c59b6d]" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-white/10 group-hover:text-[#c59b6d]/30 transition-colors" />
                </div>

                <p className="text-neutral-300 text-xs sm:text-sm font-light leading-relaxed italic mb-6">
                  "{rev.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-white/[0.06]">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-medium text-white">{rev.author}</span>
                  <span className="text-[11px] text-neutral-400">{rev.city}</span>
                </div>
                <div className="mt-1 flex items-center justify-between text-[11px] text-neutral-400">
                  <span>{rev.vehicle}</span>
                  <span className="text-[#c59b6d] font-mono flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3" />
                    {rev.service}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
