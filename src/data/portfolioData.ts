import projectExamSystem from '../assets/images/project_exam_system_1791048187920.jpg';
import projectNetworkLab from '../assets/images/project_network_lab_1791048199361.jpg';
import projectBroadcastOps from '../assets/images/project_broadcast_ops_1791048211402.jpg';

export interface EducationItem {
  id: string;
  institution: string;
  credential: string;
  period: string;
  location?: string;
  description: string;
  keyAreas: string[];
}

export interface TrainingItem {
  id: string;
  title: string;
  focus: string;
  category: 'Cisco' | 'Cybersecurity' | 'Systems' | 'Networking';
  details: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  summary: string;
  responsibilities: string[];
  skillsApplied: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'Software' | 'Networking' | 'Open Source';
  technologies: string[];
  description: string;
  extendedSummary: string;
  highlights: string[];
  image: string;
  linkText?: string;
  linkUrl?: string;
  cloneCommand?: string;
}

export const PERSONAL_INFO = {
  name: "Alagie Bah",
  headline: "ICT Professional | Programs Assistant | Customer Service Specialist | Network & Cybersecurity Enthusiast",
  tagline: "Building Secure Networks. Solving Technical Problems. Creating Digital Solutions.",
  location: "Brufut, The Gambia",
  email: "alagiebah11987@gmail.com",
  linkedIn: "https://www.linkedin.com/in/alagie-bah-a2351021b/",
  github: "https://github.com/alas2026",
  status: "Available for Network Administration & Cybersecurity Roles",
  summary: "I am an energetic ICT professional, Programs Assistant, and Network & Cybersecurity enthusiast based in Brufut, The Gambia. Having completed my National Diploma in Computer Science at the Management Development Institute (MDI), I pair structured computer science fundamentals with hands-on networking, network security, and comprehensive PC repair and maintenance—spanning both hardware diagnostics and software troubleshooting—cultivated through specialized training at the Indian Institute of Hardware and Technology (IIHT) and QuantumNet Institute of Technology. Supported by real-world field experience across broadcast media operations at QTV Gambia, technical support at Qcell Ltd, and community outreach with NSGA, I bring dedicated problem-solving and operational reliability to every technical challenge.",
  aspirations: "Focused on advancing professional excellence in Network Administration, Cybersecurity, and Infrastructure Engineering to architect resilient digital solutions and secure critical communications networks."
};

export const CAREER_INTERESTS = [
  "Network Administration",
  "Cybersecurity",
  "Network Security",
  "IT Support",
  "Infrastructure",
  "Systems Administration"
];

export const SPOKEN_LANGUAGES = [
  { language: "Fula", proficiency: "Mother Tongue" },
  { language: "English", proficiency: "Professional Working Proficiency" },
  { language: "Mandinka", proficiency: "Fluent" },
  { language: "Wollof", proficiency: "Fluent" }
];

export const TECHNICAL_SKILLS = [
  {
    category: "Networking & Infrastructure",
    skills: [
      "Computer Networking",
      "Cisco Networking",
      "Cisco Packet Tracer",
      "Network Administration",
      "Network Security",
      "Network Defense",
      "IT Support"
    ],
    description: "Hands-on configuration of switches, routers, IP addressing schemes, subnetting, topology simulation, and perimeter hardening."
  },
  {
    category: "Cybersecurity & Systems",
    skills: [
      "Cybersecurity",
      "Network Defense",
      "Linux",
      "Windows",
      "Computer Hardware & Maintenance",
      "Technical Support"
    ],
    description: "System administration across Linux distributions and Windows, PC hardware assembly, diagnostic triage, and defense fundamentals."
  },
  {
    category: "Software & Databases",
    skills: [
      "Java",
      "MySQL",
      "HTML",
      "CSS",
      "JavaScript",
      "Git & GitHub"
    ],
    description: "Core object-oriented programming, relational database modeling and queries, web standards, and modern version control workflows."
  }
];

export const EDUCATION: EducationItem[] = [
  {
    id: "mdi",
    institution: "Management Development Institute (MDI)",
    credential: "National Diploma in Computer Science",
    period: "September 2024 – July 2026",
    location: "Kanifing / Greater Banjul, The Gambia",
    description: "Rigorous academic curriculum covering data structures, object-oriented programming, database management systems, network fundamentals, computer architecture, and systems analysis.",
    keyAreas: ["Computer Science Fundamentals", "Java Programming", "MySQL Relational Databases", "Systems Analysis"]
  },
  {
    id: "iiht",
    institution: "Indian Institute of Hardware and Technology (IIHT)",
    credential: "6 Months CCNA-Network Security",
    period: "December 2021 – May 2022",
    location: "The Gambia Center",
    description: "Specialized intensive certification track focused on enterprise routing and switching, network security countermeasures, firewall basics, access control lists, and security implementations.",
    keyAreas: ["Cisco CCNA Routing & Switching", "Network Security Protocols", "Access Control Lists (ACLs)", "Device Hardening"]
  },
  {
    id: "quantumnet",
    institution: "QuantumNet Institute of Technology",
    credential: "Computer Basic, Elementary, Intermediate and Advance Microsoft Office and A+",
    period: "2014 – 2017",
    location: "The Gambia",
    description: "Comprehensive multi-tier program encompassing foundational IT concepts, intermediate and advanced productivity suites, PC hardware architecture, system maintenance, and A+ hardware troubleshooting.",
    keyAreas: ["A+ Computer Hardware & Maintenance", "Advance Microsoft Office Suite", "Operating System Setup", "PC Troubleshooting"]
  },
  {
    id: "niorojattaba",
    institution: "Niorojattaba Lower Basic and Senior Secondary School",
    credential: "Lower Basic & Senior Secondary School Certificate",
    period: "2003 – 2014",
    location: "The Gambia",
    description: "Completed full primary and secondary education with a rigorous background in sciences, mathematics, and English language.",
    keyAreas: ["Secondary Education", "Mathematics", "Science Fundamentals", "English Studies"]
  }
];

export const TRAINING_CERTIFICATIONS: TrainingItem[] = [
  {
    id: "cisco-intro",
    title: "CCNA: Introduction to Networks",
    focus: "Network addressing and basic troubleshooting",
    category: "Cisco",
    details: "Mastery of IPv4 and IPv6 addressing, subnets, ICMP testing, network media, ethernet frame structures, and switch MAC address tables."
  },
  {
    id: "net-support-sec",
    title: "Network Support and Security",
    focus: "Operating system basics and threat containment",
    category: "Cybersecurity",
    details: "Operating system security fundamentals, defensive system services, access management, and threat identification on corporate networks."
  },
  {
    id: "device-config",
    title: "Networking Device and Initial Configuration",
    focus: "Cisco IOS CLI setup and basic device hardening",
    category: "Cisco",
    details: "Configuring Cisco switches and routers via CLI, privileged EXEC modes, encrypted passwords, banner warnings, and SSH management."
  },
  {
    id: "net-defense",
    title: "Network Defense",
    focus: "Perimeter security, ACLs, and firewall concepts",
    category: "Cybersecurity",
    details: "Implementing packet filtering, stateful inspection principles, security policies, and incident response countermeasures."
  },
  {
    id: "linux-essentials",
    title: "Linux Essentials",
    focus: "Linux command line, file systems, and permissions",
    category: "Systems",
    details: "Core POSIX command line navigation, user management, file permissions (chmod/chown), process inspection, and bash shell utilities."
  },
  {
    id: "intro-cybersecurity",
    title: "Introduction to Cybersecurity",
    focus: "Cyber trends, threat vectors, and data confidentiality",
    category: "Cybersecurity",
    details: "CIA triad (Confidentiality, Integrity, Availability), social engineering tactics, malware classifications, and privacy principles."
  },
  {
    id: "cyber-essentials",
    title: "Cybersecurity Essentials",
    focus: "Defensive frameworks, cryptography, and risk assessment",
    category: "Cybersecurity",
    details: "Encryption standards (symmetric/asymmetric), digital signatures, authentication protocols, and enterprise vulnerability management."
  }
];

export const WORK_EXPERIENCE: ExperienceItem[] = [
  {
    id: "qtv",
    role: "Programs Assistant",
    company: "QTV Gambia",
    period: "January 2023 – Present",
    location: "Greater Banjul, The Gambia",
    summary: "Leading technical coordination, program operations, and broadcast digital asset management for one of The Gambia's premier national television networks.",
    responsibilities: [
      "Manage daily broadcast program schedules and coordinate playout operations to ensure uninterrupted, high-quality television transmission.",
      "Oversee media operations including video ingest, metadata cataloging, and digital media archiving for news and programming libraries.",
      "Coordinate technical workflows between studio production teams, master control room (MCR), and post-production suites.",
      "Monitor on-air feeds and video servers, swiftly resolving technical glitches and playout discrepancies under strict live-to-air deadlines.",
      "Assist in the preparation and delivery of digital media content across multiple digital and broadcast distribution channels."
    ],
    skillsApplied: ["Media Operations", "Broadcast Technical Coordination", "Digital Archive Management", "Video Playout Systems", "High-Stress Problem Solving"]
  },
  {
    id: "qcell",
    role: "Call Center Agent",
    company: "Qcell Ltd",
    period: "9 Months",
    location: "Kairaba Avenue, The Gambia",
    summary: "Delivered first-line technical assistance and customer care for The Gambia's leading telecommunications provider, resolving voice and data inquiries.",
    responsibilities: [
      "Handled high volumes of inbound customer inquiries regarding mobile voice, SMS, data packages, and SIM configuration.",
      "Provided step-by-step technical support for subscriber smartphone settings, APN configurations, and network connectivity problems.",
      "Diagnosed service anomalies and escalated network-level outages to engineering dispatch teams with precise issue logging.",
      "Maintained exemplary customer satisfaction ratings through rapid active listening, patience, and clear bilingual communication.",
      "Adhered to company SLA metrics and quality assurance standards in problem resolution."
    ],
    skillsApplied: ["Technical Customer Support", "Telecommunications Troubleshooting", "Active Problem Solving", "Verbal Communication", "SLA Adherence"]
  },
  {
    id: "nsga",
    role: "Field Staff — Lower River Region",
    company: "Nova Scotia Gambia Association (NSGA)",
    period: "April 2017 – August 2022",
    location: "Lower River Region, The Gambia",
    summary: "Spearheaded grassroots community mobilization, educational outreach, and behavioral change communications across rural communities in partnership with international development organizations.",
    responsibilities: [
      "Served as Regional Drama Trouper, utilizing participatory theater and interactive storytelling to communicate critical health and civic messages.",
      "Planned, organized, and executed monthly community outreach and educational sessions across villages and school districts.",
      "Actively contributed to multi-year humanitarian and youth empowerment initiatives funded and supported by UNFPA and UNICEF.",
      "Facilitated community film shows and Magnet Theatre sessions to encourage participatory community dialogue on public health and education.",
      "Engaged local community leaders, village committees, and youth groups to foster sustained grassroots cooperation and trust."
    ],
    skillsApplied: ["Community Mobilization", "UNFPA & UNICEF Project Execution", "Public Presentation & Theatre", "Stakeholder Engagement", "Field Operations"]
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    id: "exam-system",
    title: "Computer Based Examination System",
    category: "Software",
    technologies: ["Java", "MySQL", "HTML", "CSS", "JavaScript"],
    description: "An academic project designed to support computer-based examinations and examination management at Management Development Institute (MDI).",
    extendedSummary: "Developed as a comprehensive academic software project to eliminate paper examination inefficiencies, ensure test paper confidentiality, and provide automated grading with immediate performance feedback. Built with Java core logic, a normalized MySQL relational database, and an intuitive web interface for students and proctors.",
    highlights: [
      "Student authentication and examination access control",
      "Automated test timer with auto-submit protection",
      "Randomized question pooling to deter academic misconduct",
      "Relational MySQL database schemas for candidates, questions, and test scores",
      "Clean administration panel for examiners to manage exam banks"
    ],
    image: projectExamSystem,
    linkText: "GitHub Repo",
    linkUrl: "https://github.com/alas2026/computer-based-exam-system.git",
    cloneCommand: "git clone https://github.com/alas2026/computer-based-exam-system.git"
  },
  {
    id: "network-lab",
    title: "Networking & Cybersecurity Lab",
    category: "Networking",
    technologies: ["Cisco Packet Tracer", "Cisco IOS", "Linux CLI", "Network Defense", "Wireshark"],
    description: "Cisco Packet Tracer networking exercises, network configuration, security concepts, troubleshooting, and Linux practice.",
    extendedSummary: "A comprehensive hands-on virtual laboratory demonstrating enterprise network design and defensive hardening. Encompasses multi-router topologies, inter-VLAN routing, standard and extended Access Control Lists (ACLs), switch port security against MAC flooding, and Linux server hardening.",
    highlights: [
      "Designed hierarchical multi-switch campus LAN topologies in Cisco Packet Tracer",
      "Configured Cisco 2960 switches with 802.1Q trunking and VLAN segmentation",
      "Hardened router interfaces with console passwords, SSH v2, and banner security",
      "Implemented IPv4 subnetting schemes (/24, /26, /30 point-to-point links)",
      "Practiced Linux network diagnostic commands (ip, ping, traceroute, netstat, ufw)"
    ],
    image: projectNetworkLab
  },
  {
    id: "github-repos",
    title: "Personal GitHub Projects & Codebase",
    category: "Open Source",
    technologies: ["Git", "GitHub", "Linux Shell", "Web Development", "Java"],
    description: "Public repositories, academic coursework exercises, and network automation experiments hosted on GitHub.",
    extendedSummary: "A maintained portfolio of code repositories, scripting utilities, and documentation detailing network setup notes, Java algorithms, and web frontends.",
    highlights: [
      "Version-controlled source code for academic and personal development",
      "Network documentation, packet analysis notes, and command cheat sheets",
      "Web styling, script utilities, and collaborative Git branches"
    ],
    image: projectBroadcastOps,
    linkText: "Visit GitHub Profile",
    linkUrl: "https://github.com/alas2026"
  }
];

export const NETWORK_LAB_SAMPLES = [
  {
    id: "vlan-config",
    name: "Switch VLAN & Trunking (Cisco IOS)",
    device: "Switch-Core01 (Cisco 2960)",
    syntax: `Switch-Core01# configure terminal
Switch-Core01(config)# vlan 10
Switch-Core01(config-vlan)# name MANAGEMENT_NET
Switch-Core01(config-vlan)# vlan 20
Switch-Core01(config-vlan)# name SECURE_LABS
Switch-Core01(config-vlan)# exit
Switch-Core01(config)# interface gigabitethernet 0/1
Switch-Core01(config-if)# switchport mode trunk
Switch-Core01(config-if)# switchport trunk allowed vlan 10,20
Switch-Core01(config-if)# no shutdown`,
    notes: "Segments broadcast domains and isolates administrative traffic from general student/lab subnets."
  },
  {
    id: "port-security",
    name: "Switchport Port Security & MAC Hardening",
    device: "Switch-Access01 (Cisco 2960)",
    syntax: `Switch-Access01(config)# interface range fastethernet 0/1 - 12
Switch-Access01(config-if-range)# switchport mode access
Switch-Access01(config-if-range)# switchport port-security
Switch-Access01(config-if-range)# switchport port-security maximum 2
Switch-Access01(config-if-range)# switchport port-security mac-address sticky
Switch-Access01(config-if-range)# switchport port-security violation restrict
Switch-Access01(config-if-range)# spanning-tree portfast`,
    notes: "Guards against unauthorized MAC flooding attacks and rogue hardware connection in lab terminals."
  },
  {
    id: "acl-hardening",
    name: "Extended Access Control List (Network Defense)",
    device: "Router-Gateway (Cisco 2911)",
    syntax: `Router-Gateway(config)# ip access-list extended DEFENSE_INBOUND
Router-Gateway(config-ext-nacl)# permit tcp 192.168.10.0 0.0.0.255 any eq 22
Router-Gateway(config-ext-nacl)# permit tcp 192.168.10.0 0.0.0.255 any eq 443
Router-Gateway(config-ext-nacl)# deny ip any 192.168.20.0 0.0.0.255
Router-Gateway(config-ext-nacl)# permit ip any any
Router-Gateway(config)# interface gigabitethernet 0/0
Router-Gateway(config-if)# ip access-group DEFENSE_INBOUND in`,
    notes: "Restricts administrative SSH and secure HTTPS while preventing unauthorized lateral traversal into sensitive subnet."
  },
  {
    id: "linux-cli",
    name: "Linux Network Diagnostics & Firewall Inspection",
    device: "Linux Terminal (Ubuntu / Debian)",
    syntax: `$ ip -br addr show
$ sudo ufw status verbose
Status: active
Logging: on (low)
Default: deny (incoming), allow (outgoing), disabled (routed)

$ sudo netstat -tulnp | grep -E ':(22|80|443)'
$ traceroute -m 15 -q 1 8.8.8.8
$ ping -c 4 192.168.10.1`,
    notes: "Verifies network interface states, active listening ports, route convergence, and local firewall posture."
  }
];
