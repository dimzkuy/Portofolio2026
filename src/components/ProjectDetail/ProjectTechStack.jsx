"use client";

import {
  SiNextdotjs,
  SiFastapi,
  SiOnnx,
  SiGooglecloud,
  SiFirebase,
  SiTensorflow,
  SiTailwindcss,
  SiShadcnui,
  SiPhp,
  SiJavascript,
  SiMysql,
  SiFlutter,
  SiFigma,
  SiPython,
  SiFlask,
  SiHtml5,
  SiCss,
} from "react-icons/si";

const ICONS = {
  siNextdotjs: SiNextdotjs,
  siFastapi: SiFastapi,
  siOnnx: SiOnnx,
  siGooglecloud: SiGooglecloud,
  siFirebase: SiFirebase,
  siTensorflow: SiTensorflow,
  siTailwindcss: SiTailwindcss,
  siShadcnui: SiShadcnui,
  siPhp: SiPhp,
  siJavascript: SiJavascript,
  siMysql: SiMysql,
  siFlutter: SiFlutter,
  siFigma: SiFigma,
  siPython: SiPython,
  siFlask: SiFlask,
  siHtml5: SiHtml5,
  siCss: SiCss,
};

// Chip tag matching the home section TechTag style
function TechChip({ name, iconKey }) {
  const IconComponent = iconKey ? ICONS[iconKey] : null;
  return (
    <span
      className="inline-flex items-center gap-1.5 px-2.5 py-1.5 text-label-sm font-medium"
      style={{
        background: "#F5F1EF",
        border: "1px solid #3D1106",
        color: "#242120",
      }}
    >
      {IconComponent && (
        <IconComponent
          size={13}
          className="shrink-0"
          aria-hidden="true"
          style={{ color: "#242120" }}
        />
      )}
      {name}
    </span>
  );
}

export default function ProjectTechStack({ items = [] }) {
  if (!items || items.length === 0) return null;

  return (
    <div className="flex flex-wrap gap-2">
      {items.map((tech) => (
        <TechChip key={tech.name} name={tech.name} iconKey={tech.iconKey} />
      ))}
    </div>
  );
}

