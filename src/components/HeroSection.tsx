import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/building-exterior.jpg";

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Image with Soft Dimming */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      >
        <div className="absolute inset-0 bg-background/60" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Brand Name - H1 */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground">
            House 84 Parks & Garden Limited
          </h1>

          {/* Tagline - H2 */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold italic text-gradient-gold">
            Beyond Pleasure
          </h2>

          {/* Subtext */}
          <p className="text-lg md:text-xl text-foreground max-w-3xl mx-auto leading-relaxed">
            Experience Lagos' premier multi-concept hospitality destination. From peaceful garden retreats to luxury accommodations, we create unforgettable moments in every space.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button 
              size="lg" 
              className="bg-primary text-primary-foreground hover:bg-primary/90 transition-colors px-8 py-4 text-lg font-bold"
              onClick={() => window.open('https://wa.me/2348035861110', '_blank')}
            >
              Book Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-foreground/20 text-foreground hover:bg-foreground/10 px-8 py-4 text-lg font-semibold"
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Explore Services
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;