import { Wine, Coffee, Users, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import barSelection from "@/assets/bar-selection.jpg";
import fingerFood from "@/assets/finger-food.jpg";

const BarLoungeSection = () => {
  return (
    <section id="bar" className="py-20 bg-gradient-to-br from-accent/5 to-primary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
              Lounge & <span className="text-gradient-gold">Bar</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Great food, even better vibes — enjoy drinks and bites with friends in our relaxed atmosphere.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Bar Selection */}
            <Card className="group overflow-hidden">
              <div className="relative">
                <img 
                  src={barSelection} 
                  alt="Premium bar selection with various spirits and cocktails" 
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent flex items-end p-6">
                  <div className="text-white">
                    <h3 className="text-xl font-display font-bold mb-1">
                      Premium Selection
                    </h3>
                    <p className="opacity-90">
                      Curated spirits & cocktails
                    </p>
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-muted-foreground leading-relaxed">
                  From premium whiskeys to crafted cocktails, our bar features an 
                  extensive selection of beverages to complement your evening.
                </p>
              </CardContent>
            </Card>

            {/* Food & Bites */}
            <Card className="group overflow-hidden">
              <div className="relative">
                <img 
                  src={fingerFood} 
                  alt="Delicious finger foods and appetizers served at our lounge" 
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent flex items-end p-6">
                  <div className="text-white">
                    <h3 className="text-xl font-display font-bold mb-1">
                      Tasty Bites
                    </h3>
                    <p className="opacity-90">
                      Affordable & delicious
                    </p>
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-muted-foreground leading-relaxed">
                  Our affordable yet classy menu features finger foods and appetizers 
                  perfect for sharing during hangouts with friends.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <Wine className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Premium Drinks
              </h3>
              <p className="text-muted-foreground text-sm">
                Carefully selected wines, spirits, and signature cocktails
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <Coffee className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                All-Day Menu
              </h3>
              <p className="text-muted-foreground text-sm">
                From morning coffee to late-night snacks
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Social Vibes
              </h3>
              <p className="text-muted-foreground text-sm">
                Perfect atmosphere for hangouts and celebrations
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Night Scene
              </h3>
              <p className="text-muted-foreground text-sm">
                The night bar scene is absolutely unmatched
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-to-r from-primary/10 to-accent/10 rounded-3xl p-8">
            <h3 className="text-2xl font-display font-bold text-foreground mb-4">
              Join the Vibe
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto leading-relaxed">
              Whether you're catching up with friends over drinks or enjoying a quiet evening meal, 
              our lounge offers the perfect setting for every occasion.
            </p>
            <Button
              onClick={() => window.open('https://wa.me/2348035861110', '_blank')}
              size="lg"
              className="bg-gradient-gold text-primary-foreground hover:opacity-90 transition-opacity shadow-gold"
            >
              Reserve Your Table
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BarLoungeSection;