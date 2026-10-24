import {
  Award,
  Building2,
  Users,
  Clock,
  TrendingUp,
  ShieldCheck,
  BadgeCheck,
  HeartHandshake,
} from "lucide-react";

import type {
  SimpleNavLink,
  HeroSectionConfig,
  DifferenceConfig,
  Agent,
  Property,
  ReviewPageData,
  CTAContentConfig,
  DashboardCardConfig,
  StatBarConfig,
  ValuationConfig,
  PropertiesSectionConfig,
  FooterConfig,
} from "../types";

/**
 ============================================================
   SITE CONFIG — SINGLE SOURCE OF TRUTH FOR THIS CLIENT
 ============================================================
 * Client: Wendy Forrest - Real Estate Homeward, Brokerage
 * Listings: 0 real + 7 demo (demo entries are marked // DEMO)
 * VERIFY: No email supplied: placeholder in use.
 * VERIFY: Sold volume, satisfaction %, area count are placeholders; licensed since spring 1996 (30 yrs).
 * VERIFY: No listings confirmed: all 7 are demo. The old $920,000 O'Connor Drive listing was dropped as unconfirmed.
 * VERIFY: wendyforrest.com was reported as showing a raw HTML error.
 ============================================================
 */

// ----------------------------------------------------------
// Navbar.tsx
// ----------------------------------------------------------

export const navbarLinks: SimpleNavLink[] = [
  { name: "Home", href: "/" },
  { name: "About", href: "/aboutus" },
  { name: "Services", href: "/services" },
  { name: "Properties", href: "/#properties" },
  { name: "Insights", href: "/#insights" },
  { name: "Contact", href: "/#contact" },
];

// ----------------------------------------------------------
// HeroSection.tsx
// ----------------------------------------------------------

export const heroConfig: HeroSectionConfig = {
  brand: {
    initials: "WF",
    name: "Wendy Forrest",
    title: "Broker",
    heroImage: "/3.jpg",
    heroImageAlt: "East Toronto Real Estate",
  },
  hero: {
    eyebrow: "Real Estate Homeward, Brokerage · Toronto East End & the Beaches",
    headingMain: "Buy, sell, and invest with",
    headingItalic: "confidence",
    headingEnd: "with Wendy Forrest.",
    subheading:
      "Dedicated residential real estate broker serving Toronto's East End, the Beaches, Leslieville, and East York since 1996. Delivering personalized guidance and seamless property transactions.",
    primaryCtaText: "Start a Conversation",
    primaryCtaLink: "/aboutus",
    headerCtaText: "Get In Touch",
    headerCtaLink: "/#contact",
  },
  navLinks: [
    { name: "Home", href: "/", active: true },
    { name: "About", href: "/", active: false },
    { name: "Services", href: "/", active: false },
    { name: "Properties", href: "/#properties", active: false },
    { name: "Insights", href: "/#insights", active: false },
    { name: "Contact", href: "/#contact", active: false },
  ],
  stats: [
    { icon: Award, value: "$150M+", suffix: "", label: "worth of real estate sold" },
    { icon: Building2, value: "30+", suffix: " Yrs", label: "of experience (Since 1996)" },
    { icon: Users, value: "97%", suffix: "", label: "client satisfaction" },
    { icon: Clock, value: "12+", suffix: " Areas", label: "areas served" },
  ],
};

// ----------------------------------------------------------
// WhyUsSection.tsx ("The Wendy Difference")
// ----------------------------------------------------------

export const differenceConfig: DifferenceConfig = {
  eyebrow: "/ Why Choose Wendy?",
  headingMain: "The Wendy ",
  headingItalic: "Difference",
  subtext:
    "Combining deep local market knowledge across Toronto's East End, the Beaches, Leslieville, and East York with personalized service, clear communication, and dedicated professional representation.",
  callNowText: "Call Direct",
  callNowHref: "tel:4166982090",
  bookConsultationText: "Book a Consultation",
  bookConsultationHref: "#contact",
  features: [
    {
      icon: TrendingUp,
      title: "Extensive Regional Coverage",
      description:
        "Serving Toronto's East End, the Beaches, Leslieville, Riverdale, East York, and surrounding neighbourhoods.",
    },
    {
      icon: ShieldCheck,
      title: "RECO & Homeward Standards",
      description:
        "Professional brokerage representation ensuring all legal, contractual, and regulatory standards are rigorously met.",
    },
    {
      icon: BadgeCheck,
      title: "Licensed Real Estate Professional",
      description:
        "Expert strategic guidance tailored to residential single-family homes, semi-detached and Victorian properties, and condominiums.",
      linkText: "Our services",
      linkHref: "/services",
    },
    {
      icon: HeartHandshake,
      title: "Client-Centric Commitment",
      description:
        "A personalized, responsive approach focused on building lasting trust and achieving your unique real estate goals.",
      linkText: "Learn about Wendy",
      linkHref: "/aboutus",
    },
  ],
};

// ----------------------------------------------------------
// AgentSection.tsx
// ----------------------------------------------------------

export const agent: Agent = {
  name: "Wendy Forrest",
  role: "Broker | Real Estate Homeward, Brokerage",
  bio: "Licensed since 1996 and later a registered broker, Wendy Forrest has built a business on advertising, a strong web presence, and lasting client relationships. Serving Toronto's East End from the Beaches to Leslieville and East York, Wendy offers deep local knowledge, honest advice, and decades of negotiation experience.",
  image: "/user.jpg",
  specialties: [
    "Residential Single-Family Homes",
    "Semi-Detached & Victorian Homes",
    "Condominiums & Townhomes",
    "Buyer & Seller Representation",
    "Free Comparative Market Assessments",
    "The Beaches, Leslieville, Riverdale & East York",
  ],
  recentClosings: [
    { address: "Detached & Semi-Detached Homes", neighbourhood: "The Beaches & Leslieville", price: "Experience" },
    { address: "Condos & Townhomes", neighbourhood: "Riverdale & East York", price: "Expertise" },
    { address: "Free Property Evaluation", neighbourhood: "East Toronto", price: "Value" },
    { address: "Client Satisfaction Focus", neighbourhood: "97% Satisfaction Rate", price: "Trust" },
  ],
};

// ----------------------------------------------------------
// PropertiesCarousel.tsx (7 Total Listings — 0 real, 7 demo)
// ----------------------------------------------------------

export const properties: Property[] = [
  {
    id: "1",
    number: "01/07",
    title: "The Beach Victorian Home",
    subtitle: "Character-filled Victorian steps from the boardwalk with original details and a landscaped garden.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
    price: "Contact for Price",
    category: "residential",
    status: "Active",
    specs: { size: "2,000 sq ft", beds: "4 Beds", baths: "2.5 Baths" },
    mls: "MLS® 202619001",  // DEMO
  },
  {
    id: "2",
    number: "02/07",
    title: "Leslieville Semi-Detached",
    subtitle: "Updated semi with an open layout, finished lower level, and walkable access to cafés and transit.",
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1200&auto=format&fit=crop",
    price: "Contact for Price",
    category: "residential",
    status: "Active",
    specs: { size: "1,700 sq ft", beds: "3 Beds", baths: "2 Baths" },
    mls: "MLS® 202619002",  // DEMO
  },
  {
    id: "3",
    number: "03/07",
    title: "Danforth Condo Suite",
    subtitle: "Bright condo with a private balcony and easy access to subway, shops, and restaurants.",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200&auto=format&fit=crop",
    price: "Contact for Price",
    category: "residential",
    status: "Active",
    specs: { size: "800 sq ft", beds: "2 Beds", baths: "1 Bath" },
    mls: "MLS® 202619003",  // DEMO
  },
  {
    id: "4",
    number: "04/07",
    title: "Riverdale Family Home",
    subtitle: "Spacious family home near parks and top schools with a sunny backyard.",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1200&auto=format&fit=crop",
    price: "Contact for Price",
    category: "residential",
    status: "Active",
    specs: { size: "2,200 sq ft", beds: "4 Beds", baths: "3 Baths" },
    mls: "MLS® 202619004",  // DEMO
  },
  {
    id: "5",
    number: "05/07",
    title: "East End Executive Residence",
    subtitle: "Refined custom home with premium finishes, a gourmet kitchen, and a private garden.",
    image: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?q=80&w=1200&auto=format&fit=crop",
    price: "Contact for Price",
    category: "portfolio",
    status: "Active",
    specs: { size: "3,200 sq ft", beds: "5 Beds", baths: "4 Baths" },
    mls: "MLS® 202619005",  // DEMO
  },
  {
    id: "6",
    number: "06/07",
    title: "Scarborough Bluffs Retreat",
    subtitle: "Peaceful property with scenic views and generous outdoor space near the lake.",
    image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=1200&auto=format&fit=crop",
    price: "Contact for Price",
    category: "portfolio",
    status: "Active",
    specs: { size: "2,500 sq ft", beds: "4 Beds", baths: "3 Baths" },
    mls: "MLS® 202619006",  // DEMO
  },
  {
    id: "7",
    number: "07/07",
    title: "East York Duplex Investment",
    subtitle: "Well-maintained duplex offering dependable rental income close to transit.",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1200&auto=format&fit=crop",
    price: "Contact for Price",
    category: "portfolio",
    status: "Active",
    specs: { size: "2,300 sq ft", beds: "5 Beds", baths: "3 Baths" },
    mls: "MLS® 202619007",  // DEMO
  },
];

export const propertiesSectionConfig: PropertiesSectionConfig = {
  brand: { initial: agent.name.charAt(0), name: agent.name },
  contactLink: { label: "Get in touch", href: "#contact" },
  filters: {
    all: "All Properties",
    residential: "Residential & buyers",
    portfolio: "Rural & specialty",
  },
  heading: {
    line1: "Explore",
    line1Emphasis: "your",
    line2: "possibilities",
    line2Emphasis: "with",
  },
  inquireButtonText: "Inquire",
  footerNote: {
    label: "East End Clients",
    body: "From Beaches homes to Leslieville semis, receive seasoned guidance for the move ahead.",
  },
  areaBadge: "East Toronto & surrounding areas",
};

// ----------------------------------------------------------
// ReviewsGlassSection.tsx
// ----------------------------------------------------------

export const reviewPages: ReviewPageData[] = [
  {
    featured: {
      name: "Trusted Regional Professional",
      quote: "Providing dedicated guidance and professional expertise for every step of your real estate transaction.",
      tags: ["Homeward", "97% Satisfaction"],
      handle: "Wendy Forrest | Homeward",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80",
      rating: 5,
    },
    quoteBanner: {
      quote: "Committed to delivering smooth, stress-free real estate experiences across Toronto's East End, the Beaches, Leslieville, and East York.",
      name: "Wendy Forrest",
      role: "Broker",
      initials: "WF",
      rating: 5,
    },
    wide: {
      name: "Attentive & Professional",
      timeAgo: "Since 1996",
      quote: "30+ years of professional real estate experience serving over 12 regional communities with passion and dedication.",
      rating: 5,
    },
    hero: {
      name: "Wendy Forrest",
      role: "Broker | Real Estate Homeward, Brokerage",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
      quote: "Experience & Integrity",
      body: "Wendy brings local market knowledge, thorough communication, and personalized care to clients across East Toronto.",
      rating: 5,
    },
    badge: { reviewCount: "97%", ratingLabel: "Client Satisfaction", clientsCount: "12+ Areas" },
    split: {
      date: "East Toronto & Surrounding Areas",
      title: "Your Regional Real Estate Partner",
      quote: "Helping families, buyers, and investors navigate local real estate markets with complete confidence.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80",
    },
    search: { title: "East Toronto Real Estate", body: "Comprehensive buy, sell, and market evaluation services." },
    teal: {
      name: "Market Expertise",
      body: "Leveraging the Homeward network and regional market insight to deliver optimal results for every client.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
      likes: 0,
      views: "$150M+ Sold",
    },
  },
];

// ----------------------------------------------------------
// FinalCTASection.tsx
// ----------------------------------------------------------

export const ctaConfig: CTAContentConfig = {
  headingMain: "Ready to Start Your",
  headingItalic: "Real Estate Journey?",
  subheading:
    "Contact Wendy Forrest at Real Estate Homeward, Brokerage for expert real estate services across Toronto's East End, the Beaches, Leslieville, and East York.",
  bulletPoints: [
    "Over 30 years of dedicated experience serving clients since 1996",
    "Free, no-obligation comparative market analysis for your property",
    "Attentive service across 12+ areas including Toronto's East End, the Beaches, Leslieville, East York",
  ],
  primaryCtaText: "Book Consult",
  primaryCtaLink: "#contact",
  secondaryCtaText: "Call Wendy (416) 698-2090",
  secondaryCtaLink: "tel:4166982090",
  agentName: "Wendy Forrest",
  agentTitle: "Broker",
};

export const dashboardCardConfig: DashboardCardConfig = {
  title: "Wendy's Approach",
  subtitle: "East Toronto",
  stats: [
    { label: "Satisfaction", value: "97%" },
    { label: "Experience", value: "30+ Years" },
  ],
  marketStatusLabel: "Status",
  marketStatusValue: "Ready to Assist",
  badgeName: "Real Estate Homeward, Brokerage",
  badgeTagline: "Trust, Professionalism, Results",
};

export const ctaStatBars: StatBarConfig[] = [
  { label: "Experience", value: "30+ Years", color: "bg-accent-champagne", valueColor: "text-accent-champagne" },
  { label: "Satisfaction", value: "97%", color: "bg-emerald-400", valueColor: "text-emerald-400" },
];

// ----------------------------------------------------------
// HomeValuationSection.tsx
// ----------------------------------------------------------

export const valuationConfig: ValuationConfig = {
  sectionTag: "Home Evaluation",
  title: {
    main: "What Is Your Property",
    highlight: "Really Worth?",
  },
  description:
    "Thinking of selling or curious about market value in your sector? Request a free, professional market evaluation prepared by Wendy Forrest.",
  defaultPropertyType: "Single Family Home",
  formPlaceholders: {
    name: "e.g. John Smith",
    emailOrPhone: "e.g. name@example.com or (416) 555-0199",
    address: "e.g. 123 Main Street, Toronto",
  },
  contactDetails: {
    phone: { label: "Direct: (416) 698-2090", href: "tel:4166982090" },
  // TODO: placeholder email, replace with the real one
    email: { label: "wendy-forrest@example.com", href: "mailto:wendy-forrest@example.com" },
    location: "Real Estate Homeward, Brokerage, 1858 Queen Street East, Toronto, ON M4L 1H1",
  },
  propertyOptions: [
    { label: "Single Family Home", value: "Single Family Home" },
    { label: "Condominium", value: "Condominium" },
    { label: "Multi-Family / Income Property", value: "Multi-Family" },
    { label: "Townhouse / Rowhouse", value: "Townhouse" },
  ],
};

// ----------------------------------------------------------
// FooterSection.tsx
// ----------------------------------------------------------

export const footerConfig: FooterConfig = {
  headerImage: {
    src: "/7.jpg",
    alt: "Real Estate Homeward, Brokerage - Wendy Forrest",
  },
  exploreSection: {
    title: "Explore",
    links: [
      { label: "Buy & Sell Residential", href: "#services" },
      { label: "Free Property Valuation", href: "#valuation" },
      { label: "Featured Listings", href: "#properties" },
      { label: "About Wendy Forrest", href: "#about" },
    ],
  },
  resourcesSection: {
    title: "Resources",
    links: [
      { label: "First-Time Buyer Guide", href: "#services" },
      { label: "Home Seller Tips", href: "#services" },
      { label: "Client Testimonials", href: "#testimonials" },
      { label: "Get in Touch", href: "#contact" },
    ],
  },
  legalSection: {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "#privacy" },
      { label: "Terms of Service", href: "#terms" },
      { label: "RECO Compliance", href: "#disclaimer" },
    ],
  },
  contactDetails: {
    location: "East Toronto, ON",
    phonePrimary: { label: "Direct: (416) 698-2090", href: "tel:4166982090" },
    phoneSecondary: { label: "Mobile: (416) 698-2090", href: "tel:4166982090" },
    contactLink: { label: "Email: wendy-forrest@example.com", href: "mailto:wendy-forrest@example.com" },
  },
  brandBar: {
    brandName: "WENDY FORREST",
    badgeText: "Real Estate Homeward, Brokerage",
    footerLinks: [
      { label: "Terms & Conditions", href: "#terms" },
      { label: "Privacy Policy", href: "#privacy" },
      { label: "Sitemap", href: "#sitemap" },
    ],
    copyrightHolder: "Wendy Forrest - Real Estate Homeward, Brokerage.",
    copyrightRights: "All rights reserved.",
  },
};