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
    overview: {
      EN: "MaizeAI is an intelligent agricultural diagnosis platform designed to assist farmers, agronomists, and researchers in rapidly identifying corn leaf diseases. By combining a clean, responsive web interface with a containerized inference microservice, the system provides automated disease classification from photos, helping reduce crop losses through early diagnosis.",
      ID: "MaizeAI adalah platform diagnosis pertanian cerdas yang dirancang untuk membantu petani, agronom, dan peneliti dalam mengidentifikasi penyakit daun jagung secara cepat. Menggabungkan antarmuka web responsif dengan layanan mikro inferensi berbasis container, sistem ini memberikan klasifikasi penyakit otomatis dari foto untuk membantu meminimalkan kerugian panen melalui penanganan dini."
    },
    objectives: {
      EN: [
        "Deliver rapid and reliable classification for common corn leaf pathologies from user-uploaded images.",
        "Implement a decoupled cloud architecture separating the modern frontend from neural inference services.",
        "Optimize machine learning model inference using ONNX Runtime for reduced latency and predictable resource consumption.",
        "Establish an automated serverless deployment pipeline leveraging Google Cloud Run and Firebase App Hosting."
      ],
      ID: [
        "Menyediakan klasifikasi yang cepat dan andal untuk patologi umum daun jagung dari citra yang diunggah pengguna.",
        "Menerapkan arsitektur cloud terpisah antara frontend modern dan layanan inferensi model neural.",
        "Mengoptimalkan inferensi model machine learning dengan ONNX Runtime untuk latensi rendah dan efisiensi memori.",
        "Membangun alur deployment serverless otomatis memanfaatkan Google Cloud Run dan Firebase App Hosting."
      ]
    },
    contribution: {
      EN: "Developed the web application using Next.js and integrated a FastAPI backend to serve an EfficientNetB0 image classification model exported to ONNX. Deployed the frontend using Firebase App Hosting and the backend on Google Cloud Run, with the model stored in Google Cloud Storage.",
      ID: "Mengembangkan aplikasi web menggunakan Next.js dan mengintegrasikan backend FastAPI untuk menjalankan model klasifikasi citra EfficientNetB0 yang diekspor ke format ONNX. Melakukan deployment frontend menggunakan Firebase App Hosting dan backend di Google Cloud Run, serta menyimpan model di Google Cloud Storage."
    },
    highlights: {
      EN: [
        "Engineered an EfficientNetB0 model conversion to ONNX format, achieving fast inference times on CPU-based cloud containers.",
        "Built a RESTful FastAPI backend equipped with input image validation, preprocessing, and probability thresholding.",
        "Configured Google Cloud Storage for remote model artifact storage and Cloud Run for serverless container deployment.",
        "Created an intuitive Next.js web application with client-side image preview, validation, and visual diagnosis report cards."
      ],
      ID: [
        "Mengonversi model EfficientNetB0 ke format ONNX, mencapai waktu inferensi yang cepat pada container cloud berbasis CPU.",
        "Membangun backend FastAPI RESTful yang dilengkapi validasi citra, prapemrosesan, dan kalkulasi probabilitas kelas.",
        "Mengonfigurasi Google Cloud Storage untuk artefak model dan Cloud Run untuk deployment container serverless.",
        "Mengembangkan aplikasi web Next.js yang intuitif dengan fitur pratinjau gambar, validasi, dan kartu laporan diagnosis visual."
      ]
    },
    techStack: [
      { name: "Next.js", iconKey: "siNextdotjs", role: { EN: "Frontend Application & UI", ID: "Aplikasi Frontend & Antarmuka" } },
      { name: "FastAPI", iconKey: "siFastapi", role: { EN: "Model Serving API & Microservice", ID: "API Serving Model & Microservice" } },
      { name: "ONNX Runtime", iconKey: "siOnnx", role: { EN: "Optimized Neural Inference Engine", ID: "Engine Inferensi Neural Teroptimasi" } },
      { name: "Google Cloud", iconKey: "siGooglecloud", role: { EN: "Cloud Run & Cloud Storage Infrastructure", ID: "Infrastruktur Cloud Run & Cloud Storage" } },
      { name: "Firebase", iconKey: "siFirebase", role: { EN: "App Hosting & Delivery", ID: "App Hosting & Distribusi Frontend" } },
    ],
    gallery: [],
    placeholderText: {
      EN: "Agricultural Diagnosis UI • Neural Inference Console",
      ID: "UI Diagnosis Pertanian • Konsol Inferensi Neural",
    },
  },
  {
    id: "crop-care",
    title: "Crop-Care",
    year: "2024",
    featured: true,
    badge: "Bangkit 2024 H2 Capstone Project",
    image: "/assets/projects/cropcare.png",
    github: "https://github.com/RafliFahri/Crop-Care",
    demo: null,
    tags: ["Next.js", "TensorFlow.js", "shadcn/ui"],
    description: {
      EN: "A plant disease diagnosis application designed to help users identify potential leaf diseases through a web-based interface.",
      ID: "Aplikasi diagnosis penyakit tanaman yang membantu pengguna mengidentifikasi kemungkinan penyakit daun melalui antarmuka web."
    },
    overview: {
      EN: "Crop-Care was created as a multidisciplinary capstone project within the Google Bangkit Academy program. The platform provides an accessible, mobile-first web portal allowing farmers and gardening enthusiasts to detect plant foliage illnesses directly through their browser.",
      ID: "Crop-Care dikembangkan sebagai proyek capstone multidisiplin pada program Google Bangkit Academy. Platform ini menyediakan portal web ramah perangkat mobile yang memungkinkan pengguna mendeteksi penyakit tanaman langsung melalui browser."
    },
    objectives: {
      EN: [
        "Create an accessible, user-friendly diagnosis portal for agricultural leaf inspection.",
        "Implement responsive and accessible UI components using Next.js and shadcn/ui.",
        "Integrate client-side machine learning inference for rapid diagnosis feedback.",
        "Collaborate effectively across cross-functional machine learning, cloud, and mobile team cohorts."
      ],
      ID: [
        "Membuat portal diagnosis yang mudah digunakan dan ramah bagi petani untuk inspeksi daun tanaman.",
        "Menerapkan komponen UI responsif dan aksesibel menggunakan Next.js dan shadcn/ui.",
        "Mengintegrasikan inferensi machine learning sisi klien untuk hasil diagnosis yang cepat.",
        "Berkolaborasi secara terkoordinasi dalam tim lintas disiplin machine learning, cloud, dan mobile."
      ]
    },
    contribution: {
      EN: "Contributed to the frontend development by building the home, result, and popup interfaces. Worked with the team to present plant disease diagnosis results through the application interface.",
      ID: "Berkontribusi dalam pengembangan frontend dengan membangun antarmuka halaman beranda, hasil diagnosis, dan popup. Bekerja bersama tim untuk menampilkan hasil diagnosis penyakit tanaman melalui antarmuka aplikasi."
    },
    highlights: {
      EN: [
        "Built responsive, accessible core views including the main landing view, disease diagnosis result screen, and modal interaction popups.",
        "Crafted reusable design components with Tailwind CSS and shadcn/ui adhering to design guidelines.",
        "Integrated the presentation layer with model outputs to display disease symptoms and treatment recommendations.",
        "Collaborated in Git-based agile workflows with pull request reviews and team coordination."
      ],
      ID: [
        "Membangun antarmuka utama termasuk halaman beranda, layar hasil diagnosis penyakit, dan modal popup interaktif.",
        "Membuat komponen desain yang dapat digunakan kembali menggunakan Tailwind CSS dan shadcn/ui.",
        "Mengintegrasikan lapisan tampilan dengan output model untuk menampilkan gejala penyakit dan rekomendasi penanganan.",
        "Bekerja sama dalam alur kerja agile berbasis Git dengan review pull request dan koordinasi tim."
      ]
    },
    techStack: [
      { name: "Next.js", iconKey: "siNextdotjs", role: { EN: "Web Application Framework & Routing", ID: "Framework Aplikasi Web & Routing" } },
      { name: "TensorFlow.js", iconKey: "siTensorflow", role: { EN: "Client-side Model Inference", ID: "Inferensi Model Sisi Klien" } },
      { name: "Tailwind CSS", iconKey: "siTailwindcss", role: { EN: "Design Tokens & Utility Styling", ID: "Desain Antarmuka & Utility Styling" } },
      { name: "shadcn/ui", iconKey: "siShadcnui", role: { EN: "Accessible Component Primitives", ID: "Primitif Komponen Aksesibel" } },
    ],
    gallery: [],
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
    overview: {
      EN: "Workgank Industry is a specialized e-commerce solution engineered for custom apparel production and merchandising. The application pairs a customer-facing digital storefront with a comprehensive back-office administrative portal for operations management.",
      ID: "Workgank Industry adalah solusi e-commerce khusus untuk produksi pakaian kustom dan merchandise. Aplikasi ini memadukan etalase digital untuk pelanggan dengan portal administrasi back-office yang lengkap untuk manajemen operasional."
    },
    objectives: {
      EN: [
        "Provide an interactive digital catalog with custom garment personalization options.",
        "Build a dedicated admin control center for inventory, order fulfillment, and user account management.",
        "Implement a structured relational database schema supporting product variants and transaction logs.",
        "Ensure seamless integration between storefront customer orders and back-office management."
      ],
      ID: [
        "Menyediakan katalog digital interaktif dengan opsi kustomisasi pakaian bagi pelanggan.",
        "Membangun pusat kontrol admin untuk pengelolaan inventaris, pemrosesan pesanan, dan akun pengguna.",
        "Menerapkan skema basis data relasional terstruktur yang mendukung varian produk dan riwayat transaksi.",
        "Memastikan integrasi mulus antara pesanan pelanggan pada toko online dengan dashboard admin."
      ]
    },
    contribution: {
      EN: "Designed the admin login interface and dashboard, developed the admin database structure, and contributed to integrating the main web application with the admin dashboard.",
      ID: "Merancang antarmuka login dan dashboard admin, mengembangkan struktur database admin, serta membantu mengintegrasikan aplikasi web utama dengan dashboard admin."
    },
    highlights: {
      EN: [
        "Architected relational database tables in MySQL handling admin credentials, inventory, and sales metrics.",
        "Designed and implemented secure administrative login flows with session-based authentication.",
        "Developed interactive dashboard views featuring dynamic data tables and summary cards for sales reporting.",
        "Programmed client-side validation and asynchronous operations using PHP and vanilla JavaScript."
      ],
      ID: [
        "Merancang tabel basis data relasional MySQL untuk kredensial admin, data stok barang, dan rekap transaksi.",
        "Merancang dan mengimplementasikan alur login admin yang aman menggunakan autentikasi berbasis sesi.",
        "Mengembangkan antarmuka dashboard interaktif dengan tabel data dinamis dan ringkasan laporan penjualan.",
        "Mengimplementasikan validasi sisi klien dan interaksi antarmuka menggunakan PHP dan JavaScript native."
      ]
    },
    techStack: [
      { name: "PHP", iconKey: "siPhp", role: { EN: "Server-side Logic & Database Interaction", ID: "Logika Sisi Server & Interaksi Database" } },
      { name: "JavaScript", iconKey: "siJavascript", role: { EN: "Client-side Interactivity & DOM Operations", ID: "Interaktivitas Sisi Klien & Operasi DOM" } },
      { name: "MySQL", iconKey: "siMysql", role: { EN: "Relational Database Management System", ID: "Sistem Manajemen Basis Data Relasional" } },
    ],
    gallery: [],
    placeholderText: {
      EN: "Admin Dashboard • Web Application Integration",
      ID: "Dashboard Admin • Integrasi Aplikasi Web"
    }
  },
  {
    id: "dana-redesign",
    title: "DANA Redesign",
    year: "2025",
    featured: false,
    badge: "College Project",
    image: "/assets/projects/dana-redesign.png",
    github: "https://github.com/dimzkuy/repo-PPB-Team-4-Redesign-DANA",
    demo: null,
    tags: ["Flutter", "Figma", "Firebase"],
    description: {
      EN: "A mobile wallet redesign project focused on improving the DANA app experience through refined UI/UX design and the implementation of key registration, payment, and profile features.",
      ID: "Proyek redesign aplikasi dompet digital yang berfokus pada peningkatan pengalaman pengguna DANA melalui penyempurnaan desain UI/UX dan implementasi fitur utama registrasi, pembayaran, dan profil."
    },
    overview: {
      EN: "The DANA Redesign project was developed as a mobile programming initiative aimed at enhancing the usability, visual clarity, and interaction flow of the popular Indonesian digital wallet application. Through human-centered design iterations in Figma and cross-platform mobile engineering in Flutter, the project reimagined core financial user journeys.",
      ID: "Proyek DANA Redesign dikembangkan dalam mata kuliah pemrograman bergerak untuk meningkatkan kemudahan penggunaan, kejelasan visual, dan alur interaksi aplikasi dompet digital DANA. Melalui perancangan UI/UX di Figma dan implementasi mobile lintas platform dengan Flutter, proyek ini memperbarui alur navigasi keuangan esensial."
    },
    objectives: {
      EN: [
        "Redesign complex digital wallet flows into intuitive, friction-free mobile interfaces.",
        "Lead a 5-member development team ensuring clear milestones and version control practices.",
        "Implement key mobile features in Flutter including QR scanning and Firebase Authentication.",
        "Ensure visual consistency between high-fidelity Figma specifications and production mobile code."
      ],
      ID: [
        "Meredesain alur dompet digital yang kompleks menjadi antarmuka mobile yang intuitif dan mudah diakses.",
        "Memimpin tim pengembang beranggotakan 5 orang dengan pembagian tugas terstruktur dan kontrol versi Git.",
        "Mengimplementasikan fitur mobile utama dengan Flutter termasuk pemindaian QR dan Firebase Auth.",
        "Menjaga konsistensi visual antara spesifikasi desain Figma dengan kode aplikasi Flutter."
      ]
    },
    contribution: {
      EN: "Led a 5-member team, designed interfaces in Figma, and contributed to mobile development using Flutter and Firebase. Responsibilities included splash screen, registration and email verification interfaces, QR code scanning, and profile photo synchronization.",
      ID: "Memimpin tim beranggotakan 5 orang, merancang antarmuka menggunakan Figma, dan berkontribusi dalam pengembangan aplikasi mobile dengan Flutter dan Firebase. Tanggung jawab mencakup antarmuka splash screen, registrasi dan verifikasi email, pemindaian QR code, serta sinkronisasi foto profil."
    },
    highlights: {
      EN: [
        "Spearheaded team leadership across planning, UI prototyping in Figma, and Flutter implementation phases.",
        "Built responsive mobile screens for the animated splash screen, user registration, and email verification.",
        "Integrated camera-based QR code scanning for simulated digital transactions.",
        "Implemented Firebase Authentication with secure profile photo synchronization and state persistence."
      ],
      ID: [
        "Memimpin koordinasi tim mulai dari perencanaan, pembuatan prototipe UI di Figma, hingga tahap implementasi Flutter.",
        "Membangun layar mobile responsif untuk splash screen animasi, alur registrasi, dan verifikasi email.",
        "Mengintegrasikan fitur pemindaian QR code berbasis kamera untuk simulasi transaksi digital.",
        "Menerapkan Firebase Authentication dengan sinkronisasi foto profil pengguna dan persistensi status login."
      ]
    },
    techStack: [
      { name: "Flutter", iconKey: "siFlutter", role: { EN: "Cross-platform Mobile Framework", ID: "Framework Mobile Lintas Platform" } },
      { name: "Firebase", iconKey: "siFirebase", role: { EN: "Authentication & Cloud Storage Services", ID: "Layanan Autentikasi & Penyimpanan Cloud" } },
      { name: "Figma", iconKey: "siFigma", role: { EN: "UI/UX Design, Wireframing & Prototyping", ID: "Desain UI/UX, Wireframing & Prototyping" } },
    ],
    gallery: [],
    placeholderText: {
      EN: "Flutter • Firebase • Figma • Digital Wallet Redesign",
      ID: "Flutter • Firebase • Figma • Redesign Dompet Digital"
    },
  },
  {
    id: "movie-booking",
    title: "Movie Booking App",
    year: "2025",
    featured: false,
    badge: "College Project",
    image: "/assets/projects/CinemaBook-Pemesanan Tiket Bioskop.png",
    github: "https://github.com/dimzkuy/CLO4_TB_KPL",
    demo: null,
    tags: ["Python", "Flask", "HTML", "CSS", "JavaScript"],
    description: {
      EN: "A web-based movie ticket booking application developed to provide users with a streamlined experience for browsing movies and managing ticket reservations.",
      ID: "Aplikasi pemesanan tiket bioskop berbasis web yang dikembangkan untuk memberikan pengalaman pengguna dalam menjelajahi film dan mengelola pemesanan tiket secara praktis."
    },
    overview: {
      EN: "The Movie Booking Application (CinemaBook) is an academic software engineering project developed to demonstrate rigorous software design patterns, state-machine theory, and secure coding practices within a full-stack ticketing platform.",
      ID: "Aplikasi Pemesanan Tiket Bioskop (CinemaBook) adalah proyek rekayasa perangkat lunak akademik yang dikembangkan untuk mendemonstrasikan penerapan pola desain perangkat lunak, teori automata, dan standar secure coding pada platform pemesanan tiket."
    },
    objectives: {
      EN: [
        "Build a functional movie ticket reservation portal allowing movie exploration and seat reservation.",
        "Incorporate theoretical automata concepts to model rigorous booking validation states.",
        "Apply established software engineering patterns including the Singleton pattern.",
        "Enforce Clean Code principles and secure coding safeguards across user authentication."
      ],
      ID: [
        "Membangun portal pemesanan tiket bioskop fungsional untuk penjelajahan film dan reservasi tiket.",
        "Menerapkan konsep automata untuk memodelkan validasi status alur pemesanan secara ketat.",
        "Mengimplementasikan pola desain perangkat lunak seperti Singleton Pattern pada arsitektur sistem.",
        "Menerapkan prinsip Clean Code dan standar pengkodean aman pada autentikasi pengguna."
      ]
    },
    contribution: {
      EN: "Designed and implemented the automata component, applied the Singleton design pattern, and incorporated Clean Code and Secure Coding standards into the login functionality. Also managed the team's GitHub repository and contributed to technical documentation and presentation materials.",
      ID: "Merancang dan mengimplementasikan bagian automata, menerapkan Singleton Design Pattern, serta mengintegrasikan standar Clean Code dan Secure Coding pada fungsionalitas login. Turut mengelola repository GitHub kelompok serta menyusun dokumentasi teknis dan materi presentasi."
    },
    highlights: {
      EN: [
        "Designed and coded a Finite State Automata (FSA) state-machine to mathematically govern and validate booking transaction transitions.",
        "Implemented the Singleton design pattern to guarantee centralized resource and configuration management.",
        "Incorporated secure coding standards to guard against common web vulnerabilities during login and credential handling.",
        "Maintained repository health, branching strategies, and created technical architecture documentation."
      ],
      ID: [
        "Merancang dan memprogram mesin status Finite State Automata (FSA) untuk memvalidasi transisi status pemesanan tiket.",
        "Menerapkan Singleton Design Pattern untuk menjamin manajemen konfigurasi dan resource yang terpusat.",
        "Mengintegrasikan standar keamanan kode untuk mencegah kerentanan web pada proses login dan penanganan kredensial.",
        "Mengelola alur repository Git kelompok, strategi percabangan, serta menyusun dokumentasi arsitektur sistem."
      ]
    },
    techStack: [
      { name: "Python", iconKey: "siPython", role: { EN: "Core Backend & Automata Implementation", ID: "Logika Backend Utama & Implementasi Automata" } },
      { name: "Flask", iconKey: "siFlask", role: { EN: "Micro Web Framework & Routing", ID: "Micro Framework Web & Routing" } },
      { name: "JavaScript", iconKey: "siJavascript", role: { EN: "Frontend Dynamic DOM & Validation", ID: "Interaksi DOM Dinamis & Validasi Sisi Klien" } },
      { name: "HTML", iconKey: "siHtml5", role: { EN: "Semantic Markup", ID: "Struktur Semantik" } },
      { name: "CSS", iconKey: "siCss", role: { EN: "Styling & UI Implementation", ID: "Penataan Tampilan & Implementasi Antarmuka" } },

    ],
    gallery: [],
    placeholderText: {
      EN: "Python • Flask • Software Engineering • Movie Booking",
      ID: "Python • Flask • Rekayasa Perangkat Lunak • Pemesanan Tiket Bioskop"
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
  "movie-booking": (
    <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24">
      <rect x="2" y="3" width="20" height="18" rx="2" />
      <path d="M7 3v18M17 3v18M2 8h20M2 16h20" />
    </svg>
  ),
};

// # Helper to get formatted project items for a given language
export function getProjectsByLang(lang = "EN", featuredOnly = false) {
  const list = featuredOnly ? PROJECTS.filter((p) => p.featured) : PROJECTS;
  return list.map((p) => formatProjectForLang(p, lang));
}

// # Helper to format a single project for a given language
export function formatProjectForLang(p, lang = "EN") {
  if (!p) return null;
  const isId = lang === "ID";
  return {
    id: p.id,
    title: p.title,
    year: p.year,
    featured: p.featured,
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
    overview:
      typeof p.overview === "object"
        ? p.overview[lang] || p.overview.EN
        : p.overview || "",
    objectives:
      p.objectives && typeof p.objectives === "object"
        ? p.objectives[lang] || p.objectives.EN || []
        : [],
    contribution:
      typeof p.contribution === "object"
        ? p.contribution[lang] || p.contribution.EN
        : p.contribution,
    highlights:
      p.highlights && typeof p.highlights === "object"
        ? p.highlights[lang] || p.highlights.EN || []
        : [],
    techStack: (p.techStack || []).map((t) => ({
      name: t.name,
      iconKey: t.iconKey,
      role:
        typeof t.role === "object" && t.role !== null
          ? t.role[lang] || t.role.EN || ""
          : t.role || "",
    })),
    gallery: (p.gallery || []).map((g) => ({
      src: g.src,
      alt: g.alt,
      caption:
        typeof g.caption === "object" && g.caption !== null
          ? g.caption[lang] || g.caption.EN || ""
          : g.caption || "",
    })),
    placeholderText:
      typeof p.placeholderText === "object"
        ? p.placeholderText[lang] || p.placeholderText.EN
        : p.placeholderText,
  };
}

// # Get all project slugs for static params
export function getAllProjectSlugs() {
  return PROJECTS.map((p) => p.id);
}

// # Get a single project by slug and language
export function getProjectBySlug(slug, lang = "EN") {
  const project = PROJECTS.find((p) => p.id === slug);
  if (!project) return null;
  return formatProjectForLang(project, lang);
}

// # Get previous and next projects for navigation
export function getAdjacentProjects(slug, lang = "EN") {
  const index = PROJECTS.findIndex((p) => p.id === slug);
  if (index === -1) return { prev: null, next: null };

  const prevProject = index > 0 ? PROJECTS[index - 1] : PROJECTS[PROJECTS.length - 1];
  const nextProject = index < PROJECTS.length - 1 ? PROJECTS[index + 1] : PROJECTS[0];

  return {
    prev: {
      id: prevProject.id,
      title: prevProject.title,
      badge:
        typeof prevProject.badge === "object" && prevProject.badge !== null
          ? prevProject.badge[lang] || prevProject.badge.EN
          : prevProject.badge,
      year: prevProject.year,
    },
    next: {
      id: nextProject.id,
      title: nextProject.title,
      badge:
        typeof nextProject.badge === "object" && nextProject.badge !== null
          ? nextProject.badge[lang] || nextProject.badge.EN
          : nextProject.badge,
      year: nextProject.year,
    },
  };
}
