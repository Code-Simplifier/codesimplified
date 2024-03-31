import { bold_secondary_font, secondary_font } from "@/app/fonts";
import { cn } from "@/lib/utils";
import React from "react";
import { Separator } from "@/components/ui/separator";
import { pricingList } from "@/constants";

import { FaRegCheckCircle } from "react-icons/fa";
import { FiMinusCircle } from "react-icons/fi";
import { RxCrossCircled } from "react-icons/rx";
import { Button } from "../ui/button";

export const Pricing = () => {
  return (
    <div className="w-full p-10 grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-3">
      {pricingList.map((item) => (
        <div
          key={item.id}
          className="border p-5 border-muted-foreground/50 rounded-[2rem]"
        >
          <h1
            className={cn(
              "uppercase text-lg mb-5 border border-primary bg-muted-foreground/10 rounded-[1rem] p-2 w-fit",
              secondary_font.className
            )}
          >
            {item.tier}
          </h1>
          <div className="my-10 flex flex-col space-y-1">
            <h1 className="text-7xl">
              {item.price}
              {item.price !== "Free" && (
                <span className="text-lg text-muted-foreground">per month</span>
              )}
            </h1>
            <p
              className={cn("text-muted-foreground", secondary_font.className)}
            >
              {item.desc}
            </p>
          </div>
          <Button className={cn("w-full mb-5", bold_secondary_font.className)}>
            {item.tier === "Basic" ? "Sign In" : "Get Started"}
          </Button>
          <Separator className="bg-muted-foreground/30" />
          <ul className={cn("mt-5", secondary_font.className)}>
            {item.features.map((feature, index) => (
              <li key={index} className="flex items-center py-3">
                <FaRegCheckCircle size={20} />
                <p className="body-2 ml-4">{feature}</p>
              </li>
            ))}
          </ul>
          <ul className={cn("mt-5", secondary_font.className)}>
            {item.tier !== "Pro Max" &&
              item.warnings.map((warning, index) => (
                <li key={index} className="flex items-center py-3">
                  <FiMinusCircle size={20} className="text-amber-400" />
                  <p className="body-2 ml-4 text-amber-400">{warning}</p>
                </li>
              ))}
          </ul>
          <ul className={cn("mt-5", secondary_font.className)}>
            {item.tier !== "Pro Max" &&
              item.paid.map((paid, index) => (
                <li key={index} className="flex items-center py-3">
                  <RxCrossCircled size={20} className="text-red-400" />
                  <p className="body-2 ml-4 line-through text-red-400">
                    {paid}
                  </p>
                </li>
              ))}
          </ul>
        </div>
      ))}
    </div>
  );
};
