import React from 'react';
import { Hero } from '../components/home/Hero';
import { StudioPhilosophy } from '../components/home/StudioPhilosophy';
import { FeaturedServices } from '../components/home/FeaturedServices';
import { BeforeAfterSlider } from '../components/home/BeforeAfterSlider';
import { SelectedProjects } from '../components/home/SelectedProjects';
import { CostEstimator } from '../components/pricing/CostEstimator';
import { CtaBanner } from '../components/home/CtaBanner';
import { useLanguage } from '../context/LanguageContext';

export const HomePage: React.FC = () => {
  const { lang } = useLanguage();

  return (
    <div className="min-h-screen bg-[#161616]">
      {/* 1. Full-width Automotive Photography Hero */}
      <Hero />

      {/* 2. Strategic Warm Off-White Editorial Section (Precision. Restraint. Craftsmanship.) */}
      <StudioPhilosophy />

      {/* 3. Core Disciplines & Asymmetrical Service Compositions */}
      <FeaturedServices />

      {/* 4. Interactive Precision Before/After Comparison */}
      <section className="bg-[#111111] text-[#F2F0EB] py-24 sm:py-32 border-b border-[#262626]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="border-b border-[#262626] pb-6 mb-16">
            <span className="font-mono text-xs uppercase tracking-widest text-[#A6A6A2] block mb-2">
              05 // {lang === 'en' ? 'Direct Visual Evidence' : 'Visuelle Dokumentation'}
            </span>
            <h2 className="text-3xl sm:text-4xl font-['Manrope'] font-semibold tracking-tight text-[#F2F0EB]">
              {lang === 'en' ? 'Optical Transformation: 50/50 Evaluation' : 'Optische Transformation im 50:50 Vergleich'}
            </h2>
            <p className="text-sm text-[#A6A6A2] font-light mt-2 max-w-2xl">
              {lang === 'en'
                ? 'Direct microscopic comparison between dealership delivery swirls and surgically corrected, quartz-sealed clearcoat.'
                : 'Direkter Vergleich zwischen typischen Händler-Waschspuren und chirurgisch korrigiertem, keramikversiegeltem Klarlack.'}
            </p>
          </div>

          <BeforeAfterSlider />
        </div>
      </section>

      {/* 5. Selected Works & Case Studies */}
      <SelectedProjects />

      {/* 6. Strategic Warm Off-White Calculator Section */}
      <section className="bg-[#F2F0EB] text-[#161616] py-24 sm:py-32 border-b border-[#DDD9D0]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="border-b border-[#DCD8CF] pb-6 mb-16">
            <span className="font-mono text-xs uppercase tracking-widest text-[#777777] block mb-2">
              06 // {lang === 'en' ? 'Pricing & Investment' : 'Investition & Richtwerte'}
            </span>
            <h2 className="text-3xl sm:text-4xl font-['Manrope'] font-semibold tracking-tight text-[#161616]">
              {lang === 'en' ? 'Vehicle-Based Cost Estimator' : 'Fahrzeugspezifische Preiskalkulation'}
            </h2>
            <p className="text-sm text-[#666666] font-light mt-2 max-w-2xl">
              {lang === 'en'
                ? 'Configure your vehicle category, paint status, and optional modules for an instant indicative estimate.'
                : 'Konfigurieren Sie Fahrzeugklasse, Lackzustand und gewünschte Module für eine transparente Orientierung.'}
            </p>
          </div>

          <CostEstimator />
        </div>
      </section>

      {/* 7. Closing Consultation CTA */}
      <CtaBanner />
    </div>
  );
};
