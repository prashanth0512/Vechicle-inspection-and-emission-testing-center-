
const JOURNAL_DETAILS = {
  'ev-battery-soh-telemetry': {
    slug: 'ev-battery-soh-telemetry',
    issue: 'ISSUE NO. 01',
    category: 'HIGH-VOLTAGE EV METROLOGY',
    title: 'Next-Generation EV Battery',
    titleItalic: 'SOH Telemetry.',
    tagline: 'Beyond Dashboard Estimates: Direct CANbus Cell Diagnostics & 1000V DC Isolation',
    date: 'October 2025',
    readTime: '8 min read',
    author: 'Dr. Marcus Vance',
    authorRole: 'Chief Metrology Engineer',
    authorImg: 'assets/team_marcus.jpg',
    heroImg: 'assets/service_card_ev.jpg',
    badge: 'UNECE R100 REV 3',
    specs: [
      { label: 'CALIBRATED APPARATUS', val: 'Fluke 1587 FC (1000V DC)' },
      { label: 'BMS RESOLUTION', val: '1.0 mV Per Cell Voltage' },
      { label: 'STATUTORY STANDARD', val: 'UNECE Regulation 100' },
      { label: 'DATA REPOSITORY', val: 'ORVEXA EV Ledger Node' }
    ],
    context: {
      lead: 'Factory dashboard state-of-charge displays are designed for driver reassurance rather than scientific veracity. Our laboratory data reveals that standard vehicle algorithms regularly mask up to 18% true usable capacity degradation through adaptive buffer scaling.',
      problemHeading: 'The Myth of the Dashboard Percentage',
      problemText: 'Modern electric vehicle battery management systems (BMS) employ moving-average state-of-charge (SOC) algorithms that dynamically mask cell degradation by adjusting bottom and top buffer reserves. An EV displaying "100% Health" on a driver cluster may in reality have multiple parallel cell groups suffering from elevated internal resistance (IR) and dendrite propagation, severely restricting cold-weather energy recapture and dynamic discharge under highway loads.',
      methodologyHeading: 'Direct CANbus Bus & 1000V DC Insulation Protocol',
      methodologyText: 'Our accredited testing sequence connects directly to the vehicle high-speed powertrain CANbus, bypassing high-level display filters to poll individual cell voltages down to 1.0 mV resolution across all series modules. Simultaneously, a calibrated 1000V DC dielectric stress signal measures galvanic isolation resistance between the high-voltage pack enclosure and the vehicle chassis, certifying safety thresholds exceed 500 MΩ under simulated wet-weather conditions.',
      quote: 'Relying on dashboard battery meters is equivalent to estimating engine oil health by looking at the paint finish. Only direct CANbus cell delta analysis reveals true electrochemical longevity.',
      findings: [
        'Average 14.2% cell imbalance detected in vehicles with over 60,000 km despite perfect dashboard reports.',
        'High-voltage cabling insulation micro-degradation detected in 8.7% of fast-charged urban vehicles.',
        'Regenerative deceleration kinetic recapture efficiency drops non-linearly when cell impedance variance exceeds 35 mΩ.',
        'Direct BMS telemetry correctly predicts remaining pack service life within a ±2.5% statutory confidence interval.'
      ]
    },
    whyChoose: [
      { title: 'True Cell-Level Transparency', desc: 'Bypass OEM instrument cluster smoothing algorithms to obtain exact electrochemical resistance and capacity data.' },
      { title: 'IEV Level 3 Certified Testing', desc: 'All inspections performed by certified high-voltage diagnostic technicians using insulated CAT IV 1000V tooling.' },
      { title: 'Universal EV Architecture Support', desc: 'Direct protocol compatibility across Tesla, Rivian, Porsche, BMW, Mercedes, Hyundai, and custom commercial EV platforms.' },
      { title: 'Preserves Resale Valuation', desc: 'An accredited ORVEXA SOH certificate provides prospective buyers with unalterable empirical proof of battery health.' }
    ],
    pricing: [
      { name: 'Standard EV & Hybrid Telemetry', price: '$220', note: 'Single vehicle full BMS sweep', isFeatured: true },
      { name: 'EV Telemetry + Safety Add-on', price: '$310', note: 'Combined with 48-point safety audit', isFeatured: false },
      { name: 'Fleet Commercial EV Audit', price: '$490', note: 'Up to 3 commercial delivery vans', isFeatured: false }
    ],
    faqs: [
      { q: 'How does this test differ from dealer servicing?', a: 'Dealerships typically only perform binary fault code sweeps (DTC checks). ORVEXA executes physical 1000V DC insulation stress testing and raw cell millivolt variance mapping across all modules.' },
      { q: 'Will this diagnostic void my manufacturer battery warranty?', a: 'No. Our testing is non-invasive and complies strictly with SAE J1979 and ISO 14229 international diagnostic communication standards.' },
      { q: 'How long does the testing take in the bay?', a: 'The complete EV & Hybrid Telemetry sequence takes between 20 and 30 minutes in our dedicated high-voltage bay.' },
      { q: 'What documentation do I receive?', a: 'You walk away with an official physical report detailing cell voltage curves and an encrypted digital passport with a 64-character verification hash.' }
    ]
  },
  '5-gas-optical-chromatography': {
    slug: '5-gas-optical-chromatography',
    issue: 'ISSUE NO. 02',
    category: 'EMISSIONS SPECTROMETRY',
    title: '5-Gas Optical Chromatography',
    titleItalic: 'vs Handheld OBD.',
    tagline: 'Measuring Clean Air Compliance: Non-Dispersive Infrared Spectrometry Under Dyno Load',
    date: 'September 2025',
    readTime: '11 min read',
    author: 'Elena Rostova',
    authorRole: 'Lead Emissions Chemist',
    authorImg: 'assets/team_elena.jpg',
    heroImg: 'assets/service_emissions.jpg',
    badge: 'ECE REGULATION 83',
    specs: [
      { label: 'OPTICAL BENCH', val: 'Capelec CAP3201 NDIR' },
      { label: 'MEASUREMENT PULL', val: 'CO, CO₂, HC, O₂, NOx' },
      { label: 'RESOLUTION ACCURACY', val: '±1 ppm Hydrocarbons' },
      { label: 'REGULATORY COMPLIANCE', val: 'ECE R83 / Euro 6d' }
    ],
    context: {
      lead: 'Handheld diagnostic scanners reading ECU readiness monitors detect less than 40% of real-world exhaust chemistry failures. True emissions compliance requires physical optical absorption gas chromatography under chassis dynamometer inertia.',
      problemHeading: 'The Limitation of Electronic Readiness Flags',
      problemText: 'Modern vehicle ECUs are calibrated to suppress catalytic converter diagnostic trouble codes (DTCs) until catalyst conversion efficiency drops below statutory catastrophic failure thresholds. Consequently, vehicles with significant stoichiometric combustion drift or aged secondary oxygen sensors pass simple OBD plug-in inspections while discharging up to 300% statutory allowable NOx and unburnt hydrocarbons into urban atmospheres.',
      methodologyHeading: 'NDIR Optical Gas Absorption & Dyno Inertia',
      methodologyText: 'ORVEXA employs Capelec dual-beam non-dispersive infrared (NDIR) benches with electrochemical NOx profiling. The vehicle is driven onto an electromagnetic chassis dynamometer that simulates 50 km/h urban and 90 km/h highway resistance curves. Calibrated tailpipe probes sample exhaust gas at 2.5 litres per minute, recording instantaneous volumetric concentrations of carbon monoxide, carbon dioxide, unburnt hydrocarbons, oxygen, and nitric oxides.',
      quote: 'An electronic OBD scanner only tells you what the engine computer thinks is happening. Tailpipe spectrometry measures the chemical reality of what enters the atmosphere.',
      findings: [
        '31.4% of vehicles with zero stored ECU fault codes exhibited Lambda combustion ratios outside statutory tolerances (0.97–1.03).',
        'Catalytic converter internal thermal bypass was successfully detected in 19 out of 20 high-mileage hybrid fleet test subjects.',
        'Optical opacity benches identified diesel particulate filter micro-channel cracks that passed all onboard backpressure sensors.',
        'Instantaneous tailpipe sampling accurately quantified cold-start catalyst light-off latency down to 0.1-second precision.'
      ]
    },
    whyChoose: [
      { title: 'Independent Chemical Validation', desc: 'Direct exhaust physical measurement guarantees statutory compliance regardless of electronic ECU firmware tampering.' },
      { title: 'Lab-Calibrated NDIR Bench', desc: 'Calibrated with certified primary reference gas mixtures traceable to national metrology standards.' },
      { title: 'Diesel & Petrol Full Range', desc: 'Automated optical dual-mode switching handles petrol gas spectrometry and diesel particulate opacimetry in one session.' },
      { title: 'Urban Zone Exemption Clearance', desc: 'Produces accredited clean air documentation recognized for low-emission municipal zone access permits.' }
    ],
    pricing: [
      { name: '5-Gas Optical Spectrometry Protocol', price: '$145', note: 'Single vehicle complete tailpipe sweep', isFeatured: true },
      { name: 'OBD-II Diagnostic Deep Scan', price: '$65', note: 'ECU DTC interrogation & clearing', isFeatured: false },
      { name: 'Combined Safety + Emissions Bundle', price: '$295', note: 'Full annual roadworthiness passport', isFeatured: false }
    ],
    faqs: [
      { q: 'Why is dyno loading necessary for emissions testing?', a: 'Engines operate under entirely different fuel trim maps and exhaust temperatures when loaded versus idling in neutral. Dyno testing simulates actual road resistance.' },
      { q: 'What is Lambda and why does it matter?', a: 'Lambda (λ) represents the stoichiometric air-fuel ratio. A reading of 1.00 indicates perfect combustion balance; deviations cause massive increases in either CO or NOx.' },
      { q: 'Will a minor exhaust leak affect the test?', a: 'Yes. Exhaust leaks dilute exhaust gas with atmospheric oxygen, artificially inflating O₂ readings and distorting calculated Lambda. Our inspectors check for leaks prior to probe insertion.' },
      { q: 'Is this test accepted by government environmental registries?', a: 'Yes. ORVEXA emissions certificates are legally recognized by regional transport and environmental protection agencies.' }
    ]
  },
  'brake-force-distribution-dynamics': {
    slug: 'brake-force-distribution-dynamics',
    issue: 'ISSUE NO. 03',
    category: 'SAFETY PROTOCOL',
    title: 'The Mathematics of',
    titleItalic: 'Deceleration.',
    tagline: 'Brake Force Distribution on Roller Dynamometers: Why 15% Disparity Compromises Stability',
    date: 'August 2025',
    readTime: '9 min read',
    author: 'David Sterling',
    authorRole: 'Head of Vehicle Kinematics',
    authorImg: 'assets/team_david.jpg',
    heroImg: 'assets/service_safety.jpg',
    badge: 'ISO/IEC 17020',
    specs: [
      { label: 'DYNAMIC TESTER', val: 'Maha IW4 Eurosystem' },
      { label: 'DISPARITY TOLERANCE', val: '< 15% Axle Delta' },
      { label: 'PEDAL TRANSDUCER', val: 'Pneumatic 500 N Load Cell' },
      { label: 'ACCREDITATION', val: 'UKAS Traceable Lab' }
    ],
    context: {
      lead: 'Visual brake pad thickness inspections provide zero data on dynamic deceleration balance. Our empirical dyno data demonstrates that a 15% lateral brake force disparity increases emergency stopping distances by up to 28% while destabilizing vehicle yaw trajectory.',
      problemHeading: 'The Illusion of Pad Thickness',
      problemText: 'A visual brake check only confirms that friction material is present; it cannot measure hydraulic caliper slide-pin seizure, brake fluid moisture contamination, rotor thermal distortion, or asymmetric brake bias valving. When emergency braking is initiated at highway speeds, even minor disparities between left and right wheels produce severe yaw moments that overwhelm electronic stability control (ESC).',
      methodologyHeading: 'Maha IW4 Roller Dynamometry & Deceleration Profiling',
      methodologyText: 'Vehicles are positioned on twin motorized knurled roller plates rotating at calibrated speeds. A wireless strain-gauge load transducer is affixed to the driver brake pedal. As the brake pedal is depressed, roller load cells measure instantaneous deceleration force in Newtons across each wheel, capturing peak force, drag resistance, disc thickness variation (DTV), and lateral imbalance.',
      quote: 'Brakes do not stop wheels; friction balances momentum. If left and right wheels disagree by more than 15%, the laws of physics dictate a spin.',
      findings: [
        'Vehicles with a 15% to 20% brake disparity experienced an average 6.4-metre increase in wet 100 km/h emergency stopping distance.',
        'Caliper slide-pin seizure was responsible for 62% of all lateral braking imbalances detected during statutory testing.',
        'Brake fluid boiling point degradation below 180°C caused measurable pedal travel extension under consecutive roller dyno test runs.',
        'Dynamic roller testing identified rotor warp thickness variations down to 0.015 mm before steering pulsation became driver-perceptible.'
      ]
    },
    whyChoose: [
      { title: 'Dyno-Loaded Precision Measurement', desc: 'Direct deceleration force measured in Newtons on high-grip knurled rollers calibrated to UKAS standards.' },
      { title: 'Full 48-Point Kinematics Audit', desc: 'Complements braking data with chassis alignment, suspension play detection, and tyre integrity verification.' },
      { title: 'Statutory Certification Guarantee', desc: 'Official pass certificate registered with government registries with a 30-day free re-inspection guarantee.' },
      { title: 'Preemptive Defect Identification', desc: 'Detects sticking calipers, distorted rotors, and degraded hydraulic valves before expensive failure occurs.' }
    ],
    pricing: [
      { name: 'Statutory Safety Inspection Protocol', price: '$185', note: 'Single vehicle comprehensive 48-point audit', isFeatured: true },
      { name: 'Priority Fast-Lane Access', price: '$45', note: 'Guaranteed bay entry within 5 minutes', isFeatured: false },
      { name: 'Combined Safety + Emissions Suite', price: '$295', note: 'All-inclusive annual inspection pass', isFeatured: false }
    ],
    faqs: [
      { q: 'How does roller testing affect all-wheel-drive (AWD) vehicles?', a: 'Our Maha IW4 dynamometers feature automated 4WD contra-rotation mode that spins wheels on the same axle in opposite directions, protecting differentials and electronic transfer cases from strain.' },
      { q: 'What is the acceptable statutory brake disparity limit?', a: 'Under statutory standards, the brake force difference between left and right wheels on any axle must not exceed 25% (ORVEXA operates a tighter 15% advisory threshold).' },
      { q: 'How long does the brake roller inspection take?', a: 'The roller dynamometer test takes approximately 6 minutes within our full 15–20 minute statutory safety bay sequence.' },
      { q: 'What happens if my vehicle fails the brake test?', a: 'You receive a detailed diagnostic graph showing exactly which corner failed. Rectify the defect and return within 30 days for a free re-test.' }
    ]
  },
  'blockchain-cryptographic-compliance': {
    slug: 'blockchain-cryptographic-compliance',
    issue: 'ISSUE NO. 04',
    category: 'DIGITAL CERTIFICATION',
    title: 'Cryptographic Compliance:',
    titleItalic: 'SHA-256 Hashes.',
    tagline: 'Anchoring Vehicle Inspection Records via Distributed Ledgers to Eliminate Paper Fraud',
    date: 'July 2025',
    readTime: '7 min read',
    author: 'Sophia Lin',
    authorRole: 'Cryptographic Systems Architect',
    authorImg: 'assets/team_sophia.jpg',
    heroImg: 'assets/card_tablet_cert.jpg',
    badge: 'SHA-256 IMMUTABLE',
    specs: [
      { label: 'HASH ALGORITHM', val: 'SHA-256 Hexadecimal' },
      { label: 'VERIFICATION TIME', val: '< 0.5s Camera Scan' },
      { label: 'ARCHIVE DURABILITY', val: '10-Year Distributed Vault' },
      { label: 'LEGAL STATUTE', val: 'Regional Digital Signatures Act' }
    ],
    context: {
      lead: 'Paper roadworthiness certificates and inspection slips remain vulnerable to forgery, seal duplication, and odometer mileage manipulation. ORVEXA cryptographic pass anchoring transforms vehicle compliance into a permanent, immutable digital asset.',
      problemHeading: 'The Billion-Dollar Used Vehicle Paper Vulnerability',
      problemText: 'According to European and North American transport consumer audits, over 15% of pre-owned vehicles carry forged inspection certificates or rolled-back odometers. Paper documents lack real-time verification mechanisms, allowing rogue sellers to laminate fraudulent MOT passes or forge inspection station stamps without immediate discovery.',
      methodologyHeading: 'SHA-256 Cryptographic Digest & Distributed Ledger Anchoring',
      methodologyText: 'Upon completion of an inspection, the raw telemetry payload—comprising chassis measurements, exhaust gas readings, vehicle VIN, bay timestamp, and inspector public cryptographic keys—is compiled into a canonical JSON object. This object is hashed through a SHA-256 cryptographic algorithm, producing a unique 64-character hexadecimal digest anchored to an immutable public compliance ledger.',
      quote: 'A piece of paper can be photocopied, stamped, or altered. A 256-bit cryptographic digest anchored to a public ledger cannot be modified by any entity on earth.',
      findings: [
        'Zero instances of credential forgery recorded across more than 85,000 ORVEXA cryptographic certificates issued.',
        'Average authority roadside verification time reduced from 4.5 minutes to under 8 seconds via smartphone QR scan.',
        'Vehicles with verified digital compliance histories achieved an average 6.8% higher secondary market resale price.',
        'Encrypted digital cloud vaults eliminated paper certificate replacement requests by 94% annually.'
      ]
    },
    whyChoose: [
      { title: 'Permanently Tamper-Proof', desc: 'Any alteration to certificate text or metrics invalidates the cryptographic hash instantly upon scanning.' },
      { title: 'Universal Smartphone Scanning', desc: 'Inspectors, police, insurers, and vehicle purchasers can verify records with any standard mobile camera.' },
      { title: 'Mobile Wallet Integration', desc: 'Live compliance credentials sync directly into Apple Wallet and Google Wallet with expiry countdowns.' },
      { title: '10-Year Historical Vault', desc: 'Complete historical inspection curves and sensor logs are preserved in your secure personal portal for a decade.' }
    ],
    pricing: [
      { name: 'Standalone Digital Certificate Passport', price: '$35', note: 'Issued same-day with QR verification passport', isFeatured: true },
      { name: 'Historical Archive Replacement', price: '$15', note: 'Update or re-issue misplaced digital records', isFeatured: false },
      { name: 'Included with Combined Protocol', price: 'Free', note: 'Provided complimentary with combined bookings', isFeatured: false }
    ],
    faqs: [
      { q: 'Is a digital certificate legally recognized by road authorities?', a: 'Yes. ORVEXA digital certificates comply fully with national and regional Digital Signature Acts and are legally equivalent to paper documents.' },
      { q: 'Do I need special software to view or verify the certificate?', a: 'No. Any smartphone camera scanning the dynamic QR code opens a secure verification portal showing verified status and vehicle details.' },
      { q: 'What happens if I sell my vehicle?', a: 'You can transfer the digital vehicle passport to the new owner through your ORVEXA client portal with a single click, providing them with verified pedigree.' },
      { q: 'Is my personal information visible on the public QR scan?', a: 'No. The public scan only displays vehicle verification results, validity dates, and inspection metrics. Personal driver identity data is cryptographically redacted.' }
    ]
  },
  'commercial-fleet-compliance-strategy': {
    slug: 'commercial-fleet-compliance-strategy',
    issue: 'ISSUE NO. 05',
    category: 'FLEET MANAGEMENT',
    title: 'Commercial Fleet Compliance:',
    titleItalic: 'Automated Strategy.',
    tagline: 'Multi-Vehicle Scheduled Bay Programmes: Reducing Depot Downtime by 42%',
    date: 'June 2025',
    readTime: '12 min read',
    author: 'Dr. Marcus Vance',
    authorRole: 'Chief Metrology Engineer',
    authorImg: 'assets/team_marcus.jpg',
    heroImg: 'assets/card_clean_road.jpg',
    badge: 'COMMERCIAL CARRIER',
    specs: [
      { label: 'FLEET SCALE', val: '10 to 500+ Vehicles' },
      { label: 'BAY ACCESS', val: 'Priority Commercial Lane' },
      { label: 'API INTEGRATION', val: 'RESTful Fleet Dispatch' },
      { label: 'INVOICE CONSOLIDATION', val: 'Monthly Single Ledger' }
    ],
    context: {
      lead: 'Managing statutory inspection expiries across distributed commercial fleets via spreadsheets leads to missed deadlines, impound risks, and costly unscheduled vehicle downtime. Automated 30-day rolling bay queuing reduces depot idle time by up to 42%.',
      problemHeading: 'The High Cost of Compliance Chaos in Logistics',
      problemText: 'Logistics and transit operators running 20 to 200+ commercial vehicles face continuous administrative friction. Dispatchers must manually track staggered registration renewal dates, manage paper certificates from multiple inspection garages, and pull revenue-generating delivery vans from daily routes for unpredictable 3-hour garage queues.',
      methodologyHeading: 'Automated 30-Day Expiry Queuing & Dedicated Express Lanes',
      methodologyText: 'ORVEXA Fleet Compliance Management integrates with carrier dispatch software via secure API. The platform monitors statutory inspection due dates and automatically reserves priority bay slots 30, 14, and 7 days prior to expiry. Drivers check in via barcode drop-off with guaranteed 20-minute turnaround and automated digital certificate generation.',
      quote: 'In commercial transport, an idle vehicle is an asset generating loss. Compliance must operate with the speed and precision of an aircraft turnaround.',
      findings: [
        'Fleet client depot downtime decreased by 42% in the first 90 days of automated bay scheduling adoption.',
        'Zero lapsed vehicle registrations or transport authority compliance fines recorded across all enrolled corporate fleets.',
        'Volume tier discounts reduced annual per-vehicle inspection expenditure by an average of 14.8%.',
        'Fleet controllers reported saving 18 administration hours per month through unified digital invoicing.'
      ]
    },
    whyChoose: [
      { title: 'Automated Compliance Scheduling', desc: 'Rolling 30-day proactive reservation engine guarantees zero missed registration expiries.' },
      { title: 'Dedicated Commercial Bays', desc: 'Fleet priority lanes ensure commercial vans and trucks complete verification in under 20 minutes.' },
      { title: 'Real-Time Enterprise Portal', desc: 'Centralized dashboard displays live inspection status, vehicle certificates, and upcoming deadlines.' },
      { title: 'Consolidated Monthly Billing', desc: 'Single unified monthly tax statement with transparent volume tier pricing eliminates driver expense claims.' }
    ],
    pricing: [
      { name: 'Starter Fleet Programme (10-19 Vehicles)', price: '$850/mo', note: 'Standard base rate with portal access', isFeatured: false },
      { name: 'Business Fleet Programme (20-49 Vehicles)', price: '$1,450/mo', note: 'Includes 12% per-vehicle discount', isFeatured: true },
      { name: 'Enterprise Fleet Programme (50+ Vehicles)', price: 'Custom', note: 'Contact corporate account team for volume SLA', isFeatured: false }
    ],
    faqs: [
      { q: 'What vehicle classes are covered under fleet management?', a: 'We inspect passenger fleets, commercial delivery vans, light trucks, and corporate vehicle pools up to 3.5 tonnes GVW.' },
      { q: 'Can our drivers walk in without booking?', a: 'Yes. Enrolled fleet vehicles carry barcode priority identification and receive priority express lane entry during regular operating hours.' },
      { q: 'Do you offer mobile inspection units for depot visits?', a: 'Yes. For fleets of 30+ vehicles, our Mobile Rapid Verification Unit can conduct on-site compliance sessions at your operating depot.' },
      { q: 'How does the consolidated billing work?', a: 'All bay sessions are logged electronically to your account and billed on the final business day of the month on a single comprehensive statement.' }
    ]
  },
  'high-voltage-electrical-isolation': {
    slug: 'high-voltage-electrical-isolation',
    issue: 'ISSUE NO. 06',
    category: 'METROLOGY STANDARDS',
    title: 'High-Voltage Isolation:',
    titleItalic: 'Dielectric Integrity.',
    tagline: 'Preventing Dielectric Breakdown in Hybrid & EV Powertrains: 1000V DC Diagnostic Protocols',
    date: 'May 2025',
    readTime: '10 min read',
    author: 'Elena Rostova',
    authorRole: 'IEV Level 3 Specialist',
    authorImg: 'assets/team_elena.jpg',
    heroImg: 'assets/h2_inspection_bay.jpg',
    badge: 'IEV LEVEL 3',
    specs: [
      { label: 'TEST VOLTAGE', val: '1000V DC Megohmmeter' },
      { label: 'ISOLATION THRESHOLD', val: '> 500 MΩ To Chassis' },
      { label: 'SAFETY RATING', val: 'CAT IV 600V / CAT III 1000V' },
      { label: 'TECHNICIAN LEVEL', val: 'IEV Level 3 Certified' }
    ],
    context: {
      lead: 'Environmental contamination, road salt, and mechanical vibration induce micro-fissures in high-voltage orange insulation cabling long before vehicle dashboard warning lights trigger. A 1000V DC isolation stress test is essential for preventing dangerous chassis short-circuits.',
      problemHeading: 'The Hidden Hazard of High-Voltage Degradation',
      problemText: 'Electric and plug-in hybrid powertrains operate between 400V and 800V DC. Over time, gravel impact, road salt exposure, and thermal cycling degrade the orange silicone dielectric insulation jackets shielding high-voltage DC bus lines. If isolation resistance degrades below statutory limits, transient voltage spikes can energize the vehicle metal chassis, posing severe shock hazards to vehicle occupants and first responders.',
      methodologyHeading: 'Calibrated Dielectric Stress Analysis',
      methodologyText: 'ORVEXA certified IEV Level 3 technicians disconnect the low-voltage service plug and apply calibrated 500V and 1000V DC potential between the positive and negative high-voltage rails and the bare chassis grounding studs. Using Fluke 1587 FC insulation multimeters, leakage current is measured down to microampere accuracy, verifying isolation exceeds the strict 500 MΩ statutory barrier.',
      quote: 'In high-voltage automotive engineering, zero electrical leakage is not merely a performance metric; it is the fundamental boundary between safety and catastrophe.',
      findings: [
        'Dielectric insulation micro-abrasion was detected in 6.4% of inspected hybrid vehicles older than 5 years.',
        'DC fast-charge inlet terminals exhibited contact resistance elevation exceeding 15% due to pin oxidation.',
        'High-voltage safety interlock loop (HVIL) degradation was identified before vehicle startup inhibit errors occurred.',
        'Periodic 1000V insulation testing reduced unexpected high-voltage powertrain roadside shutdowns by 88%.'
      ]
    },
    whyChoose: [
      { title: 'IEV Level 3 Certified Experts', desc: 'Every high-voltage inspection is conducted by master technicians trained under international electrical safety codes.' },
      { title: 'Calibrated Fluke Megohmmeters', desc: 'Laboratory-grade test instrumentation calibrated quarterly to UKAS traceable standards.' },
      { title: 'Complete Powertrain Insulation Audit', desc: 'Covers battery pack casing, inverter junctions, DC-DC converter cabling, and fast-charge port assemblies.' },
      { title: 'Mandatory EV Safety Certification', desc: 'Provides the formal statutory documentation required for commercial EV fleet operations and licensing.' }
    ],
    pricing: [
      { name: 'Combined Comprehensive Protocol', price: '$295', note: 'Includes High-Voltage Insulation Check', isFeatured: true },
      { name: 'EV & Hybrid Telemetry Protocol', price: '$220', note: 'Complete battery SOH and HV isolation sweep', isFeatured: false },
      { name: 'High-Voltage Safety Standalone Audit', price: '$135', note: 'Single dielectric insulation safety pass', isFeatured: false }
    ],
    faqs: [
      { q: 'Is high-voltage isolation testing dangerous for the vehicle electronics?', a: 'No. The high-voltage manual service disconnect (MSD) is disengaged prior to testing, isolating sensitive electronic control modules from the 1000V DC test signal.' },
      { q: 'How often should high-voltage isolation be tested?', a: 'We recommend testing high-voltage isolation annually, or immediately following any severe undercarriage impact or deep water wading.' },
      { q: 'What is the minimum statutory isolation resistance?', a: 'UNECE Regulation 100 mandates a minimum of 500 Ω per volt of nominal battery pack voltage (ORVEXA enforces a significantly stricter 500 MΩ benchmark).' },
      { q: 'What happens if a vehicle fails the isolation test?', a: 'The technician immediately isolates the vehicle and marks the advisory point on your report, identifying the exact cable harness or junction requiring replacement.' }
    ]
  }
};

function getArticleSlug() {
  const params = new URLSearchParams(window.location.search);
  return params.get('article') || params.get('journal') || 'ev-battery-soh-telemetry';
}

function populateJournalDetail() {
  const slug = getArticleSlug();
  const article = JOURNAL_DETAILS[slug] || JOURNAL_DETAILS['ev-battery-soh-telemetry'];

  document.title = 'ORVEXA | ' + article.title.replace(/&amp;/g, '&');

  setHTML('jdBreadcrumbTitle', article.title);

  setHTML('jdHeroEyebrow', article.issue + ' // ' + article.category);
  setHTML('jdHeroTitle', article.title);
  setHTML('jdHeroTitleItalic', article.titleItalic);
  setHTML('jdHeroTagline', article.tagline);
  setHTML('jdDate', article.date);
  setHTML('jdReadTime', article.readTime);
  setHTML('jdAuthorName', article.author);
  setHTML('jdAuthorRole', article.authorRole);
  
  const authorImg = document.getElementById('jdAuthorImg');
  if (authorImg) authorImg.src = article.authorImg;

  const heroImg = document.getElementById('jdHeroImg');
  if (heroImg) {
    heroImg.src = article.heroImg;
    heroImg.alt = article.title;
  }

  setHTML('jdCardTagText', article.badge);

  const specsEl = document.getElementById('jdSpecsMatrix');
  if (specsEl && article.specs) {
    specsEl.innerHTML = article.specs.map(sp => `
      <div class="jd-spec-chip">
        <span class="jd-sc-lbl">${sp.label}</span>
        <span class="jd-sc-val">${sp.val}</span>
      </div>
    `).join('');
  }

  setHTML('jdContextLead', article.context.lead);
  setHTML('jdProblemHeading', article.context.problemHeading);
  setHTML('jdProblemText', article.context.problemText);
  setHTML('jdMethodologyHeading', article.context.methodologyHeading);
  setHTML('jdMethodologyText', article.context.methodologyText);
  setHTML('jdQuoteText', article.context.quote);
  setHTML('jdQuoteAuthor', article.author + ', ' + article.authorRole);

  const findingsEl = document.getElementById('jdFindingsList');
  if (findingsEl && article.context.findings) {
    findingsEl.innerHTML = article.context.findings.map(f => `
      <li>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
        <span>${f}</span>
      </li>
    `).join('');
  }

  const whyEl = document.getElementById('jdWhyGrid');
  if (whyEl && article.whyChoose) {
    whyEl.innerHTML = article.whyChoose.map((w, i) => `
      <div class="jd-why-card">
        <div class="jd-why-num">0${i + 1}</div>
        <h3 class="jd-why-title">${w.title}</h3>
        <p class="jd-why-desc">${w.desc}</p>
      </div>
    `).join('');
  }

  const pricingEl = document.getElementById('jdPricingGrid');
  if (pricingEl && article.pricing) {
    pricingEl.innerHTML = article.pricing.map(p => `
      <div class="jd-price-card ${p.isFeatured ? 'jd-price-featured' : ''}">
        ${p.isFeatured ? '<div class="jd-price-badge">RECOMMENDED PROTOCOL</div>' : ''}
        <h3 class="jd-price-name">${p.name}</h3>
        <div class="jd-price-amt">${p.price}</div>
        <div class="jd-price-note">${p.note}</div>
        <ul class="jd-price-features">
          <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg><span>Full Laboratory Inspection Run</span></li>
          <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg><span>Cryptographic SHA-256 Passport</span></li>
          <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg><span>Direct Road Authority Sync</span></li>
        </ul>
        <button type="button" class="${p.isFeatured ? 'btn-primary-hero' : 'btn-secondary-hero'} w-full" onclick="openBookingModal()">
          <span>Book This Service</span>
        </button>
      </div>
    `).join('');
  }

  const faqEl = document.getElementById('jdFaqList');
  if (faqEl && article.faqs) {
    faqEl.innerHTML = article.faqs.map((f, i) => `
      <div class="faq-item" data-faq="${i}">
        <button class="faq-trigger" aria-expanded="false">
          <span>${f.q}</span>
          <span class="faq-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
          </span>
        </button>
        <div class="faq-body">
          <p>${f.a}</p>
        </div>
      </div>
    `).join('');
    initFaqAccordion();
  }

  const othersEl = document.getElementById('jdOtherArticles');
  if (othersEl) {
    const detailPage = 'journal-detail.html';
    const otherKeys = Object.keys(JOURNAL_DETAILS).filter(k => k !== slug).slice(0, 3);
    othersEl.innerHTML = otherKeys.map(k => {
      const art = JOURNAL_DETAILS[k];
      return `
        <article class="jd-other-card">
          <div class="jdo-media">
            <img src="${art.heroImg}" alt="${art.title}">
            <span class="jdo-badge">${art.issue}</span>
          </div>
          <div class="jdo-body">
            <span class="jdo-cat">${art.category}</span>
            <h4 class="jdo-title">
              <a href="${detailPage}?article=${art.slug}">${art.title} ${art.titleItalic}</a>
            </h4>
            <p class="jdo-desc">${art.tagline}</p>
            <a href="${detailPage}?article=${art.slug}" class="jdo-link">
              <span>Read Journal Issue</span>
              <span>&rarr;</span>
            </a>
          </div>
        </article>
      `;
    }).join('');
  }
  setHTML('jdHudApparatus', (article.specs && article.specs[0]) ? article.specs[0].val : 'ISO/IEC 17020 Class-A Sensor Bench');

  const tbody = document.getElementById('jdBenchmarkTbody');
  if (tbody) {
    const benchmarks = article.benchmarks || [
      { param: 'Primary Diagnostic Telemetry', benchmark: 'Standard Statutory Range', lab: '±0.1% Lab Accuracy', status: 'PASS / VERIFIED' },
      { param: 'Sensor Zero Stability', benchmark: '< 0.5% Drift Tolerance', lab: '0.02% Zero Deviation', status: 'CALIBRATED' },
      { param: 'Statutory Safety Factor', benchmark: '> 1.5x Margin', lab: '2.4x Recorded Margin', status: 'EXCEEDS STATUTORY' },
      { param: 'Cryptographic Digest Verification', benchmark: 'SHA-256 Bit Depth', lab: '256-Bit Immutable Hash', status: 'SECURED' }
    ];
    tbody.innerHTML = benchmarks.map(b => `
      <tr>
        <td class="tb-param"><strong>${b.param}</strong></td>
        <td class="tb-bench">${b.benchmark}</td>
        <td class="tb-lab">${b.lab}</td>
        <td class="tb-status"><span class="tb-status-badge">${b.status}</span></td>
      </tr>
    `).join('');
  }

  setHTML('stickyRefCode', 'REF // ' + (article.specs && article.specs[0] ? article.specs[0].val.split(' ')[0] : 'LAB') + '-2026');
  setHTML('stickyServiceTitle', article.title + ' ' + article.titleItalic);
  setHTML('stickyServiceSubtitle', article.category);
  const featPrice = (article.pricing && (article.pricing.find(p => p.isFeatured) || article.pricing[0])) || { price: '$220', name: 'Comprehensive Protocol', note: 'Single vehicle laboratory pass' };
  setHTML('stickyRateVal', featPrice.price.replace('$', '').replace('/mo', ''));
  setHTML('stickyRateDesc', featPrice.name + ' &mdash; ' + featPrice.note);
  setHTML('stickyStatutoryVal', article.badge);
  setHTML('stickyInspectorName', article.author);
  const stickyAvatar = document.getElementById('stickyInspectorImg');
  if (stickyAvatar) stickyAvatar.src = article.authorImg;
}

function setHTML(id, html) {
  const el = document.getElementById(id);
  if (el) el.innerHTML = html;
}

function initFaqAccordion() {
  const faqItems = document.querySelectorAll('#jdFaqList .faq-item');
  faqItems.forEach(item => {
    const trigger = item.querySelector('.faq-trigger');
    const body = item.querySelector('.faq-body');
    if (!trigger || !body) return;

    trigger.addEventListener('click', () => {
      const isOpen = trigger.getAttribute('aria-expanded') === 'true';
      faqItems.forEach(fi => {
        const t = fi.querySelector('.faq-trigger');
        const b = fi.querySelector('.faq-body');
        if (t) t.setAttribute('aria-expanded', 'false');
        if (b) b.classList.remove('open');
      });
      if (!isOpen) {
        trigger.setAttribute('aria-expanded', 'true');
        body.classList.add('open');
      }
    });
  });
}

function openBookingModal() {
  const modal = document.getElementById('bookingModal');
  if (modal) {
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }
}

function closeBookingModal() {
  const modal = document.getElementById('bookingModal');
  if (modal) {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }
}

function initRTL() {
  const rtlToggle = document.getElementById('rtlToggle');
  const htmlRoot = document.documentElement;
  const savedDir = localStorage.getItem('orvexa-dir') || 'ltr';
  applyDir(savedDir);

  if (rtlToggle) {
    rtlToggle.addEventListener('click', () => {
      const currentDir = htmlRoot.getAttribute('dir') || 'ltr';
      const newDir = currentDir === 'rtl' ? 'ltr' : 'rtl';
      applyDir(newDir);
      localStorage.setItem('orvexa-dir', newDir);
    });
  }
}

function applyDir(dir) {
  const htmlRoot = document.documentElement;
  const rtlBtnText = document.getElementById('rtlBtnText');
  htmlRoot.setAttribute('dir', dir);
  if (rtlBtnText) {
    rtlBtnText.textContent = dir === 'rtl' ? 'LTR' : 'RTL';
  }
}

function openPortalNotice(type, title, msg) {
  const modal = document.getElementById('portalNoticeModal');
  if (!modal) return;
  const eyebrowEl = document.getElementById('portalNoticeEyebrow');
  const titleEl = document.getElementById('portalNoticeTitle');
  const msgEl = document.getElementById('portalNoticeMsg');
  const detailsEl = document.getElementById('portalNoticeDetails');
  const actionBtn = document.getElementById('portalNoticeActionBtn');

  if (type === '404') {
    if (eyebrowEl) eyebrowEl.textContent = 'REGIONAL ARCHIVE NODE';
    if (titleEl) titleEl.textContent = title || 'HTTP 404 — Document Not Found';
    if (msgEl) msgEl.textContent = msg || 'The requested verification telemetry record or digital archive does not exist on this regional node.';
    if (detailsEl) detailsEl.innerHTML = `
      <div class="notice-meta-tag">STATUS: 404 RECORD NOT FOUND</div>
      <p class="notice-meta-sub">Ensure your 64-character verification hash matches your physical inspection paperwork or certificate QR code.</p>
    `;
    if (actionBtn) {
      actionBtn.textContent = 'Return to Platform';
      actionBtn.onclick = function() {
        closePortalNotice();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      };
    }
  } else if (type === 'comingsoon') {
    if (eyebrowEl) eyebrowEl.textContent = 'DEPLOYMENT ROADMAP • Q4 2026';
    if (titleEl) titleEl.textContent = title || 'Mobile Rapid Verification Unit';
    if (msgEl) msgEl.textContent = msg || 'ORVEXA Mobile Rapid-Response Telemetry fleet deployment is currently in field testing.';
    if (detailsEl) detailsEl.innerHTML = `
      <div class="notice-meta-tag tag-gold">PHASE 2 ROLLOUT: ON SCHEDULE</div>
      <p class="notice-meta-sub">On-demand commercial fleet inspection vehicles equipped with calibrated gas analyzers and wireless chassis alignment sensors.</p>
    `;
    if (actionBtn) {
      actionBtn.textContent = 'Book Standard Inspection';
      actionBtn.onclick = function() {
        closePortalNotice();
        openBookingModal();
      };
    }
  } else {
    if (eyebrowEl) eyebrowEl.textContent = 'CLIENT ACCESS PROTOCOL';
    if (titleEl) titleEl.textContent = title || 'Client & Partner Authentication';
    if (msgEl) msgEl.textContent = msg || 'Access your authenticated ORVEXA vehicle history reports, digital token keys, and automated fleet compliance records.';
    if (detailsEl) detailsEl.innerHTML = `
      <div class="notice-meta-tag">ENTERPRISE CLIENT PORTAL</div>
      <p class="notice-meta-sub">Direct access requires cryptographic hardware key authentication or enterprise API token.</p>
    `;
    if (actionBtn) {
      actionBtn.textContent = 'Close';
      actionBtn.onclick = closePortalNotice;
    }
  }

  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closePortalNotice() {
  const modal = document.getElementById('portalNoticeModal');
  if (modal) {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }
}

document.addEventListener('DOMContentLoaded', () => {
  populateJournalDetail();
  initRTL();

  const toggleBtn = document.getElementById('themeToggle');
  const html = document.documentElement;
  const savedTheme = localStorage.getItem('orvexa-theme') || 'light';
  html.setAttribute('data-theme', savedTheme);

  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      const current = html.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
      const next = current === 'dark' ? 'light' : 'dark';
      html.setAttribute('data-theme', next);
      localStorage.setItem('orvexa-theme', next);
    });
  }

  const mobBtn = document.getElementById('mobileMenuBtn');
  const mobDrawer = document.getElementById('mobileDrawer');
  const mobClose = document.getElementById('drawerClose');
  if (mobBtn && mobDrawer) mobBtn.addEventListener('click', () => mobDrawer.classList.add('open'));
  if (mobClose && mobDrawer) mobClose.addEventListener('click', () => mobDrawer.classList.remove('open'));

  const closeBtn = document.getElementById('modalCloseBtn');
  const bookingModal = document.getElementById('bookingModal');
  if (closeBtn) closeBtn.addEventListener('click', closeBookingModal);
  if (bookingModal) {
    bookingModal.addEventListener('click', (e) => {
      if (e.target === bookingModal) closeBookingModal();
    });
  }

  const portalModal = document.getElementById('portalNoticeModal');
  if (portalModal) {
    portalModal.addEventListener('click', (e) => {
      if (e.target === portalModal) closePortalNotice();
    });
  }

  const yr = document.getElementById('currentYear');
  if (yr) yr.textContent = new Date().getFullYear();
});
