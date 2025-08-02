import { 
  Zap, 
  Wind, 
  Wifi, 
  CreditCard, 
  Tv, 
  Refrigerator, 
  Coffee, 
  Waves,
  Shield,
  Car
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import luxuryRoom from "@/assets/luxury-room.jpg";

const RoomFeaturesSection = () => {
  const features = [
    {
      icon: Zap,
      title: "24/7 Electricity",
      description: "Uninterrupted power supply for your comfort"
    },
    {
      icon: Wind,
      title: "Air Conditioning",
      description: "Climate-controlled rooms for optimal comfort"
    },
    {
      icon: Wifi,
      title: "High-Speed WiFi",
      description: "Stay connected with fast, reliable internet"
    },
    {
      icon: CreditCard,
      title: "Card-Reader Access",
      description: "Secure, keyless entry to your room"
    },
    {
      icon: Tv,
      title: "Smart TV",
      description: "Entertainment at your fingertips"
    },
    {
      icon: Refrigerator,
      title: "Refrigerator",
      description: "Keep your beverages and snacks fresh"
    },
    {
      icon: Coffee,
      title: "Complimentary Breakfast",
      description: "Start your day with a delicious meal"
    },
    {
      icon: Waves,
      title: "Free Swimming Access",
      description: "Enjoy our pool facilities at no extra cost"
    },
    {
      icon: Shield,
      title: "24/7 Security",
      description: "Round-the-clock security for peace of mind"
    },
    {
      icon: Car,
      title: "Parking",
      description: "Safe and convenient parking facilities"
    }
  ];

  return (
    <section id="rooms" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
              <span className="text-gradient-gold">Premium</span> Room Features
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Every detail has been carefully considered to ensure your stay exceeds expectations. 
              Experience luxury, comfort, and convenience in perfect harmony.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Room Image */}
            <div className="order-2 lg:order-1">
              <div 
                className="h-96 lg:h-[500px] bg-cover bg-center rounded-3xl shadow-elegant"
                style={{ backgroundImage: `url(${luxuryRoom})` }}
              >
                <div className="h-full bg-gradient-to-t from-background/80 via-transparent to-transparent rounded-3xl flex items-end p-8">
                  <div className="text-white">
                    <h3 className="text-2xl font-display font-bold mb-2">
                      Modern Comfort
                    </h3>
                    <p className="text-lg opacity-90">
                      Where luxury meets functionality
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Features Grid */}
            <div className="order-1 lg:order-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <Card key={index} className="bg-card hover:bg-card/80 transition-colors border-border group">
                    <CardContent className="p-4">
                      <div className="flex items-start space-x-3">
                        <div className="w-10 h-10 bg-gradient-gold rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                          <feature.icon className="h-5 w-5 text-primary-foreground" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-1 text-sm">
                            {feature.title}
                          </h3>
                          <p className="text-muted-foreground text-xs leading-relaxed">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* CTA */}
              <div className="mt-8 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-6">
                <h3 className="text-xl font-display font-bold text-foreground mb-3">
                  Book Your Perfect Stay
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Experience the ultimate in comfort and convenience. Our rooms are designed 
                  to be your home away from home.
                </p>
                <button
                  onClick={() => window.open('https://wa.me/2348035861110', '_blank')}
                  className="bg-gradient-gold text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity shadow-gold"
                >
                  Check Availability
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoomFeaturesSection;