// project catalog
export const PROJECTS = [
  {
    id: "maizeai",
    title: "MaizeAI",
    year: "2026",
    featured: true, // Shown on Homepage
    image: "/assets/projects/maizeai.png",
    github: "https://github.com/dimzkuy/MaizeAI",
    demo: null,
    tags: ["Next.js", "Tailwind CSS", "FastAPI", "ONNX Runtime"],
    description: {
      EN: "A web-based application for classifying corn leaf diseases from uploaded images using a machine learning model.",
      ID: "Aplikasi web untuk mengklasifikasikan penyakit daun jagung berdasarkan gambar yang diunggah menggunakan model machine learning."
    },
    contribution: {
      EN: "Developed the web application using Next.js and integrated a FastAPI backend with an EfficientNetB0 model exported to ONNX for inference. Deployed the frontend and backend using Google Cloud services.",
      ID: "Mengembangkan aplikasi web menggunakan Next.js serta mengintegrasikan backend FastAPI dengan model EfficientNetB0 yang diekspor ke format ONNX untuk inferensi. Melakukan deployment frontend dan backend menggunakan layanan Google Cloud."
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
    featured: false,
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
    image: "/assets/projects/dana-redesign.png",
    github: "https://github.com/dimzkuy/repo-PPB-Team-4-Redesign-DANA",
    demo: null,
    tags: ["Flutter", "Figma"],
    description: {
      EN: "A mobile digital wallet redesign focused on improving transaction flows, information hierarchy, and the clarity of key user interactions.",
      ID: "Redesign aplikasi dompet digital yang berfokus pada penyempurnaan alur transaksi, hierarki informasi, dan kejelasan interaksi utama pengguna."
    },
    contribution: {
      EN: "Redesigned key transaction and payment flows, refining the mobile interface layout and visual hierarchy to create a clearer and more intuitive user experience.",
      ID: "Mendesain ulang alur transaksi dan pembayaran utama serta menyempurnakan tata letak antarmuka mobile dan hierarki visual untuk menciptakan pengalaman pengguna yang lebih jelas dan intuitif."
    },
    placeholderText: {
      EN: "Fintech Mobile Flow • Wallet Redesign System",
      ID: "Alur Mobile Fintech • Sistem Redesign Dompet",
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
