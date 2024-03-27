"use client";

import { disablePageScroll, enablePageScroll } from "scroll-lock";
import { navigation } from "@/constants";
import { Button } from "@/components/ui/button";
import MenuSvg from "@/assets/svg/MenuSvg";
import { HamburgerMenu } from "@/components/navigation/hamburger";
import { useState } from "react";
import { cn } from "@/lib/utils";

import { useCurrentUser } from "@/hooks/use-current-user";
import { UserButton } from "@/components/auth/user-button";
import Link from "next/link";

const Header = () => {
  const [openNavigation, setOpenNavigation] = useState(false);
  const user = useCurrentUser();

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  const handleClick = () => {
    if (!openNavigation) return;

    enablePageScroll();
    setOpenNavigation(false);
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50  border-b border-purple-400 lg:bg-n-8/90 lg:backdrop-blur-md ${
        openNavigation ? "bg-n-8" : "bg-n-8/90 backdrop-blur-md"
      }`}
    >
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        <Link href="/" className="block w-[12rem] xl:mr-8">
          <h2 id="title" className="ml-3 text-xl uppercase">
            <span id="t">Code</span>
            <span id="t">Simplified</span>
          </h2>
        </Link>
        <nav
          className={`${
            openNavigation ? "flex" : "hidden"
          } fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}
        >
          <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
            {navigation.map((item) => (
              <Link
                key={item.id}
                href={item.url}
                onClick={handleClick}
                className={cn(
                  `block relative text-2xl uppercase hover:text-glow transition-all duration-300 ${
                    item.onlyMobile ? "lg:hidden" : ""
                  } px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-sm lg:leading-5 lg:hover:text-n-1 xl:px-12`
                )}
              >
                {item.title}
              </Link>
            ))}
          </div>

          <HamburgerMenu />
        </nav>

        {user ? (
          <div className="hidden lg:flex">
            <UserButton />
          </div>
        ) : (
          <Button className="hidden lg:flex">
            <Link href={"/auth/login"}>Sign In</Link>
          </Button>
        )}

        <Button className="ml-auto lg:hidden" onClick={toggleNavigation}>
          <MenuSvg openNavigation={openNavigation} />
        </Button>
      </div>
    </div>
  );
};

export default Header;
