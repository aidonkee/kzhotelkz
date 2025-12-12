import Navbar from "@/components/hotel/Navbar";
import HeroSection from "@/components/hotel/HeroSection";
import AboutSection from "@/components/hotel/AboutSection";
import RoomsSection from "@/components/hotel/RoomsSection";
import AmenitiesSection from "@/components/hotel/AmenitiesSection";
import TestimonialsSection from "@/components/hotel/TestimonialsSection";
import Footer from "@/components/hotel/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <RoomsSection />
      <AmenitiesSection />
      <TestimonialsSection />
      <Footer />
    </main>
  );
};

export default Index;
