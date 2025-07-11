
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Play, Users, Sword } from 'lucide-react';

const Hero = () => {
  const [playerCount, setPlayerCount] = useState(247);

  // Simulate live player count updates
  useEffect(() => {
    const interval = setInterval(() => {
      setPlayerCount(prev => prev + Math.floor(Math.random() * 3) - 1);
    }, 30000); // Update every 30 seconds

    return () => clearInterval(interval);
  }, []);

  const scrollToJoin = () => {
    document.getElementById('how-to-join')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=2070&q=80')`,
        }}
      >
        <div className="absolute inset-0 hero-gradient"></div>
      </div>

      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-enchant-400 rounded-full opacity-30 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center container-width">
        <div className="animate-fade-in">
          {/* Server Logo/Title */}
          <h1 className="font-fantasy text-6xl md:text-8xl lg:text-9xl font-bold mb-6 glow-text">
            Endeloria.cz
          </h1>
          
          {/* Tagline */}
          <p className="text-xl md:text-2xl lg:text-3xl text-emerald-300 mb-8 font-medium tracking-wide">
            Where Legends Begin
          </p>

          {/* Live Player Count */}
          <div className="flex items-center justify-center gap-2 mb-12 text-lg text-muted-foreground">
            <Users className="w-5 h-5 text-emerald-400" />
            <span className="text-emerald-400 font-semibold">{playerCount}</span>
            <span>hráčů online</span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-8 py-4 text-lg rounded-xl shadow-lg hover:shadow-emerald-500/25 transition-all duration-300 animate-glow"
              onClick={scrollToJoin}
            >
              <Sword className="mr-2 h-5 w-5" />
              Připoj se
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="border-enchant-500 text-enchant-300 hover:bg-enchant-500/10 font-semibold px-8 py-4 text-lg rounded-xl backdrop-blur-sm transition-all duration-300"
            >
              <Play className="mr-2 h-5 w-5" />
              Sleduj Trailer
            </Button>
          </div>

          {/* Server IP (Quick Access) */}
          <div className="mt-12 text-center">
            <p className="text-sm text-muted-foreground mb-2">Server IP:</p>
            <code className="bg-black/30 text-emerald-400 px-4 py-2 rounded-lg font-mono text-lg backdrop-blur-sm border border-emerald-500/20">
              play.endeloria.cz
            </code>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
