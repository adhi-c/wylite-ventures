import type { Metadata } from "next";
import Link from "next/link";
import StaticPageShell from "@/components/StaticPageShell";
import { services } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Construction, electrical, CCTV, solar, interior and home improvement services from WYLITE VENTURES.",
};

export default function ServicesPage() {
  return (
    <StaticPageShell
      eyebrow="Our Services"
      title="Every trade your property needs, one accountable team."
      description="We cover the core property work you need under one roof, with clear scoping, honest estimates and delivery you can actually schedule around."
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <Link
            key={service.slug}
            href={`/services/${service.slug}`}
            className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-card transition-transform hover:-translate-y-1"
          >
            <p className="font-display text-xl font-semibold text-paper">{service.title}</p>
            <p className="mt-3 text-sm leading-relaxed text-paper/65">{service.shortDescription}</p>
          </Link>
        ))}
      </div>
    </StaticPageShell>
  );
}