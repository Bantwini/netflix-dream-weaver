
import { useState } from "react";
import { ChevronLeft, ChevronRight, Play, Plus, ThumbsUp, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ContentItem {
  id: number;
  title: string;
  image: string;
  type: 'movie' | 'series';
}

interface ContentRowProps {
  title: string;
  content: ContentItem[];
}

export const ContentRow = ({ title, content }: ContentRowProps) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  const scroll = (direction: 'left' | 'right') => {
    const container = document.getElementById(`scroll-${title.replace(/\s+/g, '')}`);
    if (container) {
      const scrollAmount = 800;
      const newPosition = direction === 'left' 
        ? Math.max(0, scrollPosition - scrollAmount)
        : scrollPosition + scrollAmount;
      
      container.scrollTo({ left: newPosition, behavior: 'smooth' });
      setScrollPosition(newPosition);
    }
  };

  return (
    <div className="px-4 md:px-16 group">
      <h2 className="text-white text-xl md:text-2xl font-semibold mb-4">{title}</h2>
      
      <div className="relative">
        {/* Left Arrow */}
        <Button
          variant="ghost"
          size="icon"
          onClick={() => scroll('left')}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-black/80 hover:bg-black text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>
        
        {/* Content Container */}
        <div 
          id={`scroll-${title.replace(/\s+/g, '')}`}
          className="flex space-x-2 overflow-x-scroll scrollbar-hide scroll-smooth"
        >
          {content.map((item) => (
            <div
              key={item.id}
              className="flex-none w-48 md:w-64 group/item cursor-pointer"
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <div className="relative overflow-hidden rounded-md transition-all duration-300 group-hover/item:scale-105 group-hover/item:z-10">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-32 md:h-36 object-cover"
                />
                
                {/* Hover Overlay */}
                {hoveredItem === item.id && (
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent animate-fade-in">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h3 className="text-white font-semibold text-sm mb-2">{item.title}</h3>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex space-x-2">
                          <Button
                            size="sm"
                            className="rounded-full bg-white text-black hover:bg-gray-200 p-2 h-8 w-8"
                          >
                            <Play className="h-3 w-3 fill-current" />
                          </Button>
                          <Button
                            size="sm"
                            variant="ghost"
                            className="rounded-full border border-gray-400 text-white hover:border-white p-2 h-8 w-8"
                          >
                            <Plus className="h-3 w-3" />
                          </Button>
                          <Button
                            size="sm"
                            variant="ghost"
                            className="rounded-full border border-gray-400 text-white hover:border-white p-2 h-8 w-8"
                          >
                            <ThumbsUp className="h-3 w-3" />
                          </Button>
                        </div>
                        
                        <Button
                          size="sm"
                          variant="ghost"
                          className="rounded-full border border-gray-400 text-white hover:border-white p-2 h-8 w-8"
                        >
                          <ChevronDown className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        
        {/* Right Arrow */}
        <Button
          variant="ghost"
          size="icon"
          onClick={() => scroll('right')}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-black/80 hover:bg-black text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <ChevronRight className="h-6 w-6" />
        </Button>
      </div>
    </div>
  );
};
