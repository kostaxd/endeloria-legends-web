
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ShoppingBag, Crown, Palette, Sparkles, Shield } from 'lucide-react';

const shopItems = [
  {
    name: 'Cosmetic Pet',
    price: '49 Kč',
    category: 'Kosmetika',
    icon: Sparkles,
    description: 'Roztomilí společníci co tě budou následovat',
    features: ['Žádný gameplay vliv', 'Více než 20 druhů', 'Unikátní animace']
  },
  {
    name: 'Chat Colors',
    price: '29 Kč',
    category: 'Kosmetika',
    icon: Palette,
    description: 'Obarvuj své zprávy v chatu',
    features: ['15+ barev', 'Kombinace barev', 'VIP status']
  },
  {
    name: 'Premium Rank',
    price: '99 Kč',
    category: 'Rank',
    icon: Crown,
    description: 'Měsíční Premium rank s bonusy',
    features: ['Extra příkazy', 'Kit každý den', 'Priorita připojení']
  }
];

const ServerShop = () => {
  return (
    <section className="section-padding bg-gradient-to-b from-midnight-900 to-midnight-800">
      <div className="container-width">
        <div className="text-center mb-16">
          <h2 className="font-fantasy text-4xl md:text-5xl font-bold mb-6 text-white">
            Server Shop
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Podpoř server a získej kosmetické předměty a convenience funkce. 
            <span className="text-emerald-400 font-semibold"> Server je 100% non pay-to-win!</span>
          </p>
          
          {/* Non Pay-to-Win Badge */}
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 text-emerald-400 px-6 py-3 rounded-full border border-emerald-500/30">
            <Shield className="w-5 h-5" />
            <span className="font-semibold">Žádné Pay-to-Win</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {shopItems.map((item, index) => (
            <Card key={index} className="bg-card/50 backdrop-blur-sm border-white/10 hover:border-emerald-500/50 transition-all duration-300 group">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-xl shadow-lg group-hover:shadow-emerald-500/25">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-white">{item.name}</CardTitle>
                    <span className="text-sm text-emerald-400 bg-emerald-500/20 px-2 py-1 rounded">
                      {item.category}
                    </span>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  {item.description}
                </p>
                
                <div className="space-y-2">
                  {item.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full" />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <div className="text-2xl font-bold text-white">{item.price}</div>
                  <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">
                    <ShoppingBag className="mr-2 h-4 w-4" />
                    Koupit
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Shop Info */}
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="bg-gradient-to-br from-emerald-500/10 to-emerald-600/10 border-emerald-500/30">
            <CardHeader>
              <CardTitle className="text-xl text-white flex items-center gap-2">
                <Shield className="w-5 h-5 text-emerald-400" />
                Proč Non Pay-to-Win?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-muted-foreground">
              <p>• Všichni hráči mají stejné šance</p>
              <p>• Skill rozhoduje, ne peněženka</p>
              <p>• Fair play pro celou komunity</p>
              <p>• Pouze kosmetické a convenience itemy</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-blue-500/10 to-blue-600/10 border-blue-500/30">
            <CardHeader>
              <CardTitle className="text-xl text-white flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-blue-400" />
                Proč Nakupovat?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-muted-foreground">
              <p>• Podpoříš provoz serveru</p>
              <p>• Pomůžeš rozvoji nových funkcí</p>
              <p>• Získáš unikátní kosmetiku</p>
              <p>• Udržíš server free-to-play</p>
            </CardContent>
          </Card>
        </div>

        {/* External Shop Link */}
        <div className="mt-12 text-center">
          <Card className="max-w-md mx-auto bg-card/30 border-white/10">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-white mb-2">Kompletní Shop</h3>
              <p className="text-muted-foreground mb-4 text-sm">
                Celý shop najdeš na naší externí stránce s bezpečným platebním systémem.
              </p>
              <Button className="w-full bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700 text-white">
                Otevřít Shop
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ServerShop;
