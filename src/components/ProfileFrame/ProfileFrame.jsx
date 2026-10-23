"use client";

import { useEffect, useRef } from "react";

export default function ProfileFrame({ lang = "EN" }) {
  const isId = lang === "ID";

  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const imgRef = useRef(null);

  const maskCanvasRef = useRef(null);
  const grayscaleCanvasRef = useRef(null);
  const snapshotCanvasRef = useRef(null);

  const isDrawingRef = useRef(false);
  const lastPointRef = useRef({ x: 0, y: 0 });
  const inactivityTimerRef = useRef(null);
  const fadeAnimRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    const img = imgRef.current;
    if (!canvas || !container || !img) return;

    if (!maskCanvasRef.current) {
      maskCanvasRef.current = document.createElement("canvas");
    }
    if (!grayscaleCanvasRef.current) {
      grayscaleCanvasRef.current = document.createElement("canvas");
    }
    if (!snapshotCanvasRef.current) {
      snapshotCanvasRef.current = document.createElement("canvas");
    }

    const updateDimensions = () => {
      const rect = container.getBoundingClientRect();
      if (rect.width === 0 || rect.height === 0) return;

      const dpr = window.devicePixelRatio || 1;
      const w = Math.round(rect.width * dpr);
      const h = Math.round(rect.height * dpr);

      if (canvas.width !== w || canvas.height !== h) {
        const prevMask = maskCanvasRef.current;
        let tempCanvas = null;
        if (prevMask && prevMask.width > 0 && prevMask.height > 0) {
          tempCanvas = document.createElement("canvas");
          tempCanvas.width = prevMask.width;
          tempCanvas.height = prevMask.height;
          tempCanvas.getContext("2d")?.drawImage(prevMask, 0, 0);
        }

        canvas.width = w;
        canvas.height = h;

        const maskCanvas = maskCanvasRef.current;
        maskCanvas.width = w;
        maskCanvas.height = h;

        if (tempCanvas) {
          maskCanvas.getContext("2d")?.drawImage(tempCanvas, 0, 0, w, h);
        }

        const gCanvas = grayscaleCanvasRef.current;
        gCanvas.width = w;
        gCanvas.height = h;
        const gCtx = gCanvas.getContext("2d");
        if (gCtx && img.complete && img.naturalWidth > 0) {
          gCtx.clearRect(0, 0, w, h);
          gCtx.filter = "grayscale(100%)";

          // Replicate CSS object-fit:cover object-position:top
          const natW = img.naturalWidth;
          const natH = img.naturalHeight;
          const scaleX = w / natW;
          const scaleY = h / natH;
          const scale = Math.max(scaleX, scaleY);       // cover = fill with the larger scale
          const drawW = natW * scale;
          const drawH = natH * scale;
          const offsetX = (w - drawW) / 2;              // center horizontally
          const offsetY = 0;                            // object-position:top → align to top

          gCtx.drawImage(img, offsetX, offsetY, drawW, drawH);
          gCtx.filter = "none";
        }

        renderComposite();
      }
    };

    if (img.complete) {
      updateDimensions();
    } else {
      img.onload = updateDimensions;
    }

    const ro = new ResizeObserver(() => {
      updateDimensions();
    });
    ro.observe(container);

    return () => {
      ro.disconnect();
      if (inactivityTimerRef.current) {
        clearTimeout(inactivityTimerRef.current);
      }
      if (fadeAnimRef.current) {
        cancelAnimationFrame(fadeAnimRef.current);
      }
    };
  }, []);

  const renderComposite = () => {
    const canvas = canvasRef.current;
    const maskCanvas = maskCanvasRef.current;
    const grayCanvas = grayscaleCanvasRef.current;
    if (!canvas || !maskCanvas || !grayCanvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.globalCompositeOperation = "source-over";
    ctx.drawImage(grayCanvas, 0, 0);

    ctx.globalCompositeOperation = "destination-in";
    ctx.drawImage(maskCanvas, 0, 0);

    ctx.globalCompositeOperation = "source-over";
  };

  const getCanvasCoords = (e) => {
    const canvas = canvasRef.current;
    if (!canvas) return { x: 0, y: 0 };
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;
    return {
      x: (e.clientX - rect.left) * scaleX,
      y: (e.clientY - rect.top) * scaleY,
    };
  };

  const drawStrokeSegment = (fromX, fromY, toX, toY) => {
    const maskCanvas = maskCanvasRef.current;
    if (!maskCanvas) return;
    const mCtx = maskCanvas.getContext("2d");
    if (!mCtx) return;

    const dpr = window.devicePixelRatio || 1;
    mCtx.globalCompositeOperation = "source-over";
    mCtx.strokeStyle = "rgba(0, 0, 0, 1)";
    mCtx.fillStyle = "rgba(0, 0, 0, 1)";
    mCtx.lineWidth = 36 * dpr;
    mCtx.lineCap = "round";
    mCtx.lineJoin = "round";

    mCtx.beginPath();
    mCtx.moveTo(fromX, fromY);
    mCtx.lineTo(toX, toY);
    mCtx.stroke();

    mCtx.beginPath();
    mCtx.arc(toX, toY, 18 * dpr, 0, Math.PI * 2);
    mCtx.fill();

    renderComposite();
  };

  const startFade = () => {
    const maskCanvas = maskCanvasRef.current;
    if (!maskCanvas) return;

    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      const mCtx = maskCanvas.getContext("2d");
      if (mCtx) mCtx.clearRect(0, 0, maskCanvas.width, maskCanvas.height);
      renderComposite();
      return;
    }

    const snapCanvas = snapshotCanvasRef.current;
    if (!snapCanvas) return;
    snapCanvas.width = maskCanvas.width;
    snapCanvas.height = maskCanvas.height;
    const snapCtx = snapCanvas.getContext("2d");
    if (!snapCtx) return;

    snapCtx.clearRect(0, 0, snapCanvas.width, snapCanvas.height);
    snapCtx.drawImage(maskCanvas, 0, 0);

    const duration = 600;
    const startTime = performance.now();

    const fadeStep = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(1, elapsed / duration);
      const alpha = 1 - progress;

      const mCtx = maskCanvas.getContext("2d");
      if (mCtx) {
        mCtx.clearRect(0, 0, maskCanvas.width, maskCanvas.height);
        if (alpha > 0) {
          mCtx.globalAlpha = alpha;
          mCtx.drawImage(snapCanvas, 0, 0);
          mCtx.globalAlpha = 1.0;
        }
      }
      renderComposite();

      if (progress < 1) {
        fadeAnimRef.current = requestAnimationFrame(fadeStep);
      } else {
        fadeAnimRef.current = null;
      }
    };

    fadeAnimRef.current = requestAnimationFrame(fadeStep);
  };

  const scheduleInactivityFade = () => {
    if (inactivityTimerRef.current) {
      clearTimeout(inactivityTimerRef.current);
    }
    inactivityTimerRef.current = setTimeout(() => {
      startFade();
    }, 2500);
  };

  const handlePointerDown = (e) => {
    if (e.button !== 0 && e.pointerType === "mouse") return;

    isDrawingRef.current = true;

    try {
      e.currentTarget.setPointerCapture(e.pointerId);
    } catch {
      // Ignore if pointer capture fails
    }

    if (fadeAnimRef.current) {
      cancelAnimationFrame(fadeAnimRef.current);
      fadeAnimRef.current = null;
    }
    if (inactivityTimerRef.current) {
      clearTimeout(inactivityTimerRef.current);
      inactivityTimerRef.current = null;
    }

    const { x, y } = getCanvasCoords(e);
    lastPointRef.current = { x, y };

    drawStrokeSegment(x, y, x, y);
  };

  const handlePointerMove = (e) => {
    if (!isDrawingRef.current) return;

    const { x, y } = getCanvasCoords(e);
    const { x: prevX, y: prevY } = lastPointRef.current;

    drawStrokeSegment(prevX, prevY, x, y);
    lastPointRef.current = { x, y };
  };

  const handlePointerUp = (e) => {
    if (!isDrawingRef.current) return;
    isDrawingRef.current = false;

    try {
      if (e.currentTarget.hasPointerCapture(e.pointerId)) {
        e.currentTarget.releasePointerCapture(e.pointerId);
      }
    } catch {
      // Ignore
    }

    scheduleInactivityFade();
  };

  return (
    <div className="relative w-full max-w-[270px] sm:max-w-[300px] mx-auto select-none">
      {/* Decorative Layered Neubrutalist Backing Plate */}
      <div
        className="absolute inset-0 translate-x-2.5 translate-y-2.5 sm:translate-x-3 sm:translate-y-3"
        style={{
          background: "repeating-linear-gradient(45deg, #e9ddd9, #e9ddd9 8px, #F5F1EF 8px, #F5F1EF 16px)",
          border: "2px solid #3D1106",
          zIndex: 0,
        }}
        aria-hidden="true"
      />

      {/* Main Neubrutalist Card Frame */}
      <div
        className="relative z-10 bg-white"
        style={{
          border: "2px solid #3D1106",
          boxShadow: "5px 5px 0px 0px #3D1106",
        }}>
        {/* Image Stage */}
        <div className="p-3 bg-white">
          <div
            ref={containerRef}
            className="relative overflow-hidden"
            style={{
              border: "1.5px solid #3D1106",
              background: "#F5F1EF",
            }}
          >
            {/* The Base Color Profile Image */}
            <img
              ref={imgRef}
              src="/assets/img/profile.jpg"
              alt="Dimas Cahyo Margono"
              className="w-full h-auto object-cover object-top aspect-[4/5] block select-none pointer-events-none"
              draggable={false}
            />

            {/* Interactive Scratch-to-Grayscale Canvas Overlay */}
            <canvas
              ref={canvasRef}
              className="absolute inset-0 w-full h-full block cursor-crosshair select-none touch-none"
              onPointerDown={handlePointerDown}
              onPointerMove={handlePointerMove}
              onPointerUp={handlePointerUp}
              onPointerCancel={handlePointerUp}
            />
          </div>
        </div>

        {/* Telemetry Base Strip */}
        <div
          className="px-3.5 py-2.5 flex flex-col gap-2"
          style={{
            background: "#F5F1EF",
            borderTop: "2px solid #3D1106",
          }}
        >
          <div className="text-center w-full">
            <p
              className="text-label-md uppercase tracking-wider font-bold"
              style={{ color: "#170200" }}
            >
              Dimas Cahyo Margono
            </p>
            <p
              className="text-label-sm font-mono tracking-tight mt-0.5"
              style={{ color: "#716966" }}
            >
              {isId ? "Rekayasa Perangkat Lunak" : "Software Engineering"}
            </p>
          </div>

          {/* Barcode & Status Line */}
          <div
            className="pt-2 flex items-center justify-between"
            style={{ borderTop: "1px solid rgba(61,17,6,0.18)" }}
          >
            {/* SVG/CSS Barcode */}
            <div className="flex items-center gap-[2.5px] opacity-80" aria-hidden="true">
              <span className="w-[3px] h-3 bg-[#3D1106]" />
              <span className="w-[1.5px] h-3 bg-[#3D1106]" />
              <span className="w-[4px] h-3 bg-[#3D1106]" />
              <span className="w-[1.5px] h-3 bg-[#3D1106]" />
              <span className="w-[2px] h-3 bg-[#3D1106]" />
              <span className="w-[5px] h-3 bg-[#3D1106]" />
              <span className="w-[1.5px] h-3 bg-[#3D1106]" />
              <span className="w-[3px] h-3 bg-[#3D1106]" />
              <span className="w-[2px] h-3 bg-[#3D1106]" />
              <span className="w-[4px] h-3 bg-[#3D1106]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
