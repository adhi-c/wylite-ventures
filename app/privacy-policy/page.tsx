import type { Metadata } from "next";
import StaticPageShell from "@/components/StaticPageShell";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for the WYLITE VENTURES website.",
};

export default function PrivacyPolicyPage() {
  return (
    <StaticPageShell
      eyebrow="Privacy Policy"
      title="How we handle your information."
      description="This page will outline the information collected through contact forms and direct inquiries once those features are expanded."
    />
  );
}