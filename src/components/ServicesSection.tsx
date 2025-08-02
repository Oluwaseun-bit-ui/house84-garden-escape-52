import { 
  TreePine, 
  Calendar, 
  Wine, 
  Bed, 
  Waves, 
  Target,
  Utensils,
  Zap,
  Users
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const ServicesSection = () => {
  const services = [
    {
      icon: TreePine,
      title: "Mini Garden",
      description: "Perfect for hangouts, picnics, and photoshoots in natural settings"
    },
    {
      icon: Calendar,
      title: "Event Centres",
      description: "Professional function rooms for your special occasions"
    },
    {
      icon: Wine,
      title: "Lounge & Bar",
      description: "Sophisticated spaces for socializing and relaxation"
    },
    {
      icon: Bed,
      title: "Luxury Accommodation",
      description: "Comfortable rooms with modern amenities and style"
    },
    {
      icon: Waves,
      title: "Swimming Pool",
      description: "Refreshing pool facilities for leisure and recreation"
    },
    {
      icon: Target,
      title: "Snooker",
      description: "Professional snooker tables for entertainment"
    },
    {
      icon: Utensils,
      title: "Food & Drinks",
      description: "Delicious cuisine and refreshing beverages"
    },
    {
      icon: Zap,
      title: "24/7 Power Supply",
      description: "Uninterrupted power for your comfort and convenience"
    },
    {
      icon: Users,
      title: "Private Events",
      description: "Exclusive hangout parties and themed celebrations"
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
              Our <span className="text-gradient-gold">Services</span> & Amenities
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Everything you need for the perfect getaway, celebration, or relaxation experience. 
              We've thoughtfully curated our amenities to exceed your expectations.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="bg-card hover:bg-card/80 transition-colors border-border group">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-gold rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <service.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-3xl p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">
                Ready to Experience the Difference?
              </h3>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Contact us today to book your stay, plan your event, or simply inquire about our services.
              </p>
              <button
                onClick={() => window.open('https://wa.me/2348035861110', '_blank')}
                className="bg-gradient-gold text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg hover:opacity-90 transition-opacity shadow-gold"
              >
                Get in Touch
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;