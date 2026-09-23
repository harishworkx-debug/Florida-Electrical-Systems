export const SITE = {
  name: 'Florida Electrical Systems',
  domain: 'floridaelctricalsystems.org',
  phone: '(863) 695-9819',
  phoneRaw: '8633081585',
  email: 'info@floridaelctricalsystems.org',
  address: '5254 Parkland Ct, Lakeland, FL 33811',
  street: '5254 Parkland Ct',
  city: 'Lakeland',
  state: 'FL',
  zip: '33811',
  county: 'Polk County',
  mapsUrl: 'https://maps.app.goo.gl/xRgnhSc7xETsWJoz7',
  hours: 'Mon - Sun: 24 Hours',
  rating: 5,
  reviewCount: 307,
  founded: 2015,
  license: 'Registered Electrical Contractor',
  social: {
    facebook: 'https://www.facebook.com/p/Florida-Electrical-Systems-100075872267910',
  },
};

export const MAIN_LOCATION = 'lakeland';

export const LOCATIONS = [
  { slug: 'lakeland', name: 'Lakeland', county: 'Polk County', isMain: true },
  { slug: 'bartow', name: 'Bartow', county: 'Polk County', isMain: false },
  { slug: 'winter-haven', name: 'Winter Haven', county: 'Polk County', isMain: false },
  { slug: 'auburndale', name: 'Auburndale', county: 'Polk County', isMain: false },
  { slug: 'mulberry', name: 'Mulberry', county: 'Polk County', isMain: false },
  { slug: 'plant-city', name: 'Plant City', county: 'Hillsborough County', isMain: false },
  { slug: 'haines-city', name: 'Haines City', county: 'Polk County', isMain: false },
  { slug: 'davenport', name: 'Davenport', county: 'Polk County', isMain: false },
  { slug: 'lake-wales', name: 'Lake Wales', county: 'Polk County', isMain: false },
  { slug: 'lake-alfred', name: 'Lake Alfred', county: 'Polk County', isMain: false },
  { slug: 'polk-city', name: 'Polk City', county: 'Polk County', isMain: false },
  { slug: 'fort-meade', name: 'Fort Meade', county: 'Polk County', isMain: false },
];

export interface ServicePage {
  slug: string;
  title: string;
  shortTitle: string;
  icon: string;
  heroImage: string;
  heroAlt: string;
  metaTitle: string;
  metaDesc: string;
  h1: string;
  intro: string[];
  benefits: { title: string; desc: string }[];
  process: { title: string; desc: string }[];
  faqs: { q: string; a: string }[];
}

export const SERVICES: ServicePage[] = [
  {
    slug: 'residential-electrician',
    title: 'Residential Electrician',
    shortTitle: 'Residential',
    icon: 'Home',
    heroImage: 'https://images.pexels.com/photos/32497160/pexels-photo-32497160.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    heroAlt: 'Electrician examining a residential electrical panel in Lakeland, FL',
    metaTitle: 'Residential Electrician Lakeland FL | Florida Electrical Systems',
    metaDesc: 'Licensed residential electricians in Lakeland, FL. Wiring, panel upgrades, lighting, outlets, and whole-home electrical services. Call (863) 695-9819 for a free estimate.',
    h1: 'Residential Electrician in Lakeland, FL',
    intro: [
      'Your home\'s electrical system powers everything from your morning coffee to your family\'s safety at night. At Florida Electrical Systems, our residential electricians in Lakeland, FL deliver dependable, code-compliant electrical work for homeowners throughout Polk County.',
      'Whether you need a simple outlet replacement, a full panel upgrade, or wiring for a new addition, our licensed electricians handle every project with the same attention to detail and commitment to safety. We work on homes of all ages, from historic Lakeland bungalows to new construction in the surrounding suburbs.',
    ],
    benefits: [
      { title: 'Licensed & Insured', desc: 'Every electrician on our team is fully licensed and insured, giving you peace of mind on every project.' },
      { title: 'Upfront Pricing', desc: 'You\'ll know the cost before we start. No surprises, no hidden fees, no pressure.' },
      { title: 'Code-Compliant Work', desc: 'All installations meet or exceed the National Electrical Code and local Lakeland requirements.' },
      { title: 'Whole-Home Expertise', desc: 'From the service panel to the last outlet, we handle every aspect of your home\'s electrical system.' },
    ],
    process: [
      { title: 'Schedule a Visit', desc: 'Call (863) 695-9819 or request service online. We\'ll find a time that works for you.' },
      { title: 'On-Site Assessment', desc: 'Our electrician inspects the issue, explains your options, and provides an upfront quote.' },
      { title: 'Professional Repair', desc: 'We complete the work cleanly and safely, testing everything before we leave.' },
    ],
    faqs: [
      { q: 'Do you offer free estimates for residential electrical work?', a: 'Yes. We provide free estimates for most residential projects. Call (863) 695-9819 to schedule.' },
      { q: 'Can you work on older homes in Lakeland?', a: 'Absolutely. We have extensive experience with older homes, including knob-and-tube wiring replacement and panel modernization.' },
      { q: 'Are your electricians licensed?', a: 'Yes, all our electricians are fully licensed and insured in the state of Florida.' },
    ],
  },
  {
    slug: 'commercial-electrician',
    title: 'Commercial Electrician',
    shortTitle: 'Commercial',
    icon: 'Building2',
    heroImage: 'https://images.pexels.com/photos/14319099/pexels-photo-14319099.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    heroAlt: 'Commercial electrician working on industrial control panel wiring',
    metaTitle: 'Commercial Electrician Lakeland FL | Florida Electrical Systems',
    metaDesc: 'Commercial electrical contractor in Lakeland, FL for businesses, retail, offices, and industrial facilities. Panel upgrades, wiring, lighting, and maintenance. Call (863) 695-9819.',
    h1: 'Commercial Electrician in Lakeland, FL',
    intro: [
      'When your business depends on reliable power, you need a commercial electrician who understands the demands of operating in Lakeland and across Central Florida. Florida Electrical Systems provides commercial electrical services for retail stores, offices, restaurants, warehouses, and industrial facilities throughout Polk County.',
      'From tenant build-outs and lighting retrofits to emergency panel repairs and routine maintenance, our team keeps your business running safely and up to code. We work efficiently to minimize downtime, scheduling around your business hours when needed.',
    ],
    benefits: [
      { title: 'Minimized Downtime', desc: 'We schedule work around your operations to keep your business running with minimal disruption.' },
      { title: 'Industrial Experience', desc: 'From control panels to motor circuits, we handle complex commercial and industrial systems.' },
      { title: 'Code Compliance', desc: 'All commercial work meets NEC, NFPA, and local Lakeland code requirements, ready for inspection.' },
      { title: 'Maintenance Programs', desc: 'Preventive maintenance contracts keep your systems running and catch problems before they cause outages.' },
    ],
    process: [
      { title: 'Consultation', desc: 'We assess your facility\'s electrical needs and discuss scope, timeline, and budget.' },
      { title: 'Detailed Proposal', desc: 'You receive a clear, itemized quote with no hidden costs.' },
      { title: 'Professional Execution', desc: 'Our team completes the work on schedule, coordinating with inspectors and other trades as needed.' },
    ],
    faqs: [
      { q: 'Do you work after hours for commercial projects?', a: 'Yes. We offer after-hours and weekend scheduling to minimize disruption to your business operations.' },
      { q: 'Can you handle industrial electrical work?', a: 'Yes, we have experience with industrial control panels, motor circuits, lift stations, and heavy-duty electrical systems.' },
      { q: 'Do you offer maintenance contracts?', a: 'Yes, we offer ongoing maintenance programs for commercial clients to prevent costly downtime.' },
    ],
  },
  {
    slug: 'electrical-repair',
    title: 'Electrical Repair',
    shortTitle: 'Repairs',
    icon: 'Wrench',
    heroImage: 'https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    heroAlt: 'Electrician repairing circuit breaker panel wiring',
    metaTitle: 'Electrical Repair Lakeland FL | Florida Electrical Systems',
    metaDesc: 'Fast, reliable electrical repair in Lakeland, FL. Flickering lights, tripping breakers, faulty outlets, and wiring issues. Licensed electricians ready to help. Call (863) 695-9819.',
    h1: 'Electrical Repair in Lakeland, FL',
    intro: [
      'Electrical problems don\'t wait for a convenient time. Whether your breakers keep tripping, your lights flicker, or an outlet has stopped working, Florida Electrical Systems provides fast, reliable electrical repair services throughout Lakeland and Polk County.',
      'Our licensed electricians diagnose the root cause, not just the symptom. We use professional-grade testing equipment to identify loose connections, overloaded circuits, and hidden hazards before they become dangerous. Every repair is done right the first time, backed by our workmanship guarantee.',
    ],
    benefits: [
      { title: 'Fast Response', desc: 'We prioritize repair calls and offer same-day service for most issues in the Lakeland area.' },
      { title: 'Root-Cause Diagnosis', desc: 'We find and fix the underlying problem, not just the visible symptom.' },
      { title: 'Safety First', desc: 'We identify fire hazards, shock risks, and code violations during every repair visit.' },
      { title: 'Workmanship Guarantee', desc: 'All repairs are backed by our guarantee. If the issue returns, so do we.' },
    ],
    process: [
      { title: 'Describe the Problem', desc: 'Call us and describe what you\'re experiencing. We\'ll help determine urgency and schedule accordingly.' },
      { title: 'Diagnosis', desc: 'Our electrician arrives, tests the system, and pinpoints the cause of the problem.' },
      { title: 'Repair & Test', desc: 'We fix the issue, test the repair, and ensure your system is safe before we leave.' },
    ],
    faqs: [
      { q: 'How do I know if I need an electrician or just a new bulb?', a: 'If changing the bulb doesn\'t fix a flickering light, or if multiple lights are affected, you likely have a wiring or circuit issue that needs a professional.' },
      { q: 'Is a tripping breaker dangerous?', a: 'A breaker that trips repeatedly is doing its job, but it signals an overloaded circuit or a fault. Have it inspected to prevent fire risk.' },
      { q: 'Do you charge for diagnosis?', a: 'We provide free estimates for most repairs. Diagnostic fees, if applicable, are credited toward the repair cost.' },
    ],
  },
  {
    slug: 'emergency-electrician',
    title: 'Emergency Electrician',
    shortTitle: 'Emergency',
    icon: 'Siren',
    heroImage: 'https://images.pexels.com/photos/34610697/pexels-photo-34610697.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    heroAlt: 'Electricians repairing damaged electrical lines after a storm',
    metaTitle: 'Emergency Electrician Lakeland FL 24/7 | Florida Electrical Systems',
    metaDesc: '24/7 emergency electrician in Lakeland, FL. Power outages, sparking, burning smells, storm damage. Fast response. Call (863) 695-9819 now.',
    h1: 'Emergency Electrician in Lakeland, FL',
    intro: [
      'Electrical emergencies can happen at any hour, and when they do, you need a licensed electrician who responds quickly. Florida Electrical Systems offers emergency electrical service throughout Lakeland and Polk County, 24 hours a day, 7 days a week.',
      'If you smell burning plastic from an outlet, see sparks, have no power in part of your home, or your panel is hot to the touch, don\'t wait. These are signs of serious electrical hazards that need immediate professional attention. Our emergency electricians are standing by to protect your family and property.',
    ],
    benefits: [
      { title: '24/7 Availability', desc: 'Day or night, weekends and holidays, we\'re ready to respond to your electrical emergency.' },
      { title: 'Rapid Response', desc: 'We dispatch quickly to Lakeland and surrounding Polk County areas.' },
      { title: 'Safety Assessment', desc: 'We secure the hazard first, then diagnose and repair the underlying problem.' },
      { title: 'Storm Ready', desc: 'Florida storms cause power surges and damage. We\'re experienced in post-storm electrical repairs.' },
    ],
    process: [
      { title: 'Call Immediately', desc: 'Call (863) 695-9819. Describe the emergency so we can prioritize and prepare.' },
      { title: 'Stay Safe', desc: 'If you smell burning or see sparks, turn off power at the main breaker if safe to do so. Don\'t use water near electrical equipment.' },
      { title: 'We Arrive & Repair', desc: 'Our electrician secures the hazard, diagnoses the problem, and performs the repair.' },
    ],
    faqs: [
      { q: 'What counts as an electrical emergency?', a: 'Sparking, burning smells, hot panels, partial power loss, flooding near electrical systems, and storm damage all warrant emergency service.' },
      { q: 'How fast can you get to my home in Lakeland?', a: 'Response times vary by location and demand, but we prioritize emergencies and aim for the fastest possible response in Polk County.' },
      { q: 'Should I turn off my power if I smell burning?', a: 'If you can safely reach your main breaker, yes. If not, call us immediately and we\'ll guide you. Never touch electrical equipment with wet hands.' },
    ],
  },
  {
    slug: 'electrical-panel-upgrade',
    title: 'Electrical Panel Upgrade',
    shortTitle: 'Panel Upgrade',
    icon: 'LayoutGrid',
    heroImage: 'https://images.pexels.com/photos/27928762/pexels-photo-27928762.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    heroAlt: 'Electrician working on a circuit breaker panel upgrade',
    metaTitle: 'Electrical Panel Upgrade Lakeland FL | Florida Electrical Systems',
    metaDesc: 'Electrical panel upgrades and replacements in Lakeland, FL. Replace outdated 100-amp panels, add circuits, and improve safety. Free estimates. Call (863) 695-9819.',
    h1: 'Electrical Panel Upgrade in Lakeland, FL',
    intro: [
      'Your electrical panel is the heart of your home\'s power system. If your panel is outdated, overloaded, or frequently tripping breakers, it\'s time for an upgrade. Florida Electrical Systems specializes in electrical panel upgrades for homes and businesses throughout Lakeland and Polk County.',
      'Modern homes use far more electricity than panels built even 20 years ago were designed for. Upgrading from a 100-amp to a 200-amp panel gives you capacity for EV chargers, new appliances, additions, and smart home systems, while dramatically improving safety. Our panel upgrades include new breakers, proper grounding, and full code compliance.',
    ],
    benefits: [
      { title: 'Increased Capacity', desc: 'A 200-amp panel supports modern appliances, EV chargers, and home additions without overloading.' },
      { title: 'Improved Safety', desc: 'New panels eliminate fire risks from outdated breakers, aluminum wiring, and corroded connections.' },
      { title: 'Code Compliance', desc: 'We bring your service up to current NEC standards, including proper grounding and arc-fault protection.' },
      { title: 'Home Value', desc: 'A modern electrical panel is a selling point that reassures buyers and inspectors alike.' },
    ],
    process: [
      { title: 'Load Assessment', desc: 'We calculate your home\'s electrical demand to recommend the right panel size.' },
      { title: 'Permit & Schedule', desc: 'We pull all necessary Lakeland permits and schedule the upgrade at your convenience.' },
      { title: 'Installation & Inspection', desc: 'We install the new panel, transfer all circuits, and coordinate the city inspection.' },
    ],
    faqs: [
      { q: 'How long does a panel upgrade take?', a: 'Most panel upgrades are completed in a single day, with power restored by evening.' },
      { q: 'Do I need a 200-amp panel?', a: 'If you\'re adding an EV charger, central AC, or a home addition, or if your current panel is 100 amps or less, a 200-amp upgrade is recommended.' },
      { q: 'Do you handle the permits?', a: 'Yes, we pull all required permits and coordinate inspections with the City of Lakeland or Polk County.' },
    ],
  },
  {
    slug: 'ev-charger-installation',
    title: 'EV Charger Installation',
    shortTitle: 'EV Chargers',
    icon: 'BatteryCharging',
    heroImage: 'https://images.pexels.com/photos/5391509/pexels-photo-5391509.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    heroAlt: 'Wall-mounted electric vehicle charging station installation',
    metaTitle: 'EV Charger Installation Lakeland FL | Florida Electrical Systems',
    metaDesc: 'EV charger installation in Lakeland, FL. Level 2 home chargers, Tesla Wall Connector, and commercial charging stations. Licensed electricians. Call (863) 695-9819.',
    h1: 'EV Charger Installation in Lakeland, FL',
    intro: [
      'Electric vehicles are the future of transportation, and a dedicated home charger makes owning one effortless. Florida Electrical Systems provides professional EV charger installation for homeowners and businesses throughout Lakeland and Polk County.',
      'We install Level 2 chargers, Tesla Wall Connectors, and commercial charging stations. Our electricians assess your panel capacity, install a dedicated circuit, mount the charger, and test everything for safe, reliable charging. Whether you drive a Tesla, a Chevy Bolt, or a Ford Lightning, we\'ll get you charging at home.',
    ],
    benefits: [
      { title: 'Faster Charging', desc: 'A Level 2 charger delivers up to 30 miles of range per hour, compared to 3-4 miles with a standard outlet.' },
      { title: 'Dedicated Circuit', desc: 'We install a dedicated circuit so your charger never competes with other appliances for power.' },
      { title: 'All Brands Supported', desc: 'Tesla, ChargePoint, JuiceBox, Grizzl-E, and more. We install the charger you choose.' },
      { title: 'Commercial Stations', desc: 'We also install commercial charging stations for businesses, hotels, and multi-family properties.' },
    ],
    process: [
      { title: 'Panel Check', desc: 'We verify your panel has capacity for a 40-amp or 50-amp dedicated circuit.' },
      { title: 'Installation', desc: 'We run the circuit, mount the charger in your preferred location, and connect it safely.' },
      { title: 'Test & Configure', desc: 'We test the charger with your vehicle and help you set up any connected app features.' },
    ],
    faqs: [
      { q: 'Can I use a regular outlet to charge my EV?', a: 'A standard 120V outlet works but charges very slowly. A dedicated 240V Level 2 charger is strongly recommended for daily use.' },
      { q: 'Do I need a panel upgrade for an EV charger?', a: 'If your panel is near capacity, we may recommend an upgrade. We\'ll assess this during your free estimate.' },
      { q: 'How much does EV charger installation cost?', a: 'Costs vary based on panel capacity, wiring distance, and charger type. Call (863) 695-9819 for a free estimate.' },
    ],
  },
  {
    slug: 'lighting-installation',
    title: 'Lighting Installation',
    shortTitle: 'Lighting',
    icon: 'Lightbulb',
    heroImage: 'https://images.pexels.com/photos/39558345/pexels-photo-39558345.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    heroAlt: 'Modern lighting installation with decorative pendant lights',
    metaTitle: 'Lighting Installation Lakeland FL | Florida Electrical Systems',
    metaDesc: 'Lighting installation in Lakeland, FL. Recessed lighting, LED upgrades, outdoor lighting, landscape lights, and chandeliers. Licensed electricians. Call (863) 695-9819.',
    h1: 'Lighting Installation in Lakeland, FL',
    intro: [
      'The right lighting transforms a space. Whether you\'re updating your kitchen with recessed LEDs, adding security lighting to your property, or installing a chandelier in your entryway, Florida Electrical Systems provides professional lighting installation throughout Lakeland and Polk County.',
      'Our electricians install indoor and outdoor lighting for homes and businesses. We handle everything from simple fixture swaps to complete lighting design and rewiring. We also upgrade older lighting to energy-efficient LED systems that save money and look better.',
    ],
    benefits: [
      { title: 'Energy Savings', desc: 'LED upgrades can reduce lighting energy costs by up to 75% while lasting 25 times longer than incandescent bulbs.' },
      { title: 'Enhanced Security', desc: 'Motion-activated and timer-controlled outdoor lighting deters intruders and improves safety.' },
      { title: 'Custom Design', desc: 'We help you choose fixture placement, color temperature, and brightness for each space.' },
      { title: 'Indoor & Outdoor', desc: 'From bathroom vanity lights to landscape path lighting, we install it all.' },
    ],
    process: [
      { title: 'Design Consultation', desc: 'We discuss your lighting goals, recommend fixtures, and plan the installation.' },
      { title: 'Wiring & Installation', desc: 'We run any new circuits needed, install switches and fixtures, and clean up thoroughly.' },
      { title: 'Test & Adjust', desc: 'We test every fixture, adjust aim on outdoor lights, and make sure you\'re happy with the result.' },
    ],
    faqs: [
      { q: 'Can you install recessed lighting in an existing ceiling?', a: 'Yes. We can retrofit recessed lights into most existing ceilings with minimal disruption.' },
      { q: 'Do you install outdoor and landscape lighting?', a: 'Yes, we install pathway lights, floodlights, motion sensors, and decorative outdoor fixtures.' },
      { q: 'Should I upgrade to LED lighting?', a: 'LEDs use far less energy, last much longer, and produce less heat. We recommend LED for almost all applications.' },
    ],
  },
  {
    slug: 'outlet-switch-repair',
    title: 'Outlet & Switch Repair',
    shortTitle: 'Outlets & Switches',
    icon: 'ToggleRight',
    heroImage: 'https://images.pexels.com/photos/7647233/pexels-photo-7647233.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    heroAlt: 'Electrician repairing an electrical outlet indoors',
    metaTitle: 'Outlet & Switch Repair Lakeland FL | Florida Electrical Systems',
    metaDesc: 'Outlet and switch repair in Lakeland, FL. Dead outlets, loose switches, GFCI installation, USB outlets, and smart switches. Licensed electricians. Call (863) 695-9819.',
    h1: 'Outlet & Switch Repair in Lakeland, FL',
    intro: [
      'Outlets and switches are the most-used parts of your electrical system, and when they fail, they\'re more than an inconvenience, they can be a safety hazard. Florida Electrical Systems repairs and replaces outlets and switches throughout Lakeland and Polk County.',
      'Whether you have a dead outlet, a switch that feels warm to the touch, or you want to upgrade to GFCI protection in your kitchen and bathroom, our licensed electricians handle it quickly and safely. We also install USB outlets, smart switches, and dimmers for modern convenience.',
    ],
    benefits: [
      { title: 'GFCI Protection', desc: 'We install Ground Fault Circuit Interrupter outlets in kitchens, baths, and outdoor areas to prevent shock.' },
      { title: 'Smart Home Ready', desc: 'We install smart switches, dimmers, and USB outlets to modernize your home.' },
      { title: 'Loose Outlet Fix', desc: 'Loose outlets cause arcs and heat. We tighten or replace them to eliminate fire risk.' },
      { title: 'Child Safety', desc: 'We install tamper-resistant outlets to protect curious children from inserting objects.' },
    ],
    process: [
      { title: 'Identify the Issue', desc: 'We test the outlet or switch and determine whether it needs repair or replacement.' },
      { title: 'Safe Replacement', desc: 'We turn off power, replace the device, and check the wiring for signs of damage.' },
      { title: 'Test & Verify', desc: 'We test the new outlet or switch under load to confirm it\'s working safely.' },
    ],
    faqs: [
      { q: 'Why is my outlet not working but the breaker isn\'t tripped?', a: 'This could be a loose wire, a failed backstab connection, or a tripped GFCI upstream. A professional should inspect it.' },
      { q: 'Do I need GFCI outlets?', a: 'The NEC requires GFCI protection in kitchens, bathrooms, garages, outdoors, and near sinks. We can add or upgrade them.' },
      { q: 'Can you install a smart switch?', a: 'Yes, we install smart switches and dimmers. Some require a neutral wire, which we can add if needed.' },
    ],
  },
  {
    slug: 'ceiling-fan-installation',
    title: 'Ceiling Fan Installation',
    shortTitle: 'Ceiling Fans',
    icon: 'Fan',
    heroImage: 'https://images.pexels.com/photos/3935316/pexels-photo-3935316.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    heroAlt: 'Living room with ceiling fan and modern interior',
    metaTitle: 'Ceiling Fan Installation Lakeland FL | Florida Electrical Systems',
    metaDesc: 'Ceiling fan installation in Lakeland, FL. Indoor and outdoor ceiling fans, fan-rated boxes, light kits, and remote controls. Licensed electricians. Call (863) 695-9819.',
    h1: 'Ceiling Fan Installation in Lakeland, FL',
    intro: [
      'In Florida\'s warm climate, a ceiling fan is essential for comfort and energy savings. Florida Electrical Systems provides professional ceiling fan installation for homes and businesses throughout Lakeland and Polk County.',
      'Installing a ceiling fan isn\'t as simple as swapping a light fixture. Fans vibrate and weigh more than lights, so they require a fan-rated junction box and proper mounting. Our electricians install fan-rated boxes, run wiring if needed, and mount your fan securely, whether on a flat ceiling or a vaulted one.',
    ],
    benefits: [
      { title: 'Proper Mounting', desc: 'We install fan-rated boxes rated to support the weight and vibration of your ceiling fan.' },
      { title: 'Energy Savings', desc: 'Ceiling fans let you raise your thermostat by 4 degrees without losing comfort, cutting AC costs.' },
      { title: 'Indoor & Outdoor', desc: 'We install damp and wet-rated fans for patios, lanais, and screened enclosures.' },
      { title: 'Remote & Smart Control', desc: 'We install remote controls and smart fans compatible with Alexa and Google Home.' },
    ],
    process: [
      { title: 'Assess Location', desc: 'We check the ceiling for proper support and access to wiring.' },
      { title: 'Install Fan Box', desc: 'We install a fan-rated junction box and run wiring if needed.' },
      { title: 'Mount & Balance', desc: 'We mount the fan, install the blades and light kit, and balance for wobble-free operation.' },
    ],
    faqs: [
      { q: 'Can you install a ceiling fan where there\'s only a light fixture?', a: 'Yes, but we\'ll need to replace the existing box with a fan-rated box for safe support.' },
      { q: 'Can you install a ceiling fan outdoors?', a: 'Yes, we install wet-rated and damp-rated fans for patios, lanais, and screened enclosures.' },
      { q: 'Do ceiling fans really save energy?', a: 'Yes. Fans create a wind-chill effect that lets you raise the thermostat by 3-4 degrees, reducing AC costs significantly.' },
    ],
  },
  {
    slug: 'electrical-inspection',
    title: 'Electrical Inspection',
    shortTitle: 'Inspections',
    icon: 'ShieldCheck',
    heroImage: 'https://images.pexels.com/photos/8293678/pexels-photo-8293678.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    heroAlt: 'Electrician performing a home electrical safety inspection',
    metaTitle: 'Electrical Inspection Lakeland FL | Florida Electrical Systems',
    metaDesc: 'Electrical safety inspection in Lakeland, FL. Whole-home inspections, pre-purchase inspections, insurance inspections, and code compliance. Call (863) 695-9819.',
    h1: 'Electrical Inspection in Lakeland, FL',
    intro: [
      'Whether you\'re buying a home, renovating, or just want peace of mind, a professional electrical inspection reveals hidden hazards before they become emergencies. Florida Electrical Systems provides thorough electrical inspections for homes and businesses throughout Lakeland and Polk County.',
      'Our inspections cover the full system: service panel, breakers, grounding, wiring, outlets, switches, smoke detectors, and outdoor systems. You\'ll receive a detailed report with photos, identified issues, and prioritized recommendations so you can make informed decisions about repairs.',
    ],
    benefits: [
      { title: 'Hidden Hazard Detection', desc: 'We identify overloaded circuits, improper wiring, aluminum wiring, and other fire risks.' },
      { title: 'Pre-Purchase Peace of Mind', desc: 'Know the true condition of a home\'s electrical system before you buy.' },
      { title: 'Insurance & Code Compliance', desc: 'We provide documentation needed for insurance requirements and code compliance.' },
      { title: 'Detailed Report', desc: 'You receive a written report with photos, findings, and prioritized recommendations.' },
    ],
    process: [
      { title: 'Full System Check', desc: 'We inspect the panel, wiring, outlets, switches, grounding, and safety devices throughout the property.' },
      { title: 'Testing', desc: 'We test circuits, GFCIs, arc-fault breakers, and voltage levels for proper function.' },
      { title: 'Report & Recommendations', desc: 'You receive a detailed report with findings and a prioritized action plan.' },
    ],
    faqs: [
      { q: 'How often should I get an electrical inspection?', a: 'Every 3-5 years for older homes, and before buying any home. Also after major renovations or if your home is over 40 years old.' },
      { q: 'What does an electrical inspection include?', a: 'We check the panel, breakers, wiring, outlets, switches, grounding, smoke detectors, and outdoor systems, then provide a written report.' },
      { q: 'Do you do inspections for insurance companies?', a: 'Yes, we provide the documentation and certifications many insurance companies require for older homes.' },
    ],
  },
];

export const HOME_FAQS = [
  { q: 'What areas does Florida Electrical Systems serve?', a: 'We serve Lakeland and all of Polk County, including Bartow, Winter Haven, Auburndale, Mulberry, Plant City, Haines City, Davenport, Lake Wales, and surrounding communities in Central Florida.' },
  { q: 'Are you licensed and insured?', a: 'Yes. Florida Electrical Systems is a fully licensed and insured electrical contractor serving Lakeland and Polk County. Every electrician on our team is trained, background-checked, and covered.' },
  { q: 'Do you offer free estimates?', a: 'Yes, we provide free estimates for most residential and commercial electrical projects. Call (863) 695-9819 to schedule yours.' },
  { q: 'Do you offer 24/7 emergency service?', a: 'Yes. We provide emergency electrical service 24 hours a day, 7 days a week throughout Lakeland and Polk County.' },
  { q: 'How quickly can you come out?', a: 'For emergencies, we dispatch as quickly as possible. For standard service calls, we often offer same-day or next-day appointments depending on the season.' },
  { q: 'What types of electrical work do you do?', a: 'We handle residential, commercial, and industrial electrical work including panel upgrades, repairs, EV chargers, lighting, inspections, wiring, and emergency service.' },
];

export const TESTIMONIALS = [
  { name: 'Robert M.', location: 'Lakeland, FL', text: 'Called them for a panel upgrade and they were at my house the next day. Professional, clean work, and the price was fair. Highly recommend.' },
  { name: 'Sarah J.', location: 'Bartow, FL', text: 'Our power went out on a Sunday evening and they answered the phone right away. Had an electrician at our house within the hour. Lifesavers.' },
  { name: 'David L.', location: 'Winter Haven, FL', text: 'Installed an EV charger in my garage. They assessed my panel, ran the circuit, and had it done in a few hours. Clean work and great communication.' },
  { name: 'Maria G.', location: 'Auburndale, FL', text: 'We had flickering lights and tripping breakers for months. They found a loose neutral wire in the panel and fixed it in one visit. No more problems.' },
  { name: 'James T.', location: 'Plant City, FL', text: 'Commercial tenant build-out for our new retail space. They handled everything from the panel to the lighting. Passed inspection first time.' },
  { name: 'Linda P.', location: 'Lakeland, FL', text: 'Installed recessed lighting throughout our living room and kitchen. They protected our floors, cleaned up everything, and the lights look amazing.' },
];
