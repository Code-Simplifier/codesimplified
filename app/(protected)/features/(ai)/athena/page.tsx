"use client";
import React from "react";
import { motion } from "framer-motion";
import { SparklesCore } from "@/components/custom/Particles";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { secondary_font } from "@/app/fonts";
import { Tabs } from "@/components/custom/Tabs";
import img from "@/assets/img/img.png";
import Image from "next/image";
import CustomButton from "@/components/custom/CustomButton";

export default function AthenaIndex() {
  const DummyContent = () => {
    return (
      <Image
        src={img}
        alt="dummy image"
        width="1000"
        height="1000"
        className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
      />
    );
  };
  const tabs = [
    {
      title: "Restore",
      value: "Restore",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Restore Image with AI Enchancement</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "Generate",
      value: "Generate",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Generate Content to suit your Images</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "Remove",
      value: "Remove",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Remove Objects without PhotoShop</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "Recolor",
      value: "Recolor",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Recolor your Images for a Crisp Feeling</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "Background",
      value: "random",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Remove Background for a Transparent Image</p>
          <DummyContent />
        </div>
      ),
    },
  ];

  return (
    <div className="w-full flex flex-col items-center justify-center overflow-hidden rounded-md">
      <motion.h1
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          delay: 0.8,
          duration: 1.4,
          ease: "easeInOut",
        }}
        className="md:text-7xl mt-10 text-5xl uppercase lg:text-9xl font-bold text-center text-white relative z-20"
      >
        Athena
      </motion.h1>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          delay: 0.1,
          duration: 0.5,
          ease: "easeInOut",
        }}
        className="w-[40rem] h-40 mt-5 relative"
      >
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-purple-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-purple-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-purple-300 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-purple-300 to-transparent h-px w-1/4" />
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={400}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />

        <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          delay: 1.8,
          duration: 1.4,
          ease: "easeInOut",
        }}
        className={cn(
          "flex items-center mt-20 space-x-4",
          secondary_font.className
        )}
      >
        {/* <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
          Shimmer
        </button> */}
        <Button>Go Premium</Button>
        <CustomButton link={"#"} title={"Get started"} />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 2.2,
          duration: 1.4,
          ease: "easeInOut",
        }}
        className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-40"
      >
        <Tabs tabs={tabs} />
      </motion.div>
    </div>
  );
}
