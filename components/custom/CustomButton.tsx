import { bold_secondary_font, secondary_font } from "@/app/fonts";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

interface Props {
  title: String;
  link: String;
}

const CustomButton = ({ title, link }: Props) => {
  return (
    <Link
      href={`${link}`}
      id="link"
      className={cn(
        "uppercase transition p-2 duration-500 tracking-wide",
        bold_secondary_font.className
      )}
    >
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      {title}
    </Link>
  );
};

export default CustomButton;
