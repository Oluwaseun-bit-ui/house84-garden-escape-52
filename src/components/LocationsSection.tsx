import { MapPin, Phone, Clock, Star } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import poolArea from "@/assets/pool-area.jpg";
import barLounge from "@/assets/bar-lounge.jpg";

const LocationsSection = () => {
  const locations = [
    {
      id: 1,
      name: "84 Parks and Garden",
      location: "Oko-Oba",
      address: "4, Hainat Augusto Crescendo, Idi-Oparun Bus Stop, Off Old Oko-Oba Road, Agege",
      image: poolArea,
      features: [
        "Peaceful garden spaces",
        "Event center",
        "Swimming pool",
        "Lounge & bar",
        "Cozy rooms"
      ],
      highlights: "Perfect for picnics, photoshoots, girls' hangouts & family chillouts",
      status: "Open Now"
    },
    {
      id: 2,
      name: "84 Nfuxon",
      location: "Shasha / Akowonjo",
      address: "3 Church Street, Coker Estate, Shasha, by Air Force Base, Akowonjo",
      image: barLounge,
      features: [
        "Lounge + Event space",
        "Snooker & pool",
        "High-end rooms",
        "Bar & dining"
      ],
      highlights: "Known for a laid-back, social vibe",
      status: "Open Now"
    },
    {
      id: 3,
      name: "84 Hidden",
      location: "Coming Soon",
      address: "Location to be announced",
      image: null,
      features: [
        "Private short-let experience",
        "Airbnb style accommodation",
        "Modern amenities",
        "Exclusive access"
      ],
      highlights: "Premium, quiet, and exclusive private experience",
      status: "Coming Soon"
    }
  ];

  return (
    <section id="locations" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
              Our <span className="text-gradient-gold">Locations</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Strategically positioned across Lagos to serve you better. Each location offers 
              unique experiences while maintaining our signature hospitality standards.
            </p>
          </div>

          {/* Locations Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {locations.map((location) => (
              <Card key={location.id} className="bg-background hover:bg-background/80 transition-colors border-border overflow-hidden group">
                {/* Location Image */}
                {location.image ? (
                  <div 
                    className="h-48 bg-cover bg-center relative"
                    style={{ backgroundImage: `url(${location.image})` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                    <Badge 
                      className={`absolute top-4 right-4 ${
                        location.status === 'Open Now' 
                          ? 'bg-garden-green text-white' 
                          : 'bg-muted text-muted-foreground'
                      }`}
                    >
                      <Clock className="w-3 h-3 mr-1" />
                      {location.status}
                    </Badge>
                  </div>
                ) : (
                  <div className="h-48 bg-gradient-to-br from-muted to-secondary flex items-center justify-center">
                    <div className="text-center">
                      <Star className="w-12 h-12 text-primary mx-auto mb-2" />
                      <Badge className="bg-primary text-primary-foreground">
                        {location.status}
                      </Badge>
                    </div>
                  </div>
                )}

                <CardHeader>
                  <CardTitle className="flex items-start justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-foreground">
                        {location.name}
                      </h3>
                      <p className="text-sm text-primary font-medium">
                        {location.location}
                      </p>
                    </div>
                  </CardTitle>
                </CardHeader>

                <CardContent className="space-y-4">
                  {/* Address */}
                  <div className="flex items-start space-x-2">
                    <MapPin className="w-4 h-4 text-muted-foreground mt-1 flex-shrink-0" />
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {location.address}
                    </p>
                  </div>

                  {/* Features */}
                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-2">Features:</h4>
                    <div className="flex flex-wrap gap-1">
                      {location.features.map((feature, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="bg-primary/5 p-3 rounded-lg">
                    <p className="text-sm text-foreground italic">
                      "{location.highlights}"
                    </p>
                  </div>

                  {/* Contact Button */}
                  {location.status === 'Open Now' && (
                    <button
                      onClick={() => window.open('https://wa.me/2348035861110', '_blank')}
                      className="w-full bg-gradient-gold text-primary-foreground py-2 rounded-lg font-medium text-sm hover:opacity-90 transition-opacity flex items-center justify-center space-x-2"
                    >
                      <Phone className="w-4 h-4" />
                      <span>Contact for Booking</span>
                    </button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationsSection;