import type { Metadata } from "next";
import StaticPageShell from "@/components/StaticPageShell";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "About",
  description: `Learn about ${siteConfig.name} and the team behind our construction, electrical, CCTV, solar and interior work.`,
};

export default function AboutPage() {
  return (
    <StaticPageShell
      eyebrow="About Us"
      title="Built on accountability, not just promises."
      description="WYLITE VENTURES brings together practical field experience, careful planning and in-house trade expertise to deliver work that holds up in the real world."
    >
      <div className="grid gap-6 md:grid-cols-3">
        {[
          ["Local delivery", "Serving Ernakulam, Pathanamthitta and Kalanjoor."],
          ["Single point of contact", "One team accountable from estimate to handover."],
          ["Multi-trade capability", "Construction, electrical, CCTV, solar and interiors."],
        ].map(([title, copy]) => (
          <div key={title} className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-card backdrop-blur-sm">
            <p className="font-display text-xl font-semibold text-paper">{title}</p>
            <p className="mt-3 text-sm leading-relaxed text-paper/65">{copy}</p>
          </div>
        ))}
      </div>
    </StaticPageShell>
  );
}