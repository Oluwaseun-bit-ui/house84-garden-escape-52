import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/40" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Brand Name */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-foreground">
            House 84 Parks & Garden
            <span className="block text-gradient-gold">Limited</span>
          </h1>

          {/* Tagline */}
          <div className="space-y-4">
            <h2 className="text-6xl md:text-8xl lg:text-9xl font-display font-bold text-gradient-gold leading-none">
              Beyond
            </h2>
            <h2 className="text-6xl md:text-8xl lg:text-9xl font-display font-bold text-foreground leading-none">
              Pleasure
            </h2>
          </div>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Multi-concept hospitality brand in Lagos offering outdoor relaxation, 
            entertainment, and modern accommodation experiences.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button 
              size="lg" 
              className="bg-gradient-gold text-primary-foreground hover:opacity-90 transition-opacity px-8 py-4 text-lg font-semibold shadow-gold"
              onClick={() => document.getElementById('locations')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Explore Our Locations
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 text-lg font-semibold"
              onClick={() => window.open('https://wa.me/2348035861110', '_blank')}
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;