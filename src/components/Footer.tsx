
import React from 'react';
import { Separator } from '@/components/ui/separator';
import { MessageCircle, Youtube, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: MessageCircle, name: 'Discord', url: '#' },
    { icon: Youtube, name: 'YouTube', url: '#' },
    { icon: Instagram, name: 'Instagram', url: '#' },
    { icon: Twitter, name: 'Twitter', url: '#' }
  ];

  const navLinks = [
    { name: 'Domů', href: '#' },
    { name: 'Herní Módy', href: '#game-modes' },
    { name: 'Jak se Připojit', href: '#how-to-join' },
    { name: 'Komunita', href: '#community' },
    { name: 'Hlasování', href: '#vote' },
    { name: 'Shop', href: '#shop' }
  ];

  return (
    <footer className="bg-midnight-950 border-t border-white/10">
      <div className="container-width">
        {/* Main Footer Content */}
        <div className="py-12 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <h3 className="font-fantasy text-3xl font-bold text-white mb-4">
              Endeloria.cz
            </h3>
            <p className="text-muted-foreground mb-6 max-w-md">
              Nejlepší český Minecraft server s unikátními herními módy, 
              aktivní komunitou a fair-play přístupem. Připoj se a začni své dobrodružství!
            </p>
            
            {/* Server IP */}
            <div className="bg-black/30 p-4 rounded-lg border border-emerald-500/20 mb-6">
              <p className="text-sm text-muted-foreground mb-1">Server IP:</p>
              <code className="text-lg font-mono text-emerald-400">play.endeloria.cz</code>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className="p-2 bg-white/5 hover:bg-white/10 rounded-lg transition-colors group"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-white transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Rychlá Navigace</h4>
            <ul className="space-y-2">
              {navLinks.slice(0, 3).map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-muted-foreground hover:text-emerald-400 transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* More Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Další Odkazy</h4>
            <ul className="space-y-2">
              {navLinks.slice(3).map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-muted-foreground hover:text-emerald-400 transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="bg-white/10" />

        {/* Bottom Footer */}
        <div className="py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-muted-foreground">
            © {currentYear} Endeloria.cz - Všechna práva vyhrazena
          </div>
          
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-muted-foreground hover:text-white transition-colors">
              Pravidla
            </a>
            <a href="#" className="text-muted-foreground hover:text-white transition-colors">
              Podpora
            </a>
            <a href="#" className="text-muted-foreground hover:text-white transition-colors">
              Soukromí
            </a>
          </div>
        </div>

        {/* Server Status */}
        <div className="pb-6">
          <div className="flex items-center justify-center gap-2 text-sm">
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
            <span className="text-muted-foreground">Server Status: </span>
            <span className="text-emerald-400 font-medium">Online</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
