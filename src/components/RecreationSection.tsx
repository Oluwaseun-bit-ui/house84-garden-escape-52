import { Target, Trophy, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import snookerTable from "@/assets/snooker-table.jpg";

const RecreationSection = () => {
  return (
    <section id="recreation" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
              Fun & <span className="text-gradient-gold">Relaxation</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Unwind with a game of snooker in our social lounge areas. Perfect for friendly competition and relaxation.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Features */}
            <div className="order-2 lg:order-1">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-gold rounded-xl flex items-center justify-center flex-shrink-0">
                    <Target className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      Professional Tables
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      High-quality snooker and pool tables maintained to tournament standards 
                      for the perfect playing experience.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-gold rounded-xl flex items-center justify-center flex-shrink-0">
                    <Users className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      Social Atmosphere
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Meet fellow guests and locals in our friendly, laid-back gaming environment. 
                      Perfect for making new connections.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-gold rounded-xl flex items-center justify-center flex-shrink-0">
                    <Trophy className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      Tournaments & Events
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Join our regular tournaments and special gaming events. 
                      Test your skills and win exciting prizes.
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-8 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-6">
                <h3 className="text-xl font-display font-bold text-foreground mb-3">
                  Challenge Your Friends
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Book a table and enjoy hours of entertainment in our comfortable gaming lounge.
                </p>
                <Button
                  onClick={() => window.open('https://wa.me/2348035861110', '_blank')}
                  className="bg-gradient-gold text-primary-foreground hover:opacity-90 transition-opacity shadow-gold"
                >
                  Reserve Gaming Time
                </Button>
              </div>
            </div>

            {/* Snooker Image */}
            <div className="order-1 lg:order-2">
              <div className="relative group">
                <img 
                  src={snookerTable} 
                  alt="Professional snooker table in our recreational lounge area" 
                  className="w-full h-96 lg:h-[500px] object-cover rounded-3xl shadow-elegant group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent rounded-3xl flex items-end p-8">
                  <div className="text-white">
                    <h3 className="text-2xl font-display font-bold mb-2">
                      Game On
                    </h3>
                    <p className="text-lg opacity-90">
                      Where skill meets social fun
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecreationSection;