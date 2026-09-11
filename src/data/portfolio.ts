export interface Project {
  id: string;
  title: string;
  category: 'Web Development' | 'Network & Security' | 'Scientific Publication' | 'Technical Projects';
  role: string;
  description: { id: string; en: string };
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
  description: { id: string; en: string };
}

export const PROFILE = {
  name: "Muchamad Gilang Dwi Saputra, S.Kom.",
  gpa: "3.83 / 4.00",
  email: "gilangdwisaputra63@gmail.com",
  phone: "085736426514",
  linkedin: "https://www.linkedin.com/in/muchamad-gilang-dwi-saputra-1b7766337/",
  github: "https://github.com/muchamad-gilang-dwi-saputra",
  instagram: "https://www.instagram.com/muchamad_gilang_dwi_saputra",
  role: {
    id: "Spesialis Keamanan Jaringan & Teknik Jaringan",
    en: "Network Security & Network Engineering Specialist"
  },
  bio: {
    id: "Lulusan Teknik Informatika UMM (IPK 3.83 / Cum Laude). Berpengalaman praktis dalam IT Support, analisis jaringan, pengembangan sistem web berbasis peran (RBAC), serta pengujian keamanan aplikasi.",
    en: "Computer Science graduate from UMM (GPA 3.83 / Cum Laude). Practical experience in IT Support, network analysis, role-based web systems (RBAC), and application security testing."
  }
};

export const TRANSLATIONS = {
  id: {
    nav: { about: "Tentang", experience: "Pengalaman", projects: "Proyek", publication: "Publikasi", skills: "Keahlian", credentials: "Sertifikasi", contact: "Kontak" },
    badge: "TERBUKA UNTUK PELUANG KARIR",
    heroSubtitle: "PORTOFOLIO PROFESIONAL · 2026",
    ctaConnect: "Hubungi Saya",
    ctaExplore: "Jelajahi Pengalaman ↗",
    ctaGithub: "Lihat GitHub",
    metrics: { gpa: "IPK / 4.00", apps: "Aplikasi Web Terintegrasi", research: "Publikasi Jurnal SINTA 3" },
    aboutTitle: "Pengalaman IT Praktis dengan Kedalaman Teknis.",
    aboutDesc1: "Saya berfokus pada infrastruktur jaringan, keamanan jaringan, cybersecurity, dan sistem informasi praktis. Pekerjaan saya menggabungkan pemecahan masalah langsung, pengembangan web, kontrol akses berbasis peran (RBAC), Linux, Python, dan pengujian keamanan terinstal.",
    aboutDesc2: "Saya telah mengemban tugas pengembangan aplikasi web internal, mendukung lingkungan operasional IT, bekerja dengan infrastruktur LAN/Wi-Fi, perangkat MikroTik dan Huawei, serta menyelesaikan proyek keamanan teknis.",
    expTitle: "Pengalaman Profesional, Teknis, & Kepemimpinan",
    projTitle: "Sistem Manajemen Karyawan Berbasis Peran (SIMPEG)",
    projDesc: "Sistem web internal terintegrasi berbasis PHP & MySQL dengan kontrol akses peran (RBAC), alur persetujuan, dan pengolahan data terhubung.",
    pubTitle: "Karya Akademik & Riset Keamanan Aplikasi",
    pubDetails: "Riset mandiri membandingkan algoritma hashing password Bcrypt, Argon2, dan PBKDF2 dalam konteks keamanan autentikasi sistem informasi kepegawaian berbasis web.",
    techProjTitle: "Praktik Keamanan & Jaringan Terkontrol",
    skillsTitle: "Kumpulan Keahlian Teknis",
    credTitle: "Sertifikasi & Dokumentasi Organisasi",
    contactTitle: "Mari Membangun Koneksi Profesional",
    contactDesc: "Terbuka untuk jejaring profesional, kolaborasi teknis, proyek cybersecurity, serta peluang karir."
  },
  en: {
    nav: { about: "About", experience: "Experience", projects: "Projects", publication: "Publication", skills: "Skills", credentials: "Credentials", contact: "Contact" },
    badge: "OPEN FOR PROFESSIONAL OPPORTUNITIES",
    heroSubtitle: "PROFESSIONAL PORTFOLIO · 2026",
    ctaConnect: "Let's Connect",
    ctaExplore: "Explore Experience ↗",
    ctaGithub: "View GitHub",
    metrics: { gpa: "GPA / 4.00", apps: "Integrated Web Apps", research: "SINTA 3 Research Journal" },
    aboutTitle: "Practical IT experience supported by technical depth.",
    aboutDesc1: "I focus on network infrastructure, network security, cybersecurity, and practical information systems. My work combines hands-on troubleshooting, web development, role-based access control (RBAC), Linux, Python, and controlled security testing.",
    aboutDesc2: "I have developed internal web applications, supported operational IT environments, worked with LAN/Wi-Fi infrastructure, MikroTik and Huawei devices, and completed technical security projects.",
    expTitle: "Professional, Technical, & Leadership Experience",
    projTitle: "Role-Based Employee Management System (SIMPEG)",
    projDesc: "An integrated internal web system built with PHP & MySQL, designed around role-based access control (RBAC), approval workflows, and connected data management.",
    pubTitle: "Academic Work & Application Security Research",
    pubDetails: "Single-author research comparing Bcrypt, Argon2, and PBKDF2 password hashing algorithms in the context of authentication security for web-based employee systems.",
    techProjTitle: "Security & Networking Practice in Controlled Environments",
    skillsTitle: "A Focused Technical Toolkit",
    credTitle: "Certifications & Organizational Documentation",
    contactTitle: "Let's Build a Professional Connection",
    contactDesc: "Open for professional networking, technical collaboration, cybersecurity projects, and career opportunities."
  }
};

export const EXPERIENCES = [
  {
    id: "internship-kbs",
    period: "21 JULY 2025 — 21 AUGUST 2025",
    role: "IT Support, Network & Web Development Intern",
    company: "PD Taman Satwa Kebun Binatang Surabaya · IT Team",
    description: {
      id: "Mendukung kegiatan operasional IT serta berkontribusi dalam pemecahan masalah jaringan, dukungan teknis pengguna, manajemen perangkat, dan pengembangan aplikasi web internal terintegrasi.",
      en: "Supported operational IT activities while contributing to network troubleshooting, end-user technical support, device management, and development of integrated internal web applications."
    },
    contributions: {
      id: [
        "Memantau dan menangani kendala konektivitas LAN/Wi-Fi internal.",
        "Membantu pemecahan masalah pada perangkat jaringan MikroTik dan Huawei.",
        "Memberikan dukungan teknis komputer dan pemecahan masalah untuk pengguna.",
        "Mengembangkan 3 aplikasi terintegrasi berbasis PHP & MySQL untuk karyawan, HRD, dan direktur.",
        "Menerapkan autentikasi, manajemen sesi, RBAC, validasi input, dan alur persetujuan.",
        "Mempresentasikan hasil pengembangan sistem kepada tim IT, HRD, dan manajemen."
      ],
      en: [
        "Monitored and troubleshot internal LAN/Wi-Fi connectivity issues.",
        "Assisted troubleshooting of MikroTik and Huawei network devices.",
        "Provided computer troubleshooting and technical support for users.",
        "Developed 3 integrated PHP & MySQL applications for employees, HRD, and directors.",
        "Implemented authentication, session management, RBAC, input validation, and approval workflows.",
        "Presented system development results to the IT team, HRD, and management."
      ]
    },
    images: [
      { src: "/assets/magang.jpg", alt: "Diskusi Tim IT Magang" },
      { src: "/assets/internship-discussion.jpg", alt: "Kegiatan IT Support Magang" },
      { src: "/assets/internship-coding.jpg", alt: "Pengembangan Sistem SIMPEG" }
    ]
  },
  {
    id: "workshop-kaliber",
    period: "31 MAY 2025 · LSO KALIBER",
    role: "Workshop Event Chairman",
    company: "Ngoding Cerdas Bareng Python dengan Clean Code, Secure Code dan AI untuk Produktivitas",
    description: {
      id: "Memimpin koordinasi panitia dan eksekusi acara dari awal hingga akhir, mencakup alur kerja tim, pemateri, manajemen peserta, publikasi, dan komunikasi eksternal.",
      en: "Led committee coordination and end-to-end event execution, covering team workflow, speaker coordination, participant management, publication, and external communication."
    },
    contributions: {
      id: [
        "Mengkoordinasikan kepanitiaan dan 1 pemateri.",
        "Mengelola jalannya acara workshop yang dihadiri 50 peserta.",
        "Memastikan persiapan, pelaksanaan, dan penutupan acara berjalan sesuai rencana."
      ],
      en: [
        "Coordinated the committee and 1 speaker.",
        "Managed a workshop attended by 50 participants.",
        "Ensured preparation, execution, and closing activities ran according to plan."
      ]
    },
    tags: ["Leadership", "Project Coordination", "Workshop Management"],
    images: [
      { src: "/assets/workshop-leader.jpg", alt: "Dokumentasi Ketua Pelaksana Workshop" }
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "simpeg-karyawan",
    title: "SIMPEG - Karyawan Role",
    category: "Web Development",
    role: "ROLE 01",
    description: {
      id: "Antarmuka sisi karyawan untuk pengajuan dan akses layanan berdasarkan peran pengguna dan alur kerja.",
      en: "Employee-side interface for submitting and accessing services based on the assigned user role and workflow."
    },
    coverImage: "/assets/project-1.jpg",
    techStack: ["PHP", "MySQL", "User Access", "RBAC"],
    date: "2025"
  },
  {
    id: "simpeg-hrd",
    title: "SIMPEG - HRD Management",
    category: "Web Development",
    role: "ROLE 02",
    description: {
      id: "Antarmuka administratif untuk mengelola data karyawan, riwayat izin, dan alur kerja persetujuan.",
      en: "Administrative interface for managing employee information, leave records, and approval-related workflows."
    },
    coverImage: "/assets/project-2.jpg",
    techStack: ["PHP", "MySQL", "HR Management", "Workflows"],
    date: "2025"
  },
  {
    id: "simpeg-direktur",
    title: "SIMPEG - Direktur Dashboard",
    category: "Web Development",
    role: "ROLE 03",
    description: {
      id: "Dashboard tingkat manajemen untuk pemantauan informasi yang lebih luas dan pengawasan data sistem.",
      en: "Management-level dashboard for broader information monitoring and oversight of organizational system data."
    },
    coverImage: "/assets/project-3.jpg",
    techStack: ["PHP", "MySQL", "Oversight", "Dashboard"],
    date: "2025"
  }
];

export const TECHNICAL_PROJECTS = [
  {
    id: "01",
    title: "Network Simulation & Security",
    description: {
      id: "Merancang simulasi jaringan dengan VLAN, routing, kontrol akses, segmentasi jaringan, dan pengujian konektivitas.",
      en: "Designed network simulations with VLAN, routing, access control, network segmentation, and connectivity testing."
    },
    tags: ["Cisco Packet Tracer", "VLAN", "Routing"]
  },
  {
    id: "02",
    title: "Honeypot & Network Monitoring",
    description: {
      id: "Membangun simulasi lokal honeypot dan aktivitas port scanning serta menganalisis lalu lintas jaringan.",
      en: "Built local simulations involving honeypot and port scanning activities and analyzed network traffic and activity."
    },
    tags: ["Python", "Nmap", "Wireshark"]
  },
  {
    id: "03",
    title: "Web Application Security Testing",
    description: {
      id: "Melakukan pengujian keamanan terkontrol meliputi SQL Injection, brute-force, simulasi XSS, dan analisis mitigasi.",
      en: "Performed controlled security testing involving SQL Injection, brute-force, XSS simulation, and mitigation analysis."
    },
    tags: ["DVWA", "SQLMap", "Hydra"]
  },
  {
    id: "04",
    title: "WordPress Security & Red Teaming",
    description: {
      id: "Berpraktik pengujian keamanan WordPress di lingkungan terkontrol, analisis konfigurasi, dan konsep pasca-eksploitasi.",
      en: "Practiced WordPress security testing in a controlled environment, including configuration analysis and post-exploitation concepts."
    },
    tags: ["WordPress", "Linux", "Red Team"]
  }
];

export const CERTIFICATES: Certificate[] = [
  // --- CISCO NETWORKING ACADEMY ---
  {
    id: "cert-cisco-threat-mgmt",
    name: "Cyber Threat Management",
    issuer: "Cisco Networking Academy",
    category: "Cybersecurity",
    image: "/assets/certificates/Cyber_Threat_Management.jpg",
    description: {
      id: "Sertifikasi resmi Cisco dalam pengelolaan ancaman siber, analisis vektor serangan, dan strategi mitigasi risiko keamanan digital.",
      en: "Official Cisco certificate in cyber threat management, attack vector analysis, and digital security risk mitigation strategies."
    }
  },
  {
    id: "cert-cisco-net-defense",
    name: "Network Defense",
    issuer: "Cisco Networking Academy",
    category: "Cybersecurity",
    image: "/assets/certificates/Network_Defense.jpg",
    description: {
      id: "Sertifikasi pertahanan jaringan yang mencakup kontrol akses, teknologi firewall, IDS/IPS, dan pengamanan infrastruktur IT.",
      en: "Network defense certificate covering access control, firewall technologies, IDS/IPS, and IT infrastructure security."
    }
  },
  {
    id: "cert-cisco-endpoint-sec",
    name: "Endpoint Security",
    issuer: "Cisco Networking Academy",
    category: "Cybersecurity",
    image: "/assets/certificates/Endpoint_Security.jpg",
    description: {
      id: "Sertifikasi perlindungan endpoint yang berfokus pada pengamanan perangkat klien, pemantauan sistem, dan mitigasi malware.",
      en: "Endpoint protection certificate focusing on securing client devices, system monitoring, and malware mitigation."
    }
  },
  {
    id: "cert-cisco-net-support-sec",
    name: "Network Support and Security",
    issuer: "Cisco Networking Academy",
    category: "Network Engineering",
    image: "/assets/certificates/Network_Support_and_Security.jpg",
    description: {
      id: "Sertifikasi kombinasi dukungan operasional jaringan dan penerapan protokol keamanan dasar pada infrastruktur LAN/Wi-Fi.",
      en: "Combined certificate in operational network support and basic security protocol implementation for LAN/Wi-Fi infrastructure."
    }
  },
  {
    id: "cert-cisco-net-addressing",
    name: "Network Addressing and Basic Troubleshooting",
    issuer: "Cisco Networking Academy",
    category: "Network Engineering",
    image: "/assets/certificates/Network_Addressing_and_Basic_Troubleshooting.jpg",
    description: {
      id: "Sertifikasi pengalamatan IPv4/IPv6, subnetting, serta teknik pemecahan masalah konektivitas jaringan dasar.",
      en: "Certificate in IPv4/IPv6 addressing, subnetting, and foundational network connectivity troubleshooting techniques."
    }
  },
  {
    id: "cert-cisco-net-basics",
    name: "Networking Basics",
    issuer: "Cisco Networking Academy",
    category: "Network Engineering",
    image: "/assets/certificates/Networking_Basics.jpg",
    description: {
      id: "Sertifikasi pemahaman dasar arsitektur jaringan, topologi, model OSI & TCP/IP, serta konsep komunikasi data.",
      en: "Foundational certificate in network architecture, topologies, OSI & TCP/IP models, and data communication concepts."
    }
  },
  {
    id: "cert-cisco-hardware-upgrade",
    name: "Hardware and Upgrade Support",
    issuer: "Cisco Networking Academy",
    category: "IT Support",
    image: "/assets/certificates/Hardware_and_Upgrade_Support.jpg",
    description: {
      id: "Sertifikasi teknis dalam perawatan hardware komputer, upgrade komponen, pemeliharaan sistem, dan trouble-shooting fisik.",
      en: "Technical certificate in computer hardware maintenance, component upgrades, system servicing, and physical troubleshooting."
    }
  },
  {
    id: "cert-cisco-hardware-basics",
    name: "Computer Hardware Basics",
    issuer: "Cisco Networking Academy",
    category: "IT Support",
    image: "/assets/certificates/Computer_Hardware_Basics.jpg",
    description: {
      id: "Sertifikasi dasar-dasar arsitektur perangkat keras komputer, perakitan, dan fungsi komponen utama sistem.",
      en: "Certificate in computer hardware architecture fundamentals, assembly, and core system component functions."
    }
  },
  {
    id: "cert-cisco-customer-support",
    name: "IT Customer Support Basics",
    issuer: "Cisco Networking Academy",
    category: "IT Support",
    image: "/assets/certificates/IT_Customer_Support_Basics.jpg",
    description: {
      id: "Sertifikasi layanan bantuan teknis (helpdesk/support), komunikasi profesional, dan penanganan keluhan pengguna IT.",
      en: "Certificate in technical helpdesk support, professional communication, and IT user issue resolution."
    }
  },

  // --- ORGANISASI & KEPEMIMPINAN ---
  {
    id: "cert-kaliber-infoker",
    name: "Ketua Bidang Informasi dan Kerjasama (INFOKER)",
    issuer: "LSO KALIBER — Universitas Muhammadiyah Malang",
    category: "Leadership & Organization",
    image: "/assets/certificates/Muchamad_Gilang_Dwi_Saputra_LSO_KALIBER.jpg",
    description: {
      id: "Sertifikat penghargaan atas kontribusi sebagai Ketua Bidang INFOKER LSO KALIBER Fakultas Teknik UMM Periode 2024–2025.",
      en: "Certificate of appreciation as Head of Information & Cooperation Dept. (INFOKER) LSO KALIBER Faculty of Engineering UMM (2024–2025)."
    }
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
    skills: "Bahasa Indonesia (Native) · English (Basic Professional)"
  }
];