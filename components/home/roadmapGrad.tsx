import Image from "next/image";
import image from "@/assets/img/image.png";

export const Gradient = () => {
  return (
    <div
      className={`absolute top-[18.25rem] left-[30.375rem] w-[56.625rem] opacity-30 mix-blend-color-dodge pointer-events-none`}
    >
      <div className="absolute top-1/2 -left-1/2 w-[58.85rem] h-[58.85rem] -translate-x-2/4 -translate-y-1/2">
        <Image
          className="w-full"
          src={image}
          width={942}
          height={942}
          alt="Gradient"
        />
      </div>
    </div>
  );
};

export const GradientLight = () => {
  return (
    <div className="absolute top-0 left-1/4 w-full aspect-square bg-radial-gradient from-[#28206C] to-[#28206C]/0 to-70% pointer-events-none" />
  );
};