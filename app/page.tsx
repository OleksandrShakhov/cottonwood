import HeroSlider from "@/components/HeroSlider";
import FeatureCards from "@/components/FeatureCards";
import SeasonalCampingSection from "@/components/SeasonalCampingSection";
import CabinsSection from "@/components/CabinsSection";
import VideoSection from "@/components/VideoSection";
import GallerySection from "@/components/GallerySection";
import AmenitiesSection from "@/components/AmenitiesSection";
import ContactSection from "@/components/ContactSection";
import ScrollToTopButton from "@/components/ScrollToTopButton";

import EventsCalendar from "@/components/EventsCalendar";


export default function Home() {
  return (
    <>
      <HeroSlider />
      <FeatureCards />
      <GallerySection />
      <SeasonalCampingSection />
      <VideoSection />
      <CabinsSection />

      <AmenitiesSection />

      <EventsCalendar />

      <ContactSection />
      <ScrollToTopButton />

    </>
  );
}