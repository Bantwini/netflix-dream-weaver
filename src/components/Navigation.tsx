
import { useState } from "react";
import { Search, Bell, User, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useState(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/90 backdrop-blur-sm' : 'bg-gradient-to-b from-black/70 to-transparent'
    }`}>
      <div className="flex items-center justify-between px-4 md:px-16 py-4">
        <div className="flex items-center space-x-8">
          <div className="text-red-600 text-2xl md:text-3xl font-bold">
            NETFLIX
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            <a href="#" className="text-white hover:text-gray-300 transition-colors">Home</a>
            <a href="#" className="text-white hover:text-gray-300 transition-colors">TV Shows</a>
            <a href="#" className="text-white hover:text-gray-300 transition-colors">Movies</a>
            <a href="#" className="text-white hover:text-gray-300 transition-colors">New & Popular</a>
            <a href="#" className="text-white hover:text-gray-300 transition-colors">My List</a>
          </div>
          
          <div className="md:hidden">
            <Button variant="ghost" size="sm" className="text-white">
              Browse <ChevronDown className="ml-1 h-4 w-4" />
            </Button>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" className="text-white hover:text-gray-300">
            <Search className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-white hover:text-gray-300">
            <Bell className="h-5 w-5" />
          </Button>
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-red-600 rounded flex items-center justify-center">
              <User className="h-5 w-5 text-white" />
            </div>
            <ChevronDown className="h-4 w-4 text-white hidden md:block" />
          </div>
        </div>
      </div>
    </nav>
  );
};
