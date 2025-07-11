
import React from 'react';
import Hero from '../components/Hero';
import GameModes from '../components/GameModes';
import HowToJoin from '../components/HowToJoin';
import Community from '../components/Community';
import VoteRewards from '../components/VoteRewards';
import ServerShop from '../components/ServerShop';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <GameModes />
      <HowToJoin />
      <Community />
      <VoteRewards />
      <ServerShop />
      <Footer />
    </div>
  );
};

export default Index;
