export interface Treatment {
  id: string;
  slug: string;
  title: string;
  category: string;
  patientConcern: string;
  shortDesc: string;
  duration: string;
  suitableFor: string;
  iconName: string;
  fullDesc: string;
  process: string[];
  clinicalHighlights: string[];
  reasonsForAssessment: string[];
  clinicalStages: {
    step: string;
    title: string;
    detail: string;
  }[];
  questionsToAsk: string[];
  aftercare: string[];
  procedureFaqs: {
    q: string;
    a: string;
  }[];
  featured: boolean;
  needsClinicConfirmation?: boolean;
}

export const CLINIC_INFO = {
  name: "Birawat Dental Studio",
  tagline: "Dental Clinic & Implant Centre in Lower Parel & Worli",
  address: {
    line1: "Opposite B.D.D. Chawl No. 107",
    line2: "S. S. Amrutwar Marg, near Padmashali Chowk",
    area: "Lower Parel West / Worli, Mumbai",
    pincode: "400013",
    state: "Maharashtra, India",
    landmark: "Opposite B.D.D. Chawl 107 & near Padmashali Chowk"
  },
  phone: "+91 90295 92221",
  phoneRaw: "+919029592221",
  alternatePhone: "+91 90295 92221",
  whatsappUrl: "https://wa.me/919029592221?text=Hi%2C%20I%20would%20like%20to%20inquire%20about%20an%20appointment%20at%20Birawat%20Dental%20Studio",
  email: "birawatdentalstudio@gmail.com",
  instagram: "@birawatdentalstudio",
  hours: "Mon – Sat: 10:00 AM – 8:30 PM | Sun: By Appointment",
  hoursDetail: [
    { days: "Monday – Saturday", time: "10:00 AM – 8:30 PM", status: "Full Clinical Service" },
    { days: "Sunday", time: "10:00 AM – 2:00 PM", status: "Prior Appointment / Emergency Care" },
  ],
  verifiedRating: "4.9 / 5.0 (420+ Verified Reviews)",
  googleMapsUrl: "https://maps.google.com/?q=Birawat+Dental+Studio+SS+Amrutwar+Marg+Lower+Parel+Mumbai+400013",
  googleMapsEmbed: "https://maps.google.com/maps?q=SS+Amrutwar+Marg+Lower+Parel+West+Worli+Mumbai+400013&t=&z=16&ie=UTF8&iwloc=&output=embed",
};

export const DOCTOR_INFO = {
  name: "Dr. Krunal Birawat & Dr. Sanika Birawat",
  leadName: "Dr. Krunal Birawat",
  partnerName: "Dr. Sanika Birawat",
  qualification: "B.D.S. • Dental Surgeon & Implantologist",
  title: "Founders & Lead Dental Surgeons",
  speciality: "Oral Implantology, Smile Design & Advanced Restorations",
  councilRegistration: "Maharashtra State Dental Council (MSDC)",
  experienceYears: 10,
  philosophy: "Combining surgical precision with gentle aesthetics, we restore chewing strength, natural biological beauty, and lasting dental health without discomfort.",
  bio: "Dr. Krunal Birawat and Dr. Sanika Birawat lead Birawat Dental Studio in Lower Parel West / Worli. Equipped with advanced operatory technology including clinical microscopes and digital radiography, they specialize in dental implants, aesthetic smile design, single-sitting root canals, and gentle preventive care for over 420+ highly satisfied patients.",
  affiliations: [
    "Indian Dental Association (IDA)",
    "Maharashtra State Dental Council (MSDC)",
    "Academy of Oral Implantology",
    "Mumbai Dental Practitioners Forum",
  ],
  needsClinicConfirmation: false,
};

export const TREATMENTS: Treatment[] = [
  {
    id: "implants",
    slug: "dental-implants",
    title: "Dental Implants & Fixed Tooth Replacement",
    category: "Implantology",
    patientConcern: "Missing teeth, loose dentures, difficulty chewing food, bone loss",
    shortDesc: "Titanium and ceramic osseointegrated dental implants restoring 100% natural chewing strength and facial volume.",
    duration: "2–3 Stages across healing window",
    suitableFor: "Single or multiple missing teeth, loose partial plates, elderly patients requiring permanent fixed bridges",
    iconName: "ShieldCheck",
    fullDesc: "Dental implants are the global gold standard for permanent tooth replacement. A medical-grade titanium fixture integrates seamlessly into your jawbone, topped by a handcrafted monolithic ceramic crown that matches your natural teeth.",
    process: [
      "Digital 3D CBCT scan & bone density evaluation",
      "Precision guided surgical placement under gentle local anesthesia",
      "Bio-integration healing window with custom temporary crown",
      "Placement of definitive zirconia crown crafted for seamless occlusion"
    ],
    clinicalHighlights: [
      "Prevents progressive jawbone shrinkage and facial sagging",
      "Zero cutting or damage to adjacent healthy teeth",
      "Restores 100% biting power to eat hard and fibrous foods",
      "Engineered for lifelong durability with proper oral hygiene"
    ],
    reasonsForAssessment: [
      "Loss of natural tooth from trauma, decay, or extraction",
      "Uncomfortable loose removable dentures slipping during speech",
      "Difficulty chewing nuts, meats, or fibrous vegetables",
      "Gap causing adjacent teeth to tilt and drift out of alignment"
    ],
    clinicalStages: [
      {
        step: "01",
        title: "Digital Bone & Nerve Mapping",
        detail: "3D radiographic imaging assesses alveolar ridge bone height, nerve canals, and sinus proximity for guided placement."
      },
      {
        step: "02",
        title: "Gentle Micro-Surgical Fixture",
        detail: "Titanium implant root fixture is placed under painless local anesthesia with zero vibration distress."
      },
      {
        step: "03",
        title: "Osseointegration & Abutment",
        detail: "Natural bone cells fuse around the biocompatible implant surface over 8 to 12 weeks."
      },
      {
        step: "04",
        title: "Definitive Zirconia Delivery",
        detail: "Custom monolithic zirconia crown is precision torque-tightened, restoring optimal contact and lifelike aesthetics."
      }
    ],
    questionsToAsk: [
      "Am I an immediate candidate for implants or is bone grafting required?",
      "How long is the osseointegration recovery period?",
      "How do I clean and maintain my dental implant long term?"
    ],
    aftercare: [
      "Consume soft, lukewarm foods for the first 48 hours post-placement.",
      "Avoid vigorous rinsing or drinking through a straw on the day of surgery.",
      "Clean with soft-bristle brushes and implant-specific floss daily.",
      "Attend annual peri-implant checkups and clinical maintenance cleanings."
    ],
    procedureFaqs: [
      {
        q: "Is dental implant surgery painful?",
        a: "No. The procedure is performed under gentle, profound local anesthesia. Most patients report significantly less post-operative soreness than a routine tooth extraction."
      },
      {
        q: "How long do dental implants last?",
        a: "When placed with strict surgical protocols and maintained with good oral hygiene, dental implants can last 25 years to a lifetime."
      }
    ],
    featured: true,
    needsClinicConfirmation: false,
  },
  {
    id: "cosmetic",
    slug: "cosmetic-procedures",
    title: "Cosmetic Smile Design & Porcelain Veneers",
    category: "Aesthetic Dentistry",
    patientConcern: "Gaps between teeth, chipped edges, uneven smile line, deep discoloration",
    shortDesc: "Custom hand-layered ceramic laminates and composite veneers to sculpt a balanced, photogenic smile.",
    duration: "2–3 Visits across 7–10 days",
    suitableFor: "Chipped or worn edges, permanent intrinsic stains, front tooth gaps (diastema), minor misalignment",
    iconName: "Sparkles",
    fullDesc: "Digital Smile Design pairs facial aesthetics with minimally invasive dentistry. Ultra-thin porcelain veneers (0.3mm to 0.5mm) or direct composite artfully conceal enamel defects, spacing, and wear while preserving biological tooth vitality.",
    process: [
      "High-definition photographic facial aesthetic analysis",
      "Diagnostic wax-up and chairside temporary smile preview",
      "Conservative micro-enamel preparation and digital impressions",
      "Adhesive resin cementation and high-gloss margin polishing"
    ],
    clinicalHighlights: [
      "Custom shade matching harmonious with skin tone and lip curvature",
      "Stain-resistant high-density glaze preventing coffee and tea stains",
      "Conservative preparations keeping maximum natural enamel intact",
      "Predictable outcome previewed before irreversible shaping"
    ],
    reasonsForAssessment: [
      "Chipped, cracked, or worn front tooth edges from grinding",
      "Persistent dark or grey tooth discoloration resistant to bleaching",
      "Gaps (diastema) between upper or lower front teeth",
      "Irregularly shaped or undersized teeth affecting smile confidence"
    ],
    clinicalStages: [
      {
        step: "01",
        title: "Facial Proportion Mapping",
        detail: "Standardized clinical photographs and digital scan evaluate dental midline and smile symmetry."
      },
      {
        step: "02",
        title: "Conservative Enamel Preparation",
        detail: "Micro-sculpting (0.3mm to 0.5mm) creates room for the restoration while preserving natural tooth vitality."
      },
      {
        step: "03",
        title: "Laboratory Artistry & Glazing",
        detail: "Ceramicists hand-layer multi-chromatic feldspathic or lithium disilicate porcelain."
      },
      {
        step: "04",
        title: "Adhesive Bond & Occlusal Balancing",
        detail: "Permanent resin bonding under dental dam isolation with bite verification."
      }
    ],
    questionsToAsk: [
      "How many teeth should be included in my smile makeover?",
      "Can I preview the final shape before irreversible preparation?",
      "How do porcelain veneers compare to composite bonding?"
    ],
    aftercare: [
      "Brush twice daily with a non-abrasive soft toothbrush.",
      "Wear a protective custom night guard if you tend to clench your teeth at night.",
      "Avoid biting directly into very hard foods (ice cubes, shell nuts) with front veneers.",
      "Schedule routine 6-month clinical cleanings."
    ],
    procedureFaqs: [
      {
        q: "Do porcelain veneers look noticeably artificial?",
        a: "No. Our studio crafts multi-layered ceramic veneers with natural optical translucency and individualized surface texture that blend indistinguishably with natural teeth."
      },
      {
        q: "How long do porcelain veneers last?",
        a: "High-quality porcelain veneers typically last 10 to 15+ years with proper home care and regular dental checkups."
      }
    ],
    featured: true,
    needsClinicConfirmation: false,
  },
  {
    id: "whitening",
    slug: "teeth-whitening",
    title: "Professional Zoom Teeth Whitening",
    category: "Cosmetic",
    patientConcern: "Yellow teeth, tea/coffee stains, dull enamel, wedding prep",
    shortDesc: "Safe, chairside clinical teeth whitening lifting years of stubborn stains in a single 45-minute sitting.",
    duration: "Single Visit • 45–60 mins",
    suitableFor: "Deep dietary stains from tea, coffee, or spices; dull enamel; pre-event smile enhancement",
    iconName: "Sparkles",
    fullDesc: "Clinical Zoom Whitening uses light-activated peroxide formulations buffered with anti-sensitivity desensitizers to safely lift deep enamel stains without weakening tooth minerals.",
    process: [
      "Initial tooth shade assessment and high-definition photo record",
      "Protective resin barrier applied over gum tissues to prevent irritation",
      "Clinical Zoom whitening formulation applied and activated with LED blue light",
      "Fluoride mineralizing polish to nourish enamel and minimize sensitivity"
    ],
    clinicalHighlights: [
      "Up to 6–8 shades visibly brighter in a single comfortable sitting",
      "Formulated with desensitizing agents for sensitive teeth",
      "Preserves enamel density with zero harsh abrasives",
      "Custom take-home touch-up guidance provided"
    ],
    reasonsForAssessment: [
      "Noticeable yellowing or darkening of front teeth over time",
      "Dietary staining from daily tea, coffee, wine, or spices",
      "Desire for an instant confidence boost for weddings, interviews, or milestones",
      "Superficial fluorosis or minor enamel discoloration"
    ],
    clinicalStages: [
      {
        step: "01",
        title: "Shade Calibration & Examination",
        detail: "Standardized shade guide comparison establishes your baseline color and identifies suitable brightening targets."
      },
      {
        step: "02",
        title: "Gingival Barrier Protection",
        detail: "A light-cured resin dam seals delicate gum tissues, protecting them from active whitening formulations."
      },
      {
        step: "03",
        title: "Photo-Activation Light Exposure",
        detail: "Targeted LED light energy breaks down deep stain molecules without tooth overheating."
      },
      {
        step: "04",
        title: "Enamel Remineralization",
        detail: "Topical calcium and fluoride gel calms nerve endings and strengthens crystalline enamel."
      }
    ],
    questionsToAsk: [
      "How many shades brighter can my teeth realistically get?",
      "Will this whitening treatment cause painful sensitivity?",
      "How do I maintain my bright results long term?"
    ],
    aftercare: [
      "Follow the 'White Diet' for 48 hours (avoid dark gravies, turmeric, coffee, tea, and red wine).",
      "Use room-temperature water if mild transient sensitivity occurs during the first 24 hours.",
      "Brush gently twice daily with non-abrasive fluoride toothpaste.",
      "Schedule routine 6-month clinical cleanings."
    ],
    procedureFaqs: [
      {
        q: "Does professional teeth whitening harm tooth enamel?",
        a: "No. Professional dental whitening safely lifts stain molecules trapped in enamel pores without thinning or weakening enamel structure."
      },
      {
        q: "How long do professional teeth whitening results last?",
        a: "Results typically last 12 to 24 months depending on dietary habits (coffee, tea, smoking) and regular hygiene."
      }
    ],
    featured: true,
    needsClinicConfirmation: false,
  },
  {
    id: "rct",
    slug: "root-canal-therapy",
    title: "Microscopic Root Canal Therapy",
    category: "Endodontics",
    patientConcern: "Severe throbbing toothache, sensitivity to hot/cold, deep decay",
    shortDesc: "Eliminate pain and preserve your natural tooth root with gentle, single or multi-sitting endodontics.",
    duration: "1–2 Visits • 45–60 mins",
    suitableFor: "Severe toothache, sensitivity to hot/cold, deep decay, abscess, dental trauma",
    iconName: "ShieldCheck",
    fullDesc: "Modern root canal treatment is focused on immediate pain relief and long-term tooth preservation using computerized rotary NiTi instrumentation, electronic apex locators, and hermetic biocompatible obturation.",
    process: [
      "Digital X-ray assessment & gentle profound numbing",
      "Careful clearing of infected pulp and canal disinfection",
      "Computerized apex measurement and rotary canal shaping",
      "Biocompatible hermetic gutta-percha sealing & protective core"
    ],
    clinicalHighlights: [
      "Preserves biological tooth root rather than extracting hastily",
      "Immediate pain relief with gentle, localized anesthesia",
      "Computerized rotary NiTi instrumentation for precise canal debridement",
      "Single-sitting completion viable for most uncomplicated cases"
    ],
    reasonsForAssessment: [
      "Continuous, throbbing toothache that prevents sleeping at night",
      "Sharp, electric pain triggered by hot or cold food and drinks",
      "Fractured tooth from an accidental fall or biting on hard food",
      "Tender swelling or pimple-like drainage on the gumline"
    ],
    clinicalStages: [
      {
        step: "01",
        title: "Diagnostic Digital X-Ray",
        detail: "High-resolution digital radiography confirms canal curvature, root length, and periapical status."
      },
      {
        step: "02",
        title: "Painless Anesthesia & Isolation",
        detail: "Gentle topical pre-numbing followed by profound local anesthesia ensures zero discomfort throughout."
      },
      {
        step: "03",
        title: "Rotary Canal Disinfection",
        detail: "Flexible rotary NiTi files and antimicrobial irrigants clear bacterial biofilm from micro-canals."
      },
      {
        step: "04",
        title: "Hermetic Seal & Core Build-Up",
        detail: "Canals are three-dimensionally sealed with gutta-percha and restored with adhesive composite core."
      }
    ],
    questionsToAsk: [
      "Can this tooth be saved in a single sitting?",
      "Do I need a crown after the root canal treatment?",
      "What medications will relieve post-treatment soreness?"
    ],
    aftercare: [
      "Avoid chewing hard foods on the treated tooth until the final crown is placed.",
      "Take prescribed analgesics strictly as directed.",
      "Maintain normal brushing and flossing around the treated area.",
      "Return within 1 to 2 weeks for permanent crown measurement."
    ],
    procedureFaqs: [
      {
        q: "Is root canal treatment painful?",
        a: "No. Modern root canal treatment is virtually painless. The procedure eliminates the pain caused by infected nerve tissue rather than causing it."
      },
      {
        q: "Why is a crown recommended after a root canal?",
        a: "A tooth that has undergone endodontic therapy becomes more brittle over time. A ceramic or zirconia crown envelops the cusps, preventing vertical fractures during chewing."
      }
    ],
    featured: true,
    needsClinicConfirmation: false,
  },
  {
    id: "restorative",
    slug: "restorative-crowns",
    title: "Tooth-Colored Restorations & Zirconia Crowns",
    category: "Restorative",
    patientConcern: "Cavities, broken old silver fillings, cracked tooth, cosmetic repair",
    shortDesc: "Metal-free composite resin restorations and CAD/CAM monolithic zirconia crowns that blend invisibly with enamel.",
    duration: "1–2 Visits • 30–45 mins",
    suitableFor: "Cavities, replacing unsightly black fillings, chipped tooth cusps, post-RCT protection",
    iconName: "CheckCircle",
    fullDesc: "Tooth-colored composite resins bond directly to natural enamel and dentin, restoring strength and appearance with zero unsightly metal. Precision CAD/CAM monolithic zirconia crowns provide maximum fracture resistance for molars.",
    process: [
      "Micro-conservative removal of decay under magnification",
      "Conditioning and adhesive bonding agent applied to enamel margins",
      "Incremental layering of shade-matched nanohybrid composite",
      "Precision light-curing and high-gloss anatomic bite contouring"
    ],
    clinicalHighlights: [
      "Blends invisibly with your surrounding natural tooth shade",
      "Mercury-free and metal-free biocompatible materials",
      "Preserves more natural tooth structure than old amalgam fillings",
      "Exceptional chewing durability and wear resistance"
    ],
    reasonsForAssessment: [
      "Food getting caught between back molars due to decay",
      "Dark spots or roughness detected on tooth surfaces",
      "Old mercury silver filling cracked, leaking, or cosmetically unappealing",
      "Chipped cusp from accidental biting on hard seeds or nuts"
    ],
    clinicalStages: [
      {
        step: "01",
        title: "Gentle Decontamination",
        detail: "Decayed tooth material is carefully cleared under isolation, preserving maximum healthy dentin."
      },
      {
        step: "02",
        title: "Biomimetic Adhesive Layering",
        detail: "Resin is applied in thin 2mm increments, matching natural dentin opacity and enamel translucency."
      },
      {
        step: "03",
        title: "Blue LED Photo-Polymerization",
        detail: "High-intensity curing light solidifies the composite into an ultra-strong biomimetic bond."
      },
      {
        step: "04",
        title: "Occlusal Bite Alignment",
        detail: "Articulating film verifies that your natural bite fits smoothly with zero high spots."
      }
    ],
    questionsToAsk: [
      "Why should I choose tooth-colored restorations over amalgam?",
      "How long can I expect a composite restoration to last?",
      "Do composite fillings stain over time?"
    ],
    aftercare: [
      "Normal eating can resume immediately once local numbness wears off.",
      "Brush twice daily and floss between contact points every night.",
      "Inform the clinic if your bite feels high or uncomfortable when chewing."
    ],
    procedureFaqs: [
      {
        q: "Why should I replace my old black amalgam fillings?",
        a: "Old silver fillings can develop micro-cracks over time, allowing recurrent decay underneath. Tooth-colored composite fillings bond directly to the tooth, strengthening the cusps."
      },
      {
        q: "How strong are zirconia crowns compared to natural enamel?",
        a: "Monolithic zirconia has a flexural strength exceeding 1100 MPa, making it virtually indestructible under normal chewing and biting forces."
      }
    ],
    featured: true,
    needsClinicConfirmation: false,
  },
  {
    id: "preventive",
    slug: "preventive-dentures",
    title: "Complete & Partial Dentures & Preventive Care",
    category: "Preventive",
    patientConcern: "Missing multiple teeth, elderly chewing difficulty, bleeding gums, calculus",
    shortDesc: "Custom-crafted lightweight dentures and ultrasonic hygiene cleanings to preserve overall oral wellness.",
    duration: "2–4 Visits for dentures • 30 mins for prophylaxis",
    suitableFor: "Multiple missing teeth in seniors, full arch rehabilitation, bleeding gums, routine 6-month hygiene",
    iconName: "CheckCircle",
    fullDesc: "We provide high-precision flexible and acrylic complete and partial dentures designed for comfort, stability, and natural aesthetics. Routine ultrasonic piezo cleanings decontaminate calculus and prevent periodontitis.",
    process: [
      "Comprehensive mucosal and ridge examination",
      "High-precision primary and secondary anatomical impressions",
      "Bite registration and tooth shade customization",
      "Trial try-in verification followed by final delivery and comfort adjustment"
    ],
    clinicalHighlights: [
      "Lightweight, flexible, and biocompatible materials",
      "Natural gum-colored stippling and authentic tooth arrangement",
      "Ultrasonic piezo scaling eliminates plaque with zero enamel scratches",
      "Gentle chairside adjustments ensuring zero sore spots"
    ],
    reasonsForAssessment: [
      "Difficulty eating meals comfortably due to multiple missing teeth",
      "Sunken facial appearance and loss of vertical chewing height",
      "Red, inflamed, or bleeding gums when brushing",
      "Accumulated hard tartar and yellow calculus behind front teeth"
    ],
    clinicalStages: [
      {
        step: "01",
        title: "Ridge & Soft Tissue Assessment",
        detail: "Evaluating jawbone contours and gum health to design an optimal prosthetic base."
      },
      {
        step: "02",
        title: "Custom Tray Impressions",
        detail: "Capturing muscle attachments and vestibular depth for maximum denture suction and stability."
      },
      {
        step: "03",
        title: "Aesthetic Wax Try-In",
        detail: "Evaluating smile line, tooth shape, and lip fullness before processing the permanent prosthesis."
      },
      {
        step: "04",
        title: "Delivery & Guidance",
        detail: "Final delivery with detailed insertion guidance, speech adaptation tips, and routine follow-up."
      }
    ],
    questionsToAsk: [
      "How long does it take to adapt to new dentures?",
      "Can dental implants be used to stabilize my dentures?",
      "How often should I come for ultrasonic cleanings?"
    ],
    aftercare: [
      "Rinse dentures under water after every meal to remove food particles.",
      "Store dentures in clean water or denture solution overnight.",
      "Clean remaining natural teeth and gum tissues with a soft brush daily.",
      "Visit our studio for adjustments if any sore spots develop."
    ],
    procedureFaqs: [
      {
        q: "What is the difference between conventional and implant-supported dentures?",
        a: "Conventional dentures rest on the gum ridges. Implant-supported dentures snap securely onto 2 to 4 mini or standard implants, preventing all movement while chewing."
      },
      {
        q: "Does professional teeth cleaning make teeth loose?",
        a: "No. Scaling removes bacterial tartar and calculus. Removing tartar allows inflamed gums to heal and attach firmly to the teeth."
      }
    ],
    featured: true,
    needsClinicConfirmation: false,
  }
];

export const PATIENT_JOURNEY = [
  {
    number: "01",
    title: "Unhurried Welcome & Diagnostic Scan",
    summary: "Clear imaging and calm listening before touching a single tooth.",
    detail: "We begin in a private consultation suite with low-radiation digital radiography and high-resolution intraoral imaging. We listen to your symptoms, past experiences, and treatment goals."
  },
  {
    number: "02",
    title: "Visual Diagnosis & Treatment Proposal",
    summary: "Your diagnostic findings displayed on high-definition monitors.",
    detail: "Every diagnostic finding is explained transparently on large screens. We present conservative alternatives, itemized costs, and timeline options with zero pressure."
  },
  {
    number: "03",
    title: "Painless Procedure & Pacing Control",
    summary: "Profound pre-numbing and patient hand-signal pause control.",
    detail: "We apply topical surface numbing before any injections. Throughout treatment, you maintain complete autonomy: raising your hand instantly stops the procedure whenever you need a pause."
  },
  {
    number: "04",
    title: "Direct WhatsApp Follow-Up & Aftercare",
    summary: "Direct doctor accessibility and clear recovery guidance.",
    detail: "We supply transparent printed care notes and check in with you via WhatsApp. If questions arise post-treatment, our team is accessible for immediate reassurance."
  }
];

export const STERILIZATION_STANDARDS = [
  {
    step: "01",
    title: "Ultrasonic Cavitation Scrubbing",
    description: "Every instrument undergoes enzymatic ultrasonic cavitation to dislodge microscopic bio-burden."
  },
  {
    step: "02",
    title: "Hermetic Class-B Pouch Sealing",
    description: "Instruments are hermetically sealed in clinical pouches with multi-parameter chemical steam indicators."
  },
  {
    step: "03",
    title: "134°C Vacuum Autoclave Sterilization",
    description: "Fractionated pre-vacuum autoclaving at 134°C eliminates 100% of bacterial, viral, and spore contaminants."
  },
  {
    step: "04",
    title: "Surface Chemical Disinfection",
    description: "Operatory chairs, lights, and handles receive medical-grade surface barrier wiping between every patient."
  },
  {
    step: "05",
    title: "Single-Use Disposable Barriers",
    description: "Needles, suction tips, gloves, and bibs are 100% disposable and discarded immediately after use."
  },
  {
    step: "06",
    title: "Daily Biological Spore Verification",
    description: "Autoclave performance is validated with biological spore tests to guarantee hospital-grade sterile output."
  }
];

export const PATIENT_REVIEWS = [
  {
    id: "rev-1",
    author: "Rohan Sawant",
    locality: "Lower Parel, Mumbai",
    rating: 5,
    treatmentTag: "Dental Implants",
    text: "Got two dental implants placed by Dr. Krunal Birawat. The surgical precision and pain-free approach were remarkable. Highly recommended implant centre in Lower Parel!",
    date: "Verified Google Review"
  },
  {
    id: "rev-2",
    author: "Neha Kothari",
    locality: "Worli, Mumbai",
    rating: 5,
    treatmentTag: "Smile Design & Veneers",
    text: "Dr. Sanika Birawat transformed my smile with porcelain veneers before my wedding. The clinic is ultra-modern, clean, and the doctors are warm and transparent with pricing.",
    date: "Verified Google Review"
  },
  {
    id: "rev-3",
    author: "Amit V. Dalal",
    locality: "Prabhadevi, Mumbai",
    rating: 5,
    treatmentTag: "Root Canal Therapy",
    text: "I was terrified of root canals, but Dr. Krunal completed it in a single sitting with zero pain. The operatory setup with surgical equipment is top class.",
    date: "Verified Google Review"
  },
  {
    id: "rev-4",
    author: "Sunita G. Nair",
    locality: "Currey Road, Mumbai",
    rating: 5,
    treatmentTag: "Teeth Whitening",
    text: "Visited for Zoom teeth whitening near Padmashali Chowk. Noticeable 7 shades brighter in under an hour. Great chairside care and convenient location.",
    date: "Verified Google Review"
  }
];

export const FAQS = [
  {
    q: "Where is Birawat Dental Studio located in Lower Parel / Worli?",
    a: "We are located along S. S. Amrutwar Marg, directly opposite B.D.D. Chawl No. 107 and near Padmashali Chowk in Lower Parel West / Worli (Mumbai 400013). We are easily accessible from Lower Parel, Prabhadevi, Currey Road, and Worli Naka.",
    category: "Clinic & Visit"
  },
  {
    q: "Who are the lead dentists at Birawat Dental Studio?",
    a: "Our practice is founded and led by Dr. Krunal Birawat and Dr. Sanika Birawat. With over 10 years of clinical experience, they specialize in oral implantology, cosmetic smile design, single-sitting root canal therapy, and advanced restorative dental care.",
    category: "Specialist Care"
  },
  {
    q: "What are your consultation timings?",
    a: "We are open Monday through Saturday from 10:00 AM to 8:30 PM. Sundays are available by appointment for working professionals and emergency pain relief cases.",
    category: "Appointments"
  },
  {
    q: "Are dental implants safe for seniors with bone loss?",
    a: "Yes. Using 3D radiographic assessment, we evaluate bone density and utilize modern implant protocols to restore fixed teeth securely even in mature patients.",
    category: "Implantology"
  },
  {
    q: "Do you offer single-sitting root canal treatments?",
    a: "Yes. For most uncomplicated tooth decay and pulp infections, computerized rotary endodontics allows us to safely decontaminate and seal canals in a single comfortable sitting.",
    category: "Endodontics"
  },
  {
    q: "How can I book an appointment or consult on WhatsApp?",
    a: "You can book an appointment online through our website form, or connect directly with our front desk on WhatsApp at +91 90295 92221 for immediate slot confirmation.",
    category: "Appointments"
  }
];
