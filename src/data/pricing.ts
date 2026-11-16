import type { PricingPackage } from '../types';

export const pricingPackages: PricingPackage[] = [
  {
    id: 'package-ceramic-essential',
    name: 'Ceramic Essential',
    category: 'Ceramic Coating',
    targetVehicles: 'Sports Cars & Coupés',
    priceFrom: 1250,
    duration: '2-3 workdays',
    popular: false,
    highlightText: 'Ideal introduction to long-term ceramic defense',
    idealFor: 'Well-maintained new vehicles or recently delivered sports cars',
    inclusions: [
      'Chemical & mechanical decontamination (Clay bar & iron fallout purge)',
      '1-stage high-gloss preparation polish (removing light haze & water spots)',
      'Complete panel wipe degreasing with surface control agents',
      '1 layer of certified 9H Si02 quartz ceramic coating',
      'Short-wave infrared thermal baking of all body panels',
      'Durability: approx. 24 to 36 months',
      'Care guidelines & individual vehicle passport'
    ]
  },
  {
    id: 'package-ceramic-pro',
    name: 'Ceramic Pro Excellence',
    category: 'Ceramic Coating & Correction',
    targetVehicles: 'Sports Cars, Sedans & SUVs',
    priceFrom: 1850,
    duration: '3-4 workdays',
    popular: true,
    highlightText: 'Our most requested refinement package',
    idealFor: 'Vehicles with visible wash scratches and high expectations for depth of gloss',
    inclusions: [
      'Comprehensive multi-stage hand wash & full decontamination',
      'Digital paint depth measurement across all panels',
      '2-stage paint correction (eliminating up to 90% of wash swirls)',
      'Ultra-fine jeweling finish for intense color saturation',
      '2-layer ceramic system (Base Coat 9H + Hydrophobic Top Coat)',
      'Short-wave infrared thermal curing (IR-Curing)',
      'Hydrophobic rain coating across all glass (water repels at 60 km/h)',
      'Durability: up to 60 months with regular care'
    ]
  },
  {
    id: 'package-ppf-front',
    name: 'PPF Front Package',
    category: 'Paint Protection Film (PPF)',
    targetVehicles: 'Sports Cars & Touring Models',
    priceFrom: 1950,
    duration: '3 workdays',
    popular: false,
    highlightText: 'Targeted defense for the high-impact front fascia',
    idealFor: 'Sports car drivers regularly traveling on highways and mountain passes',
    inclusions: [
      'Front bumper fully wrapped',
      'Full hood seamless (with invisible wrapped edges)',
      'Both front fenders complete',
      'Side mirror caps & headlights',
      'XPEL Ultimate Plus film with 10-year warranty',
      'Self-healing elastomeric topcoat',
      'Pre-cut via computer-guided XPEL DAP system'
    ]
  },
  {
    id: 'package-ppf-full',
    name: 'PPF Full Body Armor',
    category: 'Paint Protection Film (PPF)',
    targetVehicles: 'Supercars & Collector Assets',
    priceFrom: 4850,
    duration: '5-6 workdays',
    popular: false,
    highlightText: 'Uncompromising 360-degree rock chip defense',
    idealFor: 'Vehicles with PTS colors, carbon fiber bodies, or trackday use',
    inclusions: [
      'Full body paint wrap including rocker panels and roof',
      'Wrapped edges throughout for 100% invisible aesthetics',
      'Choice of Ultra-High-Gloss or XPEL Stealth (satin matte effect)',
      'Protection on all exposed carbon fiber aero splitters',
      'Door sills and trunk loading lip included',
      '10-year official warranty against yellowing and bubbling',
      'Complimentary check-up inspection after 14 days'
    ]
  },
  {
    id: 'package-signature-concours',
    name: 'Signature Concours Royal',
    category: 'All-Inclusive Atelier Craft',
    targetVehicles: 'Hypercars & Fine Classics',
    priceFrom: 3600,
    duration: '6-8 workdays',
    popular: false,
    highlightText: 'The master pinnacle for discerning collectors',
    idealFor: 'Clients who accept no compromise and demand the absolute zenith',
    inclusions: [
      '3-stage surgical paint correction up to 98% perfection',
      'Triple ceramic coating (body, carbon, trim elements)',
      'Wheel-off detailing: full ceramic on wheel barrels & brake calipers',
      'Bespoke interior leather conditioning with Swissvax',
      'Full glass ceramic seal on all windows & sunroof',
      'Dry-ice engine bay cleaning & antistatic shielding',
      'Printed hardcover photo provenance documentation with certificate'
    ]
  }
];

export interface VehicleTypeOption {
  id: string;
  label: string;
  examples: string;
  factor: number;
}

export const vehicleTypes: VehicleTypeOption[] = [
  {
    id: 'sport',
    label: 'Sports Car / Coupé',
    examples: 'e.g. Porsche 911, Cayman, BMW M2/M4, AMG GT, Audi R8',
    factor: 1.0
  },
  {
    id: 'sedan',
    label: 'Sedan / Touring / Wagon',
    examples: 'e.g. BMW M3/M5, Mercedes E/S-Class, Porsche Taycan, RS6',
    factor: 1.15
  },
  {
    id: 'suv',
    label: 'SUV / Performance SUV',
    examples: 'e.g. Porsche Cayenne, BMW X5/X6M, Mercedes G-Class, Urus',
    factor: 1.3
  },
  {
    id: 'hypercar',
    label: 'Super- / Hypercar',
    examples: 'e.g. Ferrari SF90, McLaren 750S, Porsche GT3 RS, Carrera GT',
    factor: 1.25
  }
];

export interface TreatmentOption {
  id: string;
  name: string;
  description: string;
  basePrice: number;
  duration: string;
}

export const primaryTreatments: TreatmentOption[] = [
  {
    id: 'ceramic-basic',
    name: 'Ceramic Coating Essential (1-Layer)',
    description: 'Prep polish + 9H quartz coating (up to 3 years durability)',
    basePrice: 1250,
    duration: '2 days'
  },
  {
    id: 'ceramic-pro',
    name: 'Ceramic Coating Pro (2-Layer + 2-Stage Correction)',
    description: 'Eliminates up to 90% wash swirls + high-end double coating (up to 5 years)',
    basePrice: 1850,
    duration: '3-4 days'
  },
  {
    id: 'ppf-front',
    name: 'XPEL Paint Protection Film Front Package',
    description: 'Bumper, full hood, fenders, mirrors & headlights (10-year warranty)',
    basePrice: 1950,
    duration: '3 days'
  },
  {
    id: 'ppf-full',
    name: 'XPEL PPF Full Body Armor',
    description: 'Complete vehicle coverage with wrapped edges (Gloss or Stealth Matte)',
    basePrice: 4850,
    duration: '5-6 days'
  },
  {
    id: 'paint-correction',
    name: 'Surgical Paint Correction (Polishing Only)',
    description: 'Multi-stage machine compounding to remove all swirls without protective layer',
    basePrice: 890,
    duration: '2 days'
  },
  {
    id: 'concours-signature',
    name: 'Signature Concours Detailing All-Inclusive',
    description: '3-stage correction + 3x ceramic + wheels + glass + Swissvax leather + photo book',
    basePrice: 3600,
    duration: '6-7 days'
  }
];

export interface AddonOption {
  id: string;
  name: string;
  price: number;
  description: string;
}

export const addonOptions: AddonOption[] = [
  {
    id: 'wheels-demount',
    name: 'Wheel-Off Ceramic Coating & Caliper Detailing',
    price: 380,
    description: 'Wheels removed, deep decontamination of barrels & calipers, sealed with 9H heat-resistant ceramic'
  },
  {
    id: 'glass-coating',
    name: 'Comprehensive Hydrophobic Glass Coating',
    price: 220,
    description: 'Extreme rain-shedding effect above 60 km/h across all windows and panoramic roof'
  },
  {
    id: 'leather-care',
    name: 'Swissvax Leather Preservation & Anti-Dye Barrier',
    price: 390,
    description: 'Deep cleansing, natural lipid replenishment, and protection against denim friction transfer'
  },
  {
    id: 'engine-bay',
    name: 'Dry-Ice Engine Bay Detailing & Conditioning',
    price: 290,
    description: 'Residue-free deep purification of delicate electronics and engine bay trims without moisture'
  }
];
