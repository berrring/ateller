import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { getServicesData } from '../../data/services';
import { useLanguage } from '../../context/LanguageContext';

export const FeaturedServices: React.FC = () => {
  const { lang, t } = useLanguage();
  const services = getServicesData(lang);

  return (
    <section className="bg-[#161616] text-[#F2F0EB] py-24 sm:py-32 border-b border-[#262626]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#262626] pb-6 mb-16">
          <div className="space-y-2">
            <span className="font-mono text-xs uppercase tracking-widest text-[#A6A6A2] block">
              03 // {t('services.badge')}
            </span>
            <h2 className="text-3xl sm:text-4xl font-['Manrope'] font-semibold tracking-tight text-[#F2F0EB]">
              {t('services.title')}
            </h2>
          </div>
          <Link
            to="/leistungen"
            className="mt-4 md:mt-0 text-xs font-mono uppercase tracking-wider text-[#A6A6A2] hover:text-[#F2F0EB] transition-colors flex items-center gap-1.5"
          >
            <span>{t('services.all_services_link')}</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Asymmetrical Editorial Service Rows */}
        <div className="space-y-16 sm:space-y-24">
          {/* Feature 1: PPF */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7 aspect-[16/10] overflow-hidden bg-[#111111] border border-[#262626]">
              <img
                src={services[0].heroImage}
                alt="XPEL Paint Protection Film installation"
                className="w-full h-full object-cover filter brightness-95"
              />
            </div>
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-2">
                <span className="font-mono text-xs text-[#B8392D] uppercase tracking-wider block">
                  01 / 05 — PPF
                </span>
                <h3 className="text-2xl sm:text-3xl font-['Manrope'] font-medium text-[#F2F0EB]">
                  {services[0].title}
                </h3>
              </div>
              <p className="text-sm sm:text-base text-[#A6A6A2] font-light leading-relaxed">
                {services[0].shortDescription}
              </p>
              <div className="pt-2 border-t border-[#262626] flex items-center justify-between text-xs font-mono">
                <span className="text-[#A6A6A2]">{services[0].duration}</span>
                <span className="text-[#F2F0EB]">{services[0].indicativePrice}</span>
              </div>
              <Link
                to={`/leistungen/${services[0].slug}`}
                className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#F2F0EB] hover:text-[#B8392D] transition-colors"
              >
                <span>{t('services.view_details')}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Feature 2: Ceramic Coating */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-5 lg:order-1 space-y-6">
              <div className="space-y-2">
                <span className="font-mono text-xs text-[#B8392D] uppercase tracking-wider block">
                  02 / 05 — CERAMIC
                </span>
                <h3 className="text-2xl sm:text-3xl font-['Manrope'] font-medium text-[#F2F0EB]">
                  {services[1].title}
                </h3>
              </div>
              <p className="text-sm sm:text-base text-[#A6A6A2] font-light leading-relaxed">
                {services[1].shortDescription}
              </p>
              <div className="pt-2 border-t border-[#262626] flex items-center justify-between text-xs font-mono">
                <span className="text-[#A6A6A2]">{services[1].duration}</span>
                <span className="text-[#F2F0EB]">{services[1].indicativePrice}</span>
              </div>
              <Link
                to={`/leistungen/${services[1].slug}`}
                className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#F2F0EB] hover:text-[#B8392D] transition-colors"
              >
                <span>{t('services.view_details')}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
            <div className="lg:col-span-7 lg:order-2 aspect-[16/10] overflow-hidden bg-[#111111] border border-[#262626]">
              <img
                src={services[1].heroImage}
                alt="Ceramic coating"
                className="w-full h-full object-cover filter brightness-95"
              />
            </div>
          </div>

          {/* Feature 3: Correction & Interior */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-[#262626]">
            <div className="space-y-6">
              <div className="aspect-[16/10] overflow-hidden bg-[#111111] border border-[#262626]">
                <img
                  src={services[2].heroImage}
                  alt={services[2].title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-2">
                <span className="font-mono text-xs text-[#B8392D] uppercase tracking-wider block">
                  03 / 05 — CORRECTION
                </span>
                <h3 className="text-xl sm:text-2xl font-['Manrope'] font-medium text-[#F2F0EB]">
                  {services[2].title}
                </h3>
                <p className="text-xs sm:text-sm text-[#A6A6A2] font-light leading-relaxed">
                  {services[2].shortDescription}
                </p>
              </div>
              <div className="pt-3 border-t border-[#262626] flex items-center justify-between text-xs font-mono">
                <span className="text-[#A6A6A2]">{services[2].duration}</span>
                <span className="text-[#F2F0EB]">{services[2].indicativePrice}</span>
              </div>
              <Link
                to={`/leistungen/${services[2].slug}`}
                className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-[#F2F0EB] hover:text-[#B8392D] transition-colors"
              >
                <span>{t('services.view_details')}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="space-y-6">
              <div className="aspect-[16/10] overflow-hidden bg-[#111111] border border-[#262626]">
                <img
                  src={services[3].heroImage}
                  alt={services[3].title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-2">
                <span className="font-mono text-xs text-[#B8392D] uppercase tracking-wider block">
                  04 / 05 — INTERIOR
                </span>
                <h3 className="text-xl sm:text-2xl font-['Manrope'] font-medium text-[#F2F0EB]">
                  {services[3].title}
                </h3>
                <p className="text-xs sm:text-sm text-[#A6A6A2] font-light leading-relaxed">
                  {services[3].shortDescription}
                </p>
              </div>
              <div className="pt-3 border-t border-[#262626] flex items-center justify-between text-xs font-mono">
                <span className="text-[#A6A6A2]">{services[3].duration}</span>
                <span className="text-[#F2F0EB]">{services[3].indicativePrice}</span>
              </div>
              <Link
                to={`/leistungen/${services[3].slug}`}
                className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-[#F2F0EB] hover:text-[#B8392D] transition-colors"
              >
                <span>{t('services.view_details')}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
