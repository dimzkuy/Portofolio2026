"use client";

import { useState, useSyncExternalStore } from "react";
import Link from "next/link";
import { getProjectBySlug, getAdjacentProjects } from "@/data/projects";
import ImageLightbox from "./ImageLightbox";
import ProjectTechStack from "./ProjectTechStack";

const subscribeLang = (callback) => {
  if (typeof window === "undefined") return () => { };
  window.addEventListener("storage", callback);
  window.addEventListener("portfolio-lang-change", callback);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener("portfolio-lang-change", callback);
  };
};

const getLangSnapshot = () => {
  try {
    const val = window.localStorage.getItem("preferred_lang");
    return val === "ID" ? "ID" : "EN";
  } catch {
    return "EN";
  }
};

const getLangServerSnapshot = () => "EN";

// Section header matching the portfolio's editorial design
function DetailSectionHeader({ index, title, subtitle }) {
  return (
    <div
      style={{ borderBottom: "1.5px solid #3D1106" }}
      className="flex items-baseline justify-between pb-2 mb-8 mt-16 first:mt-0"
    >
      <div className="flex items-center gap-2">
        <span className="w-2.5 h-2.5 inline-block" style={{ background: "#3D1106" }} />
        <h2
          className="text-label-lg uppercase tracking-widest font-bold"
          style={{ color: "#242120" }}
        >
          {index} / {title}
        </h2>
      </div>
      {subtitle && (
        <span className="text-body-sm font-mono italic" style={{ color: "#716966" }}>
          {subtitle}
        </span>
      )}
    </div>
  );
}

export default function ProjectDetailView({ slug, initialProject, extraGallery = [] }) {
  const lang = useSyncExternalStore(subscribeLang, getLangSnapshot, getLangServerSnapshot);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const handleSetLang = (newLang) => {
    try {
      window.localStorage.setItem("preferred_lang", newLang);
      window.dispatchEvent(new Event("portfolio-lang-change"));
    } catch {
      /* ignore */
    }
  };

  const project = getProjectBySlug(slug, lang) || initialProject;
  const adjacent = getAdjacentProjects(slug, lang);
  const isId = lang === "ID";

  if (!project) {
    return (
      <main className="min-h-screen bg-white flex flex-col items-center justify-center p-6 text-center">
        <span className="font-mono text-label-sm text-[#716966] uppercase mb-2">404 // NOT FOUND</span>
        <h1 className="text-headline-lg font-serif text-[#242120] mb-4">
          {isId ? "Proyek Tidak Ditemukan" : "Project Not Found"}
        </h1>
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 px-6 py-3 font-mono text-label-sm uppercase font-bold bg-[#3D1106] text-white"
        >
          <span>{isId ? "Kembali ke Proyek" : "Back to Projects"}</span>
        </Link>
      </main>
    );
  }

  // Combine extraGallery (auto-detected from disk) with project gallery
  const galleryImages =
    extraGallery && extraGallery.length > 0
      ? extraGallery
      : project.gallery && project.gallery.length > 0
        ? project.gallery
        : [];

  const openLightboxAt = (index) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#242120]">
      {/* # Top Navigation Bar */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md">
        <div className="h-16 max-w-[76rem] mx-auto flex items-center justify-between px-5 md:px-16">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-label-sm font-mono uppercase tracking-wider overflow-hidden">
            <Link
              href="/projects"
              className="text-[#716966] hover:text-[#3D1106] transition-colors shrink-0"
            >
              {isId ? "PROYEK" : "PROJECTS"}
            </Link>
            <span className="text-[#716966]/40">/</span>
            <span className="font-bold text-[#3D1106] truncate max-w-[140px] sm:max-w-[240px]">
              {project.title}
            </span>
          </nav>

          <div className="flex items-center gap-4 sm:gap-6 shrink-0">
            {/* Language Switcher */}
            <div className="flex items-center gap-1.5 font-mono text-label-sm uppercase tracking-wider select-none">
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
        </div>
      </header>

      {/* # Main Content Container */}
      <main className="flex-1 w-full max-w-[76rem] mx-auto px-5 md:px-16 py-12 md:py-20">
        {/* Back To Home Button (matching all projects section) */}
        <div className="mb-8">
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
            <span>{isId ? "Beranda" : "Home"}</span>
          </Link>
        </div>

        {/* Hero Title & Short Description */}
        <div className="mb-10">

          <h1
            className="text-headline-lg md:text-display tracking-tight text-[#170200] mb-4 font-bold"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            {project.title}
          </h1>
          <p className="text-body-lg max-w-3xl leading-relaxed text-[#645d5a]">
            {project.description}
          </p>

          {/* Action CTAs */}
          <div className="flex items-center flex-wrap gap-3 mt-6">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 text-label-sm uppercase tracking-wider font-bold transition-all hover:translate-x-[1px] hover:translate-y-[1px]"
                style={{
                  background: "#3D1106",
                  color: "#FFFFFF",
                  border: "1.5px solid #3D1106",
                  boxShadow: "3px 3px 0px 0px rgba(61,17,6,0.35)",
                }}
              >
                <span>{isId ? "Repositori GitHub" : "GitHub Repository"}</span>
              </a>
            )}

            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 text-label-sm uppercase tracking-wider font-bold transition-all hover:translate-x-[1px] hover:translate-y-[1px] bg-white text-[#242120]"
                style={{
                  border: "1.5px solid #3D1106",
                  boxShadow: "3px 3px 0px 0px #3D1106",
                }}
              >
                <span>{isId ? "Demo Langsung" : "Live Demo"}</span>
                <span className="material-symbols-outlined" style={{ fontSize: 14 }}>north_east</span>
              </a>
            )}
          </div>
        </div>

        {/* # Primary Cover Image Showcase */}
        {project.image && (
          <div
            className="relative overflow-hidden bg-[#F5F1EF] mb-16"
            style={{
              border: "1.5px solid #3D1106",
              boxShadow: "5px 5px 0px 0px #3D1106",
            }}
          >
            <div className="relative aspect-[16/9] w-full overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover object-top"
                draggable={false}
              />
            </div>
          </div>
        )}

        {/* # 01 / Overview & Objectives */}
        <DetailSectionHeader
          index="01"
          title={isId ? "GAMBARAN & TUJUAN" : "OVERVIEW & OBJECTIVES"}
        />
        <div
          className="p-6 md:p-10 bg-white mb-12"
          style={{
            border: "1.5px solid #3D1106",
            boxShadow: "4px 4px 0px 0px #3D1106",
          }}
        >
          {project.overview && (
            <p className="text-body-lg text-[#645d5a] leading-relaxed mb-6">
              {project.overview}
            </p>
          )}

          {project.objectives && project.objectives.length > 0 && (
            <div className="pt-6 border-t border-[#3D1106]/20">
              <h3 className="text-label-sm uppercase font-bold tracking-wider text-[#3D1106] mb-3">
                {isId ? "TUJUAN UTAMA PROYEK:" : "CORE PROJECT OBJECTIVES:"}
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {project.objectives.map((obj, i) => (
                  <li
                    key={i}
                    className="p-3 bg-[#F5F1EF] flex items-start gap-2.5 font-mono text-body-sm text-[#242120]"
                    style={{ border: "1px solid rgba(61,17,6,0.2)" }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#3D1106] shrink-0 mt-2" />
                    <span>{obj}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* # 02 / My Contribution */}
        <DetailSectionHeader
          index="02"
          title={isId ? "KONTRIBUSI SAYA" : "MY CONTRIBUTION"}
        />
        <div className="mb-12">
          <p className="text-body-lg text-[#645d5a] leading-relaxed">
            {project.contribution}
          </p>
        </div>

        {/* # 03 / Technical Highlights */}
        {project.highlights && project.highlights.length > 0 && (
          <>
            <DetailSectionHeader
              index="03"
              title={isId ? "SOROTAN TEKNIS" : "TECHNICAL HIGHLIGHTS"}
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
              {project.highlights.map((highlight, idx) => (
                <div
                  key={idx}
                  className="p-6 bg-white flex flex-col justify-between"
                  style={{
                    border: "1.5px solid #3D1106",
                    boxShadow: "3px 3px 0px 0px #3D1106",
                  }}
                >
                  <div className="flex items-center justify-between mb-3 pb-2 border-b border-[#3D1106]/15 font-mono text-label-sm text-[#716966]">
                    <span className="font-bold text-[#3D1106]">HIGHLIGHT // {String(idx + 1).padStart(2, "0")}</span>
                  </div>
                  <p className="text-body-md text-[#645d5a] leading-relaxed">
                    {highlight}
                  </p>
                </div>
              ))}
            </div>
          </>
        )}

        {/* # 04 / Technology Stack */}
        <DetailSectionHeader
          index="04"
          title={isId ? "TECH STACK" : "TECH STACK"}
        />
        <div className="mb-12">
          <ProjectTechStack items={project.techStack} />
        </div>

        {/* # 05 / Project Gallery */}
        <DetailSectionHeader
          index="05"
          title={isId ? "GALERI PROYEK" : "PROJECT GALLERY"}
        />
        {galleryImages.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {galleryImages.map((img, idx) => (
              <div
                key={idx}
                className="group bg-white overflow-hidden cursor-pointer transition-transform hover:-translate-y-1"
                style={{
                  border: "1.5px solid #3D1106",
                  boxShadow: "3.5px 3.5px 0px 0px #3D1106",
                }}
                onClick={() => openLightboxAt(idx)}
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-[#F5F1EF]">
                  <img
                    src={img.src}
                    alt={img.alt || project.title}
                    className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
                    draggable={false}
                  />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div
            className="w-full mb-16 p-8 md:p-12 flex flex-col items-center justify-center text-center bg-[#F5F1EF]"
            style={{
              border: "1.5px dashed rgba(61,17,6,0.35)",
              boxShadow: "3px 3px 0px 0px rgba(61,17,6,0.12)",
            }}
          >
            <span className="material-symbols-outlined text-[32px] mb-2" style={{ color: "#716966" }}>
              photo_library
            </span>
            <span
              className="font-mono text-label-sm uppercase tracking-widest font-bold"
              style={{ color: "#3D1106" }}
            >
              {isId ? "[ GALERI KOSONG ]" : "[ GALLERY EMPTY ]"}
            </span>
            <span className="text-body-sm mt-1.5 max-w-md" style={{ color: "#716966" }}>
              {isId
                ? "Belum ada tangkapan layar untuk proyek ini."
                : "No screenshot available in the gallery yet."}
            </span>
          </div>
        )}

        {/* # Previous / Next Project Navigation Banner */}
        <div className="mt-16 flex items-center justify-between flex-wrap gap-4">
          {adjacent.prev ? (
            <Link
              href={`/projects/${adjacent.prev.id}`}
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
              <span>{isId ? "Proyek Sebelumnya" : "Previous Project"}</span>
            </Link>
          ) : (
            <div />
          )}

          {adjacent.next && (
            <Link
              href={`/projects/${adjacent.next.id}`}
              className="inline-flex items-center gap-2 px-6 py-3 text-label-sm uppercase tracking-wider font-bold transition-all hover:translate-x-[1px] hover:translate-y-[1px] ml-auto"
              style={{
                background: "#3D1106",
                color: "#fff",
                border: "1.5px solid #3D1106",
                boxShadow: "3px 3px 0px 0px rgba(61,17,6,0.4)",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "2px 2px 0px 0px rgba(61,17,6,0.4)")}
              onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "3px 3px 0px 0px rgba(61,17,6,0.4)")}
            >
              <span>{isId ? "Proyek Selanjutnya" : "Next Project"}</span>
              <span className="material-symbols-outlined" style={{ fontSize: 16 }}>arrow_forward</span>
            </Link>
          )}
        </div>
      </main>

      {/* # Fullscreen Lightbox Modal */}
      <ImageLightbox
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        images={galleryImages}
        currentIndex={lightboxIndex}
        onNavigate={(newIndex) => setLightboxIndex(newIndex)}
      />
    </div>
  );
}

