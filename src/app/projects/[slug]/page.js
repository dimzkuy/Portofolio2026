import fs from "fs";
import path from "path";
import { notFound } from "next/navigation";
import { getAllProjectSlugs, getProjectBySlug } from "@/data/projects";
import { ProjectDetailView } from "@/components/ProjectDetail";

function getDiskGalleryImages(slug) {
  try {
    const galleryDir = path.join(process.cwd(), "public", "assets", "projects", "gallery", slug);
    if (!fs.existsSync(galleryDir)) return [];

    const entries = fs.readdirSync(galleryDir);
    const validExts = [".png", ".jpg", ".jpeg", ".webp", ".svg", ".gif", ".avif"];

    return entries
      .filter((file) => validExts.includes(path.extname(file).toLowerCase()))
      .map((file) => ({
        src: `/assets/projects/gallery/${slug}/${file}`,
        alt: `${slug} screenshot - ${path.parse(file).name}`,
      }));
  } catch {
    return [];
  }
}

export const instant = false;

export async function generateStaticParams() {
  const slugs = getAllProjectSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug, "EN");

  if (!project) {
    return {
      title: "Project Not Found | Dimas Cahyo Margono",
      description: "The requested project could not be found.",
    };
  }

  return {
    title: `${project.title} - Project Details | Dimas Cahyo Margono`,
    description: project.description,
    openGraph: {
      title: `${project.title} - Dimas Cahyo Margono`,
      description: project.description,
      images: project.image ? [{ url: project.image }] : [],
    },
  };
}

export default async function ProjectDetailPage({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug, "EN");

  if (!project) {
    notFound();
  }

  // Auto-scan public/assets/projects/gallery/[slug]
  const diskGallery = getDiskGalleryImages(slug);

  // Deduplicate by both filename and full src to prevent doubled images
  const seenFilenames = new Set();
  const seenSrcs = new Set();
  const mergedGallery = [];

  const addImage = (item) => {
    if (!item || !item.src) return;
    const filename = path.basename(item.src).toLowerCase();
    if (seenFilenames.has(filename) || seenSrcs.has(item.src)) return;
    seenFilenames.add(filename);
    seenSrcs.add(item.src);
    mergedGallery.push(item);
  };

  // Add any custom images found in public/assets/projects/gallery/[slug]
  for (const item of diskGallery) {
    addImage(item);
  }

  // Add items defined in project.gallery (skipping any with same filename or src)
  for (const item of project.gallery || []) {
    addImage(item);
  }

  return (
    <ProjectDetailView
      slug={slug}
      initialProject={{ ...project, gallery: mergedGallery }}
      extraGallery={mergedGallery}
    />
  );
}
