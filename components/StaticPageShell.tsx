import Link from "next/link";
import { ArrowRight } from "lucide-react";

type StaticPageShellProps = {
  eyebrow: string;
  title: string;
  description: string;
  primaryCtaHref?: string;
  primaryCtaLabel?: string;
  secondaryCtaHref?: string;
  secondaryCtaLabel?: string;
  children?: React.ReactNode;
};

export default function StaticPageShell({
  eyebrow,
  title,
  description,
  primaryCtaHref = "/contact",
  primaryCtaLabel = "Get Free Quote",
  secondaryCtaHref = "/services",
  secondaryCtaLabel = "Explore Services",
  children,
}: StaticPageShellProps) {
  return (
    <section className="section-pad min-h-[70vh] bg-ink pt-32 text-paper">
      <div className="container-content px-6 md:px-10">
        <p className="eyebrow text-gold">{eyebrow}</p>
        <h1 className="mt-6 max-w-3xl font-display text-5xl font-semibold leading-[1.05] text-paper md:text-7xl">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-paper/70">
          {description}
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <Link href={primaryCtaHref} className="btn-primary bg-gold text-ink hover:bg-paper hover:text-ink">
            {primaryCtaLabel}
            <ArrowRight size={16} />
          </Link>
          <Link href={secondaryCtaHref} className="btn-secondary border-paper/20 text-paper hover:border-paper hover:bg-paper hover:text-ink">
            {secondaryCtaLabel}
          </Link>
        </div>

        {children ? <div className="mt-16">{children}</div> : null}
      </div>
    </section>
  );
}