/**
 * Central content configuration for the WYLITE VENTURES website.
 * Keeping copy and structural data here (rather than scattered inline
 * in components) makes it trivial to update site-wide content and keeps
 * pages/components free of duplicated literals.
 */

export const siteConfig = {
  name: "WYLITE VENTURES",
  tagline: "Building Dreams. Delivering Excellence.",
  description:
    "Complete construction, electrical, CCTV, solar and home improvement solutions under one roof — serving Ernakulam, Pathanamthitta and Kalanjoor.",
  url: "https://www.wyliteventures.com",
  locations: ["Ernakulam", "Pathanamthitta", "Kalanjoor"],
  phones: ["+91 75949 43044", "+91 90481 13237", "+91 80863 08797"],
  email: "wyliteventures2026@gmail.com",
  instagram: "https://www.instagram.com/wylite3044/",
  instagramHandle: "@wylite3044",
};

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

export type Service = {
  slug: string;
  title: string;
  shortDescription: string;
  icon:
    | "construction"
    | "electrical"
    | "cctv"
    | "solar"
    | "interior"
    | "painting"
    | "plumbing"
    | "fabrication"
    | "landscaping"
    | "maintenance"
    | "waterproofing"
    | "gypsum"
    | "kitchen"
    | "glass"
    | "automation"
    | "roofing"
    | "cladding";
};

export const services: Service[] = [
  {
    slug: "construction",
    title: "Residential & Commercial Construction",
    shortDescription:
      "End-to-end construction from foundation to finish, engineered for durability and designed for living.",
    icon: "construction",
  },
  {
    slug: "electrical",
    title: "Electrical Works",
    shortDescription:
      "Certified wiring, panel upgrades and smart circuitry built to code and built to last.",
    icon: "electrical",
  },
  {
    slug: "cctv",
    title: "CCTV Installation",
    shortDescription:
      "Discreet, high-resolution surveillance systems with remote monitoring for total peace of mind.",
    icon: "cctv",
  },
  {
    slug: "solar",
    title: "Solar Systems",
    shortDescription:
      "Rooftop solar design and installation that cuts your bills and your carbon footprint.",
    icon: "solar",
  },
  {
    slug: "interior",
    title: "Interior Design",
    shortDescription:
      "Considered interiors — from false ceilings to full fit-outs — that feel as good as they look.",
    icon: "interior",
  },
  {
    slug: "painting",
    title: "Painting",
    shortDescription:
      "Weatherproof exteriors and flawless interior finishes using premium coatings.",
    icon: "painting",
  },
  {
    slug: "plumbing",
    title: "Plumbing",
    shortDescription:
      "Leak-free plumbing systems designed for reliability, from supply lines to drainage.",
    icon: "plumbing",
  },
  {
    slug: "fabrication",
    title: "Fabrication",
    shortDescription:
      "Custom steel and metal fabrication for gates, grilles, staircases and structural work.",
    icon: "fabrication",
  },
  {
    slug: "landscaping",
    title: "Landscaping",
    shortDescription:
      "Outdoor spaces shaped with the same precision we bring to what's indoors.",
    icon: "landscaping",
  },
  {
    slug: "maintenance",
    title: "Building Maintenance & AMC",
    shortDescription:
      "Ongoing annual maintenance contracts that keep every system running the way it should.",
    icon: "maintenance",
  },
  {
    slug: "waterproofing",
    title: "Waterproofing",
    shortDescription:
      "Roof, terrace and bathroom waterproofing that protects the structure and prevents recurring leaks.",
    icon: "waterproofing",
  },
  {
    slug: "gypsum",
    title: "False Ceiling / Gypsum Work",
    shortDescription:
      "Clean ceiling profiles, partitions and decorative gypsum work for a refined interior finish.",
    icon: "gypsum",
  },
  {
    slug: "kitchen",
    title: "Modular Kitchen",
    shortDescription:
      "Practical kitchen layouts with smart storage, durable finishes and a polished built-in look.",
    icon: "kitchen",
  },
  {
    slug: "glass",
    title: "Aluminum & Glass Work",
    shortDescription:
      "Sliding systems, partitions and glazing work that bring in light while keeping a premium finish.",
    icon: "glass",
  },
  {
    slug: "automation",
    title: "Smart Home Automation",
    shortDescription:
      "Connected lighting, control and convenience systems that make a home feel modern and effortless.",
    icon: "automation",
  },
  {
    slug: "roofing",
    title: "Roofing & Shed Work",
    shortDescription:
      "Practical roof structures and shed work built for durability, weather protection and long-term use.",
    icon: "construction",
  },
  {
    slug: "cladding",
    title: "Facade Cladding",
    shortDescription:
      "Exterior cladding solutions that sharpen the building's look while adding an extra layer of protection.",
    icon: "fabrication",
  },
];

export const stats = [
  { value: "500+", label: "Projects Completed" },
  { value: "10+", label: "Years Experience" },
  { value: "100%", label: "Customer Satisfaction" },
  { value: "24/7", label: "Support" },
];
