import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils";
import { primary_font, secondary_font } from "@/app/fonts";

interface HeaderProps {
  label: string;
  header: string;
}

export const Header = ({ label, header }: HeaderProps) => {
  return (
    <div className="w-full flex flex-col gap-y-4 items-center justify-center">
      <h1 className={cn("text-3xl font-semibold", primary_font.className)}>
        {header}
      </h1>
      <p className={cn(secondary_font.className, "text-slate-400 text-sm")}>{label}</p>
    </div>
  );
};
