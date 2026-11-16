export interface TeamMember {
  name: string;
  role: string;
  specialization: string;
  experience: string;
  image: string;
  quote: string;
}

export const teamData: TeamMember[] = [
  {
    name: 'Fabian von Bernsdorff',
    role: 'Founder & Master Detailer',
    specialization: 'Submicron paint correction & international concours judging',
    experience: 'Over 14 years perfecting high-performance sports cars and pre-series prototypes',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop',
    quote: 'Paintwork is the fingerprint of the machine. Only when reflected light experiences zero diffraction is the work truly complete.'
  },
  {
    name: 'Julian Eder',
    role: 'Head of PPF & Wrap Engineering',
    specialization: 'XPEL Certified Master Trainer & custom DAP template optimization',
    experience: '11 years specializing in edge-tuck craftsmanship on hypercars and exposed carbon fiber',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop',
    quote: 'The finest paint protection film is the one that remains completely imperceptible, even from 10 centimeters away.'
  },
  {
    name: 'Severin Lindner',
    role: 'Interior Specialist & Leather Conservator',
    specialization: 'Certified Swissvax & Colourlock Master Leather Technician',
    experience: '9 years of upholstery and preservation practice with vintage Porsche and Ferrari cockpits',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop',
    quote: 'Noble leather commands respect. We never mask authentic patina with greasy sprays; we preserve the tactile soul of the hide.'
  }
];

export interface StudioFeature {
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
}

export const studioFeatures: StudioFeature[] = [
  {
    title: 'Cleanroom Facility with HEPA Filtration',
    subtitle: 'Zero-dust environment for PPF & ceramic application',
    description: 'Our installation hall operates under positive air pressure with multi-stage HEPA filtration. This guarantees zero airborne particulates settle on the clearcoat during curing and film application.',
    iconName: 'ShieldCheck'
  },
  {
    title: '5000K High-CRI Lighting Laboratory',
    subtitle: 'No imperfection remains concealed',
    description: 'Specialized overhead and lateral LED fixtures with Color Rendering Index Ra > 98 replicate both blinding noon sun and artificial parking garage light spectrums.',
    iconName: 'Sparkles'
  },
  {
    title: 'Digital Paint Thickness Mapping',
    subtitle: 'Submicron gauge safety',
    description: 'Before any machine polishing begins, we map panels with ultrasonic and eddy-current gauges (DeFelsko PosiTector) to ensure sufficient clearcoat reserve remains for decades to come.',
    iconName: 'Gauge'
  },
  {
    title: 'Short-Wave Infrared Baking (IR-Curing)',
    subtitle: 'Certified full hardness before delivery',
    description: 'Our ceramic coatings are thermally cross-linked using pyrometer-monitored infrared emitters. The vehicle is fully road-ready and weather-resistant from the very first minute on the road.',
    iconName: 'Sun'
  }
];

export const faqList = [
  {
    question: 'What is the precise difference between Ceramic Coating and Paint Protection Film (PPF)?',
    answer: 'A ceramic coating is a liquid silicon dioxide (SiO2) glass layer (approx. 1-2 microns thick) providing immense gloss depth, extreme hydrophobicity, UV resistance, and chemical protection against bird droppings — but it cannot absorb high-velocity gravel at 150 km/h on the autobahn. Paint Protection Film (PPF) is an approx. 200-micron thick, elastomeric thermoplastic polyurethane barrier that physically cushions stone impacts and self-heals under heat. Most of our clients opt for our Hybrid Solution: PPF on the high-impact front and rocker panels, combined with ceramic coating on the rest of the body.'
  },
  {
    question: 'How long does my vehicle remain in the ATELIER Studio?',
    answer: 'Because we uphold uncompromising standards and give every coating its necessary chemical curing time, vehicles typically stay with us for 2 to 4 workdays for paint correction or ceramic coating. A full-body PPF wrap or our Signature Concours Detailing requires 5 to 7 workdays. Throughout its stay, your vehicle rests inside a climate-controlled, alarm-secured, video-monitored private bay.'
  },
  {
    question: 'Do brand-new factory vehicles need to be polished before protection?',
    answer: 'Yes, without exception. Virtually every new vehicle displays fine transport swirls, sanding marks, or buffer trails right from the factory or dealership delivery. Because PPF and ceramic coatings permanently lock in whatever lies beneath, we always perform at least a single-stage high-gloss preparation polish to establish a flawless, crystal-clear base.'
  },
  {
    question: 'What warranties accompany the treatments?',
    answer: 'Our XPEL paint protection films carry the official 10-year manufacturer warranty against yellowing, cracking, and hazing. Our Gyeon quartz coatings include a 3- to 5-year guarantee complete with an official service log and digital passport.'
  },
  {
    question: 'Do you offer an enclosed vehicle transport service (Pick-up & Delivery)?',
    answer: 'Absolutely. Upon request, we transport your automobile in our discrete, fully enclosed single-car transporter directly from your residence, corporate garage, or delivering dealership throughout Greater Munich, Starnberg, Kitzbühel, and across Europe.'
  }
];
