"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { GitHubCalendar } from "react-github-calendar";
import AOS from "aos";
import "aos/dist/aos.css";
import { getProjectsByLang, PROJECT_ICONS } from "@/data/projects";
import TechText from "@/components/TechText";
import ProfileFrame from "@/components/ProfileFrame";
import {
  siJavascript, siPython, siPhp, siHtml5, siCss,
  siReact, siNextdotjs, siTailwindcss, siFastapi,
  siGooglecloud, siFirebase, siVercel,
  siSupabase, siMysql,
  siTensorflow, siKeras, siOnnx,
  siGit, siGithub, siGithubactions, siPostman, siLinux, siVirtualbox, siFigma, siDocker,
} from "simple-icons";

// # Bilingual Content
const CONTENT = {
  EN: {
    nav: [
      { href: "#about", label: "About" },
      { href: "#projects", label: "Projects" },
      { href: "#experience", label: "Experience" },
      { href: "#techstack", label: "Tech Stack" },
      { href: "#education", label: "Education" },
      { href: "#contact", label: "Contact" },
    ],
    hero: {
      titlePrefix: "Software Engineer",
      titleAmp: "&",
      titleSuffix: "Problem Solver.",
      subtext:
        "Developing web applications with an interest in backend systems, machine learning, and cloud technologies. Focused on building practical solutions, integrating different technologies, and continuously improving through hands-on projects and real-world challenges.",
      downloadCv: "Download CV",
      github: "GitHub",
    },
    about: {
      index: "01",
      title: "ABOUT",
      p1: "I am a software developer with a background in Software Engineering and experience building full-stack web applications. I focus on connecting user interfaces, backend services, and API integrations to create practical and maintainable software solutions.",
      p2: "My experience spans web development, machine learning integration, and cloud deployment. I value clean implementation, thoughtful technical decisions, and reliable applications that balance functionality, maintainability, and user needs."
    },
    projects: {
      index: "02",
      title: "FEATURED PROJECTS",
      placeholder: "[ SCREENSHOT PLACEHOLDER ]",
      contributionTitle: "My Contribution",
      githubBtn: "[ GitHub Repo ]",
      demoBtn: "[ Live Demo ]",
    },
    experience: {
      index: "04",
      title: "EXPERIENCE",
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
          status: "MSIB • Full Graduate",
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
          role: "Teaching Factory - ONT Refurbishment",
          org: "PT. Industri Telekomunikasi Indonesia (Persero)/INTI",
          period: "SEP 2021 — FEB 2022",
          status: "Internship • On-site",
          desc: "Performed Optical Network Terminal (ONT) device refurbishment, hardware diagnostics, and quality inspection, building practical competencies in computer networking and telecommunications equipment.",
        },
      ],
    },
    techstack: {
      index: "05",
      title: "TECH STACK",
      items: [
        {
          index: "01",
          mono: "LANGUAGES · FRAMEWORKS",
          title: "Frontend & Backend",
          tags: [
            { label: "JavaScript", icon: "siJavascript" },
            { label: "Python", icon: "siPython" },
            { label: "PHP", icon: "siPhp" },
            { label: "HTML", icon: "siHtml5" },
            { label: "CSS", icon: "siCss" },
            { label: "React", icon: "siReact" },
            { label: "Next.js", icon: "siNextdotjs" },
            { label: "Tailwind CSS", icon: "siTailwindcss" },
            { label: "FastAPI", icon: "siFastapi" },
          ],
        },
        {
          index: "02",
          mono: "CLOUD · PLATFORMS",
          title: "Cloud Platforms",
          tags: [
            { label: "Google Cloud Platform", icon: "siGooglecloud" },
            { label: "Firebase", icon: "siFirebase" },
            { label: "Vercel", icon: "siVercel" },
          ],
        },
        {
          index: "03",
          mono: "DATABASE · SERVICES",
          title: "Databases & Backend Services",
          tags: [
            { label: "Supabase", icon: "siSupabase" },
            { label: "MySQL", icon: "siMysql" },
          ],
        },
        {
          index: "04",
          mono: "ML · INFERENCE",
          title: "Machine Learning",
          tags: [
            { label: "TensorFlow", icon: "siTensorflow" },
            { label: "Keras", icon: "siKeras" },
            { label: "ONNX Runtime", icon: "siOnnx" },
          ],
        },
        {
          index: "05",
          mono: "TOOLS · WORKFLOW",
          title: "Development Tools",
          tags: [
            { label: "Git", icon: "siGit" },
            { label: "GitHub", icon: "siGithub" },
            { label: "GitHub Actions", icon: "siGithubactions" },
            { label: "Docker", icon: "siDocker" },
            { label: "Postman", icon: "siPostman" },
            { label: "Linux", icon: "siLinux" },
            { label: "VirtualBox", icon: "siVirtualbox" },
            { label: "Figma", icon: "siFigma" },
            { label: "VS Code", icon: "siVisualstudiocode" },
          ],
        },
      ],
    },
    education: {
      index: "06",
      title: "EDUCATION",
      prefix: "ACADEMIC",
      items: [
        {
          index: "01",
          period: "2022 — 2026",
          degree: "Software Engineering",
          institution: "Telkom University",
          label: "Relevant Coursework:",
          detail:
            "Web Development, Database Systems (MySQL), Operating Systems, Cloud Computing, Algorithms & Data Structures, and Software Architecture.",
          footer: { left: "GPA // 3.80 OF 4.00", right: "BACHELOR'S DEGREE" },
        },
        {
          index: "02",
          period: "2019 — 2022",
          degree: "Computer and Network Engineering",
          institution: "SMK Telkom Jakarta",
          label: "Field of Study & Activities:",
          detail:
            "Computer Networking, Linux & Windows Operating System, Hardware Troubleshooting, Network Infrastructure, and Graphic Design.",
          footer: { left: "FINAL SCORE // 86.87", right: "VOCATIONAL EDUCATION" },
        },
      ],
    },
    contact: {
      index: "07",
      title: "CONTACT",
      heading: "Let's Connect!",
      subtext:
        "Open to new opportunities, collaborations, and conversations about software engineering, cloud technologies, and innovative ideas.",
      channelHeader: "CONTACT CHANNELS",
      channels: [
        { label: "Email", value: "dcmargono@gmail.com", href: "mailto:dcmargono@gmail.com", icon: "north_east" },
        { label: "GitHub", value: "github.com/dimzkuy", href: "https://github.com/dimzkuy", icon: "north_east" },
        { label: "LinkedIn", value: "linkedin.com/in/dcmargono", href: "https://www.linkedin.com/in/dcmargono/", icon: "north_east" },
      ],
    },

    footer: {
      archiveTitle: "INDEX // ENGINEERING",
      archiveDesc:
        "Writing code, solving problems, and turning ideas into working software.",
      navTitle: "Navigation",
      dispatchesTitle: "Explore",
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
      { href: "#techstack", label: "Tech Stack" },
      { href: "#education", label: "Pendidikan" },
      { href: "#contact", label: "Kontak" },
    ],
    hero: {
      titlePrefix: "Software Engineer",
      titleAmp: "&",
      titleSuffix: "Pemecah Masalah.",
      subtext:
        "Mengembangkan aplikasi web dengan ketertarikan pada sistem backend, machine learning, dan teknologi cloud. Berfokus pada pembangunan solusi praktis, integrasi berbagai teknologi, serta pengembangan kemampuan melalui proyek langsung dan tantangan di dunia nyata.",
      downloadCv: "Unduh CV",
      github: "GitHub",
    },
    about: {
      index: "01",
      title: "TENTANG",
      p1: "Saya adalah seorang software developer dengan latar belakang Rekayasa Perangkat Lunak dan pengalaman dalam pengembangan aplikasi web full-stack. Saya berfokus pada pengintegrasian antarmuka pengguna, layanan backend, dan API untuk membangun solusi perangkat lunak yang fungsional dan mudah dipelihara.",
      p2: "Pengalaman saya mencakup pengembangan web, integrasi machine learning, dan deployment aplikasi ke cloud. Saya mengutamakan implementasi yang terstruktur, pertimbangan teknis yang matang, serta aplikasi yang andal dengan memperhatikan fungsionalitas, kemudahan pemeliharaan, dan kebutuhan pengguna."
    },
    projects: {
      index: "02",
      title: "PROYEK PILIHAN",
      placeholder: "[ TANGKAPAN LAYAR ]",
      deployed: "DILUNCURKAN",
      contributionTitle: "Kontribusi Saya",
      githubBtn: "[ Repositori GitHub ]",
      demoBtn: "[ Demo Langsung ]",
    },
    github: {
      index: "03",
      title: "AKTIVITAS GITHUB",
      subtitle: "Catatan Kontribusi",
    },
    experience: {
      index: "04",
      title: "PENGALAMAN",
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
          role: "Magang Web Programmer",
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
          status: "MSIB • Lulus Penuh",
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
          role: "Teaching Factory - Rekondisi ONT",
          org: "PT Industri Telekomunikasi Indonesia (Persero)/INTI",
          period: "SEP 2021 — FEB 2022",
          status: "Magang • Di lokasi",
          desc: "Melaksanakan rekondisi perangkat Optical Network Terminal (ONT), diagnostik perangkat keras, dan pengujian jaringan untuk memperkuat kompetensi jaringan komputer dan telekomunikasi.",
        },
      ],
    },
    techstack: {
      index: "05",
      title: "TECH STACK",
      items: [
        {
          index: "01",
          mono: "BAHASA · FRAMEWORK",
          title: "Frontend & Backend",
          tags: [
            { label: "JavaScript", icon: "siJavascript" },
            { label: "Python", icon: "siPython" },
            { label: "PHP", icon: "siPhp" },
            { label: "HTML", icon: "siHtml5" },
            { label: "CSS", icon: "siCss" },
            { label: "React", icon: "siReact" },
            { label: "Next.js", icon: "siNextdotjs" },
            { label: "Tailwind CSS", icon: "siTailwindcss" },
            { label: "FastAPI", icon: "siFastapi" },
          ],
        },
        {
          index: "02",
          mono: "CLOUD · PLATFORM",
          title: "Platform Cloud",
          tags: [
            { label: "Google Cloud Run", icon: "siGooglecloud" },
            { label: "Google Cloud Storage", icon: "siGooglecloud" },
            { label: "Firebase App Hosting", icon: "siFirebase" },
            { label: "Firebase", icon: "siFirebase" },
            { label: "Vercel", icon: "siVercel" },
          ],
        },
        {
          index: "03",
          mono: "DATABASE · LAYANAN",
          title: "Database & Layanan Backend",
          tags: [
            { label: "Supabase", icon: "siSupabase" },
            { label: "MySQL", icon: "siMysql" },
          ],
        },
        {
          index: "04",
          mono: "ML · INFERENSI",
          title: "Machine Learning",
          tags: [
            { label: "TensorFlow", icon: "siTensorflow" },
            { label: "Keras", icon: "siKeras" },
            { label: "ONNX Runtime", icon: "siOnnx" },
          ],
        },
        {
          index: "05",
          mono: "TOOLS · WORKFLOW",
          title: "Development Tools",
          tags: [
            { label: "Git", icon: "siGit" },
            { label: "GitHub", icon: "siGithub" },
            { label: "GitHub Actions", icon: "siGithubactions" },
            { label: "Docker", icon: "siDocker" },
            { label: "Postman", icon: "siPostman" },
            { label: "Linux", icon: "siLinux" },
            { label: "VirtualBox", icon: "siVirtualbox" },
            { label: "Figma", icon: "siFigma" },
          ],
        },
      ],
    },
    education: {
      index: "06",
      title: "PENDIDIKAN",
      prefix: "AKADEMIK",
      items: [
        {
          index: "01",
          period: "2022 — 2026",
          degree: "Sarjana Rekayasa Perangkat Lunak",
          institution: "Universitas Telkom",
          label: "Spesialisasi Inti & Mata Kuliah Relevan:",
          detail:
            "Arsitektur Rekayasa Perangkat Lunak, Sistem Manajemen Basis Data (MySQL), Pemrograman Web, Sistem Operasi, Cloud Computing, Algoritma & Struktur Data.",
          footer: { left: "IPK // 3.80 DARI 4.00", right: "GELAR SARJANA" },
        },
        {
          index: "02",
          period: "2019 — 2022",
          degree: "Teknik Komputer dan Jaringan (TKJ)",
          institution: "SMK Telkom Jakarta",
          label: "Spesialisasi & Kegiatan Ekstrakurikuler:",
          detail:
            "Jaringan Komputer, Administrasi Server Linux & Windows, Troubleshooting Perangkat Keras, Infrastruktur Jaringan, serta IT Club (Desain Grafis).",
          footer: { left: "NILAI AKHIR // 86.87", right: "PENDIDIKAN VOKASI" },
        },
      ],
    },
    contact: {
      index: "07",
      title: "KONTAK",
      heading: "Mari Terhubung!",
      subtext:
        "Terbuka untuk peluang baru, kolaborasi, dan diskusi tentang rekayasa perangkat lunak, teknologi cloud, serta ide inovatif.",
      cta: "Hubungi Saya",
      channelHeader: "CONTACT CHANNELS",
      channels: [
        { label: "Email", value: "dcmargono@gmail.com", href: "mailto:dcmargono@gmail.com", icon: "north_east" },
        { label: "GitHub", value: "github.com/dimzkuy", href: "https://github.com/dimzkuy", icon: "north_east" },
        { label: "LinkedIn", value: "linkedin.com/in/dcmargono", href: "https://www.linkedin.com/in/dcmargono/", icon: "north_east" },
      ],
    },

    footer: {
      archiveTitle: "INDEKS // REKAYASA",
      archiveDesc:
        "Menulis kode, memecahkan masalah, dan mengubah ide menjadi perangkat lunak yang bisa digunakan.",
      navTitle: "Navigasi",
      dispatchesTitle: "Jelajahi",
      navItems: [
        { href: "#about", label: "01 / Tentang" },
        { href: "#projects", label: "02 / Proyek" },
        { href: "#experience", label: "03 / Pengalaman" },
        { href: "#contact", label: "04 / Kontak" },
      ],
      copyright: "Hak cipta dilindungi.",
    },
  },
};

// # Section Header Component
function SectionHeader({ index, title, subtitle }) {
  return (
    <div
      data-aos="fade-up"
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

// # Simple Icons lookup map
const SI_ICONS = {
  siJavascript, siPython, siPhp, siHtml5, siCss,
  siReact, siNextdotjs, siTailwindcss, siFastapi,
  siGooglecloud, siFirebase, siVercel,
  siSupabase, siMysql,
  siTensorflow, siKeras, siOnnx,
  siGit, siGithub, siGithubactions, siPostman, siLinux, siVirtualbox, siFigma, siDocker,
};

// # Tech Stack Tag with optional brand icon
function TechTag({ label, iconKey }) {
  const si = iconKey ? SI_ICONS[iconKey] : null;
  return (
    <span
      className="inline-flex items-center gap-1.5 px-2 py-1 text-label-sm"
      style={{
        background: "#F5F1EF",
        border: "1px solid #3D1106",
        color: "#242120",
      }}
    >
      {si && (
        <svg
          role="img"
          aria-hidden="true"
          viewBox="0 0 24 24"
          width="13"
          height="13"
          style={{ flexShrink: 0, fill: "#242120" }}
        >
          <path d={si.path} />
        </svg>
      )}
      {label}
    </span>
  );
}

// # GitHub Contribution Graph Component
function GitHubContributionGraph({ lang = "EN" }) {
  const isId = lang === "ID";
  const githubUsername = "dimzkuy";
  const [isMounted, setIsMounted] = useState(false);
  const [selectedYear, setSelectedYear] = useState(2026);
  const [totalContributions, setTotalContributions] = useState(0);
  const [allTimeContributions, setAllTimeContributions] = useState(0);
  const [currentStreak, setCurrentStreak] = useState(0);
  const [longestStreak, setLongestStreak] = useState(0);
  const yearOptions = [2026, 2025, 2024, 2023, 2022];
  const panelStyle = {
    background: "#F5F1EF",
    border: "1.5px solid #3D1106",
    boxShadow: "5px 5px 0px 0px #3D1106",
  };

  const calculateStreaks = (entries) => {
    if (!Array.isArray(entries) || entries.length === 0) {
      return { current: 0, longest: 0 };
    }

    const normalizedEntries = entries.map((entry) => ({
      ...entry,
      count: Number(entry.count) || 0,
    }));

    let current = 0;
    for (let index = normalizedEntries.length - 1; index >= 0; index -= 1) {
      if ((normalizedEntries[index].count || 0) > 0) {
        current += 1;
      } else {
        break;
      }
    }

    let longest = 0;
    let streakRun = 0;

    normalizedEntries.forEach((entry) => {
      if ((entry.count || 0) > 0) {
        streakRun += 1;
        longest = Math.max(longest, streakRun);
      } else {
        streakRun = 0;
      }
    });

    return { current, longest };
  };

  useEffect(() => {
    setIsMounted(true);
    const timer = setTimeout(() => {
      if (typeof window !== "undefined" && window.AOS) {
        window.AOS.refresh();
      } else {
        AOS.refresh();
      }
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    let isCancelled = false;

    fetch(`https://github-contributions-api.jogruber.de/v4/${githubUsername}?y=${selectedYear}&client=portfolio`)
      .then((response) => response.json())
      .then((data) => {
        if (isCancelled || !data || !Array.isArray(data.contributions)) return;

        const total = data.contributions.reduce((sum, item) => sum + (Number(item.count) || 0), 0);
        setTotalContributions(total);
        setTimeout(() => AOS.refresh(), 100);
      })
      .catch(() => {
        if (!isCancelled) setTotalContributions(0);
      });

    fetch(`https://github-contributions-api.jogruber.de/v4/${githubUsername}?client=portfolio`)
      .then((response) => response.json())
      .then((data) => {
        if (isCancelled || !data || !Array.isArray(data.contributions)) return;

        const total = data.contributions.reduce((sum, item) => sum + (Number(item.count) || 0), 0);
        setAllTimeContributions(total);

        const streaks = calculateStreaks(data.contributions);
        setCurrentStreak(streaks.current);
        setLongestStreak(streaks.longest);
        setTimeout(() => AOS.refresh(), 100);
      })
      .catch(() => {
        if (!isCancelled) {
          setAllTimeContributions(0);
          setCurrentStreak(0);
          setLongestStreak(0);
        }
      });

    return () => {
      isCancelled = true;
    };
  }, [githubUsername, isMounted, selectedYear]);

  if (!isMounted) {
    return (
      <div className="mt-14">
        <div
          className="flex items-center justify-between gap-4 pb-2 mb-5"
          style={{ borderBottom: "1.5px solid #3D1106" }}
        >
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 inline-block" style={{ background: "#3D1106" }} />
            <h3 className="text-label-lg uppercase tracking-wider font-bold" style={{ color: "#242120" }}>
              {isId ? "03 / Aktivitas Open Source" : "03 / Open Source Activity"}
            </h3>
          </div>
          <span className="text-headline-sm italic" style={{ color: "#716966" }}>
            {isId ? "Catatan Kontribusi" : "Commits"}
          </span>
        </div>

        <div style={panelStyle}>
          <div className="px-4 py-5 md:px-6 md:py-6">
            <div className="h-28 w-full rounded-[2px] border border-dashed border-[#3D1106]/40 bg-[#F6F0EE] animate-pulse" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-14">
      <div
        className="flex items-center justify-between gap-4 pb-2 mb-5"
        style={{ borderBottom: "1.5px solid #3D1106" }}
      >
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 inline-block" style={{ background: "#3D1106" }} />
          <h3 className="text-label-lg uppercase tracking-wider font-bold" style={{ color: "#242120" }}>
            {isId ? "03 / Aktivitas Open Source" : "03 / Open Source Activity"}
          </h3>
        </div>
      </div>

      <div style={panelStyle}>
        <div className="flex items-center justify-between gap-4 px-4 py-3 md:px-5" style={{ borderBottom: "1.5px solid #3D1106" }}>
          <div className="flex items-center gap-2">
            <span className="text-label-sm uppercase tracking-wider font-bold" style={{ color: "#3D1106" }}>
              {isId ? "TELEMETRI // REPOSITORI GITHUB" : "TELEMETRY // GITHUB REPOSITORIES"}
            </span>
          </div>

          <div className="flex items-center gap-3 flex-wrap justify-end">
            <span className="inline-flex items-center gap-2 px-3 py-1 text-label-sm uppercase" style={{ background: "#F6F0EE", border: "1px solid #3D1106", color: "#242120" }}>
              {isId ? "STREAK SAAT INI:" : "CURRENT STREAK:"} <strong style={{ fontWeight: 700 }}>{currentStreak} {isId ? "hari" : currentStreak === 1 ? "day" : "days"}</strong>
            </span>
            <span className="inline-flex items-center gap-2 px-3 py-1 text-label-sm uppercase" style={{ background: "#F6F0EE", border: "1px solid #3D1106", color: "#242120" }}>
              {isId ? "STREAK TERPANJANG:" : "LONGEST STREAK:"} <strong style={{ fontWeight: 700 }}>{longestStreak} {isId ? "hari" : longestStreak === 1 ? "day" : "days"}</strong>
            </span>
            <a
              href={`https://github.com/${githubUsername}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3 py-1 text-label-sm uppercase font-bold transition-colors hover:translate-x-[1px] hover:translate-y-[1px]"
              style={{ background: "#3D1106", color: "#fff", border: "1.5px solid #3D1106", boxShadow: "2px 2px 0px 0px #3D1106" }}
            >
              GITHUB.COM/{githubUsername.toUpperCase()}
              <span className="material-symbols-outlined" style={{ fontSize: 14 }}>north_east</span>
            </a>
          </div>
        </div>
        <div className="px-4 py-3 md:px-6 md:py-4">
          <div className="mb-2 flex items-center justify-between gap-6">
            <div className="flex-1">
              <div className="flex items-end gap-2">
                <span className="text-display-mobile leading-none font-bold" style={{ color: "#242120" }}>
                  {isId ? "Aktivitas GitHub" : "GitHub Activity"}
                </span>
              </div>
              <div className="mt-2 text-[13px] uppercase tracking-[0.08em]" style={{ color: "#3D1106" }}>
                <span>{allTimeContributions.toLocaleString(isId ? "id-ID" : "en-US")} {isId ? "total kontribusi" : "total contributions"}</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <label className="text-label-sm uppercase tracking-wider font-bold" style={{ color: "#3D1106" }} htmlFor="github-year-select">
                {isId ? "Tahun" : "Year"}
              </label>
              <div style={{ position: "relative" }}>
                <select
                  id="github-year-select"
                  value={selectedYear}
                  onChange={(event) => setSelectedYear(Number(event.target.value))}
                  className="text-label-sm uppercase tracking-wider font-bold"
                  style={{
                    minWidth: "94px",
                    padding: "0.6rem 2.2rem 0.6rem 0.8rem",
                    border: "1.5px solid #3D1106",
                    background: "#3D1106",
                    color: "#F7F3F0",
                    boxShadow: "3px 3px 0px 0px #3D1106",
                    outline: "none",
                    cursor: "pointer",
                    appearance: "none",
                    WebkitAppearance: "none",
                    MozAppearance: "none",
                    backgroundImage: "url('data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2712%27 height=%2712%27 viewBox=%270 0 24 24%27 fill=%27none%27 stroke=%27%23F7F3F0%27 stroke-width=%272.5%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27%3E%3Cpath d=%27M6 9l6 6 6-6%27/%3E%3C/svg%3E')",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "right 0.75rem center",
                    backgroundSize: "12px 12px",
                  }}
                >
                  {yearOptions.map((year) => (
                    <option key={year} value={year} style={{ background: "#F6F0EE", color: "#3D1106" }}>
                      {year}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div className="overflow-x-auto pb-2 github-calendar-container">
            <div className="w-full" style={{ color: "#242120" }}>
              <GitHubCalendar
                username={githubUsername}
                year={selectedYear}
                color="#3D1106"
                blockSize={12}
                blockMargin={4}
                fontSize={10}
                style={{
                  width: "100%",
                  maxWidth: "100%",
                  fontFamily: "var(--font-sans)",
                }}
                blockRadius={2}
                showColorLegend={false}
                showTotalCount={false}
                labels={{
                  totalCount: isId ? "{{count}} kontribusi pada {{year}}" : "{{count}} contributions in {{year}}",
                  legend: { less: isId ? "Sedikit" : "Less", more: isId ? "Banyak" : "More" },
                }}
                theme={{
                  light: ["#ebe1da", "#d7c1ae", "#c48d65", "#8a4b3d", "#3d1106"],
                  dark: ["#ebe1da", "#d7c1ae", "#c48d65", "#8a4b3d", "#3d1106"],
                }}
              />
            </div>
          </div>

          <div className="mt-4 pt-3 flex items-center justify-between gap-3" style={{ borderTop: "1.5px solid #3D1106" }}>
            <div className="text-[10px] uppercase" style={{ color: "#716966" }}>
              <span>{totalContributions} {isId ? `kontribusi pada ${selectedYear}` : `contributions in ${selectedYear}`}</span>
            </div>

            <div className="flex items-center gap-2 text-[10px] uppercase" style={{ color: "#716966" }}>
              <span>{isId ? "Sedikit" : "Less"}</span>
              {[
                "#f3efe9",
                "#e0cbbd",
                "#c68d6b",
                "#8c4d3d",
                "#3f1f19",
              ].map((color, idx) => (
                <span
                  key={`${color}-${idx}`}
                  style={{
                    width: "11px",
                    height: "11px",
                    borderRadius: "2px",
                    background: color,
                    display: "inline-block",
                    border: "1px solid rgba(61,17,6,0.08)",
                  }}
                />
              ))}
              <span>{isId ? "Banyak" : "More"}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// # Project Card Component
function ProjectCard({ project, icon, labels, aosDelay = 0 }) {
  return (
    <article
      data-aos="fade-up"
      data-aos-delay={aosDelay}
      className="flex flex-col bg-white transition-transform hover:-translate-y-1"
      style={{
        border: "1.5px solid #3D1106",
        boxShadow: "3px 3px 0px 0px #3D1106",
      }}
    >
      {/* # Screenshot / Project Image */}
      <div
        className="relative overflow-hidden flex flex-col items-center justify-center text-center bg-[#F5F1EF]"
        style={{
          aspectRatio: "16/9",
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

        {/* Top-left Badge */}
        <div
          className="absolute top-2 left-2 px-1.5 py-[2px] text-[9.5px] font-bold uppercase tracking-wider select-none pointer-events-none"
          style={{
            zIndex: 30,
            background: "#F5F1EF",
            color: "#3D1106",
            border: "1px solid #3D1106",
            boxShadow: "1.5px 1.5px 0px 0px #3D1106",
          }}
        >
          {project.badge || "PROJECT"}
        </div>
      </div>

      {/* # Body */}
      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-baseline justify-between mb-1">
            <h3 className="text-base font-semibold tracking-tight" style={{ color: "#242120", fontFamily: "var(--font-serif)" }}>
              {project.title}
            </h3>
            <span className="font-mono text-label-sm" style={{ color: "#716966" }}>
              {project.year}
            </span>
          </div>
          <p className="text-body-sm mb-4 leading-normal" style={{ color: "#645d5a" }}>
            {project.description}
          </p>

          {/* # Tech stack tags */}
          <div
            className="flex items-center gap-1 flex-wrap mb-4 py-1.5"
            style={{ borderTop: "1px solid rgba(61,17,6,0.15)", borderBottom: "1px solid rgba(61,17,6,0.15)" }}
          >
            {(Array.isArray(project.tags) ? project.tags : Object.values(project.tags).flat()).map((t) => (
              <Tag key={t}>{t}</Tag>
            ))}
          </div>
        </div>

        {/* # Contribution block */}
        <div
          className="pt-3 p-2.5 mt-1"
          style={{
            borderTop: "1.5px solid #3D1106",
            background: "rgba(245,241,239,0.4)",
          }}
        >
          <span className="text-label-sm uppercase tracking-wider font-bold block mb-1" style={{ color: "#3D1106" }}>
            {labels.contributionTitle}
          </span>
          <p className="text-[12px] leading-relaxed" style={{ color: "#645d5a" }}>
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
  const [currentYear, setCurrentYear] = useState("2026");

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: true,
      offset: 20,
    });
    setCurrentYear(new Date().getFullYear().toString());
    const saved = window.localStorage.getItem("preferred_lang");
    if (saved === "ID" || saved === "EN") {
      setLang(saved);
    }
  }, []);

  useEffect(() => {
    AOS.refresh();
  }, [lang]);

  const handleSetLang = (l) => {
    setLang(l);
    try {
      window.localStorage.setItem("preferred_lang", l);
    } catch {
      // # LocalStorage error ignored
    }
  };

  const t = CONTENT[lang] || CONTENT.EN;
  const projectItems = getProjectsByLang(lang, true);

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
            <div className="lg:col-span-7 flex flex-col items-start pt-2" data-aos="fade-up">
              {/* # Headline */}
              <h1
                className="text-display mb-6 tracking-tight w-full max-w-2xl"
                style={{ color: "#170200", lineHeight: 1.08 }}
              >
                <span className="sr-only">
                  {t.hero.titlePrefix} {t.hero.titleAmp} {t.hero.titleSuffix}
                </span>
                <span aria-hidden="true" className="block w-full">
                  <span className="block w-full h-[52px] sm:h-[64px] md:h-[72px]">
                    <TechText
                      text={`${t.hero.titlePrefix} ${t.hero.titleAmp}`}
                      fontWeight={700}
                      fontSize={56}
                      letterSpacing={-0.02}
                      color="#170200"
                      accentColor="#3D1106"
                      align="left"
                      reveal="letter"
                      dashLength={4}
                      dashGap={2}
                      specks={15}
                      intro="none"
                      clickKick
                      guides={false}
                    />
                  </span>
                  <span className="block w-full h-[52px] sm:h-[64px] md:h-[72px] mt-1">
                    <TechText
                      text={t.hero.titleSuffix}
                      fontWeight={700}
                      fontSize={56}
                      letterSpacing={-0.02}
                      color="#170200"
                      accentColor="#3D1106"
                      align="left"
                      reveal="letter"
                      dashLength={4}
                      dashGap={2}
                      specks={15}
                      intro="none"
                      clickKick
                      guides={false}
                    />
                  </span>
                </span>
              </h1>

              {/* # Subtext */}
              <p className="text-body-lg max-w-xl mb-10 leading-relaxed" style={{ color: "#645d5a" }}>
                {t.hero.subtext}
              </p>

              {/* # CTAs */}
              <div className="flex items-center gap-3 sm:gap-4">
                <a
                  href="https://drive.google.com/file/d/1_F3S1_g6wIXd8agTGiNBtAq7PJPLUjCS/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 sm:px-10 sm:py-4 text-sm sm:text-label-lg uppercase tracking-wider whitespace-nowrap transition-all hover:translate-x-[1px] hover:translate-y-[1px]"
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
                  <span className="material-symbols-outlined shrink-0" style={{ fontSize: 18 }}>arrow_downward</span>
                </a>

                <a
                  href="https://github.com/dimzkuy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 sm:px-10 sm:py-4 text-sm sm:text-label-lg uppercase tracking-wider whitespace-nowrap transition-all hover:translate-x-[1px] hover:translate-y-[1px]"
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
                  <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24" aria-hidden="true">
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

            {/* # Right column: Profile Neubrutalism Frame */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center lg:justify-start w-full max-w-[420px] mx-auto lg:max-w-none pt-4 lg:pt-2" data-aos="fade-up" data-aos-delay="150">
              <ProfileFrame lang={lang} />
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
            <p data-aos="fade-up" data-aos-delay="100">{t.about.p1}</p>
            <p data-aos="fade-up" data-aos-delay="200">{t.about.p2}</p>
          </div>
        </section>

        {/* # Projects */}
        <section
          id="projects"
          className="w-full max-w-[76rem] mx-auto px-5 md:px-16 py-24"
          style={{ borderBottom: "1.5px solid #3D1106" }}
        >
          <SectionHeader index={t.projects.index} title={t.projects.title} subtitle={t.projects.subtitle} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectItems.map((p, idx) => (
              <ProjectCard
                key={p.id}
                project={p}
                icon={PROJECT_ICONS[p.id]}
                aosDelay={idx * 100}
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

          {/* # More Projects Button */}
          <div className="mt-12 flex justify-center" data-aos="fade-up">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-10 py-4 text-label-lg uppercase tracking-wider font-bold transition-all hover:translate-x-[1px] hover:translate-y-[1px]"
              style={{
                background: "#3D1106",
                color: "#fff",
                border: "1.5px solid #3D1106",
                boxShadow: "4px 4px 0px 0px rgba(61,17,6,0.35)",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "2px 2px 0px 0px rgba(61,17,6,0.35)")}
              onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "4px 4px 0px 0px rgba(61,17,6,0.35)")}
            >
              <span>{lang === "ID" ? "Lihat Semua Proyek" : "View All Projects"}</span>
              <span className="material-symbols-outlined" style={{ fontSize: 18 }}>north_east</span>
            </Link>
          </div>

          <div data-aos="fade-up">
            <GitHubContributionGraph lang={lang} />
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
            data-aos="fade-up"
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

        {/* # Skills / Tech Stack */}
        <section
          id="techstack"
          className="w-full max-w-[76rem] mx-auto px-5 md:px-16 py-24"
          style={{ borderBottom: "1.5px solid #3D1106" }}
        >
          <SectionHeader index={t.techstack.index} title={t.techstack.title} subtitle={t.techstack.subtitle} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {t.techstack.items.map((s, idx) => (
              <div
                key={s.index}
                data-aos="fade-up"
                data-aos-delay={idx * 100}
                className="bg-white p-6 flex flex-col"
                style={{ border: "1.5px solid #3D1106", boxShadow: "3px 3px 0px 0px #3D1106" }}
              >
                {/* Category header */}
                <div
                  className="pb-2 mb-5 flex items-center justify-between"
                  style={{ borderBottom: "1px solid #3D1106" }}
                >
                  <div className="flex items-center gap-2">
                    <span
                      className="text-label-sm uppercase tracking-wider font-bold"
                      style={{ color: "#3D1106" }}
                    >
                      {s.index} /
                    </span>
                    <h3
                      className="text-label-sm uppercase tracking-wider font-bold"
                      style={{ color: "#242120" }}
                    >
                      {s.title}
                    </h3>
                  </div>
                  <span className="font-mono text-[9px] tracking-widest" style={{ color: "#716966" }}>
                    {s.mono}
                  </span>
                </div>
                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5">
                  {s.tags.map((tag) => (
                    <TechTag key={tag.label} label={tag.label} iconKey={tag.icon} />
                  ))}
                </div>
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
            {t.education.items.map((e, idx) => (
              <div
                key={e.index}
                data-aos="fade-up"
                data-aos-delay={idx * 150}
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
            data-aos="fade-up"
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
