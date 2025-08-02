import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useState } from "react";

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Aisha",
      location: "Lekki",
      rating: 5,
      text: "Beautiful space — it feels like an escape without leaving Lagos. The garden area is absolutely stunning and perfect for photoshoots.",
      avatar: "A"
    },
    {
      name: "Ugo",
      location: "Akowonjo",
      rating: 5,
      text: "I always bring my girls here for hangouts. Vibe is unmatched! The staff is friendly and the atmosphere is always perfect.",
      avatar: "U"
    },
    {
      name: "Tolu",
      location: "Oko Oba",
      rating: 5,
      text: "Clean rooms, great food, and the night bar scene is 10/10. Perfect place for both relaxation and entertainment.",
      avatar: "T"
    },
    {
      name: "Kemi",
      location: "Agege",
      rating: 5,
      text: "The swimming pool area is amazing! Had the most relaxing weekend here. Will definitely be coming back.",
      avatar: "K"
    },
    {
      name: "David",
      location: "Shasha",
      rating: 5,
      text: "Great location for events. The snooker room was a hit with my friends. Professional service all around.",
      avatar: "D"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <section id="testimonials" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
              What Our <span className="text-gradient-gold">Guests</span> Say
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Don't just take our word for it. Here's what our valued guests from across 
              Lagos have to say about their experiences with us.
            </p>
          </div>

          {/* Featured Testimonial */}
          <div className="mb-12">
            <Card className="bg-background border-border shadow-elegant max-w-4xl mx-auto">
              <CardContent className="p-8 md:p-12 text-center">
                <Quote className="w-12 h-12 text-primary mx-auto mb-6 opacity-20" />
                
                <blockquote className="text-xl md:text-2xl font-medium text-foreground leading-relaxed mb-8">
                  "{testimonials[currentTestimonial].text}"
                </blockquote>

                <div className="flex items-center justify-center space-x-1 mb-6">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>

                <div className="flex items-center justify-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-gold rounded-full flex items-center justify-center">
                    <span className="text-primary-foreground font-bold">
                      {testimonials[currentTestimonial].avatar}
                    </span>
                  </div>
                  <div className="text-left">
                    <p className="font-semibold text-foreground">
                      {testimonials[currentTestimonial].name}
                    </p>
                    <p className="text-muted-foreground text-sm">
                      {testimonials[currentTestimonial].location}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Testimonial Dots */}
          <div className="flex justify-center space-x-2 mb-12">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentTestimonial 
                    ? 'bg-primary' 
                    : 'bg-muted hover:bg-muted-foreground'
                }`}
              />
            ))}
          </div>

          {/* All Testimonials Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.slice(0, 6).map((testimonial, index) => (
              <Card key={index} className="bg-background hover:bg-background/80 transition-colors border-border">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                  
                  <blockquote className="text-foreground mb-4 leading-relaxed">
                    "{testimonial.text}"
                  </blockquote>

                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-gold rounded-full flex items-center justify-center">
                      <span className="text-primary-foreground font-bold text-sm">
                        {testimonial.avatar}
                      </span>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground text-sm">
                        {testimonial.name}
                      </p>
                      <p className="text-muted-foreground text-xs">
                        {testimonial.location}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;