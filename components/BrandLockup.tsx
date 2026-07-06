import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

type BrandLockupProps = {
  className?: string;
  iconClassName?: string;
  textClassName?: string;
};

export default function BrandLockup({
  className,
  iconClassName,
  textClassName,
}: BrandLockupProps) {
  return (
    <span className={cn("inline-flex items-center gap-3", className)}>
      <svg
        viewBox="0 0 96 96"
        aria-hidden="true"
        className={cn("h-10 w-10 shrink-0", iconClassName)}
        fill="none"
      >
        <path
          d="M48 8 88 48 48 88 8 48 48 8Z"
          stroke="currentColor"
          strokeWidth="6"
          strokeLinejoin="round"
        />
        <path
          d="M30 24v48"
          stroke="currentColor"
          strokeWidth="6"
          strokeLinecap="round"
        />
        <path
          d="M48 18v60"
          stroke="currentColor"
          strokeWidth="6"
          strokeLinecap="round"
        />
        <path
          d="M66 24v48"
          stroke="currentColor"
          strokeWidth="6"
          strokeLinecap="round"
        />
        <path
          d="M24 48 48 24l12 12-16 16 8 8 20-20"
          stroke="currentColor"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      <span
        className={cn(
          "flex flex-col leading-none tracking-tight",
          textClassName
        )}
      >
        <span className="font-display text-[1.1rem] font-semibold uppercase sm:text-[1.25rem]">
          {siteConfig.name.split(" ")[0]}
        </span>
        <span className="font-display text-[1.1rem] font-semibold uppercase text-gold sm:text-[1.25rem]">
          {siteConfig.name.split(" ")[1]}
        </span>
      </span>
    </span>
  );
}