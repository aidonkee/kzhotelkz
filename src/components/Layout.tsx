import { ReactNode } from "react";
import Navbar from "@/components/hotel/Navbar";
import Footer from "@/components/hotel/Footer";
import { LanguageProvider } from "@/contexts/LanguageContext";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <LanguageProvider>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 ">
          {children}
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default Layout;
