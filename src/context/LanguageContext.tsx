import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'en' | 'de' | 'ru';

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Nav
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.projects': 'Projects',
    'nav.pricing': 'Pricing',
    'nav.about': 'About Us',
    'nav.contact': 'Contact',
    'nav.book': 'Book Consultation',
    'nav.studio_tag': 'Munich Studio',
    'nav.certified': 'Certified Detailing Studio',

    // Hero
    'hero.badge': 'Automotive Detailing & Surface Refinement · Munich',
    'hero.title_pre': 'Precision in the',
    'hero.title_highlight': 'Submicron Realm.',
    'hero.subtitle': 'Surgical paint correction, certified XPEL® paint protection film (PPF), and molecular ceramic coatings. Engineered for sports cars, hypercars, and automotive collector pieces in Munich, Germany.',
    'hero.cta_book': 'Book Consultation',
    'hero.cta_services': 'Explore Services',
    'hero.highlight_1_title': '10-Year Warranty',
    'hero.highlight_1_sub': 'Official XPEL Elite Installer',
    'hero.highlight_2_title': '98% Defect Removal',
    'hero.highlight_2_sub': 'Multi-Stage Surgical Correction',
    'hero.highlight_3_title': '5000K Lighting Lab',
    'hero.highlight_3_sub': 'HEPA-Filtered Cleanroom Bay',
    'hero.highlight_4_title': 'Discrete Transport',
    'hero.highlight_4_sub': 'Enclosed Single-Car Carrier',

    // Studio Philosophy
    'philosophy.badge': 'Munich Studio Philosophy',
    'philosophy.title': 'Not Ordinary Detailing.',
    'philosophy.title_highlight': 'Pure Preservation Craft.',
    'philosophy.p1': 'At ATELIER Munich, we regard every automobile as a work of engineering art. Where commercial car washes and superficial factory prep leave traces of neglect, we begin with microscopic precision.',
    'philosophy.p2': 'In our climate-controlled cleanroom laboratory, we work with digital paint thickness mapping, infrared-cured quartz coatings, and certified XPEL paint protection films. Designed for sports cars that are driven — while retaining their concours value for decades.',
    'philosophy.cert1': 'XPEL® Elite Partner',
    'philosophy.cert2': 'Gyeon® Infinite Studio',
    'philosophy.cert3': 'Up to 30 Hours of Handcraft per Car',
    'philosophy.inspection_title': 'Inspection Protocol',
    'philosophy.inspection_desc': 'Submicron clearcoat analysis under 5000K daylight-spectrum illumination.',

    // Services
    'services.badge': 'Our Core Competencies',
    'services.title': 'Craftsmanship & High-End Technologies',
    'services.subtitle': 'Every vehicle is diagnosed individually in our cleanroom studio with microscopic scrutiny before treatment begins.',
    'services.view_details': 'Detailed View & Workflow',
    'services.all_services_link': 'View all services & technologies in detail',

    // Before/After
    'slider.badge': 'Interactive Comparison',
    'slider.title': 'Visual Transformation in Direct 50:50 View',
    'slider.subtitle': 'Experience the difference between weathered clearcoat loaded with wash swirls and a surgically corrected, molecularly coated finish.',
    'slider.drag_hint': 'Drag the slider horizontally to inspect the direct 50:50 before/after effect.',
    'slider.defect_removal': 'Defect Removal',
    'slider.gloss_increase': 'Gloss Increase',

    // Craftsmanship
    'craft.badge': 'Precision Standards',
    'craft.title': 'Engineering Discipline Meets Passion for Detail',
    'craft.subtitle': 'Bavarian engineering diligence fused with the most advanced surface refinement technologies of the global detailing elite.',

    // Selected Projects
    'projects.badge': 'References & Milestones',
    'projects.title': 'Selected Vehicle Projects',
    'projects.view_all': 'View Full Portfolio',
    'projects.case_study': 'Case Study',
    'projects.filter_all': 'All Vehicles',
    'projects.filter_ppf': 'Paint Protection (PPF)',
    'projects.filter_ceramic': 'Ceramic Coating',
    'projects.filter_correction': 'Paint Correction',
    'projects.filter_supercar': 'Supercars & Hypercars',
    'projects.filter_interior': 'Interior',
    'projects.search_placeholder': 'Search vehicles (e.g. GT3, M3, AMG)...',
    'projects.no_results': 'No vehicles found matching your criteria.',
    'projects.reset_filter': 'Reset Filter',

    // Calculator
    'calc.badge': 'Interactive Cost Estimator',
    'calc.title': 'Transparent Vehicle-Based Estimation',
    'calc.subtitle': 'Select your vehicle class, refinement package, and optional add-ons for an instant indicative estimate.',
    'calc.vat_info': 'Prices incl. 19% German VAT & Certificate',
    'calc.step1': '1. Choose Vehicle Class',
    'calc.step2': '2. Select Core Treatment Package',
    'calc.step3': '3. Current Paint Condition',
    'calc.step4': '4. Optional Add-On Modules',
    'calc.summary_title': 'Calculation Summary',
    'calc.vehicle_class': 'Vehicle Class:',
    'calc.treatment': 'Treatment:',
    'calc.addons': 'Selected Add-Ons:',
    'calc.duration': 'Estimated Duration:',
    'calc.total_label': 'Indicative Total (gross)',
    'calc.total_note': '*Binding fixed quote after in-studio paint thickness assessment in Munich.',
    'calc.cta': 'Inquire With This Configuration',

    // Testimonials
    'testi.badge': 'Client Trust & Reviews',
    'testi.title': 'Endorsements from Discerning Collectors',
    'testi.subtitle': 'Discretion, surgical diligence, and long-term asset value protection for sports car owners.',

    // CTA Banner
    'cta.badge': 'Personal Consultation in Munich',
    'cta.title': 'Give your automobile the protection it deserves.',
    'cta.subtitle': 'We take time for an individual paint thickness inspection and custom protection strategy at our studio. Book an introductory meeting or request your tailored proposal.',
    'cta.btn_book': 'Request Consultation',
    'cta.benefit1': 'Non-binding on-site inspection',
    'cta.benefit2': 'Discrete private bays',
    'cta.benefit3': 'Official manufacturer warranties',

    // Footer
    'footer.manifesto': 'Munich studio for advanced paint correction, certified XPEL paint protection film (PPF), and molecular ceramic coatings. Submicron precision for enthusiasts and collectors across Europe.',
    'footer.status': 'Bookings available for Season 2026/2027',
    'footer.services': 'Services',
    'footer.navigation': 'Navigation',
    'footer.contact': 'Studio Munich',
    'footer.hours_title': 'Hours',
    'footer.hours_week': 'Mon – Fri: 08:30 – 18:30',
    'footer.hours_sat': 'Saturday: By prior appointment',
    'footer.hours_sun': 'Sunday: Closed',
    'footer.demo_disclaimer': 'Portfolio Concept Notice: This website is a fictional commercial design study showcasing premium digital automotive brand architecture. Brand names (Porsche, BMW, Mercedes-Benz, Ferrari, XPEL, Gyeon) are used solely for illustrative demonstration purposes.',
    'footer.rights': 'All rights reserved.',

    // Booking page
    'book.badge': 'Exclusive Consultation',
    'book.title': 'Appointment & Consultation Request',
    'book.subtitle': 'Share your vehicle details and preferences with us. We will analyze your requirements and get back to you within 24 hours with a tailored refinement concept.',
    'book.online_estimate': 'Transferred Online Estimate:',
    'book.step1': '1. Vehicle Specifications',
    'book.brand': 'Make / Manufacturer *',
    'book.model': 'Model & Series *',
    'book.year': 'Year of Manufacture',
    'book.mileage': 'Mileage (approx.)',
    'book.condition': 'Current Paint Condition / History',
    'book.step2': '2. Desired Refinement Services *',
    'book.step2_sub': 'Select one or multiple modules.',
    'book.transport_title': 'Enclosed Single-Car Carrier',
    'book.transport_desc': 'Discreet pick-up and delivery in an enclosed specialty trailer',
    'book.transport_yes': 'Yes, requested',
    'book.transport_no': 'Self-delivery to Munich',
    'book.step3': '3. Contact Details & Preferred Date',
    'book.pref_date': 'Preferred Timeframe / Date',
    'book.city': 'City / Location of Vehicle',
    'book.first_name': 'First Name',
    'book.last_name': 'Last Name *',
    'book.email': 'Email Address *',
    'book.phone': 'Phone Number for Callback *',
    'book.notes': 'Special Requests, Notes, or Trackday Usage',
    'book.consent': 'I have read the Privacy Policy and agree that my details may be collected and processed to handle my inquiry.',
    'book.submit': 'Submit Consultation Request',
    'book.discretion': 'Discretion guaranteed. Your personal information is handled strictly confidentially and never shared with third parties.',

    // Contact page
    'contact.badge': 'Studio Munich-North',
    'contact.title': 'Contact & Directions',
    'contact.subtitle': 'Do you have questions regarding our technologies, pricing, or would you like to schedule an in-studio inspection? We look forward to hearing from you.',
    'contact.studio_info': 'Studio Information',
    'contact.address_label': 'Address',
    'contact.phone_label': 'Phone',
    'contact.email_label': 'Email',
    'contact.hours_label': 'Opening Hours',
    'contact.directions_title': 'Directions & Access',
    'contact.directions_desc': 'Our studio is conveniently located in the north of Munich, just off the A9 (Munich-Frankfurter Ring exit) and the A99. Situated right near Motorworld Munich.',
    'contact.feature1': '10 min from Mittlerer Ring',
    'contact.feature2': '25 min from Munich Airport (MUC)',
    'contact.feature3': 'Dedicated video-monitored client parking',
    'contact.form_title': 'Send a Message to the Studio',
    'contact.form_sub': 'We handle every inquiry with highest priority and will reply promptly.',
    'contact.subject_label': 'Subject',
    'contact.message_label': 'Your Message *',
    'contact.send_btn': 'Send Message',
    'contact.success_title': 'Thank you for your message!',
    'contact.success_desc': 'Your message to ATELIER Studio Munich was received. (Portfolio Demo: No real email was dispatched).',
    'contact.send_another': 'Send Another Message',

    // Comparison
    'comp.badge': 'Expert Comparison',
    'comp.title': 'Technology Comparison: Which Protection Fits Your Needs?',
    'comp.subtitle': 'Choosing the right protection depends on your vehicle usage, driving profile, and long-term preservation goals.',
    'comp.criteria': 'Protection Criterion',
    'comp.ppf_col': 'XPEL PPF Film',
    'comp.ceramic_col': 'Ceramic Coating',
    'comp.wax_col': 'Traditional Wax',
    'comp.recommendation_title': 'Master Detailer Recommendation:',
    'comp.recommendation_text': 'For sports cars like Porsche GT3 or BMW M, we recommend the Hybrid Package: PPF on the high-impact front and rocker panels, combined with multi-layer ceramic on the rest of the body.',

    // Common
    'common.duration': 'Duration:',
    'common.indicative': 'Indicative Investment:',
    'common.from': 'from',
    'common.hours': 'hours',
    'common.days': 'days',
    'common.workdays': 'workdays',
  },
  de: {
    // Nav
    'nav.home': 'Startseite',
    'nav.services': 'Leistungen',
    'nav.projects': 'Projekte',
    'nav.pricing': 'Preise',
    'nav.about': 'Über Uns',
    'nav.contact': 'Kontakt',
    'nav.book': 'Termin Anfragen',
    'nav.studio_tag': 'Studio München',
    'nav.certified': 'Zertifiziertes Studio',

    // Hero
    'hero.badge': 'Manufaktur für Fahrzeugveredelung · München',
    'hero.title_pre': 'Perfektion im',
    'hero.title_highlight': 'Submikron-Bereich.',
    'hero.subtitle': 'Chirurgische Lackkorrektur, zertifizierter XPEL® Steinschlagschutz (PPF) und molekulare Keramikversiegelung. Konzipiert für Sportwagen, Hypercars und automobile Sammlerstücke in München.',
    'hero.cta_book': 'Beratungstermin vereinbaren',
    'hero.cta_services': 'Leistungen entdecken',
    'hero.highlight_1_title': '10 Jahre Garantie',
    'hero.highlight_1_sub': 'Offizieller XPEL Elite Installer',
    'hero.highlight_2_title': '98% Defektfreiheit',
    'hero.highlight_2_sub': 'Chirurgische Mehrstufen-Korrektur',
    'hero.highlight_3_title': '5000K Lichtlabor',
    'hero.highlight_3_sub': 'HEPA-gefilterte Reinraum-Kabine',
    'hero.highlight_4_title': 'Diskreter Transport',
    'hero.highlight_4_sub': 'Geschlossener Hol- & Bringservice',

    // Studio Philosophy
    'philosophy.badge': 'Studio-Philosophie München',
    'philosophy.title': 'Keine gewöhnliche Aufbereitung.',
    'philosophy.title_highlight': 'Reine Konservierungs-Kunst.',
    'philosophy.p1': 'Im ATELIER München betrachten wir jedes Fahrzeug als automobiles Kunstwerk. Wo industrielle Waschanlagen und oberflächliche Standard-Polituren Spuren von Vernachlässigung hinterlassen, beginnen wir mit mikroskopischer Sorgfalt.',
    'philosophy.p2': 'In unserem speziell ausgeleuchteten Reinraum-Labor arbeiten wir mit digitaler Schichtdicken-Kartierung, thermisch aushärtenden Keramiksystemen und zertifizierten XPEL-Steinschlagschutzfolien. Für Sportwagen, die gefahren werden – und ihren Wert dennoch über Jahrzehnte bewahren.',
    'philosophy.cert1': 'XPEL® Elite Partner',
    'philosophy.cert2': 'Gyeon® Infinite Studio',
    'philosophy.cert3': 'Bis zu 30 Std. Handarbeit je Fahrzeug',
    'philosophy.inspection_title': 'Inspektions-Prüfung',
    'philosophy.inspection_desc': 'Messung des Klarlackabtrags im Submikron-Bereich unter 5000K daylight-illumination.',

    // Services
    'services.badge': 'Unsere Kernkompetenzen',
    'services.title': 'Handwerkskunst & High-End Technologien',
    'services.subtitle': 'Jedes Fahrzeug wird nach individueller Begutachtung im Reinraum-Studio mit mikroskopischer Genauigkeit behandelt.',
    'services.view_details': 'Detailansicht & Ablauf',
    'services.all_services_link': 'Alle Leistungen & Technologien im Detail ansehen',

    // Before/After
    'slider.badge': 'Interaktiver Vergleich',
    'slider.title': 'Die optische Transformation im direkten 50:50 Vergleich',
    'slider.subtitle': 'Erleben Sie den Unterschied zwischen verwittertem Klarlack mit tiefen Waschkratzern und einem chirurgisch korrigierten, molekular versiegelten Finish.',
    'slider.drag_hint': 'Ziehen Sie den Schieberegler horizontal, um den direkten 50:50 Vorher-/Nachher-Effekt zu prüfen.',
    'slider.defect_removal': 'Defektbeseitigung',
    'slider.gloss_increase': 'Glanzsteigerung',

    // Craftsmanship
    'craft.badge': 'Präzisionsstandards',
    'craft.title': 'Ingenieurskunst trifft Detailverliebtheit',
    'craft.subtitle': 'Traditionelle bayerische Ingenieursdisziplin vereint mit den modernsten Veredelungstechnologien der weltweiten Detailing-Elite.',

    // Selected Projects
    'projects.badge': 'Referenzen & Meilensteine',
    'projects.title': 'Ausgewählte Veredelungs-Projekte',
    'projects.view_all': 'Gesamtes Portfolio ansehen',
    'projects.case_study': 'Fallstudie',
    'projects.filter_all': 'Alle Fahrzeuge',
    'projects.filter_ppf': 'Lackschutz (PPF)',
    'projects.filter_ceramic': 'Keramikversiegelung',
    'projects.filter_correction': 'Lackkorrektur',
    'projects.filter_supercar': 'Supercars & Hypercars',
    'projects.filter_interior': 'Innenraum',
    'projects.search_placeholder': 'Fahrzeug suchen (z.B. GT3, M3)...',
    'projects.no_results': 'Keine Fahrzeuge gefunden, die Ihren Filterkriterien entsprechen.',
    'projects.reset_filter': 'Filter zurücksetzen',

    // Calculator
    'calc.badge': 'Interaktiver Preis-Kalkulator',
    'calc.title': 'Transparente Veredelungs-Kalkulation',
    'calc.subtitle': 'Wählen Sie Ihre Fahrzeugklasse, das gewünschte Veredelungspaket und Zusatzoptionen für eine unverbindliche Richtwert-Berechnung.',
    'calc.vat_info': 'Preise inkl. MwSt. & Zertifikat',
    'calc.step1': '1. Fahrzeugklasse wählen',
    'calc.step2': '2. Hauptbehandlung / Veredelungspaket',
    'calc.step3': '3. Aktueller Lackzustand',
    'calc.step4': '4. Sinnvolle Zusatzoptionen',
    'calc.summary_title': 'Kalkulationsübersicht',
    'calc.vehicle_class': 'Fahrzeugklasse:',
    'calc.treatment': 'Veredelung:',
    'calc.addons': 'Gewählte Zusatzmodule:',
    'calc.duration': 'Voraussichtliche Dauer:',
    'calc.total_label': 'Indikativer Richtwert (brutto)',
    'calc.total_note': '*Verbindlicher Festpreis nach Begutachtung der Lackschichtstärke im Studio München.',
    'calc.cta': 'Konfiguration unverbindlich anfragen',

    // Testimonials
    'testi.badge': 'Kundenstimmen & Vertrauen',
    'testi.title': 'Stimmen unserer anspruchsvollen Klienten',
    'testi.subtitle': 'Diskretion, kompromisslose Akribie und langfristiger Werterhalt für Sportwagen-Enthusiasten.',

    // CTA Banner
    'cta.badge': 'Persönliche Fachberatung im Studio München',
    'cta.title': 'Geben Sie Ihrem Fahrzeug den Schutz, den es verdient.',
    'cta.subtitle': 'Wir nehmen uns die Zeit für eine individuelle Schichtdicken- und Lackanalyse bei uns vor Ort. Vereinbaren Sie ein unverbindliches Erstgespräch oder fordern Sie Ihr persönliches Angebot an.',
    'cta.btn_book': 'Termin unverbindlich anfragen',
    'cta.benefit1': 'Unverbindliche Vor-Ort-Begutachtung',
    'cta.benefit2': 'Diskrete Einzelhallen',
    'cta.benefit3': 'Offizielle Herstellergarantien',

    // Footer
    'footer.manifesto': 'Manufaktur für anspruchsvollste Lackkorrektur, zertifizierten XPEL Steinschlagschutz (PPF) und molekulare Keramikversiegelung. Perfektion im Submikron-Bereich für Enthusiasten und Sammler in Bayern und ganz Europa.',
    'footer.status': 'Termine für Saison 2026/2027 verfügbar',
    'footer.services': 'Leistungen',
    'footer.navigation': 'Navigation',
    'footer.contact': 'Studio München',
    'footer.hours_title': 'Öffnungszeiten',
    'footer.hours_week': 'Mo – Fr: 08:30 – 18:30 Uhr',
    'footer.hours_sat': 'Samstag: Nach Vereinbarung',
    'footer.hours_sun': 'Sonntag: Geschlossen',
    'footer.demo_disclaimer': 'Hinweis zum Portfolio-Konzept: Diese Webseite ist eine fiktive Präsentationsstudie zur Veranschaulichung moderner digitaler Markenarchitektur im Luxus-Automobilbereich. Alle Markennamen (Porsche, BMW, Mercedes-Benz, Ferrari, XPEL, Gyeon) dienen rein illustrativen Zwecken.',
    'footer.rights': 'Alle Rechte vorbehalten.',

    // Booking page
    'book.badge': 'Exklusiver Beratungstermin',
    'book.title': 'Termin & Beratungsanfrage',
    'book.subtitle': 'Teilen Sie uns Ihre Fahrzeugdaten und Wünsche mit. Wir analysieren Ihren Bedarf und melden uns innerhalb von 24 Stunden mit einem detaillierten Veredelungskonzept.',
    'book.online_estimate': 'Übernommene Online-Schätzung:',
    'book.step1': '1. Fahrzeugspezifikationen',
    'book.brand': 'Hersteller / Marke *',
    'book.model': 'Modell & Baureihe *',
    'book.year': 'Baujahr',
    'book.mileage': 'Kilometerstand (ca.)',
    'book.condition': 'Aktueller Lackzustand / Vorgeschichte',
    'book.step2': '2. Gewünschte Veredelungsleistungen *',
    'book.step2_sub': 'Wählen Sie ein oder mehrere Module aus.',
    'book.transport_title': 'Geschlossener Einzeltransport',
    'book.transport_desc': 'Diskreter Hol- und Bringservice im geschlossenen Spezialauflieger',
    'book.transport_yes': 'Ja, gewünscht',
    'book.transport_no': 'Eigene Anlieferung',
    'book.step3': '3. Kontaktdaten & Wunschtermin',
    'book.pref_date': 'Wunschzeitraum / Datum',
    'book.city': 'Wohnort / Standort des Fahrzeugs',
    'book.first_name': 'Vorname',
    'book.last_name': 'Nachname *',
    'book.email': 'E-Mail-Adresse *',
    'book.phone': 'Telefonnummer für Rückfragen *',
    'book.notes': 'Besondere Wünsche oder Fragen',
    'book.consent': 'Ich habe die Datenschutzerklärung zur Kenntnis genommen und willige ein, dass meine Angaben zur Bearbeitung meiner Anfrage erhoben und verarbeitet werden.',
    'book.submit': 'Beratungstermin unverbindlich anfragen',
    'book.discretion': 'Diskretion garantiert. Ihre Daten werden vertraulich behandelt und niemals an Dritte weitergegeben.',

    // Contact page
    'contact.badge': 'Studio München-Nord',
    'contact.title': 'Kontakt & Anfahrt',
    'contact.subtitle': 'Haben Sie Fragen zu unseren Veredelungstechnologien, Preisen oder möchten Sie einen Besichtigungstermin im Studio vereinbaren? Wir freuen uns auf Ihren Kontakt.',
    'contact.studio_info': 'Studio-Informationen',
    'contact.address_label': 'Adresse',
    'contact.phone_label': 'Telefon',
    'contact.email_label': 'E-Mail',
    'contact.hours_label': 'Öffnungszeiten',
    'contact.directions_title': 'Anfahrt & Verkehrsanbindung',
    'contact.directions_desc': 'Unser Studio befindet sich verkehrsgünstig im Münchner Norden in direkter Reichweite der A9 (Ausfahrt München-Frankfurter Ring) sowie der A99. Unmittelbare Nachbarschaft zur Motorworld München.',
    'contact.feature1': '10 Min. vom Mittleren Ring',
    'contact.feature2': '25 Min. vom Flughafen München (MUC)',
    'contact.feature3': 'Eigene videoüberwachte Kundenparkplätze',
    'contact.form_title': 'Nachricht an das Studio senden',
    'contact.form_sub': 'Wir bearbeiten jede Anfrage mit höchster Priorität und antworten Ihnen verlässlich.',
    'contact.subject_label': 'Betreff',
    'contact.message_label': 'Ihre Nachricht *',
    'contact.send_btn': 'Nachricht absenden',
    'contact.success_title': 'Vielen Dank für Ihre Nachricht!',
    'contact.success_desc': 'Ihre Nachricht an das ATELIER Studio München wurde erfasst. (Portfolio-Demo: Es wurde keine reale E-Mail versendet).',
    'contact.send_another': 'Weitere Nachricht senden',

    // Comparison
    'comp.badge': 'Experten-Vergleich',
    'comp.title': 'Technologie-Vergleich: Welcher Schutz passt zu Ihnen?',
    'comp.subtitle': 'Die Wahl der optimalen Schutzmethode hängt vom Einsatzzweck, Fahrprofil und individuellem Werterhaltungsziel ab.',
    'comp.criteria': 'Schutzkriterium',
    'comp.ppf_col': 'XPEL PPF Folie',
    'comp.ceramic_col': 'Keramikversiegelung',
    'comp.wax_col': 'Konventionelles Wachs',
    'comp.recommendation_title': 'Empfehlung unserer Meister:',
    'comp.recommendation_text': 'Bei Sportwagen wie Porsche GT3 oder BMW M empfehlen wir das Hybrid-Paket: PPF an Front & Schwellern kombiniert mit Keramik auf dem Rest.',

    // Common
    'common.duration': 'Dauer:',
    'common.indicative': 'Richtwert:',
    'common.from': 'ab',
    'common.hours': 'Stunden',
    'common.days': 'Tage',
    'common.workdays': 'Werktage',
  },
  ru: {
    // Nav
    'nav.home': 'Главная',
    'nav.services': 'Услуги',
    'nav.projects': 'Проекты',
    'nav.pricing': 'Цены',
    'nav.about': 'О студии',
    'nav.contact': 'Контакты',
    'nav.book': 'Запись на консультацию',
    'nav.studio_tag': 'Студия Мюнхен',
    'nav.certified': 'Сертифицированная студия',

    // Hero
    'hero.badge': 'Мануфактура детейлинга и защиты ЛКП · Мюнхен',
    'hero.title_pre': 'Совершенство в',
    'hero.title_highlight': 'субмикронном диапазоне.',
    'hero.subtitle': 'Хирургическая коррекция лакокрасочного покрытия, сертифицированная антигравийная пленка XPEL® (PPF) и молекулярные керамические составы. Разработано для суперкаров и коллекционных автомобилей в Мюнхене.',
    'hero.cta_book': 'Записаться на консультацию',
    'hero.cta_services': 'Изучить услуги',
    'hero.highlight_1_title': '10 лет гарантии',
    'hero.highlight_1_sub': 'Официальный установщик XPEL Elite',
    'hero.highlight_2_title': '98% устранения дефектов',
    'hero.highlight_2_sub': 'Многоэтапная хирургическая полировка',
    'hero.highlight_3_title': 'Лаборатория 5000K',
    'hero.highlight_3_sub': 'Чистая комната с HEPA-фильтрацией',
    'hero.highlight_4_title': 'Конфиденциальная доставка',
    'hero.highlight_4_sub': 'Закрытый эвакуатор для одного авто',

    // Studio Philosophy
    'philosophy.badge': 'Философия студии в Мюнхене',
    'philosophy.title': 'Не рядовой детейлинг.',
    'philosophy.title_highlight': 'Чистое искусство сохранения.',
    'philosophy.p1': 'В ATELIER Мюнхен мы относимся к каждому автомобилю как к инженерному шедевру. Там, где автоматические мойки и дилерская предпродажная подготовка оставляют микроцарапины, мы начинаем с микроскопической точности.',
    'philosophy.p2': 'В нашей климатической лаборатории с чистым воздухом мы проводим ультразвуковое картографирование толщины лака, наносим запекаемые инфракрасным светом кварцевые составы и сертифицированные полиуретановые пленки XPEL. Создано для спорткаров, которые эксплуатируются по назначению и сохраняют коллекционную ценность.',
    'philosophy.cert1': 'Партнер XPEL® Elite',
    'philosophy.cert2': 'Студия Gyeon® Infinite',
    'philosophy.cert3': 'До 30 часов ручной работы на автомобиль',
    'philosophy.inspection_title': 'Протокол инспекции',
    'philosophy.inspection_desc': 'Субмикронный анализ толщины лака под освещением дневного спектра 5000K CRI 98+.',

    // Services
    'services.badge': 'Ключевые компетенции',
    'services.title': 'Мастерство и передовые технологии',
    'services.subtitle': 'Каждый автомобиль проходит индивидуальную диагностику в чистой лаборатории перед началом работ.',
    'services.view_details': 'Детали услуги и этапы',
    'services.all_services_link': 'Посмотреть все услуги и технологии',

    // Before/After
    'slider.badge': 'Интерактивное сравнение',
    'slider.title': 'Трансформация в прямом сравнении 50:50',
    'slider.subtitle': 'Оцените разницу между затертым лаком с «паутиной» от моек и хирургически восстановленным, кварцевым зеркальным финишем.',
    'slider.drag_hint': 'Перемещайте ползунок по горизонтали для наглядного сравнения До и После.',
    'slider.defect_removal': 'Устранение дефектов',
    'slider.gloss_increase': 'Прирост блеска',

    // Craftsmanship
    'craft.badge': 'Стандарты точности',
    'craft.title': 'Инженерная дисциплина и внимание к деталям',
    'craft.subtitle': 'Баварская педантичность в сочетании с передовыми мировыми технологиями детейлинга.',

    // Selected Projects
    'projects.badge': 'Портфолио и кейсы',
    'projects.title': 'Избранные проекты студии',
    'projects.view_all': 'Смотреть весь архив',
    'projects.case_study': 'Кейс проекта',
    'projects.filter_all': 'Все автомобили',
    'projects.filter_ppf': 'Защитная пленка (PPF)',
    'projects.filter_ceramic': 'Керамика 9H',
    'projects.filter_correction': 'Коррекция ЛКП',
    'projects.filter_supercar': 'Суперкары',
    'projects.filter_interior': 'Интерьер',
    'projects.search_placeholder': 'Поиск автомобиля (напр. GT3, M3, AMG)...',
    'projects.no_results': 'Автомобили по заданным критериям не найдены.',
    'projects.reset_filter': 'Сбросить фильтр',

    // Calculator
    'calc.badge': 'Интерактивный калькулятор',
    'calc.title': 'Прозрачный расчет стоимости',
    'calc.subtitle': 'Выберите класс автомобиля, пакет детейлинга и опции для моментального предварительного расчета.',
    'calc.vat_info': 'Цены в EUR с учетом 19% НДС Германии',
    'calc.step1': '1. Выберите класс автомобиля',
    'calc.step2': '2. Основной пакет детейлинга',
    'calc.step3': '3. Текущее состояние лака',
    'calc.step4': '4. Дополнительные опции',
    'calc.summary_title': 'Сводка расчета',
    'calc.vehicle_class': 'Класс автомобиля:',
    'calc.treatment': 'Услуга:',
    'calc.addons': 'Доп. модули:',
    'calc.duration': 'Ориентировочный срок:',
    'calc.total_label': 'Предварительная стоимость (брутто)',
    'calc.total_note': '*Итоговая стоимость фиксируется после замера толщины лака в студии в Мюнхене.',
    'calc.cta': 'Отправить заявку с этой конфигурацией',

    // Testimonials
    'testi.badge': 'Отзывы клиентов',
    'testi.title': 'Мнения владельцев суперкаров',
    'testi.subtitle': 'Конфиденциальность, хирургическая точность и долгосрочное сохранение стоимости активов.',

    // CTA Banner
    'cta.badge': 'Персональная консультация в Мюнхене',
    'cta.title': 'Обеспечьте вашему автомобилю защиту высочайшего уровня.',
    'cta.subtitle': 'Мы уделим время для индивидуального замера лака и разработки стратегии защиты в студии. Запишитесь на первичный осмотр или запросите расчет.',
    'cta.btn_book': 'Записаться на консультацию',
    'cta.benefit1': 'Бесплатный осмотр в студии',
    'cta.benefit2': 'Закрытые изолированные боксы',
    'cta.benefit3': 'Официальные гарантии производителя',

    // Footer
    'footer.manifesto': 'Мюнхенская студия передовой коррекции ЛКП, сертифицированной антигравийной пленки XPEL (PPF) и молекулярных керамических покрытий. Субмикронная точность для энтузиастов и коллекционеров по всей Европе.',
    'footer.status': 'Открыта запись на сезон 2026/2027',
    'footer.services': 'Услуги',
    'footer.navigation': 'Навигация',
    'footer.contact': 'Студия в Мюнхене',
    'footer.hours_title': 'Часы работы',
    'footer.hours_week': 'Пн – Пт: 08:30 – 18:30',
    'footer.hours_sat': 'Суббота: По предварительной записи',
    'footer.hours_sun': 'Воскресенье: Выходной',
    'footer.demo_disclaimer': 'Примечание к концепту: Данный сайт является дизайн-концептом для демонстрации премиальной цифровой архитектуры. Названия брендов (Porsche, BMW, Mercedes-Benz, Ferrari, XPEL, Gyeon) используются исключительно в иллюстративных целях.',
    'footer.rights': 'Все права защищены.',

    // Booking page
    'book.badge': 'Эксклюзивная запись',
    'book.title': 'Запись и консультация',
    'book.subtitle': 'Укажите данные вашего автомобиля и желаемые услуги. Мы проанализируем параметры и свяжемся с вами в течение 24 часов с индивидуальным планом работ.',
    'book.online_estimate': 'Перенесенная оценка из калькулятора:',
    'book.step1': '1. Параметры автомобиля',
    'book.brand': 'Марка / Производитель *',
    'book.model': 'Модель и серия *',
    'book.year': 'Год выпуска',
    'book.mileage': 'Пробег (прибл.)',
    'book.condition': 'Состояние ЛКП / история',
    'book.step2': '2. Желаемые услуги *',
    'book.step2_sub': 'Выберите один или несколько модулей.',
    'book.transport_title': 'Закрытый эвакуатор на 1 автомобиль',
    'book.transport_desc': 'Конфиденциальная доставка автомобиля в закрытом специальном прицепе',
    'book.transport_yes': 'Да, включить в расчет',
    'book.transport_no': 'Самостоятельная доставка в студию',
    'book.step3': '3. Контактные данные и желаемые сроки',
    'book.pref_date': 'Желаемый период / дата',
    'book.city': 'Город / местонахождение автомобиля',
    'book.first_name': 'Имя',
    'book.last_name': 'Фамилия *',
    'book.email': 'Электронная почта *',
    'book.phone': 'Номер телефона для связи *',
    'book.notes': 'Особые пожелания, трек-дни или тюнинг',
    'book.consent': 'Я ознакомлен с Политикой конфиденциальности и согласен на обработку персональных данных.',
    'book.submit': 'Отправить заявку на консультацию',
    'book.discretion': 'Конфиденциальность гарантирована. Данные не передаются третьим лицам.',

    // Contact page
    'contact.badge': 'Студия Мюнхен-Север',
    'contact.title': 'Контакты и схема проезда',
    'contact.subtitle': 'У вас есть вопросы о технологиях, ценах или вы хотите записаться на осмотр в студии? Будем рады вашему обращению.',
    'contact.studio_info': 'Информация о студии',
    'contact.address_label': 'Адрес',
    'contact.phone_label': 'Телефон',
    'contact.email_label': 'Email',
    'contact.hours_label': 'Часы работы',
    'contact.directions_title': 'Схема проезда',
    'contact.directions_desc': 'Наша студия удобно расположена на севере Мюнхена, рядом с автобаном A9 (съезд München-Frankfurter Ring) и A99, в непосредственной близости от Motorworld München.',
    'contact.feature1': '10 мин от Mittlerer Ring',
    'contact.feature2': '25 мин от аэропорта Мюнхена (MUC)',
    'contact.feature3': 'Охраняемая парковка с видеонаблюдением',
    'contact.form_title': 'Отправить сообщение в студию',
    'contact.form_sub': 'Мы оперативно обрабатываем каждое обращение и ответим в кратчайшие сроки.',
    'contact.subject_label': 'Тема сообщения',
    'contact.message_label': 'Ваше сообщение *',
    'contact.send_btn': 'Отправить сообщение',
    'contact.success_title': 'Спасибо за обращение!',
    'contact.success_desc': 'Ваше сообщение принято студией ATELIER в Мюнхене. (Демо-режим: отправка не совершалась).',
    'contact.send_another': 'Отправить еще сообщение',

    // Comparison
    'comp.badge': 'Сравнение технологий',
    'comp.title': 'Какая защита подойдет именно вам?',
    'comp.subtitle': 'Выбор защитного решения зависит от режима эксплуатации автомобиля и целей сохранения стоимости.',
    'comp.criteria': 'Критерий защиты',
    'comp.ppf_col': 'Пленка XPEL PPF',
    'comp.ceramic_col': 'Керамика 9H',
    'comp.wax_col': 'Традиционный воск',
    'comp.recommendation_title': 'Рекомендация мастеров:',
    'comp.recommendation_text': 'Для спорткаров (Porsche GT3, BMW M) мы рекомендуем Гибридный пакет: PPF на ударную переднюю часть и пороги в сочетании с керамикой на остальные элементы.',

    // Common
    'common.duration': 'Срок:',
    'common.indicative': 'Ориентировочно:',
    'common.from': 'от',
    'common.hours': 'часов',
    'common.days': 'дней',
    'common.workdays': 'раб. дней',
  }
};

const LanguageContext = createContext<LanguageContextType>({
  lang: 'en',
  setLang: () => {},
  t: (key: string) => key,
});

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLangState] = useState<Language>(() => {
    const saved = localStorage.getItem('atelier_lang');
    return (saved === 'de' || saved === 'en' || saved === 'ru') ? (saved as Language) : 'en';
  });

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    localStorage.setItem('atelier_lang', newLang);
  };

  const t = (key: string): string => {
    return translations[lang]?.[key] || translations['en']?.[key] || key;
  };

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
