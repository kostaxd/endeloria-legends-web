
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MessageCircle, Youtube, Users, Heart } from 'lucide-react';

const Community = () => {
  return (
    <section className="section-padding bg-gradient-to-b from-midnight-900 to-midnight-800">
      <div className="container-width">
        <div className="text-center mb-16">
          <h2 className="font-fantasy text-4xl md:text-5xl font-bold mb-6 text-white">
            Naše Komunita
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Připoj se k tisícům hráčů z celé České republiky a Slovenska. Najdi nové přátele a sdílej své dobrodružství!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Discord Section */}
          <Card className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 border-blue-500/30 backdrop-blur-sm">
            <CardHeader>
              <div className="flex items-center gap-4">
                <div className="p-3 bg-blue-500/20 rounded-xl">
                  <MessageCircle className="w-8 h-8 text-blue-400" />
                </div>
                <div>
                  <CardTitle className="text-2xl text-white">Discord Server</CardTitle>
                  <p className="text-blue-300">Aktivní komunita 24/7</p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Připoj se k našemu Discord serveru pro nejnovější informace, help od adminů, 
                organizované eventy a spoustu zábavy s ostatními hráči!
              </p>
              
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-blue-400" />
                  <span className="text-blue-300">2,500+ členů</span>
                </div>
                <div className="flex items-center gap-2">
                  <Heart className="w-4 h-4 text-red-400" />
                  <span className="text-red-300">Aktivní denně</span>
                </div>
              </div>
              
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                <MessageCircle className="mr-2 h-4 w-4" />
                Připojit na Discord
              </Button>
            </CardContent>
          </Card>

          {/* YouTube Section */}
          <Card className="bg-gradient-to-br from-red-600/20 to-orange-600/20 border-red-500/30 backdrop-blur-sm">
            <CardHeader>
              <div className="flex items-center gap-4">
                <div className="p-3 bg-red-500/20 rounded-xl">
                  <Youtube className="w-8 h-8 text-red-400" />
                </div>
                <div>
                  <CardTitle className="text-2xl text-white">YouTube & TikTok</CardTitle>
                  <p className="text-red-300">Nejlepší momenty ze serveru</p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Sleduj naše YouTube Shorts a TikTok videa s nejlepšími momenty, 
                tutoriály a záběry z eventů na serveru!
              </p>
              
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <Youtube className="w-4 h-4 text-red-400" />
                  <span className="text-red-300">50+ videí</span>
                </div>
                <div className="flex items-center gap-2">
                  <Heart className="w-4 h-4 text-pink-400" />
                  <span className="text-pink-300">Týdenní obsah</span>
                </div>
              </div>
              
              <div className="flex gap-2">
                <Button variant="outline" className="flex-1 border-red-500/50 text-red-400 hover:bg-red-500/10">
                  YouTube
                </Button>
                <Button variant="outline" className="flex-1 border-pink-500/50 text-pink-400 hover:bg-pink-500/10">
                  TikTok
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Community Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-card/30 rounded-xl border border-white/10">
            <div className="text-3xl font-bold text-emerald-400 mb-2">2,500+</div>
            <div className="text-sm text-muted-foreground">Discord Členů</div>
          </div>
          <div className="text-center p-6 bg-card/30 rounded-xl border border-white/10">
            <div className="text-3xl font-bold text-blue-400 mb-2">500+</div>
            <div className="text-sm text-muted-foreground">Denně Aktivních</div>
          </div>
          <div className="text-center p-6 bg-card/30 rounded-xl border border-white/10">
            <div className="text-3xl font-bold text-red-400 mb-2">50K+</div>
            <div className="text-sm text-muted-foreground">YouTube Views</div>
          </div>
          <div className="text-center p-6 bg-card/30 rounded-xl border border-white/10">
            <div className="text-3xl font-bold text-enchant-400 mb-2">24/7</div>
            <div className="text-sm text-muted-foreground">Podpora</div>
          </div>
        </div>

        {/* Player Testimonials */}
        <div className="mt-16">
          <h3 className="text-2xl font-fantasy text-center text-white mb-8">Co říkají hráči</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "CraftMaster_CZ",
                text: "Nejlepší český server! Skvělá komunita a žádné pay-to-win. Adventure Survival je úžasný!",
                mode: "Adventure Survival"
              },
              {
                name: "BuilderPro99",
                text: "Earth Wild je něco neuvěřitelného. Postavil jsem Prahu a je to mega zábava s kamarády!",
                mode: "Earth Wild"
              },
              {
                name: "PvPWarrior",
                text: "Boxfight Arena je čistá skill. Žádné cheaty, fair play. Konečně pořádné PvP!",
                mode: "Boxfight Arena"
              }
            ].map((testimonial, index) => (
              <Card key={index} className="bg-card/30 border-white/10 backdrop-blur-sm">
                <CardContent className="p-6">
                  <p className="text-muted-foreground mb-4 italic">
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center justify-between">
                    <p className="text-white font-semibold">{testimonial.name}</p>
                    <span className="text-xs text-emerald-400 bg-emerald-500/20 px-2 py-1 rounded">
                      {testimonial.mode}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;
