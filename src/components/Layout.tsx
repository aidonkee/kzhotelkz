import { ReactNode } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "@/components/hotel/Navbar";
import Footer from "@/components/hotel/Footer";
import { LanguageProvider } from "@/contexts/LanguageContext";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <LanguageProvider>
       <div 
        className="fixed inset-0 -z-10"
        style={{
          backgroundImage: "url('/bg-pattern.jpg')",
          backgroundRepeat: 'repeat',
          backgroundSize: '400px auto',
        }}
      /> 
      
      {/* УБРАНО: overflow-x-hidden */}
      <div className="min-h-screen flex flex-col relative">
        <Navbar />
        
        <main className="flex-1">
          {children}
        </main>
        
        {!isHomePage && <Footer />}
      </div>

      {isHomePage && (
        <div className="md:hidden">
          <Footer />
        </div>
      )}
    </LanguageProvider>
  );
};
export default Layout;