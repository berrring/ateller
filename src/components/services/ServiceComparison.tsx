import React from 'react';
import { Check, X } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export const ServiceComparison: React.FC = () => {
  const { lang } = useLanguage();

  const criteria = [
    {
      feature: lang === 'en' ? 'Physical Stone Chip Defense (150+ km/h)' : 'Physischer Steinschlagschutz (Autobahn / Track)',
      ppf: '100% (200 µm Polyurethane)',
      ceramic: lang === 'en' ? 'Minor micro-scratches only' : 'Nur gegen Mikrokratzer',
      wax: lang === 'en' ? 'None' : 'Nein'
    },
    {
      feature: lang === 'en' ? 'Thermal Self-Healing (Heat activation)' : 'Thermische Selbstheilung (Wärmeeinwirkung)',
      ppf: lang === 'en' ? 'Yes (Swirls disappear)' : 'Ja (Swirls heilen aus)',
      ceramic: lang === 'en' ? 'No' : 'Nein',
      wax: lang === 'en' ? 'No' : 'Nein'
    },
    {
      feature: lang === 'en' ? 'Hydrophobic Water Contact Angle' : 'Hydrophobie / Kontaktwinkel',
      ppf: '> 100° (XPEL Fusion)',
      ceramic: '> 115° (Extreme Sheeting)',
      wax: '> 85° (Temporary)'
    },
    {
      feature: lang === 'en' ? 'Optical Depth & Glass Wet-Look' : 'Tiefenglanz & Farbintensität',
      ppf: lang === 'en' ? 'High Optical Clarity' : 'Sehr hoch (Klarfilm)',
      ceramic: lang === 'en' ? 'Unmatched Liquid Glass' : 'Extremer Wet-Look (Si02)',
      wax: lang === 'en' ? 'Warm, soft sheen' : 'Warmer Glanz'
    },
    {
      feature: lang === 'en' ? 'Durability with Proper Care' : 'Standzeit bei Fachpflege',
      ppf: lang === 'en' ? 'Up to 10 Years' : 'Bis zu 10 Jahre',
      ceramic: lang === 'en' ? '3 to 5 Years' : '3 bis 5 Jahre',
      wax: lang === 'en' ? '2 to 4 Months' : '2 bis 4 Monate'
    },
    {
      feature: lang === 'en' ? 'Acid Rain & Bird Dropping Resistance' : 'Säure- & Vogelkot-Resistenz',
      ppf: lang === 'en' ? 'Maximum (Film absorbs)' : 'Maximal (Absorbiert)',
      ceramic: lang === 'en' ? 'High (Chemical barrier)' : 'Sehr hoch (Quarzbarriere)',
      wax: lang === 'en' ? 'Low' : 'Gering'
    },
    {
      feature: lang === 'en' ? 'Manufacturer Warranty' : 'Herstellergarantie',
      ppf: lang === 'en' ? '10 Years (XPEL Certificate)' : '10 Jahre (XPEL Zertifikat)',
      ceramic: lang === 'en' ? 'Up to 5 Years (Gyeon)' : 'Bis zu 5 Jahre (Gyeon Pass)',
      wax: lang === 'en' ? 'None' : 'Keine'
    }
  ];

  return (
    <div className="border border-[#262626] bg-[#111111] overflow-hidden">
      <div className="p-6 sm:p-8 border-b border-[#262626]">
        <span className="font-mono text-xs uppercase tracking-widest text-[#B8392D] block mb-1">
          ANALYSIS // MATRIX
        </span>
        <h3 className="text-xl sm:text-2xl font-['Manrope'] font-medium text-[#F2F0EB]">
          {lang === 'en' ? 'Protection Technology Matrix' : 'Technologie-Vergleich'}
        </h3>
        <p className="text-xs sm:text-sm text-[#A6A6A2] font-light mt-1">
          {lang === 'en'
            ? 'Clear technical comparison between physical film protection and molecular quartz coatings.'
            : 'Technischer Vergleich zwischen mechanischem Folienschutz und chemischer Quarzversiegelung.'}
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[650px] text-xs">
          <thead>
            <tr className="border-b border-[#262626] bg-[#161616] text-[#A6A6A2] font-mono uppercase text-[10px]">
              <th className="py-3.5 px-6 font-medium w-2/5">{lang === 'en' ? 'Criterion' : 'Kriterium'}</th>
              <th className="py-3.5 px-6 font-medium text-[#F2F0EB] border-l border-[#262626] bg-[#1a1a1a]">
                XPEL PPF Film
              </th>
              <th className="py-3.5 px-6 font-medium border-l border-[#262626]">
                Ceramic Quartz
              </th>
              <th className="py-3.5 px-6 font-medium border-l border-[#262626]">
                Carnauba Wax
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#262626]">
            {criteria.map((item, idx) => (
              <tr key={idx} className="hover:bg-[#161616]/60 transition-colors">
                <td className="py-3.5 px-6 text-[#F2F0EB] font-light">{item.feature}</td>
                <td className="py-3.5 px-6 text-[#F2F0EB] font-medium border-l border-[#262626] bg-[#1a1a1a]/50">
                  <span className="flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-[#B8392D] shrink-0" />
                    {item.ppf}
                  </span>
                </td>
                <td className="py-3.5 px-6 text-[#A6A6A2] border-l border-[#262626]">
                  <span className="flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-[#A6A6A2] shrink-0" />
                    {item.ceramic}
                  </span>
                </td>
                <td className="py-3.5 px-6 text-[#777777] border-l border-[#262626]">
                  <span className="flex items-center gap-1.5">
                    {item.wax === 'No' || item.wax === 'None' || item.wax === 'Nein' || item.wax === 'Keine' ? (
                      <X className="w-3.5 h-3.5 text-[#555555] shrink-0" />
                    ) : (
                      <Check className="w-3.5 h-3.5 text-[#777777] shrink-0" />
                    )}
                    {item.wax}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="p-4 sm:p-6 bg-[#161616] border-t border-[#262626] text-xs font-mono text-[#A6A6A2]">
        <span className="text-[#B8392D] font-bold">// NOTE: </span>
        {lang === 'en'
          ? 'For sports cars like the Porsche 911 GT3 or BMW M3, we advise the Hybrid Package: PPF on high-impact front and rocker panels, combined with ceramic coating on the rest.'
          : 'Für Sportwagen wie Porsche 911 GT3 oder BMW M3 empfehlen wir die Hybrid-Lösung: PPF an Front und Schwellern, kombiniert mit Keramikversiegelung auf den übrigen Flächen.'}
      </div>
    </div>
  );
};
