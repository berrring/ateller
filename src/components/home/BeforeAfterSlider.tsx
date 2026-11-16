import React, { useState, useRef, useCallback, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';

interface ComparisonScenario {
  id: string;
  vehicle: string;
  treatment: string;
  beforeImg: string;
  afterImg: string;
  beforeLabel: string;
  afterLabel: string;
  defectRemoval: string;
  glossIncrease: string;
}

const scenariosDe: ComparisonScenario[] = [
  {
    id: 'porsche-black',
    vehicle: 'Porsche 911 GT3 RS',
    treatment: '3-Stufen chirurgische Lackkorrektur & Gyeon Keramikversiegelung',
    beforeImg: 'https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?q=80&w=1600&auto=format&fit=crop',
    afterImg: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=1600&auto=format&fit=crop',
    beforeLabel: 'Vorher: Waschkratzer & Grauschleier',
    afterLabel: 'Nachher: 98% Defektfreiheit & Tiefenglanz',
    defectRemoval: '98,5%',
    glossIncrease: '+42 GU'
  },
  {
    id: 'bmw-m-green',
    vehicle: 'BMW M3 Competition Touring',
    treatment: 'Mehrstufiges Jeweling & 3-schichtiger Si02 Quarzschutz',
    beforeImg: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=1600&auto=format&fit=crop',
    afterImg: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=1600&auto=format&fit=crop',
    beforeLabel: 'Vorher: Mattierte Oberflächen & Swirls',
    afterLabel: 'Nachher: Flüssiger Smaragdglanz & Lotuseffekt',
    defectRemoval: '94,0%',
    glossIncrease: '+38 GU'
  },
  {
    id: 'amg-leather',
    vehicle: 'Mercedes-AMG GT Interieur',
    treatment: 'Swissvax Tiefenreinigung & matte Farbtransfer-Sperre',
    beforeImg: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=1600&auto=format&fit=crop',
    afterImg: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1600&auto=format&fit=crop',
    beforeLabel: 'Vorher: Speckig glänzendes & verfärbtes Leder',
    afterLabel: 'Nachher: Werkseitiges seidenmattes Finish',
    defectRemoval: '100% gereinigt',
    glossIncrease: 'Original Haptik'
  }
];

const scenariosEn: ComparisonScenario[] = [
  {
    id: 'porsche-black',
    vehicle: 'Porsche 911 GT3 RS',
    treatment: '3-stage surgical clearcoat correction & Gyeon ceramic coating',
    beforeImg: 'https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?q=80&w=1600&auto=format&fit=crop',
    afterImg: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=1600&auto=format&fit=crop',
    beforeLabel: 'Before: Wash scratches & clearcoat haze',
    afterLabel: 'After: 98% defect-free mirror reflection',
    defectRemoval: '98.5%',
    glossIncrease: '+42 GU'
  },
  {
    id: 'bmw-m-green',
    vehicle: 'BMW M3 Competition Touring',
    treatment: 'Multi-stage jeweling polish & 3-layer quartz shield',
    beforeImg: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=1600&auto=format&fit=crop',
    afterImg: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=1600&auto=format&fit=crop',
    beforeLabel: 'Before: Swirl-dulled clearcoat surface',
    afterLabel: 'After: Deep liquid emerald depth & lotus beading',
    defectRemoval: '94.0%',
    glossIncrease: '+38 GU'
  },
  {
    id: 'amg-leather',
    vehicle: 'Mercedes-AMG GT Cockpit',
    treatment: 'Swissvax deep extraction & matte denim anti-transfer barrier',
    beforeImg: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=1600&auto=format&fit=crop',
    afterImg: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1600&auto=format&fit=crop',
    beforeLabel: 'Before: Greasy sheen and dye discoloration',
    afterLabel: 'After: Factory-original satin matte suppleness',
    defectRemoval: '100% clean',
    glossIncrease: 'OEM Haptics'
  }
];

const scenariosRu: ComparisonScenario[] = [
  {
    id: 'porsche-black',
    vehicle: 'Porsche 911 GT3 RS',
    treatment: '3-этапная полировка ЛКП и керамика Gyeon',
    beforeImg: 'https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?q=80&w=1600&auto=format&fit=crop',
    afterImg: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=1600&auto=format&fit=crop',
    beforeLabel: 'До: Паутина от моек и помутнение лака',
    afterLabel: 'После: 98% удаления дефектов и зеркальный блеск',
    defectRemoval: '98,5%',
    glossIncrease: '+42 GU'
  },
  {
    id: 'bmw-m-green',
    vehicle: 'BMW M3 Competition Touring',
    treatment: 'Ювелирная полировка и 3 слоя кварца Si02',
    beforeImg: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=1600&auto=format&fit=crop',
    afterImg: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=1600&auto=format&fit=crop',
    beforeLabel: 'До: Матовый налет и микроцарапины',
    afterLabel: 'После: Глубокий изумрудный цвет и эффект лотоса',
    defectRemoval: '94,0%',
    glossIncrease: '+38 GU'
  },
  {
    id: 'amg-leather',
    vehicle: 'Салон Mercedes-AMG GT',
    treatment: 'Глубокая очистка Swissvax и консервация кожи',
    beforeImg: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=1600&auto=format&fit=crop',
    afterImg: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1600&auto=format&fit=crop',
    beforeLabel: 'До: Залоснившаяся кожа и следы джинсов',
    afterLabel: 'После: Заводская матовая текстура и мягкость',
    defectRemoval: '100% очищено',
    glossIncrease: 'Заводская фактура'
  }
];

export const BeforeAfterSlider: React.FC = () => {
  const { lang, t } = useLanguage();
  const scenarios = lang === 'ru' ? scenariosRu : lang === 'de' ? scenariosDe : scenariosEn;
  const [activeScenarioId, setActiveScenarioId] = useState<string>('porsche-black');
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const activeScenario = scenarios.find((s) => s.id === activeScenarioId) || scenarios[0];

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = useCallback((e: TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  }, [isDragging, handleMove]);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  }, [isDragging, handleMove]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('touchmove', handleTouchMove);
      window.addEventListener('touchend', handleMouseUp);
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, [isDragging, handleMouseMove, handleMouseUp, handleTouchMove]);

  return (
    <div className="w-full">
      {/* Precision Scenario Selector Tabs */}
      <div className="flex flex-wrap items-center gap-2 sm:gap-4 mb-8 border-b border-[#262626] pb-4">
        {scenarios.map((sc) => (
          <button
            key={sc.id}
            type="button"
            onClick={() => {
              setActiveScenarioId(sc.id);
              setSliderPosition(50);
            }}
            className={`text-xs font-mono tracking-tight pb-2 cursor-pointer transition-colors border-b-2 -mb-[18px] ${
              activeScenario.id === sc.id
                ? 'border-[#B8392D] text-[#F2F0EB] font-medium'
                : 'border-transparent text-[#A6A6A2] hover:text-[#F2F0EB]'
            }`}
          >
            {sc.vehicle}
          </button>
        ))}
      </div>

      {/* Main Minimalist Slider Canvas */}
      <div className="relative border border-[#262626] bg-[#111111] overflow-hidden select-none">
        <div
          ref={containerRef}
          className="relative w-full aspect-[16/10] sm:aspect-[16/9] max-h-[640px] cursor-ew-resize overflow-hidden"
          onMouseDown={(e) => {
            setIsDragging(true);
            handleMove(e.clientX);
          }}
          onTouchStart={(e) => {
            setIsDragging(true);
            handleMove(e.touches[0].clientX);
          }}
        >
          {/* AFTER Image */}
          <div className="absolute inset-0 w-full h-full">
            <img
              src={activeScenario.afterImg}
              alt={activeScenario.afterLabel}
              className="w-full h-full object-cover pointer-events-none filter contrast-105"
            />
            <div className="absolute top-6 right-6 z-20 pointer-events-none">
              <span className="text-[11px] font-mono tracking-widest uppercase bg-[#161616]/90 border border-[#333333] px-3 py-1 text-[#F2F0EB]">
                {activeScenario.afterLabel}
              </span>
            </div>
          </div>

          {/* BEFORE Image */}
          <div
            className="absolute inset-0 h-full overflow-hidden pointer-events-none"
            style={{ width: `${sliderPosition}%` }}
          >
            <div className="relative h-full" style={{ width: containerRef.current?.offsetWidth || '100%' }}>
              <img
                src={activeScenario.beforeImg}
                alt={activeScenario.beforeLabel}
                className="w-full h-full object-cover filter contrast-100 saturate-90"
              />
              <div className="absolute inset-0 bg-black/20 pointer-events-none" />
            </div>

            <div className="absolute top-6 left-6 z-20 pointer-events-none">
              <span className="text-[11px] font-mono tracking-widest uppercase bg-[#161616]/90 border border-[#333333] px-3 py-1 text-[#A6A6A2]">
                {activeScenario.beforeLabel}
              </span>
            </div>
          </div>

          {/* Minimalist Vertical Divider Line with Restrained Red Grip */}
          <div
            className="absolute top-0 bottom-0 z-30 pointer-events-none flex items-center justify-center"
            style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
          >
            <div className="w-[1px] h-full bg-[#F2F0EB]" />
            <div className="absolute w-8 h-8 bg-[#161616] border border-[#F2F0EB] flex items-center justify-center text-[10px] font-mono text-[#F2F0EB]">
              <span className="w-1 h-3 bg-[#B8392D]" />
            </div>
          </div>
        </div>

        {/* Bottom Technical Status Bar */}
        <div className="p-6 bg-[#161616] border-t border-[#262626] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <span className="text-xs font-mono uppercase tracking-wider text-[#A6A6A2] block">
              {lang === 'ru' ? 'Документированный комплекс' : lang === 'de' ? 'Dokumentierte Behandlung' : 'Documented Treatment'}
            </span>
            <p className="text-sm font-medium text-[#F2F0EB]">
              {activeScenario.treatment}
            </p>
          </div>

          <div className="flex items-center gap-6 border-t sm:border-t-0 pt-3 sm:pt-0 border-[#262626] w-full sm:w-auto justify-between sm:justify-start">
            <div className="text-left sm:text-right">
              <span className="block text-[10px] font-mono uppercase text-[#A6A6A2]">
                {t('slider.defect_removal')}
              </span>
              <span className="text-sm font-mono font-semibold text-[#F2F0EB]">{activeScenario.defectRemoval}</span>
            </div>
            <div className="h-6 w-[1px] bg-[#262626]" />
            <div className="text-left sm:text-right">
              <span className="block text-[10px] font-mono uppercase text-[#A6A6A2]">
                {t('slider.gloss_increase')}
              </span>
              <span className="text-sm font-mono font-semibold text-[#B8392D]">{activeScenario.glossIncrease}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
