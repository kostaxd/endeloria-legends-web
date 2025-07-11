
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Sword, Users, Trophy, ShoppingBag, MessageCircle } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { name: 'Domů', href: '#', icon: null },
    { name: 'Herní Módy', href: '#game-modes', icon: Sword },
    { name: 'Jak se Připojit', href: '#how-to-join', icon: null },
    { name: 'Komunita', href: '#community', icon: Users },
    { name: 'Hlasování', href: '#vote', icon: Trophy },
    { name: 'Shop', href: '#shop', icon: ShoppingBag },
  ];

  const scrollToSection = (href: string) => {
    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-midnight-950/95 backdrop-blur-md border-b border-white/10' 
        : 'bg-transparent'
    }`}>
      <div className="container-width">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <button
              onClick={() => scrollToSection('#')}
              className="font-fantasy text-2xl font-bold text-white hover:text-emerald-400 transition-colors"
            >
              Endeloria.cz
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navigationItems.map((item, index) => (
              <button
                key={index}
                onClick={() => scrollToSection(item.href)}
                className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-muted-foreground hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200 group"
              >
                {item.icon && (
                  <item.icon className="w-4 h-4 group-hover:text-emerald-400 transition-colors" />
                )}
                <span>{item.name}</span>
              </button>
            ))}
            
            {/* Discord Button */}
            <Button
              variant="outline"
              size="sm"
              className="ml-2 border-enchant-500 text-enchant-300 hover:bg-enchant-500/10"
              onClick={() => window.open('#', '_blank')}
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Discord
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:bg-white/10"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-midnight-950/95 backdrop-blur-md border-t border-white/10 animate-fade-in">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigationItems.map((item, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(item.href)}
                  className="flex items-center gap-3 w-full px-3 py-2 text-base font-medium text-muted-foreground hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200"
                >
                  {item.icon && <item.icon className="w-5 h-5" />}
                  <span>{item.name}</span>
                </button>
              ))}
              
              {/* Mobile Discord Button */}
              <div className="pt-2 border-t border-white/10">
                <Button
                  variant="outline"
                  className="w-full border-enchant-500 text-enchant-300 hover:bg-enchant-500/10"
                  onClick={() => window.open('#', '_blank')}
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Připoj se na Discord
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
