"use client";
import React from "react";

import { useScroll, useTransform } from "framer-motion";

import { HeroSection } from "@/components/home/hero";
import { FeaturesGrid, FeaturesGridItem } from "@/components/home/featuresGrid";
import { FaAddressCard } from "react-icons/fa";
import TagLine from "@/components/custom/Tagline";
import { bold_secondary_font, secondary_font } from "@/app/fonts";
import { cn } from "@/lib/utils";
import Roadmap from "./roadmap";
import { Pricing } from "./pricing";

const HomePage = () => {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const pathLengthFirst = useTransform(scrollYProgress, [0, 0.8], [0.2, 1.2]);
  const pathLengthSecond = useTransform(scrollYProgress, [0, 0.8], [0.15, 1.2]);
  const pathLengthThird = useTransform(scrollYProgress, [0, 0.8], [0.1, 1.2]);
  const pathLengthFourth = useTransform(scrollYProgress, [0, 0.8], [0.05, 1.2]);
  const pathLengthFifth = useTransform(scrollYProgress, [0, 0.8], [0, 1.2]);
  return (
    <>
      <div
        className="h-[400vh] w-full rounded-md relative overflow-clip"
        ref={ref}
      >
        <HeroSection
          pathLengths={[
            pathLengthFirst,
            pathLengthSecond,
            pathLengthThird,
            pathLengthFourth,
            pathLengthFifth,
          ]}
        />
      </div>
      <TagLine className="m-5 mt-10 uppercase text-muted-foreground text-sm">
        get started with codesimplified
      </TagLine>
      <div
        className={cn(
          "text-center text-2xl md:text-5xl m-10",
          bold_secondary_font.className
        )}
      >
        What is CodeSimplified?
        <p
          className={cn(
            "text-lg text-muted-foreground mb-5",
            secondary_font.className
          )}
        >
          Here is an overview of the offerings available to our valued users.
        </p>
      </div>
      <Roadmap />

      <TagLine className="m-5 mt-10 uppercase text-muted-foreground text-sm">
        upgrade your programming skills
      </TagLine>
      <div
        className={cn(
          "text-center text-2xl md:text-5xl m-10",
          bold_secondary_font.className
        )}
      >
        Join CodeSimplified
        <p
          className={cn(
            "text-lg text-muted-foreground",
            secondary_font.className
          )}
        >
          Choose the plan that aligns best with your requirements.
        </p>
      </div>
      <Pricing />
      
    </>
  );
};

export default HomePage;
