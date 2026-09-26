/* ==========================================================
   SERVICE-DETAIL.JS - ORVEXA Service Detail Page Logic
   All 6 service data objects + comprehensive metrology data
   ========================================================== */

const SERVICES = {
  'safety-inspection': {
    slug: 'safety-inspection',
    name: 'Statutory Safety Inspection',
    eyebrow: 'CORE SERVICE',
    tagline: '48-Point Physical Protocol & Deceleration Diagnostics',
    heroTitle: 'Statutory Safety',
    heroTitleItalic: 'Inspection.',
    price: '$185',
    priceNote: 'Per vehicle',
    duration: '15&ndash;20 min',
    badge: 'ISO 17020',
    heroImg: 'assets/real_test_undercarriage_lift.png',
    overview: 'Our Statutory Safety Inspection performs a rigorous 48-point physical verification of every safety-critical system on your vehicle. From brake force distribution to structural rigidity, our calibrated technicians ensure your vehicle meets every regional compliance requirement before you leave the bay.',
    specs: [
      { label: 'STATUTORY STANDARD', val: 'ISO/IEC 17020 Type A' },
      { label: 'CALIBRATED RIG', val: 'Maha IW4 Eurosystem' },
      { label: 'INSPECTION DEPTH', val: '48 Physical Points' },
      { label: 'REGISTRY SYNC', val: 'Direct Gov Sync' }
    ],
    highlights: [
      '48-point physical & mechanical checklist',
      'Brake force distribution & drag torque analysis',
      'Chassis geometry laser plane alignment scan',
      'Lighting & signalling cut-off angle verification',
      'Tyre depth, carcass integrity & pressure audit',
      'Steering & suspension pneumatic joint audit'
    ],
    process: [
      {
        num: '01',
        title: 'Intake & Optical Laser Alignment',
        desc: 'Vehicle positioned on precision ground plates. High-speed optical scanners verify VIN identity against statutory road registries while laser planes check ride height and subframe squareness.',
        tag: 'STAGE 1 // 03 MIN'
      },
      {
        num: '02',
        title: 'Brake Roller Dynamometry',
        desc: 'Maha IW4 roller dynamometer measures peak deceleration, left/right disparity (strictly under statutory 15% delta), hydraulic pedal pressure, and emergency brake holding torque.',
        tag: 'STAGE 2 // 06 MIN'
      },
      {
        num: '03',
        title: 'Hydraulic & Suspension Joint Audit',
        desc: 'Pneumatic play detectors stress steering ball joints, tie rod ends, control arm bushings, shock valving, and anti-roll bar end links under simulated dynamic cornering loads.',
        tag: 'STAGE 3 // 06 MIN'
      },
      {
        num: '04',
        title: 'Statutory Clearance & Pass Sign-Off',
        desc: 'Technician signs off clearance log. Cryptographic pass uploaded to central transport authority servers and tamper-proof paper certificate printed on statutory bond.',
        tag: 'STAGE 4 // 03 MIN'
      }
    ],
    deliverables: [
      {
        title: 'Statutory Compliance Certificate',
        desc: 'Official government-recognized inspection pass with embedded cryptographic verification QR hash.',
        badge: 'OFFICIAL RECORD'
      },
      {
        title: '48-Point Diagnostic Slip',
        desc: 'Comprehensive technical breakdown detailing exact brake force values, tyre tread depths, and alignment angles.',
        badge: 'DATA DOSSIER'
      },
      {
        title: 'Instant Authority Sync Confirmation',
        desc: 'Direct electronic confirmation of inspection pass submitted instantly to national transport authorities.',
        badge: 'GOV SYNC'
      },
      {
        title: '30-Day Free Re-Inspection Pass',
        desc: 'Guaranteed warranty on advisory items with zero-fee secondary review within 30 statutory days.',
        badge: 'COMPLIANCE BOND'
      }
    ],
    whyChoose: [
      { title: 'Legally Mandated Standard', desc: 'Meets all regional statutory compliance requirements. Pass or fail report issued on the spot with a 64-char QR certificate.' },
      { title: 'Calibrated Dyno Equipment', desc: 'Our brake rollers and chassis alignment rigs are calibrated quarterly to UKAS traceable standards.' },
      { title: 'Fast 15-20 Min Turnaround', desc: 'Completed in 15-20 minutes. Digital report emailed within 30 minutes of bay exit.' },
      { title: 'Free 30-Day Re-Inspection', desc: 'Failed items re-checked free of charge within 30 days. No hidden administration fees.' }
    ],
    pricing: [
      { name: 'Standard Safety Inspection', price: '$185', note: 'Single passenger vehicle, all classes' },
      { name: 'Priority Fast-Lane Access', price: '$45', note: 'Skip standard queue, zero wait' },
      { name: 'Combined Safety + Emissions', price: '$295', note: 'Best value bundle, save $35' }
    ],
    faqs: [
      { q: 'What vehicles do you inspect?', a: 'All passenger vehicles, SUVs, light commercial vehicles, and motorcycles up to 3.5 tonnes GVW.' },
      { q: 'How long does it take?', a: '15-20 minutes from bay entry to bay exit. Digital report and official certificate issued within 30 minutes.' },
      { q: 'What happens if my vehicle fails?', a: 'You receive a detailed advisory report specifying the exact defect and required remediation. Return within 30 days for a free re-inspection on failed items.' },
      { q: 'Is the certificate recognized for annual registration?', a: 'Yes. Our certificates are legally equivalent to state inspection stations and directly linked to government road transport databases.' }
    ]
  },
  'emissions-testing': {
    slug: 'emissions-testing',
    name: '5-Gas Emissions Spectrometry',
    eyebrow: 'EMISSIONS PROTOCOL',
    tagline: 'Optical Gas Chromatography & Tailpipe Analysis',
    heroTitle: 'Emissions',
    heroTitleItalic: 'Spectrometry.',
    price: '$145',
    priceNote: 'Per vehicle',
    duration: '15&ndash;20 min',
    badge: 'ECE R83',
    heroImg: 'assets/service_emissions.jpg',
    overview: 'ORVEXA 5-Gas Emissions Spectrometry uses dyno-loaded tailpipe optical gas chromatography to measure CO, CO₂, HC, O₂, and NOx concentrations simultaneously. Combined with a full OBD-II readiness monitor sweep, this service delivers comprehensive emissions compliance data aligned with ECE Regulation 83 and regional authority standards.',
    specs: [
      { label: 'REGULATORY MANDATE', val: 'ECE Regulation 83 / Euro 6' },
      { label: 'OPTICAL BENCH', val: 'Capelec CAP3201 NDIR' },
      { label: 'GASES ANALYZED', val: 'CO, CO₂, HC, O₂, NOx' },
      { label: 'OBD PROTOCOL', val: 'CAN / K-Line Full Sweep' }
    ],
    highlights: [
      '5-gas optical analysis (CO, CO₂, HC, O₂, NOx ppm)',
      'Dyno-loaded simulated road driving cycle',
      'Full OBD-II readiness monitor bus verification',
      'Lambda (λ) stoichiometric combustion calculation',
      'Calibrated diesel smoke opacity absorption index',
      'Cryptographically anchored environmental passport'
    ],
    process: [
      {
        num: '01',
        title: 'Thermal & ECU Normalisation',
        desc: 'Engine brought to stable operating temperature (>80°C oil). OBD-II scan verifies that all emission readiness flags (catalyst, EVAP, O₂ sensors) are fully set without pending fault codes.',
        tag: 'STAGE 1 // 03 MIN'
      },
      {
        num: '02',
        title: 'NDIR Optical Gas Sampling',
        desc: 'Capelec dual-wavelength non-dispersive infrared sensors analyze exhaust gas absorption across calibrated optical paths, measuring volumetric concentrations of CO, CO₂, and unburnt hydrocarbons.',
        tag: 'STAGE 2 // 05 MIN'
      },
      {
        num: '03',
        title: 'Dyno-Loaded Stoichiometry Sweep',
        desc: 'Vehicle loaded on chassis dyno to simulate steady 50 km/h cruising. Exhaust telemetry measures Lambda (λ) combustion balance (0.97–1.03 tolerance) and catalytic converter conversion efficiency.',
        tag: 'STAGE 3 // 06 MIN'
      },
      {
        num: '04',
        title: 'Environmental Register Clearance',
        desc: 'Results validated against statutory emission tables. Official emissions certificate generated with instantaneous digital upload to regional clean air compliance databases.',
        tag: 'STAGE 4 // 04 MIN'
      }
    ],
    deliverables: [
      {
        title: 'Statutory Gas Compliance Pass',
        desc: 'Official environmental roadworthiness pass certifying tailpipe emissions conform to regional clean air regulations.',
        badge: 'OFFICIAL PASS'
      },
      {
        title: '5-Gas Spectrometry Data Curve',
        desc: 'Full diagnostic printout showing exact PPM and percentage concentrations for CO, HC, CO₂, O₂, and calculated Lambda.',
        badge: 'SPECTROMETRY'
      },
      {
        title: 'OBD-II Readiness Monitor Log',
        desc: 'Digital ECU bus readout confirming catalytic converter, EVAP purge, and secondary air injection health status.',
        badge: 'ECU REPORT'
      },
      {
        title: 'Low-Emission Zone Token',
        desc: 'Digital compliance pass valid for municipal ultra-low emission driving zones and urban access permits.',
        badge: 'ZONE PERMIT'
      }
    ],
    whyChoose: [
      { title: 'Laboratory NDIR Precision', desc: 'Non-dispersive infrared sensors provide lab-grade accuracy impossible to achieve with standard garage handheld tools.' },
      { title: 'Full OBD-II ECU Integration', desc: 'Full readiness monitor status ensures all ECU emission-related monitors are ready before certification.' },
      { title: 'Covers Diesel &amp; Petrol', desc: 'Our protocol adapts automatically for diesel opacity measurement or petrol lambda-based optical spectrometry.' },
      { title: 'Regional Clean Air Recognition', desc: 'Results accepted by regional authorities for annual vehicle registration and roadworthiness compliance.' }
    ],
    pricing: [
      { name: '5-Gas Emissions Test', price: '$145', note: 'Single vehicle, petrol or diesel' },
      { name: 'OBD-II Diagnostic Deep Scan', price: '$65', note: 'Full DTC read, clear & sensor curve' },
      { name: 'Combined Protocol Bundle', price: '$295', note: 'Safety + Emissions, saves $35' }
    ],
    faqs: [
      { q: 'Does this cover diesel vehicles?', a: 'Yes. Diesel vehicles receive a calibrated smoke opacity test using optical absorption opacimeters in addition to gas analysis.' },
      { q: 'What is the Lambda test?', a: 'Lambda (λ) measures the exact air-fuel ratio of your engine exhaust, indicating combustion efficiency and catalytic converter health.' },
      { q: 'My check engine light is illuminated. Can I be tested?', a: 'We will diagnose active fault codes during testing. Active emissions-related fault codes will fail statutory standards, but we provide specific remediation guidance.' },
      { q: 'How should I prepare my vehicle?', a: 'Drive at normal speeds for at least 15 minutes before your appointment to ensure engine oil and catalytic converters reach normal operating temperatures.' }
    ]
  },
  'combined-protocol': {
    slug: 'combined-protocol',
    name: 'Combined Comprehensive Protocol',
    eyebrow: 'BEST VALUE',
    tagline: 'Safety + Emissions + Instant Digital Certification',
    heroTitle: 'Combined',
    heroTitleItalic: 'Comprehensive.',
    price: '$295',
    priceNote: 'Save $35 vs. separate',
    duration: '20&ndash;25 min',
    badge: 'ISO 17020',
    heroImg: 'assets/real_test_mechanic_tablet.png',
    overview: 'The Combined Comprehensive Protocol combines the full 48-point Statutory Safety Inspection and 5-Gas Emissions Spectrometry into a single seamless bay session, with priority lane access and instant digital certificate clearance included. The most efficient and cost-effective way to achieve full vehicle compliance in a single visit.',
    specs: [
      { label: 'PROTOCOL SUITE', val: 'Unified Safety + 5-Gas' },
      { label: 'LANE ASSIGNMENT', val: 'Express Priority Bay' },
      { label: 'SESSION DURATION', val: '20–25 Minutes Total' },
      { label: 'VALUE ADVANTAGE', val: 'Save $35 vs. Separate' }
    ],
    highlights: [
      'Full 48-point physical safety verification',
      'Complete 5-gas optical tailpipe emissions suite',
      'Priority fast-track bay access (skip general queue)',
      'Single combined compliance certificate issued',
      'Consolidated 20–25 minute uninterrupted session',
      'Saves $35 versus booking individual inspections'
    ],
    process: [
      {
        num: '01',
        title: 'Priority Fast-Track Intake',
        desc: 'Dedicated priority lane check-in. Vehicle placed on bay pads while two certified inspectors simultaneously initiate laser geometry scanning and OBD-II diagnostics.',
        tag: 'STAGE 1 // 04 MIN'
      },
      {
        num: '02',
        title: 'Synchronized Dyno Run',
        desc: 'Vehicle driven onto dual-purpose dynamometer. Roller system executes deceleration brake balance testing while optical probes sample 5-gas emissions under dyno load.',
        tag: 'STAGE 2 // 08 MIN'
      },
      {
        num: '03',
        title: 'Underchassis & Optical Systems',
        desc: 'Complete inspection of suspension joints, steering linkages, brake lines, tyre depths, headlight beam alignment angles, and safety restraint operation.',
        tag: 'STAGE 3 // 07 MIN'
      },
      {
        num: '04',
        title: 'Unified Blockchain Certification',
        desc: 'Both safety and emissions passes consolidated into a single tamper-proof cryptographic passport with immediate electronic submission to statutory databases.',
        tag: 'STAGE 4 // 04 MIN'
      }
    ],
    deliverables: [
      {
        title: 'Unified Statutory Compliance Pass',
        desc: 'One all-inclusive certificate satisfying both annual safety and emissions roadworthiness requirements.',
        badge: 'DUAL CERTIFICATE'
      },
      {
        title: 'Full Combined Telemetry Dossier',
        desc: 'Comprehensive multi-page printout with brake efficiency graphs, 5-gas curves, and alignment tolerances.',
        badge: 'COMPLETE LOG'
      },
      {
        title: 'Instant Statutory Database Sync',
        desc: 'Direct electronic handshake clearing your vehicle status with transport licensing and insurance registers.',
        badge: 'INSTANT CLEAR'
      },
      {
        title: 'Annual Priority Bay Voucher',
        desc: 'Guaranteed express fast-track lane access for your next scheduled annual inspection.',
        badge: 'VIP BENEFIT'
      }
    ],
    whyChoose: [
      { title: 'One Visit, Total Compliance', desc: 'Complete your entire annual vehicle compliance requirement in a single 20-25 minute appointment. No return trips.' },
      { title: 'Significant Cost Savings', desc: 'At $295, you save $35 versus booking Safety ($185) and Emissions ($145) separately. Priority lane included free.' },
      { title: 'Dedicated Dual Technicians', desc: 'Combined Protocol clients receive dual-technician lane staffing ensuring thoroughness in half the time.' },
      { title: 'Instant Single Certification', desc: 'Your combined compliance certificate is generated and QR-signed within 30 minutes of bay exit.' }
    ],
    pricing: [
      { name: 'Combined Comprehensive Protocol', price: '$295', note: 'Recommended — all-in-one best value' },
      { name: 'Priority Fast Lane (Included)', price: 'Free', note: 'Included with combined booking ($45 value)' },
      { name: 'Digital Blockchain Pass (Included)', price: 'Free', note: 'Permanent 64-char QR certificate ($35 value)' }
    ],
    faqs: [
      { q: 'Is the priority lane really included?', a: 'Yes. All Combined Protocol bookings include priority lane access at no extra charge, guaranteeing bay entry within 5 minutes of arrival.' },
      { q: 'How long does the entire session take?', a: '20-25 minutes total for both safety and emissions in a single uninterrupted bay session.' },
      { q: 'Can I upgrade from a single test on arrival?', a: 'Yes. If you arrive booked for a single test, you can upgrade on arrival to the Combined Protocol simply by paying the difference.' },
      { q: 'What certificate do I receive?', a: 'One combined compliance certificate covering both safety and emissions, with a single QR verification hash valid for the full statutory period.' }
    ]
  },
  'fleet-compliance': {
    slug: 'fleet-compliance',
    name: 'Fleet Compliance Management',
    eyebrow: 'FLEET SERVICES',
    tagline: 'Multi-Vehicle Scheduled Inspection Programme',
    heroTitle: 'Fleet',
    heroTitleItalic: 'Compliance.',
    price: '$850',
    priceNote: 'Per fleet / month',
    duration: 'Scheduled',
    badge: 'FLEET PLAN',
    heroImg: 'assets/card_clean_road.jpg',
    overview: 'ORVEXA Fleet Compliance Management provides transport operators, logistics companies, and corporate vehicle pools with a fully managed inspection scheduling programme. From automated expiry alerts to bulk bay allocation, your entire fleet stays compliant without manual administration overhead.',
    specs: [
      { label: 'PROGRAMME ARCHITECTURE', val: 'Centralised Bulk Fleet API' },
      { label: 'FLEET CAPACITY', val: '10 to 500+ Assets' },
      { label: 'BAY ALLOCATION', val: 'Guaranteed Same-Day SLA' },
      { label: 'BILLING CADENCE', val: 'Consolidated Monthly Tax' }
    ],
    highlights: [
      'Digital cloud portal for bulk booking & scheduling',
      'Automated expiry & statutory renewal push alerts',
      'Real-time fleet-wide compliance health dashboard',
      'Dedicated corporate account manager assigned',
      'Consolidated monthly billing statement with volume rates',
      'Fully scalable from 10 to 500+ commercial vehicles'
    ],
    process: [
      {
        num: '01',
        title: 'Automated Expiry Queueing',
        desc: 'Our enterprise cloud syncs with your fleet registry, identifying vehicles with upcoming 30/14/7-day statutory deadlines and automatically reserving bay slots.',
        tag: 'STAGE 1 // CLOUD SYNC'
      },
      {
        num: '02',
        title: 'Express Commercial Bay Allocation',
        desc: 'Fleet vehicles enter dedicated commercial inspection lanes. Fast barcode scan validates driver ID and vehicle chassis numbers with zero paperwork delay.',
        tag: 'STAGE 2 // FAST BAY'
      },
      {
        num: '03',
        title: 'Heavy-Duty & Commercial Protocol',
        desc: 'Certified commercial vehicle inspectors execute safety, braking, emissions, and structural load assessments tailored to commercial transit standards.',
        tag: 'STAGE 3 // COMMERCIAL'
      },
      {
        num: '04',
        title: 'Live Enterprise Dashboard Sync',
        desc: 'Inspection passes instantly sync to your corporate dashboard. Account controllers receive compliance certificates and automated ledger updates.',
        tag: 'STAGE 4 // DASHBOARD'
      }
    ],
    deliverables: [
      {
        title: 'Enterprise Fleet Management Portal',
        desc: 'Full web dashboard tracking real-time compliance status, upcoming expiries, and vehicle logs across all corporate assets.',
        badge: 'WEB CONSOLE'
      },
      {
        title: 'Consolidated Monthly Invoicing',
        desc: 'Single unified tax statement with volume rate tiering, driver notes, and complete inspection expense breakdown.',
        badge: 'TAX LEDGER'
      },
      {
        title: 'Automated 30/14/7-Day Expiry Alerts',
        desc: 'Automated notification engine alerting fleet managers and drivers before statutory compliance lapses occur.',
        badge: 'AUTOMATED ALERTS'
      },
      {
        title: 'Dedicated Corporate Account Manager',
        desc: 'Direct specialist for priority lane dispatch, emergency replacement scheduling, and on-site mobile audits.',
        badge: 'CONCIERGE'
      }
    ],
    whyChoose: [
      { title: 'Zero Administrative Overhead', desc: 'Automated reminders, digital certificates, and consolidated monthly invoicing eliminate manual compliance tracking entirely.' },
      { title: 'Volume Tier Pricing Discounts', desc: 'Fleets of 20+ vehicles receive a 12% inspection fee discount. 50+ vehicles receive 18% and a free dedicated bay slot.' },
      { title: 'Real-Time Compliance Dashboard', desc: 'Track every vehicle status, upcoming expiry, and historical inspection record from a single web dashboard.' },
      { title: 'Guaranteed Priority Bay Access', desc: 'Fleet vehicles receive guaranteed same-day bay access during business hours across all three ORVEXA centres.' }
    ],
    pricing: [
      { name: 'Starter Fleet (10-19 vehicles)', price: '$850/mo', note: 'Base plan, standard rate' },
      { name: 'Business Fleet (20-49 vehicles)', price: '$1,450/mo', note: '12% per-vehicle discount' },
      { name: 'Enterprise Fleet (50+ vehicles)', price: 'Custom', note: 'Contact corporate account team' }
    ],
    faqs: [
      { q: 'What is the minimum fleet size for this programme?', a: 'Our Fleet Compliance Management programme starts at 10 vehicles. Smaller fleets can use individual bookings via the standard portal.' },
      { q: 'How does the automated scheduling work?', a: 'Your account manager sets up a rolling inspection schedule. Automated reminders are sent 30, 14, and 7 days before each vehicle\'s due date.' },
      { q: 'Can our operations team access the compliance dashboard?', a: 'Yes. Every fleet account includes real-time dashboard access for up to 5 authorised users with vehicle-level inspection history.' },
      { q: 'Do you offer on-site fleet inspections at our depot?', a: 'Yes, for fleets of 30+ vehicles. Our Mobile Rapid Verification Unit can attend your depot. Contact your account manager for availability.' }
    ]
  },
  'digital-certification': {
    slug: 'digital-certification',
    name: 'Digital Certification',
    eyebrow: 'DIGITAL RECORDS',
    tagline: 'Blockchain-Secured Vehicle Compliance Passport',
    heroTitle: 'Digital',
    heroTitleItalic: 'Certification.',
    price: '$35',
    priceNote: 'Per certificate',
    duration: 'Instant',
    badge: 'ENCRYPTED',
    heroImg: 'assets/card_tablet_cert.jpg',
    overview: 'ORVEXA Digital Certification converts your physical inspection result into a permanent, tamper-proof blockchain-anchored digital record. Each certificate carries a unique 64-character QR verification hash, making it instantly verifiable by law enforcement, insurers, and vehicle licensing authorities via smartphone scan.',
    specs: [
      { label: 'CRYPTOGRAPHIC CIPHER', val: 'SHA-256 Distributed Hash' },
      { label: 'VERIFICATION SPEED', val: 'Instant QR Smartphone Scan' },
      { label: 'STORAGE ARCHITECTURE', val: '10-Year Redundant Vault' },
      { label: 'LEGAL STATUTE', val: 'Statutory Digital Act Compliant' }
    ],
    highlights: [
      '64-character SHA-256 cryptographic verification hash',
      'Blockchain-anchored immutable tamper-proof record',
      'Instant SMS & email delivery with mobile wallet pass',
      'Universally verifiable by police & licensing authorities',
      '10-year encrypted digital historical archive access',
      'Legally recognized across all regional transport bodies'
    ],
    process: [
      {
        num: '01',
        title: 'Telemetry Package Compilation',
        desc: 'Inspector digital signatures, raw sensor measurements, bay timestamps, and VIN data are packaged into an immutable JSON compliance metadata payload.',
        tag: 'STAGE 1 // COMPILE'
      },
      {
        num: '02',
        title: 'Cryptographic Hash Minting',
        desc: 'The payload is hashed through a SHA-256 cryptographic algorithm, generating a permanent 64-character hexadecimal digest anchored to the compliance ledger.',
        tag: 'STAGE 2 // LEDGER'
      },
      {
        num: '03',
        title: 'Dynamic QR Code Generation',
        desc: 'A dynamic secure QR verification token is generated, resolving to an SSL-encrypted public verification gateway showing real-time certificate validity.',
        tag: 'STAGE 3 // QR MINT'
      },
      {
        num: '04',
        title: 'Multi-Channel Push Dispatch',
        desc: 'The digital certificate passport is pushed directly to your registered smartphone, Apple/Google Wallet, email, and the official transport licensing registry.',
        tag: 'STAGE 4 // DISPATCH'
      }
    ],
    deliverables: [
      {
        title: 'Cryptographic 64-Character QR Passport',
        desc: 'Universal scannable compliance badge verifiable by police, transport regulators, and vehicle purchasers worldwide.',
        badge: 'IMMUTABLE'
      },
      {
        title: 'Mobile Wallet Digital Pass',
        desc: 'Native Apple Wallet and Google Wallet digital passes with live expiration countdown and bay reminder notifications.',
        badge: 'WALLET PASS'
      },
      {
        title: '10-Year Cloud Archive & Audit Trail',
        desc: 'Perpetual historical vault preserving every telemetry point, calibration log, and certificate for the life of the vehicle.',
        badge: 'PERPETUAL'
      },
      {
        title: 'Transferable Resale Valuation Dossier',
        desc: 'Verifiable vehicle maintenance pedigree that proves legitimate roadworthiness history to prospective vehicle buyers.',
        badge: 'RESALE ASSET'
      }
    ],
    whyChoose: [
      { title: 'Tamper-Proof Ledger Security', desc: 'Each certificate is hashed and anchored to a public ledger. Any physical or digital tampering invalidates the certificate verification.' },
      { title: 'Instantaneous Mobile Delivery', desc: 'Delivered to your registered email and mobile within 30 minutes of passing your inspection. No waiting for postal documents.' },
      { title: 'Universal Smartphone Scanning', desc: 'Any smartphone camera can scan the QR code to verify authenticity, date, vehicle, and inspection results in real time.' },
      { title: '10-Year Historical Cloud Archive', desc: 'Your complete inspection history is archived and accessible through your secure ORVEXA account for a decade.' }
    ],
    pricing: [
      { name: 'Digital Certificate (Standalone)', price: '$35', note: 'Issued same-day with QR passport' },
      { name: 'Historical Archive Replacement', price: '$15', note: 'Re-issue or update lost credentials' },
      { name: 'Included with Combined Protocol', price: 'Free', note: 'No extra charge with combined bookings' }
    ],
    faqs: [
      { q: 'Is this legally the same as a paper certificate?', a: 'Yes. ORVEXA digital certificates are legally equivalent to physical certificates under current regional regulations, as they carry a unique authority-registered hash.' },
      { q: 'What if I lose access to my email?', a: 'Your certificate is permanently stored in your ORVEXA account. You can re-download it at any time by logging in or contacting our support team.' },
      { q: 'Can insurers and licensing authorities verify my certificate?', a: 'Yes. Insurers and licensing authorities verify your certificate via the public QR scan portal using the 64-character verification hash.' },
      { q: 'How long is the certificate valid?', a: 'The certificate validity period matches your statutory inspection cycle (typically 12 months). Your account will alert you 30 days before expiry.' }
    ]
  },
  'ev-hybrid': {
    slug: 'ev-hybrid',
    name: 'EV &amp; Hybrid Telemetry',
    eyebrow: 'EV &amp; HYBRID',
    tagline: 'High-Voltage Battery Health & Motor Dyno Profiling',
    heroTitle: 'EV &amp; Hybrid',
    heroTitleItalic: 'Telemetry.',
    price: '$220',
    priceNote: 'Per vehicle',
    duration: '20&ndash;30 min',
    badge: 'NEW 2025',
    heroImg: 'assets/real_test_obd_engine.png',
    overview: 'ORVEXA EV &amp; Hybrid Telemetry is specifically engineered for battery-electric vehicles (BEVs), plug-in hybrids (PHEVs), and mild-hybrids. Our protocol covers battery state-of-health (SOH) analysis, high-voltage insulation resistance testing, regenerative braking efficiency validation, and motor output dyno profiling — delivering the most comprehensive EV health report available outside a manufacturer dealership.',
    specs: [
      { label: 'HIGH-VOLTAGE STANDARD', val: 'UNECE Regulation 100 Rev 3' },
      { label: 'INSULATION TESTER', val: 'Fluke 1587 FC (1000V DC)' },
      { label: 'BMS INTERFACE', val: 'Direct High-Speed CANbus' },
      { label: 'INSPECTOR LEVEL', val: 'IEV Level 3 Certified' }
    ],
    highlights: [
      'Battery state-of-health (SOH%) degradation analysis',
      'High-voltage insulation resistance test up to 1000V DC',
      'Regenerative braking kinetic energy recapture audit',
      'Motor output & inverter efficiency dyno profile',
      'BMS fault code read & battery thermal circuit check',
      'DC fast-charge port contact resistance measurement'
    ],
    process: [
      {
        num: '01',
        title: 'High-Voltage Isolation & Resistance',
        desc: 'Fluke 1587 FC calibrated insulation analyzer injects 1000V DC across HV positive/negative rails to vehicle chassis, certifying isolation impedance exceeds 500 MΩ.',
        tag: 'STAGE 1 // 05 MIN'
      },
      {
        num: '02',
        title: 'Direct BMS CANbus Telemetry',
        desc: 'High-speed diagnostic interface taps into battery management system bus, analyzing individual cell voltage balance, module temperatures, cycle count, and true remaining kWh capacity.',
        tag: 'STAGE 2 // 08 MIN'
      },
      {
        num: '03',
        title: 'Dyno Regenerative Deceleration Test',
        desc: 'Vehicle placed on dyno to measure kinetic energy recapture curves across varied deceleration loads, confirming inverter regeneration health and brake blending balance.',
        tag: 'STAGE 3 // 08 MIN'
      },
      {
        num: '04',
        title: 'Thermal Circuit & Port Inspection',
        desc: 'Infrared thermography scans battery cooling radiators, coolant valving, HV orange cabling insulation, and DC fast-charge port pins for thermal degradation.',
        tag: 'STAGE 4 // 05 MIN'
      }
    ],
    deliverables: [
      {
        title: 'EV & HV Electrical Safety Pass',
        desc: 'Official compliance validation verifying electrical isolation integrity and powertrain roadworthiness to IEV standards.',
        badge: 'EV CERTIFIED'
      },
      {
        title: 'Battery State-of-Health (SOH) Dossier',
        desc: 'True usable kWh capacity, degradation percentage, cell balance delta, and estimated lifetime range degradation projection.',
        badge: 'BATTERY SOH'
      },
      {
        title: 'Regenerative Deceleration Graph',
        desc: 'Deceleration kinetic recovery profile graph verifying motor-generator and inverter energy conversion efficiency.',
        badge: 'DYNO GRAPH'
      },
      {
        title: 'Thermal Management & Port Log',
        desc: 'Cooling loop efficiency, temperature variance across battery modules, and charging port contact resistance analysis.',
        badge: 'THERMAL LOG'
      }
    ],
    whyChoose: [
      { title: 'True Battery SOH Analysis', desc: 'Our BMS interface tools read real degradation data directly from the battery management system — not estimates. Know your true remaining range capacity.' },
      { title: 'IEV Level 3 Certified Technicians', desc: 'All EV inspectors hold IEV Level 3 high-voltage safety certification. Your vehicle is handled safely by trained EV specialists.' },
      { title: 'Comprehensive Brand Compatibility', desc: 'Compatible with Tesla, Rivian, BMW, Mercedes, VW, Porsche, Hyundai, Kia, Nissan, and all major EV & hybrid manufacturers.' },
      { title: 'Future-Ready Degradation Curves', desc: 'Detailed digital reports include predicted battery degradation curves and estimated range at 80k, 160k, and 240k kilometre milestones.' }
    ],
    pricing: [
      { name: 'EV & Hybrid Telemetry Protocol', price: '$220', note: 'All BEV, PHEV, mild-hybrid models' },
      { name: 'Safety Inspection Add-on', price: '$120', note: 'When combined with EV Telemetry' },
      { name: 'Full EV Compliance Bundle', price: '$310', note: 'EV Telemetry + Safety + Certificate' }
    ],
    faqs: [
      { q: 'Does this work with my Tesla or Rivian?', a: 'Yes. We use specialized third-party BMS interface tools fully compatible with Tesla, Rivian, and other brands that restrict standard OBD-II access, providing equivalent state-of-health data.' },
      { q: 'What is the High-Voltage insulation test?', a: 'A high-voltage insulation resistance test checks that the high-voltage cabling and battery enclosure are fully isolated from the vehicle chassis — a critical safety verification preventing electrocution hazards.' },
      { q: 'How does regenerative brake testing work?', a: 'Your vehicle is placed on a dyno and controlled deceleration profiles measure the regenerative braking system\'s energy recovery efficiency compared to factory specifications.' },
      { q: 'My hybrid drives fine. Do I still need this test?', a: 'Silent battery degradation can reduce range and fuel efficiency without triggering dashboard warning lights. SOH analysis is the only definitive way to know your battery pack\'s true operational health.' }
    ]
  }
};

// ==========================================================
//  PAGE POPULATION
// ==========================================================
function getServiceSlug() {
  const params = new URLSearchParams(window.location.search);
  return params.get('service') || 'safety-inspection';
}

function populatePage() {
  const slug = getServiceSlug();
  const svc = SERVICES[slug];
  if (!svc) {
    window.location.href = 'service.html';
    return;
  }

  document.title = 'ORVEXA | ' + svc.name.replace(/&amp;/g, '&');

  // Hero Population
  setHTML('sdHeroEyebrow', svc.eyebrow);
  setHTML('sdHeroTitle', svc.heroTitle);
  setHTML('sdHeroTitleItalic', svc.heroTitleItalic);
  setHTML('sdHeroPrice', svc.price);
  setHTML('sdHeroPriceNote', svc.priceNote);
  setHTML('sdHeroDuration', svc.duration);
  setHTML('sdHeroBadge', svc.badge);
  setHTML('sdHeroTagline', svc.tagline);
  
  var heroImg = document.getElementById('sdHeroImg');
  if (heroImg) {
    heroImg.src = svc.heroImg;
    heroImg.alt = svc.name;
  }
  var cardTag = document.getElementById('sdCardTagText');
  if (cardTag) {
    cardTag.textContent = svc.badge + ' // BAY ACTIVE';
  }

  // Overview Population
  setHTML('sdOverviewTitle', svc.name);
  setHTML('sdOverviewText', svc.overview);
  
  // Technical Specs Chips Matrix
  var specsEl = document.getElementById('sdSpecsMatrix');
  if (specsEl && svc.specs) {
    specsEl.innerHTML = svc.specs.map(function(sp) {
      return '<div class="sd-spec-chip">' +
               '<span class="sd-sc-lbl">' + sp.label + '</span>' +
               '<span class="sd-sc-val">' + sp.val + '</span>' +
             '</div>';
    }).join('');
  }

  // Highlights
  var hlList = document.getElementById('sdHighlights');
  if (hlList) {
    hlList.innerHTML = svc.highlights.map(function(h) {
      return '<li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><polyline points="20 6 9 17 4 12"/></svg><span>' + h + '</span></li>';
    }).join('');
  }

  // 4-Step Technical Bay Process
  var procEl = document.getElementById('sdProcessGrid');
  if (procEl && svc.process) {
    procEl.innerHTML = svc.process.map(function(pr) {
      return '<div class="sd-process-card">' +
               '<div class="sd-pc-header">' +
                 '<span class="sd-pc-num">' + pr.num + '</span>' +
                 '<span class="sd-pc-tag">' + pr.tag + '</span>' +
               '</div>' +
               '<h3 class="sd-pc-title">' + pr.title + '</h3>' +
               '<p class="sd-pc-desc">' + pr.desc + '</p>' +
               '<div class="sd-pc-line"></div>' +
             '</div>';
    }).join('');
  }

  // Official Compliance Deliverables
  var delivEl = document.getElementById('sdDeliverablesGrid');
  if (delivEl && svc.deliverables) {
    delivEl.innerHTML = svc.deliverables.map(function(dl) {
      return '<div class="sd-deliv-card">' +
               '<div class="sd-dc-header">' +
                 '<div class="sd-dc-icon">' +
                   '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>' +
                 '</div>' +
                 '<span class="sd-dc-badge">' + dl.badge + '</span>' +
               '</div>' +
               '<h3 class="sd-dc-title">' + dl.title + '</h3>' +
               '<p class="sd-dc-desc">' + dl.desc + '</p>' +
               '<div class="sd-dc-foot">' +
                 '<span class="sd-dc-status"><span class="sd-dc-dot"></span>INCLUDED WITH SERVICE</span>' +
               '</div>' +
             '</div>';
    }).join('');
  }

  // Why Choose / The ORVEXA Difference
  var whyGrid = document.getElementById('sdWhyGrid');
  if (whyGrid) {
    whyGrid.innerHTML = svc.whyChoose.map(function(w, i) {
      var num = (i + 1 < 10 ? '0' : '') + (i + 1);
      return '<div class="sd-why-card">' +
               '<div class="sd-why-top">' +
                 '<span class="sd-why-num">' + num + '</span>' +
                 '<span class="sd-why-icon-pill"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg></span>' +
               '</div>' +
               '<h3 class="sd-why-title">' + w.title + '</h3>' +
               '<p class="sd-why-desc">' + w.desc + '</p>' +
             '</div>';
    }).join('');
  }

  // Pricing
  var pricingGrid = document.getElementById('sdPricingGrid');
  if (pricingGrid) {
    pricingGrid.innerHTML = svc.pricing.map(function(p, i) {
      var featured = (i === 0 || p.price === '$295') ? ' sd-price-featured' : '';
      return '<div class="sd-price-card' + featured + '">' +
               (featured ? '<div class="sd-price-badge">RECOMMENDED PROTOCOL</div>' : '') +
               '<h3 class="sd-price-name">' + p.name + '</h3>' +
               '<div class="sd-price-amt-row">' +
                 '<span class="sd-price-val">' + p.price + '</span>' +
                 (p.note ? '<span class="sd-price-note">' + p.note + '</span>' : '') +
               '</div>' +
               '<ul class="sd-price-features">' +
                 '<li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg><span>Full Bay Inspection Sequence</span></li>' +
                 '<li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg><span>Tamper-Proof QR Certificate</span></li>' +
                 '<li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg><span>Road Authority Register Sync</span></li>' +
                 '<li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg><span>10-Year Cloud Archive Access</span></li>' +
               '</ul>' +
               '<button type="button" class="' + (featured ? 'btn-primary-hero' : 'btn-secondary-hero') + ' w-full" onclick="openBookingModal()">' +
                 '<span>Book This Plan</span>' +
                 '<span>&rarr;</span>' +
               '</button>' +
             '</div>';
    }).join('');
  }

  // FAQs
  var faqList = document.getElementById('sdFaqList');
  if (faqList) {
    faqList.innerHTML = svc.faqs.map(function(f, i) {
      return '<div class="faq-item" data-faq="' + i + '">' +
               '<button class="faq-trigger" aria-expanded="false">' +
                 '<span>' + f.q + '</span>' +
                 '<span class="faq-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></span>' +
               '</button>' +
               '<div class="faq-body">' +
                 '<p>' + f.a + '</p>' +
               '</div>' +
             '</div>';
    }).join('');
    initFAQ();
  }

  // Back link
  var backLink = document.getElementById('sdBackLink');
  if (backLink) backLink.href = 'service.html';

  // Other services nav
  var otherNav = document.getElementById('sdOtherServices');
  if (otherNav) {
    var others = Object.values(SERVICES).filter(function(s) { return s.slug !== slug; }).slice(0, 3);
    otherNav.innerHTML = others.map(function(s) {
      return '<a href="service-detail.html?service=' + s.slug + '" class="sd-other-link">' +
               '<div class="sd-ol-left">' +
                 '<span class="sd-ol-eyebrow">' + s.eyebrow + '</span>' +
                 '<span class="sd-ol-name">' + s.name.replace(/&amp;/g,'&') + '</span>' +
                 '<span class="sd-ol-price">From ' + s.price + ' &bull; ' + (s.priceNote || '') + '</span>' +
               '</div>' +
               '<div class="sd-ol-arrow">&rarr;</div>' +
             '</a>';
    }).join('');
  }
}

function setHTML(id, html) {
  var el = document.getElementById(id);
  if (el) el.innerHTML = html;
}

function initFAQ() {
  var faqItems = document.querySelectorAll('#sdFaqList .faq-item');
  faqItems.forEach(function(item) {
    var trigger = item.querySelector('.faq-trigger');
    var body = item.querySelector('.faq-body');
    if (!trigger || !body) return;

    trigger.addEventListener('click', function() {
      var isOpen = trigger.getAttribute('aria-expanded') === 'true';
      faqItems.forEach(function(fi) {
        fi.querySelector('.faq-trigger').setAttribute('aria-expanded', 'false');
        fi.querySelector('.faq-body').classList.remove('open');
      });
      if (!isOpen) {
        trigger.setAttribute('aria-expanded', 'true');
        body.classList.add('open');
      }
    });
  });
}

function openBookingModal() {
  var modal = document.getElementById('bookingModal');
  if (modal) {
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }
}

// Run on DOM ready
document.addEventListener('DOMContentLoaded', function() {
  populatePage();

  var closeBtn = document.getElementById('modalCloseBtn');
  var bookingModal = document.getElementById('bookingModal');
  if (closeBtn && bookingModal) {
    closeBtn.addEventListener('click', function() {
      bookingModal.classList.remove('open');
      bookingModal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    });
    bookingModal.addEventListener('click', function(e) {
      if (e.target === bookingModal) {
        bookingModal.classList.remove('open');
        bookingModal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
      }
    });
  }

  var yearEl = document.getElementById('currentYear');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});
