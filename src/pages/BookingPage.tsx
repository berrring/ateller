import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ArrowUpRight, X, Check } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const BookingPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const { lang } = useLanguage();

  const queryVehicle = searchParams.get('vehicleClass') || '';
  const queryTreatment = searchParams.get('treatment') || '';
  const queryEstimate = searchParams.get('estimate') || '';
  const queryAddons = searchParams.get('addons') || '';

  const [formData, setFormData] = useState({
    brand: '',
    model: '',
    year: '2024',
    mileage: '',
    paintCondition: 'Gepflegt mit leichten Waschkratzern',
    services: [] as string[],
    transportService: 'no',
    preferredDate: '',
    notes: '',
    salutation: 'Herr',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    city: 'München',
    dataPrivacyConsent: false,
  });

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  useEffect(() => {
    if (queryTreatment) {
      setFormData((prev) => ({
        ...prev,
        services: [queryTreatment],
        notes: [
          queryVehicle ? `Class: ${queryVehicle}` : '',
          queryAddons ? `Modules: ${queryAddons}` : ''
        ].filter(Boolean).join(' | ')
      }));
    }
  }, [queryTreatment, queryVehicle, queryAddons]);

  const serviceOptions = [
    lang === 'en' ? 'XPEL Paint Protection Film (PPF) - Full Body' : 'Lackschutzfolie (PPF) - Vollfolierung',
    lang === 'en' ? 'XPEL Paint Protection Film (PPF) - Front Package' : 'Lackschutzfolie (PPF) - Front-Paket',
    lang === 'en' ? 'Ceramic Coating Pro Excellence (9H Quartz)' : 'Keramikversiegelung Pro Excellence (9H Si02)',
    lang === 'en' ? 'Ceramic Coating Essential (1-Layer)' : 'Keramikversiegelung Essential (1-Schicht)',
    lang === 'en' ? 'Multi-Stage Surgical Paint Correction' : 'Chirurgische Mehrstufen-Lackkorrektur',
    lang === 'en' ? 'Bespoke Swissvax Leather & Interior Spa' : 'Exklusive Innenraum- & Lederaufbereitung',
    lang === 'en' ? 'Signature Concours Detailing All-Inclusive' : 'Signature Concours Detailing Komplettpaket'
  ];

  const toggleService = (srv: string) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(srv)
        ? prev.services.filter((s) => s !== srv)
        : [...prev.services, srv]
    }));
  };

  const validate = () => {
    const errors: Record<string, string> = {};
    if (!formData.brand.trim()) errors.brand = lang === 'en' ? 'Please state the manufacturer.' : 'Bitte Hersteller angeben.';
    if (!formData.model.trim()) errors.model = lang === 'en' ? 'Please state the model.' : 'Bitte Modell angeben.';
    if (!formData.lastName.trim()) errors.lastName = lang === 'en' ? 'Please state your last name.' : 'Bitte Nachnamen angeben.';
    if (!formData.email.trim()) {
      errors.email = lang === 'en' ? 'Please state your email.' : 'Bitte E-Mail angeben.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = lang === 'en' ? 'Invalid email address.' : 'Ungültige E-Mail-Adresse.';
    }
    if (!formData.phone.trim()) errors.phone = lang === 'en' ? 'Please provide a telephone number.' : 'Bitte Telefonnummer angeben.';
    if (formData.services.length === 0) errors.services = lang === 'en' ? 'Select at least one service.' : 'Bitte mindestens eine Leistung wählen.';
    if (!formData.dataPrivacyConsent) errors.dataPrivacyConsent = lang === 'en' ? 'Consent required.' : 'Zustimmung erforderlich.';

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      window.scrollTo({ top: 300, behavior: 'smooth' });
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccessModal(true);
    }, 700);
  };

  return (
    <div className="pt-24 pb-20 min-h-screen bg-[#161616] text-[#F2F0EB]">
      {/* Header */}
      <section className="py-20 border-b border-[#262626]">
        <div className="max-w-4xl mx-auto px-6 sm:px-8">
          <span className="font-mono text-xs uppercase tracking-widest text-[#B8392D] block mb-3">
            01 // {lang === 'en' ? 'Consultation & Diagnostics' : 'Beratungsanfrage'}
          </span>
          <h1 className="text-4xl sm:text-5xl font-['Manrope'] font-medium tracking-tight text-[#F2F0EB] leading-tight">
            {lang === 'en' ? 'Schedule an Assessment.' : 'Termin & Veredelungsanfrage.'}
          </h1>
          <p className="text-base sm:text-lg text-[#A6A6A2] font-light mt-4 leading-relaxed">
            {lang === 'en'
              ? 'Tell us about your automobile and desired refinement scope. We review your specifications and reply within 24 hours with an analytical preservation concept.'
              : 'Teilen Sie uns Fahrzeugdetails und gewünschten Schutzumfang mit. Wir prüfen Ihre Angaben und melden uns innerhalb von 24 Stunden mit einem maßgeschneiderten Konzept.'}
          </p>

          {queryEstimate && (
            <div className="mt-6 p-4 border border-[#333333] bg-[#111111] inline-flex items-center gap-4 text-xs font-mono">
              <span className="text-[#A6A6A2]">{lang === 'en' ? 'Estimated Investment:' : 'Kalkulierter Richtwert:'}</span>
              <span className="text-[#F2F0EB] font-bold">ca. {parseInt(queryEstimate).toLocaleString('de-DE')} €</span>
            </div>
          )}
        </div>
      </section>

      {/* Main Form */}
      <section className="py-16 max-w-4xl mx-auto px-6 sm:px-8">
        <form onSubmit={handleSubmit} className="space-y-12">
          {/* Section 1: Vehicle Specifications */}
          <div className="border border-[#262626] bg-[#111111] p-8 space-y-6">
            <span className="font-mono text-xs uppercase tracking-wider text-[#F2F0EB] border-b border-[#262626] pb-3 block">
              01 // {lang === 'en' ? 'Vehicle Specifications' : 'Fahrzeugdaten'}
            </span>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-mono uppercase text-[#A6A6A2] mb-2">
                  {lang === 'en' ? 'Manufacturer *' : 'Hersteller / Marke *'}
                </label>
                <input
                  type="text"
                  placeholder="e.g. Porsche, BMW M, Mercedes-AMG, Ferrari"
                  value={formData.brand}
                  onChange={(e) => setFormData({ ...formData, brand: e.target.value })}
                  className={`w-full px-3 py-2.5 bg-[#161616] border text-xs font-mono text-[#F2F0EB] placeholder-[#666666] focus:outline-none ${
                    formErrors.brand ? 'border-[#B8392D]' : 'border-[#262626] focus:border-[#F2F0EB]'
                  }`}
                />
                {formErrors.brand && (
                  <span className="text-[10px] font-mono text-[#B8392D] mt-1 block">{formErrors.brand}</span>
                )}
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-[#A6A6A2] mb-2">
                  {lang === 'en' ? 'Model & Series *' : 'Modell & Baureihe *'}
                </label>
                <input
                  type="text"
                  placeholder="e.g. 911 (992) GT3 RS, M3 CS, G63"
                  value={formData.model}
                  onChange={(e) => setFormData({ ...formData, model: e.target.value })}
                  className={`w-full px-3 py-2.5 bg-[#161616] border text-xs font-mono text-[#F2F0EB] placeholder-[#666666] focus:outline-none ${
                    formErrors.model ? 'border-[#B8392D]' : 'border-[#262626] focus:border-[#F2F0EB]'
                  }`}
                />
                {formErrors.model && (
                  <span className="text-[10px] font-mono text-[#B8392D] mt-1 block">{formErrors.model}</span>
                )}
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-[#A6A6A2] mb-2">
                  {lang === 'en' ? 'Year of Manufacture' : 'Baujahr'}
                </label>
                <input
                  type="text"
                  placeholder="2024"
                  value={formData.year}
                  onChange={(e) => setFormData({ ...formData, year: e.target.value })}
                  className="w-full px-3 py-2.5 bg-[#161616] border border-[#262626] text-xs font-mono text-[#F2F0EB] focus:outline-none focus:border-[#F2F0EB]"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-[#A6A6A2] mb-2">
                  {lang === 'en' ? 'Mileage (approx.)' : 'Kilometerstand (ca.)'}
                </label>
                <input
                  type="text"
                  placeholder="e.g. 2.400 km"
                  value={formData.mileage}
                  onChange={(e) => setFormData({ ...formData, mileage: e.target.value })}
                  className="w-full px-3 py-2.5 bg-[#161616] border border-[#262626] text-xs font-mono text-[#F2F0EB] focus:outline-none focus:border-[#F2F0EB]"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block text-xs font-mono uppercase text-[#A6A6A2] mb-2">
                  {lang === 'en' ? 'Current Clearcoat Status' : 'Aktueller Lackzustand'}
                </label>
                <select
                  value={formData.paintCondition}
                  onChange={(e) => setFormData({ ...formData, paintCondition: e.target.value })}
                  className="w-full px-3 py-2.5 bg-[#161616] border border-[#262626] text-xs font-mono text-[#F2F0EB] focus:outline-none focus:border-[#F2F0EB] cursor-pointer"
                >
                  <option value="Neufahrzeug direkt ab Werksauslieferung">New Delivery / Factory Delivery (Minimal traces)</option>
                  <option value="Gepflegt mit leichten Waschkratzern">Maintained / Light car-wash swirls</option>
                  <option value="Stark beansprucht mit tiefen Hologrammen & Grauschleier">Heavy wash scratches, swirls & haze</option>
                  <option value="Historisches Sammlerfahrzeug / Originallack">Vintage Collector / Original Paint Preservation</option>
                </select>
              </div>
            </div>
          </div>

          {/* Section 2: Services Selection */}
          <div className="border border-[#262626] bg-[#111111] p-8 space-y-6">
            <span className="font-mono text-xs uppercase tracking-wider text-[#F2F0EB] border-b border-[#262626] pb-3 block">
              02 // {lang === 'en' ? 'Desired Services *' : 'Gewünschte Leistungen *'}
            </span>

            {formErrors.services && (
              <span className="text-[10px] font-mono text-[#B8392D] block">{formErrors.services}</span>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {serviceOptions.map((srv, idx) => {
                const isSelected = formData.services.includes(srv);
                return (
                  <div
                    key={idx}
                    onClick={() => toggleService(srv)}
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
                    <span className="text-xs font-light">{srv}</span>
                  </div>
                );
              })}
            </div>

            {/* Enclosed Carrier Option */}
            <div className="pt-4 border-t border-[#262626] flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono">
              <span className="text-[#A6A6A2]">
                {lang === 'en' ? 'Enclosed single-car transport requested?' : 'Geschlossener Einzeltransport gewünscht?'}
              </span>
              <div className="flex items-center gap-4">
                <label className="flex items-center gap-2 cursor-pointer text-[#F2F0EB]">
                  <input
                    type="radio"
                    name="transport"
                    value="yes"
                    checked={formData.transportService === 'yes'}
                    onChange={() => setFormData({ ...formData, transportService: 'yes' })}
                    className="accent-[#B8392D]"
                  />
                  <span>{lang === 'en' ? 'Yes, please quote' : 'Ja, bitte anbieten'}</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer text-[#F2F0EB]">
                  <input
                    type="radio"
                    name="transport"
                    value="no"
                    checked={formData.transportService === 'no'}
                    onChange={() => setFormData({ ...formData, transportService: 'no' })}
                    className="accent-[#B8392D]"
                  />
                  <span>{lang === 'en' ? 'Self-delivery' : 'Eigene Anlieferung'}</span>
                </label>
              </div>
            </div>
          </div>

          {/* Section 3: Contact & Timeline */}
          <div className="border border-[#262626] bg-[#111111] p-8 space-y-6">
            <span className="font-mono text-xs uppercase tracking-wider text-[#F2F0EB] border-b border-[#262626] pb-3 block">
              03 // {lang === 'en' ? 'Contact & Timeframe' : 'Kontaktdaten & Zeitplan'}
            </span>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-mono uppercase text-[#A6A6A2] mb-2">
                  {lang === 'en' ? 'First Name' : 'Vorname'}
                </label>
                <input
                  type="text"
                  value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                  className="w-full px-3 py-2.5 bg-[#161616] border border-[#262626] text-xs font-mono text-[#F2F0EB] focus:outline-none focus:border-[#F2F0EB]"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-[#A6A6A2] mb-2">
                  {lang === 'en' ? 'Last Name *' : 'Nachname *'}
                </label>
                <input
                  type="text"
                  value={formData.lastName}
                  onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                  className={`w-full px-3 py-2.5 bg-[#161616] border text-xs font-mono text-[#F2F0EB] focus:outline-none ${
                    formErrors.lastName ? 'border-[#B8392D]' : 'border-[#262626] focus:border-[#F2F0EB]'
                  }`}
                />
                {formErrors.lastName && (
                  <span className="text-[10px] font-mono text-[#B8392D] mt-1 block">{formErrors.lastName}</span>
                )}
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-[#A6A6A2] mb-2">
                  {lang === 'en' ? 'Email Address *' : 'E-Mail-Adresse *'}
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className={`w-full px-3 py-2.5 bg-[#161616] border text-xs font-mono text-[#F2F0EB] focus:outline-none ${
                    formErrors.email ? 'border-[#B8392D]' : 'border-[#262626] focus:border-[#F2F0EB]'
                  }`}
                />
                {formErrors.email && (
                  <span className="text-[10px] font-mono text-[#B8392D] mt-1 block">{formErrors.email}</span>
                )}
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-[#A6A6A2] mb-2">
                  {lang === 'en' ? 'Phone Number *' : 'Telefonnummer *'}
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className={`w-full px-3 py-2.5 bg-[#161616] border text-xs font-mono text-[#F2F0EB] focus:outline-none ${
                    formErrors.phone ? 'border-[#B8392D]' : 'border-[#262626] focus:border-[#F2F0EB]'
                  }`}
                />
                {formErrors.phone && (
                  <span className="text-[10px] font-mono text-[#B8392D] mt-1 block">{formErrors.phone}</span>
                )}
              </div>

              <div className="sm:col-span-2">
                <label className="block text-xs font-mono uppercase text-[#A6A6A2] mb-2">
                  {lang === 'en' ? 'Notes or Trackday Usage' : 'Besondere Hinweise oder geplanter Trackday-Einsatz'}
                </label>
                <textarea
                  rows={3}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-3 py-2.5 bg-[#161616] border border-[#262626] text-xs font-mono text-[#F2F0EB] focus:outline-none focus:border-[#F2F0EB]"
                />
              </div>
            </div>

            {/* Privacy Check */}
            <div className="pt-4 border-t border-[#262626]">
              <label className="flex items-start gap-3 cursor-pointer text-xs font-mono text-[#A6A6A2]">
                <input
                  type="checkbox"
                  checked={formData.dataPrivacyConsent}
                  onChange={(e) => setFormData({ ...formData, dataPrivacyConsent: e.target.checked })}
                  className="mt-0.5 accent-[#B8392D]"
                />
                <span>
                  {lang === 'en'
                    ? 'I consent to the handling of my contact information in accordance with the Privacy Policy.'
                    : 'Ich willige ein, dass meine Daten zur Bearbeitung der Anfrage gemäß der Datenschutzerklärung verarbeitet werden.'}
                </span>
              </label>
              {formErrors.dataPrivacyConsent && (
                <span className="text-[10px] font-mono text-[#B8392D] mt-1 block">{formErrors.dataPrivacyConsent}</span>
              )}
            </div>
          </div>

          <div className="pt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 px-6 bg-[#B8392D] text-white hover:bg-[#a02f24] text-xs font-medium uppercase tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>{isSubmitting ? 'Transmitting...' : (lang === 'en' ? 'Submit Consultation Request' : 'Beratungsanfrage absenden')}</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <p className="text-[11px] font-mono text-[#777777] text-center mt-3">
              {lang === 'en' ? 'Discretion guaranteed. No data shared with third parties.' : 'Diskretion garantiert. Keine Datenweitergabe an Dritte.'}
            </p>
          </div>
        </form>
      </section>

      {/* Confirmation Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 z-50 bg-[#0E0E0E]/95 backdrop-blur-md flex items-center justify-center p-4">
          <div className="relative max-w-md w-full bg-[#161616] border border-[#262626] p-8 text-left space-y-6">
            <button
              type="button"
              onClick={() => setShowSuccessModal(false)}
              className="absolute top-5 right-5 text-[#A6A6A2] hover:text-[#F2F0EB]"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="text-xs font-mono text-[#B8392D] uppercase tracking-widest block">
              STATUS // RECEIVED
            </span>

            <h3 className="text-2xl font-['Manrope'] font-medium text-[#F2F0EB]">
              {lang === 'en' ? 'Request Recorded.' : 'Anfrage erfasst.'}
            </h3>

            <p className="text-xs sm:text-sm text-[#A6A6A2] font-light leading-relaxed">
              {lang === 'en'
                ? `Thank you, ${formData.lastName}. Your inquiry for your ${formData.brand} ${formData.model} has been recorded. Our studio team would review the specification within 24 hours.`
                : `Vielen Dank, ${formData.lastName}. Ihre Anfrage für Ihren ${formData.brand} ${formData.model} wurde erfasst. Unser Studio-Team würde sich innerhalb von 24 Stunden mit Ihnen in Verbindung setzen.`}
            </p>

            <div className="p-3 border border-[#333333] bg-[#111111] text-[11px] font-mono text-[#777777]">
              // DEMO NOTE: This is a frontend portfolio demonstration. No real server transaction occurred.
            </div>

            <button
              type="button"
              onClick={() => setShowSuccessModal(false)}
              className="w-full py-3 border border-[#F2F0EB] text-[#F2F0EB] text-xs font-mono uppercase tracking-wider hover:bg-[#F2F0EB] hover:text-[#161616] transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
