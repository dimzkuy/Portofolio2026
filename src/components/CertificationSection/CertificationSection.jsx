"use client";

import { useSyncExternalStore } from "react";
import { certifications } from "@/data/certifications";
import {
  SiGooglecloud,
  SiCisco,
  SiComptia,
  SiLinux,
  SiCoursera,
} from "react-icons/si";

const MONTHS_EN = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
const MONTHS_ID = ["JAN", "FEB", "MAR", "APR", "MEI", "JUN", "JUL", "AGU", "SEP", "OKT", "NOV", "DES"];

function formatYearMonth(ym, isId) {
  if (!ym) return "—";
  const [year, month] = ym.split("-");
  const monthIdx = parseInt(month, 10) - 1;
  const monthStr = (isId ? MONTHS_ID : MONTHS_EN)[monthIdx] || month;
  return `${monthStr} ${year}`;
}

let cachedClientSnapshot = null;
function getClientSnapshot() {
  if (!cachedClientSnapshot && typeof window !== "undefined") {
    const now = new Date();
    cachedClientSnapshot = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}`;
  }
  return cachedClientSnapshot;
}
const getServerSnapshot = () => null;
const emptySubscribe = () => () => { };

function useCurrentYearMonth() {
  return useSyncExternalStore(emptySubscribe, getClientSnapshot, getServerSnapshot);
}

function isDateExpired(expiresYm, currentYm) {
  if (!expiresYm || !currentYm) return false;
  return expiresYm < currentYm;
}

function getIssuerIcon(issuer, id) {
  const lowerIssuer = (issuer || "").toLowerCase();
  const lowerId = (id || "").toLowerCase();

  if (lowerIssuer.includes("google") || lowerId.startsWith("gcp-")) {
    return SiGooglecloud;
  }
  if (lowerIssuer.includes("cisco")) {
    return SiCisco;
  }
  if (lowerIssuer.includes("comptia")) {
    return SiComptia;
  }
  if (lowerId.includes("linux")) {
    return SiLinux;
  }
  if (lowerIssuer.includes("coursera")) {
    return SiCoursera;
  }
  return null;
}

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

export default function CertificationSection({ lang = "EN", content }) {
  const isId = lang === "ID";
  const sectionIndex = content?.index || "07";
  const sectionTitle = content?.title || (isId ? "SERTIFIKASI" : "CERTIFICATIONS");

  const currentYm = useCurrentYearMonth();
  const INITIAL_COUNT = 4;
  const displayedItems = certifications.slice(0, INITIAL_COUNT);

  return (
    <section
      id="certifications"
      className="w-full max-w-[76rem] mx-auto px-5 md:px-16 py-24"
      style={{ borderBottom: "1.5px solid #3D1106" }}
    >
      <SectionHeader
        index={sectionIndex}
        title={sectionTitle}
      />

      <div
        data-aos="fade-up"
        className="bg-white"
        style={{ border: "1.5px solid #3D1106", boxShadow: "4px 4px 0px 0px #3D1106" }}
      >
        {displayedItems.map((c, idx) => {
          const Icon = getIssuerIcon(c.issuer, c.id);
          const expired = isDateExpired(c.expires, currentYm);

          return (
            <div
              key={c.id}
              className="p-6 md:p-10 grid grid-cols-1 md:grid-cols-12 gap-6 items-start md:items-center"
              style={idx !== 0 ? { borderTop: "1.5px solid #3D1106" } : {}}
            >
              {/* # Left: Prefix, Title, Issuer, Dates & Credential ID */}
              <div className="md:col-span-8 lg:col-span-9 flex flex-col">
                <span className="text-label-sm uppercase tracking-wider font-bold" style={{ color: "#3D1106" }}>
                  {isId ? "SERTIFIKASI" : "CERTIFICATE"} {String(idx + 1).padStart(2, "0")}
                </span>

                {c.url ? (
                  <a
                    href={c.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-headline-md mt-0.5 leading-snug hover:text-[#3D1106] transition-colors"
                    style={{ color: "#242120" }}
                  >
                    {c.title}
                  </a>
                ) : (
                  <h3 className="text-headline-md mt-0.5 leading-snug" style={{ color: "#242120" }}>
                    {c.title}
                  </h3>
                )}

                <div className="flex items-center gap-2 mt-1">
                  {Icon && (
                    <span className="shrink-0" style={{ color: "#3D1106" }}>
                      <Icon size={14} aria-hidden="true" />
                    </span>
                  )}
                  <span className="text-body-md font-medium" style={{ color: "#716966" }}>
                    {c.issuer}
                  </span>
                </div>

                {/* # Issued Date, Expiration Status, and Credential ID (text style) */}
                <div className="font-mono text-body-sm mt-2 flex flex-wrap items-center gap-x-3 gap-y-1" style={{ color: "#716966" }}>
                  <div>
                    <span>{isId ? "Diterbitkan: " : "Issued: "}</span>
                    <span className="font-medium" style={{ color: "#242120" }}>
                      {formatYearMonth(c.issued, isId)}
                    </span>
                  </div>

                  {c.expires && (
                    <>
                      <span className="hidden sm:inline" style={{ color: "#716966" }}>•</span>
                      <div suppressHydrationWarning>
                        <span suppressHydrationWarning>
                          {expired
                            ? isId ? "Kadaluarsa: " : "Expired: "
                            : isId ? "Berlaku s/d: " : "Valid thru: "}
                        </span>
                        <span
                          suppressHydrationWarning
                          className="font-medium"
                          style={{
                            color: expired ? "#8B4E3E" : "#242120",
                          }}
                        >
                          {formatYearMonth(c.expires, isId)}
                        </span>
                      </div>
                    </>
                  )}

                  {c.credentialId && (
                    <>
                      <span className="hidden sm:inline" style={{ color: "#716966" }}>•</span>
                      <div>
                        <span>{isId ? "ID Kredensial: " : "Credential ID: "}</span>
                        <span className="font-medium" style={{ color: "#242120" }}>
                          {c.credentialId}
                        </span>
                      </div>
                    </>
                  )}
                </div>
              </div>

              {/* # Right: Active Verification Action Button (Never Disabled) */}
              <div className="md:col-span-4 lg:col-span-3 flex md:justify-end items-center">
                {c.url ? (
                  <a
                    href={c.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 text-label-sm uppercase tracking-wider font-bold transition-all hover:translate-x-[1px] hover:translate-y-[1px] whitespace-nowrap cursor-pointer"
                    style={{
                      background: "#3D1106",
                      color: "#fff",
                      border: "1.5px solid #3D1106",
                      boxShadow: "2px 2px 0px 0px rgba(61,17,6,0.35)",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "1px 1px 0px 0px rgba(61,17,6,0.35)")}
                    onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "2px 2px 0px 0px rgba(61,17,6,0.35)")}
                  >
                    <span>{isId ? "Verifikasi Kredensial" : "Verify Credential"}</span>
                    <span className="material-symbols-outlined" style={{ fontSize: 16 }}>
                      north_east
                    </span>
                  </a>
                ) : (
                  <span
                    className="inline-block px-3 py-1.5 font-mono text-label-sm uppercase whitespace-nowrap"
                    style={{
                      background: "#F5F1EF",
                      border: "1px solid rgba(113,105,102,0.3)",
                      color: "#716966",
                    }}
                  >
                    {isId ? "Arsip Fisik / Offline" : "Archived / Offline"}
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* # View All Certifications Button (links to LinkedIn certifications) */}
      <div className="mt-12 flex justify-center" data-aos="fade-up">
        <a
          href="https://www.linkedin.com/in/dcmargono/details/certifications/"
          target="_blank"
          rel="noopener noreferrer"
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
          <span>{isId ? "Lihat Semua Sertifikasi" : "View All Certifications"}</span>
          <span className="material-symbols-outlined" style={{ fontSize: 18 }}>north_east</span>
        </a>
      </div>
    </section>
  );
}
