import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ClipboardList, Ruler, Sparkles } from "lucide-react";
import ServiceCard from "@/components/ServiceCard";
import StatCounter from "@/components/StatCounter";
import { services, stats } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Home",
  description:
    "WYLITE VENTURES delivers construction, electrical, CCTV, solar and interior solutions across Ernakulam, Pathanamthitta and Kalanjoor.",
};

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative flex min-h-screen items-center overflow-hidden bg-ink">
        <div className="blueprint-grid absolute inset-0 opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/40" />

        <div className="container-content relative z-10 px-6 pt-32 md:px-10">
          <p className="eyebrow text-gold">
            Construction · Electrical · CCTV · Solar · Interiors
          </p>

          <h1 className="mt-6 max-w-3xl font-display text-5xl font-semibold leading-[1.05] text-paper md:text-7xl">
            Building Dreams.
            <br />
            Delivering Excellence.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-paper/70">
            Complete Construction, Electrical, CCTV &amp; Home Solutions Under
            One Roof.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/contact" className="btn-primary bg-gold text-ink hover:bg-paper">
              Get Free Quote
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/services"
              className="btn-secondary border-paper/25 text-paper hover:border-paper hover:bg-paper hover:text-ink"
            >
              Explore Services
            </Link>
          </div>

          <div className="mt-24 grid grid-cols-2 gap-10 border-t border-paper/10 pt-10 md:grid-cols-4">
            {stats.map((stat, i) => (
              <StatCounter
                key={stat.label}
                value={stat.value}
                label={stat.label}
                delay={i * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section-pad bg-surface">
        <div className="container-content">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="eyebrow text-gold-dark">What We Do</p>
              <h2 className="mt-4 max-w-xl font-display text-4xl font-semibold text-ink md:text-5xl">
                Every trade your property needs, one accountable team.
              </h2>
            </div>
            <Link
              href="/services"
              className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-ink hover:text-gold-dark"
            >
              View All Services
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 6).map((service, i) => (
              <ServiceCard key={service.slug} service={service} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section-pad bg-ink text-paper">
        <div className="container-content grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-start">
          <div>
            <p className="eyebrow text-gold">Our Process</p>
            <h2 className="mt-4 max-w-xl font-display text-4xl font-semibold md:text-5xl">
              A cleaner process makes a cleaner result.
            </h2>
            <p className="mt-6 max-w-xl text-paper/60">
              Premium work is not only about materials. It is about how the
              job is planned, communicated and delivered from the first site
              visit to the final handover.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {[
                {
                  step: "01",
                  icon: Ruler,
                  title: "Site review",
                  copy: "We measure, assess and identify the real scope before giving numbers.",
                },
                {
                  step: "02",
                  icon: ClipboardList,
                  title: "Clear quote",
                  copy: "You get a straightforward estimate with work items and expectations.",
                },
                {
                  step: "03",
                  icon: Sparkles,
                  title: "Execution",
                  copy: "Our in-house teams handle the work with regular progress updates.",
                },
                {
                  step: "04",
                  icon: CheckCircle2,
                  title: "Handover",
                  copy: "We finish cleanly, test the work and close the project properly.",
                },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="group rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gold text-ink transition-colors group-hover:bg-paper">
                        <Icon size={20} />
                      </div>
                      <span className="font-display text-sm tracking-[0.35em] text-gold/80">
                        {item.step}
                      </span>
                    </div>
                    <p className="mt-5 font-display text-xl font-semibold text-paper">
                      {item.title}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-paper/60">
                      {item.copy}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          <aside className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/8 to-white/[0.02] p-8 shadow-premium backdrop-blur-sm md:sticky md:top-28">
            <p className="eyebrow text-gold">Premium Delivery</p>
            <h3 className="mt-4 font-display text-3xl font-semibold">
              The small details change how the whole site feels.
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-paper/65">
              A polished contractor site should feel calm, confident and easy
              to trust. That comes from spacing, hierarchy, repeated accents
              and a clear next action on every screen.
            </p>

            <div className="mt-8 space-y-4">
              {[
                "Gold accents and dark surfaces for a premium brand feel",
                "Clear workflow so visitors know exactly how you operate",
                "Stronger trust signals before they ever reach the contact form",
              ].map((point) => (
                <div key={point} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-ink/30 p-4">
                  <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-gold" />
                  <p className="text-sm leading-relaxed text-paper/75">{point}</p>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="section-pad bg-ink text-paper">
        <div className="container-content grid gap-16 md:grid-cols-2 md:items-center">
          <div>
            <p className="eyebrow text-gold">Why Choose Us</p>
            <h2 className="mt-4 font-display text-4xl font-semibold md:text-5xl">
              Precision engineering meets honest craftsmanship.
            </h2>
            <p className="mt-6 max-w-md text-paper/60">
              A decade of hands-on delivery across Ernakulam, Pathanamthitta
              and Kalanjoor means every estimate we give is one we stand
              behind — in writing, on schedule, on budget.
            </p>
            <Link href="/about" className="btn-primary mt-8 bg-gold text-ink hover:bg-paper">
              Our Story
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid gap-px overflow-hidden rounded-3xl bg-paper/10 sm:grid-cols-2">
            {[
              {
                title: "Licensed & Insured",
                copy: "Every crew, every site, fully compliant.",
              },
              {
                title: "Fixed-Price Quotes",
                copy: "No surprise line items once work begins.",
              },
              {
                title: "In-House Trades",
                copy: "Electrical, CCTV and interiors under one team.",
              },
              {
                title: "On-Time Delivery",
                copy: "Schedules built with real buffer, not hope.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-ink p-8">
                <p className="font-display text-lg font-semibold text-paper">
                  {item.title}
                </p>
                <p className="mt-2 text-sm text-paper/50">{item.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-pad bg-gold">
        <div className="container-content flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <h2 className="max-w-xl font-display text-3xl font-semibold text-ink md:text-4xl">
            Ready to start your project? Get a free, no-obligation quote
            today.
          </h2>
          <Link
            href="/contact"
            className="btn-primary shrink-0 bg-ink text-paper hover:bg-paper hover:text-ink"
          >
            Get Free Quote
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
