export interface Project {
  id: string;
  title: string;
  category: 'Web Development' | 'Network & Security' | 'Scientific Publication' | 'Documentation';
  role: string;
  description: string;
  coverImage: string;
  techStack: string[];
  externalLink?: string;
  featured: boolean;
  date: string;
}

export interface Certificate {
  id: string;
  name: string;
  issuer: string;
  category: 'Cybersecurity' | 'Network Engineering' | 'IT Support' | 'Leadership';
  image: string;
  credentialUrl?: string;
  issueDate: string;
  featured: boolean;
}

export const PROFILE = {
  name: "Muchamad Gilang Dwi Saputra, S.Kom.",
  role: "Network Engineering | Cybersecurity | Full-Stack Developer",
  bio: "Lulusan Sarjana Komputer UMM (IPK 3.83 / Cum Laude). Berpengalaman dalam pengelolaan jaringan LAN/Wi-Fi, pengujian keamanan aplikasi web, serta pengembangan sistem terintegrasi dengan RBAC & secure authentication.",
  email: "gilangdwisaputra63@gmail.com",
  phone: "085736426514",
  location: "Jombang / Malang / Surabaya, Indonesia",
  github: "https://github.com/",
  linkedin: "https://linkedin.com/in/",
};

export const PROJECTS: Project[] = [
  {
    id: "simpeg-pdts-kbs",
    title: "Aplikasi Web SIMPEG Terintegrasi (PDTS KBS)",
    category: "Web Development",
    role: "Full-Stack Developer & Security Lead (Magang)",
    description: "Mengembangkan 3 aplikasi web terintegrasi untuk Karyawan, HRD, dan Direktur di Kebun Binatang Surabaya. Dilengkapi fitur RBAC, input validation, approval workflow, dan dashboard pemantauan.",
    coverImage: "/images/projects/simpeg.jpg",
    techStack: ["PHP", "MySQL", "RBAC", "Session Management", "Input Validation"],
    featured: true,
    date: "2025"
  },
  {
    id: "jurnal-sinta-3-hashing",
    title: "Perbandingan Bcrypt, Argon2, dan PBKDF2 pada Keamanan SIMPEG",
    category: "Scientific Publication",
    role: "Penulis Utama — Terindeks SINTA 3",
    description: "Publikasi ilmiah pada Jurnal Informatika (Vol. 11 No. 2) menganalisis performa dan ketahanan algoritma password hashing pada sistem informasi kepegawaian berbasis web.",
    coverImage: "/images/projects/journal.jpg",
    techStack: ["Bcrypt", "Argon2", "PBKDF2", "Web Security", "Python"],
    externalLink: "https://doi.org/10.30591/jpit.v11i2.10280",
    featured: true,
    date: "2026"
  },
  {
    id: "honeypot-network-monitoring",
    title: "Simulasi Honeypot & Pemantauan Jaringan",
    category: "Network & Security",
    role: "Security Researcher",
    description: "Mengembangkan simulasi honeypot dan port scanning di lingkungan jaringan lokal serta menganalisis lalu lintas data mencurigakan menggunakan Wireshark & Nmap.",
    coverImage: "/images/projects/honeypot.jpg",
    techStack: ["Python", "Nmap", "Wireshark", "Network Security"],
    featured: true,
    date: "2025"
  },
  {
    id: "cisco-packet-tracer-sim",
    title: "Simulasi Topologi Jaringan & Segmentation",
    category: "Network & Security",
    role: "Network Engineer",
    description: "Merancang simulasi jaringan enterprise ber skala medium yang menerapkan VLAN, Inter-VLAN routing, Access Control Lists (ACL), serta network segmentation.",
    coverImage: "/images/projects/cisco-packet.jpg",
    techStack: ["Cisco Packet Tracer", "VLAN", "Routing", "ACL", "TCP/IP"],
    featured: false,
    date: "2025"
  }
];

export const CERTIFICATES: Certificate[] = [
  {
    id: "cert-cyber-threat",
    name: "Cyber Threat Management",
    issuer: "Cisco Networking Academy",
    category: "Cybersecurity",
    image: "/images/certificates/cyber-threat.jpg",
    issueDate: "2025",
    featured: true
  },
  {
    id: "cert-network-defense",
    name: "Network Defense",
    issuer: "Cisco Networking Academy",
    category: "Cybersecurity",
    image: "/images/certificates/network-defense.jpg",
    issueDate: "2025",
    featured: true
  },
  {
    id: "cert-endpoint-security",
    name: "Endpoint Security",
    issuer: "Cisco Networking Academy",
    category: "Cybersecurity",
    image: "/images/certificates/endpoint-security.jpg",
    issueDate: "2025",
    featured: true
  },
  {
    id: "cert-infoker-kaliber",
    name: "Ketua Bidang INFOKER - LSO KALIBER",
    issuer: "LSO KALIBER UMM",
    category: "Leadership",
    image: "/images/certificates/infoker-kaliber.jpg",
    issueDate: "2025",
    featured: true
  }
];