"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

type StatCounterProps = {
  value: string;
  label: string;
  delay?: number;
};

/**
 * Animates a numeric stat counting up from 0 once it scrolls into view.
 * Non-numeric characters in `value` (e.g. "+", "%") are preserved as a
 * suffix so values like "500+" or "100%" animate correctly.
 */
export default function StatCounter({ value, label, delay = 0 }: StatCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [display, setDisplay] = useState("0");

  const numericMatch = value.match(/\d+/);
  const suffix = numericMatch ? value.replace(numericMatch[0], "") : "";
  const target = numericMatch ? parseInt(numericMatch[0], 10) : 0;

  useEffect(() => {
    if (!inView) return;
    if (!numericMatch) {
      setDisplay(value);
      return;
    }

    const duration = 1400;
    const start = performance.now();

    let frame: number;
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(eased * target).toString());
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-col items-center text-center md:items-start md:text-left"
    >
      <p className="font-display text-4xl font-semibold text-paper md:text-5xl">
        {display}
        {suffix}
      </p>
      <p className="mt-2 text-sm uppercase tracking-wide text-paper/60">
        {label}
      </p>
    </motion.div>
  );
}
