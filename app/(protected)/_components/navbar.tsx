"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";
import { UserButton } from "@/components/auth/user-button";

export const Navbar = () => {
  const pathname = usePathname();

  return (
    <header className="">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link
          href="#"
          className="flex title-font font-medium items-center text-white mb-4 md:mb-0"
        >
          <h2 id="title" className="ml-3 text-xl uppercase">
            <span id="t">Code</span>
            <span id="t">Simplified</span>
          </h2>
        </Link>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <Link
            href="#"
            className="mr-5 uppercase transition-all duration-500 hover:text-glow"
          >
            Articles
          </Link>
          <Link
            href="#"
            className="mr-5 uppercase transition-all duration-500 hover:text-glow"
          >
            Courses
          </Link>
          <Link
            href="#"
            className="mr-5 uppercase transition-all duration-500 hover:text-glow"
          >
            Snippets
          </Link>
        </nav>
        <UserButton />
      </div>
    </header>
  );
};
