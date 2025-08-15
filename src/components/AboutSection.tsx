import { Leaf, Users, MapPin } from "lucide-react";

const AboutSection = () => {
  const features = [
    {
      icon: Leaf,
      title: "Garden Themed",
      description: "Peaceful outdoor spaces designed for relaxation and connection with nature"
    },
    {
      icon: Users,
      title: "Multi-Concept",
      description: "From intimate hangouts to grand celebrations, we cater to every occasion"
    },
    {
      icon: MapPin,
      title: "Strategic Locations",
      description: "Conveniently located across Lagos for easy access and memorable experiences"
    }
  ];

  return (
    <section id="about" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
              Where <span className="text-gradient-gold">Hospitality</span> Meets Nature
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              House 84 Parks & Garden Limited is a multi-concept hospitality brand offering 
              unique experiences across Lagos. We blend modern comfort with natural green area, 
              creating memories where pleasure knows no bounds.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="text-center p-8 rounded-2xl bg-secondary hover:bg-secondary/80 transition-colors group"
              >
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-gold rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <feature.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* Mission Statement */}
          <div className="text-center bg-gradient-to-r from-garden-green/10 to-garden-sage/10 rounded-3xl p-8 md:p-12">
            <blockquote className="text-2xl md:text-3xl font-display italic text-foreground leading-relaxed">
              "We believe that true hospitality goes beyond service – it's about creating 
              moments that transcend the ordinary and touch the soul."
            </blockquote>
            <cite className="block mt-6 text-lg text-muted-foreground not-italic">
              — House 84 Parks & Garden Team
            </cite>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;