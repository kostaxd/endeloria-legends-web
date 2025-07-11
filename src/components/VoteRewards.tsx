
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star, Gift, Trophy, Coins } from 'lucide-react';

const voteLinks = [
  {
    name: 'MinecraftServers.org',
    url: '#',
    reward: '5 Vote Coins',
    cooldown: '24h'
  },
  {
    name: 'TopG.org',
    url: '#',
    reward: '3 Vote Coins',
    cooldown: '12h'
  },
  {
    name: 'Minecraft-mp.com',
    url: '#',
    reward: '4 Vote Coins',
    cooldown: '24h'
  }
];

const rewards = [
  {
    name: 'Vote Crate',
    cost: '10 Vote Coins',
    icon: Gift,
    description: 'Obsahuje rare itemy, peníze a bonusy'
  },
  {
    name: 'Premium Rank (7 dní)',
    cost: '50 Vote Coins',
    icon: Trophy,
    description: 'Speciální příkazy a výhody na 7 dní'
  },
  {
    name: 'In-game Money',
    cost: '1 Vote Coin',
    icon: Coins,
    description: '1000$ do herní ekonomiky'
  }
];

const VoteRewards = () => {
  return (
    <section className="section-padding bg-gradient-to-b from-midnight-800 to-midnight-900">
      <div className="container-width">
        <div className="text-center mb-16">
          <h2 className="font-fantasy text-4xl md:text-5xl font-bold mb-6 text-white">
            Hlasuj & Získej Odměny
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Podpoř server hlasováním a získej za to skvělé odměny! Čím více hlasů, tím lepší server pro všechny.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Vote Links */}
          <div>
            <h3 className="text-2xl font-fantasy text-white mb-6 flex items-center gap-2">
              <Star className="w-6 h-6 text-yellow-400" />
              Hlasovací Stránky
            </h3>
            
            <div className="space-y-4">
              {voteLinks.map((link, index) => (
                <Card key={index} className="bg-card/50 backdrop-blur-sm border-white/10 hover:border-yellow-500/50 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-1">{link.name}</h4>
                        <p className="text-sm text-muted-foreground">Cooldown: {link.cooldown}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-yellow-400 font-semibold mb-2">{link.reward}</div>
                        <Button 
                          size="sm" 
                          className="bg-yellow-600 hover:bg-yellow-700 text-white"
                        >
                          Hlasovat
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-6 p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Star className="w-5 h-5 text-yellow-400" />
                <span className="text-yellow-400 font-semibold">Bonus Tip!</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Hlasuj na všech stránkách každý den a získej až <span className="text-yellow-400">12 Vote Coins denně</span>!
              </p>
            </div>
          </div>

          {/* Rewards Shop */}
          <div>
            <h3 className="text-2xl font-fantasy text-white mb-6 flex items-center gap-2">
              <Gift className="w-6 h-6 text-emerald-400" />
              Vote Odměny
            </h3>

            <div className="space-y-4">
              {rewards.map((reward, index) => (
                <Card key={index} className="bg-card/50 backdrop-blur-sm border-white/10">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-emerald-500/20 rounded-lg">
                        <reward.icon className="w-6 h-6 text-emerald-400" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="text-lg font-semibold text-white">{reward.name}</h4>
                          <span className="text-emerald-400 font-semibold">{reward.cost}</span>
                        </div>
                        <p className="text-sm text-muted-foreground">{reward.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-6 p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Gift className="w-5 h-5 text-emerald-400" />
                <span className="text-emerald-400 font-semibold">Jak to Funguje</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Použij příkaz <code className="bg-black/30 px-1 rounded text-emerald-400">/vote shop</code> ve hře 
                pro nákup odměn za Vote Coins!
              </p>
            </div>
          </div>
        </div>

        {/* Vote Statistics */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-card/30 rounded-xl border border-white/10">
            <div className="text-3xl font-bold text-yellow-400 mb-2">15,420</div>
            <div className="text-sm text-muted-foreground">Hlasů Tento Měsíc</div>
          </div>
          <div className="text-center p-6 bg-card/30 rounded-xl border border-white/10">
            <div className="text-3xl font-bold text-emerald-400 mb-2">#7</div>
            <div className="text-sm text-muted-foreground">Pozice v Žebříčku</div>
          </div>
          <div className="text-center p-6 bg-card/30 rounded-xl border border-white/10">
            <div className="text-3xl font-bold text-blue-400 mb-2">892</div>
            <div className="text-sm text-muted-foreground">Hráčů Hlasovalo</div>
          </div>
          <div className="text-center p-6 bg-card/30 rounded-xl border border-white/10">
            <div className="text-3xl font-bold text-enchant-400 mb-2">12</div>
            <div className="text-sm text-muted-foreground">Max Coins/Den</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VoteRewards;
