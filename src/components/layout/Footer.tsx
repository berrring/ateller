import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';

export const Footer: React.FC = () => {
  const { lang } = useLanguage();

  return (
    <footer className="bg-[#111111] border-t border-[#262626] text-[#A6A6A2] text-xs pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Editorial Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-[#262626]">
          {/* Brand Manifesto (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <span className="font-['Manrope'] font-bold text-lg text-[#F2F0EB]">ATELIER</span>
              <span className="w-1.5 h-1.5 bg-[#B8392D]" />
              <span className="font-mono text-[#A6A6A2] text-xs uppercase">Fahrzeugpflege</span>
            </div>
            <p className="text-[#A6A6A2] font-light leading-relaxed max-w-md text-sm">
              {lang === 'en'
                ? 'Independent automotive detailing studio in Munich, Germany. Specializing in computer-plotted XPEL paint protection films, multi-stage paint correction, and molecular ceramic quartz coatings for performance vehicles.'
                : 'Unabhängige Manufaktur für Lackveredelung in München. Spezialisiert auf computeroptimierten XPEL Steinschlagschutz, mehrstufige Lackkorrektur und molekulare Keramikversiegelungen für Sportwagen und Sammlerfahrzeuge.'}
            </p>
            <div className="pt-2">
              <span className="inline-block px-2.5 py-1 text-[11px] font-mono border border-[#333333] text-[#F2F0EB]">
                {lang === 'en' ? 'Munich Studio · Schleißheimer Str. 418' : 'Studio München · Schleißheimer Str. 418'}
              </span>
            </div>
          </div>

          {/* Quick Nav (2 cols) */}
          <div className="md:col-span-2 space-y-3">
            <span className="font-mono uppercase tracking-wider text-[#F2F0EB] text-[11px] block">
              {lang === 'en' ? 'Navigation' : 'Menü'}
            </span>
            <ul className="space-y-2">
              <li><Link to="/leistungen" className="hover:text-[#F2F0EB] transition-colors">{lang === 'en' ? 'Services' : 'Leistungen'}</Link></li>
              <li><Link to="/projekte" className="hover:text-[#F2F0EB] transition-colors">{lang === 'en' ? 'Projects' : 'Projekte'}</Link></li>
              <li><Link to="/preise" className="hover:text-[#F2F0EB] transition-colors">{lang === 'en' ? 'Pricing & Packages' : 'Preise & Pakete'}</Link></li>
              <li><Link to="/ueber-uns" className="hover:text-[#F2F0EB] transition-colors">{lang === 'en' ? 'Studio Philosophy' : 'Über Uns'}</Link></li>
              <li><Link to="/termin" className="hover:text-[#F2F0EB] transition-colors">{lang === 'en' ? 'Consultation' : 'Termin Anfragen'}</Link></li>
            </ul>
          </div>

          {/* Core Services (2 cols) */}
          <div className="md:col-span-2 space-y-3">
            <span className="font-mono uppercase tracking-wider text-[#F2F0EB] text-[11px] block">
              {lang === 'en' ? 'Focus Areas' : 'Schwerpunkte'}
            </span>
            <ul className="space-y-2">
              <li><Link to="/leistungen/ppf-steinschlagschutz" className="hover:text-[#F2F0EB] transition-colors">XPEL PPF Armor</Link></li>
              <li><Link to="/leistungen/keramikversiegelung" className="hover:text-[#F2F0EB] transition-colors">9H Ceramic Quartz</Link></li>
              <li><Link to="/leistungen/lackkorrektur" className="hover:text-[#F2F0EB] transition-colors">Paint Correction</Link></li>
              <li><Link to="/leistungen/innenraumaufbereitung" className="hover:text-[#F2F0EB] transition-colors">Swissvax Interior</Link></li>
              <li><Link to="/leistungen/premium-detailing" className="hover:text-[#F2F0EB] transition-colors">Concours Signature</Link></li>
            </ul>
          </div>

          {/* Direct Contact (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <span className="font-mono uppercase tracking-wider text-[#F2F0EB] text-[11px] block">
              {lang === 'en' ? 'Studio Munich' : 'Studio München'}
            </span>
            <div className="space-y-1.5 font-light text-[#A6A6A2]">
              <p className="text-[#F2F0EB]">ATELIER Fahrzeugpflege</p>
              <p>Schleißheimer Straße 418</p>
              <p>80935 München, Deutschland</p>
              <p className="font-mono pt-1 text-[#F2F0EB]">+49 89 2109 4580</p>
              <p className="font-mono">kontakt@atelier-fahrzeugpflege.de</p>
            </div>
            <div className="pt-2 text-[11px] text-[#A6A6A2]">
              <p>Mo–Fr: 08:30 – 18:30 Uhr</p>
              <p>Sa: {lang === 'en' ? 'By appointment' : 'Nach Absprache'}</p>
            </div>
          </div>
        </div>

        {/* Bottom Legal Notice */}
        <div className="pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-[11px] text-[#777777]">
          <div>
            © {new Date().getFullYear()} ATELIER Fahrzeugpflege München. {lang === 'en' ? 'All rights reserved.' : 'Alle Rechte vorbehalten.'}
          </div>
          <div className="flex items-center gap-6">
            <Link to="/impressum" className="hover:text-[#F2F0EB] transition-colors">Impressum</Link>
            <Link to="/datenschutz" className="hover:text-[#F2F0EB] transition-colors">Datenschutz</Link>
            <span className="text-[#555555]">Fiktives Portfolio-Konzept</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
