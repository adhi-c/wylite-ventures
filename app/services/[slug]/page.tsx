import type { Metadata } from "next";
import { notFound } from "next/navigation";
import StaticPageShell from "@/components/StaticPageShell";
import { services } from "@/lib/site-config";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    return { title: "Service" };
  }

  return {
    title: service.title,
    description: service.shortDescription,
  };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <StaticPageShell
      eyebrow="Service Detail"
      title={service.title}
      description={service.shortDescription}
      secondaryCtaHref="/services"
      secondaryCtaLabel="Back to Services"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 text-paper shadow-card backdrop-blur-sm">
          <p className="font-display text-2xl font-semibold">What you get</p>
          <p className="mt-3 text-sm leading-relaxed text-paper/70">
            Detailed scope, practical site coordination, and a handover that leaves you with a working system, not loose ends.
          </p>
        </div>
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-card backdrop-blur-sm">
          <p className="font-display text-2xl font-semibold text-paper">Next step</p>
          <p className="mt-3 text-sm leading-relaxed text-paper/65">
            Share your site details and we’ll map the work, budget and timeline for your project.
          </p>
        </div>
      </div>
    </StaticPageShell>
  );
}