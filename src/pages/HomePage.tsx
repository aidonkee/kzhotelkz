import HeroSection from "@/components/hotel/HeroSection";
import SportsTeamsSection from "@/components/hotel/SportsTeamsSection";
import AboutAndAmenitiesSection from "@/components/hotel/AboutAndAmenitiesSection";
import TourSection from "@/components/hotel/TourSection";
import LatestNewsSection from "@/components/hotel/LatestNewsSection";
import Footer from "@/components/hotel/Footer";

const HomePage = () => {
  return (
    <div
      className="
        w-full
        
        
        scrollbar-hide
      "
    >
      <section data-snap className="min-h-screen">
  <HeroSection />
</section>

<section> {/* свободная */}
  <AboutAndAmenitiesSection />
</section>

<section data-snap className="min-h-screen">
  <TourSection />
</section>

<section data-snap className="min-h-screen" id="sports">
  <SportsTeamsSection />
</section>

<section data-snap className="min-h-screen">
  <LatestNewsSection />
</section>


<section data-snap className="hidden md:block">
  <Footer />
</section>

    </div>
  );
};


export default HomePage;