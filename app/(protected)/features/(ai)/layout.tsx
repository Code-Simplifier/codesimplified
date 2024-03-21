import Sidebar from "@/components/features/Sidebar";

interface FeaturesLayoutProps {
  children: React.ReactNode;
}

const FeaturesLayout = ({ children }: FeaturesLayoutProps) => {
  return (
    <div className="h-full">
      <div className="hidden md:flex h-full w-72 flex-col fixed pt-[50px] inset-y-0 z-10">
        <Sidebar />
      </div>
      <main className="pt-[20px] md:pl-80 md:pt-[50px] h-full -z-10">
        {children}
      </main>
    </div>
  );
};

export default FeaturesLayout;
