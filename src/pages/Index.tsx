import Navbar from "@/components/hotel/Navbar";
import HeroSection from "@/components/hotel/HeroSection";
import AboutSection from "@/components/hotel/AboutSection";
import RoomsSection from "@/components/hotel/RoomsSection";
import AmenitiesSection from "@/components/hotel/AmenitiesSection";
import RestaurantSection from "@/components/hotel/RestaurantSection";
import SportsTeamsSection from "@/components/hotel/SportsTeamsSection";
import ConferenceSection from "@/components/hotel/ConferenceSection";
import OfficesSection from "@/components/hotel/OfficesSection";
import TestimonialsSection from "@/components/hotel/TestimonialsSection";
import Footer from "@/components/hotel/Footer";
import { LanguageProvider } from "@/contexts/LanguageContext";

const Index = () => {
  return (
    <LanguageProvider>
      <main className="min-h-screen">
        <Navbar />
        <HeroSection />
        <AboutSection />
        <RoomsSection />
        <AmenitiesSection />
        <RestaurantSection />
        <SportsTeamsSection />
        <ConferenceSection />
        <OfficesSection />
        <TestimonialsSection />
        <Footer />
      </main>
    </LanguageProvider>
  );
};

export default Index;
