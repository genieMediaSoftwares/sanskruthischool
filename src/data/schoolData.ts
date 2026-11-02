import { SchoolInfo, AcademicProgramme, SportActivity, AchievementItem, NewsNotice, GalleryItem, DisclosureDoc } from '../types';

export const SCHOOL_INFO: SchoolInfo = {
  name: "Sanskruthi Global School",
  tagline: "The Art of Learning. The Spirit of Excellence.",
  motto: "Education for Life",
  affiliationNumber: "130302/2013",
  schoolCode: "57077",
  foundedYear: "2009",
  parentSociety: "Annapurna Educational Society",
  address: {
    line1: "PS Bonangi",
    area: "Parwada Mandal",
    city: "Visakhapatnam",
    state: "Andhra Pradesh",
    pinCode: "531021",
    country: "India"
  },
  phones: ["+91 9133096954", "+91 9963808636"],
  emails: {
    general: "info@sanskruthiglobalschool.in",
    admissions: "admissions@sanskruthiglobalschool.in",
    principal: "principal@sanskruthiglobalschool.in"
  },
  officeHours: "Monday to Saturday: 8:30 AM – 5:00 PM IST",
  whatsappNumber: "919133096954",
  socials: {
    facebook: "https://www.facebook.com/sanskruthiglobalschool",
    instagram: "https://www.instagram.com/sanskruthiglobalschool",
    youtube: "https://www.youtube.com/@sanskruthiglobalschool",
    linkedin: "https://www.linkedin.com/company/sanskruthi-global-school"
  }
};

export const QUICK_STATS = [
  { value: "10+", label: "Acres Scenic Campus", sub: "Nestled in nature at Bonangi" },
  { value: "1:15", label: "Teacher-Student Ratio", sub: "Individual care & mentorship" },
  { value: "100%", label: "CBSE Pass Rate", sub: "Distinction-led board track record" },
  { value: "12+", label: "Elite Sports Academies", sub: "Horse Riding, Archery, Shooting & more" }
];

export const ACADEMIC_PROGRAMMES: AcademicProgramme[] = [
  {
    id: "kindergarten",
    title: "Kindergarten & Early Years",
    ageGroup: "3 – 5 Years",
    grades: "Nursery, LKG, UKG",
    summary: "Play-based, sensory-rich foundational education blending Montessori principles with early cognitive discovery in a joyful, nurturing atmosphere.",
    features: [
      "Activity-oriented sensory exploration tables",
      "Phonics-centred foundational literacy & numeracy",
      "Fine & gross motor skill development centres",
      "Dedicated early-childhood indoor & outdoor play zones",
      "Storytelling, puppetry, and creative expression"
    ],
    highlights: ["Child-safe furniture", "Individual care attendants", "Daily nature & sensory walks"]
  },
  {
    id: "primary",
    title: "Primary School",
    ageGroup: "6 – 10 Years",
    grades: "Classes I to V",
    summary: "Nurturing fundamental conceptual clarity, linguistic confidence, scientific curiosity, and ethical values through experiential CBSE learning.",
    features: [
      "Experiential CBSE syllabus aligned with NEP principles",
      "Bilingual proficiency in English, Hindi, and Regional Language",
      "Hands-on mathematics labs & science discovery tasks",
      "Integrated arts, vocal music, and public speaking",
      "Physical education & sports introduction"
    ],
    highlights: ["Smart digital classrooms", "Continuous formative assessment", "No rote learning approach"]
  },
  {
    id: "middle",
    title: "Middle School",
    ageGroup: "11 – 13 Years",
    grades: "Classes VI to VIII",
    summary: "Bridging foundational understanding with analytical thinking, scientific inquiry, laboratory practice, and leadership development.",
    features: [
      "Deep-dive STEM subjects with dedicated physics, chemistry & biology lab sessions",
      "THINKEDGE innovation & robotics introduction",
      "Formal sports academy training selection",
      "Social science research projects & field immersions",
      "Computer applications, coding basics & digital citizenship"
    ],
    highlights: ["Subject-expert faculty", "Inter-house competitions", "Soft skills & elocution modules"]
  },
  {
    id: "secondary",
    title: "Secondary Education",
    ageGroup: "14 – 15 Years",
    grades: "Classes IX & X (CBSE Board)",
    summary: "Rigorous preparation for All India Secondary School Examination (AISSE) with an integrated foundation for national-level competitive benchmarks.",
    features: [
      "Thorough syllabus coverage with multi-tiered revision & mock tests",
      "Integrated foundational training for NTSE, Olympiads & PRMO",
      "Full access to advanced science & computer labs",
      "Dedicated mentoring & stress-management counselling",
      "Leadership roles in School Council & NCC contingents"
    ],
    highlights: ["Consistently high CBSE board results", "Remedial care clinics", "Career interest mapping"]
  },
  {
    id: "senior-secondary",
    title: "Senior Secondary (MPC & BiPC)",
    ageGroup: "16 – 17 Years",
    grades: "Classes XI & XII (CBSE Board)",
    summary: "Specialised science streams seamlessly integrated with comprehensive IIT-JEE, NEET, and Olympiad coaching under expert national mentors.",
    features: [
      "MPC Stream: Mathematics, Physics, Chemistry with computer science or physical education",
      "BiPC Stream: Biology, Physics, Chemistry with physical education or IP",
      "Rigorous parallel coaching for JEE Mains, JEE Advanced, and NEET",
      "Modern experimental labs meeting international research standards",
      "Supervised evening study sessions for residential students"
    ],
    highlights: ["Distinguished faculty with IIT/Medical entrance pedigree", "Weekly rank-tracking tests", "Dedicated doubt clearing clinics"]
  }
];

export const SPECIALIZED_LABS = [
  {
    title: "THINKEDGE STEM Lab",
    desc: "Interactive experiential lab fostering robotics, design thinking, micro-controllers, IoT fundamentals, and creative problem solving.",
    icon: "Cpu"
  },
  {
    title: "Educomp SmartClass",
    desc: "Digital audio-visual classrooms equipped with interactive screens and 3D visual modules for concept clarity across all grades.",
    icon: "MonitorPlay"
  },
  {
    title: "Advanced Science Labs",
    desc: "Fully equipped independent Physics, Chemistry, and Biology laboratories adhering strictly to CBSE safety and experimental standards.",
    icon: "FlaskConical"
  },
  {
    title: "Skills & Public Speaking Lab",
    desc: "Specialized soft-skills suites for Model United Nations, debates, elocution, personality grooming, and assertive communication.",
    icon: "Mic2"
  }
];

export const SPORTS_ACTIVITIES: SportActivity[] = [
  {
    id: "horse-riding",
    name: "Horse Riding Academy",
    category: "Academy Sport",
    summary: "Premier equestrian training with thoroughbred horses, dedicated sand manege, certified riding instructors, and safety gear.",
    coach: "Col. (Retd.) Equestrian Master Instructor & Certified Grooms",
    facilities: ["Dedicated Sand Riding Ring", "Modern Stables & Grooming Stalls", "Safety Helmets & Body Protectors", "Dressage & Show Jumping Tracks"],
    schedule: "Morning 6:15 AM – 7:30 AM | Evening 4:30 PM – 5:45 PM",
    achievementsSummary: "Cadets represent SGS at regional equestrian meets and ceremonial parades."
  },
  {
    id: "archery",
    name: "Archery Academy",
    category: "Academy Sport",
    summary: "Professional Olympic-style Recurve and Compound archery range with target distances from 10m to 50m under certified national coaches.",
    coach: "National Level Archery Coach",
    facilities: ["Open-air 50m Target Range", "Imported Recurve & Compound Bows", "Target Bosses & Electronic Scorer", "Wind Gauge Equipment"],
    schedule: "Daily specialized coaching sessions for junior & senior cadets",
    achievementsSummary: "Multiple state-level medals in AP Inter-School Archery Championships."
  },
  {
    id: "rifle-shooting",
    name: "Rifle Shooting Range",
    category: "Academy Sport",
    summary: "Indoor 10-metre air rifle and pistol shooting range designed according to ISSF specifications, promoting steady focus and breath control.",
    coach: "Certified NRAI Shooting Instructor",
    facilities: ["10m Air Rifle Electronic Target Range", "Precision Compressed Air Rifles & Pistols", "Shooting Jackets & Stabilizers", "Acoustic Noise Baffling"],
    schedule: "Batch-wise structured training during activity hours",
    achievementsSummary: "Qualifiers for South Zone Rifle Shooting Tournaments."
  },
  {
    id: "swimming",
    name: "Semi-Olympic Swimming Pool",
    category: "Academy Sport",
    summary: "Crystal-clear semi-Olympic sized 25-metre swimming pool with dedicated lane dividers, certified lifeguards, and tiered spectator pavilion.",
    coach: "NIS Certified Swimming Coaches & Female Lifeguards",
    facilities: ["25m 6-Lane Filtration Pool", "Separate Shallow Splash Pool for Kindergarten", "Hygiene Showers & Changing Suites", "Automated Ozonated Filtration"],
    schedule: "Mandatory regular timetable slots & morning residential coaching",
    achievementsSummary: "Inter-district swimming champion trophies across freestyle, breaststroke, and relays."
  },
  {
    id: "martial-arts",
    name: "Taekwondo & Karate",
    category: "Martial Art",
    summary: "Rigorous self-defense, discipline, flexibility, and belt-progression training conducted on padded indoor dojo mats.",
    coach: "Black Belt 4th Dan Chief Instructor",
    facilities: ["Indoor Padded Tatami Dojo", "Kick Pads & Body Shields", "Sparring Headgear & Chest Guards", "Belt Certification System"],
    schedule: "Bi-weekly scheduled classes for all boys and girls",
    achievementsSummary: "Gold and Silver medalists at Andhra Pradesh State Taekwondo Competitions."
  },
  {
    id: "athletics-team-sports",
    name: "Athletics, Basketball & Football",
    category: "Outdoor Field",
    summary: "Full-scale 400m running track, outdoor synthetic-finish basketball courts, cricket turf practice nets, and lush green football field.",
    coach: "Full-Time Physical Education Directors & NIS Athletics Coaches",
    facilities: ["400m Athletic Track", "Standard Regulation Basketball Court", "Football Pitch with Goalposts", "Dedicated 3-Net Cricket Practice Enclosure"],
    schedule: "Daily games period & inter-house matches on weekends",
    achievementsSummary: "Annual Sports Day hosts over 25 competitive track and field events."
  },
  {
    id: "ncc",
    name: "National Cadet Corps (NCC)",
    category: "Cadet & Culture",
    summary: "Comprehensive NCC training covering Naval, Army, and Air Force wings, instilling patriotism, unity, drill precision, and civic leadership.",
    coach: "Associate NCC Officers (ANO) & Military Training Instructors",
    facilities: ["Parade Ground", "Obstacle Course", "Uniform & Gear Armory", "Camp Preparation Modules"],
    schedule: "Weekly parade drills, theory, and annual combined training camps",
    achievementsSummary: "Cadets selected for Republic Day Camp (RDC) and Thal Sainik Camp contingents."
  },
  {
    id: "music-arts",
    name: "SGS Musical Performers & Arts",
    category: "Cadet & Culture",
    summary: "Flourishing cultural academy providing instrumental music (keyboard, drums, guitar, tabla), classical vocal training, and traditional Indian dance.",
    coach: "Resident Music Masters & Classical Choreographers",
    facilities: ["Sound-treated Music Studios", "Acoustic Keyboards, Drums, Guitars & Tablas", "Dance Studio with Full-Length Mirrors", "Amphitheatre Stage"],
    schedule: "Weekly club sessions and daily evening residential rehearsals",
    achievementsSummary: "SGS Band headlines major civic celebrations and international youth forums."
  }
];

export const RESIDENTIAL_CAMPUS_DETAILS = {
  title: "A Safe, Serene & Disciplined Residential Sanctuary",
  tagline: "Home Away from Home in 10-Acre Scenic Tranquility",
  overview: "Situated in the pristine natural environs of Bonangi, Visakhapatnam, Sanskruthi Global School's residential campus offers students a secure, supportive, and pollution-free atmosphere conducive to focused academic immersion and healthy physical growth.",
  features: [
    {
      title: "Separate Secure Dormitories",
      desc: "Distinct, modern residential blocks for boys and girls with 24/7 security, biometric access monitoring, and resident wardens who provide familial care.",
      icon: "ShieldCheck"
    },
    {
      title: "Wholesome Balanced Dining",
      desc: "Hygienic multi-cuisine dining hall serving four fresh, nutritionally planned meals daily (breakfast, lunch, evening high-tea, and dinner) prepared by experienced chefs.",
      icon: "UtensilsCrossed"
    },
    {
      title: "24/7 Medical Infirmary",
      desc: "Full-time resident staff nurse, emergency response protocols, dedicated ambulance, and tie-ups with leading hospitals in Visakhapatnam.",
      icon: "HeartPulse"
    },
    {
      title: "Supervised Evening Prep",
      desc: "Daily 2-hour quiet evening study sessions monitored by subject faculty to assist students with doubt clearing and structured revision.",
      icon: "BookOpenCheck"
    },
    {
      title: "Eco-Friendly Organic Farm",
      desc: "Organic campus farming where students observe sustainable agriculture, horticulture, vermicomposting, and nature conservation.",
      icon: "Leaf"
    },
    {
      title: "Recreation & Community Life",
      desc: "Weekend movie screenings, inter-house debates, sports leagues, and cultural evenings fostering lifelong camaraderie and emotional resilience.",
      icon: "Smile"
    }
  ]
};

export const ACHIEVEMENTS_DATA: AchievementItem[] = [
  {
    id: "ach-1",
    year: "2026",
    category: "CBSE Academics",
    title: "100% First Class in CBSE Class X & XII Examinations",
    description: "Every student of Sanskruthi Global School secured distinction or first-class division in the CBSE Board examinations, with over 35% students scoring above 90% aggregate.",
    badge: "Academic Landmark"
  },
  {
    id: "ach-2",
    year: "2026",
    category: "STEM & Innovation",
    title: "State Robotics & Innovation Challenge Winners",
    description: "SGS ThinkEdge Lab team won 1st Place at the Andhra Pradesh Youth STEM Innovation Fair for their autonomous rural agricultural moisture monitoring rover.",
    badge: "1st Place Gold"
  },
  {
    id: "ach-3",
    year: "2025",
    category: "Sports & Athletics",
    title: "Gold & Silver Medals at AP Inter-School Archery Cup",
    description: "Cadets won 2 Gold medals in Under-14 Compound and 1 Silver in Under-17 Recurve categories at the state archery meet held in Vijayawada.",
    badge: "State Champions"
  },
  {
    id: "ach-4",
    year: "2025",
    category: "Sports & Athletics",
    title: "State Taekwondo Championship Accolades",
    description: "SGS martial arts contingent secured 5 Medals (2 Gold, 2 Silver, 1 Bronze) at the Andhra Pradesh Open Taekwondo Tournament.",
    badge: "Medal Sweep"
  },
  {
    id: "ach-5",
    year: "2025",
    category: "CBSE Academics",
    title: "National Olympiad & NTSE Scholar Selections",
    description: "8 middle and secondary school students qualified for Stage 2 of the National Talent Search and Science Olympiad foundations.",
    badge: "Scholar Distinction"
  },
  {
    id: "ach-6",
    year: "2024",
    category: "Cultural & Arts",
    title: "Best Institutional Delegation at Inter-School Cultural Conclave",
    description: "SGS Musical Performers & classical dance troupe received the Rolling Trophy for outstanding choreography and musical harmony.",
    badge: "Overall Champions"
  }
];

export const NEWS_AND_CIRCULARS: NewsNotice[] = [
  {
    id: "circ-1",
    date: "February 24, 2026",
    category: "Announcement",
    title: "Admissions Open for Academic Year 2026–27 (Pre-Primary to Class XI)",
    summary: "Admissions are officially open for Day Boarding and Residential candidates across Nursery to Class IX, and Class XI (MPC & BiPC streams with integrated coaching).",
    fileSize: "1.2 MB",
    downloadUrl: "#"
  },
  {
    id: "circ-2",
    date: "February 18, 2026",
    category: "Circular",
    title: "Annual Sports Meet & Equestrian Showcase Schedule",
    summary: "Notice regarding the schedule, event fixtures, and parental invitation for the upcoming Annual Inter-House Sports Meet & Equestrian Display at Bonangi Campus.",
    fileSize: "840 KB",
    downloadUrl: "#"
  },
  {
    id: "circ-3",
    date: "January 30, 2026",
    category: "Academic",
    title: "CBSE Board Examination Guidelines & Hall Ticket Instructions",
    summary: "Mandatory instructions for Class X and XII candidates appearing for the CBSE Board Examinations, along with uniform protocols and reporting timings.",
    fileSize: "950 KB",
    downloadUrl: "#"
  },
  {
    id: "circ-4",
    date: "January 15, 2026",
    category: "Event",
    title: "THINKEDGE Science & STEM Expo 2026 Celebrations",
    summary: "Students across Classes IV to XII demonstrated working prototypes in green energy, automation, and environmental biology before invited academic dignitaries.",
    fileSize: "2.1 MB",
    downloadUrl: "#"
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  { id: "g-1", title: "10-Acre Verdant Bonangi Campus", category: "campus", caption: "Lush green panoramic view of academic blocks framed by Visakhapatnam hills.", aspectRatio: "16:9" },
  { id: "g-2", title: "Equestrian Academy in Action", category: "sports", caption: "Students practicing dressage and show jumping on the sand riding manege.", aspectRatio: "4:3" },
  { id: "g-3", title: "Semi-Olympic Swimming Arena", category: "sports", caption: "Clean 25-metre pool with lane dividers under professional lifeguard supervision.", aspectRatio: "4:3" },
  { id: "g-4", title: "THINKEDGE STEM & Robotics Lab", category: "academics", caption: "Young innovators coding micro-controllers and assembling robotics prototypes.", aspectRatio: "4:3" },
  { id: "g-5", title: "Archery Range Target Practice", category: "sports", caption: "Precision training with Olympic recurve bows under national coaches.", aspectRatio: "4:3" },
  { id: "g-6", title: "Rifle Shooting Range", category: "sports", caption: "Indoor 10m target range focusing on breath regulation and laser-sharp focus.", aspectRatio: "4:3" },
  { id: "g-7", title: "Smart Digital Classrooms", category: "academics", caption: "Educomp SmartClass 3D interactive learning modules in session.", aspectRatio: "4:3" },
  { id: "g-8", title: "Organic Farming & Nature Study", category: "cultural", caption: "Hands-on student engagement with organic vegetable cultivation and vermicomposting.", aspectRatio: "4:3" },
  { id: "g-9", title: "Joyful Kindergarten Sensory Room", category: "kindergarten", caption: "Creative play, phonics circle, and sensory motor learning for young minds.", aspectRatio: "4:3" },
  { id: "g-10", title: "Peaceful Residential Hostels", category: "residential", caption: "Airy, hygienic dormitories and serene reading areas for residential scholars.", aspectRatio: "4:3" },
  { id: "g-11", title: "NCC Ceremonial Parade", category: "sports", caption: "Naval, Army, and Air Force cadet wings during ceremonial drill presentation.", aspectRatio: "16:9" },
  { id: "g-12", title: "SGS Musical Performers Live", category: "cultural", caption: "School band and orchestra performing classical and contemporary harmony.", aspectRatio: "4:3" }
];

export const MANDATORY_DISCLOSURE_DOCS: DisclosureDoc[] = [
  { sno: 1, information: "Copies of Affiliation / Upgradation Letter & Recent Extension of Affiliation", docName: "CBSE_Affiliation_Extension_Grant_Letter.pdf", fileSize: "1.4 MB", verifiedDate: "Verified Current" },
  { sno: 2, information: "Copies of Societies / Trust / Company Registration / Renewal Certificate", docName: "Annapurna_Educational_Society_Registration.pdf", fileSize: "890 KB", verifiedDate: "Verified Current" },
  { sno: 3, information: "Copy of No Objection Certificate (NOC) Issued by State Government", docName: "AP_State_Government_NOC_Certificate.pdf", fileSize: "620 KB", verifiedDate: "Verified Current" },
  { sno: 4, information: "Copies of Recognition Certificate under RTE Act, 2009 & its Renewal", docName: "RTE_Act_Recognition_Certificate_DEO.pdf", fileSize: "1.1 MB", verifiedDate: "Verified Current" },
  { sno: 5, information: "Copy of Valid Building Safety Certificate as per National Building Code", docName: "Executive_Engineer_Building_Safety_Certificate.pdf", fileSize: "750 KB", verifiedDate: "Verified Current" },
  { sno: 6, information: "Copy of Valid Fire Safety Certificate Issued by Competent Authority", docName: "AP_Fire_Disaster_Safety_Compliance_Certificate.pdf", fileSize: "920 KB", verifiedDate: "Verified Current" },
  { sno: 7, information: "Copy of the DEO Certificate Submitted for Affiliation / Upgradation", docName: "District_Educational_Officer_Verification_Certificate.pdf", fileSize: "1.3 MB", verifiedDate: "Verified Current" },
  { sno: 8, information: "Copies of Valid Water, Health & Sanitation Certificates", docName: "Public_Health_Sanitation_Potable_Water_Certificate.pdf", fileSize: "540 KB", verifiedDate: "Verified Current" }
];

export const RESULT_STATISTICS = {
  classX: [
    { year: "2024–25", registered: 78, passed: 78, passPercentage: "100%", remarks: "School Topper: 97.6%" },
    { year: "2023–24", registered: 74, passed: 74, passPercentage: "100%", remarks: "School Topper: 98.2%" },
    { year: "2022–23", registered: 69, passed: 69, passPercentage: "100%", remarks: "School Topper: 97.4%" }
  ],
  classXII: [
    { year: "2024–25", registered: 52, passed: 52, passPercentage: "100%", remarks: "MPC & BiPC combined distinction" },
    { year: "2023–24", registered: 48, passed: 48, passPercentage: "100%", remarks: "Multiple IIT/NEET qualifiers" },
    { year: "2022–23", registered: 45, passed: 45, passPercentage: "100%", remarks: "100% first class results" }
  ]
};

export const STAFF_INFO = {
  principal: "Dr. P. V. Ramana Rao, M.Sc., M.Ed., Ph.D.",
  totalTeachers: 46,
  pgt: 14,
  tgt: 18,
  prt: 10,
  pet: 4,
  specialEducator: 1,
  wellnessTeacher: 1,
  teacherStudentRatio: "1:15"
};

export const INFRASTRUCTURE_SPECS = [
  { item: "Total Campus Area", value: "10.0 Acres (40,468.6 sq metres)" },
  { item: "Built-up Area", value: "8,500 sq metres" },
  { item: "Playground Area", value: "18,200 sq metres" },
  { item: "Total Number of Classrooms", value: "38 Large Ventilated Smart Classrooms" },
  { item: "Composite Science & Subject Labs", value: "5 (Physics, Chem, Bio, Math, STEM)" },
  { item: "Computer Labs", value: "2 Labs with 70+ Internet-enabled systems" },
  { item: "Central Library", value: "5,500+ Books, 15 Periodicals, 8 Daily Dailies" },
  { item: "Swimming Pool", value: "Semi-Olympic (25m x 12.5m) with filtration plant" },
  { item: "Specialized Sports", value: "Horse Riding Ring, 50m Archery Range, 10m Rifle Range" },
  { item: "Hostel Facility", value: "Separate Residential blocks for Boys & Girls" }
];
