"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

import { getProjectsByLang, PROJECT_ICONS } from "@/data/projects";

const LABELS = {
  EN: {
    headerIndex: "01",
    headerTitle: "ALL PROJECTS",
    backBtn: "Home",
    placeholder: "[ SCREENSHOT PLACEHOLDER ]",
    contributionTitle: "My Contribution",
    githubBtn: "[ GitHub Repo ]",
    demoBtn: "[ Live Demo ]",
  },
  ID: {
    headerIndex: "01",
    headerTitle: "SEMUA PROYEK",
    backBtn: "Beranda",
    placeholder: "[ TANGKAPAN LAYAR ]",
    contributionTitle: "Kontribusi Saya",
    githubBtn: "[ Repositori GitHub ]",
    demoBtn: "[ Demo Langsung ]",
  },
};

// # Section Header Component (Exact match with page.js)
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

// # Tag Chip Component (Exact match with page.js: text-label-sm)
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

// # Project Card Component (Exact match with page.js)
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
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-baseline justify-between mb-1">
            <h3 className="text-xl md:text-2xl font-semibold tracking-tight" style={{ color: "#242120", fontFamily: "var(--font-serif)" }}>
              {project.title}
            </h3>
            <span className="font-mono text-label-sm" style={{ color: "#716966" }}>
              {project.year}
            </span>
          </div>
          <p className="text-body-md mb-6 leading-normal" style={{ color: "#645d5a" }}>
            {project.description}
          </p>

          {/* # Tech stack tags */}
          <div
            className="flex items-center gap-1.5 flex-wrap mb-6 py-2"
            style={{ borderTop: "1px solid rgba(61,17,6,0.15)", borderBottom: "1px solid rgba(61,17,6,0.15)" }}
          >
            {(Array.isArray(project.tags) ? project.tags : Object.values(project.tags).flat()).map((t) => (
              <Tag key={t}>{t}</Tag>
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

// # Page Component
export default function ProjectsPage() {
  const [lang, setLang] = useState("EN");

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem("preferred_lang");
      if (saved === "ID" || saved === "EN") setLang(saved);
    } catch { /* ignore */ }
  }, []);

  const handleSetLang = (l) => {
    setLang(l);
    try { window.localStorage.setItem("preferred_lang", l); } catch { /* ignore */ }
  };

  const labels = LABELS[lang] || LABELS.EN;
  const projectItems = getProjectsByLang(lang, false);

  return (
    <>
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white">
        <div className="h-16 max-w-[76rem] mx-auto flex items-center justify-end px-5 md:px-16">
          <div className="flex items-center gap-1.5 font-mono text-label-sm uppercase tracking-wider select-none">
            {["EN", "ID"].map((l, i) => (
              <span key={l} className="flex items-center gap-1.5">
                {i > 0 && <span className="text-[#716966]">\</span>}
                <button
                  type="button"
                  onClick={() => handleSetLang(l)}
                  className={`font-bold transition-colors ${lang === l ? "text-[#3D1106] underline decoration-2 underline-offset-4" : "text-[#716966] hover:text-[#242120]"}`}
                >
                  {l}
                </button>
              </span>
            ))}
          </div>
        </div>
      </header>

      <main className="flex-1 pt-16 bg-white min-h-screen">
        <section className="w-full max-w-[76rem] mx-auto px-5 md:px-16 py-12 md:py-16">
          {/* Top Back to Home Button */}
          <div className="mb-10">
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 px-6 py-3 text-label-sm uppercase tracking-wider font-bold transition-all hover:translate-x-[1px] hover:translate-y-[1px]"
              style={{
                background: "#3D1106",
                color: "#fff",
                border: "1.5px solid #3D1106",
                boxShadow: "3px 3px 0px 0px rgba(61,17,6,0.4)",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "2px 2px 0px 0px rgba(61,17,6,0.4)")}
              onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "3px 3px 0px 0px rgba(61,17,6,0.4)")}
            >
              <span className="material-symbols-outlined" style={{ fontSize: 16 }}>arrow_back</span>
              <span>{labels.backBtn}</span>
            </Link>
          </div>

          {/* Section Header */}
          <SectionHeader index={labels.headerIndex} title={labels.headerTitle} subtitle={labels.headerSubtitle} />

          {/* Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 pb-20">
            {projectItems.map((p) => (
              <ProjectCard
                key={p.id}
                project={p}
                icon={PROJECT_ICONS[p.id]}
                labels={{
                  placeholder: labels.placeholder,
                  contributionTitle: labels.contributionTitle,
                  githubBtn: labels.githubBtn,
                  demoBtn: labels.demoBtn,
                }}
              />
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
