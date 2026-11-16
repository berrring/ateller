import React from 'react';

interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  light?: boolean;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  title,
  subtitle,
  align = 'center',
  light = false,
}) => {
  return (
    <div className={`mb-12 md:mb-16 ${align === 'center' ? 'text-center mx-auto max-w-3xl' : 'max-w-2xl'}`}>
      {badge && (
        <div className={`inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full text-xs font-semibold tracking-widest uppercase border ${
          light 
            ? 'border-amber-400/40 text-[#c59b6d] bg-[#c59b6d]/10' 
            : 'border-[#c59b6d]/30 text-[#d8af82] bg-[#14161b]'
        }`}>
          <span className="w-1.5 h-1.5 rounded-full bg-[#c59b6d] animate-pulse"></span>
          {badge}
        </div>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-white font-['Outfit'] leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base sm:text-lg text-neutral-400 leading-relaxed font-light">
          {subtitle}
        </p>
      )}
      <div className={`h-[1px] w-16 bg-gradient-to-r from-transparent via-[#c59b6d] to-transparent mt-6 ${
        align === 'center' ? 'mx-auto' : ''
      }`} />
    </div>
  );
};
