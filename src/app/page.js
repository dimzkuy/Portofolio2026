"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";

const Lanyard = dynamic(() => import("@/components/Lanyard"), {
  ssr: false,
});

// # Project Icons
const PROJECT_ICONS = {
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
};

// # Bilingual Content
const CONTENT = {
  EN: {
    nav: [
      { href: "#about", label: "About" },
      { href: "#projects", label: "Projects" },
      { href: "#experience", label: "Experience" },
      { href: "#skills", label: "Skills" },
      { href: "#education", label: "Education" },
      { href: "#contact", label: "Contact" },
    ],
    hero: {
      titlePrefix: "Software Engineer",
      titleAmp: "&",
      titleSuffix: "Systems Builder.",
      subtext:
        "Specializing in robust web applications, machine learning integration, and high-performance interfaces. Building software with architectural rigor, deterministic precision, and broadsheet typographic clarity.",
      downloadCv: "Download CV",
      github: "GitHub",
    },
    about: {
      index: "01",
      title: "ABOUT",
      subtitle: "Architectural Ledger",
      p1: "I am a software engineer with foundational roots in full-stack architecture and applied machine learning integration. My engineering philosophy favors deterministic state machines, asynchronous event loops, and low-latency client-side execution over opaque abstractions.",
      p2: "Whether engineering distributed ingest pipelines, deploying quantized neural networks via WebAssembly, or polishing user interfaces, I invest in clarity, maintainability, and end-to-end telemetry.",
    },
    projects: {
      index: "02",
      title: "FEATURED PROJECTS",
      subtitle: "Personal & College Projects",
      placeholder: "[ SCREENSHOT PLACEHOLDER ]",
      contributionTitle: "My Contribution",
      githubBtn: "[ GitHub Repo ]",
      demoBtn: "[ Live Demo ]",
      items: [
        {
          id: "maizeai",
          title: "MaizeAI",
          year: "2026",
          image: "/assets/projects/maizeai.png",
          description:
            "Agricultural intelligence platform providing automated crop disease detection and yield analysis for precision farming initiatives.",
          tags: {
            Frontend: ["Next.js", "Tailwind CSS"],
            Backend: ["FastAPI"],
            "Machine Learning": ["ONNX Runtime"],
          },
          contribution:
            "Architected client-side model inference pipeline and built the responsive analysis dashboard, optimizing latency by 40% and eliminating server-side image processing bottlenecks.",
          github: "https://github.com/dimzkuy/MaizeAI",
          demo: null,
          placeholderText: "Agricultural Diagnosis UI • Neural Inference Console",
        },
        {
          id: "crop-care",
          title: "Crop-Care",
          year: "2024",
          image: "/assets/projects/cropcare.png",
          description:
            "Real-time plant leaf diagnosis tool delivering instant agronomic recommendations directly in the browser via localized neural nets.",
          tags: {
            Frontend: ["Next.js", "TypeScript"],
            "Machine Learning": ["TensorFlow.js"],
          },
          contribution:
            "Implemented client-side image processing and browser-based neural network evaluation for offline-capable diagnosis, cutting roundtrip payload times to zero for rural field scenarios.",
          github: "https://github.com/RafliFahri/Crop-Care",
          demo: null,
          placeholderText: "Leaf Pathology Scanner • WebGL Quantized Classifier",
        },
      ],
    },
    experience: {
      index: "03",
      title: "EXPERIENCE",
      subtitle: "Chronological Record",
      rolePrefix: "ROLE",
      items: [
        {
          id: "01",
          role: "Operating Systems Teaching Assistant",
          org: "Informatics Laboratory Telkom University",
          period: "FEB 2026 — JUN 2026",
          status: "Part-time • On-site",
          desc: "Supported 38 students across one semester of Operating Systems practical sessions covering 15 modules. Delivered hands-on guidance on Xinu, Windows, and Ubuntu using VirtualBox, including virtual machine setup, OS configuration, and kernel/OS operations.",
        },
        {
          id: "02",
          role: "Web Design & Programming Teaching Assistant",
          org: "Informatics Laboratory Telkom University",
          period: "SEP 2025 — DEC 2025",
          status: "Part-time • On-site",
          desc: "Supported 78 students across 2 classes during Web Design and Programming lab sessions. Guided students through fundamental web development concepts, hands-on programming exercises, and technical troubleshooting.",
        },
        {
          id: "03",
          role: "Web Programmer Intern",
          org: "PT. Salim Anugerah Makmur",
          period: "JUL 2025 — AUG 2025",
          status: "Internship • On-site",
          desc: "Engineered features for the Salim HRIS platform using PHP and JavaScript during a 46-day internship. Implemented database optimizations, GPS-based attendance systems, Sales Call & Sales Order integration, basic web security, and deployment.",
        },
        {
          id: "04",
          role: "Cloud Computing Cohort",
          org: "Bangkit Academy led by Google, Tokopedia, Gojek, & Traveloka",
          period: "SEP 2024 — DEC 2024",
          status: "Full Graduate • 906 Hours",
          desc: "Completed 906 hours of intensive training covering Google Cloud Platform (GCP), Cloud Run, DevOps/SRE, scalable backend development, and Applied Machine Learning. Successfully built and deployed the Crop-Care Capstone Project.",
        },
        {
          id: "05",
          role: "Member of LSO Asistensi Agama Islam",
          org: "UKM SKI Universitas Telkom Kampus Purwokerto",
          period: "JAN 2024 — DEC 2024",
          status: "Organization • Active",
          desc: "Served as an active member within the Islamic mentoring division (LSO AAI) at UKM SKI Universitas Telkom Kampus Purwokerto. Gained hands-on experience in event management, teamwork, organizational communication, mentoring, and student development.",
        },
        {
          id: "06",
          role: "Teaching Factory - ONT Refurbishment Intern",
          org: "PT Industri Telekomunikasi Indonesia (Persero)/INTI, PT",
          period: "SEP 2021 — FEB 2022",
          status: "Internship • Jakarta",
          desc: "Performed Optical Network Terminal (ONT) device refurbishment, hardware diagnostics, and quality inspection, building practical competencies in computer networking and telecommunications equipment.",
        },
      ],
    },
    skills: {
      index: "04",
      title: "TECHNICAL SKILLS",
      subtitle: "Competency Matrix",
      setPrefix: "SET",
      items: [
        {
          index: "01",
          mono: "SYNTAX",
          title: "Programming Languages",
          tags: ["HTML", "CSS", "JavaScript", "Python", "PHP", "SQL"],
          footnote: "WEB · SCRIPTING · DATA",
        },
        {
          index: "02",
          mono: "FRAMEWORKS",
          title: "Frontend & Backend",
          tags: ["Next.js", "React", "FastAPI", "REST APIs", "Tailwind CSS"],
          footnote: "FRONTEND · API · WEB",
        },
        {
          index: "03",
          mono: "INFERENCE",
          title: "Machine Learning & Data",
          tags: ["ONNX Runtime", "TensorFlow"],
          footnote: "MODEL INTEGRATION · INFERENCE",
        },
        {
          index: "04",
          mono: "INFRA",
          title: "Cloud & Deployment",
          tags: ["Google Cloud Platform", "Firebase", "Vercel", "Git", "Linux", "Docker"],
          footnote: "CLOUD · DEPLOYMENT · VERSION CONTROL",
        },
      ],
    },
    education: {
      index: "05",
      title: "EDUCATION",
      subtitle: "Academic Credentials",
      prefix: "ACADEMIC",
      items: [
        {
          index: "01",
          period: "SEP 2022 — AUG 2026",
          degree: "Bachelor of Software Engineering",
          institution: "Universitas Telkom",
          label: "Core Specialization & Relevant Coursework:",
          detail:
            "Software Architecture, Database Systems (MySQL), Web Development, Operating Systems, Cloud Computing, Algorithms & Data Structures.",
          footer: { left: "GPA // 3.80 OF 4.00", right: "HIGH DISTINCTION" },
        },
        {
          index: "02",
          period: "2019 — 2022",
          degree: "Computer and Network Engineering",
          institution: "SMK Telkom Jakarta",
          label: "Specialization & Extracurricular Activities:",
          detail:
            "Computer Networking, Linux & Windows Server Administration, Hardware Troubleshooting, Network Infrastructure, and IT Club (Graphic Design).",
          footer: { left: "FINAL SCORE // 86.87", right: "VERIFIED GRADUATE" },
        },
      ],
    },
    contact: {
      index: "06",
      title: "CONTACT",
      subtitle: "Direct Telemetry",
      ledger: "COMMUNICATION LEDGER",
      heading: "Initiate Technical Consultation",
      subtext:
        "Open to software engineering roles, distributed systems challenges, and edge machine learning contracts. Send queries directly or connect across verified channels.",
      cta: "Get in Touch",
      channelHeader: "VERIFIED CHANNELS // DIRECT DISPATCH",
      response: "RESPONSE: <24H",
      channels: [
        { label: "Primary Transmission", value: "dcmargono@gmail.com", href: "mailto:dcmargono@gmail.com", icon: "arrow_forward" },
        { label: "Code Repositories", value: "github.com/dimzkuy", href: "https://github.com/dimzkuy", icon: "north_east" },
        { label: "Network Profile", value: "linkedin.com/in/dcmargono", href: "https://www.linkedin.com/in/dcmargono/", icon: "north_east" },
      ],
      security: "SECURITY: PGP KEY 0x82A1",
      availability: "AVAILABILITY: OPEN",
    },
    footer: {
      archiveTitle: "INDEX // ARCHIVE & PRACTICE",
      archiveDesc:
        "A disciplined editorial portfolio balancing software engineering architecture with broadsheet typographic clarity.",
      navTitle: "Navigation Ledger",
      dispatchesTitle: "Verified Dispatches",
      navItems: [
        { href: "#about", label: "01 / About" },
        { href: "#projects", label: "02 / Projects" },
        { href: "#experience", label: "03 / Experience" },
        { href: "#contact", label: "04 / Contact" },
      ],
      copyright: "All rights reserved.",
    },
  },
  ID: {
    nav: [
      { href: "#about", label: "Tentang" },
      { href: "#projects", label: "Proyek" },
      { href: "#experience", label: "Pengalaman" },
      { href: "#skills", label: "Keahlian" },
      { href: "#education", label: "Pendidikan" },
      { href: "#contact", label: "Kontak" },
    ],
    hero: {
      titlePrefix: "Software Engineer",
      titleAmp: "&",
      titleSuffix: "Pembangun Sistem.",
      subtext:
        "Spesialisasi dalam aplikasi web yang tangguh, integrasi machine learning, dan antarmuka berkinerja tinggi. Membangun perangkat lunak dengan ketelitian arsitektural, presisi deterministik, dan kejelasan tipografi editorial.",
      downloadCv: "Unduh CV",
      github: "GitHub",
    },
    about: {
      index: "01",
      title: "TENTANG",
      subtitle: "Catatan Arsitektural",
      p1: "Saya adalah seorang software engineer dengan fondasi kuat dalam arsitektur full-stack dan integrasi machine learning terapan. Filosofi rekayasa saya mengutamakan deterministic state machines, asynchronous event loops, dan eksekusi sisi klien berlatensi rendah daripada abstraksi yang tidak jelas.",
      p2: "Baik merancang pipeline pengumpulan data terdistribusi, mengimplementasikan neural network terkuantisasi via WebAssembly, maupun menyempurnakan antarmuka pengguna, saya berfokus pada kejelasan, kemudahan pemeliharaan, serta telemetri end-to-end.",
    },
    projects: {
      index: "02",
      title: "PROYEK PILIHAN",
      subtitle: "Katalog Pilihan [2024–2025]",
      placeholder: "[ TANGKAPAN LAYAR ]",
      deployed: "DILUNCURKAN",
      contributionTitle: "Kontribusi Saya",
      githubBtn: "[ Repositori GitHub ]",
      demoBtn: "[ Demo Langsung ]",
      items: [
        {
          id: "maizeai",
          title: "MaizeAI",
          year: "2024",
          image: "/assets/projects/maizeai.png",
          description:
            "Platform kecerdasan pertanian yang menyediakan deteksi penyakit tanaman otomatis dan analisis hasil panen untuk inisiatif pertanian presisi.",
          tags: {
            Frontend: ["Next.js", "Tailwind CSS"],
            Backend: ["FastAPI"],
            "Machine Learning": ["ONNX Runtime"],
          },
          contribution:
            "Merancang pipeline inferensi model sisi klien dan membangun dasbor analisis responsif, mengoptimalkan latensi sebesar 40% serta menghilangkan bottleneck pemrosesan gambar di server.",
          github: "https://github.com/dimzkuy",
          demo: null,
          placeholderText: "UI Diagnosis Pertanian • Konsol Inferensi Neural",
        },
        {
          id: "crop-care",
          title: "Crop-Care",
          year: "2024",
          description:
            "Alat diagnosis daun tanaman waktu-nyata yang memberikan rekomendasi agronomi instan langsung di peramban melalui neural network lokal.",
          tags: {
            Frontend: ["Next.js", "TypeScript"],
            "Machine Learning": ["TensorFlow.js"],
          },
          contribution:
            "Mengimplementasikan pemrosesan gambar sisi klien dan evaluasi neural network berbasis browser untuk diagnosis offline, memangkas waktu payload bolak-balik menjadi nol untuk kondisi lapangan di pedesaan.",
          github: "https://github.com/dimzkuy",
          demo: null,
          placeholderText: "Pemindai Patologi Daun • WebGL Quantized Classifier",
        },
      ],
    },
    experience: {
      index: "03",
      title: "PENGALAMAN",
      subtitle: "Rekam Jejak Kronologis",
      rolePrefix: "PERAN",
      items: [
        {
          id: "01",
          role: "Asisten Praktikum Sistem Operasi",
          org: "Informatics Laboratory Telkom University",
          period: "FEB 2026 — JUN 2026",
          status: "Paruh Waktu • Di Lokasi",
          desc: "Mendampingi 38 mahasiswa selama satu semester praktikum Sistem Operasi yang mencakup sekitar 15 modul. Memberikan bimbingan langsung mengenai Xinu, Windows, dan Ubuntu menggunakan VirtualBox, konfigurasi OS, serta penanganan masalah lingkungan virtual.",
        },
        {
          id: "02",
          role: "Asisten Praktikum Desain & Pemrograman Web",
          org: "Informatics Laboratory Telkom University",
          period: "SEP 2025 — DES 2025",
          status: "Paruh Waktu • Di Lokasi",
          desc: "Mendampingi 78 mahasiswa di 2 kelas selama satu semester praktikum Desain dan Pemrograman Web. Membantu mahasiswa memahami konsep pengembangan web, menyelesaikan latihan pemrograman langsung, dan mengatasi kendala teknis.",
        },
        {
          id: "03",
          role: "Web Programmer Magang",
          org: "PT. Salim Anugerah Makmur",
          period: "JUL 2025 — AGT 2025",
          status: "Magang • Di Lokasi",
          desc: "Mengembangkan platform Salim HRIS menggunakan PHP dan JavaScript selama kerja praktik 46 hari. Mengimplementasikan optimasi database, presensi berbasis GPS, integrasi Sales Call & Sales Order, keamanan web dasar, pengujian, dan deployment.",
        },
        {
          id: "04",
          role: "Cloud Computing Cohort",
          org: "Bangkit Academy led by Google, Tokopedia, Gojek, & Traveloka",
          period: "SEP 2024 — DES 2024",
          status: "Lulus Penuh • 906 Jam",
          desc: "Menyelesaikan 906 jam pelatihan intensif Google Cloud Platform (GCP), Cloud Run, DevOps/SRE, backend development, dan Machine Learning Terapan. Berhasil menyelesaikan dan menerapkan Capstone Project 'Crop-Care'.",
        },
        {
          id: "05",
          role: "Anggota LSO Asistensi Agama Islam",
          org: "UKM SKI Universitas Telkom Kampus Purwokerto",
          period: "JAN 2024 — DES 2024",
          status: "Organisasi • Aktif",
          desc: "Berperan aktif dalam LSO Asistensi Agama Islam (LSO AAI) di UKM SKI Universitas Telkom Kampus Purwokerto. Terlibat dalam kerja sama tim, manajemen acara, komunikasi, bimbingan, dan kegiatan kepanitiaan organisasi.",
        },
        {
          id: "06",
          role: "Teaching Factory - Rekondisi ONT Magang",
          org: "PT Industri Telekomunikasi Indonesia (Persero)/INTI, PT",
          period: "SEP 2021 — FEB 2022",
          status: "Magang • Jakarta",
          desc: "Melaksanakan rekondisi perangkat Optical Network Terminal (ONT), diagnostik perangkat keras, dan pengujian jaringan untuk memperkuat kompetensi jaringan komputer dan telekomunikasi.",
        },
      ],
    },
    skills: {
      index: "04",
      title: "KEAHLIAN TEKNIS",
      subtitle: "Matriks Kompetensi",
      setPrefix: "KUMPULAN",
      items: [
        {
          index: "01",
          mono: "SYNTAX",
          title: "Bahasa Pemrograman",
          tags: ["TypeScript", "Python", "JavaScript", "Go", "SQL"],
          footnote: "Strict typing // Idiomatis",
        },
        {
          index: "02",
          mono: "FRAMEWORKS",
          title: "Frontend & Backend",
          tags: ["Next.js", "React", "Node.js", "FastAPI", "REST APIs"],
          footnote: "SSR • Edge • REST",
        },
        {
          index: "03",
          mono: "INFERENCE",
          title: "Machine Learning & Data",
          tags: ["TensorFlow.js", "ONNX Runtime", "NumPy", "Pipeline Data"],
          footnote: "Terkuantisasi • Sisi Peramban",
        },
        {
          index: "04",
          mono: "INFRA",
          title: "Alat & Deployment",
          tags: ["Git", "Docker", "Vercel", "Linux", "CI/CD"],
          footnote: "Otomatis • Terkontainerisasi",
        },
      ],
    },
    education: {
      index: "05",
      title: "PENDIDIKAN",
      subtitle: "Kredensial Akademik",
      prefix: "AKADEMIK",
      items: [
        {
          index: "01",
          period: "SEP 2022 — AGT 2026",
          degree: "Sarjana Rekayasa Perangkat Lunak",
          institution: "Universitas Telkom",
          label: "Spesialisasi Inti & Mata Kuliah Relevan:",
          detail:
            "Arsitektur Rekayasa Perangkat Lunak, Sistem Manajemen Basis Data (MySQL), Pemrograman Web, Sistem Operasi, Cloud Computing, Algoritma & Struktur Data.",
          footer: { left: "IPK // 3.80 DARI 4.00", right: "PREDIKAT PUJIAN" },
        },
        {
          index: "02",
          period: "2019 — 2022",
          degree: "Teknik Komputer dan Jaringan (TKJ)",
          institution: "SMK Telkom Jakarta",
          label: "Spesialisasi & Kegiatan Ekstrakurikuler:",
          detail:
            "Jaringan Komputer, Administrasi Server Linux & Windows, Troubleshooting Perangkat Keras, Infrastruktur Jaringan, serta IT Club (Desain Grafis).",
          footer: { left: "NILAI AKHIR // 86.87", right: "LULUSAN TERVERIFIKASI" },
        },
      ],
    },
    contact: {
      index: "06",
      title: "KONTAK",
      subtitle: "Telemetri Langsung",
      ledger: "BUKU KOMUNIKASI",
      heading: "Mulai Konsultasi Teknis",
      subtext:
        "Terbuka untuk posisi software engineering, tantangan sistem terdistribusi, dan proyek kontrak edge machine learning. Kirim pesan langsung atau terhubung melalui saluran terverifikasi.",
      cta: "Hubungi Saya",
      channelHeader: "SALURAN TERVERIFIKASI // PESAN LANGSUNG",
      response: "RESPONS: <24 JAM",
      channels: [
        { label: "Transmisi Utama", value: "dcmargono@gmail.com", href: "mailto:dcmargono@gmail.com", icon: "arrow_forward" },
        { label: "Repositori Kode", value: "github.com/dimzkuy", href: "https://github.com/dimzkuy", icon: "north_east" },
        { label: "Profil Jaringan", value: "linkedin.com/in/dimaskuy", href: "#", icon: "north_east" },
      ],
      security: "KEAMANAN: KUNCI PGP 0x82A1",
      availability: "KETERSEDIAAN: TERBUKA",
    },
    footer: {
      archiveTitle: "INDEKS // ARSIP & PRAKTIK",
      archiveDesc:
        "Portofolio editorial berdisiplin tinggi yang menyeimbangkan arsitektur software engineering dengan kejelasan tipografi broadsheet.",
      navTitle: "Daftar Navigasi",
      dispatchesTitle: "Saluran Terverifikasi",
      navItems: [
        { href: "#about", label: "01 / Tentang" },
        { href: "#projects", label: "02 / Proyek" },
        { href: "#experience", label: "03 / Pengalaman" },
        { href: "#contact", label: "04 / Kontak" },
      ],
      copyright: "Hak cipta dilindungi undang-undang.",
    },
  },
};

// # Section Header Component
function SectionHeader({ index, title, subtitle }) {
  return (
    <div
      style={{ borderBottom: "1.5px solid #3D1106" }}
      className="flex items-baseline justify-between pb-2 mb-16"
    >
      <div className="flex items-center gap-2">
        <span className="w-3 h-3 inline-block" style={{ background: "#3D1106" }} />
        <h2
          className="text-label-lg uppercase tracking-widest font-bold"
          style={{ color: "#242120" }}
        >
          {index} / {title}
        </h2>
      </div>
      <span className="text-headline-sm italic" style={{ color: "#716966" }}>
        {subtitle}
      </span>
    </div>
  );
}

// # Tag Chip Component
function Tag({ children }) {
  return (
    <span
      className="px-2 py-[2px] text-label-sm"
      style={{
        background: "#F5F1EF",
        border: "1px solid rgba(113,105,102,0.3)",
        color: "#242120",
      }}
    >
      {children}
    </span>
  );
}

// # Project Card Component
function ProjectCard({ project, icon, labels }) {
  return (
    <article
      className="flex flex-col bg-white transition-transform hover:-translate-y-1"
      style={{
        border: "1.5px solid #3D1106",
        boxShadow: "4px 4px 0px 0px #3D1106",
      }}
    >
      {/* # Screenshot / Project Image */}
      <div
        className="relative overflow-hidden flex flex-col items-center justify-center text-center bg-[#F5F1EF]"
        style={{
          aspectRatio: "15/8",
          borderBottom: "1.5px solid #3D1106",
        }}
      >
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover object-top select-none pointer-events-none"
            draggable={false}
          />
        ) : (
          <div className="w-full h-full absolute inset-0 flex flex-col items-center justify-center p-6">
            <div
              className="w-full h-full flex flex-col items-center justify-center text-center p-6"
              style={{
                border: "1px dashed rgba(61,17,6,0.25)",
                background: "rgba(255,255,255,0.5)",
              }}
            >
              <span style={{ color: "#716966" }}>{icon}</span>
              <span className="text-label-sm uppercase tracking-widest font-bold mt-3 block" style={{ color: "#242120" }}>
                {labels.placeholder}
              </span>
              <span className="text-body-sm mt-1 block" style={{ color: "#716966" }}>
                {project.placeholderText}
              </span>
            </div>
          </div>
        )}
      </div>

      {/* # Body */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-baseline justify-between mb-1">
            <h3 className="text-headline-lg" style={{ color: "#242120" }}>{project.title}</h3>
            <span className="font-mono text-label-sm" style={{ color: "#716966" }}>
              {project.year}
            </span>
          </div>
          <p className="text-body-md mb-6 leading-normal" style={{ color: "#645d5a" }}>
            {project.description}
          </p>

          {/* # Tech stack tags */}
          <div
            className="space-y-1 mb-6 py-2"
            style={{ borderTop: "1px solid rgba(61,17,6,0.15)", borderBottom: "1px solid rgba(61,17,6,0.15)" }}
          >
            {Object.entries(project.tags).map(([cat, items]) => (
              <div key={cat} className="flex items-center gap-1 flex-wrap">
                <span className="text-[10px] font-bold uppercase w-28" style={{ color: "#716966" }}>
                  {cat}:
                </span>
                {items.map((t) => <Tag key={t}>{t}</Tag>)}
              </div>
            ))}
          </div>
        </div>

        {/* # Contribution block */}
        <div
          className="pt-4 p-3 mt-2"
          style={{
            borderTop: "1.5px solid #3D1106",
            background: "rgba(245,241,239,0.4)",
          }}
        >
          <span className="text-label-sm uppercase tracking-wider font-bold block mb-1" style={{ color: "#3D1106" }}>
            {labels.contributionTitle}
          </span>
          <p className="text-body-sm leading-relaxed" style={{ color: "#645d5a" }}>
            {project.contribution}
          </p>

          {/* # Links */}
          <div
            className="flex items-center gap-4 mt-4 pt-3"
            style={{ borderTop: "1px solid rgba(61,17,6,0.2)" }}
          >
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-label-sm uppercase tracking-wider font-bold transition-colors hover:text-[#3D1106]"
                style={{ color: "#242120" }}
              >
                <span>{labels.githubBtn}</span>
                <span className="material-symbols-outlined" style={{ fontSize: 14 }}>north_east</span>
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-label-sm uppercase tracking-wider font-bold transition-colors hover:text-[#3D1106]"
                style={{ color: "#242120" }}
              >
                <span>{labels.demoBtn}</span>
                <span className="material-symbols-outlined" style={{ fontSize: 14 }}>north_east</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}

// # Main Home Page
export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [lang, setLang] = useState("EN");
  const [currentYear, setCurrentYear] = useState("2025");

  useEffect(() => {
    setCurrentYear(new Date().getFullYear().toString());
    const saved = window.localStorage.getItem("preferred_lang");
    if (saved === "ID" || saved === "EN") {
      setLang(saved);
    }
  }, []);

  const handleSetLang = (l) => {
    setLang(l);
    try {
      window.localStorage.setItem("preferred_lang", l);
    } catch {
      // # LocalStorage error ignored
    }
  };

  const t = CONTENT[lang] || CONTENT.EN;

  return (
    <>
      {/* # Header */}
      <header
        className="fixed top-0 left-0 right-0 z-50 bg-white"
        style={{ borderBottom: "1.5px solid #3D1106" }}
      >
        <div
          className="h-16 max-w-[76rem] mx-auto flex items-center justify-between"
          style={{ paddingInline: "1.25rem" }}
        >
          {/* # Logo */}
          <a
            href="#"
            className="flex items-center gap-2 text-label-md uppercase tracking-wider transition-colors hover:text-[#3D1106]"
            style={{ color: "#242120" }}
          >
            <span className="w-2 h-2 inline-block" style={{ background: "#3D1106" }} />
            <span>dimzkuy</span>
          </a>

          {/* # Desktop nav & Language Switcher */}
          <div className="hidden lg:flex items-center gap-8">
            <nav className="flex items-center gap-8">
              {t.nav.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="text-label-md uppercase tracking-wider transition-colors py-1 font-bold hover:text-[#3D1106]"
                  style={{
                    color: "#242120",
                    borderBottom: "1px solid #3D1106",
                  }}
                >
                  {l.label}
                </a>
              ))}
            </nav>

            {/* # Language Switcher EN \ ID */}
            <div className="flex items-center gap-1.5 pl-6 font-mono text-label-sm uppercase tracking-wider border-l border-[#3D1106]/20 select-none">
              <button
                type="button"
                onClick={() => handleSetLang("EN")}
                className={`transition-colors font-bold ${lang === "EN"
                  ? "text-[#3D1106] underline decoration-2 underline-offset-4"
                  : "text-[#716966] hover:text-[#242120]"
                  }`}
                aria-label="Switch to English"
              >
                EN
              </button>
              <span className="text-[#716966]">\</span>
              <button
                type="button"
                onClick={() => handleSetLang("ID")}
                className={`transition-colors font-bold ${lang === "ID"
                  ? "text-[#3D1106] underline decoration-2 underline-offset-4"
                  : "text-[#716966] hover:text-[#242120]"
                  }`}
                aria-label="Switch to Indonesian"
              >
                ID
              </button>
            </div>
          </div>

          {/* # Mobile Right Cluster (Language + Hamburger) */}
          <div className="lg:hidden flex items-center gap-4">
            <div className="flex items-center gap-1.5 font-mono text-label-sm uppercase tracking-wider select-none">
              <button
                type="button"
                onClick={() => handleSetLang("EN")}
                className={`font-bold transition-colors ${lang === "EN"
                  ? "text-[#3D1106] underline decoration-2 underline-offset-4"
                  : "text-[#716966]"
                  }`}
              >
                EN
              </button>
              <span className="text-[#716966]">\</span>
              <button
                type="button"
                onClick={() => handleSetLang("ID")}
                className={`font-bold transition-colors ${lang === "ID"
                  ? "text-[#3D1106] underline decoration-2 underline-offset-4"
                  : "text-[#716966]"
                  }`}
              >
                ID
              </button>
            </div>

            <button
              className="flex flex-col gap-1.5 p-2"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <span className="w-5 h-[1.5px] block" style={{ background: "#3D1106" }} />
              <span className="w-5 h-[1.5px] block" style={{ background: "#3D1106" }} />
              <span className="w-5 h-[1.5px] block" style={{ background: "#3D1106" }} />
            </button>
          </div>
        </div>

        {/* # Mobile menu */}
        {menuOpen && (
          <div className="lg:hidden bg-white" style={{ borderTop: "1px solid #3D1106" }}>
            {t.nav.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="block px-5 py-3 text-label-md uppercase tracking-wider font-bold transition-colors hover:text-[#3D1106]"
                style={{
                  color: "#242120",
                  borderBottom: "1px solid rgba(61,17,6,0.1)",
                }}
              >
                {l.label}
              </a>
            ))}
          </div>
        )}
      </header>

      <main className="flex-1 pt-16 bg-white">
        {/* # Hero */}
        <section
          className="w-full max-w-[76rem] mx-auto px-5 md:px-16 pt-20 pb-24"
          style={{ borderBottom: "1.5px solid #3D1106" }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* # Left column */}
            <div className="lg:col-span-7 flex flex-col items-start pt-2">
              {/* # Headline */}
              <h1
                className="text-display mb-6 tracking-tight"
                style={{ color: "#170200", lineHeight: 1.08 }}
              >
                {t.hero.titlePrefix}{" "}
                <span className="font-medium" style={{ color: "#170200" }}>
                  {t.hero.titleAmp}
                </span>{" "}
                {t.hero.titleSuffix}
              </h1>

              {/* # Subtext */}
              <p className="text-body-lg max-w-xl mb-10 leading-relaxed" style={{ color: "#645d5a" }}>
                {t.hero.subtext}
              </p>

              {/* # CTAs */}
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="https://drive.google.com/file/d/1_F3S1_g6wIXd8agTGiNBtAq7PJPLUjCS/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-10 py-4 text-label-lg uppercase tracking-wider transition-all hover:translate-x-[1px] hover:translate-y-[1px]"
                  style={{
                    background: "#3D1106",
                    color: "#fff",
                    border: "1.5px solid #3D1106",
                    boxShadow: "3px 3px 0px 0px #3D1106",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "2px 2px 0px 0px #3D1106")}
                  onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "3px 3px 0px 0px #3D1106")}
                >
                  <span>{t.hero.downloadCv}</span>
                  <span className="material-symbols-outlined" style={{ fontSize: 18 }}>arrow_downward</span>
                </a>

                <a
                  href="https://github.com/dimzkuy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-10 py-4 text-label-lg uppercase tracking-wider transition-all hover:translate-x-[1px] hover:translate-y-[1px]"
                  style={{
                    background: "#fff",
                    color: "#242120",
                    border: "1.5px solid #3D1106",
                    boxShadow: "3px 3px 0px 0px #3D1106",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "#F5F1EF";
                    e.currentTarget.style.boxShadow = "2px 2px 0px 0px #3D1106";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "#fff";
                    e.currentTarget.style.boxShadow = "3px 3px 0px 0px #3D1106";
                  }}
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    />
                  </svg>
                  <span>{t.hero.github}</span>
                </a>
              </div>
            </div>

            {/* # Right column: Interactive 3D Lanyard */}
            <div className="lg:col-span-5 flex flex-col items-center justify-start lg:-mt-[84px]">
              <div
                className="w-full relative flex items-center justify-center"
                style={{ width: "100%", height: "640px" }}
              >
                <Lanyard
                  frontImage="/assets/img/profile.jpg"
                  backImage="/assets/img/back.png"
                  strapImage="/assets/img/band.png"
                  finish="matte"
                  size={0.52}
                  strapLength={0.42}
                  strapColor="#3d1106"
                  elasticity={0.35}
                />
              </div>
            </div>
          </div>
        </section>

        {/* # About */}
        <section
          id="about"
          className="w-full max-w-[76rem] mx-auto px-5 md:px-16 py-16"
          style={{ borderBottom: "1.5px solid #3D1106" }}
        >
          <SectionHeader index={t.about.index} title={t.about.title} subtitle={t.about.subtitle} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-body-lg leading-relaxed" style={{ color: "#645d5a" }}>
            <p>{t.about.p1}</p>
            <p>{t.about.p2}</p>
          </div>
        </section>

        {/* # Projects */}
        <section
          id="projects"
          className="w-full max-w-[76rem] mx-auto px-5 md:px-16 py-24"
          style={{ borderBottom: "1.5px solid #3D1106" }}
        >
          <SectionHeader index={t.projects.index} title={t.projects.title} subtitle={t.projects.subtitle} />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {t.projects.items.map((p) => (
              <ProjectCard
                key={p.id}
                project={p}
                icon={PROJECT_ICONS[p.id]}
                labels={{
                  placeholder: t.projects.placeholder,
                  deployed: t.projects.deployed,
                  contributionTitle: t.projects.contributionTitle,
                  githubBtn: t.projects.githubBtn,
                  demoBtn: t.projects.demoBtn,
                }}
              />
            ))}
          </div>
        </section>

        {/* # Experience */}
        <section
          id="experience"
          className="w-full max-w-[76rem] mx-auto px-5 md:px-16 py-24"
          style={{ borderBottom: "1.5px solid #3D1106" }}
        >
          <SectionHeader index={t.experience.index} title={t.experience.title} subtitle={t.experience.subtitle} />
          <div
            className="bg-white"
            style={{ border: "1.5px solid #3D1106", boxShadow: "4px 4px 0px 0px #3D1106" }}
          >
            {t.experience.items.map((e, idx) => (
              <div
                key={e.id}
                className="p-6 md:p-10 grid grid-cols-1 md:grid-cols-12 gap-4 items-start"
                style={idx !== 0 ? { borderTop: "1.5px solid #3D1106" } : {}}
              >
                <div className="md:col-span-4 flex flex-col">
                  <span className="text-label-sm uppercase tracking-wider font-bold" style={{ color: "#3D1106" }}>
                    {t.experience.rolePrefix} {e.id}
                  </span>
                  <h3 className="text-headline-md mt-0.5" style={{ color: "#242120" }}>{e.role}</h3>
                  <span className="text-body-md font-medium mt-1" style={{ color: "#716966" }}>{e.org}</span>
                </div>
                <div className="md:col-span-3">
                  <span
                    className="inline-block px-2 py-1 font-mono text-label-sm"
                    style={{ background: "#F5F1EF", border: "1px solid #3D1106", color: "#242120" }}
                  >
                    {e.period}
                  </span>
                  <span className="block text-label-sm uppercase mt-1" style={{ color: "#716966" }}>{e.status}</span>
                </div>
                <div className="md:col-span-5">
                  <p className="text-body-md leading-relaxed" style={{ color: "#645d5a" }}>{e.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* # Skills */}
        <section
          id="skills"
          className="w-full max-w-[76rem] mx-auto px-5 md:px-16 py-24"
          style={{ borderBottom: "1.5px solid #3D1106" }}
        >
          <SectionHeader index={t.skills.index} title={t.skills.title} subtitle={t.skills.subtitle} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.skills.items.map((s) => (
              <div
                key={s.index}
                className="bg-white p-6 flex flex-col justify-between"
                style={{ border: "1.5px solid #3D1106", boxShadow: "3px 3px 0px 0px #3D1106" }}
              >
                <div>
                  <div
                    className="pb-2 mb-4 flex items-center justify-between"
                    style={{ borderBottom: "1px solid #3D1106" }}
                  >
                    <span className="text-label-sm uppercase tracking-wider font-bold" style={{ color: "#3D1106" }}>
                      {t.skills.setPrefix} // {s.index}
                    </span>
                    <span className="font-mono text-[10px]" style={{ color: "#716966" }}>{s.mono}</span>
                  </div>
                  <h3 className="text-headline-sm mb-4" style={{ color: "#242120" }}>{s.title}</h3>
                  <div className="flex flex-wrap gap-1">
                    {s.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-label-sm"
                        style={{
                          background: "#F5F1EF",
                          border: "1px solid #3D1106",
                          color: "#242120",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <span className="font-mono text-[9px] uppercase mt-6 block" style={{ color: "#716966" }}>
                  {s.footnote}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* # Education */}
        <section
          id="education"
          className="w-full max-w-[76rem] mx-auto px-5 md:px-16 py-24"
          style={{ borderBottom: "1.5px solid #3D1106" }}
        >
          <SectionHeader index={t.education.index} title={t.education.title} subtitle={t.education.subtitle} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {t.education.items.map((e) => (
              <div
                key={e.index}
                className="bg-white p-10 flex flex-col justify-between"
                style={{ border: "1.5px solid #3D1106", boxShadow: "4px 4px 0px 0px #3D1106" }}
              >
                <div>
                  <div className="flex items-start justify-between mb-2">
                    <span className="text-label-sm uppercase tracking-wider font-bold" style={{ color: "#3D1106" }}>
                      {t.education.prefix} // {e.index}
                    </span>
                    <span className="font-mono text-label-sm" style={{ color: "#716966" }}>{e.period}</span>
                  </div>
                  <h3 className="text-headline-lg mb-1" style={{ color: "#242120" }}>{e.degree}</h3>
                  <p className="text-body-md font-medium mb-4" style={{ color: "#645d5a" }}>{e.institution}</p>
                  <div style={{ borderTop: "1px solid rgba(61,17,6,0.25)", paddingTop: "1rem" }}>
                    <span className="text-label-sm uppercase tracking-wider block mb-1" style={{ color: "#716966" }}>
                      {e.label}
                    </span>
                    <p className="text-body-sm" style={{ color: "#645d5a" }}>{e.detail}</p>
                  </div>
                </div>
                {e.footer && (
                  <div
                    className="mt-6 pt-2 flex items-center justify-between"
                    style={{ borderTop: "1px solid rgba(61,17,6,0.15)" }}
                  >
                    <span className="font-mono text-[9px] uppercase" style={{ color: "#716966" }}>{e.footer.left}</span>
                    <span className="text-label-sm uppercase font-bold" style={{ color: "#3D1106" }}>{e.footer.right}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* # Contact */}
        <section
          id="contact"
          className="w-full max-w-[76rem] mx-auto px-5 md:px-16 py-24"
        >
          <SectionHeader index={t.contact.index} title={t.contact.title} subtitle={t.contact.subtitle} />
          <div
            className="p-10 md:p-16 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center"
            style={{
              background: "#F5F1EF",
              border: "1.5px solid #3D1106",
              boxShadow: "6px 6px 0px 0px #3D1106",
            }}
          >
            {/* # Left */}
            <div className="lg:col-span-7">
              <span className="text-label-sm uppercase tracking-wider font-bold block mb-1" style={{ color: "#3D1106" }}>
                {t.contact.ledger}
              </span>
              <h3 className="text-headline-lg mb-3" style={{ color: "#242120" }}>{t.contact.heading}</h3>
              <p className="text-body-lg max-w-lg leading-relaxed" style={{ color: "#645d5a" }}>
                {t.contact.subtext}
              </p>

              {/* # Social Icons */}
              <div className="flex items-center gap-3 mt-5">
                <a
                  href="https://x.com/dimzkuyy_"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="X (Twitter)"
                  className="flex items-center justify-center w-9 h-9 text-[#3D1106] transition-colors hover:bg-[#3D1106] hover:text-white"
                  style={{ border: "1.5px solid #3D1106" }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/dmzmrgno/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="flex items-center justify-center w-9 h-9 text-[#3D1106] transition-colors hover:bg-[#3D1106] hover:text-white"
                  style={{ border: "1.5px solid #3D1106" }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
                  </svg>
                </a>
              </div>
            </div>

            {/* # Right */}
            <div className="lg:col-span-5 flex flex-col gap-4" style={{ borderTop: "1px solid #3D1106", paddingTop: "1.5rem" }}>
              <div
                className="flex items-center justify-between pb-2 mb-2"
                style={{ borderBottom: "1px solid #3D1106" }}
              >
                <span className="text-label-sm uppercase tracking-wider font-bold" style={{ color: "#3D1106" }}>
                  {t.contact.channelHeader}
                </span>
                <span className="font-mono text-[10px]" style={{ color: "#716966" }}>{t.contact.response}</span>
              </div>

              <div className="flex flex-col gap-3">
                {t.contact.channels.map((ch) => (
                  <a
                    key={ch.label}
                    href={ch.href}
                    target={ch.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-4 bg-white transition-all"
                    style={{ border: "1px solid #3D1106", boxShadow: "2px 2px 0px 0px #3D1106" }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translate(1px,1px)";
                      e.currentTarget.style.boxShadow = "1px 1px 0px 0px #3D1106";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "";
                      e.currentTarget.style.boxShadow = "2px 2px 0px 0px #3D1106";
                    }}
                  >
                    <div className="flex flex-col">
                      <span className="text-label-sm uppercase tracking-wider font-bold" style={{ color: "#716966" }}>
                        {ch.label}
                      </span>
                      <span className="text-body-sm font-semibold" style={{ color: "#242120" }}>{ch.value}</span>
                    </div>
                    <span className="material-symbols-outlined" style={{ color: "#3D1106", fontSize: 18 }}>{ch.icon}</span>
                  </a>
                ))}
              </div>

              <div
                className="mt-2 pt-2 flex items-center justify-between font-mono text-[9px] uppercase"
                style={{ borderTop: "1px solid rgba(61,17,6,0.3)", color: "#716966" }}
              >
                <span>{t.contact.security}</span>
                <span>{t.contact.availability}</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* # Footer */}
      <footer className="w-full bg-white" style={{ borderTop: "1.5px solid #3D1106", marginTop: "6rem" }}>
        <div className="max-w-[76rem] mx-auto px-5 md:px-16 py-16">
          <div
            className="flex flex-col md:flex-row justify-between items-start gap-10 pb-10"
            style={{ borderBottom: "1px solid #3D1106" }}
          >
            <div className="max-w-md flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 inline-block" style={{ background: "#3D1106" }} />
                <span className="text-label-md uppercase tracking-widest font-bold" style={{ color: "#242120" }}>
                  {t.footer.archiveTitle}
                </span>
              </div>
              <p className="text-body-sm" style={{ color: "#716966" }}>
                {t.footer.archiveDesc}
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-label-sm uppercase tracking-wider" style={{ color: "#716966" }}>{t.footer.navTitle}</span>
              {t.footer.navItems.map((l) => (
                <a key={l.href} href={l.href} className="text-label-md transition-colors hover:text-[#3D1106]" style={{ color: "#242120" }}>
                  {l.label}
                </a>
              ))}
            </div>
          </div>

          <div className="pt-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-2 text-label-sm" style={{ color: "#716966" }}>
            <div className="flex items-center gap-2">
              <span>© {currentYear} Dimas Cahyo Margono</span>
              <span>•</span>
              <span>{t.footer.copyright}</span>
            </div>
            <div className="text-label-sm uppercase tracking-wider font-bold" style={{ color: "#242120" }}>
              {t.footer.tagline}
            </div>
          </div>
        </div>
      </footer >
    </>
  );
}
