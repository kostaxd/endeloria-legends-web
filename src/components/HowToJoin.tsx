
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download, Server, Play, Copy, Check } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const steps = [
  {
    number: 1,
    title: 'Spusť Minecraft',
    description: 'Spusť Minecraft Java Edition (verze 1.20.x)',
    icon: Download,
    details: 'Potřebuješ Minecraft Java Edition. Pocket Edition (mobil) není podporován.'
  },
  {
    number: 2,
    title: 'Přidej Server',
    description: 'V multiplayer přidej server IP: play.endeloria.cz',
    icon: Server,
    details: 'Klikni na "Add Server" a zadej naši IP adresu.'
  },
  {
    number: 3,
    title: 'Začni Hrát!',
    description: 'Připoj se a začni své dobrodružství v Endelorii',
    icon: Play,
    details: 'Vítej v komunitě! Nezapomeň si přečíst pravidla na spawnu.'
  }
];

const HowToJoin = () => {
  const [copiedIp, setCopiedIp] = useState(false);
  const { toast } = useToast();

  const copyServerIp = async () => {
    try {
      await navigator.clipboard.writeText('play.endeloria.cz');
      setCopiedIp(true);
      toast({
        title: "IP adresa zkopírována!",
        description: "Server IP byla zkopírována do schránky.",
      });
      setTimeout(() => setCopiedIp(false), 2000);
    } catch (err) {
      toast({
        title: "Chyba",
        description: "Nepodařilo se zkopírovat IP adresu.",
        variant: "destructive",
      });
    }
  };

  return (
    <section id="how-to-join" className="section-padding bg-gradient-to-b from-midnight-800 to-midnight-900">
      <div className="container-width">
        <div className="text-center mb-16">
          <h2 className="font-fantasy text-4xl md:text-5xl font-bold mb-6 text-white">
            Jak se Připojit
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Připojení na server je snadné! Stačí tři jednoduché kroky a můžeš začít svoje dobrodružství.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, index) => (
            <Card 
              key={step.number}
              className="relative bg-card/50 backdrop-blur-sm border-white/10 hover:border-emerald-500/50 transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Step Number */}
              <div className="absolute -top-4 left-6 w-8 h-8 bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">
                {step.number}
              </div>
              
              <CardHeader className="pt-8">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-emerald-500/20 rounded-lg">
                    <step.icon className="w-5 h-5 text-emerald-400" />
                  </div>
                  <CardTitle className="text-xl text-white">
                    {step.title}
                  </CardTitle>
                </div>
              </CardHeader>
              
              <CardContent>
                <p className="text-muted-foreground mb-3">
                  {step.description}
                </p>
                <p className="text-sm text-muted-foreground/80">
                  {step.details}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Server Information Card */}
        <Card className="bg-gradient-to-r from-emerald-500/10 to-enchant-500/10 border-emerald-500/30 max-w-2xl mx-auto">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-fantasy text-white mb-2">
              Server Informace
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-black/20 rounded-lg">
              <div>
                <p className="text-sm text-muted-foreground">Server IP:</p>
                <code className="text-lg font-mono text-emerald-400">play.endeloria.cz</code>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={copyServerIp}
                className="border-emerald-500/50 text-emerald-400 hover:bg-emerald-500/10"
              >
                {copiedIp ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              </Button>
            </div>
            
            <div className="grid grid-cols-2 gap-4 text-center">
              <div>
                <p className="text-sm text-muted-foreground">Verze</p>
                <p className="text-white font-semibold">1.20.x</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Typ</p>
                <p className="text-white font-semibold">Java Edition</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quick Start Tips */}
        <div className="mt-12 text-center">
          <h3 className="text-xl font-semibold text-white mb-4">Tipy pro Začátečníky</h3>
          <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            <div className="p-4 bg-card/30 rounded-lg border border-white/10">
              <p className="text-sm text-muted-foreground">
                💡 Začni na <span className="text-emerald-400">Adventure Survival</span> pro nejlepší zážitek
              </p>
            </div>
            <div className="p-4 bg-card/30 rounded-lg border border-white/10">
              <p className="text-sm text-muted-foreground">
                🏠 Postav si dům rychle - noci jsou nebezpečné!
              </p>
            </div>
            <div className="p-4 bg-card/30 rounded-lg border border-white/10">
              <p className="text-sm text-muted-foreground">
                👥 Připoj se na <span className="text-enchant-400">Discord</span> pro help od komunity
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToJoin;
