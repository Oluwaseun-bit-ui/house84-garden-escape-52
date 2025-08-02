import { MessageCircle, X } from "lucide-react";
import { useState } from "react";

const FloatingWhatsApp = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/2348035861110', '_blank');
  };

  if (isMinimized) {
    return (
      <div className="floating-whatsapp">
        <button
          onClick={() => setIsMinimized(false)}
          className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow"
        >
          <MessageCircle className="h-3 w-3 text-white" />
        </button>
      </div>
    );
  }

  return (
    <div className="floating-whatsapp">
      <div
        className="relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Chat Bubble */}
        {isHovered && (
          <div className="absolute bottom-16 right-0 w-80 max-w-[calc(100vw-2rem)] bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden animate-in slide-in-from-bottom-2 duration-200">
            <div className="bg-green-500 p-4 text-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <MessageCircle className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold">House 84 Parks & Garden</h4>
                    <p className="text-sm opacity-90">Typically replies instantly</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsMinimized(true)}
                  className="text-white hover:bg-white/20 rounded-full p-1 transition-colors"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>
            <div className="p-4 bg-white">
              <div className="bg-gray-100 rounded-lg p-3 mb-4">
                <p className="text-gray-800 text-sm">
                  👋 Hello! Welcome to House 84 Parks & Garden Limited.
                </p>
                <p className="text-gray-800 text-sm mt-2">
                  How can we help you experience "Beyond Pleasure" today?
                </p>
              </div>
              <button
                onClick={handleWhatsAppClick}
                className="w-full bg-green-500 text-white py-3 rounded-lg font-medium hover:bg-green-600 transition-colors flex items-center justify-center space-x-2"
              >
                <MessageCircle className="h-4 w-4" />
                <span>Start Chat</span>
              </button>
            </div>
          </div>
        )}

        {/* WhatsApp Button */}
        <button
          onClick={handleWhatsAppClick}
          className="w-16 h-16 bg-green-500 hover:bg-green-600 rounded-full shadow-2xl flex items-center justify-center text-white transition-all duration-300 hover:scale-110 group"
        >
          <MessageCircle className="h-8 w-8 group-hover:scale-110 transition-transform" />
          
          {/* Pulse Animation */}
          <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20" />
          <div className="absolute inset-0 rounded-full bg-green-500 animate-pulse opacity-30" />
        </button>

        {/* Online Indicator */}
        <div className="absolute -top-1 -right-1 w-5 h-5 bg-green-400 rounded-full border-2 border-white flex items-center justify-center">
          <div className="w-2 h-2 bg-green-600 rounded-full animate-pulse" />
        </div>
      </div>
    </div>
  );
};

export default FloatingWhatsApp;