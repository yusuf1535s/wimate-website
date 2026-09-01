export const brand = {
  name: "WiMate",
  tagline: "Connect Everything. Control Anything. Optimize Everything.",
  subtitle:
    "Industrial IoT solutions that connect machines, energy, buildings and operations.",
  email: "sales@wimate.in",
  phone: "+91 9986 074 353",
  address:
    "2nd floor, 43/262, 5th Main, Jayanagar 4th Block, Bengaluru 560011, Karnataka, India",
  hours: "Mon – Fri · 10:00 – 18:00 IST",
  social: {
    linkedin: "https://www.linkedin.com/company/wimate",
    facebook: "https://www.facebook.com/wimatetech/",
  },
};

export const stats = [
  { label: "Data points monitored everyday", value: "1M+", suffix: "" },
  { label: "Energy measured everyday", value: "4", suffix: " GWh" },
  { label: "Devices in field", value: "10,000", suffix: "+" },
  { label: "Satisfied Customers", value: "30", suffix: "+" },
];

export type Client = { name: string; image: string };

export const clients: Client[] = [
  {
    name: "Mitsubishi",
    image:
      "https://www.wimate.in/wp-content/uploads/2021/12/Mitsubishi-logo.png",
  },
  {
    name: "IBM",
    image:
      "https://www.wimate.in/wp-content/uploads/2020/05/us__en_us__ibm100__making_ibm__rand_8bar_logo5__620x350-2-e1592328023369.png",
  },
  {
    name: "Bosch",
    image:
      "https://www.wimate.in/wp-content/uploads/2020/05/pngwing.com_.png",
  },
  {
    name: "Toyota",
    image:
      "https://www.wimate.in/wp-content/uploads/2020/05/toyota-logo-1989-1400x1200-e1592328008982.png",
  },
  {
    name: "Infosys",
    image:
      "https://www.wimate.in/wp-content/uploads/2021/09/infosys-logo-png-1-e1632854522172.png",
  },
  {
    name: "Cipla",
    image:
      "https://www.wimate.in/wp-content/uploads/2020/05/800px-Cipla_logo.svg-1-e1592329642844.png",
  },
  {
    name: "ITC Limited",
    image:
      "https://www.wimate.in/wp-content/uploads/2020/04/1200px-ITC_Limited_Logo.svg-e1592327945228.png",
  },
  {
    name: "Embassy Group",
    image:
      "https://www.wimate.in/wp-content/uploads/2020/05/Embassy_Group_Logo.png",
  },
  {
    name: "RWSSB",
    image: "https://www.wimate.in/wp-content/uploads/2020/05/RWSSB.png",
  },
  {
    name: "GGTronics",
    image:
      "https://www.wimate.in/wp-content/uploads/2020/04/GGT-LOGO-Intertek-2014-JPG.jpg",
  },
];

export type Solution = {
  slug: string;
  title: string;
  short: string;
  description: string;
  bullets: string[];
  icon: string;
};

export const solutions: Solution[] = [
  {
    slug: "industry-4-0",
    title: "Industry 4.0",
    short: "Production process monitoring",
    description:
      "Real-time visibility into production, machines, operators and quality — built for the smart factory floor.",
    bullets: [
      "Production count, idle & downtime tracking",
      "Operator and shift-wise efficiency",
      "Production environment (Temp, RH, CO₂, IAQ)",
      "Maintenance effectiveness",
    ],
    icon: "Factory",
  },
  {
    slug: "energy-management",
    title: "Energy Management",
    short: "Measure, monitor, optimize",
    description:
      "Track electricity, water, compressed air, steam and fuel across plants and buildings to cut cost and emissions.",
    bullets: [
      "Multi-utility metering & submetering",
      "ECM effectiveness & benchmarking",
      "Tariff & demand analytics",
      "Carbon & sustainability reporting",
    ],
    icon: "Zap",
  },
  {
    slug: "building-management",
    title: "Building Management",
    short: "Smart BMS for modern facilities",
    description:
      "Unify HVAC, lighting, occupancy and air-quality data into a single, secure cloud platform.",
    bullets: [
      "Indoor air quality (Temp, RH, CO₂)",
      "Occupancy-driven control",
      "Replace legacy EMS / BMS",
      "256-bit SSL, alerts & remote control",
    ],
    icon: "Building2",
  },
  {
    slug: "machine-health",
    title: "Machine Health",
    short: "Predictive maintenance",
    description:
      "3-axis vibration and condition monitoring for pumps, motors, DG sets and UPS — predict failures before they happen.",
    bullets: [
      "Vibration 3-axis + temperature",
      "Pumps, motors, DG, UPS health",
      "Configurable threshold alerts",
      "Maintenance planning & analytics",
    ],
    icon: "Activity",
  },
  {
    slug: "smart-logistics",
    title: "Smart Logistics",
    short: "Connected fleet & tracking",
    description:
      "Live location, condition and utilization of vehicles, assets and shipments across the supply chain.",
    bullets: [
      "Real-time location tracking",
      "Cold-chain & environment monitoring",
      "Geofencing and route analytics",
      "SLA and utilization dashboards",
    ],
    icon: "Truck",
  },
  {
    slug: "asset-management",
    title: "Asset Management",
    short: "Lifecycle, ticketing & AMC",
    description:
      "Track asset lifecycle, manage tickets and SLAs, and digitize preventive maintenance across sites.",
    bullets: [
      "Asset lifecycle analytics",
      "Ticketing & complaint management",
      "SLA & prescheduled maintenance",
      "Digital forms & operator performance",
    ],
    icon: "Package",
  },
  {
    slug: "ro-water",
    title: "RO Plant Monitoring",
    short: "Water quality & uptime",
    description:
      "Monitor RO plant parameters, water quality and uptime with instant alerts and historical analytics.",
    bullets: [
      "TDS, pH, flow and pressure",
      "Pump health & run-hours",
      "Consumption analytics",
      "SMS / email alerts on threshold",
    ],
    icon: "Droplets",
  },
  {
    slug: "stp-monitoring",
    title: "Sewage Treatment Plant",
    short: "STP performance & compliance",
    description:
      "Continuous monitoring of STP parameters and performance for facilities teams and compliance.",
    bullets: [
      "Inlet / outlet quality",
      "Aeration & blowers monitoring",
      "Compliance-ready reports",
      "Multi-site overview",
    ],
    icon: "Waves",
  },
];

export const industries = [
  { name: "Manufacturing", icon: "Factory" },
  { name: "Automotive", icon: "Car" },
  { name: "Buildings", icon: "Building2" },
  { name: "Energy", icon: "Zap" },
  { name: "Water", icon: "Droplets" },
  { name: "Healthcare", icon: "HeartPulse" },
  { name: "Logistics", icon: "Truck" },
];

export type Product = {
  slug: string;
  name: string;
  category: "Connectivity" | "HMI & IO" | "Sensors";
  short: string;
  description: string;
  highlights: string[];
  badge?: "Popular" | "New";
};

export const products: Product[] = [
  {
    slug: "unifier-300",
    name: "Unifier 300",
    category: "Connectivity",
    short: "3G/4G IoT Gateway",
    description:
      "Industrial 3G/4G gateway for reliable machine and asset connectivity in the field.",
    highlights: ["3G/4G cellular", "Edge protocol conversion", "Cloud-ready"],
    badge: "Popular",
  },
  {
    slug: "unifier-400",
    name: "Unifier 400",
    category: "Connectivity",
    short: "Sensing Gateway",
    description:
      "Multi-protocol sensing gateway that aggregates sensors and pushes data to the cloud.",
    highlights: ["Multi-protocol", "Built for sensors", "Secure by default"],
    badge: "New",
  },
  {
    slug: "unifier-500",
    name: "Unifier 500",
    category: "Connectivity",
    short: "Multiport Gateway",
    description:
      "High-density multiport gateway for complex industrial sites with many assets and machines.",
    highlights: ["Multiport I/O", "High throughput", "Industrial-grade"],
  },
  {
    slug: "wi-link-100",
    name: "Wi-Link 100",
    category: "Connectivity",
    short: "Wireless Link Module",
    description:
      "Compact wireless link module for quick integration of machines and panels.",
    highlights: ["Plug & play", "Wireless", "Compact form factor"],
    badge: "New",
  },
  {
    slug: "io-card",
    name: "IO Card",
    category: "HMI & IO",
    short: "Industrial I/O Card",
    description:
      "Flexible digital and analog I/O card for connecting field devices to the platform.",
    highlights: ["Digital + Analog I/O", "DIN-rail ready", "Wide voltage range"],
    badge: "Popular",
  },
  {
    slug: "hmi-4-3",
    name: "HMI 4.3″",
    category: "HMI & IO",
    short: "Compact Touch HMI",
    description:
      "Crisp 4.3-inch touch HMI for machine-level visualization and control.",
    highlights: ["4.3″ touchscreen", "Cloud-connected", "IP-rated front"],
  },
  {
    slug: "hmi-7",
    name: "HMI 7″",
    category: "HMI & IO",
    short: "Operator Panel HMI",
    description:
      "Larger 7-inch operator panel HMI for production lines and machine dashboards.",
    highlights: ["7″ touchscreen", "Rich dashboards", "Multi-protocol"],
  },
  {
    slug: "wisense-100",
    name: "WiSense 100",
    category: "Sensors",
    short: "Environment Sensor",
    description:
      "Temperature, humidity and CO₂ sensor for IAQ, building and production environments.",
    highlights: ["Temp + RH + CO₂", "IAQ ready", "Wireless"],
    badge: "Popular",
  },
  {
    slug: "wisense-200",
    name: "WiSense 200",
    category: "Sensors",
    short: "Vibration 3-Axis Sensor",
    description:
      "3-axis vibration sensor for predictive maintenance on rotating equipment.",
    highlights: ["3-axis vibration", "Predictive maintenance", "Long battery life"],
    badge: "New",
  },
  {
    slug: "wisense-300",
    name: "WiSense 300",
    category: "Sensors",
    short: "Occupancy Sensor",
    description:
      "Reliable occupancy detection for smart buildings and energy savings.",
    highlights: ["Occupancy detection", "Low power", "Wireless"],
  },
];

export const whyWiMate = [
  {
    title: "End-to-End IoT",
    description:
      "Hardware, cloud platform, installation, commissioning and ongoing support — all from a single accountable team.",
    icon: "Layers",
  },
  {
    title: "Indian Engineering",
    description:
      "Designed, developed and manufactured in India. 18-month replacement warranty on hardware.",
    icon: "Cpu",
  },
  {
    title: "Reliable Hardware",
    description:
      "Time-tested, industrial-grade gateways, HMIs, I/O cards and sensors built for harsh environments.",
    icon: "ShieldCheck",
  },
  {
    title: "Cloud or On-Premise",
    description:
      "Run on the secure WiMate cloud or deploy on-premise — your data, your control.",
    icon: "Cloud",
  },
  {
    title: "24×7 Support",
    description:
      "Phone, email and on-site support backed by an in-house team that owns the full stack.",
    icon: "Headphones",
  },
  {
    title: "Secure by Default",
    description:
      "256-bit SSL encryption, role-based access and audit logs across the platform.",
    icon: "Lock",
  },
];

export const caseStudies = [
  {
    industry: "Automotive",
    title: "Tier-1 automotive plant cuts downtime by 32%",
    problem:
      "Unplanned machine stops were causing missed delivery slots and high maintenance costs.",
    solution:
      "Deployed Unifier 500 gateways with WiSense 200 vibration sensors across 80 critical assets, streaming data to the WiMate cloud with shift-level dashboards.",
    result: [
      "32% reduction in unplanned downtime",
      "18% lower maintenance spend",
      "Real-time OEE visibility per shift",
    ],
  },
  {
    industry: "Buildings",
    title: "Embassy Group: smart BMS across 6 commercial towers",
    problem:
      "Legacy BMS systems made energy benchmarking and IAQ control inconsistent across properties.",
    solution:
      "Rolled out WiSense 100 environment sensors, Unifier 300 gateways and the WiMate building management platform across 6 towers.",
    result: [
      "21% reduction in HVAC energy",
      "Central IAQ monitoring",
      "Tenant comfort score up 14%",
    ],
  },
  {
    industry: "Manufacturing",
    title: "FMCG manufacturer digitizes 4 production lines",
    problem:
      "No real-time visibility into production count, operator efficiency and idle time.",
    solution:
      "Connected PLCs via Unifier 400 gateways to the WiMate platform with operator dashboards and shift analytics.",
    result: [
      "Live OEE on every line",
      "Operator efficiency up 12%",
      "Downtime attribution in seconds",
    ],
  },
  {
    industry: "Water",
    title: "Municipal water network — remote RO plant monitoring",
    problem:
      "RO plants in remote locations had frequent unnoticed breakdowns and water quality issues.",
    solution:
      "WiMate gateways with multi-parameter sensors pushed TDS, pH, flow and pressure to the cloud with threshold alerts.",
    result: [
      "92% fewer site visits",
      "Faster breakdown response",
      "Compliance-ready reporting",
    ],
  },
];

export const process = [
  {
    step: "01",
    title: "Survey",
    description:
      "We understand your operations, assets, sites and goals to scope the right IIoT solution.",
  },
  {
    step: "02",
    title: "Design",
    description:
      "A tailored hardware, network and platform design — cloud or on-premise — sized to your needs.",
  },
  {
    step: "03",
    title: "Install",
    description:
      "Our team supplies and installs gateways, sensors, HMIs and I/O cards — plug & play where possible.",
  },
  {
    step: "04",
    title: "Connect",
    description:
      "We bring machines, energy meters, BMS, sensors and assets onto a single secure platform.",
  },
  {
    step: "05",
    title: "Monitor",
    description:
      "Live dashboards, alerts, reports and remote control from anywhere — on any device.",
  },
  {
    step: "06",
    title: "Optimize",
    description:
      "Continuous improvement with analytics, predictive maintenance and benchmarking.",
  },
];

export const benefitsForYou = [
  {
    title: "Energy Auditors & Building Consultants",
    bullets: [
      "ECM effectiveness monitoring",
      "Benchmarking by building, industry, asset and area",
      "Better analytics, your brand on the platform",
      "Replace legacy EMS / BMS at low monthly cost",
    ],
  },
  {
    title: "Service Integrators & Solution Providers",
    bullets: [
      "Plug & play hardware, faster installation",
      "No design or coding needed — UI is readymade",
      "24×7 monitoring with threshold alerts",
      "Your brand on a white-labelled platform",
    ],
  },
  {
    title: "Manufacturing Units",
    bullets: [
      "Production count, idle and downtime",
      "Operator and shift efficiency",
      "Energy, water, compressed air, steam, fuel",
      "Predictive maintenance for pumps, motors, DG, UPS",
    ],
  },
  {
    title: "Software Providers — IoT & Energy",
    bullets: [
      "Plug & play hardware",
      "No coding required",
      "Affordable subscription pricing",
      "18-month hardware warranty",
    ],
  },
  {
    title: "Equipment Leasers & AMC Providers",
    bullets: [
      "Location tracking and asset management",
      "Ticketing and SLA tracking",
      "Prescheduled maintenance",
      "Asset lifecycle and operator analytics",
    ],
  },
];

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
          { label: "Unifier 300 – 3G/4G", to: "/products#unifier-300", badge: "Popular" },
          { label: "Unifier 400 – Sensing", to: "/products#unifier-400", badge: "New" },
          { label: "Unifier 500 – Multiport", to: "/products#unifier-500" },
          { label: "Wi-link", to: "/products#wi-link-100", badge: "New" },
        ],
      },
      {
        title: "HMI & IO",
        to: "/products#hmi",
        items: [
          { label: "IO Card", to: "/products#io-card", badge: "Popular" },
          { label: "HMI 4.3″", to: "/products#hmi-4-3" },
          { label: "HMI 7″", to: "/products#hmi-7" },
        ],
      },
      {
        title: "Sensors",
        to: "/products#sensors",
        items: [
          { label: "Temperature", to: "/products#wisense-100" },
          { label: "Temperature & Humidity", to: "/products#wisense-100" },
          {
            label: "Temperature, Humidity & CO₂",
            to: "/products#wisense-100",
            badge: "Popular",
          },
          {
            label: "Vibration 3 Axis",
            to: "/products#wisense-200",
            badge: "New",
          },
          { label: "Occupancy", to: "/products#wisense-300" },
        ],
      },
    ],
  },
  { kind: "link", label: "IoT Cloud Platform", to: "/products#cloud" },
  {
    kind: "menu",
    label: "Solutions",
    to: "/solutions",
    items: [
      {
        label: "Building Management",
        to: "/solutions#building-management",
        badge: "Popular",
      },
      { label: "Industry 4.0", to: "/solutions#industry-4-0" },
      { label: "RO Plant Monitoring", to: "/solutions#ro-water" },
      {
        label: "Sewage Treatment Plant",
        to: "/solutions#stp-monitoring",
        badge: "New",
      },
      { label: "Energy Management", to: "/solutions#energy-management" },
      {
        label: "Machine Health Monitoring",
        to: "/solutions#machine-health",
        badge: "New",
      },
      { label: "Connected Logistics", to: "/solutions#smart-logistics" },
      {
        label: "Asset Management & Ticketing",
        to: "/solutions#asset-management",
      },
    ],
  },
  {
    kind: "menu",
    label: "Company",
    to: "/why-wimate",
    items: [
      { label: "About Us", to: "/why-wimate" },
      { label: "Mail", to: "https://mail.google.com", badge: undefined },
      { label: "Payroll", to: "https://wimate.keka.com" },
    ],
  },
  { kind: "link", label: "Why Wi-MATE", to: "/why-wimate" },
  { kind: "link", label: "Contact Us", to: "/contact" },
];

// Backwards-compatible flat list (for any other consumer)
export const navLinks = navItems
  .filter((i): i is { kind: "link"; label: string; to: string } => i.kind === "link")
  .map(({ label, to }) => ({ label, to }));
