
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Sword, Globe, Zap, Users, Crown, Trophy } from 'lucide-react';

const gameModes = [
  {
    id: 'adventure-survival',
    title: 'Adventure Survival',
    description: 'Hardcore přežívání s unikátními questy, vlastními moby a magickými předměty. Prozkoumej tajemné dungeony a získej legendární výbavu.',
    icon: Sword,
    features: ['Custom Mobs', 'Quest System', 'Legendární Itemy', 'Dungeony'],
    gradient: 'from-emerald-600 to-emerald-800',
    bgImage: 'https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'earth-wild',
    title: 'Earth Wild',
    description: 'Skutečná mapa Země s městy, ekonomií a diplomacií. Vybuduj své impérium, obchoduj s ostatními národy a ovládni svět.',
    icon: Globe,
    features: ['Reálná Mapa', 'Ekonomika', 'Města & Národy', 'Diplomacie'],
    gradient: 'from-blue-600 to-blue-800',
    bgImage: 'https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'boxfight-arena',
    title: 'Boxfight Arena',
    description: 'Rychlé, skill-based PvP duely a turnaje. Prokáž své bojové schopnosti v aréně a stoupej v žebříčku nejlepších bojovníků.',
    icon: Zap,
    features: ['Rychlé Zápasy', 'Ranking System', 'Turnaje', 'Skill-based'],
    gradient: 'from-red-600 to-red-800',
    bgImage: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=800&q=80'
  }
];

const GameModes = () => {
  return (
    <section className="section-padding bg-gradient-to-b from-midnight-900 to-midnight-800">
      <div className="container-width">
        <div className="text-center mb-16">
          <h2 className="font-fantasy text-4xl md:text-5xl font-bold mb-6 text-white">
            Herní Módy
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Objevte tři unikátní světy plné dobrodružství, každý s vlastním stylem hraní a komunitou
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {gameModes.map((mode, index) => (
            <Card 
              key={mode.id}
              className="group relative overflow-hidden bg-card/50 backdrop-blur-sm border-white/10 hover:border-emerald-500/50 transition-all duration-500 hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center opacity-20 group-hover:opacity-30 transition-opacity duration-500"
                style={{ backgroundImage: `url('${mode.bgImage}')` }}
              />
              
              {/* Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${mode.gradient} opacity-10 group-hover:opacity-20 transition-opacity duration-500`} />
              
              <CardHeader className="relative z-10">
                <div className="flex items-center gap-4 mb-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${mode.gradient} shadow-lg`}>
                    <mode.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-fantasy text-white group-hover:text-emerald-300 transition-colors">
                    {mode.title}
                  </CardTitle>
                </div>
                <CardDescription className="text-muted-foreground text-base leading-relaxed">
                  {mode.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="relative z-10">
                <div className="grid grid-cols-2 gap-2">
                  {mode.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-emerald-300">
                      <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full" />
                      {feature}
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 flex items-center justify-between text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    <span>{Math.floor(Math.random() * 80) + 20} online</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Trophy className="w-4 h-4" />
                    <span>Top Rated</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-16 border-t border-white/10">
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">3</div>
            <div className="text-sm text-muted-foreground">Herní Módy</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-emerald-400 mb-2">24/7</div>
            <div className="text-sm text-muted-foreground">Online</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">1000+</div>
            <div className="text-sm text-muted-foreground">Hráčů</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-enchant-400 mb-2">0%</div>
            <div className="text-sm text-muted-foreground">Pay-to-Win</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GameModes;
