"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import grid from "@/assets/img/grid.png";

import { Spotlight } from "@/components/custom/Spotlight";
import { cn } from "@/lib/utils";
import { bold_secondary_font, secondary_font } from "@/app/fonts";
import { Gradient } from "@/components/home/roadmapGrad";
import CustomButton from "@/components/custom/CustomButton";
import { Button } from "@/components/ui/button";

const Courses = () => {
  return (
    <div className="">
      <div className="flex flex-col items-center">
        <div className="h-[40rem] w-full rounded-md flex md:items-center md:justify-center antialiased bg-grid-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full">
            <Image
              className="w-full"
              src={grid}
              width={550}
              height={550}
              alt="Grid"
            />
            <Gradient />
          </div>
          <Spotlight
            className="-top-20 left-0 md:left-60 md:-top-20"
            fill="white"
          />
          <div className="p-4 max-w-7xl relative z-10 w-full md:pt-0">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                ease: "easeInOut",
              }}
              className={
                "text-2xl uppercase md:text-7xl mt-5 text-center bg-clip-text text-transparent bg-gradient-to-br from-white to-muted-foreground/80"
              }
            >
              Courses
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: 1,
                duration: 0.5,
                ease: "easeInOut",
              }}
              className="flex flex-col space-y-4 items-center"
            >
              <p
                className={cn(
                  "mt-4 text-base text-neutral-300 max-w-lg text-center mx-auto",
                  secondary_font.className
                )}
              >
                Learn essential concepts, advanced techniques, and practical
                applications through interactive lessons.
              </p>
              <div className="flex space-x-4">
                <Button
                  className={cn(bold_secondary_font.className, "uppercase")}
                >
                  Search
                </Button>
                <CustomButton title={"Categories"} link={"#"} />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
