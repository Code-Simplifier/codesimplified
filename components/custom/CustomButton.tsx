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
      className="uppercase transition p-3 duration-500 tracking-wide"
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
