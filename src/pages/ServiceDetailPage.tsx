import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { servicesData } from '../data/services';
import { ArrowUpRight, ChevronRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const ServiceDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { lang } = useLanguage();

  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    return <Navigate to="/leistungen" replace />;
  }

  return (
    <div className="pt-24 pb-20 min-h-screen bg-[#161616] text-[#F2F0EB]">
      {/* Precision Breadcrumb */}
      <div className="border-b border-[#262626] py-3 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center gap-2 text-xs font-mono text-[#A6A6A2]">
          <Link to="/" className="hover:text-[#F2F0EB] transition-colors">{lang === 'en' ? 'Home' : 'Start'}</Link>
          <ChevronRight className="w-3 h-3 text-[#555555]" />
          <Link to="/leistungen" className="hover:text-[#F2F0EB] transition-colors">{lang === 'en' ? 'Services' : 'Leistungen'}</Link>
          <ChevronRight className="w-3 h-3 text-[#555555]" />
          <span className="text-[#F2F0EB]">{service.title}</span>
        </div>
      </div>

      {/* Hero Headline & Full-width Image */}
      <section className="py-16 border-b border-[#262626]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 space-y-6">
          <span className="font-mono text-xs uppercase tracking-widest text-[#B8392D] block">
            DISCIPLINE // SPECIFICATION
          </span>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-['Manrope'] font-medium tracking-tight text-[#F2F0EB] max-w-4xl leading-tight">
            {service.subtitle}
          </h1>
          <p className="text-base sm:text-lg text-[#A6A6A2] font-light max-w-2xl leading-relaxed">
            {service.shortDescription}
          </p>

          <div className="pt-4 flex flex-wrap items-center gap-6 text-xs font-mono border-t border-[#262626]">
            <div>
              <span className="text-[#777777] block text-[10px] uppercase">{lang === 'en' ? 'Duration' : 'Dauer'}</span>
              <span className="text-[#F2F0EB] font-medium">{service.duration}</span>
            </div>
            <div>
              <span className="text-[#777777] block text-[10px] uppercase">{lang === 'en' ? 'Indicative Pricing' : 'Richtwert'}</span>
              <span className="text-[#F2F0EB] font-medium">{service.indicativePrice}</span>
            </div>
            {service.certifications && (
              <div>
                <span className="text-[#777777] block text-[10px] uppercase">{lang === 'en' ? 'Standard' : 'Zertifizierung'}</span>
                <span className="text-[#B8392D] font-medium">{service.certifications[0]}</span>
              </div>
            )}
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 sm:px-8 mt-12">
          <div className="aspect-[16/8] overflow-hidden bg-black border border-[#262626]">
            <img
              src={service.heroImage}
              alt={service.title}
              className="w-full h-full object-cover filter brightness-95"
            />
          </div>
        </div>
      </section>

      {/* Deep-dive Content Grid */}
      <section className="py-20 max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Main Content (8 cols) */}
          <div className="lg:col-span-8 space-y-16">
            {/* Description */}
            <div className="space-y-4">
              <span className="font-mono text-xs uppercase tracking-widest text-[#A6A6A2] block">
                01 // {lang === 'en' ? 'Technical Scope' : 'Technischer Umfang'}
              </span>
              <p className="text-base sm:text-lg text-[#A6A6A2] font-light leading-relaxed">
                {service.fullDescription}
              </p>
            </div>

            {/* Benefits Checklist */}
            <div className="space-y-6 pt-8 border-t border-[#262626]">
              <span className="font-mono text-xs uppercase tracking-widest text-[#A6A6A2] block">
                02 // {lang === 'en' ? 'Key Advantages' : 'Wesentliche Vorteile'}
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.benefits.map((b, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-sm text-[#F2F0EB] font-light">
                    <span className="w-1.5 h-1.5 bg-[#B8392D] mt-2 shrink-0" />
                    <span>{b}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Process Steps */}
            <div className="space-y-6 pt-8 border-t border-[#262626]">
              <span className="font-mono text-xs uppercase tracking-widest text-[#A6A6A2] block">
                03 // {lang === 'en' ? 'Process Protocol' : 'Ablaufschritte im Studio'}
              </span>
              <div className="space-y-6">
                {service.processSteps.map((step, idx) => (
                  <div key={idx} className="border-b border-[#262626] pb-6 last:border-b-0 space-y-2">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-sm text-[#B8392D]">{step.step} //</span>
                      <h3 className="text-base font-medium text-[#F2F0EB] font-['Manrope']">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-sm text-[#A6A6A2] font-light pl-8 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Gallery */}
            {service.galleryImages && service.galleryImages.length > 0 && (
              <div className="space-y-6 pt-8 border-t border-[#262626]">
                <span className="font-mono text-xs uppercase tracking-widest text-[#A6A6A2] block">
                  04 // {lang === 'en' ? 'Detail Impressions' : 'Detail-Impressionen'}
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {service.galleryImages.map((img, i) => (
                    <div key={i} className="aspect-[4/3] overflow-hidden bg-black border border-[#262626]">
                      <img src={img} alt={`Detail ${i + 1}`} className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Action Column (4 cols) */}
          <div className="lg:col-span-4 space-y-8">
            <div className="border border-[#262626] p-8 bg-[#111111] space-y-6 sticky top-28">
              <span className="font-mono text-xs uppercase tracking-widest text-[#A6A6A2] block">
                {lang === 'en' ? 'Consultation Request' : 'Beratung Anfragen'}
              </span>

              <div className="space-y-3 text-xs font-mono">
                <div className="flex justify-between pb-2 border-b border-[#262626]">
                  <span className="text-[#777777]">{lang === 'en' ? 'Service:' : 'Leistung:'}</span>
                  <span className="text-[#F2F0EB] text-right">{service.title}</span>
                </div>
                <div className="flex justify-between pb-2 border-b border-[#262626]">
                  <span className="text-[#777777]">{lang === 'en' ? 'Duration:' : 'Dauer:'}</span>
                  <span className="text-[#F2F0EB]">{service.duration}</span>
                </div>
                <div className="flex justify-between pb-2 border-b border-[#262626]">
                  <span className="text-[#777777]">{lang === 'en' ? 'Starting From:' : 'Richtwert:'}</span>
                  <span className="text-[#F2F0EB]">{service.indicativePrice}</span>
                </div>
              </div>

              <p className="text-xs text-[#A6A6A2] font-light leading-relaxed">
                {service.recommendedFor}
              </p>

              <Link
                to={`/termin?treatment=${encodeURIComponent(service.title)}`}
                className="w-full py-3.5 px-4 bg-[#B8392D] text-white hover:bg-[#a02f24] text-xs font-medium uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
              >
                <span>{lang === 'en' ? 'Request This Service' : 'Diesen Service anfragen'}</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>

              <Link
                to="/preise"
                className="w-full py-3 px-4 border border-[#333333] text-[#F2F0EB] hover:border-[#F2F0EB] text-xs font-medium uppercase tracking-wider transition-colors flex items-center justify-center"
              >
                <span>{lang === 'en' ? 'Open Price Estimator' : 'Preis-Kalkulator öffnen'}</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
