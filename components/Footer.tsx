"use client";

import Link from "next/link";
import { ArrowUp, Facebook, Instagram, Phone, Youtube } from "lucide-react";
import BrandLockup from "@/components/BrandLockup";
import { navLinks, siteConfig } from "@/lib/site-config";

export default function Footer() {
  const year = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-ink text-paper">
      <div className="container-content grid gap-12 px-6 py-20 md:grid-cols-4 md:px-10">
        <div className="md:col-span-2">
          <BrandLockup
            className="text-paper"
            iconClassName="h-12 w-12"
            textClassName="text-paper"
          />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-paper/60">
            {siteConfig.description}
          </p>
          <div className="mt-6 flex gap-4">
            {[Facebook, Instagram, Youtube].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Social link"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-paper/15 text-paper/70 transition-colors hover:border-gold hover:text-gold"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className="eyebrow text-paper/50">Quick Links</p>
          <ul className="mt-5 flex flex-col gap-3">
            {navLinks.slice(0, 6).map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-paper/70 transition-colors hover:text-gold"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow text-paper/50">Contact</p>
          <ul className="mt-5 flex flex-col gap-3 text-sm text-paper/70">
            {siteConfig.phones.map((phone) => (
              <li key={phone}>
                <a
                  href={`tel:${phone.replace(/\s/g, "")}`}
                  className="flex items-center gap-2 transition-colors hover:text-gold"
                >
                  <Phone size={14} className="text-gold" />
                  {phone}
                </a>
              </li>
            ))}
            <li className="pt-2 text-paper/50">
              {siteConfig.locations.join(" · ")}
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-paper/10">
        <div className="container-content flex flex-col items-center justify-between gap-4 px-6 py-6 text-xs text-paper/50 md:flex-row md:px-10">
          <p>
            © {year} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-gold">
              Privacy Policy
            </Link>
            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Back to top"
              className="flex items-center gap-2 hover:text-gold"
            >
              Back to top <ArrowUp size={14} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
