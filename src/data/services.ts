import type { Service } from '../types';

export const servicesDataEn: Service[] = [
  {
    id: 'ppf',
    slug: 'ppf-steinschlagschutz',
    title: 'Paint Protection Film (PPF)',
    subtitle: 'Invisible High-Performance Protection Against Stone Chips & Scratches',
    shortDescription: 'State-of-the-art self-healing polyurethane film (XPEL Ultimate Plus & Fusion) with 10-year warranty. Precision pre-cut without blades on the vehicle.',
    fullDescription: 'Paint Protection Film (PPF) represents the most advanced physical defense for modern sports cars and luxury finishes. In our Munich cleanroom studio, we apply factory-certified XPEL films utilizing computer-generated pre-cut patterns (DAP system). This completely avoids razor blades touching your vehicle paint. The advanced elastomeric surface exhibits thermal self-healing capabilities: micro-scratches and wash swirls vanish under heat (sunlight or warm water).',
    heroImage: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=2000&auto=format&fit=crop',
    duration: '3 to 5 workdays',
    indicativePrice: 'From 1,850 €',
    startingPrice: 1850,
    features: [
      'Certified XPEL® Elite Installers in Munich',
      'Computer-guided DAP plotter system — blade-free application',
      'Thermal self-healing surface under heat exposure',
      'High-gloss or stealth satin matte finish available',
      '10-year manufacturer warranty against yellowing and cracking',
      'Integrated ceramic topcoat with XPEL Fusion'
    ],
    processSteps: [
      {
        step: '01',
        title: 'Decontamination Wash & Paint Analysis',
        description: 'Complete multi-stage chemical and mechanical decontamination, clay bar treatment, iron fallout removal, and digital thickness mapping (DeFelsko PosiTector).'
      },
      {
        step: '02',
        title: 'Single-Stage High-Gloss Prep',
        description: 'Elimination of micro-haze to ensure a flawless, crystal-clear reflection is permanently sealed under the film.'
      },
      {
        step: '03',
        title: 'Cleanroom Precision Plotting',
        description: 'Pattern custom-plotting via XPEL DAP network with extended wrapped edges for 100% invisible seams.'
      },
      {
        step: '04',
        title: 'Dust-Free Cleanroom Wet Application',
        description: 'Installed inside our climate- and humidity-controlled studio cleanroom with specialized slip solutions.'
      },
      {
        step: '05',
        title: 'Edge Wrapping & Infrared Curing',
        description: 'Full edge-tuck, thermal stabilization, and final 24-hour inspection under 5000K daylight illumination.'
      }
    ],
    benefits: [
      'Maximized resale value for rare PTS colors and limited production series',
      'Absolute protection against high-speed autobahn stone chips',
      'Resistant to bug splatter, bird droppings, and aggressive road salts',
      'Zero orange peel distortion for pure visual clarity'
    ],
    recommendedFor: 'New vehicles, sports cars (Porsche 911 GT3, AMG GT, BMW M), and special matte or individual paint finishes.',
    certifications: ['XPEL Factory Certified Installer', 'DAP Precision Cut Studio'],
    galleryImages: [
      'https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=1400&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1400&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=1400&auto=format&fit=crop'
    ]
  },
  {
    id: 'keramik',
    slug: 'keramikversiegelung',
    title: 'Ceramic Coating',
    subtitle: 'Certified 9H Si02 Quartz Shield with Immense Depth of Gloss',
    shortDescription: 'Permanent molecular bond with the clearcoat. Unmatched hydrophobic lotus effect, UV stability, and self-cleaning performance for up to 5 years.',
    fullDescription: 'Professional ceramic coating is not a temporary wax, but a true liquid glass shield (Silicon Dioxide Si02 / SiC). Nanoparticles forge a covalent bond with the clearcoat. The result is a glass-like armor (up to 9H pencil hardness) protecting against UV fading, road salts, and acid rain. The famous "liquid glass" wet-look delivers color depth that far exceeds showroom delivery.',
    heroImage: 'https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?q=80&w=2000&auto=format&fit=crop',
    duration: '2 to 3 workdays',
    indicativePrice: 'From 1,250 €',
    startingPrice: 1250,
    features: [
      'Certified Gyeon Quartz & Modesta Specialist',
      'Permanent molecular quartz matrix up to 9H hardness',
      'Extreme water contact angle > 115° for effortless sheeting',
      'Short-wave infrared curing (IR-Curing) before release',
      'Guards against UV oxidation, brake dust, and industrial fallout',
      'Official warranty certificate & digital service passport'
    ],
    processSteps: [
      {
        step: '01',
        title: 'Multi-Stage Decontamination',
        description: 'Alkaline pre-foam bath, iron particle neutralizer, mechanical claying, and complete surface degreasing.'
      },
      {
        step: '02',
        title: 'Paint Correction for Defect Removal',
        description: 'Pre-requisite for any coating: eliminating all swirls and scratches, as ceramic permanently locks in the surface condition.'
      },
      {
        step: '03',
        title: 'Isopropanol Panel Wipe',
        description: 'Residue-free removal of polishing oils to guarantee direct covalent bonding to clearcoat molecules.'
      },
      {
        step: '04',
        title: 'Cross-Hatch Application',
        description: 'Layering base coat and ultra-hydrophobic topcoat in a temperature-controlled environment.'
      },
      {
        step: '05',
        title: 'Infrared Thermal Baking',
        description: 'Targeted short-wave infrared baking with digitally monitored pyrometers for full cross-linking hardness.'
      }
    ],
    benefits: [
      'Permanent glass-like wet look depth',
      'Enormous time savings during maintenance hand-washes',
      'Shield against chemical etching from tree sap and insect acid',
      'Documented provenance supporting collector value'
    ],
    recommendedFor: 'Enthusiasts and daily drivers desiring permanent gloss depth and effortless washing.',
    certifications: ['Gyeon Certified Detailer', 'ServFaces Authorized Studio'],
    galleryImages: [
      'https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?q=80&w=1400&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=1400&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=1400&auto=format&fit=crop'
    ]
  },
  {
    id: 'lackkorrektur',
    slug: 'lackkorrektur',
    title: 'Paint Correction & Polishing',
    subtitle: 'Surgical Precision for Deep, Hologram-Free Mirror Reflection',
    shortDescription: 'Multi-stage machine polishing guided by digital coating thickness gauges. Eliminates up to 98% of all wash swirls, haze, and buffer trails.',
    fullDescription: 'Paint correction is the beating heart of genuine detailing craft. Under our 5000K daylight LED inspection lights (CRI 98+), every flaw is revealed. Using precision orbital and rotary polishers (Rupes BigFoot, Flex) with micro-abrasive compounds, we work within the submicron range. We remove only the bare minimum of clearcoat (typically 1-3 µm) to safeguard paint longevity while eliminating swirls, bird etching, and buffer trails.',
    heroImage: 'https://images.unsplash.com/photo-1607860108855-64acf2078ed9?q=80&w=2000&auto=format&fit=crop',
    duration: '1 to 3 workdays',
    indicativePrice: 'From 890 €',
    startingPrice: 890,
    features: [
      'Digital paint thickness mapping across 80+ panel points',
      'Multi-stage correction using Rupes® BigFoot dual-action systems',
      'Guaranteed 85% to 98% surface defect elimination',
      '100% hologram- and buffer-trail-free finish',
      'Edge masking of all rubbers, plastics, emblems, and sensors',
      'Visual verification across 6 calibrated color temperatures'
    ],
    processSteps: [
      {
        step: '01',
        title: 'Clearcoat Diagnostics',
        description: 'Multi-point ultrasound and magnetic gauge measurement to determine original vs. repainted panels and clearcoat reserves.'
      },
      {
        step: '02',
        title: 'Precision Masking',
        description: 'Careful taping of all plastic moldings, rubber seals, and panel gaps with 3M automotive detailing tape.'
      },
      {
        step: '03',
        title: 'Heavy Cutting Phase',
        description: 'Defect leveling of deeper scratches, oxidation, and acid etching with microfiber pads and micro-abrasive compounds.'
      },
      {
        step: '04',
        title: 'Medium Refining Phase',
        description: 'Elimination of compound micro-marring to restore true optical clarity and sharp reflections.'
      },
      {
        step: '05',
        title: 'Jeweling Ultra-Finish',
        description: 'Ultra-fine jewel polishing on soft foam pads to achieve maximum optical gloss and complete hologram freedom.'
      }
    ],
    benefits: [
      'Paintwork looks better than factory new delivery',
      'Liberation from automatic car wash swirls and dull gray haze',
      'Fundamental prerequisite before applying ceramic or PPF',
      'Significant value appreciation for modern classics and sports cars'
    ],
    recommendedFor: 'Vehicles with visible wash scratches, older collector sports cars, and uncompromising perfectionists.',
    certifications: ['Rupes BigFoot Certified Center', 'IDA Certified Detailer'],
    galleryImages: [
      'https://images.unsplash.com/photo-1607860108855-64acf2078ed9?q=80&w=1400&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?q=80&w=1400&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=1400&auto=format&fit=crop'
    ]
  },
  {
    id: 'interior',
    slug: 'innenraumaufbereitung',
    title: 'Bespoke Interior & Leather Spa',
    subtitle: 'Swissvax Leather Conditioning & Concours-Grade Alcantara Care',
    shortDescription: 'Gentle deep purification and preservation of fine natural materials. Swissvax leather treatment, Alcantara de-pilling, and ozone air sanitization.',
    fullDescription: 'The interior is your personal tactile bond with the machine. Genuine leather, fine Alcantara, open-pore woods, and high-gloss carbon fiber require treatment matching their worth. Rather than greasy silicone sprays, we apply natural leather oils, pH-neutral cleansing foams, and horsehair brush techniques. The result: an interior that feels matte, supple, naturally grippy, and smells factory-fresh.',
    heroImage: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000&auto=format&fit=crop',
    duration: '1 to 2 workdays',
    indicativePrice: 'From 590 €',
    startingPrice: 590,
    features: [
      'Formulated according to Swissvax handcrafted atelier traditions',
      'Matte replenishment of Nappa, Semi-Aniline, and Merino leathers',
      'Deep dry-steam extraction and Alcantara fiber rejuvenation',
      'Antibacterial ozone air-conditioning neutralization',
      'Seam stitching protection & anti-dye denim transfer barrier',
      'Scratch-free polishing of piano-black and carbon consoles'
    ],
    processSteps: [
      {
        step: '01',
        title: 'Deep Dry Vacuuming & Crevice Purge',
        description: 'Blowing out vents, rails, and seams with compressed air and soft natural horsehair detailing brushes.'
      },
      {
        step: '02',
        title: 'Material-Specific Leather Cleansing',
        description: 'Extracting oils, body oils, and grime with pH-neutral active foam without saturating the leather core.'
      },
      {
        step: '03',
        title: 'Alcantara Fiber De-Pilling',
        description: 'Shaving pills and gentle wet extraction to restore the velvety, uniform factory texture.'
      },
      {
        step: '04',
        title: 'Leather Sealing & Nourishment',
        description: 'Impregnation against denim transfer plus enrichment with natural lipid oils for UV and crease flexibility.'
      },
      {
        step: '05',
        title: 'Ozone Sanitization & Glass Polish',
        description: 'Active odor elimination and crystal-clear streak-free window cleaning into every corner.'
      }
    ],
    benefits: [
      'Original satin matte finish without artificial sheen',
      'Permanent barrier protecting light leather from blue jeans transfer',
      'Crisp, neutral luxury scent without chemical perfume',
      'Maintains suppleness and crack-resistance for decades'
    ],
    recommendedFor: 'Owners of bespoke interiors (BMW Individual, Porsche Exclusive leather, AMG Manufaktur) and fine vintage cockpits.',
    certifications: ['Swissvax Certified Specialist', 'Colourlock Leather Technology Partner'],
    galleryImages: [
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1400&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1563720223185-11003d516935?q=80&w=1400&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=1400&auto=format&fit=crop'
    ]
  },
  {
    id: 'signature',
    slug: 'premium-detailing',
    title: 'Signature Concours Detailing',
    subtitle: 'The Holistic Masterpiece for Collectors & Connoisseurs',
    shortDescription: 'The ultimate pinnacle combining 3-stage concours paint correction, triple ceramic coatings, wheel-off detailing, glass sealing, and full interior curation.',
    fullDescription: 'Our Signature Detailing is not merely an appointment; it is a week-long transformation of your automobile. Every single component, from inner wheel wells and brake calipers to door jambs and exhaust tips, is removed, purified, and protected. Following up to 30 hours of microscopic paint correction, the vehicle receives our most prestigious multi-layer ceramic system plus 9H wheel quartz and a 36-month hydrophobic glass coating. The car leaves our Munich studio ready for Pebble Beach or Villa d’Este.',
    heroImage: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=2000&auto=format&fit=crop',
    duration: '5 to 7 workdays',
    indicativePrice: 'From 2,950 €',
    startingPrice: 2950,
    features: [
      'Complete 3-stage concours paint correction (up to 99% defect freedom)',
      'Gyeon DuraFlex / Certified Multi-Layer 9H quartz protection',
      'Wheel-off detailing: ceramic coating on barrels, calipers & suspension',
      'Comprehensive glass rain-repellent shield across all windows',
      'Complete Swissvax leather & Alcantara restoration',
      'Dry-ice engine bay detailing & antistatic conservation',
      'Hardcover printed photo book documenting the full process'
    ],
    processSteps: [
      {
        step: '01',
        title: 'Wheel-Off Disassembly & Wheel Well Detailing',
        description: 'Wheel removal, deep decontamination of wheel barrels, suspension struts, and painted brake calipers.'
      },
      {
        step: '02',
        title: '3-Stage Paint Restoration',
        description: 'Surgical eradication of all swirls, micro-scratches, and orange peel reflections in the nanometer range.'
      },
      {
        step: '03',
        title: 'Multi-Layer Quartz Application',
        description: 'Application of 3 distinct ceramic layers with intermediate short-wave infrared heat baking.'
      },
      {
        step: '04',
        title: 'Exhaustive Cockpit Conservation',
        description: 'Purification and protection of all textiles, leathers, carbons, and glass in the cabin.'
      },
      {
        step: '05',
        title: 'Final Quality Audit & VIP Handover',
        description: 'Final audit report with paint thickness certificate and personal presentation in our closed showroom.'
      }
    ],
    benefits: [
      'Uncompromising concours standards for the most demanding collectors',
      '360-degree protection covering paint, carbon, wheels, glass, and leather',
      'Includes printed photo provenance book for vehicle history file',
      'Exclusive Concours Passport with annual guaranteed health check'
    ],
    recommendedFor: 'Supercars, hypercars, rare collector vehicles, and uncompromising perfectionists.',
    certifications: ['ATELIER Master Signature Label', 'Gyeon Certified Infinite Partner'],
    galleryImages: [
      'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=1400&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=1400&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?q=80&w=1400&auto=format&fit=crop'
    ]
  }
];

export const servicesDataRu: Service[] = [
  {
    ...servicesDataEn[0],
    title: 'Антигравийная пленка (PPF)',
    subtitle: 'Невидимая высокотехнологичная защита от сколов и царапин',
    shortDescription: 'Современная полиуретановая пленка с эффектом самозатягивания царапин (XPEL Ultimate Plus и Fusion) с официальной гарантией 10 лет. Прецизионный раскрой на плоттере без ножей на кузове.',
    indicativePrice: 'От 1.850 €',
    duration: '3 - 5 рабочих дней'
  },
  {
    ...servicesDataEn[1],
    title: 'Керамическое покрытие 9H',
    subtitle: 'Сертифицированная кварцевая защита 9H Si02 с глубоким мокрым блеском',
    shortDescription: 'Постоянная молекулярная связь с лаком. Непревзойденный гидрофобный эффект лотоса, защита от ультрафиолета и реагентов на срок до 5 лет.',
    indicativePrice: 'От 1.250 €',
    duration: '2 - 3 рабочих дня'
  },
  {
    ...servicesDataEn[2],
    title: 'Хирургическая полировка ЛКП',
    subtitle: 'Абсолютная точность для глубокого зеркального отражения без голограмм',
    shortDescription: 'Многоэтапная полировка под контролем цифровых толщиномеров. Удаление до 98% микроцарапин, паутины от моек и помутнений.',
    indicativePrice: 'От 890 €',
    duration: '1 - 3 рабочих дня'
  },
  {
    ...servicesDataEn[3],
    title: 'Детейлинг интерьера и кожи',
    subtitle: 'Швейцарский уход Swissvax за кожей и бережное восстановление алькантары',
    shortDescription: 'Деликатная глубокая очистка и консервация премиальных материалов. Питание кожи натуральными маслами, удаление катышков с алькантары и озонирование салона.',
    indicativePrice: 'От 590 €',
    duration: '1 - 2 рабочих дня'
  },
  {
    ...servicesDataEn[4],
    title: 'Signature Concours Detailing',
    subtitle: 'Комплексный шедевр для коллекционеров и бескомпромиссных эстетов',
    shortDescription: 'Высшая категория детейлинга: 3-этапная полировка, тройной керамический щит, обработка колес со снятием, защита стекол и полная реставрация салона.',
    indicativePrice: 'От 2.950 €',
    duration: '5 - 7 рабочих дней'
  }
];

export const servicesDataDe: Service[] = servicesDataEn;

export const getServicesData = (lang: 'en' | 'de' | 'ru' = 'en'): Service[] => {
  if (lang === 'ru') return servicesDataRu;
  return servicesDataEn;
};

export const servicesData = servicesDataEn;
