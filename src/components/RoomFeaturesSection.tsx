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
import luxuryRoomBlue from "@/assets/luxury-room-blue.jpg";
import luxuryRoomGold from "@/assets/luxury-room-gold.jpg";
import premiumRoom1 from "@/assets/premium-room-1.jpg";
import premiumRoom2 from "@/assets/premium-room-2.jpg";
import premiumRoom3 from "@/assets/premium-room-3.jpg";

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
            {/* Premium Room Gallery */}
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-2 lg:grid-cols-1 gap-3 lg:h-[600px]">
                <div className="col-span-2 lg:col-span-1">
                  <img 
                    src={premiumRoom1} 
                    alt="Premium room with elegant decor and ambient lighting" 
                    className="w-full h-48 lg:h-40 object-cover rounded-2xl shadow-elegant"
                  />
                </div>
                <div className="grid grid-cols-2 gap-3 col-span-2 lg:col-span-1">
                  <img 
                    src={premiumRoom2} 
                    alt="Modern bedroom with blue ambient lighting" 
                    className="w-full h-32 lg:h-36 object-cover rounded-2xl shadow-elegant"
                  />
                  <img 
                    src={premiumRoom3} 
                    alt="Comfortable room with modern amenities" 
                    className="w-full h-32 lg:h-36 object-cover rounded-2xl shadow-elegant"
                  />
                </div>
                <div className="grid grid-cols-2 gap-3 col-span-2 lg:col-span-1">
                  <img 
                    src={luxuryRoomBlue} 
                    alt="Luxury hotel room with blue ambient lighting" 
                    className="w-full h-32 lg:h-36 object-cover rounded-2xl shadow-elegant"
                  />
                  <img 
                    src={luxuryRoomGold} 
                    alt="Luxury hotel room with gold accents" 
                    className="w-full h-32 lg:h-36 object-cover rounded-2xl shadow-elegant"
                  />
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