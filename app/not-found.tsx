import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center bg-ink px-6 text-center text-paper">
      <p className="eyebrow text-gold">Page Not Found</p>
      <h1 className="mt-6 font-display text-6xl font-semibold md:text-8xl">
        404
      </h1>
      <p className="mt-4 max-w-md text-paper/60">
        The page you&apos;re looking for has been moved, renamed, or doesn&apos;t
        exist. Let&apos;s get you back on solid ground.
      </p>
      <Link href="/" className="btn-primary mt-8 bg-gold text-ink hover:bg-paper">
        Back to Home
        <ArrowRight size={16} />
      </Link>
    </section>
  );
}
