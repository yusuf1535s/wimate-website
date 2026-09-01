/* Navbar-only data — the source of truth for site nav. Live content lives in src/data/wimate.ts */
export const brand = {
  name: "WiMate",
  email: "sales@wimate.in",
  social: {
    linkedin: "https://www.linkedin.com/company/wimate",
    facebook: "https://www.facebook.com/wimatetech/",
  },
};

export type NavBadge = "Popular" | "New";

export type MegaLink = {
  label: string;
  to: string;
  badge?: NavBadge;
};

export type MegaGroup = {
  title: string;
  to: string;
  items: MegaLink[];
};

export type NavItem =
  | { kind: "link"; label: string; to: string }
  | { kind: "mega"; label: string; to: string; groups: MegaGroup[] }
  | { kind: "menu"; label: string; to: string; items: MegaLink[] };

export const navItems: NavItem[] = [
  { kind: "link", label: "Home", to: "/" },
  {
    kind: "mega",
    label: "Products",
    to: "/products",
    groups: [
      {
        title: "Connectivity",
        to: "/products#gateways",
        items: [
          { label: "Unifier 300 - 3G/4G", to: "/products#unifier-300", badge: "Popular" },
          { label: "Unifier 400 - Sensing", to: "/products#unifier-400", badge: "New" },
          { label: "Unifier 500 - Multiport", to: "/products#unifier-500" },
          { label: "Wi-link", to: "/products#wi-link-100", badge: "New" },
        ],
      },
      {
        title: "HMI & IO",
        to: "/products#hmi",
        items: [
          { label: "IO Card", to: "/products#io-card", badge: "Popular" },
          { label: "HMI 4.3\"", to: "/products#hmi-4-3" },
          { label: "HMI 7\"", to: "/products#hmi-7" },
        ],
      },
      {
        title: "Sensors",
        to: "/products#sensors",
        items: [
          { label: "Temperature", to: "/products#wisense-100" },
          { label: "Temperature & Humidity", to: "/products#wisense-100" },
          { label: "Temperature, Humidity & CO2", to: "/products#wisense-100", badge: "Popular" },
          { label: "Vibration 3 Axis", to: "/products#wisense-200", badge: "New" },
          { label: "Occupancy", to: "/products#wisense-300" },
        ],
      },
    ],
  },
  { kind: "link", label: "IoT cloud platform", to: "/cloudtesla" },
  {
    kind: "menu",
    label: "Solutions",
    to: "/solutions",
    items: [
      { label: "Building Management", to: "/solutions#building-management", badge: "Popular" },
      { label: "Industry 4.0", to: "/solutions#industry-4-0" },
      { label: "RO Plant Monitoring", to: "/solutions#ro-plant" },
      { label: "Sewage Treatment Plant", to: "/solutions#stp-monitoring", badge: "New" },
      { label: "Energy Management", to: "/solutions#energy-management" },
      { label: "Machine Health Monitoring", to: "/solutions#machine-health", badge: "New" },
      { label: "Connected Logistics", to: "/solutions#connected-logistics" },
      { label: "Asset Management & Ticketing", to: "/solutions#asset-management-ticketing" },
    ],
  },
  {
    kind: "menu",
    label: "Company",
    to: "/why-wimate",
    items: [
      { label: "About Us", to: "/why-wimate" },
      { label: "Mail", to: "https://mail.google.com" },
      { label: "Payroll", to: "https://wimate.keka.com" },
    ],
  },
  { kind: "link", label: "Contact Us", to: "/contact" },
];

// Backwards-compatible flat list (for any other consumer)
export const navLinks = navItems
  .filter((i): i is { kind: "link"; label: string; to: string } => i.kind === "link")
  .map(({ label, to }) => ({ label, to }));
