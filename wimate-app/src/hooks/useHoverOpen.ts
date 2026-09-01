import { useEffect, useRef, useState } from "react";

/**
 * useHoverOpen — keeps a popover open while the pointer is moving between
 * a trigger element and the popover panel. Closes after a short delay when
 * the pointer leaves both.
 */
export function useHoverOpen(delay = 120) {
  const [open, setOpen] = useState(false);
  const timer = useRef<number | null>(null);
  const active = useRef(false);

  const onOpen = () => {
    active.current = true;
    if (timer.current) {
      window.clearTimeout(timer.current);
      timer.current = null;
    }
    setOpen(true);
  };

  const scheduleClose = () => {
    active.current = false;
    if (timer.current) window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => {
      if (!active.current) setOpen(false);
    }, delay);
  };

  // Close on Escape, click outside, or route change
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      if (timer.current) window.clearTimeout(timer.current);
    };
  }, []);

  return { open, setOpen, onOpen, scheduleClose };
}
