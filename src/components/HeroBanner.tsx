
import { useState, useEffect } from "react";
import { Play, Info, Volume2, VolumeX } from "lucide-react";
import { Button } from "@/components/ui/button";

export const HeroBanner = () => {
  const [isMuted, setIsMuted] = useState(true);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Video/Image */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1920&h=1080&fit=crop"
          alt="Featured Content"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 flex items-center h-full px-4 md:px-16">
        <div className="max-w-2xl space-y-6">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight animate-fade-in">
            Stranger Things
          </h1>
          
          <p className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-lg animate-fade-in">
            When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces, and one strange little girl.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in">
            <Button 
              size="lg" 
              className="bg-white text-black hover:bg-gray-200 font-semibold px-8 py-3 rounded-md transition-all hover:scale-105"
            >
              <Play className="mr-2 h-5 w-5 fill-current" />
              Play
            </Button>
            
            <Button 
              size="lg" 
              variant="secondary"
              className="bg-gray-500/70 text-white hover:bg-gray-500/90 font-semibold px-8 py-3 rounded-md backdrop-blur-sm transition-all hover:scale-105"
            >
              <Info className="mr-2 h-5 w-5" />
              More Info
            </Button>
          </div>
          
          <div className="flex items-center space-x-4 text-sm text-gray-300">
            <span className="bg-red-600 px-2 py-1 rounded text-white font-semibold">TV-14</span>
            <span>2016</span>
            <span>4 Seasons</span>
            <span className="border border-gray-500 px-2 py-1 rounded">HD</span>
          </div>
        </div>
      </div>
      
      {/* Audio Control */}
      <div className="absolute bottom-24 right-4 md:right-16 z-20">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsMuted(!isMuted)}
          className="rounded-full border-2 border-white/50 bg-black/30 backdrop-blur-sm hover:bg-black/50 text-white"
        >
          {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
        </Button>
      </div>
    </div>
  );
};
