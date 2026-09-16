/**
 * SITE CONTENT & PLACEHOLDERS
 * ---------------------------------------------------------------
 * Everything below is editable content for the National Television
 * Academy site. Items marked [PLACEHOLDER] must be replaced with the
 * official details before the site goes live.
 */

export const contact = {
  organisation: "National Television Academy",
  parent: "Sri Lanka Rupavahini Corporation (SLRC)",
  tagline: "A Sri Lanka Rupavahini Corporation Training Academy",
  /** [PLACEHOLDER] official phone number */
  phone: "011 2587352",
  /** [PLACEHOLDER] official email address */
  email: "chairmanrupavahini@gmail.com",
  /** [PLACEHOLDER] official postal address */
  addressLines: [
    "National Television Academy",
    "Sri Lanka Rupavahini Corporation",
    "Independence Square, Colombo 07",
    "Sri Lanka",
  ],
  /** [PLACEHOLDER] office hours */
  hours: [
    { day: "Monday – Friday", time: "8:30 AM – 4:30 PM" },
    { day: "Saturday", time: "8:30 AM – 12:30 PM" },
    { day: "Sunday & Public Holidays", time: "Closed" },
  ],
  socials: [
    { label: "Facebook", href: "#" },
    { label: "YouTube", href: "#" },
    { label: "Instagram", href: "#" },
    { label: "LinkedIn", href: "#" },
  ],
};

export const languages = [
  { code: "en", label: "English" },
  { code: "si", label: "සිංහල" },
  { code: "ta", label: "தமிழ்" },
];

export type Course = {
  id: string;
  title: string;
  category: "Acting" | "Presenting" | "Technical" | "Voice";
  level: "Foundation" | "Certificate" | "Diploma";
  /** [PLACEHOLDER] duration */
  duration: string;
  /** [PLACEHOLDER] intake date */
  intake: string;
  /** [PLACEHOLDER] course fee */
  fee: string;
  badge?: string;
  summary: string;
  overview: string;
  outcomes: string[];
  modules: { title: string; detail: string }[];
  practical: string[];
  requirements: string[];
  careers: string[];
  faqs: { q: string; a: string }[];
};

export const courses: Course[] = [
  {
    id: "acting-academy",
    title: "Acting Academy",
    category: "Acting",
    level: "Diploma",
    duration: "6 months",
    intake: "Intake opens [PLACEHOLDER date]",
    fee: "Fee: [PLACEHOLDER]",
    badge: "Most Popular",
    summary:
      "Screen acting craft built around camera performance, character work and studio drama production.",
    overview:
      "The Acting Academy trains performers for television drama and screen work. Students move from voice, body and improvisation fundamentals into fully blocked scenes shot in the Rupavahini studios, working with directors, floor managers and camera crews exactly as they would on a broadcast production.",
    outcomes: [
      "Perform naturally and consistently for a multi-camera studio setup",
      "Break down a script into objectives, beats and character intention",
      "Sustain continuity across takes, angles and shooting days",
      "Work professionally with directors, crew and fellow performers",
    ],
    modules: [
      { title: "Foundations of Screen Acting", detail: "Voice, body, relaxation, presence and the difference between stage and camera." },
      { title: "Script & Character Analysis", detail: "Objectives, obstacles, subtext and building a believable character biography." },
      { title: "Scene Work & Improvisation", detail: "Partner work, listening, spontaneity and rehearsal discipline." },
      { title: "Camera Technique", detail: "Eyelines, framing awareness, hitting marks and matching continuity." },
      { title: "Teledrama Production Studio", detail: "A full studio drama shot and edited as the graduation piece." },
    ],
    practical: [
      "Weekly camera-facing rehearsal in a live studio",
      "Recorded scene assessments with playback review",
      "Final teledrama production with a professional crew",
    ],
    requirements: [
      "Minimum age 18 (or 16 with guardian consent)",
      "G.C.E. O/L or equivalent",
      "Audition or recorded monologue",
    ],
    careers: ["Teledrama actor", "Commercial and film performer", "Voice and dubbing artist", "Drama instructor"],
    faqs: [
      { q: "Do I need previous acting experience?", a: "No. The foundation modules assume no prior training, though stage or school drama experience helps." },
      { q: "Is there an audition?", a: "Yes — a short prepared piece, either in person or recorded." },
    ],
  },
  {
    id: "television-presenting",
    title: "Television Presenting",
    category: "Presenting",
    level: "Certificate",
    duration: "4 months",
    intake: "Intake opens [PLACEHOLDER date]",
    fee: "Fee: [PLACEHOLDER]",
    badge: "New Intake",
    summary:
      "Anchoring, live links and interview craft for news, magazine and entertainment television.",
    overview:
      "Television Presenting builds the confidence and precision a broadcast anchor needs. Students train on teleprompter, in-studio and on location, developing a clear personal presenting style across news reading, magazine hosting and live interviewing in Sinhala, Tamil or English.",
    outcomes: [
      "Read fluently and naturally from teleprompter and script",
      "Conduct structured, responsive live interviews",
      "Write and deliver broadcast-standard links and intros",
      "Hold composure and timing under live conditions",
    ],
    modules: [
      { title: "Voice & Diction for Broadcast", detail: "Breath, pace, pitch, clarity and language-specific delivery." },
      { title: "Autocue & Script Reading", detail: "Prompter technique, marking scripts and recovering from errors." },
      { title: "Interviewing Skills", detail: "Research, question structure, listening and follow-ups." },
      { title: "Studio Presence & Grooming", detail: "Camera relationship, posture, wardrobe and on-screen appearance." },
      { title: "Live Programme Simulation", detail: "A timed, produced bulletin or magazine segment." },
    ],
    practical: ["Weekly studio anchoring sessions", "On-location piece-to-camera exercises", "Full live bulletin simulation"],
    requirements: ["Minimum age 18", "G.C.E. A/L or equivalent", "Screen test and language proficiency check"],
    careers: ["News anchor", "Programme host", "Field reporter", "Event compère"],
    faqs: [
      { q: "Which language do I train in?", a: "Choose Sinhala, Tamil or English as your primary presenting language." },
      { q: "Is a screen test required?", a: "Yes, a short recorded screen test forms part of the selection." },
    ],
  },
  {
    id: "camera-lighting",
    title: "Camera & Lighting",
    category: "Technical",
    level: "Diploma",
    duration: "6 months",
    intake: "Intake opens [PLACEHOLDER date]",
    fee: "Fee: [PLACEHOLDER]",
    summary:
      "Broadcast camera operation, composition and studio lighting design on professional equipment.",
    overview:
      "This diploma covers the technical craft behind every frame: exposure, optics, movement, and the lighting design that shapes a studio set. Training runs on the broadcast cameras and lighting grids used in daily Rupavahini production.",
    outcomes: [
      "Operate broadcast cameras confidently in studio and field",
      "Design and rig three-point and mood lighting setups",
      "Control exposure, white balance and colour temperature",
      "Work as part of a coordinated multi-camera crew",
    ],
    modules: [
      { title: "Camera Fundamentals", detail: "Sensors, lenses, exposure triangle and formats." },
      { title: "Composition & Movement", detail: "Framing, shot grammar, pedestal, track and handheld work." },
      { title: "Lighting Design", detail: "Key, fill, back and practicals; colour, contrast and mood." },
      { title: "Multi-Camera Studio Operations", detail: "Comms discipline, shot calling and gallery coordination." },
      { title: "Field Production", detail: "ENG kits, run-and-gun setups and location lighting." },
    ],
    practical: ["Studio camera rotations", "Lighting rig-and-strike labs", "Location shoot assignments"],
    requirements: ["Minimum age 18", "G.C.E. O/L or equivalent", "Basic technical aptitude interview"],
    careers: ["Studio camera operator", "Lighting technician", "Videographer", "Director of photography (assistant)"],
    faqs: [
      { q: "Do I need my own camera?", a: "No. All training runs on academy and SLRC equipment." },
      { q: "Is the course physically demanding?", a: "There is rigging and equipment handling involved in lighting modules." },
    ],
  },
  {
    id: "dubbing-voice",
    title: "Dubbing & Voice Performance",
    category: "Voice",
    level: "Certificate",
    duration: "3 months",
    intake: "Intake opens [PLACEHOLDER date]",
    fee: "Fee: [PLACEHOLDER]",
    badge: "Evening Batch",
    summary:
      "Lip-sync dubbing, narration and character voice work in a professional recording booth.",
    overview:
      "A focused certificate in the voice booth. Students learn microphone craft, lip-sync dubbing for imported drama, documentary narration and character voicing, recording to broadcast standard throughout.",
    outcomes: [
      "Match dialogue precisely to on-screen lip movement",
      "Build and sustain distinct character voices",
      "Deliver clean narration for documentary and promos",
      "Work efficiently to a session engineer's direction",
    ],
    modules: [
      { title: "Voice & Breath Control", detail: "Support, warm-ups, stamina and vocal health." },
      { title: "Microphone Technique", detail: "Distance, plosives, dynamics and booth discipline." },
      { title: "Lip-Sync Dubbing", detail: "Timing to picture, rhythm matching and script adaptation." },
      { title: "Character Voicing", detail: "Range, age, accent and animation performance." },
      { title: "Narration & Commercial Reads", detail: "Documentary, promo and advertising delivery." },
    ],
    practical: ["Booth recording sessions each week", "Dubbing a full drama episode segment", "Showreel recording"],
    requirements: ["Minimum age 16", "G.C.E. O/L or equivalent", "Recorded voice sample"],
    careers: ["Dubbing artist", "Narrator", "Commercial voice-over artist", "Audio drama performer"],
    faqs: [
      { q: "Can I attend after work?", a: "Yes, this certificate runs an evening batch." },
      { q: "Do I get a showreel?", a: "Yes, a recorded voice showreel is produced in the final module." },
    ],
  },
];

export const stats = [
  { value: "1982", label: "SLRC Established" },
  { value: "1998", label: "Digital Upgrade" },
  { value: "3", label: "Languages of Broadcasting" },
  { value: "Industry", label: "Focused Practical Training" },
];

export const timeline = [
  {
    year: "1982",
    title: "Established by Act of Parliament",
    detail:
      "The Sri Lanka Rupavahini Corporation was created under an Act of Parliament, with a commission appointed to establish national television broadcasting.",
  },
  {
    year: "1982",
    title: "Founded under M. J. Perera",
    detail:
      "The corporation began under the leadership of M. J. Perera, with technical and financial support from Japan enabling the first studios and transmission network.",
  },
  {
    year: "1986",
    title: "Studio Expansion",
    detail:
      "Production capacity grew with additional studio facilities, expanding locally produced drama, current affairs and educational programming.",
  },
  {
    year: "1998",
    title: "Digital Upgrade",
    detail:
      "A major grant funded a digital upgrade of production and transmission equipment, modernising the corporation's broadcast infrastructure.",
  },
  {
    year: "Today",
    title: "Three National Channels",
    detail:
      "Rupavahini, Channel Eye and Nethra TV broadcast nationally, and the National Television Academy trains the next generation of media professionals within these facilities.",
  },
];

export const whyChoose = [
  {
    title: "Practical Training First",
    detail: "Classroom theory is kept short. Most contact hours are spent on the floor, in the booth or behind a camera.",
  },
  {
    title: "Experienced Media Professionals",
    detail: "Courses are taught by working directors, presenters, technicians and producers from national broadcasting.",
  },
  {
    title: "Studio-Focused Learning",
    detail: "Students train inside genuine broadcast studios with the same equipment used for daily transmission.",
  },
  {
    title: "Career-Oriented Creative Education",
    detail: "Every course ends with a produced piece — a showreel, a drama or a bulletin — that starts a professional portfolio.",
  },
];

export const studentExperience = [
  { title: "Studio-Based Learning", detail: "Scheduled access to broadcast studios, galleries and control rooms." },
  { title: "Practical Production Work", detail: "Crewed productions where every student rotates through real roles." },
  { title: "Student Showcase", detail: "End-of-term screenings of student drama, bulletins and short films." },
  { title: "Industry Workshops", detail: "Guest sessions with directors, editors and broadcast engineers." },
  { title: "Media Equipment Access", detail: "Cameras, lighting kits, editing suites and recording booths." },
  { title: "Peer Creative Community", detail: "A trilingual cohort of performers, technicians and storytellers." },
];

export type NewsItem = {
  id: string;
  title: string;
  /** [PLACEHOLDER] date */
  date: string;
  category: "Intake" | "Workshop" | "Production" | "Announcement";
  excerpt: string;
  body: string;
};

export const news: NewsItem[] = [
  {
    id: "new-intake",
    title: "Applications Open for the New Academy Intake",
    date: "[PLACEHOLDER date]",
    category: "Intake",
    excerpt: "Applications are now being accepted across all four academy programmes.",
    body: "The National Television Academy is accepting applications for its next intake across the Acting Academy, Television Presenting, Camera & Lighting and Dubbing & Voice Performance programmes. Applications are submitted online, followed by an audition, screen test or aptitude interview depending on the programme. Closing dates and interview schedules will be confirmed to each applicant by email.",
  },
  {
    id: "lighting-workshop",
    title: "Studio Lighting Masterclass with SLRC Technicians",
    date: "[PLACEHOLDER date]",
    category: "Workshop",
    excerpt: "A one-day masterclass on studio lighting design for drama and talk formats.",
    body: "Senior lighting technicians from the Sri Lanka Rupavahini Corporation lead a one-day masterclass covering key and fill balance, colour temperature, and building mood for drama and talk-show sets. The session is open to enrolled students and, subject to space, to alumni.",
  },
  {
    id: "student-teledrama",
    title: "Student Teledrama Production Wraps Filming",
    date: "[PLACEHOLDER date]",
    category: "Production",
    excerpt: "The graduating Acting Academy cohort completed its studio teledrama.",
    body: "The graduating Acting Academy cohort has completed principal photography on its studio teledrama, crewed jointly with Camera & Lighting students. The finished production will be screened at the next student showcase.",
  },
  {
    id: "trilingual-presenting",
    title: "Trilingual Presenting Sessions Added to the Timetable",
    date: "[PLACEHOLDER date]",
    category: "Announcement",
    excerpt: "Additional Sinhala, Tamil and English anchoring practice slots are now scheduled.",
    body: "Following demand from the current cohort, additional anchoring practice slots have been scheduled in Sinhala, Tamil and English. Students may book studio time for cross-language practice in addition to their primary presenting language.",
  },
];

export const galleryCategories = [
  "All",
  "Training",
  "Acting",
  "Presenting",
  "Camera & Lighting",
  "Dubbing",
  "Events",
  "Facilities",
] as const;

export const admissionSteps = [
  { step: 1, title: "Choose Your Programme", detail: "Review the course pages and confirm the programme and language stream that fit your goals." },
  { step: 2, title: "Submit the Online Application", detail: "Complete the application form with your personal, educational and media background details." },
  { step: 3, title: "Upload Your Documents", detail: "Attach certificates, national identity document and a photograph." },
  { step: 4, title: "Audition or Aptitude Assessment", detail: "Attend an audition, screen test, voice sample or technical interview depending on the programme." },
  { step: 5, title: "Receive Your Offer", detail: "Selected applicants receive an offer letter with registration instructions." },
  { step: 6, title: "Register & Begin", detail: "Complete registration, settle fees and attend orientation before classes begin." },
];

export const eligibility = [
  "Minimum age of 16 or 18 depending on the programme",
  "G.C.E. O/L or A/L qualification as specified per course",
  "Proficiency in Sinhala, Tamil or English as the chosen stream",
  "Successful audition, screen test or aptitude assessment",
];

export const requiredDocuments = [
  "Completed application form",
  "Copy of National Identity Card or birth certificate",
  "Certified copies of educational certificates",
  "Two recent passport-size photographs",
  "Audition piece, screen test or voice sample where applicable",
];

export const intakeDates = [
  { label: "Applications open", value: "[PLACEHOLDER date]" },
  { label: "Application deadline", value: "[PLACEHOLDER date]" },
  { label: "Auditions & assessments", value: "[PLACEHOLDER date]" },
  { label: "Offers issued", value: "[PLACEHOLDER date]" },
  { label: "Orientation", value: "[PLACEHOLDER date]" },
  { label: "Classes begin", value: "[PLACEHOLDER date]" },
];

export const admissionFaqs = [
  { q: "How much are the course fees?", a: "Fees are confirmed per intake. [PLACEHOLDER — insert current fee schedule.] Payment plans may be available on request." },
  { q: "Can I apply for more than one programme?", a: "Yes. Submit a separate application for each programme; assessments are scheduled separately." },
  { q: "Are classes held in the evening?", a: "Some programmes, including Dubbing & Voice Performance, run evening batches. Timetables are confirmed at registration." },
  { q: "Do you offer accommodation?", a: "Accommodation is not provided. [PLACEHOLDER — add guidance on nearby options if applicable.]" },
  { q: "Is there a qualification at the end?", a: "Each programme awards a certificate or diploma from the National Television Academy on successful completion." },
];
