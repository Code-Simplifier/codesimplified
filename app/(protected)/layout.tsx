import { Navbar } from "./_components/navbar";

interface ProtectedLayoutProps {
  children: React.ReactNode;
};

const ProtectedLayout = ({ children }: ProtectedLayoutProps) => {
  return ( 
    <div>
      <Navbar />
      <div className="flex flex-col justify-center items-center">

      {children}
      </div>
    </div>
   );
}
 
export default ProtectedLayout;