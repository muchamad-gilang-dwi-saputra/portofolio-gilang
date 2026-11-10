export interface Project {
  id: string;
  title: string;
  category: string;
  role: string;
  description: string;
  coverImage: string;
  images?: string[]; // <--- Tambahkan ini untuk menampung banyak gambar
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
  linkedin:
    "https://www.linkedin.com/in/muchamad-gilang-dwi-saputra-1b7766337/",
  github: "https://github.com/muchamad-gilang-dwi-saputra",
  role: "Cyber Security & Network Engineer | S1 Informatika (Cum Laude) | Qualys & Fortinet Certified",
  bio: "Lulusan S1 Informatika (Cum Laude) dengan spesialisasi di bidang Keamanan Siber dan Infrastruktur Jaringan. Memegang lisensi sertifikasi global dari Qualys, Fortinet, dan OPSWAT.",
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
  aboutTitle: "Membangun & Mengamankan Infrastruktur Digital.",
  aboutDescriptions: [
    "Saya lulusan S1 Informatika (Cum Laude) yang berfokus pada Infrastruktur Jaringan dan Keamanan Siber. Bagi saya, mengamankan sistem bukan sekadar menjalankan skrip otomatis, melainkan memahami arsitektur jaringan secara mendalam dan menutup celah sebelum ancaman muncul.",
    "Fondasi teori saya dibuktikan lewat publikasi riset Jurnal SINTA 3 tentang enkripsi sandi dan deretan sertifikasi global dari Cisco, Fortinet, Qualys, serta OPSWAT. Secara praktis, saya berpengalaman langsung di PDTS KBS mengelola operasional jaringan harian, troubleshooting LAN/WLAN, hingga konfigurasi perangkat multi-vendor (MikroTik, Huawei, ZTE).",
    "Di luar bidang teknis, pengalaman memimpin divisi organisasi dan menjadi Ketua Pelaksana workshop IT mengasah kemampuan komunikasi serta manajemen tim saya. Saya siap membawa kombinasi keahlian teknis dan energi positif ini untuk menjaga stabilitas operasional IT perusahaan.",
  ],
  expTitle: "Pengalaman Profesional, Rekayasa Teknis, & Kepemimpinan",
  projTitle: "Sistem Manajemen Informasi Pegawai (SIMPEG) Berbasis Peran",
  projDesc:
    "Arsitektur sistem web internal berbasis PHP & MySQL dengan enkapsulasi kontrol akses bertingkat (RBAC), alur persetujuan berkas dinamis, dan keamanan autentikasi ketat.",
  pubTitle: "Karya Akademik & Riset Keamanan Sistem Autentikasi",
  pubDetails:
    "Penulis Utama (Jurnal SINTA 3). Menguji ketahanan algoritma Bcrypt, Argon2, dan PBKDF2 melalui simulasi peretasan (Dictionary Attack) menggunakan GPU NVIDIA & Hashcat. Merumuskan rekomendasi arsitektur penyimpanan kredensial yang optimal untuk mengamankan data sensitif pegawai (DOI: 10.30591/jpit.v11i2.10280).",
  techProjTitle: "Implementasi Keamanan & Jaringan Terkontrol",
  skillsTitle: "Skills",
  credTitle: "Sertifikasi Profesional & Kredensial Resmi",
  contactTitle: "Mari Terhubung & Bicara Peluang Kerja",
  contactDesc:
    "Saya siap berkontribusi penuh untuk posisi IT Support, Network Engineer,Network Security, dan NOC. Silakan hubungi saya untuk mendiskusikan bagaimana kualifikasi saya dapat menjawab kebutuhan tim Anda.",
};

export const EXPERIENCES = [
  {
    id: "internship-kbs",
    period: "21 JULI 2025 — 21 AGUSTUS 2025",
    role: "Network Administrator & IT Developer Intern",
    company: "PD Taman Satwa Kebun Binatang Surabaya (PDTS KBS) · Divisi IT",
    description:
      "Bertanggung jawab atas keberlangsungan operasional jaringan enterprise, pemecahan masalah konektivitas, serta merancang & mengembangkan Sistem Informasi Kepegawaian (SIMPEG / HRIS) berbasis peran (RBAC) untuk 24 departemen.",
    contributions: [
      "Optimasi Jaringan: Memonitoring & menganalisis trafik menggunakan Wireshark & inSSIDer, berhasil menekan packet loss dari 11,5% menjadi 0% serta menstabilkan latency/ping.",
      "Manajemen Hardware: Mengelola & mengonfigurasi perangkat multi-vendor (MikroTik, TP-Link, Huawei, ZTE) serta merapikan frekuensi Wi-Fi (2.4GHz & 5GHz) untuk mencegah interferensi.",
      "Hardening Keamanan: Mengaktifkan DoS Protection dan Firewall (Level High) pada router utama untuk mengamankan jaringan dari serangan brute-force.",
      "SIMPEG Modul 01 (Portal Karyawan): Merancang fitur mandiri pengajuan izin, pemantauan riwayat kerja, dan enkapsulasi akses data sesuai otorisasi akun.",
      "SIMPEG Modul 02 (Konsol Administrasi HRD): Membangun konsol verifikasi berkas, pemrosesan persetujuan bertingkat, dan pengolahan data kepegawaian.",
      "SIMPEG Modul 03 (Dashboard Eksekutif Direksi): Membuat dashboard pengawasan tingkat tinggi, ringkasan indikator kinerja, dan pelaporan keputusan berbasis data.",
      "Presentasi Eksekutif: Mempresentasikan hasil evaluasi infrastruktur dan arsitektur web SIMPEG di hadapan Tim IT, HRD, dan Direktur Utama.",
    ],
    tags: [
      "MikroTik",
      "Huawei",
      "ZTE",
      "Wireshark",
      "PHP & MySQL",
      "RBAC",
      "SIMPEG / HRIS",
    ],
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
      {
        src: "/assets/projects/project-1.jpg",
        alt: "SIMPEG — Portal Karyawan",
      },
      {
        src: "/assets/projects/project-2.jpg",
        alt: "SIMPEG — Konsol Administrasi HRD",
      },
      {
        src: "/assets/projects/project-3.jpg",
        alt: "SIMPEG — Dashboard Eksekutif",
      },
    ],
  },
  {
    id: "workshop-kaliber",
    period: "NOVEMBER 2024 — JUNI 2025",
    role: "Ketua Bidang INFOKER & Ketua Pelaksana",
    company: "LSO KALIBER — Fakultas Teknik UMM",
    description:
      "Memimpin perancangan program kerja divisi, mengelola kemitraan strategis lembaga, dan memimpin eksekusi acara teknis skala fakultas.",
    contributions: [
      "Memimpin 6 anggota divisi untuk merencanakan dan menyusun riset konten edukasi IT (EDUTEKNIKA) untuk publikasi organisasi.",
      "Mengelola kemitraan strategis dan menyusun dokumen MoU dengan pihak kampus (HMIF UMM) serta komunitas eksternal (Malang Hacker Link).",
      "Menjadi Ketua Pelaksana workshop 'Ngoding Cerdas Bareng Python', memimpin seluruh panitia dari tahap persiapan hingga sukses dieksekusi oleh 50 peserta.",
    ],
    tags: ["Kepemimpinan", "Kemitraan (MoU)", "Manajemen Proyek"],
    images: [
      {
        src: "/assets/foto/workshop-leader.jpg",
        alt: "Dokumentasi Ketua Pelaksana Workshop",
      },
      {
        src: "/assets/certificates/Muchamad_Gilang_Dwi_Saputra_LSO_KALIBER.jpg",
        alt: "Sertifikat Kepemimpinan INFOKER LSO KALIBER",
      },
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    id: "noc-dashboard",
    title: "Enterprise NOC & Uptime Monitoring Dashboard",
    category: "Network Operations & Security",
    role: "MODUL UTAMA",
    description:
      "Sistem pemantauan jaringan real-time untuk ICMP Latency dan Throughput. Menampilkan metrik ketersediaan host (uptime) dan analisis jitter jaringan secara langsung untuk memitigasi downtime infrastruktur kritis (SIMRS/ERP).",
    coverImage:
      "/assets/projects/Enterprise NOC & Uptime Monitoring Dashboard.jpg",
    techStack: ["Python", "Streamlit", "Plotly", "psutil", "Nmap"],
    externalLink:
      "https://github.com/muchamad-gilang-dwi-saputra/noc-network-dashboard",
    date: "2026",
  },
  {
    id: "network-auto-backup",
    title: "Automated Network Config Backup & Versioning",
    category: "Network Automation",
    role: "MODUL INFRASTRUKTUR",
    description:
      "Sistem otomatisasi pencadangan konfigurasi router multi-vendor (MikroTik/Cisco) secara terjadwal. Terintegrasi dengan GitHub (Version Controller) untuk disaster recovery dan notifikasi Telegram real-time.",
    coverImage: "/assets/projects/project-auto-backup.jpg",
    techStack: ["Python", "Netmiko", "Git", "Telegram API"],
    date: "2026",
  },
  {
    id: "cryptographic-hash-auditor",
    title: "Sistem Pemeriksa Kekuatan Sandi & Enkripsi",
    category: "Cybersecurity & Cryptography",
    role: "RISET TERAPAN SINTA 3 SAYA",
    description:
      "Aplikasi pengujian kerumitan kata sandi (Entropi Shannon) dan komparasi latensi enkripsi (Bcrypt, Argon2id, SHA-256, MD5). Dilengkapi analisis ketahanan peretasan real-time serta fitur ekspor laporan kepatuhan ISO 27001 dalam format JSON.",
    coverImage: "/assets/projects/foto-cryptographic-hash-auditor.jpg",
    techStack: [
      "Python",
      "Streamlit",
      "Argon2",
      "Bcrypt",
      "Plotly",
      "ISO 27001",
    ],
    externalLink:
      "https://github.com/muchamad-gilang-dwi-saputra/cryptographic-hash-auditor.git", // Sesuaikan dengan repo spesifiknya
    date: "2026",
  },
  {
    id: "mini-siem-ips",
    title: "Enterprise Mini-SIEM & Automated Active Response",
    category: "Cybersecurity & Network Automation",
    role: "MODUL KEAMANAN SIBER & IPS",
    description:
      "Sistem Intrusion Detection & Prevention System (IDS/IPS) otomatis berbasis Python & Netmiko. Berfungsi menganalisis log akses secara real-time untuk mendeteksi ancaman SSH Brute-Force, mengeksekusi mitigasi aktif dengan menyuntikkan rule Firewall (Address-List Drop) ke MikroTik RouterOS via SSH, serta menyediakan dashboard monitoring Command Center interaktif berbasis Streamlit.",
    coverImage: "/assets/projects/mini_siem_ips_1.jpg",
    images: [
      "/assets/projects/mini_siem_ips_1.jpg", // Gambar 1: Streamlit Dashboard
      "/assets/projects/mini_siem_ips_2.jpg", // Gambar 2: CLI SSH MikroTik Verification
    ],
    techStack: [
      "Python 3.12",
      "Netmiko",
      "MikroTik RouterOS",
      "Streamlit",
      "SSH",
      "Regex",
      "Pandas",
    ],
    externalLink:
      "https://github.com/muchamad-gilang-dwi-saputra/Mini-SIEM-IPS.git",
    date: "2026",
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
    image:
      "/assets/certificates/Network_Addressing_and_Basic_Troubleshooting.jpg",
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
    image:
      "/assets/certificates/Networking_Devices_and_Initial_Configuration.jpg",
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
];

export const SKILLS_CATEGORIES = [
  {
    title: "Network Engineering & Hardware",
    skills:
      "Infrastruktur LAN/WLAN · TCP/IP · VLAN · Routing & Switching · Troubleshooting & Monitoring Jaringan · MikroTik · TP-Link · Huawei · ZTE · Cisco Packet Tracer",
  },
  {
    title: "Cybersecurity & Pentesting",
    skills:
      "Network Security · Web Application Security · Penetration Testing · Nmap · Wireshark · inSSIDer · Burp Suite · John The Ripper · Hashcat",
  },
  {
    title: "Cryptography & Data Security",
    skills:
      "Password Hashing (MD5, SHA-256, SHA-512) · Advanced Cryptography (Bcrypt, Argon2, PBKDF2) · Role-Based Access Control (RBAC) · Secure Session Management",
  },
  {
    title: "Development & Systems",
    skills:
      "Python (Scripting/Automation) · PHP · MySQL · HTML/CSS · JavaScript · Linux OS · Windows OS · Git & GitHub · Vercel · Tailwind CSS",
  },

  {
    title: "Soft Skills",
    skills:
      "Kepemimpinan & Koordinasi Tim · Komunikasi Profesional · Manajemen Proyek & Acara · Analytical Problem Solving · Critical Thinking · Adaptability",
  },
];
