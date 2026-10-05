
document.addEventListener('DOMContentLoaded', () => {
  initInspectionIntelligence();
  initEmissionsConsole();
  initBayStageStepper();
  initPassportTools();
});

const inspectionDomains = {
  braking: {
    num: "01/07",
    title: "Braking System Metrology",
    status: "VERIFIED • 100% NOMINAL",
    metric1: { label: "Peak Deceleration", val: "1.04 G", target: "Standard: > 0.60 G" },
    metric2: { label: "Rotor Thickness", val: "33.8 mm", target: "Min Limit: 32.0 mm" },
    metric3: { label: "Lateral Runout", val: "0.012 mm", target: "Max Limit: 0.035 mm" },
    metric4: { label: "L/R Bias Delta", val: "1.2%", target: "Max Permitted: < 15%" },
    desc: "Dual-axle dynamic roller dynamometer evaluation. Laser micrometer analysis of disc warp, friction pad degradation, and hydraulic caliper piston pressure response under emergency stop deceleration.",
    code: "REGULATORY CODE: ISO 21069 / FMVSS 135"
  },
  steering: {
    num: "02/07",
    title: "Steering Kinematics & Geometry",
    status: "VERIFIED • 100% NOMINAL",
    metric1: { label: "Total Toe-In", val: "+0.08°", target: "Tolerance: ±0.10°" },
    metric2: { label: "Caster Angle", val: "6.85°", target: "Factory Spec: 6.80°" },
    metric3: { label: "Kingpin Inclination", val: "12.4°", target: "Spec: 12.5° ±0.3°" },
    metric4: { label: "Rack Play / Backlash", val: "0.02 mm", target: "Max Permitted: 0.15 mm" },
    desc: "Stereoscopic 3D optical target tracking on four wheels. Verifies tie rod joints, rack-and-pinion electric power steering sensor zero-point calibration, and dynamic returnability.",
    code: "REGULATORY CODE: SAE J670 / ECE-R79"
  },
  suspension: {
    num: "03/07",
    title: "Suspension Damping & Bushings",
    status: "VERIFIED • ACTIVE PASS",
    metric1: { label: "EUSAMA Damping", val: "78%", target: "Threshold: > 60%" },
    metric2: { label: "Axle Resonance", val: "14.2 Hz", target: "Safe Band: 12-16 Hz" },
    metric3: { label: "Cross-Axle Delta", val: "3.4%", target: "Max Permitted: < 10%" },
    metric4: { label: "Air Strut Pressure", val: "8.6 bar", target: "Nominal: 8.5-9.0 bar" },
    desc: "High-frequency electro-hydraulic plate agitation measures shock absorber damping ratio, coil spring integrity, anti-roll bar end links, and subframe elastomeric isolators.",
    code: "REGULATORY CODE: EUSAMA-DIR 96/96/EC"
  },
  tyres: {
    num: "04/07",
    title: "Tyre Metrology & Bead Seating",
    status: "VERIFIED • OPTIMAL HEALTH",
    metric1: { label: "Outer Tread Depth", val: "6.8 mm", target: "Min Legal: 1.6 mm" },
    metric2: { label: "Center Tread Depth", val: "7.1 mm", target: "Min Legal: 1.6 mm" },
    metric3: { label: "Inner Tread Depth", val: "6.7 mm", target: "Min Legal: 1.6 mm" },
    metric4: { label: "Camber Wear Delta", val: "0.4 mm", target: "Even wear profile" },
    desc: "Continuous optical laser stripe scanner profiles full 360-degree tyre contact patch. Detects abnormal shoulder scalloping, micro-cracking, dry rot, and rim bead seating integrity.",
    code: "REGULATORY CODE: FMVSS 139 / ECE-R30"
  },
  lighting: {
    num: "05/07",
    title: "Matrix LED & Optical Alignment",
    status: "VERIFIED • CALIBRATED",
    metric1: { label: "Beam Cutoff Dip", val: "-1.22%", target: "Spec: -1.20% ±0.15%" },
    metric2: { label: "Peak Lux @ 25m", val: "142,000 lx", target: "Min Required: 60k lx" },
    metric3: { label: "Horizontal Aim", val: "0.04° Right", target: "Tolerance: ±0.20°" },
    metric4: { label: "Matrix Sector Actuation", val: "100%", target: "All 84 LEDs active" },
    desc: "Digital CMOS optical goniometer checks low-beam cut-off sharp line, high-beam glare suppression zones, daytime running signature lumen output, and adaptive leveling sensor feedback.",
    code: "REGULATORY CODE: ECE-R48 / SAE J599"
  },
  safety: {
    num: "06/07",
    title: "ADAS Radar, Camera & Airbags",
    status: "VERIFIED • ZERO FAULTS",
    metric1: { label: "Forward Radar Aim", val: "0.01° Azimuth", target: "Tolerance: ±0.10°" },
    metric2: { label: "LiDAR Horizon Bias", val: "0.00° Elevation", target: "Tolerance: ±0.08°" },
    metric3: { label: "AEB Response Time", val: "120 ms", target: "Benchmark: < 200 ms" },
    metric4: { label: "Restraint Circuit Res.", val: "2.14 Ω", target: "Spec: 2.10 ± 0.3 Ω" },
    desc: "Electronic interrogator links through secure OBD-II gateway. Simulates emergency braking trigger signals, interrogates pyrotechnic pre-tensioner circuit resistance, and verifies ADAS camera calibration targets.",
    code: "REGULATORY CODE: ISO 26262 ASIL-D / FMVSS 208"
  },
  condition: {
    num: "07/07",
    title: "Chassis Integrity & Underbody",
    status: "VERIFIED • FACTORY STRUCTURAL",
    metric1: { label: "Underbody Corrosion", val: "Grade 0 / None", target: "Zero perforation" },
    metric2: { label: "Chassis Shear Plane", val: "Nominal", target: "No twist distortion" },
    metric3: { label: "Brake Line Corrosion", val: "Nil (Coated Cu-Ni)", target: "Integrity 100%" },
    metric4: { label: "Exhaust Heat Shielding", val: "Intact & Secure", target: "Factory torque" },
    desc: "Ultrasonic thickness measurement of critical chassis frame rails and floor pans. Visual borescope examination of subframe pickup points, differential seals, and protective aerodynamic underbody trays.",
    code: "REGULATORY CODE: ISO 17020 / TÜV Section 29"
  }
};

function initInspectionIntelligence() {
  const hotspots = document.querySelectorAll('.car-hotspot');
  const pills = document.querySelectorAll('.domain-pill-btn');
  const hudCard = document.getElementById('inspectionHudCard');

  if (!hotspots.length || !hudCard) return;

  function selectDomain(key) {
    const data = inspectionDomains[key];
    if (!data) return;

    hotspots.forEach(spot => {
      spot.classList.toggle('active', spot.getAttribute('data-spot') === key);
    });

    pills.forEach(pill => {
      pill.classList.toggle('active', pill.getAttribute('data-domain') === key);
    });

    hudCard.style.opacity = '0.4';
    hudCard.style.transform = 'translateY(4px)';

    setTimeout(() => {
      document.getElementById('hudDomainNum').textContent = `INSPECTION DOMAIN ${data.num}`;
      document.getElementById('hudTitle').textContent = data.title;
      document.getElementById('hudStatus').textContent = data.status;

      document.getElementById('hudM1Label').textContent = data.metric1.label;
      document.getElementById('hudM1Val').textContent = data.metric1.val;
      document.getElementById('hudM1Target').textContent = data.metric1.target;

      document.getElementById('hudM2Label').textContent = data.metric2.label;
      document.getElementById('hudM2Val').textContent = data.metric2.val;
      document.getElementById('hudM2Target').textContent = data.metric2.target;

      document.getElementById('hudM3Label').textContent = data.metric3.label;
      document.getElementById('hudM3Val').textContent = data.metric3.val;
      document.getElementById('hudM3Target').textContent = data.metric3.target;

      document.getElementById('hudM4Label').textContent = data.metric4.label;
      document.getElementById('hudM4Val').textContent = data.metric4.val;
      document.getElementById('hudM4Target').textContent = data.metric4.target;

      document.getElementById('hudDesc').textContent = data.desc;
      document.getElementById('hudCode').textContent = data.code;

      hudCard.style.opacity = '1';
      hudCard.style.transform = 'translateY(0)';
    }, 150);
  }

  hotspots.forEach(spot => {
    spot.addEventListener('click', () => {
      selectDomain(spot.getAttribute('data-spot'));
    });
  });

  pills.forEach(pill => {
    pill.addEventListener('click', () => {
      selectDomain(pill.getAttribute('data-domain'));
    });
  });
}

const rpmProfiles = {
  idle: {
    rpm: "750 RPM",
    flow: "14.2 L/s",
    co: { val: "0.02 %", pct: 10, note: "OPTIMAL PASS (-90% OF CEILING)" },
    hc: { val: "12 PPM", pct: 20, note: "EXCELLENT PASS (-80% OF CEILING)" },
    nox: { val: "14 mg/km", pct: 23, note: "EURO 6e COMPLIANT" },
    co2: { val: "142 g/km", pct: 75, note: "STOICHIOMETRIC BALANCED (λ = 1.001)" }
  },
  cruise: {
    rpm: "2,200 RPM",
    flow: "32.6 L/s",
    co: { val: "0.04 %", pct: 20, note: "CATALYTIC EQUILIBRIUM ACTIVE" },
    hc: { val: "18 PPM", pct: 30, note: "99.2% HYDROCARBON CONVERSION" },
    nox: { val: "22 mg/km", pct: 36, note: "SCR INJECTION OPTIMAL" },
    co2: { val: "158 g/km", pct: 82, note: "LEAN-BURN TRANSITION (λ = 1.002)" }
  },
  highload: {
    rpm: "3,800 RPM",
    flow: "68.4 L/s",
    co: { val: "0.07 %", pct: 35, note: "HIGH LOAD STABILITY PASS" },
    hc: { val: "28 PPM", pct: 46, note: "PARTICULATE FILTER 99.8% EFFICIENCY" },
    nox: { val: "36 mg/km", pct: 60, note: "EGR VALVE MODULATION ACTIVE" },
    co2: { val: "182 g/km", pct: 92, note: "PEAK TORQUE COMBUSTION" }
  }
};

function initEmissionsConsole() {
  const rpmButtons = document.querySelectorAll('.rpm-btn');
  const flowMeterEl = document.getElementById('emissionsFlowRate');

  if (!rpmButtons.length) return;

  function setRpmMode(mode) {
    const data = rpmProfiles[mode];
    if (!data) return;

    rpmButtons.forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-mode') === mode);
    });

    if (flowMeterEl) flowMeterEl.textContent = `EXHAUST FLOW: ${data.flow}`;

    const coVal = document.getElementById('coValue');
    const coBar = document.getElementById('coBar');
    const coMeta = document.getElementById('coMeta');
    if (coVal) coVal.textContent = data.co.val;
    if (coBar) coBar.style.width = `${data.co.pct}%`;
    if (coMeta) coMeta.textContent = data.co.note;

    const hcVal = document.getElementById('hcValue');
    const hcBar = document.getElementById('hcBar');
    const hcMeta = document.getElementById('hcMeta');
    if (hcVal) hcVal.textContent = data.hc.val;
    if (hcBar) hcBar.style.width = `${data.hc.pct}%`;
    if (hcMeta) hcMeta.textContent = data.hc.note;

    const noxVal = document.getElementById('noxValue');
    const noxBar = document.getElementById('noxBar');
    const noxMeta = document.getElementById('noxMeta');
    if (noxVal) noxVal.textContent = data.nox.val;
    if (noxBar) noxBar.style.width = `${data.nox.pct}%`;
    if (noxMeta) noxMeta.textContent = data.nox.note;

    const co2Val = document.getElementById('co2Value');
    const co2Bar = document.getElementById('co2Bar');
    const co2Meta = document.getElementById('co2Meta');
    if (co2Val) co2Val.textContent = data.co2.val;
    if (co2Bar) co2Bar.style.width = `${data.co2.pct}%`;
    if (co2Meta) co2Meta.textContent = data.co2.note;
  }

  rpmButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      setRpmMode(btn.getAttribute('data-mode'));
    });
  });
}

const bayStages = {
  1: {
    name: "01 — ARRIVAL",
    title: "Bay Arrival & License Plate Recognition",
    duration: "Stage Time: 2.0 Minutes",
    desc: "Vehicle arrives at Bay 04 entry threshold. High-speed ANPR optical cameras scan license plate, cross-reference reservation record in the cloud registry, and initiate bay guidance lasers.",
    equipment: "Overhead 4K Stereoscopic Cameras • Ground Induction Transponder",
    telemetry: "Bay 04 Status: ENTRY PERMITTED • GATE 01 OPEN"
  },
  2: {
    name: "02 — IDENTIFICATION",
    title: "Chassis Stamping & OBD-II ECU Handshake",
    duration: "Stage Time: 3.5 Minutes",
    desc: "Laser optical profilometry scans the 17-digit chassis VIN. Diagnostic technician connects encrypted OBD-II telemetry pod to interrogate engine computer trouble codes and readiness monitor flags.",
    equipment: "Laser VIN Profilometer • Encrypted Bluetooth OBD-II Pod",
    telemetry: "ECU Status: CAL ID VERIFIED • 0 FAULT CODES STORED"
  },
  3: {
    name: "03 — INSPECTION",
    title: "Dynamometer Brake & Suspension Testing",
    duration: "Stage Time: 6.5 Minutes",
    desc: "Vehicle rolls onto automated roller dyno. Computerized resistance cycle measures left-to-right brake balance, emergency stopping force, and hydraulic suspension damping frequency.",
    equipment: "Twin-Axle Dynamic Rollers • Electro-Hydraulic Shaker Plates",
    telemetry: "Dynamometer: 1,400 NM SENSORS • 100 HZ SAMPLING"
  },
  4: {
    name: "04 — EMISSIONS",
    title: "5-Gas Spectrometry & Opacity Cell",
    duration: "Stage Time: 4.0 Minutes",
    desc: "Dual-probe optical exhaust sampler inserted into tailpipes. High-accuracy NDIR and chemiluminescent sensors analyze Carbon Monoxide, Hydrocarbons, NOx, and Carbon Dioxide across multiple RPM regimes.",
    equipment: "HORIBA MEXA-7000 5-Gas Analyzer • Laser Opacity Sensor",
    telemetry: "Spectrometry: LASER ACTIVE • SAMPLE CELL 428°C"
  },
  5: {
    name: "05 — RESULTS",
    title: "Cryptographic Certificate & Road Dispatch",
    duration: "Stage Time: 1.5 Minutes",
    desc: "All sensor metrology is compiled into the digital vehicle passport, cryptographically signed with the station's private key, and transmitted to the state DMV registry. Windscreen security sticker is applied.",
    equipment: "Cryptographic Hardware Token • High-Resolution QR Printer",
    telemetry: "Certification: ISSUED & RECORDED • DISPATCH CLEARANCE"
  }
};

function initBayStageStepper() {
  const stageButtons = document.querySelectorAll('.bay-step-btn');
  const hudOverlay = document.getElementById('bayHudOverlay');
  const bayImage = document.getElementById('bayCanvasImg');

  if (!stageButtons.length || !hudOverlay) return;

  function setStage(stageNum) {
    const data = bayStages[stageNum];
    if (!data) return;

    stageButtons.forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-stage') == stageNum);
    });

    hudOverlay.style.opacity = '0.35';
    hudOverlay.style.transform = 'translateY(4px)';

    if (bayImage) {
      const scales = { 1: 'scale(1)', 2: 'scale(1.03)', 3: 'scale(1.05)', 4: 'scale(1.04)', 5: 'scale(1.02)' };
      bayImage.style.transform = scales[stageNum] || 'scale(1)';
    }

    setTimeout(() => {
      document.getElementById('bayHudEyebrow').textContent = `STAGE ${data.name}`;
      document.getElementById('bayHudTitle').textContent = data.title;
      document.getElementById('bayHudDesc').textContent = data.desc;
      document.getElementById('bayHudTime').textContent = data.duration;
      document.getElementById('bayHudEquipment').textContent = data.equipment;
      document.getElementById('bayHudStatus').textContent = data.telemetry;

      hudOverlay.style.opacity = '1';
      hudOverlay.style.transform = 'translateY(0)';
    }, 150);
  }

  stageButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      setStage(btn.getAttribute('data-stage'));
    });
  });
}

function initPassportTools() {
  const vinCopyBtn = document.getElementById('copyVinBtn');
  if (vinCopyBtn) {
    vinCopyBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const vinText = 'WAUZZZF27NA019842';
      navigator.clipboard.writeText(vinText).then(() => {
        const origText = vinCopyBtn.innerText;
        vinCopyBtn.innerText = 'COPIED TO CLIPBOARD ✓';
        vinCopyBtn.style.color = '#4CAF50';
        setTimeout(() => {
          vinCopyBtn.innerText = origText;
          vinCopyBtn.style.color = '';
        }, 2200);
      }).catch(() => {
        alert('VIN: ' + vinText);
      });
    });
  }
}

function searchFor(query) {
  if (typeof closeSearchModal === 'function') closeSearchModal();
  const q = (query || '').toLowerCase();
  if (q.includes('braking') || q.includes('intelligence')) {
    document.getElementById('intelligence')?.scrollIntoView({ behavior: 'smooth' });
  } else if (q.includes('emissions')) {
    document.getElementById('emissions')?.scrollIntoView({ behavior: 'smooth' });
  } else if (q.includes('passport')) {
    document.getElementById('passport')?.scrollIntoView({ behavior: 'smooth' });
  } else if (q.includes('bay')) {
    document.getElementById('bay')?.scrollIntoView({ behavior: 'smooth' });
  }
}

