import { Waves, Sun, Droplets } from "lucide-react";
import { Button } from "@/components/ui/button";
import swimmingPool from "@/assets/swimming-pool.jpg";

const PoolSection = () => {
  return (
    <section id="pool" className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
              Pool & <span className="text-gradient-gold">Outdoor</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Complimentary swimming access for guests. A serene, refreshing escape from Lagos heat.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Pool Image */}
            <div className="order-2 lg:order-1">
              <div className="relative group">
                <img 
                  src={swimmingPool} 
                  alt="Crystal clear swimming pool with blue water and modern facilities" 
                  className="w-full h-96 lg:h-[500px] object-cover rounded-3xl shadow-elegant group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent rounded-3xl flex items-end p-8">
                  <div className="text-white">
                    <h3 className="text-2xl font-display font-bold mb-2">
                      Crystal Clear Waters
                    </h3>
                    <p className="text-lg opacity-90">
                      Your refreshing oasis awaits
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Pool Features */}
            <div className="order-1 lg:order-2">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-gold rounded-xl flex items-center justify-center flex-shrink-0">
                    <Waves className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      Free Swimming Access
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      All guests enjoy complimentary access to our pristine swimming pool. 
                      Perfect for morning laps or evening relaxation.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-gold rounded-xl flex items-center justify-center flex-shrink-0">
                    <Sun className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      Escape the Heat
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Beat the Lagos heat in style. Our pool provides the perfect respite 
                      from the bustling city life.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-gold rounded-xl flex items-center justify-center flex-shrink-0">
                    <Droplets className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      Clean & Safe
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Maintained to the highest standards with regular cleaning and 
                      water quality checks for your safety and enjoyment.
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-8 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-6">
                <h3 className="text-xl font-display font-bold text-foreground mb-3">
                  Dive Into Relaxation
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Book your stay and enjoy unlimited access to our beautiful pool facilities.
                </p>
                <Button
                  onClick={() => window.open('https://wa.me/2348035861110', '_blank')}
                  className="bg-gradient-gold text-primary-foreground hover:opacity-90 transition-opacity shadow-gold"
                >
                  Book Your Pool Experience
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PoolSection;