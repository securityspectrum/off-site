import React from "react";
import CustomLink from "../components/CustomLink";
import AnimatedImages from "@/components/ProductAnimatedImages";
import HeroSection from "@/components/HeroGetStarted";
import Hero from "@/components/Hero";
import ParallaxContainer from "../components/ParallaxContainer";

const Home: React.FC = () => {
  return (
    <ParallaxContainer>
      <div className="flex flex-col min-h-screen bg-gray-900">
        <Hero />
        <AnimatedImages />
        <HeroSection />
      </div>
    </ParallaxContainer>
  );
};

export default Home;
