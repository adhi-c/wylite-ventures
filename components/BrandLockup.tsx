import Image from "next/image";
import { cn } from "@/lib/utils";

type BrandLockupProps = {
  className?: string;
  iconClassName?: string;
  textClassName?: string;
};

export default function BrandLockup({
  className,
}: BrandLockupProps) {
  return (
    <Image
      src="/logo.png"
      alt="Wylite Ventures"
      width={220}
      height={60}
      priority
      className={cn("h-12 w-auto", className)}
    />
  );
}