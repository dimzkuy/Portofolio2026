"use client";

import { useEffect, useCallback } from "react";

export default function ImageLightbox({
  isOpen,
  onClose,
  images = [],
  currentIndex = 0,
  onNavigate,
}) {
  const currentImage = images[currentIndex];
  const total = images.length;

  const handleKeyDown = useCallback(
    (e) => {
      if (!isOpen) return;
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowLeft" && total > 1) {
        onNavigate((currentIndex - 1 + total) % total);
      } else if (e.key === "ArrowRight" && total > 1) {
        onNavigate((currentIndex + 1) % total);
      }
    },
    [isOpen, onClose, currentIndex, total, onNavigate]
  );

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen || !currentImage) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Image gallery lightbox"
      className="fixed inset-0 z-[100] flex flex-col justify-between bg-white/60 p-4 sm:p-6 md:p-8 backdrop-blur-xl select-none"
      onClick={onClose}
    >
      {/* # Top Navigation Bar */}
      <div
        className="flex items-center justify-between w-full max-w-6xl mx-auto pb-4"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[#3D1106]/80">
          <span className="w-2.5 h-2.5 inline-block bg-[#3D1106]" />
          <span>
            {String(currentIndex + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
          </span>
        </div>

        <button
          type="button"
          onClick={onClose}
          aria-label="Close lightbox"
          className="w-9 h-9 flex items-center justify-center font-bold text-base text-white bg-[#3D1106] transition-all hover:translate-x-[1px] hover:translate-y-[1px] cursor-pointer"
          style={{
            border: "1.5px solid #3D1106",
            boxShadow: "2.5px 2.5px 0px 0px #3D1106",
          }}
        >
          ✕
        </button>
      </div>

      {/* # Main Image Showcase */}
      <div
        className="relative flex-1 flex items-center justify-center w-full max-w-6xl mx-auto my-auto overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {total > 1 && (
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onNavigate((currentIndex - 1 + total) % total);
            }}
            aria-label="Previous image"
            className="absolute left-2 z-10 p-2.5 bg-white/80 text-[#3D1106] border border-[#3D1106]/20 transition-all hover:bg-white cursor-pointer"
            style={{ boxShadow: "2px 2px 0px 0px rgba(61,17,6,0.15)" }}
          >
            <span className="material-symbols-outlined text-[24px]">chevron_left</span>
          </button>
        )}

        <div
          className="max-h-[75vh] max-w-full overflow-hidden bg-white"
          style={{
            border: "1.5px solid #3D1106",
            boxShadow: "6px 6px 0px 0px rgba(61,17,6,0.15)",
          }}
        >
          <img
            src={currentImage.src}
            alt={currentImage.alt || "Project screenshot"}
            className="max-h-[75vh] w-auto max-w-full object-contain"
            draggable={false}
          />
        </div>

        {total > 1 && (
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onNavigate((currentIndex + 1) % total);
            }}
            aria-label="Next image"
            className="absolute right-2 z-10 p-2.5 bg-white/80 text-[#3D1106] border border-[#3D1106]/20 transition-all hover:bg-white cursor-pointer"
            style={{ boxShadow: "2px 2px 0px 0px rgba(61,17,6,0.15)" }}
          >
            <span className="material-symbols-outlined text-[24px]">chevron_right</span>
          </button>
        )}
      </div>

    </div>
  );
}

