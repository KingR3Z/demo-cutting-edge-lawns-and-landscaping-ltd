export const client = {
  // Business Details
  name: "Cutting Edge Lawns and Landscaping Ltd",
  tagline: "Landscaping | Gardens | Patios | Driveways",
  description: "Professional landscaper services in Eastbourne.",
  category: "Landscaper",
  yearEstablished: "",

  // Contact
  phone: "07850 460852",
  email: "",
  website: "",

  // Location
  address: "Eastbourne",
  city: "Eastbourne",
  county: "",
  postcode: "",
  basedIn: "Eastbourne",

  // People
  founderName: "",
  founderSurname: "",
  founderRole: "Director",

  // Social
  facebook: "",
  instagram: "",
  linkedin: "",
  twitter: "",

  // Reviews
  googleRating: "5",
  reviewCount: "5",

  // Services
  services: [
    { title: "Landscaping", description: "Complete garden transformations with expert hard and soft landscaping.", icon: "tree" },
    { title: "Garden Maintenance", description: "Regular garden care, lawn mowing, hedge trimming and seasonal tidy-ups.", icon: "shovel" },
    { title: "Fencing & Decking", description: "Quality timber fencing, gates, decking and outdoor structures.", icon: "wall" },
    { title: "Paving & Patios", description: "Professional patio and pathway installations in natural stone and block.", icon: "flower" },
  ],

  // DO NOT CHANGE — template defaults (desktop 16:9 + mobile 9:16 frames)
  cinematic: {
    frameCount: 181,
    frameDir: "/frames/",
    framePrefix: "frame_",
    frameExtension: ".jpg",
    framePadding: 4,
    scrollLength: "500vh",
    mobileFrameCount: 181,
    mobileFrameDir: "/frames-mobile/",
    scrubSpeed: 0.5,
    heroStillImage: "/images/hero-still.jpg",
    heroStillImageMobile: "/images/hero-still-mobile.jpg",
  },

  // DO NOT CHANGE — template defaults
  beforeAfter: {
    beforeImage: "/images/before.jpg",
    afterImage: "/images/after.jpg",
    beforeLabel: "Current Garden",
    afterLabel: "Our Vision",
  },

  // DO NOT CHANGE — template defaults
  transformations: [
    { before: "/images/before.jpg", after: "/images/after.jpg", label: "Complete Garden Renovation" },
    { before: "/images/patio-before.jpg", after: "/images/patio-after.jpg", label: "Patio Installation" },
    { before: "/images/front-before.jpg", after: "/images/front-after.jpg", label: "Front Garden" },
    { before: "/images/lawn-before.jpg", after: "/images/lawn-after.jpg", label: "Lawn Restoration" },
    { before: "/images/fence-before.jpg", after: "/images/fence-after.jpg", label: "New Fencing" },
    { before: "/images/deck-before.jpg", after: "/images/deck-after.jpg", label: "Decking & Furniture" },
    { before: "/images/path-before.jpg", after: "/images/path-after.jpg", label: "Garden Path" },
    { before: "/images/border-before.jpg", after: "/images/border-after.jpg", label: "Planting Borders" },
    { before: "/images/drive-before.jpg", after: "/images/drive-after.jpg", label: "Driveway" },
  ] as { before: string; after: string; label: string }[],

  // Reviews — placeholder
  reviews: [
    { name: "Ria Davies", rating: 5, text: "Adam and his team landscaped, levelled and astroturfed our extremely boggy and uneven garden last February. Bearing in mind the weather conditions they worked their socks off and completed a fantastic job within a week or two which has …    Respons", date: "5 years ago" },
    { name: "Richard Talman", rating: 5, text: "Absolutely delighted with the service and craftsmanship from this company.  Adam returned my call and visited to quote on time, and completed the job on time to exceptionally high standards.  Highly recommended. ", date: "7 years ago" },
    { name: "Zara Garrett", rating: 5, text: "Brilliant service from Adam and his team, really pleased with my decking makeover with the best quality artificial grass thanks, would recommend!  ", date: "5 years ago" },
    { name: "Luke Flynn", rating: 5, text: "Very good and some great ideas ", date: "5 years ago" },
    { name: "Janasis", rating: 5, text: "Satisfactory service. ", date: "Edited 5 years ago" },
  ] as { name: string; rating: number; text: string; date: string; badge?: string }[],

  // SEO
  seo: {
    title: "Cutting Edge Lawns and Landscaping Ltd | Landscaper in Eastbourne",
    description: "Professional landscaper in Eastbourne. 5.0-star rated on Google. Call for a free quote.",
  },
};
