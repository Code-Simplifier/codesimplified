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
      <TagLine className="m-5 mt-10 uppercase text-neutral-500 text-sm">
        get started with{" "}
        <span className="hover:text-glow hover:text-white">codesimplified</span>
      </TagLine>
      <div
        className={cn(
          "text-2xl md:text-5xl m-10",
          bold_secondary_font.className
        )}
      >
        What is CodeSimplified?
      </div>
      <Roadmap />
      {/* <FeaturesGrid className="max-w-4xl mx-auto">
        {items.map((item, i) => (
          <FeaturesGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            icon={item.icon}
            className={i === 3 || i === 6 ? "md:col-span-2" : ""}
          />
        ))}
      </FeaturesGrid> */}
    </>
  );
};

const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-600 to-neutral-800"></div>
);
const items = [
  {
    title: "The Dawn of Innovation",
    description: "Explore the birth of groundbreaking ideas and inventions.",
    header: <Skeleton />,
    icon: <FaAddressCard className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Digital Revolution",
    description: "Dive into the transformative power of technology.",
    header: <Skeleton />,
    icon: <FaAddressCard className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Art of Design",
    description: "Discover the beauty of thoughtful and functional design.",
    header: <Skeleton />,
    icon: <FaAddressCard className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Power of Communication",
    description:
      "Understand the impact of effective communication in our lives.",
    header: <Skeleton />,
    icon: <FaAddressCard className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Pursuit of Knowledge",
    description: "Join the quest for understanding and enlightenment.",
    header: <Skeleton />,
    icon: <FaAddressCard className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Joy of Creation",
    description: "Experience the thrill of bringing ideas to life.",
    header: <Skeleton />,
    icon: <FaAddressCard className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Spirit of Adventure",
    description: "Embark on exciting journeys and thrilling discoveries.",
    header: <Skeleton />,
    icon: <FaAddressCard className="h-4 w-4 text-neutral-500" />,
  },
];

export default HomePage;
