import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowUpRight, Check } from 'lucide-react';
import { vehicleTypes, primaryTreatments, addonOptions } from '../../data/pricing';
import type { VehicleTypeOption, TreatmentOption } from '../../data/pricing';
import { useLanguage } from '../../context/LanguageContext';

export const CostEstimator: React.FC = () => {
  const navigate = useNavigate();
  const { lang, t } = useLanguage();

  const [selectedVehicle, setSelectedVehicle] = useState<VehicleTypeOption>(vehicleTypes[0]);
  const [selectedTreatment, setSelectedTreatment] = useState<TreatmentOption>(primaryTreatments[1]);
  const [paintCondition, setPaintCondition] = useState<'new' | 'moderate' | 'heavy'>('moderate');
  const [selectedAddons, setSelectedAddons] = useState<string[]>(['glass-coating']);

  const conditionLabels = {
    new: lang === 'ru' ? 'Новый автомобиль / без пробега (1 этап)' : lang === 'en' ? 'New Delivery / Showroom (Minimal correction)' : 'Neuwagen / Werksauslieferung (Minimale Spuren)',
    moderate: lang === 'ru' ? 'Бережная эксплуатация / мойки (2 этапа)' : lang === 'en' ? 'Maintained / Wash Swirls (2-stage correction)' : 'Gepflegt / Typische Waschstraßenspuren (2-Stufen)',
    heavy: lang === 'ru' ? 'Сильные повреждения / глубокие царапины (3 этапа)' : lang === 'en' ? 'Heavy Swirls & Oxidation (3-stage surgical correction)' : 'Stark beansprucht / Tiefe Swirls (3-Stufen)'
  };

  const conditionFactors = { new: 0.95, moderate: 1.0, heavy: 1.15 };

  const toggleAddon = (addonId: string) => {
    setSelectedAddons((prev) =>
      prev.includes(addonId) ? prev.filter((id) => id !== addonId) : [...prev, addonId]
    );
  };

  const calculation = useMemo(() => {
    const base = selectedTreatment.basePrice;
    const factor = selectedVehicle.factor * conditionFactors[paintCondition];
    const adjusted = Math.round(base * factor);
    const addonsTotal = selectedAddons.reduce((sum, id) => {
      const a = addonOptions.find((opt) => opt.id === id);
      return sum + (a ? a.price : 0);
    }, 0);
    return { adjusted, addonsTotal, total: adjusted + addonsTotal };
  }, [selectedVehicle, selectedTreatment, paintCondition, selectedAddons]);

  const handleConsultation = () => {
    const addonsString = selectedAddons
      .map((id) => addonOptions.find((a) => a.id === id)?.name)
      .filter(Boolean)
      .join(', ');

    const params = new URLSearchParams({
      vehicleClass: selectedVehicle.label,
      treatment: selectedTreatment.name,
      condition: conditionLabels[paintCondition],
      addons: addonsString,
      estimate: calculation.total.toString()
    });

    navigate(`/termin?${params.toString()}`);
  };

  return (
    <div className="border border-[#262626] bg-[#111111] text-[#F2F0EB]">
      {/* Precision Header Bar */}
      <div className="p-6 sm:p-8 border-b border-[#262626] flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <span className="text-[11px] font-mono text-[#B8392D] uppercase tracking-widest block mb-1">
            SPEC_ESTIMATOR // V3.2
          </span>
          <h3 className="text-xl sm:text-2xl font-['Manrope'] font-medium text-[#F2F0EB]">
            {t('calc.title')}
          </h3>
        </div>
        <div className="text-xs font-mono text-[#A6A6A2] border border-[#262626] px-3 py-1.5 self-start md:self-auto">
          {t('calc.vat_info')}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-[#262626]">
        {/* Left Column Configurator (7 cols) */}
        <div className="lg:col-span-7 p-6 sm:p-8 space-y-8">
          {/* Step 1: Vehicle Class */}
          <div className="space-y-3">
            <span className="text-xs font-mono uppercase text-[#A6A6A2] block">
              {t('calc.step1')}
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {vehicleTypes.map((v) => (
                <button
                  key={v.id}
                  type="button"
                  onClick={() => setSelectedVehicle(v)}
                  className={`p-3 text-left border transition-all cursor-pointer ${
                    selectedVehicle.id === v.id
                      ? 'border-[#B8392D] bg-[#161616] text-[#F2F0EB]'
                      : 'border-[#262626] text-[#A6A6A2] hover:border-[#444444] hover:text-[#F2F0EB]'
                  }`}
                >
                  <span className="text-xs font-medium block">{v.label}</span>
                  <span className="text-[10px] text-[#777777] block mt-0.5 line-clamp-1">{v.examples}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Step 2: Core Treatment */}
          <div className="space-y-3">
            <span className="text-xs font-mono uppercase text-[#A6A6A2] block">
              {t('calc.step2')}
            </span>
            <div className="space-y-2">
              {primaryTreatments.map((tItem) => (
                <div
                  key={tItem.id}
                  onClick={() => setSelectedTreatment(tItem)}
                  className={`p-3 border cursor-pointer transition-all flex items-center justify-between gap-4 ${
                    selectedTreatment.id === tItem.id
                      ? 'border-[#B8392D] bg-[#161616] text-[#F2F0EB]'
                      : 'border-[#262626] text-[#A6A6A2] hover:border-[#444444]'
                  }`}
                >
                  <div className="space-y-0.5">
                    <span className="text-xs font-medium text-[#F2F0EB] block">{tItem.name}</span>
                    <span className="text-[11px] text-[#777777] block font-light line-clamp-1">{tItem.description}</span>
                  </div>
                  <div className="text-right shrink-0 font-mono text-xs text-[#F2F0EB]">
                    <span>ab {tItem.basePrice} €</span>
                    <span className="block text-[10px] text-[#777777]">{tItem.duration}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Step 3: Paint Condition */}
          <div className="space-y-3">
            <span className="text-xs font-mono uppercase text-[#A6A6A2] block">
              {t('calc.step3')}
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              {(['new', 'moderate', 'heavy'] as const).map((cond) => (
                <button
                  key={cond}
                  type="button"
                  onClick={() => setPaintCondition(cond)}
                  className={`p-3 text-left border text-xs cursor-pointer transition-all ${
                    paintCondition === cond
                      ? 'border-[#B8392D] bg-[#161616] text-[#F2F0EB]'
                      : 'border-[#262626] text-[#A6A6A2] hover:border-[#444444]'
                  }`}
                >
                  <span className="block font-medium mb-1">
                    {cond === 'new'
                      ? (lang === 'ru' ? 'Новый авто' : lang === 'en' ? 'New Car' : 'Neuwagen')
                      : cond === 'moderate'
                      ? (lang === 'ru' ? 'Микроцарапины' : lang === 'en' ? 'Swirls / Haze' : 'Gepflegt / Swirls')
                      : (lang === 'ru' ? 'Сильный износ' : lang === 'en' ? 'Heavy Swirls' : 'Stark beansprucht')}
                  </span>
                  <span className="text-[10px] text-[#777777] block leading-tight">
                    {cond === 'new' ? '1-stage finish' : cond === 'moderate' ? '2-stage polish' : '3-stage surgical'}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Step 4: Add-ons */}
          <div className="space-y-3">
            <span className="text-xs font-mono uppercase text-[#A6A6A2] block">
              {t('calc.step4')}
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {addonOptions.map((addon) => {
                const isSelected = selectedAddons.includes(addon.id);
                return (
                  <div
                    key={addon.id}
                    onClick={() => toggleAddon(addon.id)}
                    className={`p-3 border cursor-pointer transition-all flex items-start gap-3 ${
                      isSelected
                        ? 'border-[#B8392D] bg-[#161616] text-[#F2F0EB]'
                        : 'border-[#262626] text-[#A6A6A2] hover:border-[#444444]'
                    }`}
                  >
                    <div className={`w-3.5 h-3.5 border shrink-0 mt-0.5 flex items-center justify-center ${
                      isSelected ? 'border-[#B8392D] bg-[#B8392D] text-white' : 'border-[#444444]'
                    }`}>
                      {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-medium text-[#F2F0EB]">{addon.name}</span>
                        <span className="font-mono text-[#A6A6A2]">+{addon.price} €</span>
                      </div>
                      <p className="text-[10px] text-[#777777] font-light mt-0.5 line-clamp-1">{addon.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Column Summary (5 cols) */}
        <div className="lg:col-span-5 p-6 sm:p-8 bg-[#141414] flex flex-col justify-between">
          <div className="space-y-6">
            <span className="text-xs font-mono uppercase tracking-wider text-[#A6A6A2] border-b border-[#262626] pb-3 block">
              {t('calc.summary_title')}
            </span>

            <div className="space-y-3 text-xs font-mono">
              <div className="flex justify-between pb-2 border-b border-[#222222]">
                <span className="text-[#777777]">{t('calc.vehicle_class')}</span>
                <span className="text-[#F2F0EB]">{selectedVehicle.label}</span>
              </div>
              <div className="flex justify-between pb-2 border-b border-[#222222]">
                <span className="text-[#777777]">{t('calc.treatment')}</span>
                <span className="text-[#F2F0EB] text-right truncate max-w-[200px]">{selectedTreatment.name}</span>
              </div>
              <div className="flex justify-between pb-2 border-b border-[#222222]">
                <span className="text-[#777777]">{t('calc.duration')}</span>
                <span className="text-[#F2F0EB]">{selectedTreatment.duration}</span>
              </div>
              {selectedAddons.length > 0 && (
                <div className="py-2 border-b border-[#222222] space-y-1">
                  <span className="text-[#777777] block">{t('calc.addons')}</span>
                  {selectedAddons.map((id) => {
                    const opt = addonOptions.find((a) => a.id === id);
                    if (!opt) return null;
                    return (
                      <div key={id} className="flex justify-between text-[11px] text-[#A6A6A2] pl-2">
                        <span>• {opt.name}</span>
                        <span>+{opt.price} €</span>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>

          {/* Total & Action */}
          <div className="pt-8 border-t border-[#262626] space-y-4">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#777777] block">
                {t('calc.total_label')}
              </span>
              <div className="flex items-baseline gap-2 mt-1">
                <span className="text-3xl sm:text-4xl font-mono font-bold text-[#F2F0EB]">
                  ca. {calculation.total.toLocaleString('de-DE')} €
                </span>
                <span className="text-xs text-[#777777] font-mono">inkl. 19% MwSt.</span>
              </div>
              <p className="text-[10px] text-[#777777] mt-1 font-light">
                {t('calc.total_note')}
              </p>
            </div>

            <button
              type="button"
              onClick={handleConsultation}
              className="w-full py-3.5 px-4 bg-[#B8392D] text-white hover:bg-[#a02f24] text-xs font-medium uppercase tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>{t('calc.cta')}</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
