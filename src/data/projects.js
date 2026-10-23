// project catalog
export const PROJECTS = [
  {
    id: "maizeai",
    title: "MaizeAI",
    year: "2026",
    featured: true,
    badge: "Thesis Project",
    image: "/assets/projects/maizeai.png",
    github: "https://github.com/dimzkuy/MaizeAI",
    demo: null,
    tags: ["Next.js", "FastAPI", "ONNX Runtime", "Firebase", "Google Cloud"],
    description: {
      EN: "A web-based application for classifying corn leaf diseases from uploaded images using a machine learning model.",
      ID: "Aplikasi web untuk mengklasifikasikan penyakit daun jagung berdasarkan gambar yang diunggah menggunakan model machine learning."
    },
    contribution: {
      EN: "Developed the web application using Next.js and integrated a FastAPI backend to serve an EfficientNetB0 image classification model exported to ONNX. Deployed the frontend using Firebase App Hosting and the backend on Google Cloud Run, with the model stored in Google Cloud Storage.",
      ID: "Mengembangkan aplikasi web menggunakan Next.js dan mengintegrasikan backend FastAPI untuk menjalankan model klasifikasi citra EfficientNetB0 yang diekspor ke format ONNX. Melakukan deployment frontend menggunakan Firebase App Hosting dan backend di Google Cloud Run, serta menyimpan model di Google Cloud Storage."
    },
    placeholderText: {
      EN: "Agricultural Diagnosis UI • Neural Inference Console",
      ID: "UI Diagnosis Pertanian • Konsol Inferensi Neural",
    },
  },
  {
    id: "crop-care",
    title: "Crop-Care",
    year: "2024",
    featured: true, // Shown on Homepage
    badge: "Bangkit 2024 H2 Capstone Project",
    image: "/assets/projects/cropcare.png",
    github: "https://github.com/RafliFahri/Crop-Care",
    demo: null,
    tags: ["Next.js", "TensorFlow.js", "shadcn/ui"],
    description: {
      EN: "A plant disease diagnosis application designed to help users identify potential leaf diseases through a web-based interface.",
      ID: "Aplikasi diagnosis penyakit tanaman yang membantu pengguna mengidentifikasi kemungkinan penyakit daun melalui antarmuka web."
    },
    contribution: {
      EN: "Contributed to the frontend development by building the home, result, and popup interfaces. Worked with the team to present plant disease diagnosis results through the application interface.",
      ID: "Berkontribusi dalam pengembangan frontend dengan membangun antarmuka halaman beranda, hasil diagnosis, dan popup. Bekerja bersama tim untuk menampilkan hasil diagnosis penyakit tanaman melalui antarmuka aplikasi."
    },
    placeholderText: {
      EN: "Leaf Pathology Scanner • WebGL Quantized Classifier",
      ID: "Pemindai Patologi Daun • WebGL Quantized Classifier",
    },
  },
  {
    id: "workgank",
    title: "Workgank Industry",
    year: "2024",
    featured: true,
    badge: "College Project",
    image: "/assets/projects/Workgank.png",
    github: null,
    demo: null,
    tags: ["PHP", "JavaScript", "MySQL"],
    description: {
      EN: "An e-commerce website for an apparel business, featuring product catalogs, custom clothing design, portfolio showcases, and an admin dashboard for managing user accounts, inventory, and sales reports.",
      ID: "Website e-commerce untuk bisnis apparel yang menyediakan katalog produk, fitur desain pakaian kustom, portofolio, serta dashboard admin untuk mengelola akun pengguna, stok, dan laporan penjualan."
    },
    contribution: {
      EN: "Designed the admin login interface and dashboard, developed the admin database structure, and contributed to integrating the main web application with the admin dashboard.",
      ID: "Merancang antarmuka login dan dashboard admin, mengembangkan struktur database admin, serta membantu mengintegrasikan aplikasi web utama dengan dashboard admin."
    },
    placeholderText: {
      EN: "Admin Dashboard • Web Application Integration",
      ID: "Dashboard Admin • Integrasi Aplikasi Web"
    }
  },
  {
    id: "dana-redesign",
    title: "DANA Redesign",
    year: "2025",
    featured: false, // Shown on /projects only
    badge: "College Project",
    image: "/assets/projects/dana-redesign.png",
    github: "https://github.com/dimzkuy/repo-PPB-Team-4-Redesign-DANA",
    demo: null,
    tags: ["Flutter", "Figma"],

    description: {
      EN: "A mobile wallet redesign project focused on improving the DANA app experience through refined UI/UX design and the implementation of key registration, payment, and profile features.",
      ID: "Proyek redesign aplikasi dompet digital yang berfokus pada peningkatan pengalaman pengguna DANA melalui penyempurnaan desain UI/UX dan implementasi fitur utama registrasi, pembayaran, dan profil."
    },
    contribution: {
      EN: "Led a 5-member team, designed interfaces in Figma, and contributed to mobile development using Flutter and Firebase. Responsibilities included splash screen, registration and email verification interfaces, QR code scanning, and profile photo synchronization.",
      ID: "Memimpin tim beranggotakan 5 orang, merancang antarmuka menggunakan Figma, dan berkontribusi dalam pengembangan aplikasi mobile dengan Flutter dan Firebase. Tanggung jawab mencakup antarmuka splash screen, registrasi dan verifikasi email, pemindaian QR code, serta sinkronisasi foto profil."
    },
    placeholderText: {
      EN: "Flutter • Firebase • Figma • Digital Wallet Redesign",
      ID: "Flutter • Firebase • Figma • Redesign Dompet Digital"
    },
  },
];

// # Project Icons (SVG)
export const PROJECT_ICONS = {
  maizeai: (
    <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24">
      <rect height="18" rx="1" width="18" x="3" y="3" />
      <circle cx="8.5" cy="8.5" r="1.5" />
      <path d="M21 15l-5-5L5 21" />
    </svg>
  ),
  "crop-care": (
    <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24">
      <path d="M12 2a10 10 0 0 1 10 10c0 5.523-4.477 10-10 10S2 17.523 2 12A10 10 0 0 1 12 2z" />
      <path d="M12 6v6l4 2" />
    </svg>
  ),
  workgank: (
    <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24">
      <path d="M4 18l5-6 4 3 7-9" />
      <path d="M20 6h-5v5" />
      <path d="M3 20h18" />
    </svg>
  ),
  "dana-redesign": (
    <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24">
      <rect x="3" y="5" width="18" height="14" rx="3" />
      <path d="M7 9h10M7 15h6" />
      <path d="M17 9l-2 6" />
    </svg>
  ),
};

// # Helper to get formatted project items for a given language
export function getProjectsByLang(lang = "EN", featuredOnly = false) {
  const list = featuredOnly ? PROJECTS.filter((p) => p.featured) : PROJECTS;
  return list.map((p) => ({
    id: p.id,
    title: p.title,
    year: p.year,
    image: p.image,
    github: p.github,
    demo: p.demo,
    tags: p.tags,
    badge:
      typeof p.badge === "object" && p.badge !== null
        ? p.badge[lang] || p.badge.EN || "PROJECT"
        : p.badge || "PROJECT",
    description:
      typeof p.description === "object"
        ? p.description[lang] || p.description.EN
        : p.description,
    contribution:
      typeof p.contribution === "object"
        ? p.contribution[lang] || p.contribution.EN
        : p.contribution,
    placeholderText:
      typeof p.placeholderText === "object"
        ? p.placeholderText[lang] || p.placeholderText.EN
        : p.placeholderText,
  }));
}
