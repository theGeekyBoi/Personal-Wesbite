import React, { useEffect, useRef, useState } from "react";
import "@/styles/spotlight.css";

const isCoarsePointer = () =>
  typeof window !== "undefined" && window.matchMedia && window.matchMedia("(pointer: coarse)").matches;

const prefersReducedMotion = () =>
  typeof window !== "undefined" && window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const CursorSpotlight: React.FC = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const [enabled, setEnabled] = useState<boolean>(true);
  const touchActiveRef = useRef<boolean>(false);

  useEffect(() => {
    // Respect user preferences and touch devices by default
    const disabledByMotion = prefersReducedMotion();
    const disabledByTouch = isCoarsePointer();
    setEnabled(!(disabledByMotion || disabledByTouch));

    if (disabledByMotion) return; // Do nothing if reduced motion

    const el = ref.current;
    if (!el) return;

    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let pending = false;

    const update = () => {
      pending = false;
      // Update CSS variables on the element for best performance
      el.style.setProperty("--spotlight-x", `${x}px`);
      el.style.setProperty("--spotlight-y", `${y}px`);
    };

    const onMouseMove = (e: MouseEvent) => {
      x = e.clientX;
      y = e.clientY;
      if (!pending) {
        pending = true;
        rafRef.current = requestAnimationFrame(update);
      }
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });

    // Touch long-press to temporarily enable spotlight
    let touchTimer: number | null = null;

    const onTouchStart = (e: TouchEvent) => {
      if (!isCoarsePointer()) return; // Only relevant for touch
      touchActiveRef.current = false;
      if (touchTimer) window.clearTimeout(touchTimer);
      const touch = e.touches[0];
      if (!touch) return;
      x = touch.clientX;
      y = touch.clientY;
      // Long press (~500ms) enables spotlight until touchend/cancel
      touchTimer = window.setTimeout(() => {
        touchActiveRef.current = true;
        setEnabled(true);
        // Immediately position where pressed
        el.style.setProperty("--spotlight-x", `${x}px`);
        el.style.setProperty("--spotlight-y", `${y}px`);
      }, 500);
    };

    const onTouchMove = (e: TouchEvent) => {
      if (!touchActiveRef.current) return;
      const touch = e.touches[0];
      if (!touch) return;
      x = touch.clientX;
      y = touch.clientY;
      if (!pending) {
        pending = true;
        rafRef.current = requestAnimationFrame(update);
      }
    };

    const onTouchEnd = () => {
      if (touchTimer) window.clearTimeout(touchTimer);
      if (touchActiveRef.current) {
        touchActiveRef.current = false;
        // Revert to disabled on touch devices after interaction
        setEnabled(false);
      }
    };

    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: true });
    window.addEventListener("touchend", onTouchEnd, { passive: true });
    window.addEventListener("touchcancel", onTouchEnd, { passive: true });

    return () => {
      window.removeEventListener("mousemove", onMouseMove as any);
      window.removeEventListener("touchstart", onTouchStart as any);
      window.removeEventListener("touchmove", onTouchMove as any);
      window.removeEventListener("touchend", onTouchEnd as any);
      window.removeEventListener("touchcancel", onTouchEnd as any);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  // Hidden when disabled (no layout shifts)
  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="cursor-spotlight"
      style={{
        opacity: enabled ? 1 : 0,
      }}
    />
  );
};

export default CursorSpotlight;
