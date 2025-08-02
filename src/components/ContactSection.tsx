import { MessageCircle, Phone, Mail, MapPin, Clock, Instagram, Facebook } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: "+234 803 586 1110",
      action: () => window.open('tel:+2348035861110', '_self')
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      details: "Chat with us instantly",
      action: () => window.open('https://wa.me/2348035861110', '_blank')
    },
    {
      icon: Mail,
      title: "Email",
      details: "info@84parksandgarden.com",
      action: () => window.open('mailto:info@84parksandgarden.com', '_self')
    },
    {
      icon: Clock,
      title: "Hours",
      details: "24/7 Available",
      action: null
    }
  ];

  const locations = [
    {
      name: "84 Parks and Garden - Oko-Oba",
      address: "4, Hainat Augusto Crescendo, Idi-Oparun Bus Stop, Off Old Oko-Oba Road, Agege"
    },
    {
      name: "84 Nfuxon - Shasha/Akowonjo",
      address: "3 Church Street, Coker Estate, Shasha, by Air Force Base, Akowonjo"
    }
  ];

  const socialLinks = [
    {
      platform: "Instagram",
      icon: Instagram,
      url: "https://www.instagram.com/84parksandgarden",
      handle: "@84parksandgarden"
    },
    {
      platform: "Facebook",
      icon: Facebook,
      url: "https://www.facebook.com/84parksandgarden",
      handle: "84parksandgarden"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
              Get in <span className="text-gradient-gold">Touch</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Ready to experience beyond pleasure? Contact us for bookings, inquiries, 
              or just to learn more about what we offer. We're here to help make your visit unforgettable.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-display font-bold text-foreground mb-6">
                  Contact Information
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {contactInfo.map((info, index) => (
                    <Card 
                      key={index} 
                      className={`bg-background hover:bg-background/80 transition-colors border-border ${
                        info.action ? 'cursor-pointer group' : ''
                      }`}
                      onClick={info.action || undefined}
                    >
                      <CardContent className="p-6">
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 bg-gradient-gold rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                            <info.icon className="h-6 w-6 text-primary-foreground" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-foreground mb-1">
                              {info.title}
                            </h4>
                            <p className="text-muted-foreground text-sm">
                              {info.details}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Locations */}
              <div>
                <h3 className="text-2xl font-display font-bold text-foreground mb-6">
                  Our Locations
                </h3>
                <div className="space-y-4">
                  {locations.map((location, index) => (
                    <Card key={index} className="bg-background border-border">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="w-10 h-10 bg-gradient-gold rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                            <MapPin className="h-5 w-5 text-primary-foreground" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-foreground mb-2">
                              {location.name}
                            </h4>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                              {location.address}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Social Media */}
              <div>
                <h3 className="text-2xl font-display font-bold text-foreground mb-6">
                  Follow Us
                </h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 bg-background hover:bg-background/80 transition-colors border border-border rounded-lg p-4 group"
                    >
                      <div className="w-10 h-10 bg-gradient-gold rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                        <social.icon className="h-5 w-5 text-primary-foreground" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground text-sm">
                          {social.platform}
                        </p>
                        <p className="text-muted-foreground text-xs">
                          {social.handle}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact CTA */}
            <div className="lg:pl-8">
              <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl p-8 md:p-12 h-full flex flex-col justify-center">
                <h3 className="text-3xl font-display font-bold text-foreground mb-6">
                  Ready to Experience Beyond Pleasure?
                </h3>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Whether you're planning a getaway, hosting an event, or just looking for a 
                  peaceful escape, we're here to make it happen. Get in touch with us today!
                </p>

                <div className="space-y-4">
                  <button
                    onClick={() => window.open('https://wa.me/2348035861110', '_blank')}
                    className="w-full bg-gradient-gold text-primary-foreground py-4 rounded-lg font-semibold text-lg hover:opacity-90 transition-opacity shadow-gold flex items-center justify-center space-x-3"
                  >
                    <MessageCircle className="h-6 w-6" />
                    <span>Chat on WhatsApp</span>
                  </button>
                  
                  <button
                    onClick={() => window.open('tel:+2348035861110', '_self')}
                    className="w-full bg-background text-foreground border border-border py-4 rounded-lg font-semibold text-lg hover:bg-background/80 transition-colors flex items-center justify-center space-x-3"
                  >
                    <Phone className="h-6 w-6" />
                    <span>Call Us Now</span>
                  </button>
                </div>

                <div className="mt-8 text-center">
                  <p className="text-sm text-muted-foreground">
                    Available 24/7 for your convenience
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;