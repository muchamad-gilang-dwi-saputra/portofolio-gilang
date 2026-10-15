export interface Project {
  id: string;
  title: string;
  category: string;
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
  gpa: "3.83 / 4.00",
  email: "gilangdwisaputra63@gmail.com",
  phone: "085736426514",
  location: "Jombang, Jawa Timur, Indonesia",
  cvPath: "/CV_Muchamad_Gilang_Dwi_Saputra.pdf",
  linkedin: "https://www.linkedin.com/in/muchamad-gilang-dwi-saputra-1b7766337/",
  github: "https://github.com/muchamad-gilang-dwi-saputra",
  instagram: "https://www.instagram.com/muchamad_gilang_dwi_saputra",
  role: "Spesialis Keamanan Jaringan & Infrastruktur IT",
  bio: "Lulusan Teknik Informatika UMM (IPK 3.83 / Predikat Cum Laude). Berfokus pada Keamanan Jaringan, Infrastruktur Sistem, dan Pengujian Keamanan Aplikasi. Memiliki rekam jejak praktis dalam menangani jaringan operasional skala besar, penguatan autentikasi web berbasis peran (RBAC), analisis trafik data, serta riset kriptografi password.",
};

export const CONTENT = {
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
};

export const EXPERIENCES = [
  {
    id: "internship-kbs",
    period: "21 JULI 2025 — 21 AGUSTUS 2025",
    role: "IT Support, Network & Web Development Intern",
    company: "PD Taman Satwa Kebun Binatang Surabaya · Divisi IT",
    description:
      "Bertanggung jawab atas keberlangsungan operasional infrastruktur IT enterprise, pemecahan masalah jaringan skala luas, pemeliharaan perangkat keras, dan pengembangan ekosistem aplikasi web internal.",
    contributions: [
      "Memantau, menganalisis, dan menangani gangguan konektivitas LAN/Wi-Fi operasional harian.",
      "Melakukan pemeliharaan dan konfigurasi teknis pada perangkat jaringan MikroTik dan Huawei.",
      "Memberikan dukungan teknis tingkat lanjut (Helpdesk Tier 1 & 2) untuk pengguna internal perusahaan.",
      "Merancang dan memproduksi 3 modul aplikasi web terintegrasi (PHP & MySQL) untuk Karyawan, HRD, dan Direksi.",
      "Mengimplementasikan skema autentikasi aman, enkapsulasi RBAC, validasi input, dan manajemen sesi.",
      "Mempresentasikan hasil evaluasi teknis dan arsitektur sistem di hadapan Tim IT dan Manajemen Senior.",
    ],
    images: [
      { src: "/assets/foto/magang.jpg", alt: "Kolaborasi Tim IT Magang" },
      { src: "/assets/foto/internship-discussion.jpg", alt: "Inspeksi & Support Infrastruktur IT" },
      { src: "/assets/foto/internship-coding.jpg", alt: "Pengembangan Kode Sistem SIMPEG" },
      { src: "/assets/foto/magang 2.jpg", alt: "Dokumentasi Operasional IT" },
    ],
  },
  {
    id: "workshop-kaliber",
    period: "31 MEI 2025 · LSO KALIBER UMM",
    role: "Ketua Pelaksana Acara (Ketupel)",
    company: "Workshop: Ngoding Cerdas Bareng Python (Clean Code, Secure Code & AI Integration)",
    description:
      "Memimpin perencanaan strategis, alokasi sumber daya, dan eksekusi teknis acara workshop pemrograman berskala fakultas.",
    contributions: [
      "Mengordinasikan alur kerja seluruh divisi panitia pelaksana dan pembicara utama.",
      "Mengelola kelancaran teknis workshop interaktif yang dihadiri 50+ peserta.",
      "Memastikan implementasi standar acara teknis berjalan sesuai linimasa dan target sasaran.",
    ],
    tags: ["Kepemimpinan", "Manajemen Proyek", "Eksekusi Acara"],
    images: [
      { src: "/assets/foto/workshop-leader.jpg", alt: "Dokumentasi Ketua Pelaksana Workshop" },
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    id: "simpeg-karyawan",
    title: "SIMPEG — Portal Karyawan",
    category: "Web Development",
    role: "MODUL 01",
    description:
      "Portal mandiri karyawan untuk pengajuan izin, pemantauan riwayat kerja, dan akses enkapsulasi data sesuai otorisasi akun.",
    coverImage: "/assets/projects/project-1.jpg",
    techStack: ["PHP", "MySQL", "RBAC", "Validasi Form"],
    date: "2025",
  },
  {
    id: "simpeg-hrd",
    title: "SIMPEG — Konsol Administrasi",
    category: "Web Development",
    role: "MODUL 02",
    description:
      "Konsol manajemen HRD untuk verifikasi berkas, pemrosesan persetujuan bertingkat, dan pengolahan data kepegawaian.",
    coverImage: "/assets/projects/project-2.jpg",
    techStack: ["PHP", "MySQL", "Otomatisasi Alur", "Filter Data"],
    date: "2025",
  },
  {
    id: "simpeg-direktur",
    title: "SIMPEG — Dashboard Eksekutif",
    category: "Web Development",
    role: "MODUL 03",
    description:
      "Dashboard eksekutif untuk pengawasan tingkat tinggi, ringkasan indikator kinerja, dan pengambilan keputusan berbasis data.",
    coverImage: "/assets/projects/project-3.jpg",
    techStack: ["PHP", "MySQL", "Pelaporan Eksekutif", "UI/UX"],
    date: "2025",
  },
];

export const TECHNICAL_PROJECTS = [
  {
    id: "01",
    title: "Simulasi Topologi Jaringan Enterprise",
    description:
      "Merancang simulasi arsitektur jaringan terfragmentasi dengan VLAN, inter-VLAN routing, Access Control List (ACL), dan analisis redundancy.",
    tags: ["Cisco Packet Tracer", "VLAN", "ACL", "Subnetting"],
  },
  {
    id: "02",
    title: "Implementasi Honeypot & Analisis Trafik",
    description:
      "Membangun lingkungan honeypot lokal untuk merekam aktivitas port scanning, ekstraksi log serangan, dan analisis paket data.",
    tags: ["Python", "Wireshark", "Nmap", "Analisis Log"],
  },
  {
    id: "03",
    title: "Audit Keamanan Web Terkontrol",
    description:
      "Melakukan audit keamanan aplikasi web terisolasi meliputi pengujian SQL Injection, simulasi XSS, dan rekomendasi mitigasi.",
    tags: ["DVWA", "SQLMap", "Hydra", "OWASP Top 10"],
  },
  {
    id: "04",
    title: "Hardening WordPress & Audit Red Team",
    description:
      "Pengujian keamanan CMS terkontrol, audit kredensial, hardening berkas konfigurasi server, dan analisis pasca-eksploitasi.",
    tags: ["Keamanan WordPress", "Hardening Linux", "Red Team"],
  },
];

export const CERTIFICATES: Certificate[] = [
  {
    id: "cert-cisco-threat-mgmt",
    name: "Cyber Threat Management",
    issuer: "Cisco Networking Academy",
    category: "Cybersecurity",
    image: "/assets/certificates/Cyber_Threat_Management.jpg",
    description:
      "Sertifikasi resmi Cisco dalam identifikasi lanskap ancaman, analisis taktik serangan siber, dan perancangan strategi respons insiden.",
  },
  {
    id: "cert-cisco-net-defense",
    name: "Network Defense",
    issuer: "Cisco Networking Academy",
    category: "Cybersecurity",
    image: "/assets/certificates/Network_Defense.jpg",
    description:
      "Spesialisasi pertahanan arsitektur jaringan, pengawasan lalu lintas data, konfigurasi Firewall, dan penanganan IDS/IPS.",
  },
  {
    id: "cert-cisco-endpoint-sec",
    name: "Endpoint Security",
    issuer: "Cisco Networking Academy",
    category: "Cybersecurity",
    image: "/assets/certificates/Endpoint_Security.jpg",
    description:
      "Sertifikasi pengamanan node/endpoint, pemantauan integritas sistem operasi, analisis malware, dan enkripsi data.",
  },
  {
    id: "cert-cisco-net-support-sec",
    name: "Network Support and Security",
    issuer: "Cisco Networking Academy",
    category: "Network Engineering",
    image: "/assets/certificates/Network_Support_and_Security.jpg",
    description:
      "Kompetensi terpadu pemeliharaan operasional jaringan dan penerapan protokol keamanan infrastruktur LAN/Wi-Fi.",
  },
  {
    id: "cert-cisco-net-addressing",
    name: "Network Addressing & Troubleshooting",
    issuer: "Cisco Networking Academy",
    category: "Network Engineering",
    image: "/assets/certificates/Network_Addressing_and_Basic_Troubleshooting.jpg",
    description:
      "Penguasaan skema pengalamatan IPv4/IPv6, kalkulasi subnetting presisi, dan analisis diagnostik kendala konektivitas.",
  },
  {
    id: "cert-cisco-net-basics",
    name: "Networking Basics",
    issuer: "Cisco Networking Academy",
    category: "Network Engineering",
    image: "/assets/certificates/Networking_Basics.jpg",
    description:
      "Pemahaman mendalam fondasi arsitektur jaringan, topologi fisik/logis, serta spesifikasi model OSI & TCP/IP.",
  },
  {
    id: "cert-cisco-hardware-upgrade",
    name: "Hardware and Upgrade Support",
    issuer: "Cisco Networking Academy",
    category: "IT Support",
    image: "/assets/certificates/Hardware_and_Upgrade_Support.jpg",
    description:
      "Keahlian pemeliharaan fisik perangkat IT, analisis spesifikasi komponen, perbaikan hardware, dan peningkatan performa sistem.",
  },
  {
    id: "cert-cisco-hardware-basics",
    name: "Computer Hardware Basics",
    issuer: "Cisco Networking Academy",
    category: "IT Support",
    image: "/assets/certificates/Computer_Hardware_Basics.jpg",
    description:
      "Prinsip dasar arsitektur perangkat keras, bus antarmuka, perakitan komputer, dan pengujian keandalan komponen.",
  },
  {
    id: "cert-cisco-customer-support",
    name: "IT Customer Support Basics",
    issuer: "Cisco Networking Academy",
    category: "IT Support",
    image: "/assets/certificates/IT_Customer_Support_Basics.jpg",
    description:
      "Standar komunikasi teknis profesional, manajemen tiket bantuan IT, dan penyelesaian masalah pengguna sistem.",
  },
  {
    id: "cert-cisco-networking-devices",
    name: "Networking Devices & Initial Config",
    issuer: "Cisco Networking Academy",
    category: "Network Engineering",
    image: "/assets/certificates/Networking_Devices_and_Initial_Configuration.jpg",
    description:
      "Konfigurasi tingkat dasar hingga menengah untuk peranti Switch dan Router Cisco via Command Line Interface (CLI).",
  },
  {
    id: "cert-cisco-os-basics",
    name: "Operating Systems Basics",
    issuer: "Cisco Networking Academy",
    category: "IT Support",
    image: "/assets/certificates/Operating_Systems_Basics.jpg",
    description:
      "Fondasi struktural sistem operasi enterprise (Linux & Windows), manajemen memori, dan kontrol eksekusi proses.",
  },
  {
    id: "cert-cisco-os-support",
    name: "Operating Systems Support",
    issuer: "Cisco Networking Academy",
    category: "IT Support",
    image: "/assets/certificates/Operating_Systems_Support.jpg",
    description:
      "Dukungan teknis mendalam untuk isolasi kesalahan perangkat lunak, konfigurasi sistem, dan penanganan gangguan registri/kernel.",
  },
  {
    id: "cert-cisco-security-connectivity-support",
    name: "Security and Connectivity Support",
    issuer: "Cisco Networking Academy",
    category: "Cybersecurity",
    image: "/assets/certificates/Security_and_Connectivity_Support.jpg",
    description:
      "Penanganan dukungan konektivitas aman, analisis enkripsi saluran komunikasi, dan verifikasi sertifikat digital.",
  },
  {
    id: "cert-kaliber-infoker",
    name: "Ketua Bidang Informasi & Kerjasama (INFOKER)",
    issuer: "LSO KALIBER — Universitas Muhammadiyah Malang",
    category: "Kepemimpinan",
    image: "/assets/certificates/Muchamad_Gilang_Dwi_Saputra_LSO_KALIBER.jpg",
    description:
      "Penghargaan kepemimpinan atas pencapaian mengarahkan strategi publikasi teknis dan kemitraan organisasi periode 2024–2025.",
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
      "Kepemimpinan Teknis · Manajemen Acara Strategis · Koordinasi Tim · Pemecahan Masalah Analitis · Komunikasi Profesional",
  },
];