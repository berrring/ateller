import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const ContactPage: React.FC = () => {
  const { lang } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setError(lang === 'en' ? 'Please complete all required fields.' : 'Bitte alle erforderlichen Felder ausfüllen.');
      return;
    }
    setError('');
    setSubmitted(true);
  };

  return (
    <div className="pt-24 pb-20 min-h-screen bg-[#161616] text-[#F2F0EB]">
      {/* Header */}
      <section className="py-20 border-b border-[#262626]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <span className="font-mono text-xs uppercase tracking-widest text-[#B8392D] block mb-3">
            01 // {lang === 'en' ? 'Studio Munich-North' : 'Studio München-Nord'}
          </span>
          <h1 className="text-4xl sm:text-6xl font-['Manrope'] font-medium tracking-tight text-[#F2F0EB] max-w-3xl leading-tight">
            {lang === 'en' ? (
              <>
                Direct access. <br />
                <span className="text-[#A6A6A2] font-light">Munich cleanroom facility.</span>
              </>
            ) : (
              <>
                Direkter Kontakt. <br />
                <span className="text-[#A6A6A2] font-light">Standort München-Nord.</span>
              </>
            )}
          </h1>
          <p className="text-base sm:text-lg text-[#A6A6A2] font-light max-w-2xl mt-6 leading-relaxed">
            {lang === 'en'
              ? 'Conveniently situated in northern Munich close to Motorworld and the A9 autobahn.'
              : 'Verkehrsgünstig im Münchner Norden in unmittelbarer Nähe zur Motorworld und der A9.'}
          </p>
        </div>
      </section>

      {/* Grid: Studio Specs & Message Form */}
      <section className="py-20 max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column Studio Info (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="border border-[#262626] bg-[#111111] p-8 space-y-6">
              <span className="font-mono text-xs uppercase tracking-widest text-[#F2F0EB] border-b border-[#262626] pb-3 block">
                {lang === 'en' ? 'Facility Information' : 'Studio-Angaben'}
              </span>

              <div className="space-y-4 text-xs font-mono">
                <div>
                  <span className="text-[#777777] block text-[10px] uppercase mb-1">
                    {lang === 'en' ? 'Physical Address' : 'Anschrift'}
                  </span>
                  <p className="text-[#F2F0EB] font-sans font-medium text-sm">ATELIER Fahrzeugpflege</p>
                  <p className="text-[#A6A6A2]">Schleißheimer Straße 418</p>
                  <p className="text-[#A6A6A2]">80935 München, Deutschland</p>
                </div>

                <div className="pt-2 border-t border-[#222222]">
                  <span className="text-[#777777] block text-[10px] uppercase mb-1">
                    {lang === 'en' ? 'Direct Telephone' : 'Telefon'}
                  </span>
                  <a href="tel:+498921094580" className="text-[#F2F0EB] hover:text-[#B8392D] transition-colors">
                    +49 (0) 89 2109 4580
                  </a>
                </div>

                <div className="pt-2 border-t border-[#222222]">
                  <span className="text-[#777777] block text-[10px] uppercase mb-1">
                    {lang === 'en' ? 'Electronic Mail' : 'E-Mail'}
                  </span>
                  <a href="mailto:kontakt@atelier-fahrzeugpflege.de" className="text-[#F2F0EB] hover:text-[#B8392D] transition-colors">
                    kontakt@atelier-fahrzeugpflege.de
                  </a>
                </div>

                <div className="pt-2 border-t border-[#222222]">
                  <span className="text-[#777777] block text-[10px] uppercase mb-1">
                    {lang === 'en' ? 'Studio Hours' : 'Öffnungszeiten'}
                  </span>
                  <p className="text-[#A6A6A2]">Mo–Fr: 08:30 – 18:30 Uhr</p>
                  <p className="text-[#A6A6A2]">Sa: {lang === 'en' ? 'By prior arrangement' : 'Nach Absprache'}</p>
                </div>
              </div>
            </div>

            {/* Directions Note */}
            <div className="border border-[#262626] bg-[#111111] p-8 space-y-3 text-xs">
              <span className="font-mono text-xs uppercase tracking-widest text-[#B8392D] block">
                {lang === 'en' ? 'Transit & Access' : 'Verkehrsanbindung'}
              </span>
              <p className="text-[#A6A6A2] font-light leading-relaxed">
                {lang === 'en'
                  ? 'Access via A9 (Munich-Frankfurter Ring exit) or A99. 10 minutes from Mittlerer Ring, 25 minutes from Munich International Airport (MUC). On-site video-monitored client parking.'
                  : 'Anfahrt über A9 (Ausfahrt München-Frankfurter Ring) oder A99. 10 Min. vom Mittleren Ring, 25 Min. vom Flughafen München (MUC). Eigene videoüberwachte Parkplätze direkt vor der Halle.'}
              </p>
            </div>
          </div>

          {/* Right Column Message Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="border border-[#262626] bg-[#111111] p-8 sm:p-12 space-y-6">
              <span className="font-mono text-xs uppercase tracking-widest text-[#F2F0EB] border-b border-[#262626] pb-3 block">
                {lang === 'en' ? 'Direct Studio Message' : 'Nachricht an das Studio'}
              </span>

              {submitted ? (
                <div className="p-8 border border-[#B8392D] bg-[#161616] text-left space-y-4">
                  <span className="font-mono text-xs text-[#B8392D] uppercase block">
                    STATUS // TRANSMITTED
                  </span>
                  <h3 className="text-xl font-medium text-[#F2F0EB]">
                    {lang === 'en' ? 'Message Recorded.' : 'Nachricht erfasst.'}
                  </h3>
                  <p className="text-xs text-[#A6A6A2] font-light">
                    {lang === 'en'
                      ? 'Thank you for reaching out. We would reply shortly. (Demo note: no real email was dispatched).'
                      : 'Vielen Dank für Ihre Kontaktaufnahme. (Demo-Hinweis: keine reale E-Mail versendet).'}
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="px-4 py-2 border border-[#333333] text-xs font-mono text-[#F2F0EB] hover:border-[#F2F0EB]"
                  >
                    {lang === 'en' ? 'Write another message' : 'Weitere Nachricht'}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {error && (
                    <div className="p-3 border border-[#B8392D] text-[#B8392D] text-xs font-mono">
                      {error}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-mono uppercase text-[#A6A6A2] mb-2">
                        {lang === 'en' ? 'Full Name *' : 'Vollständiger Name *'}
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3 py-2.5 bg-[#161616] border border-[#262626] text-xs font-mono text-[#F2F0EB] focus:outline-none focus:border-[#F2F0EB]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase text-[#A6A6A2] mb-2">
                        {lang === 'en' ? 'Email Address *' : 'E-Mail-Adresse *'}
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3 py-2.5 bg-[#161616] border border-[#262626] text-xs font-mono text-[#F2F0EB] focus:outline-none focus:border-[#F2F0EB]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-[#A6A6A2] mb-2">
                      {lang === 'en' ? 'Telephone' : 'Telefon'}
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3 py-2.5 bg-[#161616] border border-[#262626] text-xs font-mono text-[#F2F0EB] focus:outline-none focus:border-[#F2F0EB]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-[#A6A6A2] mb-2">
                      {lang === 'en' ? 'Subject' : 'Betreff'}
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-3 py-2.5 bg-[#161616] border border-[#262626] text-xs font-mono text-[#F2F0EB] focus:outline-none focus:border-[#F2F0EB]"
                    >
                      <option value="General Inquiry">General Inquiry / Allgemeine Anfrage</option>
                      <option value="XPEL PPF">XPEL Paint Protection Film</option>
                      <option value="Ceramic Coating">Ceramic Quartz Coating</option>
                      <option value="Paint Correction">Paint Correction</option>
                      <option value="Enclosed Transport">Enclosed Transport</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-[#A6A6A2] mb-2">
                      {lang === 'en' ? 'Message *' : 'Ihre Nachricht *'}
                    </label>
                    <textarea
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3 py-2.5 bg-[#161616] border border-[#262626] text-xs font-mono text-[#F2F0EB] focus:outline-none focus:border-[#F2F0EB]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-4 bg-[#B8392D] text-white hover:bg-[#a02f24] text-xs font-medium uppercase tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>{lang === 'en' ? 'Transmit Message' : 'Nachricht senden'}</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
