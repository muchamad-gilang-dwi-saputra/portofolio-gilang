export interface Project {
  id: string;
  title: string;
  category:
    | "Web Development"
    | "Network & Security"
    | "Scientific Publication"
    | "Technical Projects";
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
  cvPath: "/CV_Muchamad_Gilang_Dwi_Saputra.pdf",
  linkedin:
    "https://www.linkedin.com/in/muchamad-gilang-dwi-saputra-1b7766337/",
  github: "https://github.com/muchamad-gilang-dwi-saputra",
  instagram: "https://www.instagram.com/muchamad_gilang_dwi_saputra",
  role: {
    id: "Spesialis Keamanan Jaringan & Infrastruktur IT",
    en: "Network Security & IT Infrastructure Specialist",
  },
  bio: {
    id: "Lulusan Teknik Informatika UMM (IPK 3.83 / Predikat Cum Laude). Berfokus pada Keamanan Jaringan, Infrastruktur Sistem, dan Pengujian Keamanan Aplikasi. Memiliki rekam jejak praktis dalam menangani jaringan operasional skala besar, penguatan autentikasi web berbasis peran (RBAC), analisis trafik data, serta riset kriptografi password.",
    en: "Computer Science graduate from UMM (GPA 3.83 / Cum Laude). Dedicated to Network Security, System Infrastructure, and Application Security Testing. Proven hands-on record in operational network management, role-based web security hardening (RBAC), traffic analysis, and password cryptography research.",
  },
};

export const TRANSLATIONS = {
  id: {
    nav: {
      about: "Profil",
      experience: "Pengalaman",
      projects: "Proyek Utama",
      publication: "Riset Akademik",
      skills: "Keahlian Teknis",
      credentials: "Sertifikasi",
      contact: "Kontak",
    },
    badge: "TERBUKA UNTUK PELUANG KARIR PROFESIONAL",
    heroSubtitle: "REKAPITULASI PORTOFOLIO TEKNIS · 2026",
    ctaConnect: "Hubungi Saya",
    ctaExplore: "Jelajahi Pengalaman",
    ctaGithub: "Lihat GitHub",
    ctaDownloadCv: "Unduh CV PDF",
    metrics: {
      gpa: "IPK / 4.00 (Cum Laude)",
      research: "Publikasi Jurnal SINTA 3",
    },
    aboutTitle: "Pengalaman Praktis IT dengan Kedalaman Analisis Keamanan.",
    aboutDesc1:
      "Saya menggabungkan keahlian arsitektur jaringan, analisis keamanan siber, dan pengembangan sistem terintegrasi. Berfokus pada perancangan infrastruktur LAN/Wi-Fi yang andal, administrasi sistem Linux, analisis protokol TCP/IP, serta pengujian celah keamanan secara terkontrol.",
    aboutDesc2:
      "Telah sukses merancang dan mengimplementasikan aplikasi manajemen internal berbasis RBAC, mendukung operasional IT enterprise, mengonfigurasi perangkat keras jaringan MikroTik & Huawei, serta mempublikasikan hasil riset ilmiah di bidang keamanan sistem informasi.",
    expTitle: "Pengalaman Profesional, Rekayasa Teknis, & Kepemimpinan",
    projTitle: "Sistem Manajemen Informasi Pegawai (SIMPEG) Berbasis Peran",
    projDesc:
      "Arsitektur sistem web internal berbasis PHP & MySQL dengan enkapsulasi kontrol akses bertingkat (RBAC), alur persetujuan berkas dinamis, dan keamanan autentikasi ketat.",
    pubTitle: "Karya Akademik & Riset Keamanan Sistem Autentikasi",
    pubDetails:
      "Riset mandiri komparatif menganalisis kinerja dan ketahanan algoritma hashing Bcrypt, Argon2, dan PBKDF2 terhadap potensi serangan keamanan pada sistem informasi kepegawaian.",
    techProjTitle: "Implementasi Keamanan & Jaringan Terkontrol",
    skillsTitle: "Kumpulan Keahlian & Spesialisasi Teknis",
    credTitle: "Sertifikasi Profesional & Kredensial Resmi",
    contactTitle: "Mari Membangun Sinergi & Koneksi Profesional",
    contactDesc:
      "Terbuka untuk diskusi teknis, kolaborasi proyek cybersecurity, manajemen infrastruktur jaringan, serta peluang karir tingkat profesional.",
  },
  en: {
    nav: {
      about: "About",
      experience: "Experience",
      projects: "Core Projects",
      publication: "Research",
      skills: "Technical Skills",
      credentials: "Credentials",
      contact: "Contact",
    },
    badge: "OPEN FOR PROFESSIONAL OPPORTUNITIES",
    heroSubtitle: "TECHNICAL PORTFOLIO REVIEW · 2026",
    ctaConnect: "Let's Connect",
    ctaExplore: "Explore Experience",
    ctaGithub: "View GitHub",
    ctaDownloadCv: "Download CV PDF",
    metrics: {
      gpa: "GPA / 4.00 (Cum Laude)",
      apps: "Integrated Systems",
      research: "SINTA 3 Journal",
    },
    aboutTitle: "Practical IT Experience Grounded in Security Engineering.",
    aboutDesc1:
      "I bridge the gap between network architecture, cybersecurity analysis, and secure system engineering. Concentrated on designing resilient LAN/Wi-Fi infrastructures, Linux system administration, TCP/IP protocol analysis, and controlled penetration testing.",
    aboutDesc2:
      "Successfully built enterprise RBAC internal web applications, supported operational IT environments, configured MikroTik & Huawei network appliances, and published peer-reviewed cybersecurity research.",
    expTitle: "Professional, Engineering, & Leadership Experience",
    projTitle: "Role-Based Employee Information System (SIMPEG)",
    projDesc:
      "Enterprise internal web system leveraging PHP & MySQL, architected with strict multi-tiered Role-Based Access Control (RBAC), approval workflows, and hardened data management.",
    pubTitle: "Academic Research & Authentication Security Analysis",
    pubDetails:
      "Single-authored comparative research evaluating performance and resilience of Bcrypt, Argon2, and PBKDF2 hashing algorithms under web authentication threat models.",
    techProjTitle: "Controlled Security & Networking Practice",
    skillsTitle: "Core Technical Competencies",
    credTitle: "Professional Certifications & Credentials",
    contactTitle: "Let's Establish a Professional Connection",
    contactDesc:
      "Available for technical collaboration, cybersecurity infrastructure projects, network engineering, and career opportunities.",
  },
};

export const EXPERIENCES = [
  {
    id: "internship-kbs",
    period: "21 JULI 2025 — 21 AGUSTUS 2025",
    role: "IT Support, Network & Web Development Intern",
    company: "PD Taman Satwa Kebun Binatang Surabaya · Divisi IT",
    description: {
      id: "Bertanggung jawab atas keberlangsungan operasional infrastruktur IT enterprise, pemecahan masalah jaringan skala luas, pemeliharaan perangkat keras, dan pengembangan ekosistem aplikasi web internal.",
      en: "Responsible for enterprise IT operational continuity, large-scale network troubleshooting, hardware maintenance, and internal web ecosystem engineering.",
    },
    contributions: {
      id: [
        "Memantau, menganalisis, dan menangani gangguan konektivitas LAN/Wi-Fi operasional harian.",
        "Melakukan pemeliharaan dan konfigurasi teknis pada perangkat jaringan MikroTik dan Huawei.",
        "Memberikan dukungan teknis tingkat lanjut (Helpdesk Tier 1 & 2) untuk pengguna internal perusahaan.",
        "Merancang dan memproduksi 3 modul aplikasi web terintegrasi (PHP & MySQL) untuk Karyawan, HRD, dan Direksi.",
        "Mengimplementasikan skema autentikasi aman, enkapsulasi RBAC, validasi input, dan manajemen sesi.",
        "Mempresentasikan hasil evaluasi teknis dan arsitektur sistem di hadapan Tim IT dan Manajemen Senior.",
      ],
      en: [
        "Monitored, analyzed, and remediated daily operational LAN/Wi-Fi connectivity anomalies.",
        "Executed maintenance and technical configuration on MikroTik and Huawei network appliances.",
        "Provided advanced technical support (Helpdesk Tier 1 & 2) for corporate internal users.",
        "Architected and deployed 3 integrated web application modules (PHP & MySQL) for Staff, HR, and Executives.",
        "Implemented secure authentication schemes, RBAC encapsulation, input validation, and session management.",
        "Presented technical evaluation and system architecture directly to the IT Team and Executive Leadership.",
      ],
    },
    images: [
      { src: "/assets/foto/magang.jpg", alt: "Kolaborasi Tim IT Magang" },
      {
        src: "/assets/foto/internship-discussion.jpg",
        alt: "Inspeksi & Support Infrastruktur IT",
      },
      {
        src: "/assets/foto/internship-coding.jpg",
        alt: "Pengembangan Kode Sistem SIMPEG",
      },
      { src: "/assets/foto/magang 2.jpg", alt: "Dokumentasi Operasional IT" },
    ],
  },
  {
    id: "workshop-kaliber",
    period: "31 MEI 2025 · LSO KALIBER UMM",
    role: "Chairman of Event Committee",
    company:
      "Workshop: Ngoding Cerdas Bareng Python (Clean Code, Secure Code & AI Integration)",
    description: {
      id: "Memimpin perencanaan strategis, alokasi sumber daya, dan eksekusi teknis acara workshop pemrograman berskala fakultas.",
      en: "Led strategic planning, resource allocation, and technical execution for a faculty-wide programming workshop.",
    },
    contributions: {
      id: [
        "Mengordinasikan alur kerja seluruh divisi panitia pelaksana dan pembicara utama.",
        "Mengelola kelancaran teknis workshop interaktif yang dihadiri 50+ peserta.",
        "Memastikan implementasi standar acara teknis berjalan sesuai linimasa dan target sasaran.",
      ],
      en: [
        "Coordinated structural workflows across committee divisions and the keynote speaker.",
        "Managed operational execution of an interactive workshop attended by 50+ engineers.",
        "Ensured strict adherence to event timelines, technical standards, and delivery goals.",
      ],
    },
    tags: ["Leadership", "Project Management", "Event Execution"],
    images: [
      {
        src: "/assets/foto/workshop-leader.jpg",
        alt: "Dokumentasi Ketua Pelaksana Workshop",
      },
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    id: "simpeg-karyawan",
    title: "SIMPEG — Employee Portal",
    category: "Web Development",
    role: "MODULE 01",
    description: {
      id: "Portal mandiri karyawan untuk pengajuan izin, pemantauan riwayat kerja, dan akses enkapsulasi data sesuai otorisasi akun.",
      en: "Self-service employee portal for leave submission, attendance tracking, and access-controlled data retrieval.",
    },
    coverImage: "/assets/projects/project-1.jpg",
    techStack: ["PHP", "MySQL", "RBAC", "Form Validation"],
    date: "2025",
  },
  {
    id: "simpeg-hrd",
    title: "SIMPEG — Administrative Console",
    category: "Web Development",
    role: "MODULE 02",
    description: {
      id: "Konsol manajemen HRD untuk verifikasi berkas, pemrosesan persetujuan bertingkat, dan pengolahan data kepegawaian.",
      en: "Administrative HR console designed for document verification, multi-stage approval processing, and workforce analytics.",
    },
    coverImage: "/assets/projects/project-2.jpg",
    techStack: ["PHP", "MySQL", "Workflow Automation", "Data Filters"],
    date: "2025",
  },
  {
    id: "simpeg-direktur",
    title: "SIMPEG — Executive Dashboard",
    category: "Web Development",
    role: "MODULE 03",
    description: {
      id: "Dashboard eksekutif untuk pengawasan tingkat tinggi, ringkasan indikator kinerja, dan pengambilan keputusan berbasis data.",
      en: "High-level executive dashboard offering real-time metric summaries, organizational oversight, and decision-support views.",
    },
    coverImage: "/assets/projects/project-3.jpg",
    techStack: ["PHP", "MySQL", "Executive Reporting", "UI/UX"],
    date: "2025",
  },
];

export const TECHNICAL_PROJECTS = [
  {
    id: "01",
    title: "Enterprise Network Topology Simulation",
    description: {
      id: "Merancang simulasi arsitektur jaringan terfragmentasi dengan VLAN, inter-VLAN routing, Access Control List (ACL), dan analisis redundancy.",
      en: "Designed segmented enterprise network topology using VLANs, inter-VLAN routing, ACLs, and redundancy failover testing.",
    },
    tags: ["Cisco Packet Tracer", "VLAN", "ACL", "Subnetting"],
  },
  {
    id: "02",
    title: "Honeypot Deployment & Traffic Analysis",
    description: {
      id: "Membangun lingkungan honeypot lokal untuk merekam aktivitas port scanning, ekstraksi log serangan, dan analisis paket data.",
      en: "Deployed local honeypot environments to capture port scanning vectors, extract attack logs, and analyze packet payloads.",
    },
    tags: ["Python", "Wireshark", "Nmap", "Log Analysis"],
  },
  {
    id: "03",
    title: "Controlled Web Vulnerability Assessment",
    description: {
      id: "Melakukan audit keamanan aplikasi web terisolasi meliputi pengujian SQL Injection, simulasi XSS, dan rekomendasi mitigasi.",
      en: "Executed vulnerability assessment on isolated web apps testing SQL Injection, XSS payloads, and remediation strategies.",
    },
    tags: ["DVWA", "SQLMap", "Hydra", "OWASP Top 10"],
  },
  {
    id: "04",
    title: "Hardened WordPress & Red Team Auditing",
    description: {
      id: "Pengujian keamanan CMS terkontrol, audit kredensial, hardening berkas konfigurasi server, dan analisis pasca-eksploitasi.",
      en: "Controlled CMS penetration audit, credential testing, server configuration hardening, and post-exploitation analysis.",
    },
    tags: ["WordPress Security", "Linux Hardening", "Red Team"],
  },
];

export const CERTIFICATES: Certificate[] = [
  {
    id: "cert-cisco-threat-mgmt",
    name: "Cyber Threat Management",
    issuer: "Cisco Networking Academy",
    category: "Cybersecurity",
    image: "/assets/certificates/Cyber_Threat_Management.jpg",
    description: {
      id: "Sertifikasi resmi Cisco dalam identifikasi lanskap ancaman, analisis taktik serangan siber, dan perancangan strategi respons insiden.",
      en: "Official Cisco credential in threat landscape mapping, attack vector analysis, and incident response strategy formulation.",
    },
  },
  {
    id: "cert-cisco-net-defense",
    name: "Network Defense",
    issuer: "Cisco Networking Academy",
    category: "Cybersecurity",
    image: "/assets/certificates/Network_Defense.jpg",
    description: {
      id: "Spesialisasi pertahanan arsitektur jaringan, pengawasan lalu lintas data, konfigurasi Firewall, dan penanganan IDS/IPS.",
      en: "Specialized in network architecture defense, traffic monitoring, Firewall configurations, and IDS/IPS operations.",
    },
  },
  {
    id: "cert-cisco-endpoint-sec",
    name: "Endpoint Security",
    issuer: "Cisco Networking Academy",
    category: "Cybersecurity",
    image: "/assets/certificates/Endpoint_Security.jpg",
    description: {
      id: "Sertifikasi pengamanan node/endpoint, pemantauan integritas sistem operasi, analisis malware, dan enkripsi data.",
      en: "Credential focused on securing client nodes, OS integrity monitoring, malware mitigation, and data encryption principles.",
    },
  },
  {
    id: "cert-cisco-net-support-sec",
    name: "Network Support and Security",
    issuer: "Cisco Networking Academy",
    category: "Network Engineering",
    image: "/assets/certificates/Network_Support_and_Security.jpg",
    description: {
      id: "Kompetensi terpadu pemeliharaan operasional jaringan dan penerapan protokol keamanan infrastruktur LAN/Wi-Fi.",
      en: "Combined competency in operational network maintenance and security protocol deployment across LAN/Wi-Fi infrastructures.",
    },
  },
  {
    id: "cert-cisco-net-addressing",
    name: "Network Addressing & Troubleshooting",
    issuer: "Cisco Networking Academy",
    category: "Network Engineering",
    image:
      "/assets/certificates/Network_Addressing_and_Basic_Troubleshooting.jpg",
    description: {
      id: "Penguasaan skema pengalamatan IPv4/IPv6, kalkulasi subnetting presisi, dan analisis diagnostik kendala konektivitas.",
      en: "Mastery of IPv4/IPv6 addressing schemes, precise subnet calculation, and diagnostic network connectivity troubleshooting.",
    },
  },
  {
    id: "cert-cisco-net-basics",
    name: "Networking Basics",
    issuer: "Cisco Networking Academy",
    category: "Network Engineering",
    image: "/assets/certificates/Networking_Basics.jpg",
    description: {
      id: "Pemahaman mendalam fondasi arsitektur jaringan, topologi fisik/logis, serta spesifikasi model OSI & TCP/IP.",
      en: "Foundational mastery of network topology, physical/logical architectures, and OSI & TCP/IP reference stacks.",
    },
  },
  {
    id: "cert-cisco-hardware-upgrade",
    name: "Hardware and Upgrade Support",
    issuer: "Cisco Networking Academy",
    category: "IT Support",
    image: "/assets/certificates/Hardware_and_Upgrade_Support.jpg",
    description: {
      id: "Keahlian pemeliharaan fisik perangkat IT, analisis spesifikasi komponen, perbaikan hardware, dan peningkatan performa sistem.",
      en: "Expertise in physical IT hardware servicing, component specification auditing, hardware repairs, and system optimization.",
    },
  },
  {
    id: "cert-cisco-hardware-basics",
    name: "Computer Hardware Basics",
    issuer: "Cisco Networking Academy",
    category: "IT Support",
    image: "/assets/certificates/Computer_Hardware_Basics.jpg",
    description: {
      id: "Prinsip dasar arsitektur perangkat keras, bus antarmuka, perakitan komputer, dan pengujian keandalan komponen.",
      en: "Core principles of hardware architecture, system buses, computer assembly, and component reliability testing.",
    },
  },
  {
    id: "cert-cisco-customer-support",
    name: "IT Customer Support Basics",
    issuer: "Cisco Networking Academy",
    category: "IT Support",
    image: "/assets/certificates/IT_Customer_Support_Basics.jpg",
    description: {
      id: "Standar komunikasi teknis profesional, manajemen tiket bantuan IT, dan penyelesaian masalah pengguna sistem.",
      en: "Professional technical communication standards, IT ticketing management, and systematic end-user problem resolution.",
    },
  },
  {
    id: "cert-cisco-networking-devices",
    name: "Networking Devices & Initial Config",
    issuer: "Cisco Networking Academy",
    category: "Network Engineering",
    image:
      "/assets/certificates/Networking_Devices_and_Initial_Configuration.jpg",
    description: {
      id: "Konfigurasi tingkat dasar hingga menengah untuk peranti Switch dan Router Cisco via Command Line Interface (CLI).",
      en: "Foundational to intermediate CLI configuration for Cisco Switches and Routers operational management.",
    },
  },
  {
    id: "cert-cisco-os-basics",
    name: "Operating Systems Basics",
    issuer: "Cisco Networking Academy",
    category: "IT Support",
    image: "/assets/certificates/Operating_Systems_Basics.jpg",
    description: {
      id: "Fondasi struktural sistem operasi enterprise (Linux & Windows), manajemen memori, dan kontrol eksekusi proses.",
      en: "Structural foundations of enterprise OS platforms (Linux & Windows), memory management, and process control.",
    },
  },
  {
    id: "cert-cisco-os-support",
    name: "Operating Systems Support",
    issuer: "Cisco Networking Academy",
    category: "IT Support",
    image: "/assets/certificates/Operating_Systems_Support.jpg",
    description: {
      id: "Dukungan teknis mendalam untuk isolasi kesalahan perangkat lunak, konfigurasi sistem, dan penanganan gangguan registri/kernel.",
      en: "Advanced technical support for software fault isolation, system provisioning, and registry/kernel troubleshooting.",
    },
  },
  {
    id: "cert-cisco-security-connectivity-support",
    name: "Security and Connectivity Support",
    issuer: "Cisco Networking Academy",
    category: "Cybersecurity",
    image:
      "/assets/certificates/Security_and_Connectivity_Support.jpg",
    description: {
      id: "Penanganan dukungan konektivitas aman, analisis enkripsi saluran komunikasi, dan verifikasi sertifikat digital.",
      en: "Technical execution of secure link support, communication encryption validation, and digital certificate verification.",
    },
  },
  {
    id: "cert-kaliber-infoker",
    name: "Ketua Bidang Informasi & Kerjasama (INFOKER)",
    issuer: "LSO KALIBER — Universitas Muhammadiyah Malang",
    category: "Leadership",
    image: "/assets/certificates/Muchamad_Gilang_Dwi_Saputra_LSO_KALIBER.jpg",
    description: {
      id: "Penghargaan kepemimpinan atas pencapaian mengarahkan strategi publikasi teknis dan kemitraan organisasi periode 2024–2025.",
      en: "Leadership award for directing technical publication strategy and organizational partnership initiatives (2024–2025).",
    },
  },
];

export const SKILLS_CATEGORIES = [
  {
    title: "Network Engineering",
    skills:
      "Computer Networking · TCP/IP Stack · LAN/Wi-Fi Architecture · VLAN Segmentation · Inter-VLAN Routing · MikroTik RouterOS · Cisco Packet Tracer · Network Diagnostics & Troubleshooting",
  },
  {
    title: "Cybersecurity & Defense",
    skills:
      "Network Security · Web Application Vulnerability Assessment · Penetration Testing Fundamentals · Nmap Scanning · Wireshark Packet Analysis · Cryptographic Password Hashing (Bcrypt, Argon2, PBKDF2)",
  },
  {
    title: "Development & Databases",
    skills:
      "Python · PHP · MySQL · Role-Based Access Control (RBAC) · Secure Authentication · Session Security · Input Sanitization & Validation",
  },
  {
    title: "Operating Systems & Admin",
    skills:
      "Linux Systems (Ubuntu/Debian) · Windows Server/Desktop · CLI Administration · Environment Troubleshooting",
  },
  {
    title: "Leadership & Management",
    skills:
      "Technical Leadership · Strategic Event Management · Team Coordination · Analytical Problem Solving · Communication",
  },
  {
    title: "Languages",
    skills: "Bahasa Indonesia (Native) · English (Professional Technical Working Proficiency)",
  },
];