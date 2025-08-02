import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import LocationsSection from "@/components/LocationsSection";
import RoomFeaturesSection from "@/components/RoomFeaturesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import GallerySection from "@/components/GallerySection";
import ContactSection from "@/components/ContactSection";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Fixed Navbar */}
      <Navbar />
      
      {/* Hero Section */}
      <HeroSection />
      
      {/* About Section */}
      <AboutSection />
      
      {/* Services Section */}
      <ServicesSection />
      
      {/* Locations Section */}
      <LocationsSection />
      
      {/* Room Features Section */}
      <RoomFeaturesSection />
      
      {/* Testimonials Section */}
      <TestimonialsSection />
      
      {/* Gallery Section */}
      <GallerySection />
      
      {/* Contact Section */}
      <ContactSection />
      
      {/* Floating WhatsApp Button */}
      <FloatingWhatsApp />
    </div>
  );
};

export default Index;
