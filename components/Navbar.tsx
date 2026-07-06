"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, Phone, X } from "lucide-react";
import BrandLockup from "@/components/BrandLockup";
import { navLinks, siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-ink/90 shadow-card backdrop-blur-md"
          : "bg-transparent"
      )}
    >
      <nav
        aria-label="Primary"
        className="container-content flex items-center justify-between px-6 py-5 md:px-10"
      >
        <Link
          href="/"
          className={cn(
            "transition-colors",
            scrolled ? "text-paper" : "text-paper"
          )}
        >
          <BrandLockup
            className="gap-2"
            iconClassName="h-9 w-9 md:h-10 md:w-10"
            textClassName="md:text-[1.05rem]"
          />
        </Link>

        <ul className="hidden flex-1 items-center justify-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href} className="relative">
              <Link
                href={link.href}
                className={cn(
                  "text-sm font-medium uppercase tracking-wide transition-colors",
                  scrolled
                    ? "text-paper/80 hover:text-gold"
                    : "text-paper/90 hover:text-gold"
                )}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href={`tel:${siteConfig.phones[0].replace(/\s/g, "")}`}
            className={cn(
              "flex items-center gap-2 text-sm font-semibold transition-colors",
              scrolled ? "text-paper" : "text-paper"
            )}
          >
            <Phone size={16} className="text-gold" />
            {siteConfig.phones[0]}
          </a>
          <Link href="/contact" className="btn-primary !px-6 !py-3">
            Get Free Quote
          </Link>
        </div>

        <button
          type="button"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
          className={cn(
            "rounded-full p-2 transition-colors lg:hidden",
            scrolled ? "text-paper" : "text-paper"
          )}
        >
          {mobileOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-x-0 top-[72px] bottom-0 z-40 overflow-y-auto bg-ink px-6 py-8 lg:hidden"
          >
            <ul className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block rounded-xl px-4 py-4 text-base font-medium text-paper/80 hover:bg-white/10 hover:text-paper"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="btn-primary mt-6 w-full"
            >
              Get Free Quote
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
