import TagLine from "@/components/custom/Tagline";
import { roadmap } from "@/constants";
import { Gradient } from "./roadmapGrad";
import Image from "next/image";
import grid from "@/assets/img/grid.png";
import { cn } from "@/lib/utils";
import { code_font } from "@/app/fonts";
import CheckSvg from "@/assets/svg/Check";
import LoaderSvg from "@/assets/svg/Loader";

const Roadmap = () => (
  <div className="container md:pb-10">
    <div className="relative grid gap-6 md:grid-cols-2 md:gap-4 md:pb-[7rem]">
      {roadmap.map((item) => {
        const status = item.status === "done" ? "Done" : "In progress";

        return (
          <div
            className={`md:flex even:md:translate-y-[7rem] p-0.25 border border-neutral-600 rounded-[2.5rem] ${
              item.colorful ? "bg-conic-gradient" : "bg-n-6"
            }`}
            key={item.id}
          >
            <div className="relative p-8 bg-n-8 rounded-[2.4375rem] overflow-hidden xl:p-15">
              <div className="absolute top-0 left-0 max-w-full">
                <Image
                  className="w-full brightness-200"
                  src={grid}
                  width={550}
                  height={550}
                  alt="Grid"
                />
                <Gradient />
              </div>
              <div className="relative z-1">
                <div className="flex items-center justify-between mb-8 md:mb-20">
                  <TagLine>{item.date}</TagLine>

                  <div className="flex items-center px-4 py-1 bg-n-1 rounded text-n-8">
                    <div
                      className={cn(
                        "bg-white flex items-center gap-x-2 px-2 text-black rounded-sm",
                        code_font.className
                      )}
                    >
                      {item.status == "done" ? <CheckSvg /> : <LoaderSvg />}
                      {status}
                    </div>
                  </div>
                </div>

                <div className="mb-10 -my-10 -mx-15">
                  <Image
                    className="w-full rounded-lg"
                    src={item.imageUrl}
                    width={500}
                    height={500}
                    alt={item.title}
                  />
                </div>
                <h4 className="text-xl h4 mb-4">{item.title}</h4>
                <p className="body-2 text-n-4 text-muted-foreground">
                  {item.text}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  </div>
);

export default Roadmap;
