export interface Project {
  id: string;
  title: string;
  category: 'Web Development' | 'Network & Security' | 'Scientific Publication' | 'Technical Projects';
  role: string;
  description: string;
  coverImage: string;
  techStack: string[];
  externalLink?: string;
  date: string;
}

export interface Certificate {
  id: string;
  name: string;
  issuer: string;
  category: string;
  image: string;
  description: string;
}

export const PROFILE = {
  name: "Muchamad Gilang Dwi Saputra, S.Kom.",
  role: "Network Engineering · Network Security · Cybersecurity",
  bio: "Computer Science graduate with practical experience in IT support, network troubleshooting, web development, role-based systems, and security-focused technical projects.",
  gpa: "3.83 / 4.00",
  email: "gilangdwisaputra63@gmail.com",
  linkedin: "https://www.linkedin.com/in/muchamad-gilang-dwi-saputra-1b7766337/",
  github: "https://github.com/muchamad-gilang-dwi-saputra",
  instagram: "https://www.instagram.com/muchamad_gilang_dwi_saputra",
};

export const EXPERIENCES = [
  {
    id: "internship-kbs",
    period: "21 JULY 2025 — 21 AUGUST 2025",
    role: "IT Support, Network & Web Development Intern",
    company: "PD Taman Satwa Kebun Binatang Surabaya · IT Team",
    description: "Supported operational IT activities while contributing to network troubleshooting, end-user technical support, device management, and development of integrated internal web applications.",
    contributions: [
      "Monitored and troubleshot internal LAN/Wi-Fi connectivity issues.",
      "Assisted troubleshooting of MikroTik and Huawei network devices.",
      "Provided computer troubleshooting and technical support for users.",
      "Developed 3 integrated PHP and MySQL applications for employees, HRD, and directors.",
      "Implemented authentication, session management, RBAC, input validation, and approval workflows.",
      "Presented system development results to the IT team, HRD, and management."
    ],
    images: [
      { src: "/assets/magang.jpg", alt: "IT team discussion during internship" },
      { src: "/assets/internship-discussion.jpg", alt: "IT internship activity" },
      { src: "/assets/internship-coding.jpg", alt: "Coding and system development activity" }
    ]
  },
  {
    id: "workshop-kaliber",
    period: "31 MAY 2025 · LSO KALIBER",
    role: "Workshop Event Chairman",
    company: "Ngoding Cerdas Bareng Python dengan Clean Code, Secure Code dan AI untuk Produktivitas",
    description: "Led committee coordination and end-to-end event execution, covering team workflow, speaker coordination, participant management, publication, and external communication.",
    contributions: [
      "Coordinated the committee and 1 speaker.",
      "Managed a workshop attended by 50 participants.",
      "Ensured preparation, execution, and closing activities ran according to plan."
    ],
    tags: ["Leadership", "Project Coordination", "Workshop Management"],
    images: [
      { src: "/assets/workshop-leader.jpg", alt: "Workshop leadership documentation" }
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "simpeg-karyawan",
    title: "SIMPEG - Karyawan Role",
    category: "Web Development",
    role: "ROLE 01",
    description: "Employee-side interface for submitting and accessing services based on the assigned user role and workflow.",
    coverImage: "/assets/project-1.jpg",
    techStack: ["PHP", "MySQL", "User Access", "RBAC"],
    date: "2025"
  },
  {
    id: "simpeg-hrd",
    title: "SIMPEG - HRD Management",
    category: "Web Development",
    role: "ROLE 02",
    description: "Administrative interface for managing employee information, leave records, and approval-related workflows.",
    coverImage: "/assets/project-2.jpg",
    techStack: ["PHP", "MySQL", "HR Management", "Workflows"],
    date: "2025"
  },
  {
    id: "simpeg-direktur",
    title: "SIMPEG - Direktur Dashboard",
    category: "Web Development",
    role: "ROLE 03",
    description: "Management-level dashboard for broader information monitoring and oversight of organizational system data.",
    coverImage: "/assets/project-3.jpg",
    techStack: ["PHP", "MySQL", "Oversight", "Dashboard"],
    date: "2025"
  }
];

export const TECHNICAL_PROJECTS = [
  {
    id: "01",
    title: "Network Simulation & Security",
    description: "Designed network simulations with VLAN, routing, access control, network segmentation, and connectivity testing.",
    tags: ["Cisco Packet Tracer", "VLAN", "Routing"]
  },
  {
    id: "02",
    title: "Honeypot & Network Monitoring",
    description: "Built local simulations involving honeypot and port scanning activities and analyzed network traffic and activity.",
    tags: ["Python", "Nmap", "Wireshark"]
  },
  {
    id: "03",
    title: "Web Application Security Testing",
    description: "Performed controlled security testing involving SQL Injection, brute-force, XSS simulation, and mitigation analysis.",
    tags: ["DVWA", "SQLMap", "Hydra"]
  },
  {
    id: "04",
    title: "WordPress Security & Red Teaming",
    description: "Practiced WordPress security testing in a controlled environment, including configuration analysis and post-exploitation concepts.",
    tags: ["WordPress", "Linux", "Red Team"]
  }
];

export const CERTIFICATES: Certificate[] = [
  {
    id: "cert-cisco",
    name: "Introduction to Cybersecurity",
    issuer: "CISCO NETWORKING ACADEMY",
    category: "Cybersecurity",
    image: "/assets/certificate-cisco.jpg",
    description: "Foundational cybersecurity learning covering core security concepts and digital risk awareness."
  },
  {
    id: "cert-kaliber",
    name: "Organizational & Leadership Documentation",
    issuer: "LSO KALIBER",
    category: "Leadership & Organization",
    image: "/assets/certificate-kaliber.jpg",
    description: "Documentation related to organizational activity, leadership, and committee participation."
  }
];

export const SKILLS_CATEGORIES = [
  {
    title: "Network Engineering",
    skills: "Computer Networking · TCP/IP · LAN · Wi-Fi · VLAN · Routing · MikroTik · Cisco Packet Tracer · Network Troubleshooting"
  },
  {
    title: "Cybersecurity",
    skills: "Network Security · Web Application Security · Penetration Testing · Nmap · Wireshark · Password Hashing"
  },
  {
    title: "Programming & Database",
    skills: "Python · PHP · MySQL · Authentication · Session Management · Input Validation"
  },
  {
    title: "Operating Systems",
    skills: "Linux · Windows · Basic system administration and technical troubleshooting"
  },
  {
    title: "Leadership & Management",
    skills: "Leadership · Communication · Teamwork · Project Coordination · Problem Solving · Analytical Thinking"
  },
  {
    title: "Languages",
    skills: "Bahasa Indonesia (Active) · English (Basic)"
  }
];