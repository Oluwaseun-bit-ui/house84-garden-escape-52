import { Calendar, Heart, Cake, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const EventsSection = () => {
  const eventTypes = [
    {
      icon: Calendar,
      title: "Corporate Events",
      description: "Professional meetings and business gatherings"
    },
    {
      icon: Heart,
      title: "Bridal Showers",
      description: "Intimate celebrations for the bride-to-be"
    },
    {
      icon: Cake,
      title: "Birthday Parties",
      description: "Memorable celebrations for all ages"
    },
    {
      icon: Sparkles,
      title: "Themed Hangouts",
      description: "Custom-themed parties and social gatherings"
    }
  ];

  return (
    <section id="events" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
              Events & <span className="text-gradient-gold">Experiences</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Perfect for birthdays, bridal showers, intimate weddings, and themed hangouts. 
              We create magical moments that last a lifetime.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Event Image */}
            <div className="order-2 lg:order-1">
              <div className="relative group">
                <img 
                  src="/lovable-uploads/12acfac5-225d-45b6-a453-968b919cdea3.png" 
                  alt="Elegant event setup with purple and white decorations, perfect for special occasions" 
                  className="w-full h-96 lg:h-[500px] object-cover rounded-3xl shadow-elegant group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent rounded-3xl flex items-end p-8">
                  <div className="text-white">
                    <h3 className="text-2xl font-display font-bold mb-2">
                      Magical Moments
                    </h3>
                    <p className="text-lg opacity-90">
                      Where celebrations come to life
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Event Features */}
            <div className="order-1 lg:order-2">
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-display font-bold text-foreground mb-4">
                    Your Perfect Event Venue
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    From intimate gatherings to grand celebrations, our versatile event spaces 
                    can be transformed to match your vision perfectly.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-gradient-gold rounded-full"></div>
                    <span className="text-foreground">Customizable decorations and themes</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-gradient-gold rounded-full"></div>
                    <span className="text-foreground">Professional event planning support</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-gradient-gold rounded-full"></div>
                    <span className="text-foreground">Catering and beverage services</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-gradient-gold rounded-full"></div>
                    <span className="text-foreground">Audio-visual equipment available</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-gradient-gold rounded-full"></div>
                    <span className="text-foreground">Flexible capacity for different group sizes</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Event Types Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {eventTypes.map((event, index) => (
              <Card key={index} className="bg-card hover:bg-card/80 transition-colors border-border group text-center">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <event.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {event.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {event.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-to-r from-primary/10 to-accent/10 rounded-3xl p-8">
            <h3 className="text-2xl font-display font-bold text-foreground mb-4">
              Plan Your Special Event
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto leading-relaxed">
              Let us help you create unforgettable memories. Our experienced team will work with you 
              to bring your vision to life, no matter the occasion.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => window.open('https://wa.me/2348035861110', '_blank')}
                size="lg"
                className="bg-gradient-gold text-primary-foreground hover:opacity-90 transition-opacity shadow-gold"
              >
                Plan Your Event
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-foreground/20 text-foreground hover:bg-foreground/10"
              >
                View Event Packages
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;