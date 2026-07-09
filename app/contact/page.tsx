import type { Metadata } from "next";
import Link from "next/link";
import { Instagram } from "lucide-react";
import StaticPageShell from "@/components/StaticPageShell";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact WYLITE VENTURES for construction, electrical, CCTV, solar and interior work.",
};

export default function ContactPage() {
  return (
    <StaticPageShell
      eyebrow="Contact"
      title="Tell us what you need, and we’ll shape the scope."
      description="Call, message or email us with your site location and project summary. We’ll take it from there."
      secondaryCtaHref={`tel:${siteConfig.phones[0].replace(/\s/g, "")}`}
      secondaryCtaLabel="Call Now"
    >
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {/* Phone */}
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-card backdrop-blur-sm">
          <p className="font-display text-xl font-semibold text-paper">
            Phone
          </p>

          <div className="mt-3 flex flex-col gap-2 text-sm text-paper/65">
            {siteConfig.phones.map((phone) => (
              <Link
                key={phone}
                href={`tel:${phone.replace(/\s/g, "")}`}
                className="hover:text-gold transition-colors"
              >
                {phone}
              </Link>
            ))}
          </div>
        </div>

        {/* Email */}
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-card backdrop-blur-sm">
          <p className="font-display text-xl font-semibold text-paper">
            Email
          </p>

          <a
            className="mt-3 block text-sm text-paper/65 hover:text-gold transition-colors"
            href={`mailto:${siteConfig.email}`}
          >
            {siteConfig.email}
          </a>
        </div>

        {/* Locations */}
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-card backdrop-blur-sm">
          <p className="font-display text-xl font-semibold text-paper">
            Locations
          </p>

          <p className="mt-3 text-sm text-paper/65">
            {siteConfig.locations.join(" • ")}
          </p>
        </div>

        {/* Instagram */}
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-card backdrop-blur-sm">
          <p className="font-display text-xl font-semibold text-paper">
            Instagram
          </p>

          <a
            href={siteConfig.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 flex items-center gap-2 text-sm text-paper/65 hover:text-gold transition-colors"
          >
            <Instagram size={18} />
            {siteConfig.instagramHandle}
          </a>
        </div>
      </div>
    </StaticPageShell>
  );
}