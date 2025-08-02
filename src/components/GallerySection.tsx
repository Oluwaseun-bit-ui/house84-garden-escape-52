import { ExternalLink, Play } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import poolArea from "@/assets/pool-area.jpg";
import barLounge from "@/assets/bar-lounge.jpg";
import luxuryRoom from "@/assets/luxury-room.jpg";

const GallerySection = () => {
  const mediaItems = [
    {
      type: "image",
      src: poolArea,
      title: "Pool & Garden Area",
      description: "Relax by our beautiful swimming pool surrounded by lush gardens"
    },
    {
      type: "image",
      src: barLounge,
      title: "Bar & Lounge",
      description: "Sophisticated spaces for socializing and entertainment"
    },
    {
      type: "image",
      src: luxuryRoom,
      title: "Luxury Rooms",
      description: "Modern comfort with all the amenities you need"
    },
    {
      type: "social",
      platform: "TikTok",
      url: "https://vm.tiktok.com/ZMSGq1QKa/",
      title: "TikTok Highlights",
      description: "See our latest videos and behind-the-scenes content",
      thumbnail: poolArea
    },
    {
      type: "social",
      platform: "Instagram",
      url: "https://www.instagram.com/reel/DL7tMpBt5yh/?igsh=NzZmM2JwYjB0cmo5",
      title: "Instagram Reel",
      description: "Experience the vibe through our Instagram content",
      thumbnail: barLounge
    },
    {
      type: "social",
      platform: "Facebook",
      url: "https://www.facebook.com/share/p/12LqZo7ozN8/?mibextid=wwXIfr",
      title: "Facebook Updates",
      description: "Stay connected with our latest updates and events",
      thumbnail: luxuryRoom
    }
  ];

  const handleSocialClick = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
              Experience the <span className="text-gradient-gold">Atmosphere</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Get a glimpse of what awaits you. From serene garden spaces to vibrant social areas, 
              every corner tells a story of exceptional hospitality.
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mediaItems.map((item, index) => (
              <Card key={index} className="bg-card hover:bg-card/80 transition-colors border-border overflow-hidden group cursor-pointer">
                <div 
                  className="relative h-64 bg-cover bg-center"
                  style={{ 
                    backgroundImage: `url(${item.type === 'image' ? item.src : item.thumbnail})` 
                  }}
                  onClick={() => item.type === 'social' && handleSocialClick(item.url)}
                >
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
                  
                  {/* Play Icon for Social Media */}
                  {item.type === 'social' && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 bg-primary/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Play className="w-8 h-8 text-primary-foreground ml-1" fill="currentColor" />
                      </div>
                    </div>
                  )}

                  {/* Platform Badge for Social Media */}
                  {item.type === 'social' && (
                    <div className="absolute top-4 right-4">
                      <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
                        <ExternalLink className="w-3 h-3" />
                        <span>{item.platform}</span>
                      </span>
                    </div>
                  )}

                  {/* Content Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl font-bold text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-white/90 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Social Media Links */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-display font-bold text-foreground mb-8">
              Follow Our Journey
            </h3>
            <div className="flex justify-center space-x-6">
              <a
                href="https://www.instagram.com/84parksandgarden"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity flex items-center space-x-2"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Instagram</span>
              </a>
              <a
                href="https://www.facebook.com/84parksandgarden"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity flex items-center space-x-2"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Facebook</span>
              </a>
              <a
                href="https://vm.tiktok.com/ZMSGq1QKa/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black text-white px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity flex items-center space-x-2"
              >
                <ExternalLink className="w-4 h-4" />
                <span>TikTok</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;