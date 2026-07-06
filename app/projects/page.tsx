import type { Metadata } from "next";
import StaticPageShell from "@/components/StaticPageShell";

export const metadata: Metadata = {
  title: "Projects",
  description: "Selected construction and electrical project work from WYLITE VENTURES.",
};

export default function ProjectsPage() {
  return (
    <StaticPageShell
      eyebrow="Projects"
      title="Work that is built to be seen, used and trusted."
      description="This section will showcase completed work, site photos and delivery outcomes as the portfolio grows."
    />
  );
}