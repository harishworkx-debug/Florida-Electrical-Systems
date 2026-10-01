export const SITE = {
  name: 'Florida Electrical Systems',
  domain: 'floridaelctricalsystems.org',
  phone: '(863) 281-0077',
  phoneRaw: '8632810077',
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
  { slug: 'lakeland', name: 'Lakeland', county: 'Polk County', isMain: true, localRelevance: 'As the largest city in Polk County, Lakeland is our primary service area. From historic homes near Lake Morton requiring delicate knob-and-tube replacements to new commercial builds in the downtown district, we understand the unique electrical needs of Lakeland properties.' },
  { slug: 'bartow', name: 'Bartow', county: 'Polk County', isMain: false, localRelevance: 'Serving the "City of Oaks and Azaleas," we provide expert electrical services to Bartow\'s historic residential districts and growing commercial sectors. We are familiar with bringing older electrical systems up to modern safety codes while preserving the integrity of historic homes.' },
  { slug: 'winter-haven', name: 'Winter Haven', county: 'Polk County', isMain: false, localRelevance: 'With its beautiful Chain of Lakes, Winter Haven properties often require specialized outdoor and marine electrical solutions. We specialize in safe, weather-resistant dock lighting, boat lift wiring, and whole-home surge protection for lakeside homes.' },
  { slug: 'auburndale', name: 'Auburndale', county: 'Polk County', isMain: false, localRelevance: 'Auburndale\'s rapid growth means many homes and businesses need electrical panel upgrades and EV charger installations. We help Auburndale residents modernize their electrical systems to handle today\'s high-capacity energy demands.' },
  { slug: 'mulberry', name: 'Mulberry', county: 'Polk County', isMain: false, localRelevance: 'From residential neighborhoods to the industrial areas near the phosphate capital, we provide robust electrical repairs, panel upgrades, and emergency services tailored to Mulberry\'s specific community needs.' },
  { slug: 'plant-city', name: 'Plant City', county: 'Hillsborough County', isMain: false, localRelevance: 'Just across the county line, Plant City\'s mix of agricultural, commercial, and residential properties requires versatile electrical expertise. We handle everything from farm equipment wiring to modern smart home installations.' },
  { slug: 'haines-city', name: 'Haines City', county: 'Polk County', isMain: false, localRelevance: 'As one of the fastest-growing areas in Central Florida, Haines City relies on our team for new circuit installations, energy-efficient LED lighting retrofits, and reliable emergency repairs.' },
  { slug: 'davenport', name: 'Davenport', county: 'Polk County', isMain: false, localRelevance: 'With a high density of vacation homes and new developments near the theme parks, Davenport properties often need fast, reliable electrical troubleshooting, smart lock wiring, and pool equipment electrical maintenance.' },
  { slug: 'lake-wales', name: 'Lake Wales', county: 'Polk County', isMain: false, localRelevance: 'From the rolling hills of the Ridge to historic downtown Lake Wales, we provide specialized electrical inspections, storm damage repairs, and lighting installations designed for this unique community.' },
  { slug: 'lake-alfred', name: 'Lake Alfred', county: 'Polk County', isMain: false, localRelevance: 'Lake Alfred residents trust us for fast electrical troubleshooting, generator transfer switch installations for storm season, and energy-saving ceiling fan installations.' },
  { slug: 'polk-city', name: 'Polk City', county: 'Polk County', isMain: false, localRelevance: 'In Polk City, we offer comprehensive electrical services ranging from rural property wiring upgrades to modern EV charging station installations for environmentally conscious homeowners.' },
  { slug: 'fort-meade', name: 'Fort Meade', county: 'Polk County', isMain: false, localRelevance: 'As the oldest city in Polk County, Fort Meade features many legacy electrical systems. We specialize in safely upgrading outdated panels and wiring to meet current National Electrical Code standards.' },
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
    heroAlt: 'Top-rated residential electrician examining a home electrical panel in Lakeland, FL',
    metaTitle: 'Expert Residential Electrician Lakeland FL | Florida Electrical Systems',
    metaDesc: 'Looking for a trusted residential electrician in Lakeland, FL? We specialize in whole-home rewiring, panel upgrades, lighting, and fast electrical repairs. Call now!',
    h1: 'Top-Rated Residential Electrician in Lakeland, FL',
    intro: [
      'Your home\'s electrical system is the backbone of your daily comfort and family safety. At Florida Electrical Systems, our licensed residential electricians in Lakeland, FL provide top-tier, code-compliant electrical solutions tailored specifically for homeowners throughout Polk County. From minor outlet repairs to comprehensive whole-house rewiring, we handle it all with precision.',
      'We understand that electrical issues can be disruptive and stressful. Whether you are dealing with flickering lights, frequently tripping circuit breakers, or need dedicated circuits for new high-demand appliances, our highly trained team is equipped to diagnose and resolve issues swiftly. We pride ourselves on transparent upfront pricing, protecting your home, and delivering workmanship that stands the test of time.',
    ],
    benefits: [
      { title: 'Licensed & Fully Insured', desc: 'Every electrician dispatched to your home is state-licensed, rigorously background-checked, and fully insured to guarantee your absolute peace of mind.' },
      { title: 'Transparent Upfront Pricing', desc: 'No hidden fees or surprise charges. We provide a detailed, flat-rate quote before any work begins, so you are always in control of your budget.' },
      { title: 'Strict Code Compliance', desc: 'Safety is non-negotiable. All our installations and repairs strictly adhere to the latest National Electrical Code (NEC) and stringent Lakeland municipal standards.' },
      { title: 'Comprehensive Expertise', desc: 'From GFCI outlet installations and smart home automation wiring to complex knob-and-tube removal, we are your one-stop solution.' },
    ],
    process: [
      { title: '1. Fast Scheduling', desc: 'Call (863) 281-0077 to connect with our dispatch team. We prioritize your schedule and offer flexible appointment windows.' },
      { title: '2. Comprehensive Diagnostics', desc: 'Our electrician arrives fully stocked, performs a thorough safety inspection, and isolates the root cause of your electrical problem.' },
      { title: '3. Flawless Execution', desc: 'We execute the repair or installation cleanly, test the entire circuit for safety, and leave your home spotless.' },
    ],
    faqs: [
      { q: 'What residential electrical services do you offer in Lakeland?', a: 'We offer everything from ceiling fan installations, indoor/outdoor lighting, and GFCI replacements to full 200-amp service upgrades, generator hookups, and whole-home surge protection.' },
      { q: 'How do I know if my older home needs a rewiring?', a: 'If your home has aluminum wiring, ungrounded two-prong outlets, frequent breaker trips, or a burning smell near switches, it is critical to schedule an electrical inspection immediately to prevent fire hazards.' },
      { q: 'Are your residential electricians licensed to work in Polk County?', a: 'Yes! We are a fully licensed and insured Registered Electrical Contractor authorized to pull permits and operate anywhere in Lakeland and Polk County.' },
    ],
  },
  {
    slug: 'commercial-electrician',
    title: 'Commercial Electrician',
    shortTitle: 'Commercial',
    icon: 'Building2',
    heroImage: 'https://images.pexels.com/photos/14319099/pexels-photo-14319099.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    heroAlt: 'Commercial electrical contractor working on heavy industrial three-phase wiring',
    metaTitle: 'Commercial Electrician Lakeland FL | Fast Commercial Electrical Services',
    metaDesc: 'Leading commercial electrician in Lakeland, FL. We handle tenant build-outs, 3-phase wiring, LED retrofits, and industrial motor controls. Minimize downtime. Call today!',
    h1: 'Commercial Electrician in Lakeland, FL',
    intro: [
      'Downtime is not an option when it comes to your business. Florida Electrical Systems is the premier commercial electrical contractor in Lakeland, FL, serving retail stores, corporate offices, restaurants, warehouses, and heavy industrial facilities across Central Florida. We understand that reliable power is critical to your daily operations and bottom line.',
      'Our commercial electricians specialize in complex systems, including three-phase wiring, commercial lighting retrofits, dedicated equipment circuits, and heavy-duty transformer installations. Whether you are executing a massive tenant build-out, upgrading your facility to energy-efficient LED lighting, or need an emergency repair to get your production line back up, our team delivers industrial-grade solutions on time and strictly on budget.',
    ],
    benefits: [
      { title: 'Zero Downtime Scheduling', desc: 'We offer after-hours and weekend scheduling to ensure our electrical work never disrupts your customers, employees, or operational workflow.' },
      { title: 'Heavy Industrial Expertise', desc: 'Our technicians are highly skilled in complex industrial systems, including motor control centers, lift stations, and high-voltage distribution.' },
      { title: 'Turnkey Project Management', desc: 'From initial design and permitting with the City of Lakeland to final inspection, we manage the entire electrical scope of your commercial project.' },
      { title: 'Preventative Maintenance', desc: 'We offer tailored maintenance contracts to identify thermal hotspots, tighten connections, and prevent catastrophic electrical failures before they happen.' },
    ],
    process: [
      { title: '1. Strategic Consultation', desc: 'We conduct a detailed site walk-through to understand your power load requirements, business goals, and timeline.' },
      { title: '2. Engineered Proposals', desc: 'You receive a comprehensive, itemized bid outlining materials, labor, and exact timelines with zero hidden costs.' },
      { title: '3. Code-Perfect Execution', desc: 'Our crews work efficiently, coordinate flawlessly with other trades, and guarantee a smooth final inspection.' },
    ],
    faqs: [
      { q: 'Do you handle commercial tenant build-outs and remodeling?', a: 'Yes, tenant improvements are our specialty. We handle the complete electrical scope from architectural plans to final sign-off, ensuring your new space is perfectly wired.' },
      { q: 'Can you upgrade our office to energy-efficient LED lighting?', a: 'Absolutely. Commercial LED retrofits can slash your energy bills by up to 60%. We handle the design, fixture installation, and proper disposal of old fluorescent ballasts.' },
      { q: 'Do you offer emergency electrical repairs for businesses?', a: 'Yes, we provide 24/7 priority emergency response for our commercial clients to ensure your operations are never halted for long.' },
    ],
  },
  {
    slug: 'electrical-repair',
    title: 'Electrical Repair',
    shortTitle: 'Repairs',
    icon: 'Wrench',
    heroImage: 'https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    heroAlt: 'Master electrician diagnosing and repairing a circuit breaker panel',
    metaTitle: 'Electrical Repair Lakeland FL | Fast & Reliable Troubleshooting',
    metaDesc: 'Need fast electrical repair in Lakeland, FL? We fix flickering lights, tripping breakers, and dead outlets permanently. Expert troubleshooting. Call (863) 281-0077.',
    h1: 'Fast & Reliable Electrical Repair in Lakeland, FL',
    intro: [
      'Electrical malfunctions are more than just an inconvenience—they are severe fire hazards. If you are dealing with a breaker that refuses to stay on, flickering lights, or outlets that spark, you need immediate professional help. Florida Electrical Systems provides the fastest and most reliable electrical troubleshooting and repair services in Lakeland and Polk County.',
      'Our master electricians don\'t just put a band-aid on the problem. We use advanced diagnostic equipment, including thermal imaging and circuit tracers, to pinpoint the exact root cause of the electrical fault buried in your walls. From loose neutral wires and failing backstab connections to overloaded circuits, we guarantee a permanent, code-compliant fix that restores your safety and peace of mind.',
    ],
    benefits: [
      { title: 'Rapid Response Times', desc: 'When you lose power or face a safety hazard, we prioritize your call. We offer same-day electrical repair services across the Lakeland area.' },
      { title: 'Advanced Troubleshooting', desc: 'We eliminate the guesswork. Our electricians find the hidden faults that other contractors miss, saving you time and money.' },
      { title: 'Uncompromising Safety', desc: 'Every repair includes a complimentary visual safety check of your electrical panel to ensure no other hazards are lurking.' },
      { title: 'Ironclad Guarantee', desc: 'We stand by our repairs. If the exact same issue returns, we return and fix it for free. Your satisfaction is guaranteed.' },
    ],
    process: [
      { title: '1. Immediate Dispatch', desc: 'Call us with your symptoms. We dispatch a fully-stocked service van to your location as quickly as possible.' },
      { title: '2. Pinpoint Diagnosis', desc: 'We trace the circuit, measure voltage drops, and identify the exact component causing the failure.' },
      { title: '3. Permanent Repair', desc: 'We replace the faulty wiring or device with premium, commercial-grade parts and test the system under load.' },
    ],
    faqs: [
      { q: 'Why do my lights flicker when the AC turns on?', a: 'This usually indicates a voltage drop caused by an overloaded circuit, a failing breaker, or a loose neutral connection at the panel. It requires immediate professional diagnosis to prevent overheating.' },
      { q: 'Is it safe to reset a circuit breaker that keeps tripping?', a: 'No. A tripping breaker is a safety mechanism doing its job, protecting your home from an overload or a short circuit. Repeatedly resetting it can cause a fire. Call us for a repair.' },
      { q: 'Why is my electrical outlet warm to the touch?', a: 'A warm outlet means there is excess electrical resistance, usually due to loose wiring or a failing receptacle. Stop using the outlet immediately and call us for an urgent repair.' },
    ],
  },
  {
    slug: 'emergency-electrician',
    title: '24/7 Emergency Electrician',
    shortTitle: 'Emergency',
    icon: 'Siren',
    heroImage: 'https://images.pexels.com/photos/34610697/pexels-photo-34610697.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    heroAlt: 'Emergency electrician restoring power after severe storm damage in Florida',
    metaTitle: 'Emergency Electrician Lakeland FL | 24/7 Immediate Response',
    metaDesc: 'Searching for an emergency electrician in Lakeland, FL? We provide 24/7 immediate response for power outages, burning smells, and storm damage. Call now!',
    h1: '24/7 Emergency Electrician in Lakeland, FL',
    intro: [
      'Electrical disasters do not respect business hours. Whether it is a devastating power surge at 2 AM, a smoking breaker panel on a Sunday, or severe storm damage tearing down your service mast, Florida Electrical Systems is your definitive 24/7 emergency electrician in Lakeland, FL. We are always on standby, ready to deploy immediately to protect your property and loved ones.',
      'Do not take chances with electrical fires or electrocution. If you experience partial power loss, smell burning plastic near an outlet, or hear buzzing from your electrical panel, these are critical warning signs of an impending catastrophic failure. Our rapid-response emergency units are fully equipped to secure hazardous situations, isolate the fault, and restore safe power as quickly as humanly possible.',
    ],
    benefits: [
      { title: 'True 24/7 Availability', desc: 'Nights, weekends, and holidays—our dispatch center is always open. You will speak to a real person and get immediate help.' },
      { title: 'Rapid Deployment', desc: 'We keep our emergency vehicles pre-stocked with essential breakers, wiring, and panels to handle 90% of emergencies on the spot.' },
      { title: 'Storm Damage Recovery', desc: 'Living in Florida means dealing with hurricanes and lightning strikes. We are experts at fast, code-compliant post-storm electrical rebuilds.' },
      { title: 'Hazard Mitigation', desc: 'Our first priority upon arrival is to instantly secure the environment, eliminating fire and shock risks before proceeding with repairs.' },
    ],
    process: [
      { title: '1. Call (863) 281-0077 Now', desc: 'Do not wait. Describe the emergency. If necessary, we will instruct you on how to safely shut off your main power while we are en route.' },
      { title: '2. Rapid Arrival & Securing', desc: 'Our electrician arrives fast, immediately cuts power to the dangerous circuits, and assesses the full extent of the damage.' },
      { title: '3. Restoration', desc: 'We execute emergency repairs to restore safe lighting and power. If a major rebuild is needed (like a blown panel), we provide a temporary safe solution and a permanent plan.' },
    ],
    faqs: [
      { q: 'What qualifies as an electrical emergency?', a: 'Any situation involving a risk of fire or shock is an emergency. This includes burning smells from outlets, a hot or buzzing breaker panel, sparking wires, sudden partial power loss, or water interacting with your electrical system.' },
      { q: 'Should I call the power company (TECO/Lakeland Electric) or an electrician?', a: 'If the power outage affects your whole neighborhood, call the utility. If the issue is localized to your home (e.g., your weatherhead is torn off or your panel is sparking), you must call a private emergency electrician like us.' },
      { q: 'Will I be charged an astronomical fee for a weekend emergency call?', a: 'While emergency dispatch does carry a premium rate compared to scheduled weekday service, our pricing remains completely transparent. We will quote you the diagnostic fee upfront on the phone.' },
    ],
  },
  {
    slug: 'electrical-panel-upgrade',
    title: 'Electrical Panel Upgrade',
    shortTitle: 'Panel Upgrade',
    icon: 'LayoutGrid',
    heroImage: 'https://images.pexels.com/photos/27928762/pexels-photo-27928762.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    heroAlt: 'Licensed electrician upgrading a residential 200-amp electrical panel',
    metaTitle: 'Electrical Panel Upgrade Lakeland FL | 200 Amp Service Replacements',
    metaDesc: 'Need an electrical panel upgrade in Lakeland, FL? We replace outdated Zinsco/FPE panels and upgrade homes to 200-amp service for modern safety and EV charging.',
    h1: 'Electrical Panel Upgrades in Lakeland, FL',
    intro: [
      'Your electrical panel (or breaker box) is the beating heart of your home’s electrical system. If your home is over 25 years old, still has a 100-amp service, or relies on notoriously dangerous brands like Federal Pacific (FPE) or Zinsco, an upgrade is not a luxury—it is a critical safety necessity. Florida Electrical Systems is the leading authority on electrical panel upgrades and replacements in Lakeland and Polk County.',
      'Modern lifestyles demand massive amounts of electricity. Between smart appliances, robust HVAC systems, and the rising adoption of Electric Vehicles (EVs), older panels are being pushed beyond their limits, leading to frequent breaker trips and overheating. Upgrading to a robust 200-amp service panel provides the capacity you need for modern living while introducing advanced safety features like Arc-Fault (AFCI) and Ground-Fault (GFCI) breakers.',
    ],
    benefits: [
      { title: 'Massive Capacity Increase', desc: 'A 200-amp upgrade gives you the headroom to safely add home additions, hot tubs, heavy shop equipment, and dedicated EV charging stations.' },
      { title: 'Eliminate Fire Hazards', desc: 'We rip out obsolete, fire-prone panels (like FPE, Zinsco, and Challenger) and replace them with premium, modern load centers.' },
      { title: 'Full Code Modernization', desc: 'Our upgrades include driving new grounding rods, installing whole-home surge protection, and ensuring 100% compliance with current NEC standards.' },
      { title: 'Insurance & Resale Value', desc: 'A newly permitted, modern electrical panel dramatically lowers home insurance premiums and removes a massive red flag for potential home buyers.' },
    ],
    process: [
      { title: '1. Load Calculation', desc: 'We calculate your exact electrical demand to determine if you need a subpanel, a 150-amp upgrade, or a full 200-amp heavy-up.' },
      { title: '2. Permitting & Utility Coordination', desc: 'We handle all the red tape. We pull the Lakeland city permits and coordinate the power disconnect/reconnect with TECO or Lakeland Electric.' },
      { title: '3. The Swap & Inspection', desc: 'Our team completely rebuilds your service in a single day. We label every circuit clearly and manage the final city safety inspection.' },
    ],
    faqs: [
      { q: 'How do I know if I need to replace my electrical panel?', a: 'Key signs include: breakers constantly tripping, a panel that feels warm to the touch, flickering lights, rust inside the breaker box, or if your home still uses fuses instead of breakers. Also, if you have a Federal Pacific or Zinsco panel, it must be replaced immediately.' },
      { q: 'How long does a panel upgrade take?', a: 'In most cases, we can complete a full panel replacement in a single day. Your power will be off for roughly 6 to 8 hours while we rebuild the system.' },
      { q: 'Will a panel upgrade fix my flickering lights?', a: 'Yes, if the flickering is caused by an overloaded main bus bar or failing breakers. A new panel provides stable, consistent power distribution.' },
    ],
  },
  {
    slug: 'ev-charger-installation',
    title: 'EV Charger Installation',
    shortTitle: 'EV Chargers',
    icon: 'BatteryCharging',
    heroImage: 'https://images.pexels.com/photos/5391509/pexels-photo-5391509.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    heroAlt: 'Electrician installing a Level 2 Tesla Wall Connector in a residential garage',
    metaTitle: 'EV Charger Installation Lakeland FL | Tesla & Level 2 Home Chargers',
    metaDesc: 'Professional EV charger installation in Lakeland, FL. We install Tesla Wall Connectors, Level 2 chargers, and NEMA 14-50 outlets. Fast, permitted, and safe!',
    h1: 'EV Charger Installation in Lakeland, FL',
    intro: [
      'Say goodbye to range anxiety and the hassle of public charging stations. Florida Electrical Systems is your premier local expert for EV charger installations in Lakeland, FL. Whether you just brought home a Tesla Model Y, a Ford F-150 Lightning, or a Rivian, we provide safe, code-compliant charging solutions that let you wake up to a full battery every single morning.',
      'Charging an electric vehicle places an immense, continuous electrical load on your home—comparable to running a massive electric oven for 8 hours straight. You cannot trust this job to a handyman. Our licensed electricians calculate your home’s load capacity, run heavy-gauge copper wiring, and install dedicated 240V circuits for Level 2 EVSE (Electric Vehicle Supply Equipment) to guarantee blazing fast and completely safe charging.',
    ],
    benefits: [
      { title: 'Blazing Fast Charging', desc: 'A hardwired Level 2 charger provides up to 40+ miles of range per hour, completely charging even the largest EV batteries overnight.' },
      { title: 'Dedicated 240V Circuits', desc: 'We install a dedicated 50-amp or 60-amp circuit directly from your breaker panel, ensuring your charger never overloads your home\'s system.' },
      { title: 'Universal Compatibility', desc: 'We install all major brands, including the Tesla Wall Connector, ChargePoint Home Flex, JuiceBox, Grizzl-E, and standard NEMA 14-50 receptacles.' },
      { title: 'Commercial EV Stations', desc: 'We also design and install multi-port commercial EV charging stations for Lakeland offices, retail centers, and apartment complexes.' },
    ],
    process: [
      { title: '1. Capacity Assessment', desc: 'We inspect your main electrical panel to ensure you have the required amperage headroom for a continuous heavy load.' },
      { title: '2. Custom Wiring Run', desc: 'We expertly run the conduit and heavy-gauge wire from your panel to your preferred charging location in the garage or driveway.' },
      { title: '3. Mounting & Commissioning', desc: 'We securely mount the EVSE unit, torque all connections to spec, test the voltage, and assist you with WiFi app setup.' },
    ],
    faqs: [
      { q: 'Do I need a panel upgrade to install an EV charger?', a: 'Not necessarily. If you already have a 200-amp panel, you likely have room. If you have an older 100-amp panel that is full, we may need to perform a panel upgrade or install an intelligent load management device.' },
      { q: 'Is it better to hardwire the charger or install a NEMA 14-50 outlet?', a: 'Hardwiring is significantly safer and allows for faster charging (up to 48 or 60 amps). NEMA 14-50 plug-in installations are limited to 40 amps and require the installation of an expensive GFCI breaker.' },
      { q: 'How much does it cost to install a Level 2 EV charger at home?', a: 'Costs depend entirely on the distance from your electrical panel to the charger location and whether trenching or drywall cutting is required. We provide free, exact on-site estimates.' },
    ],
  },
  {
    slug: 'lighting-installation',
    title: 'Lighting Installation & Design',
    shortTitle: 'Lighting',
    icon: 'Lightbulb',
    heroImage: 'https://images.pexels.com/photos/39558345/pexels-photo-39558345.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    heroAlt: 'Elegant recessed LED lighting and chandelier installation in a modern kitchen',
    metaTitle: 'Lighting Installation Lakeland FL | Recessed, LED & Outdoor Lighting',
    metaDesc: 'Transform your home with professional lighting installation in Lakeland, FL. Specializing in recessed lighting, LED upgrades, chandeliers, and outdoor security lights.',
    h1: 'Lighting Installation in Lakeland, FL',
    intro: [
      'Lighting does more than illuminate a room; it defines the ambiance, enhances security, and dramatically increases the value of your property. Florida Electrical Systems offers elite lighting installation and design services throughout Lakeland and Polk County. Whether you are remodeling a kitchen and need sleek recessed LEDs or illuminating your backyard with elegant landscape lighting, we deliver flawless results.',
      'Our lighting experts handle everything from complex chandelier hanging in high-vaulted ceilings to energy-saving whole-office LED retrofits. We don\'t just swap fixtures—we run new dedicated switch legs, install smart dimmers, and help you select the perfect color temperature (Kelvins) to make your space look exactly the way you envisioned it.',
    ],
    benefits: [
      { title: 'Recessed LED Experts', desc: 'We specialize in retrofitting modern, ultra-thin LED canless downlights into existing ceilings with absolutely minimal drywall disruption.' },
      { title: 'Smart Lighting Control', desc: 'Take control of your home. We install Lutron Caséta, Leviton, and other smart dimmers that you can control via smartphone, Alexa, or Google Home.' },
      { title: 'Landscape & Security', desc: 'Protect and beautify your exterior with weather-sealed landscape path lights, motion-sensor floodlights, and dramatic architectural uplighting.' },
      { title: 'Energy Efficiency', desc: 'Upgrading your entire home or business to modern LED fixtures slashes your lighting energy consumption by up to 80% while eliminating bulb replacements.' },
    ],
    process: [
      { title: '1. Lighting Consultation', desc: 'We walk through your space, discuss your aesthetic goals, and help you determine optimal fixture placement and brightness levels.' },
      { title: '2. Precision Wiring', desc: 'Our electricians carefully snake new wires through your walls and ceilings, install sturdy junction boxes, and add requested dimmer switches.' },
      { title: '3. Flawless Installation', desc: 'We hang the fixtures perfectly level, clean up all dust and debris, and test the dimming range to ensure zero flickering.' },
    ],
    faqs: [
      { q: 'Can you install recessed lighting in a room that currently has no ceiling lights?', a: 'Yes! We are experts at "fishing" wires through existing finished ceilings and walls to install brand new recessed lighting layouts without tearing apart your drywall.' },
      { q: 'Why do my new LED lights flicker when I dim them?', a: 'Flickering is almost always caused by an incompatibility between the LED fixture and an older, incandescent-style dimmer switch. We can easily replace the switch with an LED-rated smart dimmer to solve this.' },
      { q: 'Can you install heavy chandeliers in vaulted ceilings?', a: 'Absolutely. We use heavy-duty, fan-rated bracing boxes and scaffolding to safely hang heavy chandeliers and entryway fixtures at towering heights.' },
    ],
  },
  {
    slug: 'outlet-switch-repair',
    title: 'Outlet & Switch Installation',
    shortTitle: 'Outlets & Switches',
    icon: 'ToggleRight',
    heroImage: 'https://images.pexels.com/photos/7647233/pexels-photo-7647233.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    heroAlt: 'Electrician replacing an old wall outlet with a modern GFCI receptacle',
    metaTitle: 'Outlet & Switch Repair Lakeland FL | GFCI & Smart Switch Installation',
    metaDesc: 'Need new outlets or switches in Lakeland, FL? We repair dead outlets, install GFCI protection, and upgrade to modern smart dimmers and USB receptacles.',
    h1: 'Outlet & Switch Installation in Lakeland, FL',
    intro: [
      'Dead outlets, loose plugs that fall out of the wall, and switches that spark or feel warm are not just annoying—they are critical fire hazards. Florida Electrical Systems provides rapid outlet and switch repair and installation services across Lakeland, FL. We ensure every connection in your home is rock-solid, code-compliant, and perfectly safe for your family.',
      'Beyond basic repairs, we help modernize your home’s functionality. We upgrade outdated two-prong receptacles, install critical GFCI (Ground Fault Circuit Interrupter) protection in wet areas, and add ultra-convenient USB-C wall outlets. Need an outlet mounted behind your new wall-mounted TV? We handle that too, hiding all the messy cords for a clean, premium look.',
    ],
    benefits: [
      { title: 'GFCI & AFCI Upgrades', desc: 'We bring your home up to modern code by installing life-saving GFCI outlets in kitchens, bathrooms, and exteriors, preventing lethal electrical shocks.' },
      { title: 'Smart Switch Integration', desc: 'Upgrade to smart switches (like Lutron or TP-Link) that allow you to set schedules, dim lights, and control your home via voice commands.' },
      { title: 'Eliminate Fire Risks', desc: 'We remove dangerous "backstabbed" connections from old outlets and rewire them using secure pigtails and heavy-duty commercial-grade receptacles.' },
      { title: 'Custom Outlet Additions', desc: 'Need power where there isn\'t any? We can run new wiring to add outlets for home offices, holiday lighting, or wall-mounted flat-screen TVs.' },
    ],
    process: [
      { title: '1. Safety Inspection', desc: 'We use advanced testers to check for proper grounding, reverse polarity, and voltage drops at the problematic receptacle.' },
      { title: '2. Secure Replacement', desc: 'We cut the power, remove the faulty device, strip fresh copper, and securely wire in a high-quality, tamper-resistant replacement.' },
      { title: '3. Load Testing', desc: 'We restore power and test the new outlet or switch under load to ensure it operates flawlessly without any heat buildup.' },
    ],
    faqs: [
      { q: 'What is a GFCI outlet and where are they required?', a: 'A GFCI (Ground Fault Circuit Interrupter) protects against electrocution by shutting off power instantly if water or a fault is detected. The National Electrical Code requires them in bathrooms, kitchens, garages, basements, and outdoors.' },
      { q: 'Why is half of my house without power, but no breakers are tripped?', a: 'This is often caused by a tripped GFCI outlet hiding in a garage or bathroom that protects downstream outlets, or a loose neutral connection. We can trace the circuit and find the hidden culprit.' },
      { q: 'Can you install a smart switch if my house doesn\'t have a neutral wire?', a: 'Most modern smart switches require a neutral wire. If your older home doesn\'t have one in the switch box, we can either pull a new neutral wire or install specific smart switches (like Lutron Caséta) designed to work without one.' },
    ],
  },
  {
    slug: 'ceiling-fan-installation',
    title: 'Ceiling Fan Installation',
    shortTitle: 'Ceiling Fans',
    icon: 'Fan',
    heroImage: 'https://images.pexels.com/photos/3935316/pexels-photo-3935316.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    heroAlt: 'Professionally installed modern ceiling fan in a Florida living room',
    metaTitle: 'Ceiling Fan Installation Lakeland FL | Fast & Wobble-Free',
    metaDesc: 'Professional ceiling fan installation in Lakeland, FL. We install fan-rated bracing boxes, assemble the fan, and ensure perfect, wobble-free operation. Call today!',
    h1: 'Ceiling Fan Installation in Lakeland, FL',
    intro: [
      'Surviving the blistering Central Florida heat requires maximum airflow. A properly installed ceiling fan not only dramatically improves your indoor comfort but also allows you to raise your AC thermostat, saving you massive amounts of money on your energy bills. Florida Electrical Systems is the top choice for professional ceiling fan installation in Lakeland and Polk County.',
      'Never attempt to hang a heavy ceiling fan from a standard plastic light fixture box—it is a recipe for disaster. Our licensed electricians ensure ultimate safety by installing heavy-duty, fan-rated bracing boxes that securely lock into your ceiling joists. We handle the complex wiring, flawless assembly, and precision balancing, guaranteeing a whisper-quiet, wobble-free breeze.',
    ],
    benefits: [
      { title: 'Heavy-Duty Bracing', desc: 'We rip out flimsy old lighting boxes and install steel, fan-rated junction boxes capable of supporting the heavy dynamic weight and vibration of a spinning fan.' },
      { title: 'Wobble-Free Guarantee', desc: 'A wobbling fan is annoying and dangerous. We meticulously balance the blades and torque all mounting hardware for dead-silent, perfectly smooth operation.' },
      { title: 'Outdoor & Lanai Fans', desc: 'We expertly install wet-rated and damp-rated outdoor ceiling fans for your patio or pool enclosure, ensuring they survive Florida\'s intense humidity.' },
      { title: 'Custom Wall Controls', desc: 'Tired of pull chains? We can install specialized in-wall remotes or dual-switch configurations to control the fan speed and lighting independently.' },
    ],
    process: [
      { title: '1. Structural Assessment', desc: 'We inspect the ceiling structure (flat or vaulted) to determine the necessary downrod length and ensure joist access.' },
      { title: '2. Box & Wiring Installation', desc: 'We install the fan-rated support brace and pull any necessary new 3-wire cabling from the switch to the ceiling.' },
      { title: '3. Assembly & Balancing', desc: 'We assemble the motor, attach the light kit and blades, mount it securely, and perform a high-speed wobble test.' },
    ],
    faqs: [
      { q: 'Can you install a ceiling fan in a room that currently has no ceiling wiring?', a: 'Yes! We specialize in cutting in new fan boxes and fishing wiring through your walls and ceilings to add a fan and switch where none previously existed.' },
      { q: 'My current ceiling fan wobbles violently on high speed. Can you fix it?', a: 'Absolutely. Violent wobbling is usually caused by a loose mounting bracket, a non-fan-rated plastic box, or warped blades. We will diagnose it, secure the mount, and re-balance the blades.' },
      { q: 'How high should my ceiling fan be from the floor?', a: 'For optimal airflow and safety, building codes require fan blades to be a minimum of 7 feet above the floor. For vaulted ceilings, we use extended downrods to achieve the perfect height.' },
    ],
  },
  {
    slug: 'electrical-inspection',
    title: 'Home Electrical Inspections',
    shortTitle: 'Inspections',
    icon: 'ShieldCheck',
    heroImage: 'https://images.pexels.com/photos/8293678/pexels-photo-8293678.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    heroAlt: 'Licensed inspector testing a home electrical panel for safety compliance',
    metaTitle: 'Home Electrical Inspection Lakeland FL | 4-Point & Safety Audits',
    metaDesc: 'Comprehensive home electrical inspections in Lakeland, FL. Ideal for buying a home, 4-point insurance requirements, or identifying hidden fire hazards. Call us!',
    h1: 'Comprehensive Electrical Inspections in Lakeland, FL',
    intro: [
      'Hidden electrical defects are the leading cause of home fires. Whether you are purchasing a new home, trying to secure homeowners insurance, or living in a house over 30 years old, a professional electrical inspection is your ultimate defense against disaster. Florida Electrical Systems provides the most rigorous and exhaustive electrical safety audits in Lakeland and Polk County.',
      'Home inspectors often lack the specialized training to catch dangerous wiring flaws. Our master electricians dive deep into your system. We pull the cover off your main panel to inspect for rust, double-tapped breakers, and thermal damage. We test grounding rods, verify GFCI protection, and hunt down illegal DIY wiring jobs. You receive a highly detailed, plain-English report outlining exactly what is safe and what needs immediate correction.',
    ],
    benefits: [
      { title: 'Pre-Purchase Protection', desc: 'Never buy a money pit. We uncover expensive hidden electrical nightmares before you close on the house, giving you powerful negotiation leverage.' },
      { title: 'Insurance Compliance', desc: 'We provide the exact, signed documentation and 4-point electrical inspection forms required by Florida homeowners insurance companies.' },
      { title: 'Fire Hazard Elimination', desc: 'We identify catastrophic risks like Federal Pacific panels, degrading aluminum wiring, and overloaded circuits before they spark a fire.' },
      { title: 'Code Violation Detection', desc: 'If a previous owner did unpermitted DIY work, we will find it, document it, and provide a clear, upfront estimate to bring it up to NEC code.' },
    ],
    process: [
      { title: '1. The Deep Dive', desc: 'Our electrician spends 1-2 hours thoroughly examining your service drop, meter, main panel, subpanels, attic wiring, and grounded outlets.' },
      { title: '2. Diagnostic Testing', desc: 'We don\'t just look; we test. We check GFCI/AFCI trip times, measure voltage drops, and torque loose panel connections.' },
      { title: '3. The Final Report', desc: 'We deliver a comprehensive, prioritized report complete with photographic evidence of hazards and transparent quotes for any necessary repairs.' },
    ],
    faqs: [
      { q: 'How is your electrical inspection different from a standard general home inspection?', a: 'General home inspectors do a surface-level visual check. They are not licensed electricians. We remove panel covers, test actual load voltages, identify specific recalled components, and can instantly provide accurate repair costs.' },
      { q: 'When should I definitely schedule an electrical inspection?', a: 'You need an inspection if: the home is over 25 years old, you are buying/selling, you experience frequent tripped breakers, your lights flicker constantly, or your insurance company requests a 4-point inspection.' },
      { q: 'What is aluminum wiring and why do insurance companies hate it?', a: 'Homes built between 1965 and 1973 often used aluminum wiring, which expands and contracts over time, loosening connections and creating severe fire hazards. We can inspect for it and install AlumiConn retrofits to satisfy insurance requirements.' },
    ],
  },
];

export const HOME_FAQS = [
  { q: 'What areas does Florida Electrical Systems serve?', a: 'We serve Lakeland and all of Polk County, including Bartow, Winter Haven, Auburndale, Mulberry, Plant City, Haines City, Davenport, Lake Wales, and surrounding communities in Central Florida.' },
  { q: 'Are you a licensed and insured electrical contractor?', a: 'Yes, absolutely. Florida Electrical Systems is a fully licensed and insured Registered Electrical Contractor operating in the state of Florida. Every technician we dispatch is rigorously trained, background-checked, and highly experienced in both residential and commercial electrical codes.' },
  { q: 'Do you offer free estimates for electrical work?', a: 'Yes, we provide free, no-obligation, upfront estimates for most residential and commercial electrical installations and major repairs. We believe in 100% transparent pricing with zero hidden fees.' },
  { q: 'Do you offer 24/7 emergency electrical service in Lakeland?', a: 'Yes. Electrical emergencies are incredibly dangerous. We provide priority 24/7 emergency electrical repairs for power outages, smoking panels, sparking wires, and storm damage throughout Lakeland and Polk County.' },
  { q: 'Why do my circuit breakers keep tripping?', a: 'A tripping breaker is a critical safety mechanism. It usually means the circuit is overloaded with too many appliances, there is a short circuit in the wiring, or the breaker itself is failing. This requires immediate professional diagnosis to prevent a fire.' },
  { q: 'Do you handle electrical panel upgrades and replacements?', a: 'Yes, panel upgrades are one of our core specialties. We replace dangerous, outdated panels (like Zinsco or FPE) and perform full 200-amp service upgrades to accommodate heavy loads like new HVAC systems, hot tubs, and EV chargers.' },
];

export const TESTIMONIALS = [
  { name: 'Riym84', location: 'Local Guide', text: 'The guys came out to install a generator interlock kit on my panel today. They showed up exactly when they said they would. The work is fantastic, and the price was very reasonable. No more extension cords during hurricanes!! Thank you guys for the great work.' },
  { name: 'Casey Copeland', location: 'Local Guide', text: 'I have used Florida Electrical Systems a few times and they are excellent. Forrest and J.B. are very professional and clean. They did work inside and outside of my home and I couldn\'t even tell they were here. Their quality and price is the best around.' },
  { name: 'Ilia Valentin', location: 'Florida', text: 'Great company! Their job was outstanding! I had to replace my electrical panel and my meter jaws needed to be replaced as well and found this company on FB and was very impressed! They were on time for the estimate and to perform the job.' },
  { name: 'Tracy Palmer', location: 'Local Guide', text: 'Excellent job! All wires straight and clean! Even wiped the box and conduit clean and swept the area. There is no sign they were ever here except now I have power to my spa. I highly recommend this company.' },
  { name: 'Angela Booth', location: 'Florida', text: 'I highly recommend Florida Electrical Systems! They did an awesome professional job running electric to my patio & installed a ceiling fan. I also had them install new motion lights. Very friendly & honest guys!' },
  { name: 'Sara Foster', location: 'Florida', text: 'The team was amazing and great to work with. They are all so friendly and efficient! Communicated everyday, every step of the way. They worked with us when we had last minute issues to fix for insurance and they made the work happen.' },
];
