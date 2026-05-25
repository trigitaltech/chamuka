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
  { year: "2005", title: "Ascension to the Throne", description: "Installed as Chief Chamuka VI, becoming custodian of the Lenje people in Chisamba District.", isCurrent: false },
  { year: "2010", title: "Land Reform Initiative", description: "Launched pioneering land certification programme ensuring equitable access for all community members.", isCurrent: false },
  { year: "2014", title: "HeForShe Champion", description: "Became UN Women HeForShe champion, advocating for gender equality at the traditional leadership level.", isCurrent: false },
  { year: "2016", title: "GBV By-Laws", description: "Enacted groundbreaking Gender-Based Violence by-laws within the chiefdom — a first in Zambia.", isCurrent: false },
  { year: "2018", title: "UN General Assembly", description: "Addressed the United Nations General Assembly on customary law modernization and women's land rights.", isCurrent: false },
  { year: "2020", title: "Digital Governance", description: "Introduced digital record-keeping for land administration and community governance.", isCurrent: false },
  { year: "2023", title: "Continental Recognition", description: "Received African Union recognition for outstanding contribution to gender equality and land reform.", isCurrent: false },
  { year: "2025", title: "SDG Alignment Report", description: "Published comprehensive report aligning chiefdom governance with UN Sustainable Development Goals.", isCurrent: true },
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
  { id: 1, title: "Installation Ceremony", category: "Ceremony", size: "2x2" as const, image: "/gallery/ceremony-1.jpeg", type: "image" as const },
  { id: 2, title: "HeForShe Summit 2023", category: "Summit", size: "2x1" as const, image: "/gallery/summit-1.jpeg", type: "image" as const },
  { id: 3, title: "HeForShe Community Dialogue", category: "Community", size: "1x1" as const, image: "/gallery/community-1.jpeg", type: "image" as const },
  { id: 4, title: "UN General Assembly Address", category: "Media", size: "1x2" as const, image: "/gallery/media-1.jpeg", type: "image" as const },
  { id: 5, title: "Community Insaka Meeting", category: "Community", size: "1x1" as const, image: "/gallery/community-2.jpeg", type: "image" as const },
  { id: 6, title: "Cultural Dance Performance", category: "Ceremony", size: "2x1" as const, image: "/gallery/ceremony-2.jpeg", type: "image" as const },
  { id: 7, title: "Gender Equality Workshop", category: "Summit", size: "1x1" as const, image: "/gallery/summit-2.jpeg", type: "image" as const },
  { id: 8, title: "Traditional Council Session", category: "Community", size: "1x1" as const, image: "/gallery/community-3.jpeg", type: "image" as const },
  { id: 9, title: "H.R.H. Chief Chamuka VI – Interview", category: "Media", size: "2x1" as const, image: "https://img.youtube.com/vi/lrX9uMAxJ3U/hqdefault.jpg", type: "video" as const, videoUrl: "https://www.youtube.com/embed/lrX9uMAxJ3U" },
  { id: 10, title: "Preservation of Indigenous Seeds", category: "Community", size: "2x1" as const, image: "https://img.youtube.com/vi/eW_KN8Eog8U/hqdefault.jpg", type: "video" as const, videoUrl: "https://www.youtube.com/embed/eW_KN8Eog8U" },
  { id: 11, title: "GLTN Champion Recognition", category: "Media", size: "2x2" as const, image: "/gallery/gltn-champion.jpeg", type: "image" as const, description: "GLTN's IAB Chairperson H.E. Mme. Brenda Mumtemba honors H.R.H. Chief Chamuka VI as a GLTN Champion for his efforts in championing land rights for women, youth and the poor using GLTN tools." },
  { id: 12, title: "Land Empowerment – World Bank Conference", category: "Community", size: "1x2" as const, image: "/gallery/land-empowerment.jpeg", type: "image" as const, description: "H.R.H. Chief Chamuka VI at the 19th Annual World Bank Conference on Land and Poverty in Washington D.C., advocating for the Social Tenure Domain Model (STDM) system to empower women and youth with land certificates." },
  { id: 13, title: "Courtesy Call – Zambian Ambassador to the USA", category: "Media", size: "1x1" as const, image: "/gallery/land-empowerment-ambassador.jpg", type: "image" as const, description: "H.R.H. Chief Chamuka VI with Zambia's Ambassador to the United States, H.E. Dr. Ngosa Simbyakula S.C., during a courtesy call at the Embassy in Washington D.C." },
  { id: 14, title: "H.R.H. Chief Chamuka VI – Royal Salute", category: "Ceremony", size: "2x1" as const, image: "/gallery/chief-salute.jpg", type: "image" as const, description: "Chief Chamuka VI of the Lenje people in traditional regalia." },
  { id: 15, title: "GLTN Partnership Meeting", category: "Summit", size: "1x1" as const, image: "/gallery/gltn-partner.jpeg", type: "image" as const, description: "Collaboration with the Global Land Tool Network on land governance and tenure security." },
  { id: 16, title: "Cultural Programmes & Heritage", category: "Ceremony", size: "1x1" as const, image: "/gallery/cultural-programmes.jpeg", type: "image" as const, description: "Community cultural programmes preserving the traditions and heritage of the Lenje people." },
  { id: 17, title: "US Peace Corps Engagement", category: "Community", size: "1x2" as const, image: "/gallery/us-peace.jpeg", type: "image" as const, description: "H.R.H. Chief Chamuka VI engaging with US Peace Corps representatives on community development initiatives." },
  { id: 18,title: "Chief chamuka departing to Uganda",category: "Community",size: "1x1",image: "/gallery/Chief chamuka departing to Uganda.jpg",type: "image" as const,description: "Chief Chamuka VI departs for Uganda on an official YPA invitation to strengthen youth, agriculture, and infrastructure partnerships."}
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
