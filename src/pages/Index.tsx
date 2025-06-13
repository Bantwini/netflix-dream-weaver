
import { useState, useEffect } from "react";
import { Play, Info, Search, Bell, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ContentRow } from "@/components/ContentRow";
import { HeroBanner } from "@/components/HeroBanner";
import { Navigation } from "@/components/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Navigation />
      <HeroBanner />
      
      <div className="relative z-10 -mt-32 space-y-12 pb-20">
        <ContentRow 
          title="Trending Now" 
          content={trendingContent}
        />
        <ContentRow 
          title="Popular on Netflix" 
          content={popularContent}
        />
        <ContentRow 
          title="New Releases" 
          content={newReleases}
        />
        <ContentRow 
          title="Action Movies" 
          content={actionMovies}
        />
      </div>
    </div>
  );
};

const trendingContent = [
  { id: 1, title: "Stranger Things", image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=600&fit=crop", type: "series" },
  { id: 2, title: "The Matrix", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=600&fit=crop", type: "movie" },
  { id: 3, title: "Breaking Bad", image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=600&fit=crop", type: "series" },
  { id: 4, title: "Inception", image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=600&fit=crop", type: "movie" },
  { id: 5, title: "The Crown", image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=400&h=600&fit=crop", type: "series" },
];

const popularContent = [
  { id: 6, title: "Squid Game", image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=600&fit=crop", type: "series" },
  { id: 7, title: "Money Heist", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=600&fit=crop", type: "series" },
  { id: 8, title: "The Witcher", image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=600&fit=crop", type: "series" },
  { id: 9, title: "Ozark", image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=600&fit=crop", type: "series" },
  { id: 10, title: "Narcos", image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=400&h=600&fit=crop", type: "series" },
];

const newReleases = [
  { id: 11, title: "Wednesday", image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=600&fit=crop", type: "series" },
  { id: 12, title: "Glass Onion", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=600&fit=crop", type: "movie" },
  { id: 13, title: "Enola Holmes", image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=600&fit=crop", type: "movie" },
  { id: 14, title: "The Umbrella Academy", image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=600&fit=crop", type: "series" },
  { id: 15, title: "Bridgerton", image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=400&h=600&fit=crop", type: "series" },
];

const actionMovies = [
  { id: 16, title: "Red Notice", image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=600&fit=crop", type: "movie" },
  { id: 17, title: "6 Underground", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=600&fit=crop", type: "movie" },
  { id: 18, title: "Extraction", image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=600&fit=crop", type: "movie" },
  { id: 19, title: "The Old Guard", image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=600&fit=crop", type: "movie" },
  { id: 20, title: "Army of the Dead", image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=400&h=600&fit=crop", type: "movie" },
];

export default Index;
