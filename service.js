
document.addEventListener('DOMContentLoaded', function () {
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(function (item) {
    const trigger = item.querySelector('.faq-trigger');
    const body = item.querySelector('.faq-body');
    if (!trigger || !body) return;
    trigger.addEventListener('click', function () {
      const isOpen = trigger.getAttribute('aria-expanded') === 'true';
      faqItems.forEach(function (fi) {
        fi.querySelector('.faq-trigger').setAttribute('aria-expanded', 'false');
        fi.querySelector('.faq-body').classList.remove('open');
      });
      if (!isOpen) {
        trigger.setAttribute('aria-expanded', 'true');
        body.classList.add('open');
      }
    });
  });

  const closeBtn = document.getElementById('modalCloseBtn');
  const bookingModal = document.getElementById('bookingModal');
  if (closeBtn && bookingModal) {
    closeBtn.addEventListener('click', function () {
      bookingModal.classList.remove('open');
      bookingModal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    });
    bookingModal.addEventListener('click', function (e) {
      if (e.target === bookingModal) {
        bookingModal.classList.remove('open');
        bookingModal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
      }
    });
  }

  const bayModal = document.getElementById('bayModal');
  if (bayModal) {
    bayModal.addEventListener('click', function (e) {
      if (e.target === bayModal) {
        closeBayModal();
      }
    });
  }

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      closeBayModal();
      if (bookingModal && bookingModal.classList.contains('open')) {
        bookingModal.classList.remove('open');
        bookingModal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
      }
    }
  });

  const filterBtns = document.querySelectorAll('.bay-filter-btn');
  const bayCards = document.querySelectorAll('.svc-bay-card');

  filterBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      filterBtns.forEach(function (b) {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');

      const filterVal = btn.getAttribute('data-filter');

      bayCards.forEach(function (card) {
        const cardCat = card.getAttribute('data-category');
        if (filterVal === 'all' || cardCat === filterVal) {
          card.classList.remove('filtered-out');
          card.style.opacity = '0';
          card.style.transform = 'scale(0.97) translateY(10px)';
          setTimeout(function () {
            card.style.opacity = '1';
            card.style.transform = 'scale(1) translateY(0)';
          }, 40);
        } else {
          card.classList.add('filtered-out');
        }
      });
    });
  });

  const cards = document.querySelectorAll('.svc-card');
  cards.forEach(function (card) {
    card.addEventListener('mousemove', function (e) {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const glow = card.querySelector('.svc-card-glow');
      if (glow) {
        const pct = (x / rect.width) * 100;
        glow.style.background = 'linear-gradient(90deg, transparent ' + (pct - 30) + '%, var(--brand-accent) ' + pct + '%, transparent ' + (pct + 30) + '%)';
      }
    });
  });

  const statNums = document.querySelectorAll('.svc-stat-num, .gstat-num, .bay-stat-value');
  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  statNums.forEach(function (el) {
    el.style.opacity = '0';
    el.style.transform = 'translateY(12px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });

  const cardObs = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry, idx) {
      if (entry.isIntersecting) {
        setTimeout(function () {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }, idx * 80);
        cardObs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  cards.forEach(function (card, idx) {
    card.style.opacity = '0';
    card.style.transform = 'translateY(28px)';
    card.style.transition = 'opacity 0.55s ease, transform 0.55s cubic-bezier(0.16,1,0.3,1), box-shadow 0.35s ease, border-color 0.3s ease';
    cardObs.observe(card);
  });

  const yearEl = document.getElementById('currentYear');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});

const BAY_DATA = {
  1: {
    badge: "BAY 01 // CALIBRATED ACTIVE",
    eyebrow: "EMISSIONS LABORATORY METROLOGY",
    title: "Dual-Probe Infrared Gas Spectrometry & Opacity Bench",
    img: "assets/service_bay_spectrometry.jpg",
    desc: "Equipped with the AVL Schenck MEXA-584L non-dispersive infrared (NDIR) multi-gas diagnostic analyzer. Direct stainless sniffer probes sample tailpipe exhaust under simulated steady-state and transient load cycles, measuring carbon monoxide (CO), carbon dioxide (CO₂), hydrocarbons (HC), oxygen (O₂), and oxides of nitrogen (NOx).",
    specs: [
      { param: "Hardware Station", val: "AVL Schenck MEXA-584L Infrared Spectrometer" },
      { param: "Measurement Channels", val: "CO, CO₂, HC (NDIR), O₂ & NOx (Electrochemical)" },
      { param: "Calibration Standard", val: "ISO/IEC 17025 Certified Reference Gas Cylinders" },
      { param: "CO Measurement Accuracy", val: "±0.01% vol resolution (0 to 10.00% range)" },
      { param: "Response Time (T90)", val: "< 0.9 seconds high-speed sample pump" },
      { param: "Regulatory Compliance", val: "Euro 6d / EPA Tier 3 / UN/ECE Reg. 83" }
    ],
    protocol: [
      "Bay Pre-Test Leak Verification: Automatic pneumatic hermetic sealing test prior to probe insertion.",
      "Dual Heated Stainless Probe Insertion: Depth-calibrated sample pickup directly at tailpipe confluence.",
      "High-Frequency Transient Sampling: 100 Hz data logging over simulated low-idle and 2,500 RPM high-idle cycles.",
      "Automated Cryptographic Certification: Output signed into ORVEXA SHA-256 digital telemetry register."
    ]
  },
  2: {
    badge: "BAY 02 // CALIBRATED ACTIVE",
    eyebrow: "3D CHASSIS & KINEMATICS LABORATORY",
    title: "Stereo Optical 3D Multi-Axis Wheel & Chassis Alignment",
    img: "assets/service_bay_chassis_laser.jpg",
    desc: "Operates the Hunter HawkEye Elite 3D optical stereoscopic imaging array mounted over a 5,000 kg capacity flush hydraulic scissor lift. Four clamp-mounted non-contact optical targets project real-time spatial positioning back to dual high-resolution CMOS camera towers, identifying camber, caster, toe, and setback misalignments.",
    specs: [
      { param: "Optical Hardware", val: "Hunter HawkEye Elite Multi-CMOS Stereo Camera Towers" },
      { param: "Wheel Targets", val: "QuickGrip Non-Contact Rim Clamping Reflective Discs" },
      { param: "Hydraulic Alignment Lift", val: "5,000 kg Dual-Piston Scissor Lift (Flush Level)" },
      { param: "Measurement Precision", val: "±0.01° Camber, Caster, Toe & Thrust Angle" },
      { param: "Triangulation Speed", val: "Full 3D spatial alignment reading in < 70 seconds" },
      { param: "OEM Database", val: "Updated 2026 Factory Alignment Specifications" }
    ],
    protocol: [
      "Drive-On Laser Positioning: Vehicle driven onto precision turntables with automated tire slip plates.",
      "QuickGrip Optical Mounting: Protective non-marring target clamps affixed to rim lips without metal contact.",
      "Dynamic Rollback Compensation: 360-degree runout compensation calculated in a single smooth roll.",
      "Live Chassis Kinematics Adjustment: Mechanic adjusts tie rods and camber eccentrics with live sub-millimeter HUD feedback."
    ]
  },
  3: {
    badge: "BAY 03 // CALIBRATED ACTIVE",
    eyebrow: "PHOTOMETRIC OPTICAL SAFETY",
    title: "Digital Matrix LED & Laser Headlamp Photometric Aiming",
    img: "assets/service_bay_optical_headlamp.jpg",
    desc: "Utilizes a rail-guided digital CMOS optical collimator designed specifically for modern adaptive matrix LED, laser-assisted, and bi-xenon headlights. The tester accurately captures luminous intensity in Candela, beam cutoff sharpness gradient, horizontal deflection, and glare suppression mask angles.",
    specs: [
      { param: "Optical Aimer Hardware", val: "Miesener / Hella Gutmann Digital CMOS Beam Collector" },
      { param: "Mounting System", val: "Precision Floor-Guideway Extruded Aluminum Rails" },
      { param: "Intensity Measurement", val: "0 to 150,000 Candela (Lux at 25m equivalent)" },
      { param: "Cutoff Line Sensitivity", val: "0.1% gradient detection for sharp cutoff compliance" },
      { param: "Camera Sensor", val: "High-Dynamic Range (HDR) CMOS Matrix Detector" },
      { param: "Statutory Standards", val: "ECE Reg. 48 / SAE J599 / ISO 10604" }
    ],
    protocol: [
      "Floor Guideway Alignment: Collimator box guided on laser-leveled floor rails parallel to vehicle centerline.",
      "Distance & Height Optical Calibration: Sonic distance sensor sets exact 30 cm lens-to-headlamp gap.",
      "Low-Beam Cutoff Angle Verification: Software automatically calculates beam inclination and verifies legal 1.0% to 1.5% dip.",
      "High-Beam Candela & Matrix Mask Test: Measures central luminous flux and verifies matrix glare cutout zone."
    ]
  },
  4: {
    badge: "BAY 04 // CALIBRATED ACTIVE",
    eyebrow: "STRUCTURAL & UNDERBODY METROLOGY",
    title: "Multi-Directional Hydraulic Suspension Play Detector",
    img: "assets/service_bay_suspension_pit.jpg",
    desc: "Features heavy-duty hydraulic shaker plates recessed flush into the inspection pit lane floor. Dual hydraulic cylinders induce multi-directional stress loads across front and rear axle steering linkage, wishbones, ball joints, damper mounts, and anti-roll bar bushings while our certified inspectors perform illuminated optical play diagnostics.",
    specs: [
      { param: "Excitation Hardware", val: "Maha PMS 3.5 Hydraulic Axle Play Shaker System" },
      { param: "Hydraulic Test Force", val: "12 kN Dynamic Thrust per Plate" },
      { param: "Plate Travel / Stroke", val: "100 mm Multi-Directional (Lateral & Longitudinal)" },
      { param: "Pit Illumination", val: "Explosion-proof 5,000K LED continuous underbody lighting" },
      { param: "Inspection Lift", val: "Overhead 2-post and flush drive-on pit integration" },
      { param: "Safety Directives", val: "EU Directive 2014/45/EU & Roadworthiness Standards" }
    ],
    protocol: [
      "Drive-On Plate Positioning: Axle aligned directly onto dual ribbed steel hydraulic shaker plates.",
      "Wireless Handheld Activation: Inspector in the pit controls plate vibration vectors via radio remote.",
      "Stress Simulation Under Load: Rapid lateral and rotational forces applied to uncover micro-play in ball joints and tie-rod ends.",
      "Kinematic Integrity Clearance: Subframe bushings, brake lines, and anti-roll bar links certified against allowable OEM tolerances."
    ]
  }
};

function openBayModal(bayId) {
  const data = BAY_DATA[bayId];
  if (!data) return;

  const modal = document.getElementById('bayModal');
  if (!modal) return;

  document.getElementById('bayModalEyebrow').textContent = data.eyebrow;
  document.getElementById('bayModalTitle').textContent = data.title;
  document.getElementById('bayModalImg').src = data.img;
  document.getElementById('bayModalImgBadge').textContent = data.badge;
  document.getElementById('bayModalDesc').textContent = data.desc;

  const tableBody = document.querySelector('#baySpecsTable tbody');
  if (tableBody) {
    tableBody.innerHTML = '';
    data.specs.forEach(function (s) {
      const row = document.createElement('tr');
      row.innerHTML = '<td class="spec-param">' + s.param + '</td><td class="spec-val">' + s.val + '</td>';
      tableBody.appendChild(row);
    });
  }

  const stepsList = document.getElementById('bayProtocolSteps');
  if (stepsList) {
    stepsList.innerHTML = '';
    data.protocol.forEach(function (step) {
      const li = document.createElement('li');
      li.textContent = step;
      stepsList.appendChild(li);
    });
  }

  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeBayModal() {
  const modal = document.getElementById('bayModal');
  if (modal) {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }
}

function openBookingModal() {
  const modal = document.getElementById('bookingModal');
  if (modal) {
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }
}
