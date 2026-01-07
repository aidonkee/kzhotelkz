import HeroSection from "@/components/hotel/HeroSection";

import SportsTeamsSection from "@/components/hotel/SportsTeamsSection";
import AboutAndAmenitiesSection from "@/components/hotel/AboutAndAmenitiesSection";
import TourSection from "@/components/hotel/TourSection";
import LatestNewsSection from "@/components/hotel/LatestNewsSection";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <AboutAndAmenitiesSection />
     
      <TourSection />
     
      <SportsTeamsSection />
      <LatestNewsSection />
    </>
  );
};

export default HomePage;
