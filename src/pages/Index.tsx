import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ExperiencesCarousel from "@/components/ExperiencesCarousel";
import AboutSection from "@/components/AboutSection";
import LocationSection from "@/components/LocationSection";
import FlightExperiences from "@/components/FlightExperiences";
import GallerySection from "@/components/GallerySection";
import ContactSection from "@/components/ContactSection";
import SocialSection from "@/components/SocialSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ExperiencesCarousel />
      <AboutSection />
      <LocationSection />
      <FlightExperiences />
      <GallerySection />
      <ContactSection />
      <SocialSection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
