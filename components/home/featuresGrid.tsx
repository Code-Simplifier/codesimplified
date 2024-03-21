import { secondary_font } from "@/app/fonts";
import { cn } from "@/lib/utils";

export const FeaturesGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] mt-10 grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const FeaturesGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 bg-primary/40 shadow-input dark:shadow-none p-4 border border-purple-400/55 justify-between flex flex-col space-y-4",
        className
      )}
    >
      {header}
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        {icon}
        <div className="mb-2 mt-2">{title}</div>
        <div className={cn("text-neutral-400 text-xs dark:text-neutral-300", secondary_font.className)}>
          {description}
        </div>
      </div>
    </div>
  );
};
