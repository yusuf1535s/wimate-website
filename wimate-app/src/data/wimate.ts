/* Real WiMate content sourced from https://www.wimate.in/ */
export const brand = {
  name: "WiMate",
  tagline: "WiMate - IoT Platform, Gateway, Sensor, IO & Turnkey IOT Solutions",
  subtitle:
    "Industrial IoT solutions that connect machines, energy, buildings and operations.",
  email: "sales@wimate.in",
  phone: "+91 9986 074 353",
  address:
    "2nd floor, 43/262, 5th main, Jayanagar 4th block, Bangalore-560011, Karnataka, India",
  hours: "Mon - Fri : 10:00 - 18:00 IST",
  social: {
    linkedin: "https://www.linkedin.com/company/wimate",
    facebook: "https://www.facebook.com/wimatetech/",
  },
};

export const stats = [
  { value: "496,864", label: "Data points monitored per day" },
  { value: "1GWh+", label: "Energy measured everyday" },
  { value: "5,500+", label: "Devices in field" },
  { value: "20+", label: "Satisfied Customers" },
];

export type Client = { name: string; image: string };
export const clients: Client[] = [
  { name: "Mitsubishi", image: "/wimate/clients/mitsubishi.png" },
  { name: "IBM", image: "/wimate/clients/ibm.png" },
  { name: "Bosch", image: "/wimate/clients/bosch.png" },
  { name: "Toyota", image: "/wimate/clients/toyota.png" },
  { name: "RWSSB", image: "/wimate/clients/rwssb.png" },
  { name: "Embassy Group", image: "/wimate/clients/embassy.png" },
  { name: "GGTronics", image: "/wimate/clients/ggtronics.jpg" },
  { name: "ITC Limited", image: "/wimate/clients/itc.png" },
  { name: "Infosys", image: "/wimate/clients/infosys.png" },
  { name: "Cipla", image: "/wimate/clients/cipla.png" },
];

/* ---------------- HOME PAGE ---------------- */
export const homeHero = {
  headline: "We make your business grow.",
  sub: "We help you to optimize operations and sustain profitable growth by adopting the IoT technology.",
  ctaLabel: "Solutions",
  ctaHref: "/solutions",
  image: "/wimate/solutions/hero-unified.png",
};

export const homeSolutionsTiles = [
  { name: "Smart Building Management", image: "/wimate/solutions/bms.png", href: "/solutions#building-management" },
  { name: "Production Process Monitoring", image: "/wimate/solutions/production.png", href: "/solutions#industry-4-0" },
  { name: "Energy Management Solution", image: "/wimate/solutions/energy.png", href: "/solutions#energy-management" },
  { name: "RO Water Plant Monitoring", image: "/wimate/solutions/ro-plant.png", href: "/solutions#ro-plant" },
  { name: "Machine Health Monitoring", image: "/wimate/solutions/machine-health.png", href: "/solutions#machine-health" },
  { name: "Sewage Treatment Plant Management", image: "/wimate/solutions/stp.png", href: "/solutions#stp-monitoring" },
  { name: "Smart Logistics", image: "/wimate/solutions/logistics.png", href: "/solutions#connected-logistics" },
  { name: "Asset Management & Ticketing", image: "/wimate/solutions/asset-ticketing.png", href: "/solutions#asset-management-ticketing" },
];

export const whyUs = [
  { title: "Reliable Hardware", desc: "Time tested, high quality, designed, developed and manufactured in India. 18 months of replacement warranty." },
  { title: "Innovative Software", desc: "Easy to use, highly scalable and cloud-based IoT platform. Dynamic dashboard, Reports, Remote control, Email & SMS alerts." },
  { title: "Turnkey Solutions", desc: "End to end covering hardware supply, cloud platform hosting, installation, commissioning and maintenance" },
  { title: "Competitive Cost", desc: "Cloud subscription charges is per month and Hardware price are best in the industry" },
];

export const benefitsForYou = [
  {
    title: "Energy Auditors & Building Consultants",
    items: [
      "ECM effectiveness monitoring",
      "Benchmarking based on building type, industry type, asset type, & area",
      "Better analytics tool",
      "Brand integration - Your logo in our platform",
      "Replace legacy EMS and BMS for the end customer with",
      "Low cost and monthly subscription charges",
      "User friendly",
      "Cloud-based so can be accessed from anywhere",
      "Secured with 256 bit SSL encryption",
      "Automatic email alerts and reports",
      "Remote control",
    ],
    learnMore: "/solutions#building-management",
  },
  {
    title: "Service Integrators & Solution Providers",
    items: [
      "Faster installation due to plug n play hardware",
      "No design or coding effort needed as UI is readymade",
      "24x7 monitoring of all parameters",
      "Alerts based on configurable thresholds",
      "Better analytics tool",
      "Brand integration - Your logo in our platform",
      "Low cost and monthly subscription charges",
      "User friendly",
      "Cloud-based so can be accessed from anywhere",
      "Secured with 256 bit SSL encryption",
      "Automatic email alerts and reports",
      "Remote control",
    ],
    learnMore: "/solutions#industry-4-0",
  },
  {
    title: "Manufacturing Units",
    items: [
      "Production process parameters monitoring",
      "Production count",
      "Idle & downtime",
      "Operator efficiency",
      "Shift wise efficiency",
      "Production environment (Temperature, RH, CO2, & IAQ)",
      "Maintenance effectiveness",
      "Energy, Water(Hot & Cold), Compressed air, Steam, and Fuel consumption monitoring",
      "Predictive maintenance",
      "Storage monitoring",
      "Condition monitoring of assets like",
      "Pumps",
      "Motors",
      "Diesel generators",
      "UPS",
      "Low cost and monthly subscription charges",
    ],
    learnMore: "/solutions#industry-4-0",
  },
  {
    title: "Software Providers - IoT & Energy",
    items: [
      "Plug n Play hardware",
      "No coding skills needed to use",
      "affordable",
      "18 months warranty",
      "Support over phone, email and onsite",
    ],
    learnMore: "/solutions#energy-management",
  },
  {
    title: "Equipment Leasers & AMC Providers",
    items: [
      "Location tracking",
      "Asset management",
      "Ticketing & Complaint management",
      "Service level agreement tracking",
      "Prescheduled maintenance tracking",
      "Digital forms",
      "Asset lifecycle analytics",
      "Operator performance tracking",
    ],
    learnMore: "/solutions#asset-management-ticketing",
  },
  {
    title: "None of the above",
    items: [
      "No worries. We are here to help.",
      "Contact us for custom-designed products and solutions for you.",
      "sales@wimate.in",
    ],
    learnMore: "/contact",
  },
];

export const turnkeySteps = [
  "We understand your needs",
  "Visit the site for a survey (optional)",
  "Build a suitable package for you",
  "Supply the necessary hardware",
  "Install and commission all the equipment",
  "Create your User ID for Cloud access",
  "And done! You are ready to go !!!",
];

export const homeIotPanel = {
  image: "/wimate/products/iot-solution.png",
  lowerOpsImage: "/wimate/products/lower-operations.png",
};

/* ---------------- PRODUCTS ---------------- */
export type ProductCategory = "Connectivity" | "HMI & IO" | "Sensors";

export type ProductSpecRow = { label: string; value: string };
export type ProductSpecGroup = { group: string; rows: ProductSpecRow[] };

export type Product = {
  slug: string;
  title: string;
  short: string;
  category: ProductCategory;
  description: string;
  features: string[];
  image: string;
  architecture?: string;
  applications?: string[];
  specs?: ProductSpecRow[];
  specGroups?: ProductSpecGroup[];
  variants?: string[];
  variantsNote?: string;
  notes?: string[];
  badge?: "Popular" | "New";
};

export const products: Product[] = [
  {
    slug: "unifier-300",
    title: "Unifier 300 - 3G/4G",
    short: "Edge Gateway",
    category: "Connectivity",
    description:
      "Unifier series enables monitoring and control of devices that support Modbus protocol like PLC/HMI, Energy meter, Chiller, AHU, VFD from a remote server via cellular or LAN. Its simple yet reliable design helps the customer to complete projects easily in a short duration of time.",
    features: [
      "Web-based portal for configuration",
      "Read/write device data from the web portal",
      "Auto polling of field devices",
      "Auto data recovery in case of network failure",
      "Bi-directional data from the remote server",
      "SSL/TLS security for communication",
      "Disaster recovery of historical data",
      "Built-in Ethernet and 3G/4G modem",
      "JSON message format",
      "Remote configuration",
      "Remote software upgradation",
      "No coding skills required to use",
    ],
    image: "/wimate/products/unifier-1.png",
    architecture: "/wimate/products/unifier-300-arch.png",
    specs: [
      { label: "Processor", value: "ARM 32 bit" },
      { label: "Memory", value: "16GB" },
      { label: "Ethernet", value: "100 Mbps (10/100 Base-T)" },
      { label: "Serial interface", value: "RS485, RS232 (optional)" },
      { label: "Cellular connectivity", value: "HSDPA (3G), LTE (4G)" },
      { label: "Server-side protocol", value: "MQTT, FTP, HTTP" },
      { label: "Device side protocol", value: "Modbus RTU, Modbus TCP/IP, Telnet" },
      { label: "Power supply", value: "110 - 230V AC 50-60 Hz" },
      { label: "Status LEDs", value: "Ethernet status, Power, Cellular link/activity" },
      { label: "Operating Temperature", value: "0 C to 60 C" },
    ],
    badge: "Popular",
  },
  {
    slug: "unifier-400",
    title: "Unifier 400 - Sensing",
    short: "Sensing Gateway",
    category: "Connectivity",
    description:
      "Unifier 400 enables monitoring of vehicles like Cold storage van, Trucks, and Goods wagon from a centralized server via a cellular network. It helps the customer to keep track of the fleet movement, vehicle health and it's container status.",
    features: [
      "Location tracking",
      "Container temperature monitoring",
      "Driving behavior detection",
      "FFT of 3 Axis Vibration",
      "Auto data recovery in case of network failure",
      "SSL/TLS security for communication",
      "Disaster recovery of historical data",
      "Built-in LTE modem",
      "Remote configuration",
      "Remote software upgradation",
      "JSON message format",
      "No coding skills required to use",
    ],
    image: "/wimate/products/unifier-1.png",
    architecture: "/wimate/products/unifier-400-arch.png",
    specs: [
      { label: "Temperature sensor", value: "-30 C to 85 C" },
      { label: "3 Axis Vibration sensor", value: "-4 to 4 g, Hanning FFT" },
      { label: "Door status sensor", value: "Potential free contact" },
      { label: "GPS Tracking", value: "Longitude, Lattitude, Altitude, Speed" },
      { label: "Processor", value: "ARM 32 bit" },
      { label: "Memory", value: "16GB" },
      { label: "Cellular connectivity", value: "HSDPA (3G), LTE (4G)" },
      { label: "Server-side protocol", value: "MQTT, FTP, HTTP" },
    ],
    applications: [
      "Vehicle location tracking",
      "Vehicle health monitoring",
      "Mobile Cold storage monitoring",
      "Railway wagon monitoring",
    ],
    badge: "New",
  },
  {
    slug: "unifier-500",
    title: "Unifier 500 - Multiport",
    short: "Multiport Gateway",
    category: "Connectivity",
    description:
      "Unifier series enables monitoring and control of devices that support Modbus protocol like PLC/HMI, Energy meter, Chiller, AHU, VFD from a remote server via cellular or LAN. Its simple yet reliable design helps the customer to complete projects easily in a short duration of time.",
    features: [
      "Web-based portal for configuration",
      "Read/write device data from the web portal",
      "Auto polling of field devices",
      "Auto data recovery in case of network failure",
      "Bi-directional data from the remote server",
      "SSL/TLS security for communication",
      "Disaster recovery of historical data",
      "Built-in Ethernet and 3G/4G modem",
      "JSON message format",
      "Remote configuration",
      "Remote software upgradation",
      "No coding skills required to use",
    ],
    image: "/wimate/products/unifier-1.png",
    architecture: "/wimate/products/unifier-500-arch.png",
    specs: [
      { label: "Processor", value: "ARM 32 bit" },
      { label: "Memory", value: "16GB" },
      { label: "Ethernet", value: "100 Mbps (10/100 Base-T)" },
      { label: "Serial interface", value: "RS485 (2), RS232 (2)" },
      { label: "Cellular connectivity", value: "HSDPA (3G), LTE (4G)" },
      { label: "Server-side protocol", value: "MQTT, FTP, HTTP" },
      { label: "Device side protocol", value: "Modbus RTU, Modbus TCP/IP, Telnet" },
      { label: "Power supply", value: "110 - 230V AC 50-60 Hz" },
      { label: "Status LEDs", value: "Ethernet status, Power, Cellular link/activity" },
      { label: "Operating Temperature", value: "0 C to 60 C" },
    ],
  },
  {
    slug: "wi-link-100",
    title: "Wi-link 100",
    short: "RS485 Wire replacement",
    category: "Connectivity",
    description:
      "Wi-link 100 provides out-of-the-box RS485 cable replacement, enabling quick wireless connectivity of Modbus devices like HMI/PLC, Energy meter, AHU, Chiller. Simply connect a Wi-link100 to any gateway/converter and the other Wi-link 100 to the set of Modbus devices to establish communication.",
    features: [
      "Easy out-of-the-box operation",
      "Auto network formation",
      "Self-healing network",
      "Mesh topology",
      "AES 128 bit encryption",
      "100 to 250 V AC powered",
      "2.5kV Isolated RS485 port",
    ],
    image: "/wimate/products/wi-link-100.png",
    architecture: "/wimate/products/wi-link-100-arch.png",
    badge: "New",
  },

  {
    slug: "io-card",
    title: "IO Card",
    short: "Industrial Automation & BMS",
    category: "HMI & IO",
    description:
      "Wi-IO 100 series is an advanced and versatile four-in-one IO card designed for applications in Building Management System and Industrial Automation projects. The unit can monitor digital input and analog input (0-10V/4-20mA). It is also capable of controlling digital output (dry contact) and analog output (0-10V/4-20mA). It has a standard serial communication (Modbus protocol over RS485) for interfacing with PLC/HMI, Gateway, and SCADA software.",
    features: [
      "Maintenance-free",
      "Multiple IOs in a single product",
      "Digital Input - 04 no's",
      "Digital Output (PFC) - 04 no's",
      "Analog Input (0-10V/4-20mA) - 04 no's",
      "Analog Output (0-10V/4-20mA). - 02 no's",
      "Programmable scheduling for DOs",
      "Totalizer for Digital input and output",
      "Modbus RTU on RS485",
      "Remote configuration of settings",
      "Remote control",
      "Configurable scaling and correction",
      "230V AC SMPS built-in",
      "Wireless communication optional",
    ],
    image: "/wimate/products/io-card.png",
    specGroups: [
      {
        group: "Electrical",
        rows: [
          { label: "Voltage", value: "110 - 230V AC 50-60 Hz" },
          { label: "Power consumption", value: "< 5 W" },
          { label: "Isolation", value: "1000 V" },
        ],
      },
      {
        group: "Digital Input",
        rows: [
          { label: "Type", value: "Voltage input" },
          { label: "Logical zero", value: "0 V DC" },
          { label: "Logical high", value: "5-24 V DC" },
        ],
      },
      {
        group: "Digital Output (Relay)",
        rows: [
          { label: "Type", value: "SPDT (NO,NC, C)" },
          { label: "Maximum voltage", value: "230V AC" },
          { label: "Function", value: "Schedule / Remote control" },
        ],
      },
      {
        group: "Analog Input",
        rows: [
          { label: "Sensing Method", value: "4-20mA / 0-10V" },
          { label: "Accuracy", value: "1%" },
          { label: "Protection", value: "Overvoltage" },
        ],
      },
      {
        group: "Analog Output",
        rows: [
          { label: "Output type", value: "4-20mA / 0-10V" },
          { label: "Accuracy", value: "1%" },
          { label: "Protection", value: "Short circuit" },
        ],
      },
      {
        group: "Communication interface",
        rows: [
          { label: "Type", value: "RS485 (2.5kV isolation)" },
          { label: "Protocol", value: "Modbus RTU" },
          { label: "Speed", value: "upto 115200 bps" },
        ],
      },
      {
        group: "Wireless Communication (Optional)",
        rows: [
          { label: "Type", value: "865 MHz, Mesh" },
        ],
      },
    ],
    notes: [
      "Note: For indoor use only. Please contact sales team for outdoor application variant.",
    ],
    badge: "Popular",
  },

  {
    slug: "hmi-4-3",
    title: "HMI 4.3",
    short: "Compact Touch HMI",
    category: "HMI & IO",
    description:
      "HMI series enables monitoring and control of devices that support Modbus protocol like PLC, Energy meter, Chiller, AHU, VFD, Sensor over RS485 or 0-10V/4-20mA. Its simple yet reliable design helps the customer to complete projects easily in a short duration of time.",
    features: [
      "No coding skills required to use",
      "Read/write device from the colour touchscreen",
      "Auto polling of field devices",
      "Built-in IOs",
      "2 Digital input (PFC)",
      "2 Digital output (Relay SPDT)",
      "2 Analog input (4-20mA / 0-10V)",
      "1 multi Analog output (4-20mA / 0-10V)",
      "1 Analog output (0-10V)",
      "Built-in SMPS",
      "Stainless steel enclosure",
      "Isolated RS485 - 2 ports (Modbus RTU Master and slave functionality)",
      "One-touch factory reset",
      "Multi-level access control using screen password (restricted, read-only & write)",
      "Real time clock",
      "Scheduling (7 days, 1 Holiday, 10 events)",
      "Firmware update over the USB port",
      "24V DC power supply output",
      "Optional Wireless connectivity",
    ],
    image: "/wimate/products/hmi-4-3.png",
    specs: [
      { label: "Processor", value: "ARM 32 bit" },
      { label: "Display", value: "4.3\" Touchscreen" },
      { label: "Resolution", value: "272 X 480" },
      { label: "Serial interface", value: "RS485" },
      { label: "Device side protocol", value: "Modbus" },
      { label: "Power supply", value: "110 - 230V AC 50-60 Hz" },
    ],
  },

  {
    slug: "hmi-7",
    title: "HMI 7",
    short: "Operator Panel HMI",
    category: "HMI & IO",
    description:
      "HMI series enables monitoring and control of devices that support Modbus protocol like PLC/HMI, Energy meter, Chiller, AHU, VFD, Sensor over RS485 or 0-10V/4-20mA. Its simple yet reliable design helps the customer to complete projects easily in a short duration of time. It also comes with isolated SMPS and gives 24V DC output.",
    features: [
      "No coding skills required to use",
      "Read/write device from the colour touchscreen",
      "Auto polling of field devices",
      "Built-in IOs",
      "2 Digital output (Relay SPDT)",
      "Built-in SMPS",
      "Stainless steel enclosure",
      "Optional Wireless connectivity",
      "Isolated RS485 - 2 ports (Modbus RTU Master and slave functionality)",
      "One-touch factory reset",
      "Multi-level access control using screen password (restricted, read-only & write)",
      "Firmware update over the USB port",
      "24V DC power supply output",
      "Inbuilt Memory - 16 GB",
    ],
    image: "/wimate/products/hmi-7.png",
    specs: [
      { label: "Processor", value: "ARM 32 bit" },
      { label: "Display", value: "7\" Touchscreen" },
      { label: "Resolution", value: "800 X 600" },
      { label: "Serial interface", value: "RS485 (2)" },
      { label: "Device side protocol", value: "Modbus RTU" },
      { label: "Power supply", value: "110 - 230V AC 50-60 Hz" },
    ],
  },

  {
    slug: "wisense-100",
    title: "WiSense 100",
    short: "BMS - Temperature, RH, CO2",
    category: "Sensors",
    description:
      "WiSense 100 series is an advanced and versatile three-in-one sensor designed for installation in the air-conditioned zone. The unit measures CO2 concentration (PPM), temperature (deg. C), and humidity (RH) in the ambient air accurately without the need for additional compensation. Control is given as a prebuilt function for Alert, Scheduling, and Remote control.",
    features: [
      "Maintenance-free",
      "Multiple sensors in one housing",
      "Digital output alert triggering based on sensors' value ( >, < or =)",
      "Programmable scheduling for DO",
      "Modbus RTU Protocol",
      "Isolated RS485 communication interface",
      "Remote configuration of settings",
      "Remote control",
      "Configurable scaling and correction",
      "230V AC SMPS built-in",
      "One-touch factory reset",
      "Wireless communication optional",
    ],
    image: "/wimate/products/wisense-100.png",
    specGroups: [
      {
        group: "Electrical",
        rows: [
          { label: "Voltage", value: "90 - 260V AC 50-60 Hz" },
          { label: "Power consumption", value: "< 1 W" },
          { label: "Isolation", value: "1000 V" },
        ],
      },
      {
        group: "CO2",
        rows: [
          { label: "Sensing Method", value: "NDIR" },
          { label: "Measurement Range", value: "0-2000 ppm" },
          { label: "Accuracy", value: "100 ppm + 5%" },
        ],
      },
      {
        group: "Temperature",
        rows: [
          { label: "Sensing Method", value: "Semiconductor" },
          { label: "Measurement Range", value: "0-50 Deg C" },
          { label: "Accuracy", value: "0.3 Deg C" },
        ],
      },
      {
        group: "Relative Humidity",
        rows: [
          { label: "Sensing Method", value: "Semiconductor" },
          { label: "Measurement Range", value: "5 - 95%" },
          { label: "Accuracy", value: "2%" },
        ],
      },
      {
        group: "Relay",
        rows: [
          { label: "Type", value: "SPDT (NO,NC, C)" },
          { label: "Maximum Rating", value: "2A @ 230V AC / 24V DC" },
          { label: "Function", value: "Schedule / Alert" },
        ],
      },
      {
        group: "Communication interface",
        rows: [
          { label: "Type", value: "RS485 (2.5kV isolation)" },
          { label: "Protocol", value: "Modbus RTU" },
          { label: "Speed", value: "up to 115200 bps" },
        ],
      },
      {
        group: "Analog Input (Optional)",
        rows: [
          { label: "Sensing Method", value: "4-20mA / 0-10V" },
          { label: "Measurement Range", value: "4-20mA / 0-10V" },
          { label: "Protection", value: "Overvoltage" },
        ],
      },
      {
        group: "Wireless Communication (Optional)",
        rows: [
          { label: "Type", value: "Mesh" },
          { label: "Frequency", value: "865 MHz" },
          { label: "Encryption", value: "128 bit" },
        ],
      },
    ],
    variants: [
      "WiSense 100 - Temperature Sensor",
      "WiSense 130 - Temperature & Humidity",
      "WiSense 140 - Temperature, Humidity & CO2",
    ],
    variantsNote:
      "Add the following to the above part numbers for additional features: R - Wireless 865 MHz; DI - Digital Input (Potential Free Contact); AI - Analog Input; DO - Digital Output (Potential Free Contact); PT - PT100 sensing element.",
    notes: [
      "Note: For indoor use only. Please contact sales team for outdoor application variant.",
    ],
    badge: "Popular",
  },

  {
    slug: "wisense-200",
    title: "WiSense 200",
    short: "Vibration 3-Axis Sensor",
    category: "Sensors",
    description:
      "WiSense 200 series is an advanced and versatile two-in-one sensor designed for machinery health monitoring. The unit measures vibration(g) and, temperature(deg. C) accurately without the need for additional compensation. Control is given as a prebuilt function for Alert, Scheduling, and Remote control.",
    features: [
      "Maintenance free",
      "Multiple sensors in one housing",
      "Built-in FFT",
      "Digital output alert triggering based on sensors' value ( >, < or =)",
      "Real time clock",
      "Programmable scheduling for DO",
      "Modbus RTU on RS485",
      "Remote configuration of settings",
      "Remote control",
      "Configurable scaling and correction",
      "230V AC SMPS built-in",
    ],
    image: "/wimate/products/wisense-200.png",
    specGroups: [
      {
        group: "Vibration Sensor",
        rows: [
          { label: "Sensing Method", value: "MEMS" },
          { label: "Measurement Range", value: "+/- 2g/4g/8g" },
          { label: "Frequency", value: "10 - 1240 HZ" },
          { label: "Accelerometer Resolution", value: "16 bit" },
          { label: "Ingress Protection", value: "IP 67" },
          { label: "FFT Frequency resolution", value: "512 bins" },
        ],
      },
      {
        group: "Electrical",
        rows: [
          { label: "Power input", value: "90 - 260V AC" },
          { label: "Power consumption", value: "< 1 W" },
          { label: "Isolation", value: "1000 V" },
        ],
      },
      {
        group: "Digital Input (Optional)",
        rows: [
          { label: "Type", value: "Potential Free Contact" },
        ],
      },
      {
        group: "PT100",
        rows: [
          { label: "Measurement Range", value: "-100 to 300 Deg C" },
          { label: "Accuracy", value: "0.5 %" },
        ],
      },
      {
        group: "Temperature",
        rows: [
          { label: "Sensing Method", value: "Semiconductor" },
          { label: "Measurement Range", value: "0-50 Deg C" },
          { label: "Accuracy", value: "0.3 Deg C" },
        ],
      },
      {
        group: "Relay",
        rows: [
          { label: "Type", value: "SPDT (NO,NC, C)" },
          { label: "Maximum Rating", value: "2A @ 230V AC / 24V DC" },
          { label: "Function", value: "Schedule / Alert / Remote control" },
        ],
      },
      {
        group: "Communication interface",
        rows: [
          { label: "Type", value: "RS485 (2.5kV isolation)" },
          { label: "Protocol", value: "Modbus RTU" },
          { label: "Speed", value: "upto 115200 bps" },
        ],
      },
      {
        group: "Analog Input (Optional)",
        rows: [
          { label: "Sensing Method", value: "4-20mA / 0-10V" },
          { label: "Protection", value: "Over voltage" },
        ],
      },
      {
        group: "Wireless (Optional)",
        rows: [
          { label: "Type", value: "Mesh (865 MHz)" },
        ],
      },
    ],
    variants: [
      "WiSense 240 - Temperature(surface mount) & Vibration sensor (2G/4G)",
      "WiSense 280 - Temperature(surface mount) & Vibration sensor (2G/8G)",
    ],
    variantsNote:
      "Add the following to the above part numbers for additional features: R - Wireless 865 MHz; DI - Digital Input (Potential Free Contact); AI - Analog Input; DO - Digital Output (Potential Free Contact); PT - PT100 sensing element.",
    badge: "New",
  },

  {
    slug: "wisense-300",
    title: "WiSense 300",
    short: "Occupancy Sensor",
    category: "Sensors",
    description:
      "WiSense 300 series is an advanced and versatile smart sensor designed for installation in the air-conditioned zone. The unit measures occupancy in the workplace and critical room accurately without the need for additional compensation.",
    features: [
      "Maintenance-free",
      "Zero wiring",
      "Long battery life (18 months)",
      "Plug n Play",
      "Built-in Wireless",
      "Smart algorithm to filter false triggers",
    ],
    applications: [
      "Office space monitoring",
      "Meeting room monitoring",
      "Critical room monitoring",
      "Retail space monitoring",
      "Intruder detection",
    ],
    image: "/wimate/products/wisense-100.png",
    specGroups: [
      {
        group: "Occupancy Sensor",
        rows: [
          { label: "Sensing Method", value: "PIR" },
          { label: "Measurement Range", value: "3 Mtrs" },
          { label: "Accuracy", value: "98%" },
        ],
      },
      {
        group: "Wireless module",
        rows: [
          { label: "Type", value: "Mesh" },
          { label: "Frequency", value: "865 MHz" },
        ],
      },
      {
        group: "Battery",
        rows: [
          { label: "Power input", value: "3.6 Volts" },
          { label: "Power consumption", value: "<10 mW" },
          { label: "Type", value: "Non-rechargeable" },
        ],
      },
      {
        group: "Processor Core",
        rows: [
          { label: "Core", value: "ARM 32 bit" },
          { label: "Processing speed", value: "2 MIPS" },
        ],
      },
    ],
  },
];

/* ---------------- SOLUTIONS ---------------- */
export type SolutionWhy = { title: string; desc: string };

export type Solution = {
  slug: string;
  title: string;
  short: string;
  intro: string;
  capabilities: (string | { group: string; items: string[] })[];
  capabilityNote?: string;
  mainImage: string;
  features: string[];
  featuresCta?: { label: string; href: string };
  benefits: string[];
  why: SolutionWhy[];
  otherSolutions: { title: string; image: string; href: string }[];
  deployed?: string[];
  industries?: { name: string; image: string }[];
};

const STANDARD_FEATURES = [
  "Dynamic Dashboard",
  "Customizable Excel and PDF reports",
  "Consumption-based billing",
  "Remote control: ON/OFF, Modulation, Mode, & Scheduling",
  "Automatic alerts generation and escalation: email & SMS",
  "Artificial Intelligence (AI) driven insights & actions for optimizations",
];

const STANDARD_WHY: SolutionWhy[] = [
  { title: "Reliable Hardware", desc: "Time tested, high quality, designed, developed & manufactured in India. 18 months replacement warranty." },
  { title: "Innovative Software", desc: "Easy to use, reliable, highly scalable, and cloud-based IoT software platform." },
  { title: "Turnkey Solution", desc: "Everything including hardware supply, cloud hosting, installation, commissioning and maintenance" },
  { title: "Competitive Cost", desc: "Cloud hosting starts as low as INR 299 per month & Hardware prices are best in the industry" },
];

const ALL_OTHER = [
  { title: "Energy Management", image: "/wimate/solutions/energy-thumb.png", href: "/solutions#energy-management" },
  { title: "Production Monitoring", image: "/wimate/solutions/production.png", href: "/solutions#industry-4-0" },
  { title: "RO Plant Monitoring", image: "/wimate/solutions/ro-plant.png", href: "/solutions#ro-plant" },
  { title: "Machine Health", image: "/wimate/solutions/machine-health.png", href: "/solutions#machine-health" },
  { title: "Building Management", image: "/wimate/solutions/bms.png", href: "/solutions#building-management" },
  { title: "Sewage Treatment", image: "/wimate/solutions/stp.png", href: "/solutions#stp-monitoring" },
  { title: "Smart Logistics", image: "/wimate/solutions/logistics.png", href: "/solutions#connected-logistics" },
  { title: "Asset Mgmt. & Ticketing", image: "/wimate/solutions/asset-ticketing.png", href: "/solutions#asset-management-ticketing" },
];

export const solutions: Solution[] = [
  {
    slug: "building-management",
    title: "Building Management Solution",
    short: "Building Management",
    intro:
      "Our user-friendly and affordable IoT solution helps you to get maximum energy savings. This is made possible by achieving the highest operating efficiency. Occupant's comfort is not compromised in the process. It provides centralized monitoring and control capabilities at the equipment level. Our long experience in Building Management ensures smooth project execution with minimum support from the customer. We have covered more than 20,00,000 Square Feet.",
    capabilities: [
      "Energy, Water & Fuel consumption monitoring and billing",
      {
        group: "Ventilation and air conditioning usage optimization",
        items: ["Chillers", "AHUs (Fixed speed, VFD and EC FAN)", "Fresh air treatment", "VAVs"],
      },
      "Indoor Air Quality (IAQ) management",
      "Natual energy harvestings like Solar and Free Cooling",
      "Lighting & HVAC control based on Temperature, RH, CO2 & Occupancy, etc.",
      "Condition monitoring of assets like UPS, Diesel generators, elevators, fire alarms, etc.",
      "Datacenter room temperature & energy efficiency monitoring",
      "Desk utilization monitoring",
      "Meeting room booking and utilization monitoring",
      "Street light management",
    ],
    capabilityNote:
      "Deployed in IT, Retail, Shopping malls, Hospitals, Industrial buildings, Educational institutes, Hotels, Apartments, Govt. buildings & campuses",
    mainImage: "/wimate/solutions/bms.png",
    features: [...STANDARD_FEATURES],
    featuresCta: { label: "Read more on IoT platform", href: "/cloudtesla" },
    benefits: [
      "Energy saving",
      "24x7 monitoring of mission-critical assets to ensure high uptime",
      "Improvement in health, efficiency, utilization & life of the equipment",
      "Reduction in manpower requirement",
      "Better visibility in day to day operations",
      "Easy policy adherence check and enforcement",
    ],
    why: STANDARD_WHY,
    otherSolutions: [
      ALL_OTHER[0], ALL_OTHER[1], ALL_OTHER[2], ALL_OTHER[3],
    ],
  },
  {
    slug: "industry-4-0",
    title: "Industry 4.0",
    short: "Production process monitoring",
    intro:
      "Our user-friendly and affordable IoT solution helps you to get maximum savings in operating costs. This is made possible by improving operator productivity and equipment utilization. Product quality is not compromised in the process. It provides centralized monitoring and analytics capabilities at the equipment level. Our long experience in the manufacturing segment ensures smooth project execution with minimum support from the customer.",
    capabilities: [
      {
        group: "Production process parameters monitoring",
        items: [
          "Production count",
          "Idle & downtime",
          "Operator efficiency",
          "Shift wise efficiency",
          "Production environment (Temperature, RH, CO2, PM2.5 & 10)",
          "Maintenance effectiveness",
        ],
      },
      "Energy, Water (Hot & Cold), Compressed air, Steam, and Fuel consumption monitoring",
      "Predictive maintenance",
      "Storage monitoring",
      {
        group: "Condition monitoring of assets like",
        items: ["Pumps", "Motors", "Diesel generators", "UPS"],
      },
    ],
    mainImage: "/wimate/solutions/industry-4.png",
    features: [...STANDARD_FEATURES],
    featuresCta: { label: "Read more on IoT platform", href: "/cloudtesla" },
    benefits: [
      "Energy saving",
      "24x7 monitoring of mission-critical assets to ensure high uptime",
      "Improvement in health, efficiency, utilization & life of the equipment",
      "Reduction in manpower requirement",
      "Better visibility in day to day operations",
      "Easy policy adherence check and enforcement",
    ],
    why: STANDARD_WHY,
    industries: [
      { name: "Metalworks", image: "/wimate/solutions/industry-metalworks.png" },
      { name: "Plastic injection molding", image: "/wimate/solutions/industry-plastic.png" },
      { name: "Textile", image: "/wimate/solutions/industry-textile.png" },
      { name: "Automotive", image: "/wimate/solutions/industry-automotive.png" },
    ],
    otherSolutions: [
      ALL_OTHER[3], ALL_OTHER[0], ALL_OTHER[5], ALL_OTHER[4],
    ],
  },
  {
    slug: "ro-plant",
    title: "RO Plant Monitoring",
    short: "Water quality & uptime",
    intro:
      "Our user-friendly and affordable IoT solution helps you to get maximum uptime and the highest quality water. This is made possible by monitoring the various process parameters using sensors and IO cards. It provides centralized monitoring and control capabilities at the plant level. Our long experience in the Internet of things (IoT) ensures smooth project execution with minimum support from the customer.",
    capabilities: [
      "Energy and Water consumption monitoring",
      "Money collected via cash & Smart card",
      {
        group: "Water quality monitoring",
        items: ["Conductivity", "TDS", "PH"],
      },
      {
        group: "Plant status",
        items: [
          "Pump On / Off cycles and Operation duration",
          "Raw and treated water tank level",
          "Low and high pressure level",
          "Plant uptime",
          "Filter block detection",
          "Backwash cycle time",
          "Flow rate",
          "Plant efficiency (Capacity vs output)",
        ],
      },
      "Electrical parameters: Voltage, Current & Power",
    ],
    mainImage: "/wimate/solutions/ro-plant.png",
    features: [...STANDARD_FEATURES],
    featuresCta: { label: "Read more on IoT platform", href: "/cloudtesla" },
    benefits: [
      "Water and Electricity saving",
      "24x7 monitoring of mission-critical assets to ensure high uptime",
      "Improvement in health, efficiency, utilization & life of the equipment",
      "Reduction in manpower requirement",
      "Better visibility in day to day operations",
      "Easy policy adherence check and enforcement",
    ],
    why: STANDARD_WHY,
    otherSolutions: [
      ALL_OTHER[0], ALL_OTHER[1], ALL_OTHER[5], ALL_OTHER[4],
    ],
  },
  {
    slug: "stp-monitoring",
    title: "Sewage Treatment Plant Management",
    short: "STP performance & compliance",
    intro:
      "We optimize all the stages of treatment procedures involved in treating sewage.  This is done by analyzing all the types of contaminants present in sewage from a particular source. We use several sophisticated technologies like Membrane bioreactor, activated sludge process, extended aeration, and logging, etc in our Sewage treatment systems. By employing the best high-quality materials and advanced technologies available, we ensure that our plants are efficient, reliable, and cost-effective.",
    capabilities: [
      "Treated water monitoring",
      {
        group: "Water quality monitoring",
        items: ["Conductivity", "TDS", "pH", "ORP", "Chlorine"],
      },
      {
        group: "Plant status",
        items: [
          "Pump On / Off cycles and Operation duration",
          "Sewage and treated water tank level",
          "Plant uptime",
          "Filter block detection",
          "Backwash cycle time",
          "Flow rate",
          "Plant efficiency (Capacity vs output)",
        ],
      },
      "Electrical parameters: Voltage, Current & Power",
    ],
    mainImage: "/wimate/solutions/stp.png",
    features: [...STANDARD_FEATURES],
    featuresCta: { label: "Read more on IoT platform", href: "/cloudtesla" },
    benefits: [
      "Water and Electricity saving",
      "24x7 monitoring of mission-critical assets to ensure high uptime",
      "Improvement in health, efficiency, utilization & life of the equipment",
      "Reduction in manpower requirement",
      "Better visibility in day to day operations",
      "Easy policy adherence check and enforcement",
    ],
    why: STANDARD_WHY,
    otherSolutions: [
      ALL_OTHER[0], ALL_OTHER[1], ALL_OTHER[2], ALL_OTHER[3],
    ],
  },
  {
    slug: "energy-management",
    title: "Energy Management",
    short: "Measure, monitor, optimize",
    intro:
      "Our user-friendly and affordable IoT solution helps you to get maximum energy savings. This is made possible by achieving the highest operating efficiency. It provides centralized monitoring and control capabilities at the individual meter level. Our long experience in Building Management ensures smooth project execution with minimum support from the customer. We have covered more than 20,00,000 Square Feet of buildings and measure 1 GWh per day.",
    capabilities: [
      "Energy, Water & Fuel consumption monitoring",
      "Voltage, Current, Power, Energy, Power factor, Frequency, Wh, VAh and any other parameter present in energy meter",
      {
        group: "Energy generation and consumption from multiple sources",
        items: ["Electricity Board", "Diesel generator", "Solar", "Wind turbine"],
      },
      {
        group: "Load-wise segregation",
        items: ["Lighting", "HVAC", "IT"],
      },
      "GST compliant billing and invoices",
      "Condition monitoring of assets like UPS and Diesel generators",
      "Transformer health monitoring",
      "Electrical room temperature monitoring",
      "Street light management",
    ],
    mainImage: "/wimate/solutions/energy.png",
    features: [...STANDARD_FEATURES],
    featuresCta: { label: "Read more on IoT platform", href: "/cloudtesla" },
    benefits: [
      "Energy saving",
      "24x7 monitoring of mission-critical assets to ensure high uptime",
      "Improvement in health, efficiency, utilization & life of the equipment",
      "Reduction in manpower requirement",
      "Better visibility in day to day operations",
      "Easy policy adherence check and enforcement",
    ],
    why: STANDARD_WHY,
    otherSolutions: [
      ALL_OTHER[4], ALL_OTHER[1], ALL_OTHER[2], ALL_OTHER[3],
    ],
  },
  {
    slug: "machine-health",
    title: "Machine Health Monitoring",
    short: "Predictive maintenance",
    intro:
      "Our user-friendly and affordable IoT solution helps you to get the maximum machine utilization. This is made possible by predicting fatal failure well in advance. Productivity is not compromised in the process. It provides centralized monitoring and control capabilities at the equipment level. Our long experience in the manufacturing and kiosk domain ensures smooth project execution with minimum support from the customer.",
    capabilities: [
      {
        group: "24x7 monitoring of",
        items: [
          "Critical parameters like temperature and vibration",
          "Electrical parameter monitoring like the voltage, current, power, and energy consumption",
        ],
      },
      "Prediction of failure in using Artificial Intelligence (AI)",
      "Alerts based on process parameters",
      "Maintenance effectiveness analysis",
      "Benchmarking against other machines",
      "Production vs power consumption analysis",
      "Downtime analysis",
      "Machine performance benchmarking",
    ],
    capabilityNote:
      "Useful for Manufacturing plant, Owners of kiosk like water ATM & maintenance service providers",
    mainImage: "/wimate/solutions/machine-health.png",
    features: [
      "Dynamic Dashboard",
      "Customizable Excel and PDF reports",
      "Remote control: ON/OFF, Modulation, Mode, & Scheduling",
      "Automatic alerts generation and escalation: email & SMS",
      "Artificial Intelligence (AI) driven insights & actions for optimizations",
    ],
    featuresCta: { label: "Read more on IoT platform", href: "/cloudtesla" },
    benefits: [
      "Improvement in health, efficiency, utilization & life of the equipment",
      "Energy and Fuel saving",
      "24x7 monitoring of mission-critical assets to ensure high uptime",
      "Reduction in manpower requirement",
      "Better visibility in day to day operations",
      "Easy policy adherence check and enforcement",
    ],
    why: STANDARD_WHY,
    otherSolutions: [
      ALL_OTHER[0], ALL_OTHER[1], ALL_OTHER[2], ALL_OTHER[4],
    ],
  },
  {
    slug: "connected-logistics",
    title: "Connected Logistics",
    short: "Vehicle Tracking",
    intro:
      "For fleet management, companies want to ensure that they do not suffer costly breakdowns that result in delays in product delivery and cause financial losses. Our user-friendly and affordable solution that helps to overcome challenges faced in day to day operations by providing real-time information on the location of the vehicle, condition of the cargo, and driver behavior.",
    capabilities: [
      "GPS/GLONASS tracking",
      "Vibration monitoring",
      {
        group: "Cabin parameters monitoring",
        items: ["Temperature", "Cargo door status"],
      },
      "Driver behavior monitoring like speeding",
      "Geofencing with configurable tolerance",
      "Collision (Accident) detection",
      {
        group: "Alert based on",
        items: ["Cargo cabin conditions", "Vehicle speed and location", "Vibration level"],
      },
      "Predictive maintenance alerts based on AI algorithms",
    ],
    capabilityNote:
      "Deployed in Cold storage vehicles, Cargo trucks, Earthmoving machinery, and Goods wagons",
    mainImage: "/wimate/solutions/logistics.png",
    features: [
      "Dynamic Dashboard with realtime refresh rate",
      "Customizable Excel and PDF reports",
      "Automatic alerts generation and escalation: email & SMS",
      "Artificial Intelligence (AI) driven insights & actions for optimizations",
    ],
    featuresCta: { label: "Read more on IoT platform", href: "/cloudtesla" },
    benefits: [
      "Fuel and time saving",
      "24x7 monitoring of vehicle to ensure driver & cargo safety",
      "Improvement in health, efficiency, utilization & life of the equipment",
      "Better visibility in day to day operations",
      "Easy policy adherence check and enforcement",
    ],
    why: STANDARD_WHY,
    otherSolutions: [
      ALL_OTHER[0], ALL_OTHER[1], ALL_OTHER[2], ALL_OTHER[3],
    ],
  },
  {
    slug: "asset-management-ticketing",
    title: "Asset Management & Ticketing",
    short: "Lifecycle, ticketing & AMC",
    intro:
      "Companies who have onsite operations and equipment have only two choices either have a large customer support team or lose customers by failing to attend in time. Our user-friendly and affordable solution helps to overcome challenges faced in day to day operations by providing real-time information on the onsite problems, assigning the right onsite support personnel, and escalate if the resolution is not happening in time. It also comes with asset management to schedule maintenance, manages inventory, and asset lifetime performance history.",
    capabilities: [
      "Easy to raise a ticket (just 3 clicks)",
      "Option to upload images and comments of problems",
      "Auto assignment of support personnel based on the type of the problem",
      "Automatic reminder and escalation mechanism via SMS and email",
      "Live status of the ticket can be seen by the user from smartphone",
      "Schedule can be uploaded for periodic maintenance",
      {
        group: "Efficiency and quality report",
        items: ["Personnel", "Asset", "Geography"],
      },
      "Abusive usage report",
      "Resource management (Planning of dynamic resource deployment on need basis)",
      "Feedback and rating management",
      "Easy to use iOS/Android app",
    ],
    capabilityNote:
      "Best suited for OEMs, Onsite service provider, AMC provider, and facility managers",
    mainImage: "/wimate/solutions/asset-ticketing.png",
    features: [
      "Dynamic Dashboard with realtime refresh rate",
      "Customizable Excel and PDF reports",
      "Automatic alerts generation and escalation: email & SMS",
      "Artificial Intelligence (AI) driven insights & actions for optimizations",
    ],
    featuresCta: { label: "Read more on IoT platform", href: "/cloudtesla" },
    benefits: [
      "Easier resource utilization monitoring and planning",
      "24x7 customer support to ensure customer satisfaction",
      "Better visibility in day to day operations",
      "Easy policy adherence check and enforcement",
    ],
    why: STANDARD_WHY,
    otherSolutions: [
      ALL_OTHER[0], ALL_OTHER[1], ALL_OTHER[2], ALL_OTHER[3],
    ],
  },
];

/* ---------------- NAV (matches wimate.in) ---------------- */
export type NavLink = { label: string; to: string; badge?: "Popular" | "New" };
export type NavGroup = { label: string; to: string; children: NavLink[] };
export type NavItem =
  | { kind: "link"; label: string; to: string }
  | { kind: "mega"; label: string; groups: NavGroup[] }
  | { kind: "menu"; label: string; to?: string; children: NavLink[] };

export const navItems: NavItem[] = [
  { kind: "link", label: "Home", to: "/" },
  {
    kind: "mega",
    label: "Products",
    groups: [
      {
        label: "Connectivity",
        to: "/products#gateways",
        children: [
          { label: "Unifier 300 - 3G/4G", to: "/products#unifier-300", badge: "Popular" },
          { label: "Unifier 400 - Sensing", to: "/products#unifier-400", badge: "New" },
          { label: "Unifier 500 - Multiport", to: "/products#unifier-500" },
          { label: "Wi-link", to: "/products#wi-link-100", badge: "New" },
        ],
      },
      {
        label: "HMI & IO",
        to: "/products#hmi",
        children: [
          { label: "IO Card", to: "/products#io-card", badge: "Popular" },
          { label: "HMI 4.3\"", to: "/products#hmi-4-3" },
          { label: "HMI 7\"", to: "/products#hmi-7" },
        ],
      },
      {
        label: "Sensors",
        to: "/products#sensors",
        children: [
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
    children: [
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
    children: [
      { label: "About Us", to: "/why-wimate" },
      { label: "Mail", to: "https://mail.google.com" },
      { label: "Payroll", to: "https://wimate.keka.com" },
    ],
  },
  { kind: "link", label: "Contact Us", to: "/contact" },
];

/* ---------------- DISTRIBUTORS ---------------- */
export const distributors = [
  {
    city: "Bangalore",
    company: "Pharos Innovations Private Limited",
    address: "56/1, 18th Main, 36th Cross, Jayanagar 4th T Block, Bangalore 560041",
    phone: "+91 9902 099 351",
    email: "info@pharosworld.com",
  },
  {
    city: "Bangalore",
    company: "IRO Energy Solutions",
    address: "#112, 11th Main Road, 34th B Cross Rd, 4th T Block East, Jayanagar, Bengaluru, Karnataka 560041",
    phone: "+91 8088 445 833",
  },
  {
    city: "Pune",
    company: "Harsh Automation And Controls",
    address: "Baliraj Colony No.2, Plot No-25, Kalewadi, Pune - 411017",
    phone: "+91 9923287761",
  },
  {
    city: "Punjab",
    company: "Indona Innovative Solutions",
    address: "8/W- 11, Railway Road, Opposite Onkar Feed Store, Dinanagar, Punjab - 143531",
    phone: "+91 9999740051",
  },
];

/* ---------------- ABOUT US / COMPANY ---------------- */
export const aboutPage = {
  breadcrumb: ["Home", "About Us"],
  intro:
    "We believe that the world around us can be simple. The same ideology runs through our approach, products and solutions. We recognized the need in the market for cost effective and reliable IoT Hardware & Software platform so formed a lean startup focused on developing and deploying trunkey solutions using Internet of Things (IoT). Our customers range from micro, small and medium scale enterprises to multi national companies.",
  cloudtesla:
    "Cloudtesla is an easy to use and affordable cloud-based IoT platform for managing thousands of machinery and plants across the globe. It has helped numerous customers ranging from small businesses to multinational companies to streamline complex processes, monitor the machinery, maximize the uptime and save on the operational expenses by up to 60%.",
  unifier:
    "Unifier gateway platform has various models with different communication capabilities such as Ethernet, 3G, 4G, Wi-Fi, RS485, Zigbee which helps our customers to achieve uninterrupted communication between the motes/field devices and the hosted application platform.",
  ourTeamImage: "/wimate/company/our-team.png",
  iotImage: "/wimate/company/iot-internet.png",
  vision: "To be the global leader in making people's life easier",
  mission:
    "To empower our customers with user-friendly and affordable IoT solutions, designed to enhance operational efficiency. We commit to continuous improvement and exceptional support to ensure our users can achieve measurable success and sustainability goals.",
  coreValues: "Integrity, Excellence, Agility and Ownership",
  whyChoose: [
    { title: "We're Experienced Professionals", desc: "100+ years of team experience in deploying IoT solutions in IT, Manufacturing, Real estate, Hospitality, BMS & EMS" },
    { title: "Reliable Hardware", desc: "Time tested, high quality, designed, developed and manufactured in India. It comes with 18 months of replacement warranty." },
    { title: "Innovative Software", desc: "Easy to use, highly scalable and cloud-based IoT platform. Dynamic dashboard, High speed reports, Remote control, Email & SMS alerts." },
    { title: "Turnkey Solution", desc: "End to end covering hardware supply, cloud platform hosting, installation, commissioning and maintainance" },
    { title: "Customer support", desc: "We have teams based out of Pune, Bangalore, Hyderabad, Delhi, Mysore, and Kolkata. We also support over phone and email." },
    { title: "Competitive Cost", desc: "Cloud hosting is charged per month so need not to invest any capital for software license charges. Hardware prices can compete with best in the industry" },
  ],
  turnkey: [
    { name: "Building Management", image: "/wimate/solutions/bms.png", href: "/solutions#building-management" },
    { name: "Energy Management", image: "/wimate/solutions/energy-thumb.png", href: "/solutions#energy-management" },
    { name: "Production Monitoring", image: "/wimate/solutions/production.png", href: "/solutions#industry-4-0" },
    { name: "Machine Health", image: "/wimate/solutions/machine-health.png", href: "/solutions#machine-health" },
    { name: "RO Plant Monitoring", image: "/wimate/solutions/ro-plant.png", href: "/solutions#ro-plant" },
    { name: "Sewage Treatment Plant", image: "/wimate/solutions/stp.png", href: "/solutions#stp-monitoring" },
    { name: "Smart Logistics", image: "/wimate/solutions/logistics.png", href: "/solutions#connected-logistics" },
    { name: "Asset Mgmt. & Ticketing", image: "/wimate/solutions/asset-ticketing.png", href: "/solutions#asset-management-ticketing" },
  ],
  trustLogos: ["IBM", "Bosch", "Toyota", "ITC Limited"],
};

/* ---------------- CLOUDTESLA PAGE ---------------- */
export const cloudteslaPage = {
  breadcrumb: ["Home", "Cloudtesla - IoT platform"],
  hero: {
    title: "Cloudtesla - IoT platform",
    intro:
      "Cloudtesla is an easy to use and affordable cloud-based IoT platform for managing thousands of machinery and plants across the globe. It has helped numerous customers ranging from small businesses to multinational companies to",
    benefits: [
      "Streamline and visualize complex processes",
      "Monitor the machinery",
      "Maximize the uptime",
      "Improve resource utilization",
      "Increase productivity",
      "Save on the operational expenses by up to 60%.",
    ],
  },
  connectivity: {
    title: "Connectivity",
    bullets: [
      "Any data can be linked from sensors, energy meters, PLCs, HMIs, IO cards or any other machines across different processes of an organization",
      "Secured, real-time and reliable with a fail-safe and redundant communication",
      {
        label: "Supports a wide range of network interfaces and communication protocols such as",
        items: ["MQTT", "Modbus RTU & TCP/IP", "BACNet MSTP & IP", "Profibus & Profinet", "HTTPS (API)"],
      },
      "Remote device configuration and firmware upgrade",
      "Supports automatic and on-demand data retrieving",
    ],
    image: "/wimate/solutions/connectivity.png",
  },
  insights: {
    title: "Insights",
    bullets: [
      "Artificial Intelligence(AI) powered Analytics engine with various customizable filters, calculations, and representations",
      "Powerful PDF and Excel reports with high-speed download using Big data technology",
      {
        label: "Accurate alerts with user-defined rules :",
        items: ["Onscreen", "email", "SMS", "WhatsApp"],
      },
      "Workforce policy adherence monitoring",
      "Operator performance monitoring",
      "Maintenance effectiveness analysis",
    ],
    image: "/wimate/solutions/insights.png",
  },
  action: {
    title: "Action",
    bullets: [
      "Remote control",
      "Operations Scheduling (On, Off and Modulation)",
      {
        label: "Increase production by improving the following aspects of assets",
        items: ["Health", "Efficiency", "Utilization", "Life"],
      },
      "Deploy standard operating procedures",
      "Energy and time saving via improved operation cycle",
      "Increase visibility and accountability in on-ground team",
    ],
    image: "/wimate/solutions/action.jpg",
  },
  features: [
    { group: "Dashboard", items: [
      "Highly readable & Fatigue resistant",
      "Responsive (Auto-fit to Computer and phone screen)",
      "Live update - Every second",
      "Widgets - Dials, Tiles, Graphs, Donut chart, Heatmap, Geolocation, & Building layout",
      "Chatbot - Typing & Audio-based",
    ]},
    { group: "Reports", items: [
      "Parametric and consumption/ production",
      "Audit trails",
      "Consumption based Billing & Invoice",
      "User-configurable filters",
      "Auto-generated emails",
    ]},
    { group: "Remote control", items: [
      "ON / OFF, Modulation, Mode change, and Scheduling (7 days & 10 slots)",
    ]},
    { group: "Alerts", items: [
      "Type: Onscreen, email, SMS & WhatsApp",
      "User-configurable parameters",
      "Auto escalation",
    ]},
    { group: "Device Management", items: [
      "Device diagnostics",
      "Calendar view",
      "Leadership view",
    ]},
    { group: "User management", items: [
      "Access management",
      "Instant creation, deactivation, and deletion of user ID",
      "Password recovery",
    ]},
    { group: "Security", items: [
      "SSL certificate based encryption",
      "Session management",
      "Password policy",
      "Secured login",
    ]},
  ],
  useCases: [
    "Energy Management and Billing for buildings",
    { group: "Building Management System", items: [
      "Temperature, Humidity & CO2 level sensors",
      "Variable Air Volume (VAV)",
      "Air Handling Units",
      "Chillers",
      "Energy meters",
      "Space utilization using occupancy information",
      "UPS",
      "Diesel generator",
    ]},
    "Critical Room Monitoring",
    { group: "Monitoring of infrastructure with Low or No Human intervention like", items: [
      "RO Water Purification Plant",
      "Sewage Treatment Plant",
      "Ice cream Vending Machine",
    ]},
    { group: "Remote monitoring and predictive maintenance for Manufacturing Industries", items: [
      "Metal fabrication",
      "Plastic injection molding",
      "Tobacco",
      "Textile",
    ]},
    "Automation of day to day activities like ON/OFF and speed control based configurable time schedule and/or threshold level",
    { group: "Custom-built applications", items: [
      "Railway Track Utilization Monitoring",
      "Street Light Management",
      "Asset Management",
      "Water & Gas Consumption Monitoring and Billing",
      "Parking Space Monitoring",
    ]},
  ],
  turnkey: [
    { name: "Building Management", image: "/wimate/solutions/bms.png", href: "/solutions#building-management" },
    { name: "Energy Management", image: "/wimate/solutions/energy-thumb.png", href: "/solutions#energy-management" },
    { name: "Production Monitoring", image: "/wimate/solutions/production.png", href: "/solutions#industry-4-0" },
    { name: "Machine Health", image: "/wimate/solutions/machine-health.png", href: "/solutions#machine-health" },
    { name: "RO Plant Monitoring", image: "/wimate/solutions/ro-plant.png", href: "/solutions#ro-plant" },
    { name: "Sewage Treatment Plant", image: "/wimate/solutions/stp.png", href: "/solutions#stp-monitoring" },
    { name: "Smart Logistics", image: "/wimate/solutions/logistics.png", href: "/solutions#connected-logistics" },
    { name: "Asset Mgmt. & Ticketing", image: "/wimate/solutions/asset-ticketing.png", href: "/solutions#asset-management-ticketing" },
  ],
};

/* ---------------- CONTACT PAGE ---------------- */
export const contactPage = {
  breadcrumb: ["Home", "Contact Us"],
  hero: {
    title: "Contact Us",
    image: "/wimate/contact/contact-us.png",
  },
  phone: { label: "Phone", value: "(+91) 9986 074 353", href: "tel:+919986074353" },
  address: {
    label: "Address",
    lines: ["2nd floor, 43/262, 5th main, Jayanagar 4th block,", "Bangalore - 560 011, India"],
  },
  email: { label: "Email", items: [
    { value: "sales@wimate.in", href: "mailto:sales@wimate.in" },
    { value: "info@wimate.in", href: "mailto:info@wimate.in" },
  ]},
};
