export const SECTIONS = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "resources", label: "Resources" },
  { id: "gallery", label: "Gallery" },
  { id: "contact", label: "Contact" },
] as const;

export const SOCIAL_LINKS = [
  { platform: "facebook", url: "https://facebook.com/chiefchamukavi", label: "Facebook" },
  { platform: "twitter", url: "https://x.com/chiefchamukavi", label: "X (Twitter)" },
  { platform: "instagram", url: "https://instagram.com/chiefchamukavi", label: "Instagram" },
  { platform: "youtube", url: "https://youtube.com/@chiefchamukavi", label: "YouTube" },
] as const;

export const INQUIRY_CATEGORIES = [
  "General",
  "Press & Media",
  "Community Support",
  "NGO & Partnership",
  "Land Inquiry",
] as const;

export const RESOURCE_CATEGORIES = [
  "All",
  "By-Laws",
  "Annual Reports",
  "Land Guides",
  "Speeches",
  "SDG Alignment",
] as const;

export const TIMELINE_EVENTS = [
  { year: "2005", title: "Ascension to the Throne", description: "Installed as Chief Chamuka VI, becoming custodian of the Lenje people in Chisamba District." },
  { year: "2010", title: "Land Reform Initiative", description: "Launched pioneering land certification programme ensuring equitable access for all community members." },
  { year: "2014", title: "HeForShe Champion", description: "Became UN Women HeForShe champion, advocating for gender equality at the traditional leadership level." },
  { year: "2016", title: "GBV By-Laws", description: "Enacted groundbreaking Gender-Based Violence by-laws within the chiefdom — a first in Zambia." },
  { year: "2018", title: "UN General Assembly", description: "Addressed the United Nations General Assembly on customary law modernization and women's land rights." },
  { year: "2020", title: "Digital Governance", description: "Introduced digital record-keeping for land administration and community governance." },
  { year: "2023", title: "Continental Recognition", description: "Received African Union recognition for outstanding contribution to gender equality and land reform." },
  { year: "2025", title: "SDG Alignment Report", description: "Published comprehensive report aligning chiefdom governance with UN Sustainable Development Goals." },
];

export const RESOURCES = [
  { id: 1, title: "Gender-Based Violence By-Laws", category: "By-Laws", description: "Comprehensive by-laws enacted to prevent and address gender-based violence within the chiefdom.", fileSize: "2.4 MB", fileType: "PDF", year: 2016 },
  { id: 2, title: "Land Administration Guidelines", category: "Land Guides", description: "Step-by-step guide for land applications, transfers, and certification in Chisamba District.", fileSize: "3.1 MB", fileType: "PDF", year: 2020 },
  { id: 3, title: "Annual Governance Report 2024", category: "Annual Reports", description: "Comprehensive annual report covering chiefdom governance, projects, and financial transparency.", fileSize: "5.2 MB", fileType: "PDF", year: 2024 },
  { id: 4, title: "Customary Land Rights Framework", category: "Land Guides", description: "Framework document outlining customary land rights and modern legal protections.", fileSize: "1.8 MB", fileType: "PDF", year: 2019 },
  { id: 5, title: "HeForShe Keynote Address", category: "Speeches", description: "Full text of the keynote address delivered at the UN HeForShe Summit.", fileSize: "420 KB", fileType: "PDF", year: 2018 },
  { id: 6, title: "SDG Alignment Progress Report", category: "SDG Alignment", description: "Mapping chiefdom initiatives to UN Sustainable Development Goals with progress metrics.", fileSize: "4.7 MB", fileType: "PDF", year: 2025 },
  { id: 7, title: "Child Protection By-Laws", category: "By-Laws", description: "By-laws establishing protections for children's rights, education access, and welfare.", fileSize: "1.9 MB", fileType: "PDF", year: 2017 },
  { id: 8, title: "UN General Assembly Speech", category: "Speeches", description: "Address to the United Nations General Assembly on modernizing customary law.", fileSize: "380 KB", fileType: "PDF", year: 2018 },
  { id: 9, title: "Annual Governance Report 2023", category: "Annual Reports", description: "Annual report covering governance milestones, community projects, and outcomes.", fileSize: "4.9 MB", fileType: "PDF", year: 2023 },
];

export const GALLERY_ITEMS = [
  { id: 1, title: "Installation Ceremony", category: "Ceremony", size: "2x2" as const, image: "/gallery/ceremony-1.jpg", type: "image" as const },
  { id: 2, title: "HeForShe Summit 2023", category: "Summit", size: "2x1" as const, image: "/gallery/summit-1.jpg", type: "image" as const },
  { id: 3, title: "Land Certification Handover", category: "Community", size: "1x1" as const, image: "/gallery/community-1.jpg", type: "image" as const },
  { id: 4, title: "UN General Assembly Address", category: "Media", size: "1x2" as const, image: "/gallery/media-1.jpg", type: "image" as const },
  { id: 5, title: "Community Insaka Meeting", category: "Community", size: "1x1" as const, image: "/gallery/community-2.jpg", type: "image" as const },
  { id: 6, title: "Cultural Dance Performance", category: "Ceremony", size: "2x1" as const, image: "/gallery/ceremony-2.jpg", type: "image" as const },
  { id: 7, title: "Gender Equality Workshop", category: "Summit", size: "1x1" as const, image: "/gallery/summit-2.jpg", type: "video" as const, videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
  { id: 8, title: "Traditional Council Session", category: "Community", size: "1x1" as const, image: "/gallery/community-3.jpg", type: "image" as const },
];

export const EVENTS = [
  {
    id: 1,
    title: "Launch of Gender-Based Violence By-Laws",
    date: "March 15, 2016",
    category: "Legislation",
    excerpt: "A landmark moment as Chief Chamuka VI enacted the first-ever GBV by-laws within a traditional chiefdom in Zambia, setting a precedent for customary law reform across the region.",
    image: "/events/gbv-launch.jpg",
  },
  {
    id: 2,
    title: "Annual HeForShe Community Dialogue",
    date: "September 22, 2023",
    category: "Summit",
    excerpt: "Over 500 community members gathered for the annual HeForShe dialogue, discussing progress on gender equality, land rights, and education access within the chiefdom.",
    image: "/events/heforshe-2023.jpg",
  },
  {
    id: 3,
    title: "Land Certification Ceremony — Batch 12",
    date: "June 8, 2024",
    category: "Community",
    excerpt: "The 12th batch of customary land certificates were distributed to 200 families, marking a milestone in equitable land administration under Chief Chamuka VI's governance.",
    image: "/events/land-cert.jpg",
  },
];
