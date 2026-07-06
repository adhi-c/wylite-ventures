"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Building2,
  Camera,
  CookingPot,
  Cpu,
  Fence,
  Droplets,
  Hammer,
  Paintbrush,
  LayoutPanelTop,
  Frame,
  Sofa,
  Sun,
  Wrench,
  Zap,
  ShieldCheck,
} from "lucide-react";
import type { Service } from "@/lib/site-config";

const iconMap: Record<Service["icon"], typeof Building2> = {
  construction: Building2,
  electrical: Zap,
  cctv: Camera,
  solar: Sun,
  interior: Sofa,
  painting: Paintbrush,
  plumbing: Wrench,
  fabrication: Hammer,
  landscaping: Fence,
  maintenance: ShieldCheck,
  waterproofing: Droplets,
  gypsum: LayoutPanelTop,
  kitchen: CookingPot,
  glass: Frame,
  automation: Cpu,
  roofing: Building2,
  cladding: Fence,
};

type ServiceCardProps = {
  service: Service;
  index?: number;
};

export default function ServiceCard({ service, index = 0 }: ServiceCardProps) {
  const Icon = iconMap[service.icon];

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
    >
      <Link
        href={`/services/${service.slug}`}
        className="group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl bg-paper p-8 shadow-card transition-all duration-500 hover:-translate-y-2 hover:shadow-premium"
      >
        <div>
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-ink text-gold transition-colors duration-500 group-hover:bg-gold group-hover:text-ink">
            <Icon size={26} />
          </div>
          <h3 className="mt-6 font-display text-xl font-semibold text-ink">
            {service.title}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-slate">
            {service.shortDescription}
          </p>
        </div>

        <div className="mt-8 flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-ink">
          Read More
          <ArrowUpRight
            size={16}
            className="text-gold transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
          />
        </div>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-gold transition-transform duration-500 group-hover:scale-x-100" />
      </Link>
    </motion.div>
  );
}
