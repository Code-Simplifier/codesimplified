"use client";

import { athenaSideLink } from "@/constants";
import { usePathname } from "next/navigation";
import React from "react";
import { Button } from "../ui/button";
import { FaChevronRight } from "react-icons/fa6";

const Sidebar = () => {
  const pathname = usePathname();
  return (
    <aside className="h-screen w-72 backdrop-blur-md">
      <nav className="h-full flex flex-col border-r shadow-md">
        <div className="p-4 pb-2 flex justify-between items-center ml-2 mt-10">
          <h1 className="uppercase tracking-widest text-xl">athena</h1>
          <Button variant="ghost">
            <FaChevronRight />
          </Button>
        </div>

        <ul className="flex-1 self-center space-y-4 text-lg mt-5">
          {athenaSideLink.map((link) => {
            const path = `/features/athena${link.route}`;
            const isActive = path === pathname;
            return (
              <li
                key={link.id}
                className={`relative flex items-center py-2 px-3 my-1 rounded-md text-neutral-500 cursor-pointer ${
                  isActive && "text-glow text-white"
                }`}
              >
                <link.icon className={isActive && "text-purple-300"} />
                <span className="w-52 ml-3">{link.label}</span>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
